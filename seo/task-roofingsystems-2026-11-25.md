# Claude Code task: roofingsystems.co SEO and city pages

Open Claude Code in the roofingsystems.co repo. First put roofingsystems_Page_Map_25-Nov-2026.csv in the repo root; it is the source of truth for URLs, keywords, actions and weeks. Then read the SEO plan and the City Plan PDFs for this site.

## Rules

**Content**
- No em dashes anywhere.
- Do not invent facts, clients, reviews, offices or stats. Every number must come from the site's own case studies or from a public source linked on the page. If you cannot verify something, leave it out.
- Schema: use Service, Organization, FAQPage and BreadcrumbList. Use LocalBusiness only with a real, confirmed address.

**Changing existing pages**
- 7-day rule: before you redirect or rewrite an existing URL, run `git log -1 --format=%cd -- <file>`. If the file changed less than 7 days ago, skip it and list it in the report.
- Ask me before any cross-domain redirect, any noindex, or any deletion.

**Limits**
- Build at most 3 new pages per run, and only the CSV rows for the current week.
- Each city page needs at least 800 words.
- Each city page must be at least 60 percent unique compared to its sibling city pages. Check this with a diff script.

**Indexing**
- Do not use the Google Indexing API.
- After deploying, print the list of new URLs for manual GSC URL Inspection.

**Git**
- Commit message: `seo: <site> week <n>`. Do not push without asking.

## Step 1: inspect
1. Detect the framework, routing, sitemap generation, redirect config and schema setup.
2. Map every CSV row to its URL and mark it as exists, missing or conflict.
3. Show me that table, then continue.

## Step 2: week 1 fixes
- Check that www and non-www, and slash and no-slash, all resolve to one canonical with a 301. List the 2 URLs that GSC reports as "Duplicate, Google chose different canonical" and fix their canonicals.
- Add Organization schema with sameAs links (YouTube, LinkedIn, Facebook).
- Add /llms.txt listing the key pages and these fact lines:
  - who we serve
  - CPL range from the case studies ($3.75 to $20.10)
  - Texas and Florida proof
- Keep robots.txt open to GPTBot, PerplexityBot and Google-Extended.
- Retitle the 18 service pages using the "Page-by-page plan" table in the SEO plan.

## Step 3: upgrade the existing service pages (weeks 1 to 7)
Add these to every service page:
- a 40 to 60 word answer block under the H1
- a Proof block with 2 or 3 case study cards (real numbers from /case-studies)
- 5 or 6 FAQs with FAQPage schema
- Service and Breadcrumb schema
- links to 2 sibling service pages, 1 blog post and /case-studies

The home, lead generation, marketing and verified leads pages each need at least 1,000 words.

## Step 4: new pages
Build these in CSV week order:
- /roofing-seo
- /roofing-website-design
- /best-roofing-lead-generation-companies. This must be a fair comparison using public information only.
- /roof-repair-leads
- /pay-per-lead-roofing
- the new blog posts
- the "Roofing Lead Cost Report 2026", built from anonymized case study data

## Step 5: city pages
Follow the City and State Page Plan.
- Upgrade /roofing-leads-texas and /roofing-leads-florida into state hubs.
- Build the /roofing-leads hub.
- Then build /roofing-leads/{dallas-tx, miami-fl, nashville-tn, houston-tx}.
- Each city page needs:
  - at least 3 local facts with source links (NOAA Storm Events, US Census ACS)
  - the matching case study card
  - a CPL range from the real Texas or Florida campaigns
  - city FAQs
  - nearby areas as text only
- Link each case study to its city or state page.
- Add the city pages to the sitemap.

## Final step: verify and report
- Build the site and fix any errors.
- Check every new or changed URL:
  - returns 200
  - has a self canonical
  - has exactly one H1
  - has a title of 60 characters or fewer and a meta description of 160 or fewer
  - has valid JSON-LD
  - contains no em dash
- Check every redirect returns 301 (or 410 where the plan says so) to the right target.
- Report a table: URL, action, word count, issues, and blocked items with the reason.
- Print the URL list for manual GSC URL Inspection, in priority order.
