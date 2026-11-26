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

## 24 Nov 2026, 14:19 UTC (scheduled run)
- **Search Console:** no new days of data (latest 22 Nov). 7d: 0 clicks, 10 impressions, position 52.1. 28d: 11 impressions, position 47.5.
- **Index status:** /book and /privatemastermind indexed. Older articles and the newest case studies are "Discovered" or not yet known to Google. No change from earlier runs.
- **Live health:** 59 URLs pass; no broken links; /llms.txt 200.
- **Page work:** none (all target pages inside the 7-day window; no data supporting title, meta or FAQ changes).
- **Waiting to deploy:** recording-cards slider and trust bar above the footer on every page.

## 24 Nov 2026, 16:19 UTC (scheduled run)
- **Search Console:** no new days of data (latest 22 Nov). 7d: 0 clicks, 10 impressions, position 52.1. 28d: 11 impressions, position 47.5.
- **Index status:** no newly indexed pages; the 10 rechecked pages are "Discovered" or unknown (the inspection API flips between the two before a crawl).
- **Live health:** 59 URLs pass; no broken links; /llms.txt 200.
- **Page work:** none (7-day window; no data supporting changes).
- **Waiting to deploy:** recording-cards slider and trust bar above the footer on every page.

## 24 Nov 2026, 18:19 UTC (scheduled run)
- **Search Console:** no new days of data (latest 22 Nov). 7d: 0 clicks, 10 impressions, position 52.1. 28d: 11 impressions, position 47.5.
- **Index status:** 10 indexed pages rechecked, all still indexed. Last crawls were 21 to 23 Nov, so Google has not yet recrawled the content deployed on 24 Nov.
- **Live health:** 59 URLs pass; no broken links; /llms.txt 200.
- **Page work:** none (7-day window; no data supporting changes).
- **Waiting to deploy:** recording-cards slider and trust bar above the footer on every page.

## 24 Nov 2026, 20:19 UTC (scheduled run)
- **Search Console:** first data for 23 and 24 Nov arrived. 7d: 0 clicks, 13 impressions (was 10), position 58.5. 28d: 0 clicks, 14 impressions (was 11), position 54.4.
- **New queries:** "creative roofing ads" (/roofing-ad-creatives, 2 impressions, position 71.5) and "roofing hail leads" (/storm-damage-leads, 1 impression, position 96). Both pages were expanded on 24 Nov with sections that match these searches (ad examples; hail and wind damage leads), so no further change; Google has not recrawled them yet.
- **Index status:** 6 key pages still indexed; /facebook-ads-for-roofers, CRM and the 2 new articles "Discovered" or unknown.
- **Live health:** 59 URLs pass; no broken links; /llms.txt 200.
- **Page work:** none (7-day window; the new queries already have matching sections).
- **Waiting to deploy:** nothing.

## 24 Nov 2026, 22:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 14 impressions (was 13), position 59.2. 28d: 15 impressions (was 14), position 55.3. "creative roofing ads" now 3 impressions at 70.7 (/roofing-ad-creatives).
- **Index status: 5 pages newly indexed**, crawled 24 Nov 21:51 to 22:01: /roofing-crm-automation, /lead-generation-for-roofing-agencies, /case-studies, /blog/digital-marketing-for-roofing-companies, /blog/roofing-marketing-off-season. Still "Discovered": /facebook-ads-for-roofers, /blog/how-much-do-roofing-leads-cost, /services.
- **Live health:** 59 URLs pass; no broken links; /llms.txt 200. One URL Inspection call returned a temporary 500 and succeeded on retry.
- **Page work:** none (7-day window).
- **Waiting to deploy:** nothing.

## 25 Nov 2026, 00:19 UTC (scheduled run)
- **Search Console:** unchanged since 22:19: 7d 0 clicks, 14 impressions, position 59.2; 28d 15 impressions, position 55.3.
- **Index status:** 2 more pages newly indexed (crawled 24 Nov): /blog/shared-vs-exclusive-roofing-leads and /blog/roofing-advertising-ideas. Still not indexed: /facebook-ads-for-roofers, /blog/how-much-do-roofing-leads-cost, /services, /blog, the cost per lead study, the Texas $77K and Florida $111K case studies. One inspection call returned a Google 500.
- **Live health:** 59 URLs pass; no broken links; /llms.txt 200.
- **Page work:** none (7-day window).
- **Waiting to deploy:** nothing.

## 25 Nov 2026, 02:19 UTC (scheduled run)
- **Search Console:** unchanged: 7d 0 clicks, 14 impressions, position 59.2; 28d 15 impressions, position 55.3.
- **Index status:** 10 not-yet-indexed pages rechecked; 9 "Discovered" (Facebook ads page, cost article, /services, /blog, cost per lead study, follow-up guide, 3 newer case studies), 1 unknown; none newly indexed this run.
- **Live health:** 59 URLs pass; no broken links; /llms.txt 200.
- **Page work:** none (7-day window).
- **Waiting to deploy:** nothing.

## 25 Nov 2026, 04:19 UTC (scheduled run)
- **Search Console:** unchanged: 7d 0 clicks, 14 impressions, position 59.2; 28d 15 impressions, position 55.3.
- **Index status:** same 10 pages not yet indexed ("Discovered" or unknown); none newly indexed.
- **Live health:** 59 URLs pass; no broken links; /llms.txt 200.
- **Page work:** none (7-day window).
- **Waiting to deploy:** nothing.

## 25 Nov 2026, 06:19 UTC (scheduled run)
- **Search Console:** unchanged (latest data 24 Nov): 7d 0 clicks, 14 impressions, position 59.2; 28d 15 impressions, position 55.3.
- **Index status:** same 10 pages not yet indexed; none newly indexed.
- **Live health:** 59 URLs pass; no broken links; /llms.txt 200.
- **Page work:** none (7-day window).
- **Waiting to deploy:** nothing.

## 25 Nov 2026, 08:20 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 15 impressions (was 14), position 61.3. 28d: 16 impressions (was 15), position 57.6.
- **New query (AEO target):** "how much do roofing leads cost", 1 impression at position 91, shown for /roof-replacement-leads. The page built for it (/blog/how-much-do-roofing-leads-cost) is still not indexed, so Google used another page. Indexing the cost article is the fix; no content change.
- **Index status:** /blog/roofing-lead-follow-up newly indexed (crawled 25 Nov 07:43). Others unchanged.
- **Live health:** 59 live URLs pass; no broken links; /llms.txt 200.
- **Page work:** none (7-day window). The 25 Nov plan work (17 new pages, 18 retitles) is built and waiting for deploy approval.

## 25 Nov 2026, 10:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 16 impressions (was 15), position 63.4. 28d: 17 impressions (was 16), position 59.8.
- **New query:** "tiktok ads for roofers" (/instagram-ads-for-roofers, 1 impression, position 95).
- **Index status:** 3 of today's new pages are already "Discovered" (/roofing-leads/dallas-tx, /roofing-leads, /roofing-seo). Cost article and the other new pages not yet known.
- **Live health:** 76 sitemap URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none (7-day window).
- **Waiting to deploy:** AEO and GEO batch (entry 66: AI prompt FAQs, Dataset schema, /llms-full.txt).

## 25 Nov 2026, 12:19 UTC (scheduled run)
- **Search Console:** unchanged since 10:19: 7d 0 clicks, 16 impressions, position 63.4; 28d 17 impressions, position 59.8.
- **Index status:** Google has discovered 7 more of today's new pages (Miami, Nashville, comparison page, cost report, cost article, how to start a roofing company, free roofing leads); Houston, repair and pay per lead not yet known.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none (7-day window). **Waiting to deploy:** nothing.

## 25 Nov 2026, 14:19 UTC (scheduled run)
- **Search Console:** unchanged (latest data 24 Nov): 7d 0 clicks, 16 impressions, position 63.4; 28d 17 impressions, position 59.8.
- **Index status:** 5 more new pages "Discovered" (/roof-repair-leads, /pay-per-lead-roofing, /roofing-website-design, roofing sales training, how to grow a roofing business). Houston, roofing marketing ideas and insurance leads not yet known. None of the 25 Nov pages indexed yet.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none (7-day window). **Waiting to deploy:** nothing.

## 25 Nov 2026, 16:19 UTC (scheduled run)
- **Search Console:** unchanged (latest data 24 Nov): 7d 0 clicks, 16 impressions, position 63.4; 28d 17 impressions, position 59.8.
- **Index status:** Houston and roofing marketing ideas are now "Discovered". The insurance leads article is still unknown. The /roofing-leads hub showed as "Discovered" at 10:19 but reads "unknown" in this inspection; no other change. None of the 25 Nov pages indexed yet.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt and /llms-full.txt 200.
- **Page work:** none (7-day window). **Waiting to deploy:** nothing.

## 25 Nov 2026, 18:20 UTC (scheduled run)
- **Search Console (first 25 Nov data):** 7d: 0 clicks, 20 impressions (was 16), position 61.4 (was 63.4). 28d: 0 clicks, 21 impressions (was 17), position 58.5 (was 59.8).
- **New queries:** "roofing leads for sale" (/roof-replacement-leads, 1 impression, position 42); "commercial roofing leads" (/commercial-roofing-leads, 2 impressions, position 81). /roof-replacement-leads now 3 impressions.
- **Index status:** /roof-repair-leads, /pay-per-lead-roofing, sales training, grow, free leads and start a roofing company are "Discovered". /roofing-leads, insurance leads, /roofing-website-design and the best companies page read "unknown" in this inspection. None of the 25 Nov pages indexed yet.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. Both pages with new impressions are in the 7-day window and single impressions do not justify a title or FAQ change yet. **Waiting to deploy:** nothing.

## 25 Nov 2026, 20:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 23 impressions (was 20), position 59.0 (was 61.4). 28d: 0 clicks, 24 impressions (was 21), position 56.5 (was 58.5).
- **New queries:** "roofing adverts" (/blog/roofing-advertising-ideas, position 28) and "roofing social media posts" (same page, position 73). First impressions for that article (indexed 24 Nov).
- **Mover:** "creative roofing ads" improved from 70.7 to 60 (/roofing-ad-creatives, 4 impressions).
- **Index status:** the insurance leads article is now "Discovered". The cost article, Dallas, Miami, Nashville, /roofing-seo and /roofing-leads are "Discovered". Houston, marketing ideas and the cost report read "unknown" in this inspection (results vary between runs). None of the 25 Nov pages indexed yet.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. The pages with new impressions are in the 7-day window and single impressions do not justify a title or FAQ change. **Waiting to deploy:** nothing.

## 25 Nov 2026, 22:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 34 impressions (was 23), position 53.6 (was 59.0). 28d: 0 clicks, 35 impressions (was 24), position 52.1 (was 56.5). 25 Nov is the best day so far with 18 impressions.
- **Striking distance:** "roofing advertising ideas" at position 18.5 (/blog/roofing-advertising-ideas, 2 impressions). The page title already leads with the exact phrase, so no change.
- **New queries:** "digital marketing for roofing companies" (position 49, its own article), "google ads for roofers" (59) and "google ads for roofing" (66) on /google-ads-for-roofers, "roofing leads florida" (65). "creative roofing ads" improved from 60 to 57; "roofing adverts" 29.
- **Index status:** both 24 Nov articles confirmed indexed (digital marketing for roofing companies, roofing marketing off-season). Houston, marketing ideas, the cost report, best companies, repair leads, pay per lead and sales training are "Discovered". /roofing-website-design reads "unknown" in this inspection.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. All pages with new impressions are in the 7-day window and their titles already match the queries. **Waiting to deploy:** nothing.

## 26 Nov 2026, 00:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 48 impressions (was 34), position 51.8 (was 53.6). 28d: 0 clicks, 49 impressions (was 35), position 50.8 (was 52.1). 25 Nov now shows 32 impressions.
- **Striking distance:** "roofing advertising ideas" improved from 18.5 to 17 (3 impressions).
- **New queries:** "social media marketing for roofing companies" (40), "digital marketing for roofers" (41.5) and "roofing digital marketing" (48), all on /blog/digital-marketing-for-roofing-companies; "roofing advertising" (58); "how to get more roofing leads" (87). "google ads for roofers" now 6 impressions at 58.7.
- **Index status:** Dallas, Miami, Nashville, /roofing-leads, /roofing-website-design, grow and free leads are "Discovered". The cost article, /roofing-seo and insurance leads read "unknown" in this inspection (results vary between runs). None of the 25 Nov pages indexed yet.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. All pages with new impressions are in the 7-day window and their titles already match the queries. **Waiting to deploy:** nothing.

## 26 Nov 2026, 02:20 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 66 impressions (was 48), position 51.2 (was 51.8). 28d: 0 clicks, 67 impressions (was 49), position 50.4 (was 50.8). 25 Nov now shows 50 impressions.
- **Movers:** "digital marketing for roofers" improved from 41.5 to 29 (5 impressions). "digital marketing for roofing companies" 8 impressions at 50; "google ads for roofers" 8 impressions at 57.8. "roofing advertising ideas" holds at 17.
- **New queries:** "roofing company advertising" (42), "roofing ads" (45), "social media ads for roofers" (71 and 81), "roofing google ads" (60), "roofing marketing florida" (97).
- **Index status:** 9 of the 10 pages checked are "Discovered" (Houston, cost report, cost article, /roofing-seo, insurance leads, best companies, repair leads, pay per lead, start a roofing company). Marketing ideas reads "unknown" in this inspection. None of the 25 Nov pages indexed yet.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. All pages with new impressions are in the 7-day window and their titles already match the queries. **Waiting to deploy:** nothing.

## 26 Nov 2026, 04:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 77 impressions (was 66), position 50.9 (was 51.2). 28d: 0 clicks, 78 impressions (was 67), position 50.3 (was 50.4). 25 Nov now shows 61 impressions.
- **Movers:** "roofing ads" improved from 45 to 26.5 (2 impressions); "tiktok ads for roofers" from 95 to 82.5. "digital marketing for roofers" 6 impressions at 32.3 (was 29); "roofing adverts" 5 impressions at 35.6 (was 29); "digital marketing for roofing companies" 10 impressions at 53.5. "roofing advertising ideas" holds at 17.
- **New query:** "advertising for roofers" (64).
- **Index status:** Dallas, Miami, Nashville, Houston, /roofing-leads, /roofing-website-design, grow and free leads are "Discovered". Marketing ideas and sales training read "unknown" in this inspection. None of the 25 Nov pages indexed yet.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. All pages with new impressions are in the 7-day window and their titles already match the queries. **Waiting to deploy:** nothing.

## 26 Nov 2026, 06:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 105 impressions (was 77), position 51.2 (was 50.9). 28d: 0 clicks, 106 impressions (was 78), position 50.8 (was 50.3). 25 Nov now shows 89 impressions.
- **Striking distance:** "roofing advertising ideas" improved from 17 to 16.2 (4 impressions).
- **Growing:** "google ads for roofers" 15 impressions at 59; "digital marketing for roofing companies" 14 at 53.2; "digital marketing for roofers" 8 at 30.1 (was 32.3); "roofing advertising" 4 at 60.5; "roofing google ads" 3 at 58.3.
- **New queries:** "storm damage leads" (/storm-damage-leads, 2 impressions, position 55.5), "digital marketing for roofing contractors" (49.5), "advertising for roofing" (68.5).
- **Index status:** 9 of 10 pages checked are "Discovered" (marketing ideas, sales training, cost report, cost article, /roofing-seo, insurance leads, best companies, repair leads, pay per lead). How to start a roofing company reads "unknown" in this inspection. None of the 25 Nov pages indexed yet.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. All pages with new impressions are in the 7-day window and their titles already match the queries. **Waiting to deploy:** nothing.

## 26 Nov 2026, 08:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 144 impressions (was 105), position 52.0 (was 51.2). 28d: 0 clicks, 145 impressions (was 106), position 51.7 (was 50.8). 25 Nov now shows 128 impressions.
- **Striking distance:** "roofing ads" improved from 26.5 to 18 (3 impressions). "roofing advertising ideas" slipped from 16.2 to 23.2 as impressions grew to 6.
- **Movers:** "roofing company advertising" 42 to 36.3; "digital marketing for roofers" 30.1 to 34.6 (10 impressions).
- **New queries (15):** mostly advertising variants on /blog/roofing-advertising-ideas ("roofing advertisement" 37, "roofing company ads" 38, "roofing quotes for advertising" 38, "roofing ad examples" 46, "roofing billboards" 51), plus "commercial roof leads" (61.5), "best way to get roofing leads" (69.5), "roofing leads free" (62) and "roofing marketing services" (96).
- **Pages with impressions:** 30 (was 29).
- **Index status:** 8 of 10 pages checked are "Discovered" (start a roofing company, /roofing-website-design, Miami, Nashville, Houston, grow, free leads, cost article). Dallas and /roofing-leads read "unknown" in this inspection. None of the 25 Nov pages indexed yet.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. All pages with new impressions are in the 7-day window and their titles already match the queries. **Waiting to deploy:** nothing.

## 26 Nov 2026, deploy
- Owner gave standing approval: finished work goes live automatically from now on.
- Deployed entries 67 (homepage keyword retarget) and 68 (metadata audit fixes, GEO description). Live in about 2 minutes; all changed pages return 200 with the new titles; /llms.txt 200.
- IndexNow (Bing and others) and Search Console sitemap resubmission sent for the changed URLs.

## 26 Nov 2026, 10:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 171 impressions (was 144), position 53.8 (was 52.0). 28d: 0 clicks, 172 impressions (was 145), position 53.5 (was 51.7). 25 Nov now shows 155 impressions.
- **New queries (14):** best placed "hail damage roofing leads" (30, /storm-damage-leads), "google ads for roofing company" (33), "roofers digital marketing" (41), "roofing advertising slogans" (43), "roof slogans" (52), "best roofing advertisement" (53), "exclusive roofing leads" (55, shared vs exclusive article), "exclusive leads for roofers" (63), "commercial roofing sales leads" (68), "best lead generation for roofing company" (70), "roofing landing page" (73), "roofing facebook ads agency" (77), "roofing social media advertising" (80), "marketing ideas for roofing companies" (83).
- **Growing:** "google ads for roofers" 20 impressions at 58.0; "commercial roofing leads" 4 at 82.
- **Pages with impressions:** 32 (was 30).
- **Index status:** /best-roofing-lead-generation-companies is now "Submitted and indexed" (crawled 26 Nov), the first of the 25 Nov pages to be indexed. Cost report, /roofing-seo, repair leads, sales training and marketing ideas are "Discovered". Dallas, /roofing-leads, insurance leads and pay per lead read "unknown" in this inspection.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. All pages with new impressions are in the 7-day window; the storm damage and Google Ads titles were updated earlier today and already match the new queries. **Waiting to deploy:** nothing.

## 26 Nov 2026, 12:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 232 impressions (was 171), position 54.6 (was 53.8). 28d: 0 clicks, 233 impressions (was 172), position 54.3 (was 53.5). 25 Nov now shows 214 impressions; first 26 Nov data (2 impressions).
- **Movers:** "roofers digital marketing" 41 to 31.7 (3 impressions); "how to get roofing leads on facebook" 77 to 60.5. "hail damage roofing leads" 30 to 44 as impressions grew to 6.
- **Growing:** "google ads for roofers" 23 impressions at 58.4; "digital marketing for roofing companies" 19 at 54.2; "digital marketing for roofers" 13 at 35.9; "roofing advertising" 10 at 58.8; "roofing company advertising" 7 at 39.4.
- **New queries (14):** best placed "hail damage leads for roofers" (39), "digital marketing for roofing company" (43), "digital marketing for roofing" (47), "digital marketing for roofer" (48), "follow up automation for roofers" (48, /roofing-crm-automation), "reels for roofing companies" (49), "roofing paid ads" (56, shown for 3 pages), "roofing retargeting ads" (62.5).
- **Pages with impressions:** 32 (unchanged).
- **Index status:** Miami, Nashville, Dallas, /roofing-website-design, free leads and pay per lead are "Discovered". Houston, the cost article, grow and start a roofing company read "unknown" in this inspection.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. All pages with new impressions are in the 7-day window and their titles already match the queries. **Waiting to deploy:** nothing.

## 26 Nov 2026, 14:20 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 247 impressions (was 232), position 54.9 (was 54.6). 28d: 0 clicks, 248 impressions (was 233), position 54.6 (was 54.3). 25 Nov now 222 impressions; 26 Nov 9 so far.
- **Index status (big change):** 7 of the 25 Nov pages were crawled and indexed today: /roofing-seo, /roof-repair-leads, /roofing-lead-cost-report-2026, /roofing-leads/houston-tx, /blog/roofing-sales-training, /blog/how-to-grow-a-roofing-business, /blog/how-to-start-a-roofing-company (plus /best-roofing-lead-generation-companies earlier today). Still "Discovered": cost article, insurance leads. /roofing-leads reads "unknown".
- **Movers:** "roofers digital marketing" 31.7 to 25.8 (4 impressions). "google ads for roofers" 28 impressions at 58; "digital marketing for roofing companies" 20 at 53.2; "roofing advertising" 11 at 58.5; "roofing company advertising" 8 at 42.1.
- **New queries:** "roofing ads examples" (54), "advertising roofing business" (60), "roofing meta ads agency" (82, /roofing-marketing), "get roofing leads" (92).
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. All pages with new impressions are in the 7-day window and their titles already match the queries. **Waiting to deploy:** nothing.

## 26 Nov 2026, 16:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 261 impressions (was 247), position 54.7 (was 54.9). 28d: 0 clicks, 262 impressions (was 248), position 54.5 (was 54.6). 26 Nov so far 22 impressions.
- **Index status (big change):** 9 more pages crawled and indexed today: /roofing-leads (markets hub), Dallas, Miami, Nashville, /pay-per-lead-roofing, /blog/how-much-do-roofing-leads-cost, /blog/roofing-leads-from-insurance-companies, /blog/roofing-marketing-ideas, /blog/free-roofing-leads. With the 8 found earlier today, 16 of the 17 pages published 25 Nov are now indexed, plus the cost article. Only /roofing-website-design is still "Discovered".
- **Growing:** "google ads for roofers" 35 impressions at 57.6; "roofing marketing ideas" 7 at 80.6.
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. All pages with new impressions are in the 7-day window and their titles already match the queries. **Waiting to deploy:** nothing.

## 26 Nov 2026, 18:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 263 impressions (was 261), position 54.3 (was 54.7). 28d: 0 clicks, 264 impressions (was 262), position 54.1 (was 54.5). 26 Nov so far 24 impressions.
- **New page with impressions:** /blog/roofing-marketing-off-season, 2 impressions at position 7.5 (page 1; query not shown by Google). Pages with impressions: 33 (was 32).
- **Index status:** Google recrawled the homepage (14:12 UTC) and the retitled pages (/roofing-marketing, /services, /google-ads-for-roofers, /storm-damage-leads) after today's deploy (08:50 UTC), so the new titles and homepage keywords are now in Google's index. Texas, Florida, Instagram and the advertising ideas article were also recrawled today. /roofing-website-design is the only 25 Nov page still "Discovered".
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. All pages with new impressions are in the 7-day window. **Waiting to deploy:** nothing.

## 26 Nov 2026, 20:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 286 impressions (was 263), position 53.8 (was 54.3). 28d: 0 clicks, 287 impressions (was 264), position 53.6 (was 54.1). 26 Nov so far 47 impressions.
- **Movers:** "roofing digital marketing" 48 to 39; "creative roofing ads" 57 to 51.8 (/roofing-ad-creatives); "social media marketing for roofing companies" 41 to 37.2 (5 impressions); "storm damage leads" 55.5 to 52.7; "digital marketing for roofing companies" 53.2 to 51.0 (23 impressions).
- **New queries:** "digital marketing options for roofers" (47), "digital marketing for roofing industry" (52), "creative roofing ads" now also on the advertising ideas article (53).
- **Top pages (28d):** advertising ideas article 99 impressions (55.2), digital marketing article 63 (42.2), /google-ads-for-roofers 42 (56.5), /storm-damage-leads 12 (47.5).
- **Index status:** all 9 older service pages checked are indexed; 7 of them were recrawled today (verified, commercial, CRM, ad creatives, agencies, Facebook ads). /roofing-website-design reads "unknown" in this inspection (was "Discovered").
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none. Checked every page with impressions against seo/changes.md: all were edited within the last 7 days (case studies 23 Nov, articles 23 to 26 Nov), so none is eligible yet. **Waiting to deploy:** nothing.

## 26 Nov 2026, 22:19 UTC (scheduled run)
- **Search Console:** 7d: 0 clicks, 307 impressions (was 286), position 53.5 (was 53.8). 28d: 0 clicks, 308 impressions (was 287), position 53.4 (was 53.6). 26 Nov so far 68 impressions.
- **Movers:** "roofing advertising ideas" 23.2 to 20.6 (8 impressions); "roofers digital marketing" 25.8 to 23.8 (5); "tiktok ads for roofers" 82.5 to 67.7; "roofing marketing florida" 96 to 91.8. "digital marketing for roofing companies" 25 impressions at 50.6; "digital marketing for roofers" 18 at 36.3.
- **New queries:** "roof replacement leads" (88, /roof-replacement-leads, its main keyword), "leads for roofing contractors" (96).
- **Index status:** 9 key case studies checked (Dallas $127.5K, Florida $111K, Texas $77K, 1,480 leads, Texas 850, Florida 295, 448 OTP, 1,068 agency, $546K agency): all indexed and recrawled today. /roofing-website-design back to "Discovered".
- **Live health:** 76 URLs pass; 124 internal links, none broken; /llms.txt 200.
- **Page work:** none (every page with impressions edited within 7 days). **Waiting to deploy:** nothing.
