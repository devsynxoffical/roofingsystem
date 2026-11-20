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
