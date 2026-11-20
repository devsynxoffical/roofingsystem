# Moving roofingsystems.co to Hostinger

The site is now a static export: plain HTML, CSS, JS, images and videos, plus one small PHP file. It runs on every Hostinger plan (Single, Premium, Business, Cloud). Nothing changes for SEO: same domain, same URLs, same pages.

## Recommended: deploy with Git (automatic updates)

Every push to `main` runs the GitHub Action **Deploy to Hostinger** (`.github/workflows/hostinger.yml`). It builds the site and publishes the finished files to the **`hostinger`** branch. Hostinger pulls that branch into `public_html`.

### One-time setup in hPanel

1. **hPanel → Websites → roofingsystems.co → Advanced → GIT.**
2. Make sure `public_html` is **empty** first (delete `default.php` or `index.php` in File Manager). Hostinger only deploys into an empty folder.
3. Under **Create a New Repository**, enter:
   - **Repository:** `https://github.com/devsynxoffical/roofingsystem.git`
   - **Branch:** `hostinger`
   - **Directory:** leave empty (this deploys into `public_html`)
4. Click **Create**, then click **Deploy**. The full site (about 230 MB) is copied into `public_html`.
5. **Automatic deploys:** in the same GIT screen, open **Auto Deployment** and copy the **Webhook URL**. Then either:
   - send it to Claude, who adds it as the `HOSTINGER_WEBHOOK` secret on GitHub, so each build tells Hostinger to pull straight away; or
   - add it yourself in GitHub: **repo → Settings → Secrets and variables → Actions → New repository secret**, name `HOSTINGER_WEBHOOK`.
6. Then continue with **Step 3: Preview**, **Step 4: DNS** and **Step 5: SSL** below.

After this, every update is just a push to `main`: GitHub builds it and Hostinger pulls it. No manual uploads.

## Alternative: upload the files manually

### Files to upload

Either the single ZIP:

- `roofingsystems-hostinger.zip` (218 MB)

or, if File Manager rejects a file that large, the 4 parts (extract all of them into the same folder):

- `part-1-site.zip` (7 MB): all pages, code, `.htaccess`, sitemap, robots.txt
- `part-2-media.zip` (71 MB): training videos
- `part-3-case-study-videos.zip` (58 MB): case study videos and images
- `part-4-images.zip` (82 MB): portfolio images

### Step 1: Add the website in Hostinger

1. Log in to **hPanel**, then go to **Websites → Add website** (or select roofingsystems.co if it is already there).
2. Choose **Empty PHP/HTML website** (not WordPress) and use the domain **roofingsystems.co**.

### Step 2: Upload the files

1. Open **Websites → roofingsystems.co → File Manager → public_html**.
2. Delete the default files that Hostinger created (for example `default.php` or `index.php`).
3. Click **Upload**, choose the ZIP (or the 4 parts), and wait for the upload to finish.
4. Right-click each ZIP and choose **Extract**, extracting **into `public_html` itself** (not into a new subfolder).
5. Check that `index.html`, `.htaccess`, `sitemap.xml` and the `_next` folder sit **directly inside `public_html`**. If you can't see `.htaccess`, turn on "Show hidden files" in File Manager settings.
6. Delete the ZIP files from `public_html` after extracting.

## Step 3: Preview before switching

In hPanel, use **Preview website** (temporary URL). The site should load with all pages, images and videos. The `.htaccess` only forces HTTPS and www on the real domain, so the preview URL works too.

## Step 4: Point the domain to Hostinger

Do this where the domain's DNS is managed (Hostinger, GoDaddy, Namecheap, or Vercel if the domain was bought there).

**Option A, easiest:** change the nameservers to the two Hostinger nameservers shown in hPanel (for example `ns1.dns-parking.com` and `ns2.dns-parking.com`).

**Option B, keep the current DNS provider:**

1. Delete the Vercel records: the A record `76.76.21.21` and any CNAME pointing to `cname.vercel-dns.com`.
2. Add an **A record**: host `@`, value = the IP address shown in hPanel for this website.
3. Add a **CNAME**: host `www`, value `roofingsystems.co`. If hPanel shows a different value for www, use that.
4. **Keep** the Google Search Console verification (the meta tag is in the site, so nothing to do) and any email (MX) records.

DNS changes usually take between a few minutes and a few hours.

## Step 5: Turn on SSL (HTTPS)

1. In hPanel, go to **Security → SSL** and install the free SSL certificate for roofingsystems.co and www.roofingsystems.co. It can only be issued once the DNS points to Hostinger.
2. The `.htaccess` already sends every visitor to **https://www.roofingsystems.co**. If you see a certificate warning right after switching DNS, wait for the SSL to finish installing.
3. Optional: enable the **Hostinger CDN** in hPanel for faster loading.

## Step 6: Tell Claude when it's live

I'll then check every page, redirect and the sitemap on the live site, and resubmit the sitemap to Google Search Console and IndexNow.

## Optional: CRM webhook (GoHighLevel)

Lead emails work without any setup (after the one-time FormSubmit activation). To also send leads to GoHighLevel, create a file named `lead-config.php` **one folder above `public_html`** (so it is not public) with:

```php
<?php return ['webhook' => 'https://services.leadconnectorhq.com/hooks/YOUR-WEBHOOK-URL'];
```

## What `.htaccess` does

- Forces https://www.roofingsystems.co (from http and from roofingsystems.co without www)
- Serves clean URLs (`/blog` loads `blog.html`) and redirects `/blog.html` and `/blog/` to `/blog`, so every page has exactly one URL
- Keeps the old redirects (`/privatemastermind-504306` → `/privatemastermind`, `/halo` → `/`)
- Shows the 404 page for missing URLs
- Turns on gzip compression and browser caching

## Future updates

With Git deployment: push to `main` and the site updates automatically. With manual upload: run `npm run build` and upload the new `out/` folder.
