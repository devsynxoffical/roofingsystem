# Technical SEO audit: roofingsystems.co (23 Nov 2026)

Scope: roofingsystems.co only. Sources: Google Search Console URL Inspection API (all 49 sitemap URLs + 5 noindex pages), Search Analytics API, a crawl of the live site (Hostinger), and Lighthouse 12 mobile runs. No content was changed for this audit.

## Summary

| # | Check | Result | Status |
|---|---|---|---|
| 1 | Google indexing | 18 indexed, 22 "Discovered, not indexed", 13 "Unknown to Google", 1 stale "Duplicate" label (/terms) | **Main problem** |
| 2 | Canonical tags | 54/54 pages have a correct self-referencing canonical. Google selected the same canonical on every indexed page | Pass |
| 3 | Robots and noindex | robots.txt allows all crawlers; no X-Robots-Tag headers; noindex only on the 5 intended case studies | Pass |
| 4 | Sitemap | 49 URLs, all 200, all self-canonical, none noindex, none redirect. Search Console reads it (last download 21 Nov) | Pass |
| 5 | Internal links | Indexed pages: median **49** internal links in. Discovered: **12.5**. Unknown: **8.5**. Nine service pages have only 2–9 links | **Main cause of #1** |
| 6 | Rendering | Static HTML: full main content (200–1,900 words) is in the raw HTML before any JavaScript runs | Pass |
| 7 | Duplicate content | URL variants (http, non-www, trailing slash, .html, index.html) all 301 to one URL. Case studies share 40–49% of their text with each other (template sections) | **Risk on case studies** |
| 8 | Page quality | Service pages and articles: 82–94% unique text, 900–1,900 words with real case-study data. Case studies: only 41–65% unique text | **Case studies weakest** |
| 9 | Mobile and speed | Mobile viewport OK, CLS 0.014–0.018, LCP 1.4–2.1 s. Homepage performance 66 (TBT 1,160 ms, 4.3 MB); other pages 81–87 | Homepage needs work |
| 10 | Search performance | 28d: 10 impressions, 0 clicks, avg. position 52. Queries: 3 name matches + "how to get roofing leads on facebook" (pos 77) | Early stage |

## Key findings

1. **Indexing follows internal links.** Pages linked from the main menu and footer (about 50 links each) are indexed. Pages only linked from a few other pages (/google-ads-for-roofers 2, /commercial-roofing-leads 3, /lead-generation-for-roofing-agencies 4, /storm-damage-leads 4, /roof-replacement-leads 5, /roofing-ad-creatives 5, /roofing-landing-pages 7, /roofing-crm-automation 9) are "Discovered" or "Unknown". This is the strongest technical lever.
2. **Case studies are template-heavy.** Pairs of case studies share 40–49% of their text (the same sidebar, explore links, process and FAQ structure). Each case study has roughly 300–450 words of truly unique content. Google often leaves pages like this as "Discovered, not indexed".
3. **Two noindexed case studies are still indexed** (/case-studies/private-mastermind-roofing-agency-session and /case-studies/roofing-ad-account-from-zero-five-days). Google last crawled them on 18 Nov, before the noindex went live on 20 Nov. They will drop out on the next crawl.
4. **/terms "Duplicate" label is stale.** Google's and our canonical are identical (/terms). It was last crawled on 16 Nov, before the site was cleaned up.
5. **Homepage speed.** Mobile performance 66: 1.16 s of blocking JavaScript and 4.3 MB of page weight (animations and video). All other tested pages score 81–87.
6. **Accessibility** on /roofing-leads-texas scores 0.85 (others 0.93–0.96). Usually a colour-contrast issue; minor.

## Recommended fixes (not applied yet; awaiting approval)

| Priority | Fix | Why |
|---|---|---|
| 1 | Add the 13 service and landing pages to the footer (a compact "Roofing leads" link group), so each gets about 50 internal links | Finding 1: link count is the clearest difference between indexed and non-indexed pages |
| 2 | Reduce repeated template text on case studies (shorter shared sections) and add more case-specific detail where real information exists | Findings 2 and 8 |
| 3 | Homepage: lazy-load below-the-fold videos and heavy animations | Finding 5 |
| 4 | Fix contrast issues on the landing-page template | Finding 6 |
| 5 | No action: noindexed and /terms states will update on the next crawl | Findings 3 and 4 |

## Page-by-page data

| Page | Google status | Last crawl | Internal links in | Words | Unique share | Robots |
|---|---|---|---|---|---|---|
| / | Submitted and indexed | 2026-11-21 | 53 | 1876 | 0.94 | index, follow |
| /privatemastermind | Submitted and indexed | 2026-11-16 | 53 | 1000 | 0.84 | index, follow |
| /book | Submitted and indexed | 2026-11-21 | 53 | 280 | 0.98 | index, follow |
| /facebook-ads-for-roofers | Discovered - currently not indexed |  | 49 | 1657 | 0.93 | index, follow |
| /roofing-lead-generation | Submitted and indexed | 2026-11-21 | 49 | 1314 | 0.91 | index, follow |
| /services | Discovered - currently not indexed |  | 53 | 818 | 0.91 | index, follow |
| /instagram-ads-for-roofers | Discovered - currently not indexed |  | 49 | 1451 | 0.87 | index, follow |
| /roofing-leads-texas | Submitted and indexed | 2026-11-21 | 49 | 1362 | 0.86 | index, follow |
| /roofing-leads-florida | Submitted and indexed | 2026-11-21 | 49 | 1267 | 0.86 | index, follow |
| /lead-generation-for-roofing-agencies | URL is unknown to Google |  | 4 | 1072 | 0.86 | index, follow |
| /verified-roofing-leads | Submitted and indexed | 2026-11-21 | 32 | 1266 | 0.87 | index, follow |
| /roofing-crm-automation | URL is unknown to Google |  | 9 | 1055 | 0.84 | index, follow |
| /roof-replacement-leads | Discovered - currently not indexed |  | 5 | 1057 | 0.82 | index, follow |
| /roofing-ad-creatives | URL is unknown to Google |  | 5 | 988 | 0.81 | index, follow |
| /roofing-landing-pages | Discovered - currently not indexed |  | 7 | 1058 | 0.85 | index, follow |
| /roofing-marketing | Submitted and indexed | 2026-11-21 | 49 | 1133 | 0.83 | index, follow |
| /google-ads-for-roofers | URL is unknown to Google |  | 2 | 1151 | 0.84 | index, follow |
| /commercial-roofing-leads | Discovered - currently not indexed |  | 3 | 1027 | 0.84 | index, follow |
| /storm-damage-leads | Discovered - currently not indexed |  | 4 | 974 | 0.83 | index, follow |
| /case-studies | Discovered - currently not indexed |  | 53 | 996 | 0.9 | index, follow |
| /case-studies/roofing-201-leads-14-45-cpl | Submitted and indexed | 2026-11-18 | 22 | 760 | 0.44 | index, follow |
| /case-studies/roofing-25-leads-one-day-3-75 | Discovered - currently not indexed |  | 17 | 836 | 0.44 | index, follow |
| /case-studies/roofing-cpl-dropped-50-percent | Discovered - currently not indexed |  | 12 | 631 | 0.45 | index, follow |
| /case-studies/roofing-agency-664-leads-4-51 | Discovered - currently not indexed |  | 7 | 865 | 0.51 | index, follow |
| /case-studies/roofing-227-leads-14-cpl-28-days | Discovered - currently not indexed |  | 6 | 897 | 0.53 | index, follow |
| /case-studies/215-validated-roofing-leads-12-79-cpl | Submitted and indexed | 2026-11-18 | 9 | 843 | 0.44 | index, follow |
| /case-studies/florida-home-services-280-leads-15-days | URL is unknown to Google |  | 10 | 819 | 0.52 | index, follow |
| /case-studies/roofing-agency-546k-67-days | URL is unknown to Google |  | 7 | 664 | 0.54 | index, follow |
| /case-studies/roofing-154-leads-14-58-cpl | Discovered - currently not indexed |  | 4 | 773 | 0.45 | index, follow |
| /case-studies/dallas-roofer-127500-closed-34-installs | URL is unknown to Google |  | 25 | 917 | 0.65 | index, follow |
| /case-studies/261-otp-verified-leads-7-days-new-account | Discovered - currently not indexed |  | 7 | 894 | 0.52 | index, follow |
| /case-studies/florida-365-otp-verified-leads-4-locations | Submitted and indexed | 2026-11-18 | 13 | 831 | 0.45 | index, follow |
| /case-studies/1480-roofing-leads-4-77-cpl | Discovered - currently not indexed |  | 19 | 773 | 0.41 | index, follow |
| /case-studies/635-pre-qualified-roofing-leads-45-days | Submitted and indexed | 2026-11-18 | 5 | 816 | 0.42 | index, follow |
| /case-studies/825-verified-roofing-leads-4-95-cpl | Discovered - currently not indexed |  | 14 | 855 | 0.47 | index, follow |
| /case-studies/texas-roofer-686-leads-8-days-0-down-offer | Discovered - currently not indexed |  | 23 | 913 | 0.52 | index, follow |
| /case-studies/537-qualified-leads-13-days-andromeda-update | URL is unknown to Google |  | 8 | 851 | 0.46 | index, follow |
| /case-studies/ppl-agency-1024-otp-verified-roofing-leads | Discovered - currently not indexed |  | 12 | 850 | 0.5 | index, follow |
| /case-studies/texas-850-roofing-leads-8-days-7-60 | Discovered - currently not indexed |  | 13 | 845 | 0.41 | index, follow |
| /blog | Discovered - currently not indexed |  | 49 | 531 | 0.8 | index, follow |
| /blog/roofing-facebook-ads-cost-per-lead | URL is unknown to Google |  | 38 | 1419 | 0.92 | index, follow |
| /blog/how-to-get-roofing-leads | Submitted and indexed | 2026-11-21 | 32 | 1096 | 0.9 | index, follow |
| /blog/roofing-advertising-ideas | Discovered - currently not indexed |  | 7 | 891 | 0.88 | index, follow |
| /blog/shared-vs-exclusive-roofing-leads | Discovered - currently not indexed |  | 18 | 1311 | 0.92 | index, follow |
| /blog/roofing-lead-follow-up | URL is unknown to Google |  | 22 | 1335 | 0.92 | index, follow |
| /income-disclosure | Submitted and indexed | 2026-11-16 | 50 | 197 | 1.0 | index, follow |
| /privacy | Submitted and indexed | 2026-11-03 | 50 | 376 | 1.0 | index, follow |
| /terms | Duplicate, Google chose different canonical than user | 2026-11-16 | 50 | 431 | 1.0 | index, follow |
| /dmca | Submitted and indexed | 2026-11-03 | 50 | 278 | 1.0 | index, follow |
| /case-studies/mastermind-roofing-account-breakdown | URL is unknown to Google |  | 5 | 628 | 0.54 | noindex, follow |
| /case-studies/private-mastermind-roofing-agency-session | Submitted and indexed | 2026-11-18 | 7 | 733 | 0.59 | noindex, follow |
| /case-studies/private-dwy-mastermind-segmentation-framework | URL is unknown to Google |  | 7 | 737 | 0.65 | noindex, follow |
| /case-studies/dwy-onboarding-roofing-agency-buyer-journey | URL is unknown to Google |  | 9 | 671 | 0.62 | noindex, follow |
| /case-studies/roofing-ad-account-from-zero-five-days | Submitted and indexed | 2026-11-18 | 3 | 683 | 0.46 | noindex, follow |
