#!/usr/bin/env node
// Usage: node rb-v3-tasks.js <owner-pin>
// Imports all 48 RedBridge V3 completed tasks (Phases 1–10) into the tasks system.

const API = "https://tasks-api.vanessachs-work.workers.dev";
const PIN = process.argv[2];

if (!PIN) {
  console.error("Usage: node rb-v3-tasks.js <owner-pin>");
  process.exit(1);
}

const tasks = [
  // ── Phase 1: V3 Redevelopment (Mar 6 – May 2026) ──────────────────────────
  {
    title: "RB V3 Ph1: Build 18-route bilingual Next.js V3 — App Router, next-intl, full EN/ZH i18n",
    client: ["RedBridge"],
    type: ["Frontend"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-03-06",
    dateCompleted: "2026-05-31",
    purpose: "Core V3 rebuild — the foundation all subsequent phases build on. Next.js App Router with next-intl gives static-export bilingual routing without URL duplication.",
    notes: "18 routes, 178 components, EN/ZH via LanguageContext. Static export deployed to Cloudflare Workers via OpenNext.",
  },
  {
    title: "RB V3 Ph1: Establish V3 design system — typography, spacing, colour tokens across 178 components",
    client: ["RedBridge"],
    type: ["Frontend"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-03-06",
    dateCompleted: "2026-05-31",
    purpose: "Ensures visual consistency across the full site from day one, avoiding the patchwork appearance that accumulated in V2.",
    notes: "Tailwind 4 design tokens — defined once, applied across all 178 components. Prevents the inline-style drift fixed later in Phase 3.",
  },
  {
    title: "RB V3 Ph1: Build multi-step consultation booking form with Google Sheets real-time lead capture",
    client: ["RedBridge"],
    type: ["Backend", "Frontend"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-03-06",
    dateCompleted: "2026-05-31",
    purpose: "Primary conversion mechanism for the site — replaces the V2 Calendly embed with a branded multi-step form that appends ctasrc and locale to every lead.",
    notes: "Multi-step form → Cloudflare Workers API → Google Sheets. Runs in parallel with Meta CAPI call. ctasrc + locale params appended for attribution.",
  },
  {
    title: "RB V3 Ph1: Implement server-side Meta CAPI — fix silent event drop in Cloudflare Workers runtime",
    client: ["RedBridge"],
    type: ["Backend", "Infrastructure"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-03-06",
    dateCompleted: "2026-05-31",
    purpose: "Facebook/Instagram campaign conversion events were being silently dropped in the Workers runtime. CAPI provides cross-ad-blocker attribution independent of the client-side pixel.",
    notes: "Root cause: Workers runtime doesn't support certain node-fetch patterns. Fixed by awaiting CAPI in parallel with Sheets POST. Removed test_event_code to confirm production hits.",
  },
  {
    title: "RB V3 Ph1: Migrate analytics to GTM — Google Ads tag, Meta Pixel, CSP headers; add ctasrc + locale attribution to booking form",
    client: ["RedBridge"],
    type: ["Marketing"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-03-06",
    dateCompleted: "2026-05-31",
    purpose: "Consolidates all tag management under GTM so new tags can be added without code deploys, and enables campaign-level lead attribution from the start.",
    notes: "GTM container with Google Ads conversion tag + Meta Pixel. CSP headers updated to allow GTM script. ctasrc URL param appended by CTA buttons; locale appended by form.",
  },
  {
    title: "RB V3 Ph1: Design hub-and-spoke SEO architecture — Employer Pathway hub + 3 spoke pages",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-03-06",
    dateCompleted: "2026-05-31",
    purpose: "Hub-and-spoke structure concentrates topical authority on Employer Pathway, the site's primary revenue page, and distributes link equity through internally linked spoke pages.",
    notes: "1 hub (/employer-pathway) + 3 initial spokes (482, 186, Career Launch). Expanded to 9 spoke pages in Phase 7.",
  },
  {
    title: "RB V3 Ph1: Debug CORS, routing intercepts, and silent form drops specific to Cloudflare Workers runtime",
    client: ["RedBridge"],
    type: ["Backend", "Infrastructure"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-03-06",
    dateCompleted: "2026-05-31",
    purpose: "Cloudflare Workers has a different runtime from Node.js — several common patterns fail silently, including fetch behaviour, CORS handling, and OpenNext routing intercepts.",
    notes: "Fixed: CORS preflight handling in Workers, routing intercepts from OpenNext config, and silent form drops caused by unhandled promise rejections in the Workers environment.",
  },

  // ── Phase 2: Technical Debt & Content Accuracy (Jun 2026) ─────────────────
  {
    title: "RB V3 Ph2: Remove 82 orphaned message files; consolidate locale index files; promote v2 content to canonical paths",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-01",
    dateCompleted: "2026-06-14",
    purpose: "82 orphaned locale message files left over from the V2-to-V3 migration were inflating the build and creating confusion about which files were authoritative.",
    notes: "Removed 82 orphaned files. Consolidated 6 locale index files into a single barrel per locale. Promoted V2 content stubs to their canonical V3 paths.",
  },
  {
    title: "RB V3 Ph2: Rename 482 TSS → Skills in Demand; correct MARN 1467670→1467870; Career Launch 2yr→1yr; fix VETASSESS spelling; add Automotive sector",
    client: ["RedBridge"],
    type: ["Content"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-01",
    dateCompleted: "2026-06-14",
    purpose: "Multiple content accuracy issues carried over from V2 — outdated visa name, wrong MARN number, incorrect program duration, spelling errors, and a missing occupation sector.",
    notes: "482 TSS → Skills in Demand (government rebrand Dec 2024). MARN corrected from 1467670 to 1467870. Career Launch duration corrected from 2yr to 1yr. VETASSESS spelling fixed. Automotive added to occupation sectors.",
  },
  {
    title: "RB V3 Ph2: Consolidate duplicate components and config into single source-of-truth modules; remove dead code",
    client: ["RedBridge"],
    type: ["Frontend"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-01",
    dateCompleted: "2026-06-14",
    purpose: "Duplicate components created diverging implementations that would require double-edits for any future change — a maintenance liability caught before it compounded.",
    notes: "Merged duplicate Nav variants, shared Footer implementations, and config objects. Extracted MARN/ABN as a named constant. Removed ~699 lines of dead code across the codebase.",
  },

  // ── Phase 3: Quality Audit & Refactor (Jun 2026) ─────────────────────────
  {
    title: "RB V3 Ph3: Replace 58 inline styles with Tailwind utilities; standardise 20+ design tokens across 178 components",
    client: ["RedBridge"],
    type: ["Frontend"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-14",
    dateCompleted: "2026-06-18",
    purpose: "58 inline styles were bypassing Tailwind's purge and creating specificity conflicts — they also made responsive overrides impossible without !important hacks.",
    notes: "58 inline styles → Tailwind utilities. 20+ design tokens (colours, spacing, font sizes) standardised across all 178 components. Held through Phases 4–10 without regression.",
  },
  {
    title: "RB V3 Ph3: Refactor ~699 lines duplicate/legacy code; full accessibility and responsive-layout audit across 18 routes",
    client: ["RedBridge"],
    type: ["Frontend"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-14",
    dateCompleted: "2026-06-18",
    purpose: "Legacy code carried from V2 was increasing bundle size and making components harder to reason about; accessibility issues on a professional services site create legal and reputational risk.",
    notes: "~699 lines removed. Accessibility: alt text audit, heading hierarchy checks, focus-visible ring verification, ARIA label review across 18 routes. Mobile layout: breakpoint audit, overflow scan.",
  },

  // ── Phase 4: Technical SEO Audit (Jun 2026) ───────────────────────────────
  {
    title: "RB V3 Ph4 SEO: Fix broken hreflang annotations blocking zh-CN indexing",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-18",
    dateCompleted: "2026-06-21",
    purpose: "Broken hreflang tags were preventing Google from recognising the Chinese-language pages as indexed alternatives — blocking zh-CN ranking for RedBridge's primary Mandarin-speaking audience.",
    notes: "Root cause: hreflang alternate href values were relative paths instead of absolute URLs. Fixed across all 18 routes in generateMetadata(). Verified via curl on production.",
  },
  {
    title: "RB V3 Ph4 SEO: Eliminate duplicate brand name in all page titles; build robots.ts (replaced static file silently overriding crawl config)",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-18",
    dateCompleted: "2026-06-21",
    purpose: "Duplicate brand name in titles ('RedBridge | RedBridge') wasted character budget on every page. The static robots.txt was silently overriding the Next.js robots.ts config.",
    notes: "Removed duplicate brand suffix from 18 page titles. Deleted static /public/robots.txt and replaced with /src/app/robots.ts returning a typed MetadataRoute.Robots object.",
  },
  {
    title: "RB V3 Ph4 SEO: Add BreadcrumbList JSON-LD to 3 employer pathway service pages; extract MARN/ABN constant; remove meta keywords",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-18",
    dateCompleted: "2026-06-21",
    purpose: "BreadcrumbList structured data helps Google understand the site hierarchy and can earn breadcrumb rich results. Meta keywords are deprecated and add bloat.",
    notes: "BreadcrumbList added to /employer-pathway, /employer-pathway/482-visa, /employer-pathway/186-visa. MARN extracted to MARN_NUMBER constant. Meta keywords removed from all pages.",
  },

  // ── Phase 5: Schema, Sitemap & URL Flattening (Jun 2026) ──────────────────
  {
    title: "RB V3 Ph5 SEO: Create sitemap.xml with hreflang alternates for all canonical routes; submit to Google Search Console (first-ever submission)",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-21",
    dateCompleted: "2026-06-25",
    purpose: "No sitemap meant Google was discovering pages only through crawl — slow, unreliable, and unable to distinguish EN vs ZH canonical URLs. First GSC submission opens the indexing pipeline.",
    notes: "Next.js sitemap.ts generates /sitemap.xml with <xhtml:link> hreflang alternates for every route. Submitted via GSC; first coverage report showed all URLs as 'Discovered — currently not indexed' (expected for a new domain).",
  },
  {
    title: "RB V3 Ph5 SEO: Add FAQPage and Organization/LocalBusiness JSON-LD structured data",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-21",
    dateCompleted: "2026-06-25",
    purpose: "FAQPage schema makes Q&A content eligible for rich result accordions in search. Organization and LocalBusiness schema give Google verified entity signals (name, address, phone, MARN).",
    notes: "FAQPage on /faqs (8 Q&A pairs at this point). Organization + LocalBusiness on homepage. Validated via Google Rich Results Test.",
  },
  {
    title: "RB V3 Ph5: Flatten /services/ URL segment from 3 employer pathway spoke pages; add inline contextual linking across FAQ + service pages",
    client: ["RedBridge"],
    type: ["Infrastructure", "Other"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-21",
    dateCompleted: "2026-06-25",
    purpose: "The extra /services/ path segment was increasing click depth and diluting crawl budget. Flatter URLs also have minor keyword proximity benefits in the URL slug.",
    notes: "Moved /services/482-visa → /employer-pathway/482-visa, etc. 301 redirects added via Cloudflare Rules. Internal links updated across all 18 files. Contextual FAQ and service cross-links added.",
  },
  {
    title: "RB V3 Ph5: Support RedBridge founders through GSC and Google Business Profile setup",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-21",
    dateCompleted: "2026-06-25",
    purpose: "Founders needed hands-on guidance to complete GSC DNS verification and GBP setup — unblocked by walking through both flows directly with them.",
    notes: "GSC: DNS TXT verification via Cloudflare DNS panel. GBP: claimed/created listing, completed full profile (address, phone, category, photos, MARN in description).",
  },

  // ── Phase 6: CI/CD & Production Bug Fix (Jun 2026) ───────────────────────
  {
    title: "RB V3 Ph6: Diagnose and fix stale Cloudflare build artifact causing sitewide broken navigation across all employer pathway pages",
    client: ["RedBridge"],
    type: ["Infrastructure"],
    status: "Done",
    priority: "Urgent",
    dateCreated: "2026-06-25",
    dateCompleted: "2026-06-26",
    purpose: "All employer pathway nav links were broken in production for an unknown period — the stale artifact was serving an old deployment that predated the URL flattening in Phase 5.",
    notes: "Root cause: Cloudflare Workers retained the previous build artifact after a failed deploy. Fixed by forcing a clean deploy with wrangler deploy --no-bundle. CI/CD pipeline shipped immediately after to prevent recurrence.",
  },
  {
    title: "RB V3 Ph6: Design and ship GitHub Actions CI/CD pipeline — build + deploy to Cloudflare Workers globally in ~2.5 min",
    client: ["RedBridge"],
    type: ["Infrastructure"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-25",
    dateCompleted: "2026-06-26",
    purpose: "Manual deployments were the root cause of the stale artifact incident. A CI/CD pipeline eliminates the class of human error that caused the production outage.",
    notes: "GitHub Actions workflow: install → build (next build) → deploy (wrangler deploy). Triggered on push to main. ~2.5 min end-to-end. Secrets: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID.",
  },
  {
    title: "RB V3 Ph6: Add 7 automated post-deploy smoke tests — cache purge, propagation wait, route + i18n string verification across 4 routes",
    client: ["RedBridge"],
    type: ["Infrastructure"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-25",
    dateCompleted: "2026-06-27",
    purpose: "Without smoke tests, a broken deploy only surfaces when a user encounters it. Post-deploy verification catches regressions at the deploy stage before any user is affected.",
    notes: "7 steps: purge Cloudflare cache via API, wait 30s for propagation, then curl 4 routes (homepage, /employer-pathway, /faqs, /contact) checking status codes and 2 i18n strings per route. Runs in the same GitHub Actions workflow.",
  },
  {
    title: "RB V3 Ph6: Fix Cloudflare Bot Fight Mode blocking GitHub Actions runner IPs during smoke tests",
    client: ["RedBridge"],
    type: ["Infrastructure"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-26",
    dateCompleted: "2026-06-27",
    purpose: "Cloudflare's Bot Fight Mode was treating GitHub Actions runner IPs as bot traffic and returning 403s, causing smoke tests to fail on every deploy.",
    notes: "Fix: redirected smoke test curl calls to the workers.dev origin URL instead of the custom domain. The custom domain has Bot Fight Mode; workers.dev does not. No security controls were disabled.",
  },
  {
    title: "RB V3 Ph6: Diagnose and fix FAQ inline link 3-root-cause production bug in Cloudflare Workers (custom parseRichText() regex helper)",
    client: ["RedBridge"],
    type: ["Backend"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-26",
    dateCompleted: "2026-06-28",
    purpose: "FAQ answers containing inline links were rendering as plain text in production — all link markup was being silently dropped, making FAQ content less useful and breaking internal linking.",
    notes: "3 independent root causes: (1) next-intl t.raw() strips nested arrays, (2) OpenNext esbuild drops JSON array-of-objects outside src/, (3) next-intl rich() parser incompatible with Workers runtime. Fixed with a custom parseRichText() regex helper with zero external dependencies.",
  },
  {
    title: "RB V3 Ph6: Fix footer affiliationPrefix raw key rendering bug; fix employer pathway dropdown closing too early",
    client: ["RedBridge"],
    type: ["Frontend"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-27",
    dateCompleted: "2026-06-28",
    purpose: "Two independent UI bugs: raw i18n key visible in footer (professional services site), and the employer pathway dropdown closing before users could reach nested items.",
    notes: "Footer: raw key 'footer.affiliationPrefix' caused by missing translation key — added to both EN and ZH locale files. Dropdown: closing too early due to mouseLeave firing on the gap between trigger and panel — fixed with onMouseEnter/Leave on the wrapper div.",
  },

  // ── Phase 7: Content Cluster Expansion (22–26 Jun 2026) ───────────────────
  {
    title: "RB V3 Ph7 Cluster 1: Build 3 × 482 visa info pages (requirements, conditions, costs) using new SpokeInfoLayout component",
    client: ["RedBridge"],
    type: ["Frontend", "Content"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-22",
    dateCompleted: "2026-06-26",
    purpose: "Each 482 visa topic (requirements, conditions, costs) is a high-volume search query that was previously unanswered on the site — these pages create ranking candidates for each.",
    notes: "New SpokeInfoLayout component used across all 3 pages. Each page: 600–900 words, FAQPage JSON-LD, BreadcrumbList, canonical metadata. Full EN/ZH bilingual.",
  },
  {
    title: "RB V3 Ph7 Cluster 2: Build Skills in Demand rebrand explainer page (/employer-pathway/skills-in-demand-visa)",
    client: ["RedBridge"],
    type: ["Frontend", "Content"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-22",
    dateCompleted: "2026-06-26",
    purpose: "The 482 TSS visa was rebranded to Skills in Demand in December 2024 — employers searching for 'skills in demand visa' were landing on a page that still used the old name.",
    notes: "Standalone explainer page clarifying the rebrand, what changed, and what stayed the same. Internally linked from hub and all 482 spoke pages. Full EN/ZH.",
  },
  {
    title: "RB V3 Ph7 Cluster 3: Build 482-to-PR pathway page with multi-link case study card support",
    client: ["RedBridge"],
    type: ["Frontend", "Content"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-22",
    dateCompleted: "2026-06-26",
    purpose: "Many 482 visa holders want to understand the pathway to permanent residency — this is a high-intent query that signals employer clients thinking long-term.",
    notes: "New PathwayCard component with multi-link support for 186 and other PR pathway options. 700+ words. Full EN/ZH. Internally linked from 482 hub and spoke pages.",
  },
  {
    title: "RB V3 Ph7 Cluster 4: Expand 186 Direct Entry to full pillar layout using new Pillar186Layout (2,002 words)",
    client: ["RedBridge"],
    type: ["Frontend", "Content"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-22",
    dateCompleted: "2026-06-26",
    purpose: "The 186 page was a stub — 186 Direct Entry is RedBridge's highest-value service and the page had no content to rank for any related queries.",
    notes: "New Pillar186Layout component. 2,002 words across 8 sections. FAQPage JSON-LD, BreadcrumbList. Full EN/ZH. Internally linked from hub, 482-to-PR pathway, and homepage.",
  },
  {
    title: "RB V3 Ph7 Cluster 5: Employer Pathway hub expansion (HubInfoSections, 2,002 words); fix FAQ Googlebot crawlability bug — 11 FAQ answers invisible to Googlebot",
    client: ["RedBridge"],
    type: ["Frontend", "Content", "Other"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-22",
    dateCompleted: "2026-06-26",
    purpose: "The hub page was thin (< 500 words) — insufficient to rank for 'employer sponsorship' queries. The FAQ tab bug meant Googlebot received only 1 of 3 FAQ tab contents.",
    notes: "New HubInfoSections component. 2,002 words. FAQ tab bug: active-tab-only SSR meant 11 FAQ answers were invisible to Googlebot. Fixed by always-mounting all FAQ panels with CSS-hidden inactive tabs.",
  },
  {
    title: "RB V3 Ph7 Cluster 6: Build visa sponsorship jobs page (1,694 words) with FAQPage JSON-LD and BreadcrumbList",
    client: ["RedBridge"],
    type: ["Frontend", "Content"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-22",
    dateCompleted: "2026-06-26",
    purpose: "High search volume for 'visa sponsorship jobs Australia' with no RedBridge page targeting it — this page creates a ranking candidate for the top-of-funnel employer intent query.",
    notes: "1,694 words. /visa-sponsorship-jobs-australia. FAQPage JSON-LD (3 Q&A pairs). BreadcrumbList. Full EN/ZH. Internally linked from hub.",
  },
  {
    title: "RB V3 Ph7 Cluster 7: Expand Career Launch to full pillar layout (PillarCareerLaunchLayout, 1,738 words); fix Siddeley Talent Link disclosure gap",
    client: ["RedBridge"],
    type: ["Frontend", "Content"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-22",
    dateCompleted: "2026-06-26",
    purpose: "Career Launch was a thin page with no structured data or pillar layout. The Siddeley Talent Link disclosure was missing from the RedBridge site, creating a transparency risk.",
    notes: "New PillarCareerLaunchLayout. 1,738 words. Duration corrected to 1yr (from Phase 2 fix). Disclosure paragraph added per compliance recommendation. Full EN/ZH.",
  },
  {
    title: "RB V3 Ph7: Redesign desktop dropdown + mobile accordion into grouped mega menu surfacing all 9 employer pathway pages (8 i18n keys, zero hardcoded strings)",
    client: ["RedBridge"],
    type: ["Frontend"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-26",
    dateCompleted: "2026-06-26",
    purpose: "After Phase 7 content cluster expansion, 9 employer pathway pages existed but only 3 were surfaced in the dropdown — users had to know the URL to reach most pages.",
    notes: "Mega menu: 2 labelled groups (482 Visa Pathway, PR & Other Programs) surfacing all 9 pages. 8 new i18n keys added, zero hardcoded strings. Same component used for desktop dropdown and mobile accordion.",
  },

  // ── Phase 8: Data Hygiene, SEO Metadata, Regulatory Accuracy & Internal Linking (Jun 2026) ──
  {
    title: "RB V3 Ph8: Remove 5 orphaned JSON keys from ZH About page content file (each verified via full component-tree grep before deletion)",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-27",
    dateCompleted: "2026-06-30",
    purpose: "Orphaned keys in locale files create noise in translation tools and could inadvertently surface in future component refactors.",
    notes: "5 keys removed from zh/about.json. Each key verified via grep across full component tree before deletion to confirm no component reference existed.",
  },
  {
    title: "RB V3 Ph8 SEO: Rewrite SEO metadata across 6 pages using live GSC data; independently caught and corrected MARN attribution error in client-proposed copy",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-27",
    dateCompleted: "2026-06-30",
    purpose: "Phase 4 title/description fixes addressed format issues; Phase 8 rewrites the content itself using GSC impression and CTR data to target queries with actual search volume.",
    notes: "Rewrote title tags and meta descriptions for: homepage, /employer-pathway, /employer-pathway/482-visa, /employer-pathway/186-visa, /faqs, /contact. MARN attribution error in client-proposed title copy independently caught and corrected before it went live.",
  },
  {
    title: "RB V3 Ph8 SEO: Replace deprecated MLTSSL with CSOL across 4 files, 6 strings (MLTSSL superseded 7 Dec 2024 under Skills in Demand reform)",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-27",
    dateCompleted: "2026-06-30",
    purpose: "MLTSSL was replaced by CSOL on 7 December 2024 as part of the Skills in Demand visa reform. Using the deprecated list name on a migration services site is factually incorrect and could mislead clients.",
    notes: "MLTSSL → CSOL across 4 content files, 6 string occurrences. Updated in both EN and ZH content. Cross-referenced with Department of Home Affairs announcement confirming deprecation date.",
  },
  {
    title: "RB V3 Ph8: Close 10 internal linking gaps across 18 files — homepage, spoke pages, FAQ, success cases, employer fee table, About page, booking success card",
    client: ["RedBridge"],
    type: ["Frontend", "Other"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-27",
    dateCompleted: "2026-06-30",
    purpose: "After Phase 7 content expansion, the new pages were not internally linked from all relevant surfaces — reducing their crawlability and PageRank distribution.",
    notes: "Audit: identified 10 linking gaps across 18 files. Added contextual links from homepage hero CTA, 3 spoke pages, FAQ anchor links, 2 success case cards, employer fee table note, About page service mention, booking success card.",
  },

  // ── Phase 9: CSIT Indexation, Layout Bugs & NavBar Fix (29 Jun – 1 Jul 2026) ──
  {
    title: "RB V3 Ph9: Update CSIT salary threshold $76,515 → $79,499 across 6 files, 8 strings on day of 1 Jul 2026 government indexation; correct TSMIT → CSIT labels in 2 FAQ files",
    client: ["RedBridge"],
    type: ["Content"],
    status: "Done",
    priority: "Urgent",
    dateCreated: "2026-06-29",
    dateCompleted: "2026-07-01",
    purpose: "The CSIT salary threshold is indexed annually on 1 July. Publishing the wrong threshold on a migration services site is a regulatory accuracy issue — employers relying on the figure could underpay sponsored workers.",
    notes: "Updated $76,515 → $79,499 across 6 content files, 8 string occurrences. Updated on the day of indexation (1 Jul 2026). Also corrected 2 FAQ files using the deprecated label TSMIT → CSIT.",
  },
  {
    title: "RB V3 Ph9: Internal link audit — 10 gaps reviewed; 8 confirmed present via TSX (no change needed); 2 genuine gaps implemented",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-06-29",
    dateCompleted: "2026-07-01",
    purpose: "After Phase 8 linking, a follow-up audit was run to confirm coverage across all 9 employer pathway pages and any new content added since.",
    notes: "10 candidate gaps reviewed via component-tree grep. 8 confirmed already linked (links present in TSX but not visible in nav). 2 genuine gaps found and implemented: /visa-sponsorship-jobs-australia → employer pathway hub, /482-to-pr → 186 page.",
  },
  {
    title: "RB V3 Ph9: Fix PaymentMilestones tablet overflow (840px flex floor vs 700px breakpoint) and mobile dot misalignment — 2 independent CSS root-cause bugs",
    client: ["RedBridge"],
    type: ["Frontend"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-06-29",
    dateCompleted: "2026-06-29",
    purpose: "PaymentMilestones component was overflowing its container on tablets and showing misaligned step dots on mobile — two independent layout bugs in the employer pathway fee explanation section.",
    notes: "Bug 1: 7-item flex row minimum width ~840px vs 700px md: breakpoint — fixed by raising breakpoint to 900px. Bug 2: step-number dots self-centering inside variable-width flex items — fixed by restructuring to flex-row with dot as fixed-width shrink-0 anchor.",
  },
  {
    title: "RB V3 Ph9: Fix NavBar logo overflow — PNG true ratio 2.855:1 vs assumed 4:1; raise nav h-24→h-28; translate-y nudge; update 16 page top-padding offsets (18 files total)",
    client: ["RedBridge"],
    type: ["Frontend"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-07-01",
    dateCompleted: "2026-07-01",
    purpose: "The NavBar logo was overflowing the nav container — the PNG has a true aspect ratio of 2.855:1 but the Next.js Image width/height hint assumed 4:1, causing the rendered height to exceed the nav height.",
    notes: "Fix: raised nav height h-24 → h-28. Added translate-y: -2px nudge to compensate for asymmetric white padding in the PNG. Updated 16 page top-padding offsets across 18 files to match the new nav height. Clean CI pass verified.",
  },

  // ── Phase 10: Technical SEO Overhaul (Late Jun – Jul 2026) ───────────────
  {
    title: "RB V3 Ph10 SEO: Resolve live i18n bug — footer.footer.affiliationPrefix raw key visible to all visitors (duplicate namespace prefix in t() call)",
    client: ["RedBridge"],
    type: ["Frontend"],
    status: "Done",
    priority: "Urgent",
    dateCreated: "2026-07-01",
    dateCompleted: "2026-07-02",
    purpose: "The raw key string 'footer.footer.affiliationPrefix' was rendering in the footer for all site visitors — on a regulated migration services site, unprofessional presentation directly undermines client conversion.",
    notes: "Root cause: t('footer.affiliationPrefix') inside a namespace context that already scoped to 'footer', resulting in t('footer.footer.affiliationPrefix') lookup — key not found → raw key rendered. Fix: remove namespace from t() call or use correct scoping.",
  },
  {
    title: "RB V3 Ph10 SEO: Correct title tags to 50–60 char range on 5 pages; inject primary keywords (482, 186, Melbourne) into H1 headings on 5 pages",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-07-01",
    dateCompleted: "2026-07-03",
    purpose: "Title tags outside the 50–60 char optimal range are truncated in SERPs or underutilise keyword space. H1s without primary keywords miss the strongest on-page ranking signal.",
    notes: "5 pages with title tags corrected to 50–60 char range. 5 pages with H1s updated to include primary keywords: '482 visa', '186 visa', 'Melbourne employer sponsorship', 'employer sponsorship'. EN and ZH updated.",
  },
  {
    title: "RB V3 Ph10 SEO: Rewrite meta descriptions across all key pages to ~150 chars with clear CTAs",
    client: ["RedBridge"],
    type: ["Other", "Content"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-07-01",
    dateCompleted: "2026-07-03",
    purpose: "Meta descriptions don't affect rankings but directly affect click-through rate from SERPs — weak descriptions leave CTR on the table for already-indexed pages.",
    notes: "Rewrote meta descriptions across all key pages to ~150 chars. Each description includes a primary keyword, a differentiator (MARN-registered, Melbourne-based), and a CTA ('Book a consultation', 'Learn more'). EN and ZH.",
  },
  {
    title: "RB V3 Ph10 SEO: Fix alt text on Xiaohongshu icons (2 components); wire hero video poster frame attribute (LCP fix)",
    client: ["RedBridge"],
    type: ["Frontend"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-07-01",
    dateCompleted: "2026-07-03",
    purpose: "Missing alt text on Xiaohongshu (小红书) icons fails accessibility standards and loses keyword signals. Missing video poster means LCP is the first decoded video frame — slow on mobile.",
    notes: "Alt text added to Xiaohongshu icons in 2 components (Footer, SocialLinks). Hero video: added poster='/hero-poster.jpg' attribute — poster loads immediately as a static image, replacing the video frame as LCP candidate.",
  },
  {
    title: "RB V3 Ph10 SEO: Upgrade OG image from broken 160×44px to 1200×630px branded image; upgrade Twitter Card type to summary_large_image",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-07-01",
    dateCompleted: "2026-07-04",
    purpose: "The OG image was the logo at 160×44px — too small to render on any social platform. Twitter Card was set to 'summary', showing a small thumbnail. Both produced unprofessional social share previews.",
    notes: "Created 1200×630px branded OG image (RedBridge teal background, logo, tagline). Updated openGraph.images in generateMetadata(). Twitter Card type changed to 'summary_large_image'. Verified via OpenGraph.xyz and Twitter Card Validator.",
  },
  {
    title: "RB V3 Ph10 SEO: Add LocalBusiness + Organization JSON-LD to homepage; expand FAQPage structured data from 8 to 23 Q&A pairs across all 3 FAQ categories",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "High",
    dateCreated: "2026-07-01",
    dateCompleted: "2026-07-04",
    purpose: "LocalBusiness + Organization JSON-LD gives Google verified entity signals (name, address, phone, MARN, opening hours) for the Knowledge Panel. Expanding FAQPage from 8 to 23 pairs maximises rich result eligibility across all FAQ categories.",
    notes: "LocalBusiness schema: name, address, phone, openingHours, MARN in description, sameAs (GBP URL). Organization schema nested. FAQPage: expanded from 8 to 23 Q&A pairs across Employer, Employee, and General categories. Added FAQPage to /visa-sponsorship-jobs-australia (4 pairs). Total site: 27 Q&A pairs eligible for rich results.",
  },
  {
    title: "RB V3 Ph10 SEO: Verify hreflang alternate tags (en, zh, x-default) in production HTML via curl; improve anchor text specificity on SuccessStrip CTAs + SpokeNavCards",
    client: ["RedBridge"],
    type: ["Other"],
    status: "Done",
    priority: "Medium",
    dateCreated: "2026-07-01",
    dateCompleted: "2026-07-05",
    purpose: "Hreflang fix from Phase 4 needed production verification via curl (not just code review). Generic anchor text ('Learn more', 'Get started') on CTAs misses keyword context signals.",
    notes: "Verified hreflang <link rel='alternate'> tags present in production HTML via curl on 4 routes. Confirmed en, zh, x-default all present with absolute URLs. Anchor text: SuccessStrip CTAs updated to 'Book a 482 consultation' / 'Explore employer sponsorship'. SpokeNavCards updated to descriptive anchor text per destination.",
  },
];

async function login() {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "owner", pin: PIN }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Login failed (${res.status}): ${body}`);
  }
  const data = await res.json();
  return data.token;
}

async function createTask(token, task) {
  const res = await fetch(`${API}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`POST /tasks failed (${res.status}): ${body}`);
  }
  return res.json();
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log(`Logging in as owner…`);
  let token;
  try {
    token = await login();
  } catch (err) {
    console.error(`✗ ${err.message}`);
    process.exit(1);
  }
  console.log(`✓ Logged in. Importing ${tasks.length} tasks…\n`);

  let succeeded = 0;
  let failed = 0;

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    try {
      const created = await createTask(token, task);
      console.log(`✓ [${i + 1}/${tasks.length}] ${created.id} — ${task.title.slice(0, 70)}`);
      succeeded++;
    } catch (err) {
      console.error(`✗ [${i + 1}/${tasks.length}] FAILED — ${task.title.slice(0, 70)}`);
      console.error(`  ${err.message}`);
      failed++;
    }
    if (i < tasks.length - 1) await delay(150);
  }

  console.log(`\n── Done ─────────────────────────────────`);
  console.log(`  Succeeded: ${succeeded}`);
  if (failed > 0) console.log(`  Failed:    ${failed}`);
  console.log(`─────────────────────────────────────────`);
}

main();
