"""
Detects which live pages changed since the last run and notifies search engines.

- Google: resubmits the sitemap through the Search Console API (service account
  JSON path in GOOGLE_SA_KEY, never committed).
- Google Indexing API: notifies Google of each new or changed URL (URL_UPDATED).
  Google officially supports this API only for job and livestream pages, so it
  is a hint, not a guarantee. Quota: 200 URLs a day.
- IndexNow (Bing, Yandex, Seznam, Naver...): submits only new or changed URLs.

State (a content hash per URL) is kept in seo/monitoring/url-hashes.json.
Usage: GOOGLE_SA_KEY=/path/key.json python3 seo/tools/submit_changes.py
"""
import base64, hashlib, json, os, re, time, urllib.parse, urllib.request

SITE = "https://www.roofingsystems.co"
KEY = "68188169bd98ee89bff6d774966f7998"
STATE = os.path.join(os.path.dirname(__file__), "..", "monitoring", "url-hashes.json")


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 roofingsystems-seo-monitor"})
    return urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "replace")


def page_hash(html):
    # Ignore build-specific script chunks so only real content changes count
    main = re.sub(r"<script.*?</script>", "", html, flags=re.S)
    keep = " ".join(re.findall(r"<title>.*?</title>|<meta name=\"description\"[^>]*>|<main.*?</main>", main, flags=re.S))
    return hashlib.sha256((keep or main).encode()).hexdigest()


def google_token(path, scope="https://www.googleapis.com/auth/webmasters"):
    from cryptography.hazmat.primitives import hashes, serialization
    from cryptography.hazmat.primitives.asymmetric import padding
    sa = json.load(open(path))
    b64 = lambda b: base64.urlsafe_b64encode(b).rstrip(b"=")
    now = int(time.time())
    head = b64(json.dumps({"alg": "RS256", "typ": "JWT"}).encode())
    claim = b64(json.dumps({"iss": sa["client_email"], "scope": scope, "aud": sa["token_uri"], "iat": now, "exp": now + 3600}).encode())
    sig = b64(serialization.load_pem_private_key(sa["private_key"].encode(), None).sign(head + b"." + claim, padding.PKCS1v15(), hashes.SHA256()))
    body = ("grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=" + (head + b"." + claim + b"." + sig).decode()).encode()
    return json.load(urllib.request.urlopen(urllib.request.Request(sa["token_uri"], body)))["access_token"]


def main():
    urls = re.findall(r"<loc>(.*?)</loc>", get(SITE + "/sitemap.xml"))
    old = json.load(open(STATE)) if os.path.exists(STATE) else {}
    new, changed = {}, []
    for u in urls:
        try:
            h = page_hash(get(u))
        except Exception as e:
            print("fetch failed", u, e)
            continue
        new[u] = h
        if old.get(u) != h:
            changed.append(u)
    print(f"{len(urls)} sitemap URLs, {len(changed)} new or changed")
    if not changed:
        return
    body = json.dumps({"host": "www.roofingsystems.co", "key": KEY, "keyLocation": f"{SITE}/{KEY}.txt", "urlList": changed}).encode()
    try:
        print("IndexNow:", urllib.request.urlopen(urllib.request.Request("https://api.indexnow.org/indexnow", body, {"Content-Type": "application/json"})).status)
    except Exception as e:
        print("IndexNow failed:", e)
    key_path = os.environ.get("GOOGLE_SA_KEY")
    if key_path and os.path.exists(key_path):
        site = urllib.parse.quote(SITE + "/", safe="")
        sm = urllib.parse.quote(SITE + "/sitemap.xml", safe="")
        req = urllib.request.Request(f"https://www.googleapis.com/webmasters/v3/sites/{site}/sitemaps/{sm}", method="PUT", headers={"Authorization": "Bearer " + google_token(key_path)})
        print("Google sitemap resubmit:", urllib.request.urlopen(req).status)
        itok = google_token(key_path, "https://www.googleapis.com/auth/indexing")
        ok = 0
        for u in changed[:200]:
            r = urllib.request.Request("https://indexing.googleapis.com/v3/urlNotifications:publish", json.dumps({"url": u, "type": "URL_UPDATED"}).encode(), {"Authorization": "Bearer " + itok, "Content-Type": "application/json"})
            try:
                urllib.request.urlopen(r); ok += 1
            except Exception as e:
                print("Indexing API failed", u, e)
        print(f"Google Indexing API: {ok}/{min(len(changed), 200)} accepted")
    else:
        print("Google sitemap resubmit skipped: GOOGLE_SA_KEY not set")
    json.dump(new, open(STATE, "w"), indent=0)
    for u in changed:
        print("  changed:", u)


if __name__ == "__main__":
    main()
