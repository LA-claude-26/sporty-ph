# Sports Trending News Site — Strategy & Blueprint

**Deliverable for Anthony (Marketing & Operator)**
**Date:** November 6, 2026 · **Author:** Manus AI
**Companion demo:** [Interactive Theme Demo](/home/ubuntu/sporty-demo/index.html) · Live preview: `https://3000-ipkdcxk1h3eu9ms189pu8-51ecb640.us5.manus.computer`

---

## 1. Executive Summary

This blueprint defines the structure, purpose, content pipeline, brand, and design system for a **short-story sports trending news website built for a Philippines audience**, with heavy focus on the **NBA, PBA, Gilas Pilipinas, UAAP/NCAA, PVL, and sports betting lines**. Every decision is optimized for **traffic, clicks, leads, and newsletter subscribers**, built around a fast, repeatable editorial engine rather than overcomplicated process.

The content format is validated by the sample provided (the ~250-word Phoenix Suns vs. Orlando Magic betting preview): tight, odds-led, injury-aware short stories that casual fans and bettors can consume in under 90 seconds. A two-editor desk with AI-assisted intake can ship **15–25 stories per day** at a per-story turnaround of **15–45 minutes**.

## 2. Market Opportunity

- **Basketball is the Philippine national sport**: PBA (49th–50th season), NBA (the world's most engaged fan base per capita), Gilas Pilipinas (national team, FIBA), and UAAP/NCAA collegiate leagues collectively dominate online attention.
- **The Philippine online gambling market** reached **~$2.0B in 2025 and is projected at $3.59B by 2034** (IMARC), with PAGCOR-licensed sportsbooks (OKBet, OKFUN) accepting GCash and Maya — the rails that 70M+ Filipinos already use daily.
- **Sports newsletters convert free-to-paid at 1.93%** — more than three times the platform median (Beehiiv 2026 State of Paid Newsletters report), trailing only finance verticals, with an average subscriber lifespan of ~12.9 months.
- **Distribution is mobile-first and social-first**: over 90% of Philippine web traffic is mobile, and Facebook Pages, X, Instagram, YouTube, and **Viber Communities** (the Philippines' #1 messaging app for group fandom) drive the bulk of sports media referral traffic.

## 3. Competitive Landscape

| Competitor | Focus | Strengths | Gaps You Can Exploit |
|---|---|---|---|
| **Spin.ph** (Summit Media) | PBA, NBA, UAAP, NCAA, Gilas, FIBA, PVL, boxing | Biggest dedicated PH sports site; 20–30 stories/day; veteran beat reporters; Viber community | Heavy legacy-CMS feel; very slow mobile pages; no odds/betting widgets; generic UX |
| **Tiebreaker Times** | UAAP, PVL, esports, collegiate, boxing, BJJ | Indie digital media; 414K+ FB followers; strong niche communities | Inconsistent cadence; minimal NBA coverage; no betting content; ad-heavy layout |
| **Inquirer Sports** | PBA, NBA, betting info, US sports | Brand trust; SEO strength | Desktop-first; paywalled-feeling; betting info is buried text, not interactive widgets |
| **GMA / ABS-CBN / One Sports** | All sports, video-led | Massive TV reach; video production | Sites are TV-vertical afterthought; not optimized for fast text consumption |
| **ESPN.ph** | NBA-heavy international | Stats & scores | US-centric tone; weak PBA/UAAP/PVL depth |
| **ClutchPoints** (US model) | NBA/NFL/MLB | "Bite-sized, high-impact storytelling" — the exact short-story format you want | No Philippine localization |
| **Action Network / Covers** (US model) | Betting previews with odds, injuries, ATS | Premium betting-content UX | US sportsbooks only (DraftKings/FanDuel); decimal odds & PAGCOR books absent |

**White space for your site**: nobody in the Philippines has combined (a) ClutchPoints-style bite-sized short stories, (b) Action-Network-style odds/injury/ATS widgets with PAGCOR sportsbooks like OKBet, (c) mobile-first app-feel UX, and (d) a subscriber-first funnel. That is the exact product this blueprint designs.

## 4. Deconstruction of the Sample Story Format

Your sample (NBA: Phoenix Suns vs. Orlando Magic, ~250 words) follows a proven six-part formula:

1. **Hook + context** (2 sentences): matchup, recent form (Suns 1-9 last 10; Magic 2-8).
2. **The market snapshot** (2 sentences): OKBet moneyline (1.90 / 1.96), handicap (PHX -1 @ 1.97 / ORL +1 @ 1.91), total (222.5) — always in **decimal odds**, which is the Philippine sportsbook standard.
3. **Injury report** (names of the OUTs): Banchero, Suggs, Isaac, Penda, Nelson; Williams out for PHX; Fleming/Goodwin DTD — this is where the real betting edge lives.
4. **Key stat edge** (1-2 sentences): Magic 105.7 PPG vs. Suns 124.3 PPG allowed; Suns totals going OVER in 8 of last 10.
5. **Historical ATS trend**: Magic 8-1-1 ATS in last 10 head-to-head meetings.
6. **Closing verdict**: why the number is the play — concise conclusion, never a direct "bet this" (compliance safety).

This structure takes a research-heavy editorial lift (odds checking, injury checking, ATS scraping) and compresses it into a skimmable 90-second read. With the pipeline below, the heavy research is automated and the editor focuses only on the human voice and angle.

## 5. How Long This Will Take

### Content turnaround per story

| Stage | Owner | Time | Output |
|---|---|---|---|
| Trend intake (Perplexity + RSS + X + odds APIs) | AI agents | 3 min | Idea Bank card with source links, odds, injuries |
| AI research draft | LLM | 2-3 min | 300-word structured draft (hook/market/injuries/stat edge/ATS/verdict) |
| **Heavy editorial pass** | Human editor | 15-30 min | Voice, Philippine angles, Taglish flavour where fitting, tighter hooks |
| SEO + voice optimization + fact-check | Editor | 5-10 min | Meta title, description, schema, link check, odds verification |
| Publish + distribute | Automation | 2 min | Web, newsletter digest queue, Viber/FB broadcast |
| **Total per short story** | | **30–45 min** (breaking news rewrite: 10–20 min) |

A **2-editor desk ships 15–25 stories per day**. The PGA Tour AWS case study proves near-instant AI drafts at scale (1,200+ pieces/week at <$0.25 each); your model adds the human voice layer that readers actually come back for.

### Site build timeline (6–10 weeks)

- **Weeks 1-2 — Phase 1 MVP**: domain, Astro/Next.js shell, dark modern theme (from the provided demo design system), CMS setup, 30 starter stories, OKBet odds widget v1, newsletter capture, analytics.
- **Weeks 3-4 — Phase 2 pipeline automation**: Perplexity/RSS idea-bank intake bot, LLM drafting agent, editorial kanban, auto-thumbnail generation, auto-newsletter digest builder.
- **Weeks 5-6 — Phase 3 growth engine**: article-level recommendation engine, live odds ticker, injury wire, community picks polls, Viber broadcast, affiliate tracking.
- **Weeks 7-10 — Scale**: PVL & collegiate coverage depth, paid acquisition tests (FB ads, ₱10–₱20 per subscriber in PH), brand partnerships.

## 6. Content Pipeline Architecture

```
[Perplexity API] ──┐
[RSS feeds]       ──┼─► [IDEA BANK] ──► [AI RESEARCH DRAFT] ──► [HEAVY EDITORIAL]
[X / FB trends]   ──┤    ranked by      structured 300-word       human voice,
[Odds movement]   ──┘    buzz + gaps     draft with sources       PH angle, bets
                                                                          │
                                                                   [SEO + FACT-CHECK]
                                                                          │
                                                                   [AUTO-PUBLISH]
                                                                   web · newsletter ·
                                                                   Viber · FB · X
```

### The Idea Bank
Trending signals are ingested continuously from Perplexity (best for "what is trending right now and why"), RSS of ~40 sources (NBA.com, Spin.ph, Tiebreaker Times, Action Network, Covers, Philippine news sites), X lists, FB fan groups, and sportsbook line movements. Each idea card arrives pre-tagged with category (NBA/PBA/GILAS/PVL/UAAP), trend score, recommended angle, source links, and — for betting pieces — current odds and injury status.

### Heavy Editorial
The AI draft is deliberately conservative and generic; the human editor's job is **voice**:
- **Tone**: confident, sharp, fan-first, Philippine-conversational ("resbak", "clutch", "OT", "sweep", "upset"), never dry-corporate.
- **Angle**: every story answers *why it matters for this audience* (a Gilas injury story frames the Cone adjustment; an NBA story frames the decimal-odds value for PH bettors).
- **Compliance**: never guarantee outcomes; always display decimal odds with bookmaker attribution; 21+ disclaimer on betting modules.

### SEO + Optimization Layer
- Keywords: `[team] vs [team] odds prediction 2026`, `PBA semifinals Game 4 schedule`, `Kai Sotto injury update`, `OKBet NBA lines`
- Schema: `SportsEvent` + `Article` structured data for Google Discover eligibility
- Internal link density: 3-5 links per article into league/team hubs
- Evergreen cluster: "how to read decimal odds", "OKBet review Philippines", "PBA betting guide" — the SEO money pages

## 7. Trendy Name & URL Recommendations

| Name | Vibe | Domain Angle | Score |
|---|---|---|---|
| **CLUTCH PH** (used in demo) | American-sports energy, iconic basketball word | `clutchph.com` / `clutch.ph` | ★★★★★ |
| **BALLSHOT** | Short, punchy, youth-culture | `ballshot.ph` / `ballshot.media` | ★★★★☆ |
| **BUZZER PH** | Urgency + Filipino "buzzer-beater" obsession | `buzzerph.com` / `buzzer.ph` | ★★★★☆ |
| **FASTBREAK PH** | Speed-of-news + transition basketball | `fastbreakph.com` (note: fastbreak.com.ph exists, check conflict) | ★★★☆☆ |
| **FULLCOURT PH** | Complete coverage promise | `fullcourtph.com` | ★★★★☆ |
| **HOOPBEAT** | Rhythm + heart, modern | `hoopbeat.ph` / `hoopbeat.com` | ★★★★★ |
| **TEMPO PH** | Fast-paced, editorial | `tempoph.com` | ★★★☆☆ |
| **OT NEWS** | Overtime = extra, trendy | `otnews.ph` | ★★★★☆ |
| **THE RIM PH** | Street-basketball aesthetic | `therimph.com` | ★★★☆☆ |
| **BENCHWARMER** | Casual, fan-relatable | `benchwarmer.ph` | ★★★★☆ |
| **PALASPORT** | "Pala" = casual Philippine filler + sports | `palasport.ph` | ★★★☆☆ |
| **SIKLAB SPORTS** | Filipino ("flare/spark") energy | `siklabsports.ph` | ★★★★☆ |

**Top 3 recommendation**: (1) **CLUTCH PH**, (2) **HOOPBEAT**, (3) **BUZZER PH**. Buy both `.ph` (through dot.ph) and `.com` — `.ph` signals local authenticity; `.com` protects the brand.

## 8. Website Structure & "Application Feel"

### Information architecture
- **Homepage**: live odds ticker → breaking bar → hero story → 3-column layout (trending list / story feed / widgets) → newsletter module
- **League hubs** (SEO pillar pages): `/nba`, `/pba`, `/gilas`, `/uaap`, `/ncaa`, `/pvl`, `/betting`, `/mpbl`
- **Game/match hubs**: `/match/phoenix-suns-vs-orlando-magic-2026-11-06` (aggregates preview, odds history, injuries, recap, community pick)
- **Odds & picks hub**: `/odds` — live decimal odds board with OKBet/PAGCOR links
- **Guides**: `/guides/how-to-read-decimal-odds`, `/guides/pba-betting-philippines`
- **Newsletter**: `/newsletter` + dedicated subscriber landing page

### What gives it "application feel"
- **App-shell UX**: sticky header with league pills, always-visible ticker, mobile bottom-navigation bar (Home / Scores / Odds / Trending / Inbox)
- **Instant navigation**: client-side routing, skeleton loaders, optimistic UI for community polls
- **Live widgets**: odds cards update every 15 min; injury wire chip system (OUT/DTD/Q) with player status; ATS trend badges; public money %
- **Article deep view** (demonstrated in the demo): back-to-feed transition, stat-strip data cards, inline subscriber capture, and the 3-tier recommendation engine
- **Dark-carbon default** (`#0B0F17`) with electric-lime (`#C8FF00`) accent — the exact palette of modern sports-betting media (Sofascore, Apple Sports, The Athletic) — with a light-mode toggle for readability preferences

## 9. Article-Level Recommendation Engine

The user explicitly asked for "tons of recommendations on article level." Each article carries **three recommendation tiers** rendered as responsive card grids:

1. **Tier 1 — More in this series / game hub**: sibling content about the *same match* (injury impact, betting-edge deep dive, ATS breakdown, recap once published). This is the highest-click module because it serves the reader's current intent.
2. **Tier 2 — Trending bets today**: market-movement pieces across leagues (PBA line shifts, NBA public money, UAAP futures). This is the click-funnel module toward affiliate conversions.
3. **Tier 3 — You may also like**: topic/similarity content (Gilas updates, PBA feature, betting guides). This is the recirculation module that doubles pages-per-session.

Supporting micro-recommendations inside the layout: the **Injury Wire**, **Live Odds Board**, **Community Pick poll** (engagement widget that returns), and **Trending Now ranked list** in the sidebar. Target: **≥3.2 pages per session** (PH sports average is ~1.8).

## 10. Traffic, Clicks & Subscriber Funnel

```
[SEO + Google Discover] ─┐
[FB Page / Groups]       ──┼─► ARTICLE PAGE ──► CLICKS (odds widgets,
[Viber Community]        ──┤   (app-feel)       internal links, polls)
[X / Instagram]          ──┤                     │
[Word-of-mouth]          ─┘                     ▼
                                          SUBSCRIBERS
                                   (Beehiiv: 1.93% benchmark)
                                         │            │
                                         ▼            ▼
                                    CLUTCH DAILY   Viber
                                    newsletter    broadcast
```

### Lead capture architecture
- **Primary CTA**: "CLUTCH DAILY" — top-5 stories + betting edges every morning 7AM PHT, free (Beehiiv or Substack; Beehiiv recommended: 0% cut, referral program, sponsorship network).
- **Article-level capture**: inline form after the story body + sticky sidebar widget.
- **Exit/scroll capture**: modal triggered at 70% scroll depth or on exit intent (soft, dismissable).
- **Secondary rail**: Viber Community (Filipino fandom default) linked in every confirmation email.
- **Conversion math**: 500K monthly sessions × 0.8% capture = 4,000 new subscribers/month; sports newsletter free-to-paid conversion is 1.93% (3x platform median), implying a future premium tier (VIP betting picks @ ₱499/mo) can monetize ~77 paid subs per 4K cohort.

## 11. Monetization Model

1. **Betting affiliates (primary)**: PAGCOR sportsbooks (OKBet, OKFUN, 1xBet, 22bet, Betso88) pay CPA of ₱1,500–₱4,000 per first-time depositor or 25–45% revenue share. The decimal-odds format and match previews are built *specifically* for this conversion path.
2. **Programmatic ads**: Google Ad Exchange / Mediavine / Monumetric — PH CPMs ($0.50–$2.50) mean ads alone won't fund the newsroom; they are the baseline layer.
3. **Newsletter sponsorships**: a 25K+ subscriber Philippine sports list commands $20–$60 CPM per issue ($500–$1,500 per daily send).
4. **Direct sportsbook sponsorships**: named odds board ("Odds Board powered by OKBet"), sponsored weekly features.
5. **Premium tier (future)**: CLUTCH VIP picks — model-based projections, exclusive Gilas insider notes, ₱499–₱999/mo.

## 12. Theme Design System (Implemented in Demo)

The full interactive demo is live at `/home/ubuntu/sporty-demo/index.html` (served on port 3000, ephemeral preview URL `https://3000-ipkdcxk1h3eu9ms189pu8-51ecb640.us5.manus.computer`). Design tokens:

- **Backgrounds**: `#0B0F17` (canvas), `#131A26` (cards), `#0F1622` (wells), `#182233` (card hover)
- **Borders**: `#1E2B3E` (default), `#2C4160` (highlight)
- **Text**: `#F3F6FA` (primary), `#8A9AB2` (dim), `#5E6F87` (muted)
- **Accent**: `#C8FF00` (electric lime) with `#C8FF0040` glow — the single brand color used on CTAs, badges, live indicators, and odds highlights
- **Semantic colors**: `#2F80ED` (NBA blue), `#F59E0B` (PBA amber), `#EF4444` (Gilas/injury red), `#34D399` (PVL teal), `#A78BFA` (college violet)
- **Typography**: `Bebas Neue` (46–42px display headings, 1.0 letter-spacing), `Inter` (14px body, 600-weight subheads), `JetBrains Mono` (odds, numbers, times)
- **Radius**: 14px cards, 8px inputs/buttons, 20px pills
- **Motion**: 150–200ms transitions, -2px hover lifts, pulse live-dot

The demo includes: working brand name switcher, league pill filtering, scores ticker, breaking bar, hero with OKBet odds card, 3-column feed with odds/injury/ATS chips, full article view (the Suns-Magic sample rendered with data strips and 3-tier recommendation modules), a **live-pipeline control room** visualizing Idea Bank → AI Draft → Heavy Edit → QA → Published, a subscriber modal, a mobile bottom nav, and a light-mode toggle.

## 13. Phase 1-3 Launch Roadmap

| Phase | Duration | Milestones | Success KPI |
|---|---|---|---|
| **P1 — MVP** | Weeks 1-2 | Brand chosen, domain + Astro/Next.js site live, 30 short stories, OKBet widget v1, newsletter form, analytics | Site live; first 100 subscribers |
| **P2 — Engine** | Weeks 3-4 | Perplexity intake bot, LLM drafting agent, editorial kanban, 15+ stories/day, Viber channel | 50K sessions/mo; 1,000 subscribers |
| **P3 — Growth** | Weeks 5-6 | Recommendation engine, live ticker, injury wire, community polls, affiliate links wired, Discover optimization | 200K sessions/mo; 3.0+ pages/session |
| **Scale** | Weeks 7-10 | PVL/collegiate expansion, paid sub acquisition, sponsorships, 25K subscribers | ₱200K+ monthly revenue run-rate |

## 14. Risks & Mitigations

- **Odds accuracy risk**: odds change fast — always show a timestamp ("lines at 09:18 PHT") and link to the sportsbook as source of truth; never guarantee lines.
- **PAGCOR/regulatory risk**: only partner with PAGCOR-licensed operators; display 21+ and responsible-gambling disclaimers; no betting links targeting minors.
- **AI factual errors**: injuries and stats must be verified against official box scores / injury reports; this is the mandatory 5-minute fact-check step in the SLA table.
- **Content staleness**: short stories are timestamp-stamped; breaking pieces get refreshed (re-published) instead of edited silently, so Google Discover re-indexes them.

---

## 15. Theme Revision (Nov 6, 2026 — Round 2 per feedback)

- **Mint green accent**: shifted from electric lime to `#00E8A7` (vibrant sports mint) with `--mint-soft: #85d4ae` (the exact LeadAdvisors brand mint token) and soft mint glows — fresh, modern, and distinct from the generic sportsbook green.
- **Readable font pairing**: replaced Bebas Neue with **Poppins** (700–900 weight, tight tracking) for display headings and **Inter** (15px/1.6 body) for text — the widely-tested pairing also used by the LeadAdvisors design system, chosen for effortless readability on phones.
- **Real images**: hero arena background, article-card thumbnails, injury-wire player avatars, and a matchup hero image in the article deep view (8 optimized assets collected).
- **Team logo icons**: inline SVG logo badges for all ticker teams (PHX, ORL, SMB, GIN, BOS, PHI, LAL, DEN, CON, ROS, UP, ADU, Gilas) replacing text abbreviations in the scoreboards.
- **Why this page will win**: 90-second skimmable short stories (ClutchPoints model), app-feel widgets no PH competitor has (odds board, injury wire, live ticker), decimal-odds affiliate funnel into PAGCOR books, 3-tier recommendation engine for >3 pages/session, and a newsletter-first capture engine with a 1.93% free-to-paid conversion benchmark (Beehiiv 2026).

---

## 16. Multi-Page Demo Expansion (Nov 6, 2026 — Round 3 per feedback)

Per request for a multi-page "few pager" with working post variations, demo ads at the top, and sidewinder-level widgets (modeled on `covers.com/nfl/ai-predictions-week-9-2026`), the demo now ships as a 6-page interlinked site:

1. **Homepage** (`index.html`) — hero with OKBet odds card, scores ticker with team logo icons, breaking bar, post-variations gallery, 3-column layout with trending list, idea bank, and the sidewinder (odds board, 300×250 demo ad, injury wire, community pick, newsletter capture).
2. **Post Variation 1 — AI Predictions** (`article-ai-predictions.html`) — Covers-style post with full-slate predictions table, pick chips linked to sportsbooks, matchup deep-dive cards with predicted scores, win-probability bars, season record table, and "how it works" explainer.
3. **Post Variation 2 — Game Betting Preview** (`article-suns-magic.html`) — the ~250-word Suns vs Magic format supplied in the brief: decimal odds snapshot, injury report, key stats, ATS trends, verdict.
4. **League Hub** (`league-pba.html`) — PBA semifinals series tracker, championship futures table, and PBA short-story cluster (SEO pillar page pattern).
5. **Odds & Picks Board** (`odds.html`) — dedicated decimal odds board with best-price mint highlights, injury flags, and affiliate bet links.
6. **Subscriber Funnel Page** (`newsletter.html`) — CLUTCH DAILY free vs VIP tiers, perks, Viber community access, and Beehiiv-benchmark conversion math.

All pages share the leaderboard demo ad at the very top, the sidewinder widgets at content level (including the 300×250 demo ad), real imagery, team logo icons, and mobile bottom navigation. Two Notion master tasks now track the initiative: "CLUTCH sports strategy" (strategy master task, living reference) and "Build CLUTCH PH sports trending news website" (execution build task).

---

## 17. Next.js Conversion & Vercel Readiness (Nov 6, 2026 — Round 4 per feedback)

The ephemeral sandbox demo link expired while idle, so the entire 6-page site was converted into a production **Next.js 15 (App Router)** project in `/home/ubuntu/sporty` with React 19, TypeScript, Tailwind CSS, App Router routing, and the full mint-green design system ported into `src/app/globals.css`.

- **Pages:** `/` (homepage), `/article/ai-predictions` (Covers-style variation 1), `/article/suns-vs-magic` (game betting preview variation 2), `/league/pba` (hub), `/odds` (board), `/newsletter` (funnel)
- **Shared shell:** leaderboard demo ad at the very top of every page, Header with brand switcher + theme toggle, Ticker with 15 inline SVG team badges, Sidewinder with live odds / injury wire / community pick / CLUTCH DAILY capture / 300×250 demo ad, Footer, and mobile bottom nav
- **Production build verified:** `next build` with `output: 'export'` generates 12 static routes, ~112 kB first-load JS, sitemap.xml, robots.txt, icon.svg, and the `out/` export folder
- **Deliverables:** [sporty.zip](/home/ubuntu/sporty.zip) (source code, 4.3 MB), [sporty.bundle](/home/ubuntu/sporty.bundle) (git repo with full history, 2.1 MB), plus the live demo served from the export at port 3000
- **Vercel path:** import the repo on `vercel.com/new` with the auto-detected Next.js preset; or push from the bundle/zip to a new GitHub repo first; or supply a Vercel token for one-command CLI deployment

---

The owner finalized the brand name **SPORTY** (Sporty / SPORTY PH). The entire codebase was rebranded accordingly: the "C" mark was replaced with the **mint "S"**, the morning newsletter became **SPORTY DAILY**, the VIP tier **SPORTY VIP**, sitemap/robots URLs now point to `sportyph.vercel.app`, and all five Notion subtasks plus the overview task were renamed and logged. Recommended domain candidates: `sporty.ph`, `sportyph.com`, `sportyph.ph`. Fresh deliverables for the repo handoff: [sporty.zip](/home/ubuntu/sporty.zip) (4.4 MB) and [sporty.bundle](/home/ubuntu/sporty.bundle) (2.1 MB).


---

*This document was generated by Manus AI on November 6, 2026. Companion interactive theme demo: [index.html](/home/ubuntu/sporty-demo/index.html) and Next.js project: [sporty.zip](/home/ubuntu/sporty.zip). Corresponding tracking tasks created in LeadAdvisors Master Tasks DB (Website — Apps project).*

## 19. Clean Minimalist Redesign — Design-Skill-Driven Rebuild (Nov 6, 2026)

Following user feedback ("It's not clean at all / I need it to be clean easy to read and sports scores boards / u r lacking skills"), the design skills from the user's GitHub repo ([LeadAdvisorsdotcom/taste-skill](https://github.com/LeadAdvisorsdotcom/taste-skill)) were installed locally: `minimalist-ui`, `design-taste-frontend`, `high-end-visual-design`, `redesign-existing-projects`, and `full-output-enforcement`. The entire site was redesigned against those skills:

- **Palette**: warm monochrome canvas `#FAFAF9`, white cards `#FFFFFF`, light borders `#EAEAEA`, mint `#00C896` used only as a scarce accent
- **Scoreboard rail**: prominent horizontal live/final/upcoming game cards (NBA, PBA, UAAP) with decimal odds chips — the #1 feature every sports site leads with
- **Typography**: Inter across all pages with generous line heights and strict hierarchy; no ALL-CAPS eyebrow abuse
- **6 pages rewritten clean**: homepage (hero top story, 3-card grid, 3-column body), Covers-style AI predictions article with slate tables and win-probability bars, game betting preview, PBA league hub with series tracker, live odds board, newsletter funnel
- **Restrained ad placements**: thin leaderboard and sidebar rectangles, quiet and professional
- **Verified build**: 12 static routes, ~112 kB first load JS, all endpoints return HTTP 200
- **Fresh bundles**: [sporty.zip](/home/ubuntu/sporty.zip) (4.5 MB) and [sporty.bundle](/home/ubuntu/sporty.bundle) (2.2 MB)

---

*This document was generated by Manus AI on November 6, 2026. Companion interactive theme demo: [index.html](/home/ubuntu/sporty-demo/index.html) and Next.js project: [sporty.zip](/home/ubuntu/sporty.zip). Corresponding tracking tasks created in LeadAdvisors Master Tasks DB (Website — Apps project).*
