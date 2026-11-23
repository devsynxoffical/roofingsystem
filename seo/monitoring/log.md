# SEO monitoring log: roofingsystems.co

Runs every 12 hours (05:37 and 17:37 UTC). Data: Google Search Console via OpenSEO, plus live checks of the production site. Raw numbers per run are in the JSON files next to this log.

## 2026-11-18 17:37 UTC (first run, baseline)

- **Search Console (data through 15 Nov):** 7d and 28d both 0 clicks, 0 impressions. No queries or pages with data yet.
- **Index status (10 URLs):** 2 indexed (homepage, /privatemastermind). 7 "Discovered - currently not indexed" (/case-studies, /blog, /facebook-ads-for-roofers, the 3 blog articles, Dallas case study). /roofing-lead-generation was "unknown to Google": Indexing API request sent (accepted).
- **Live health:** 38 sitemap URLs all 200, one H1 each, unique titles and descriptions, correct canonicals, valid JSON-LD, 51 internal links, none broken.
- **Changes:** none to site code. No ranking data yet, so no data-backed edits.
- **Waiting to deploy:** blog index redesign, case study layout and expanded case study content (commits 9b34b1a, 92aac11).

## 2026-11-19 05:37 UTC

- **Search Console (data through 16 Nov):** first impression recorded: 1 impression for /privatemastermind at position 1 on 16 Nov, 0 clicks. 7d and 28d: 0 clicks, 1 impression (was 0). Query hidden by Google (anonymised).
- **Index status (5 URLs; second batch timed out):** /roofing-lead-generation still "unknown to Google" 12h after the Indexing API request (it is linked from the homepage and footer, so Google should find it on its next crawl). 4 case studies "Discovered - currently not indexed".
- **Live health:** unchanged, all checks pass (38 URLs, 51 internal links, none broken).
- **Changes:** none. One impression is not enough data for any change.
- **Waiting to deploy:** blog index redesign, case study layout and expanded case study content (commits 9b34b1a, 92aac11).

## 2026-11-19 17:37 UTC

- **Search Console:** no new data since the last run (latest day still 16 Nov): 7d and 28d 0 clicks, 1 impression, position 1 (/privatemastermind).
- **Index status:** /case-studies/roofing-201-leads-14-45-cpl is **indexed** (crawled 18 Nov), the first case study indexed. /roofing-lead-generation moved from "unknown" to "Discovered". /roofing-leads-florida discovered; /roofing-leads-texas and /instagram-ads-for-roofers not yet known (live since today).
- **Rich results:** the indexed case study shows Breadcrumbs and Video rich results, with 2 warnings on the video `uploadDate`.
- **Change made:** `uploadDate` now uses full ISO 8601 with timezone on all case study pages. Verified in the local build.
- **Live health:** all 36 sitemap URLs pass; 59 internal links, none broken.
- **Waiting to deploy:** light theme, case study navigation, /services hub, 6 new service pages, this uploadDate fix.

## 2026-11-20 05:37 UTC

- **Search Console (data through 17 Nov):** unchanged: 7d and 28d 0 clicks, 1 impression (16 Nov, /privatemastermind, position 1). No queries yet.
- **Index status:** a second case study is **indexed** (215 validated leads, crawled 18 Nov). /roofing-leads-texas and /instagram-ads-for-roofers moved from "unknown" to "Discovered". /case-studies and /blog still "Discovered". Indexed pages known so far: 4 (/, /privatemastermind, 2 case studies).
- **Rich results:** the same video `uploadDate` warning appears on the newly indexed case study; the fix is built but not deployed.
- **Live health:** all sitemap URLs pass; no broken internal links.
- **Changes:** none. No new data supports a change; the pending deploy already contains the only issue found.
- **Waiting to deploy:** light theme, case study navigation, /services hub, 6 service pages, video uploadDate fix.

## 2026-11-20 17:38 UTC

- **Search Console:** no new data (latest day still 17 Nov): 0 clicks, 1 impression.
- **Index status:** homepage indexed, last crawled 16 Nov, so Google hasn't seen today's new "roofing leads" title yet. /roofing-lead-generation still "Discovered". /facebook-ads-for-roofers reported as "unknown" (it was "Discovered" on 18 Nov). Second inspection batch timed out.
- **Live health:** all 49 sitemap URLs pass; no broken links.
- **Changes:** none. No data supports a change.
- **Waiting to deploy:** nothing. Everything was deployed today.

## 2026-11-21 05:37 UTC

- **Hosting:** site now served by Hostinger (moved from Vercel on 20 Nov); live checks pass, SSL valid to Feb 2027; sitemap resubmitted and IndexNow pinged after the move.
- **Search Console (data through 18 Nov):** unchanged: 0 clicks, 1 impression (16 Nov). No queries yet.
- **Index status:** cost-per-lead article, Dallas case study and /services all "Discovered - currently not indexed" (/services already discovered one day after launch).
- **Live health:** all 49 sitemap URLs pass; no broken internal links.
- **Changes:** none (no data supports a change).
- **Waiting to deploy:** nothing.

## 2026-11-21 17:37 UTC

- **Search Console (direct API, fresh data to 21 Nov):** 7d and 28d: 0 clicks, **7 impressions** (was 1), average position 42. By day: 16 Nov 1, 19 Nov 2, 21 Nov 4.
- **Queries:** "roofing systems inc" (2, pos 75.5) and "roofingintakesystems.com" (2, pos 70), both name matches on the homepage. Other queries hidden by Google (anonymised).
- **Pages with impressions:** homepage plus 9 others at positions 1.7–10 (/privatemastermind, /book, legal pages, 4 case studies), most likely sitelinks under name searches. These show more pages are indexed than the 4 confirmed by URL Inspection.
- **Deploy:** the "Explore" links are live (owner clicked Deploy). The preferred-source button is committed but not yet deployed.
- **Automatic submission:** 20 changed pages sent: IndexNow 200, Search Console sitemap 204, Indexing API 20/20.
- **Live health:** all 49 sitemap URLs pass; no broken links.
- **Changes:** none. Name-match queries don't justify content changes.

## 2026-11-22 05:37 UTC

- **Search Console (direct API):** 7d and 28d: 0 clicks, **9 impressions** (was 7), average position 49.3. New query: "roofing business mastermind" (2, pos 75) on the noindexed private-mastermind case study (Google hasn't recrawled its noindex yet).
- **Index status: breakthrough.** Now indexed: /roofing-leads-texas, /roofing-leads-florida, /roofing-lead-generation, /roofing-marketing, /blog/how-to-get-roofing-leads, and the homepage was recrawled with its new "roofing leads" title. All crawled on 21 Nov between 09:55 and 10:01 UTC, 4–12 minutes after the Indexing API and sitemap submission. Still not indexed: /facebook-ads-for-roofers (Discovered), /services (unknown).
- **Automatic submission:** 0 changed pages, nothing sent.
- **Live health:** all 49 sitemap URLs pass; no broken links.
- **Changes:** none. Newly indexed pages need a few days before ranking data appears.
- **Waiting to deploy:** preferred-source button.

## 2026-11-22 17:37 UTC

- **Search Console (direct API):** unchanged: 0 clicks, 9 impressions (7d and 28d), position 49.3. 22 Nov data still filling in.
- **Index status:** /verified-roofing-leads **indexed** (crawled 21 Nov). Not yet: /instagram-ads-for-roofers and the cost-per-lead study (Discovered), /roof-replacement-leads (unknown).
- **Indexing API:** re-sent 17 main pages that are not yet indexed (17/17 accepted). The 21 Nov submission was followed by crawls within minutes.
- **Automatic submission:** 0 changed pages.
- **Live health:** all 49 sitemap URLs pass; no broken links.
- **Changes:** none.
- **Waiting to deploy:** preferred-source button.

## 2026-11-23 05:37 UTC

- **Search Console (direct API):** 7d: 0 clicks, 9 impressions, position 57.8. 28d: 0 clicks, **10 impressions** (was 9), position 52.1.
- **First customer-intent query:** "how to get roofing leads on facebook" showed /blog/how-to-get-roofing-leads at position 77 (22 Nov).
- **Index status:** last night's 17 re-sent pages not crawled yet: /facebook-ads-for-roofers, /services and /instagram-ads-for-roofers "Discovered"; the cost-per-lead study and /roof-replacement-leads reported "unknown".
- **Change (data-backed):** added a "How to get roofing leads on Facebook" section (4 steps) and FAQ to the article that received the query, linking to /facebook-ads-for-roofers, the cost-per-lead study and /instagram-ads-for-roofers. This also gives Google a crawl path from an indexed page to the non-indexed ones. Built and verified locally.
- **Automatic submission:** 0 changed live pages.
- **Live health:** all 49 sitemap URLs pass; no broken links.
- **Waiting to deploy:** preferred-source button, the Facebook section above.

## 23 Nov 2026, deploy of 4e04f3a
- **Live check:** sitemap 57 URLs, /case-studies lists 32 case studies, both new articles return 200.
- **Submitted:** all 57 sitemap URLs to IndexNow (200); sitemap resubmitted in Search Console (204). Indexing API not used.
