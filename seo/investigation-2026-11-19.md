# SEO and conversion investigation: roofingsystems.co (19 Nov 2026)

All figures below come from Google Search Console (API), URL Inspection, the live site, local Lighthouse runs and live Google results. Where data does not exist, this report says so.

## 1. Baseline

| Metric | Value | Source |
|---|---|---|
| Search Console history | Starts **11 Nov 2026** (non-www property) and **15 Nov 2026** (www). Nothing earlier exists. | GSC API, both properties |
| Last 28 days vs previous 28 days | 1 impression, 0 clicks vs **no data** (properties did not exist) | GSC |
| Last 3 months vs previous 3 months | 1 impression, 0 clicks vs **no data** | GSC |
| All-time | 1 impression (/privatemastermind, position 1, 16 Nov), 0 clicks | GSC |
| Sitemap | 38 URLs submitted, Search Console reports 0 indexed from the sitemap | GSC sitemaps API |
| URL Inspection (15 URLs) | 2 indexed (/, /privatemastermind); 12 "Discovered, currently not indexed"; 1 "unknown to Google" (/roofing-lead-generation) | URL Inspection API |
| GA4 | **Not installed.** No GA4 property exists for this site; no gtag, GTM or Meta Pixel in the live HTML | Live HTML, GA4 property list |
| Leads from the website | **Zero possible.** The /book form does not send data anywhere (see 3.1) | Source code |
| Backlinks / brand mentions | No pages on the web mention "roofingsystems.co" in search results | Web search |
| Site age | First code commit 3 Oct 2026; SEO work started 13 Nov 2026 | git history |
| Speed (mobile Lighthouse) | Home 72 / LCP 3.3 s / TBT 780 ms / 2.9 MB; service page 90; /case-studies 89 | Lighthouse 12 |
| Technical SEO | All 38 URLs 200, one H1, unique titles and descriptions, correct canonicals, valid JSON-LD, 0 broken links, https and non-www redirect to https://www | Live crawl |

**What the comparison really shows:** there is no "before" period. The site has only been measurable in Search Console for about 8 days. "Not performing" is mainly a measurement-window and authority problem, not a ranking decline.

## 2. Why Google is not showing the site

1. **New domain, zero authority.** About 6 weeks live, no backlinks or mentions found. Google has *discovered* most URLs from the sitemap but has not chosen to crawl and index them. This is the normal state for a new site with no external signals. It is not a technical block: robots, canonicals and status codes are all correct.
2. **Most of the site is thin pages.** 24 of 38 sitemap URLs were case studies of 200 to 390 words, most built from a short Instagram caption and the same "X leads at $Y CPL" pattern. On a site with no authority, a sitemap that is mostly thin and similar pages gives Google little reason to prioritise crawling.
3. **Duplicated with a sister site.** qualifiedleadsx.com shows the same case study numbers (686 leads, $5.31 CPL) and the same core copy ("Done-for-you client acquisition", "Double your revenue in 90 days"). Google may treat this site as the weaker copy.
4. **Conflicting identity signals.** The site says "based in Phoenix, AZ" but shows an Indian phone number (+91), is "operated by Vaishali Media Productions LLC" with a milliondollarmedia.us email, and its social links went to the bare facebook.com, instagram.com, youtube.com and tiktok.com homepages. Search engines and US roofing owners both read this as low trust.
5. **Brand name collision.** "Roofing systems" is a generic product term (membranes, shingles). Searches for the brand return manufacturers, so branded search cannot carry the site the way a distinctive name would.

## 3. Why visitors cannot convert

1. **The booking form discards every submission.** `src/components/BookingForm.tsx` waits 0.7 s, then shows "Application Received". No email, CRM, calendar or webhook receives anything, and the source still has a "Hook this to Formspree / API / CRM later" comment. Every "Book a Strategy Call" button on the site leads here. The footer and newsletter email forms also only show a message on screen. **This is the most serious business problem on the site:** anyone who applies thinks they are booked, and nobody contacts them.
2. **No measurement.** Without GA4, there is no way to know how many people visit, from where, or how many try to book.
3. **Trust gaps at the decision point.** Mismatched phone and location, placeholder social links, no named founder or team, and conflicting experience claims (12+, 15+ years, founded 2015) all show up just as a $1M+ roofing owner is deciding whether to apply.

## 4. Honest review of the SEO work already done (13 to 18 Nov)

| Work | Verdict | Why |
|---|---|---|
| Technical setup (canonical host, sitemap, robots, schema, metadata, redirects) | **Correct and needed** | Live checks pass. Nothing technical is blocking indexing. |
| Indexing API and IndexNow submissions | **Low impact** | Google's Indexing API officially supports job and livestream pages only. It returned 200, but URL Inspection shows the submitted pages still "Discovered, not indexed" and /roofing-lead-generation still unknown. It does not create crawl priority. |
| Targeting head terms ("facebook ads for roofers", "roofing lead generation", "roofing marketing agency") | **Wrong priority for this stage** | Page one is held by JobNimbus, ServiceTitan, WebFX, Hook Agency, Scorpion and Webtonic, all with years of authority. A new domain with no links will not rank for these within 6 to 12 months. Keyword volume was never validated (OpenSEO has 2 credits). |
| 24 case study pages | **Too many thin pages too early** | They are honest and useful proof for visitors, but most do not add search value. |
| Cost-per-lead study (original data) | **Right idea** | Original first-party data is the type of content that earns links and AI citations. It needs promotion to get crawled and cited. |
| My pending 800-word case study expansion (not live) | **Partly flawed** | Some sections were the same boilerplate on every page (benchmark sentence, glossary). Repeating the same text across 24 pages can read as scaled filler. Removed in this round; the computed, page-specific parts are kept. |
| Conversion and tracking | **Missed** | SEO was done before checking that the site can capture a lead or measure a visit. That should have been step one. |

## 5. Competitors: what they do better

From live Google results for the target terms:
- **Authority:** software vendors (JobNimbus, ServiceTitan, Jobber) and long-running agencies (WebFX, Hook Agency, Scorpion) rank on domain strength built over years.
- **Volume:** Hook Agency and Webtonic publish many roofing-marketing guides and "best agencies" listicles that earn links, including ranking themselves.
- **Proof and identity:** named founders, office addresses, hundreds of reviews, real social profiles.
- **Stats content:** Webtonic's "Roofing Meta Ads Statistics Report" ranks for cost-per-lead searches by collecting benchmarks. Our cost-per-lead study has better first-party data but no authority yet.

## 6. Problems ranked by business impact

| # | Problem | Impact | Fix needs |
|---|---|---|---|
| 1 | Booking form discards all leads | Every website lead is lost | Owner: booking destination (GHL calendar, form or webhook) |
| 2 | No analytics | Cannot measure traffic, sources or bookings | Owner: GA4 Measurement ID (code is ready) |
| 3 | Conflicting business identity (phone, location, operator, socials) | Lower trust for visitors and Google | Owner: correct US contact details and real social URLs |
| 4 | Zero backlinks and mentions | Pages stay "discovered, not indexed" | Real profiles (Google Business Profile, LinkedIn, YouTube), links from the owner's other sites and partners, promoting the cost-per-lead study |
| 5 | Thin, similar case studies dominate the sitemap | Weak quality signal | Done this round (5 removed from the index); strengthen the rest over time |
| 6 | Content duplicated with qualifiedleadsx.com | Possible "weaker copy" treatment | Owner decision: which site owns the roofing offer |
| 7 | Head-term keyword targeting | Slow or no rankings | Shift to long-tail, data-led topics once there is impression data |
| 8 | Homepage weight (2.9 MB, TBT 780 ms) | Minor | Later |

## 7. Page-by-page recovery strategy

| URL | Current state | Action | Validation |
|---|---|---|---|
| `/` | Indexed, 0 impressions | Clear H1 stating who and what ("Meta ads and lead system for $1M+ roofing companies"), consistent contact details, a link to the cost-per-lead study | Impressions for brand and "roofing ads" queries in GSC |
| `/book` | Form discards submissions | Connect to the owner's GHL calendar or form; fire GA4 `book_call_submit` | Test submission arrives in the CRM; GA4 event count |
| `/privatemastermind` | Indexed, only page with an impression | Keep; add a link to /book and to the cost-per-lead study | GSC impressions and clicks |
| `/facebook-ads-for-roofers` | Discovered, not indexed | Keep; retarget from the head term to long-tail angles (lead-form vs landing-page, OTP verification, financing offers) once GSC shows queries | Indexed status, then query data |
| `/roofing-lead-generation` | Unknown to Google | Keep; add links from the homepage body and the blog, not only the footer | URL Inspection changes to "Discovered" or "Indexed" |
| `/blog/roofing-facebook-ads-cost-per-lead` | Discovered, not indexed | Main link-earning asset: share it on the owner's Instagram, LinkedIn and YouTube, and pitch it to roofing publications | Referring domains, indexed status |
| `/blog/shared-vs-exclusive-roofing-leads`, `/blog/roofing-lead-follow-up` | Discovered, not indexed | Keep; no new articles until the first three are indexed | Indexed status |
| `/blog` | 166 words live | Deploy the redesign (featured study and proof) | Indexed status |
| `/case-studies` | Discovered, not indexed | Keep as the proof hub | Indexed status |
| 19 case studies with measurable results | Thin (200 to 390 words) | Deploy the de-duplicated expansion (unique numbers, comparisons, FAQs) | Indexed count over 4 to 6 weeks |
| 5 case studies with no measurable result | Thin | **Done:** noindex, follow and removed from the sitemap; still visible to visitors | Live robots meta; sitemap count 38 to 33 |
| `/privacy`, `/terms`, `/dmca`, `/income-disclosure` | Fine | Keep (legal trust) | None |

## 8. What not to do now

- No new pages or articles until the existing ones are indexed and the form captures leads.
- No more Indexing API submissions as a ranking tactic.
- No head-term chasing until Search Console shows which queries Google associates with the site.
