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

## 23 Nov 2026, 17:37 UTC (scheduled run)
- **Search Console:** 7d and 28d: 0 clicks, 11 impressions (was 9 and 10), average position 47.5 (was 57.8 and 52.1). New pages now showing in results with single impressions: /roofing-marketing (pos 6), /verified-roofing-leads (8), /roofing-leads-florida (9), /roofing-leads-texas (10), /roofing-lead-generation (11). Queries are hidden by Google at this volume. No target keyword has impressions yet.
- **Index status (10 checked):** 8 indexed: /, /roofing-marketing, /roofing-landing-pages, /google-ads-for-roofers, /commercial-roofing-leads, /blog/how-to-choose-a-roofing-lead-generation-company, /roofing-leads-texas, /verified-roofing-leads. Still "Discovered": /blog/how-much-do-roofing-leads-cost, /facebook-ads-for-roofers.
- **Live health:** 57 sitemap URLs pass (200, one H1, unique title and description, canonical); 105 internal links, none broken.
- **Automatic submission:** 1 changed page (/, new hero) sent to IndexNow (200); sitemap resubmitted (204).
- **Changes:** none. Too little query data to justify edits, and the candidate pages were changed in the last 7 days.
- **Waiting to deploy:** nothing.

## 23 Nov 2026, 20:19 UTC (scheduled run, every 2 hours)
- **Search Console:** unchanged since 17:37: 7d and 28d 0 clicks, 11 impressions, position 47.5. Data lags 2 to 3 days.
- **Index status:** newly confirmed indexed: /storm-damage-leads, /roof-replacement-leads, /roofing-ad-creatives, /instagram-ads-for-roofers (all crawled 23 Nov). Still "Discovered": /blog/how-much-do-roofing-leads-cost, /facebook-ads-for-roofers, /roofing-crm-automation, /lead-generation-for-roofing-agencies, /services.
- **Live health:** 57 URLs pass; 105 internal links, none broken.
- **Improved:** /roofing-lead-generation (results section, comparison section, agencies section, real CPL range, 3 FAQs, links to all 5 "Discovered" pages). Em dashes removed from all content pages.
- **Waiting to deploy:** Texas and Florida expansions (entries 40, 41), /roofing-lead-generation (42), em dash cleanup (43).
- **Next run:** em dashes still on 34 pages (mostly case studies); homepage FAQ cost range "$4.51 to $14.58" from the owner's content file is narrower than the published range ($3.75 to $24), flagged to the owner.

## 23 Nov 2026, 22:19 UTC (scheduled run)
- **Search Console:** unchanged: 0 clicks, 11 impressions, position 47.5 (7d and 28d). Data lags 2 to 3 days.
- **Index status:** still "Discovered": cost article, /facebook-ads-for-roofers, /roofing-crm-automation, /lead-generation-for-roofing-agencies, /services, /case-studies, and 3 older articles (advertising ideas, shared vs exclusive, lead follow-up). /blog/how-to-get-roofing-leads indexed.
- **Live health:** 57 URLs pass; no broken links.
- **Improved:** /verified-roofing-leads (how-to section, definitions section, 2 newer case studies, 3 FAQs, links to 4 "Discovered" pages). Em dashes now removed from every page.
- **Waiting to deploy:** entries 40 to 45.

## 24 Nov 2026, 00:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 10 impressions, position 52.1 (the 7-day window dropped 16 Nov; no new days of data yet). 28d unchanged: 11 impressions, position 47.5.
- **Index status:** /case-studies/1865-roofing-leads-5-24-cpl-oct-jan indexed (new). Still "Discovered": cost article, /facebook-ads-for-roofers, /roofing-crm-automation, /lead-generation-for-roofing-agencies, /services, /case-studies, /case-studies/florida-roofer-111k-31-days. "Unknown": /blog, /blog/roofing-facebook-ads-cost-per-lead.
- **Live health:** 57 URLs pass; no broken links.
- **Improved:** /roof-replacement-leads and /storm-damage-leads (indexed pages with no impressions; all pages with impressions were edited in the last 72 hours).
- **Waiting to deploy:** entries 40 to 47.

## 24 Nov 2026, 02:19 UTC (scheduled run)
- **Search Console:** no new days of data (latest still 22 Nov). 7d: 0 clicks, 10 impressions, position 52.1. 28d: 11 impressions, position 47.5.
- **Index status:** /blog moved from unknown to "Discovered". Still unknown: cost-per-lead study, shared vs exclusive article, Florida 295 case study. Discovered: advertising ideas, lead follow-up, Texas $77K case study. Indexed: /roofing-landing-pages, /google-ads-for-roofers, /commercial-roofing-leads.
- **Live health:** 57 URLs pass; no broken links.
- **Improved:** /roofing-ad-creatives (examples and cost sections, 3 FAQs); two weakly linked guides added to the header dropdown (3 and 7 links in, now 66).
- **Waiting to deploy:** entries 40 to 49.

## 24 Nov 2026, 04:19 UTC (scheduled run)
- **Search Console:** no new days of data. 7d: 0 clicks, 10 impressions, position 52.1. 28d: 11 impressions, position 47.5.
- **Index status:** unchanged in substance; some "Discovered" pages now report "unknown" (the inspection API fluctuates for pages Google has not crawled). Indexed: /instagram-ads-for-roofers.
- **Live health:** 57 URLs pass; no broken links.
- **Improved:** /instagram-ads-for-roofers (targeting and lead-form sections, 3 FAQs).
- **Waiting to deploy:** entries 40 to 50. Every indexed page that can be improved has now been improved at least once; further runs will mostly monitor until the changes are deployed and Google reports new data.

## 24 Nov 2026, 06:20 UTC (scheduled run)
- **Search Console:** no new days of data. 7d: 0 clicks, 10 impressions, position 52.1. 28d: 11 impressions, position 47.5.
- **Index status:** no change; 10 pages checked are "Discovered" (one reported "unknown").
- **Live health:** 57 URLs pass; no broken links.
- **Improved:** /roofing-crm-automation (CRM tracking section with published dashboard figures, automations section, 3 FAQs).
- **Waiting to deploy:** entries 40 to 51.

## 24 Nov 2026, 08:19 UTC (scheduled run)
- **Search Console:** no new days of data (latest 22 Nov). 7d: 0 clicks, 10 impressions, position 52.1. 28d: 11 impressions, position 47.5.
- **Index status:** no change. Homepage, /roofing-marketing and Texas last crawled 21 Nov, so Google has not yet seen the 23 Nov deploy on those pages.
- **Live health:** 57 URLs pass; no broken links.
- **Improved:** /lead-generation-for-roofing-agencies (agency client-acquisition and scaling sections, 1,068-lead case study, 3 FAQs).
- **Waiting to deploy:** entries 40 to 52.

## 24 Nov 2026, 10:19 UTC (scheduled run)
- **Search Console:** no new days of data (latest 22 Nov). 7d: 0 clicks, 10 impressions, position 52.1. 28d: 11 impressions, position 47.5.
- **Index status:** no change. Landing pages, Google Ads and commercial pages indexed (crawled 23 Nov, after the content update went live).
- **Live health:** 57 URLs pass; no broken links.
- **Improved:** /facebook-ads-for-roofers (results and cost sections, 3 FAQs).
- **Waiting to deploy:** entries 40 to 53.

## 24 Nov 2026, 12:19 UTC (scheduled run)
- **Search Console:** no new days of data (latest 22 Nov). 7d: 0 clicks, 10 impressions, position 52.1. 28d: 11 impressions, position 47.5.
- **Index status:** the two new articles (live since this morning) are already "Discovered". Others unchanged.
- **Live health:** 59 sitemap URLs pass; 107 internal links, none broken; /llms.txt returns 200.
- **Page work:** none. Every target page was edited in the last 7 days, so under the 7-day rule only title, meta or FAQ changes are allowed, and the data gives no reason for any. Scheduled AEO items start on 30 Nov.
- **Waiting to deploy:** the recording-cards slider and trust bar above the footer on every page (owner request).
