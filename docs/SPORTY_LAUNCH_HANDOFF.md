# Sporty — Launch Hand-Off

**Document owner:** Anthony · **Version:** 1.0 · **Date:** 25 November 2026
**Purpose:** everything a new operator needs to take Sporty from "built" to "live and publishing," without asking the person who built it.

---

## 1. What is being handed off

| Asset | What it is | Where it lives |
|---|---|---|
| Public site | Next.js 15 App Router, statically exported, 6 routes | `sporty-ph` repository, deployed on Vercel |
| Editorial Studio | The newsroom CMS demo — intake queue, topic bank, writing desk, auto-post rules | `/admin` on the same deployment |
| Strategy blueprint | Positioning, design system, content pipeline, SEO architecture | `docs/SPORTY_STRATEGY.md` |
| Client pitch & SEO plan | Pricing, editorial plan, remarketing system | `docs/CLIENT_PITCH_AND_SEO_PLAN.md` |
| Content automation SOP | The five-stage pipeline, autonomy ladder, QA gates | `sports-content-automation` skill |
| This document | The go-live runbook | `docs/SPORTY_LAUNCH_HANDOFF.md` |

**Routes on the live site:** `/` (home) · `/odds` (odds board) · `/newsletter` (SPORTY DAILY signup) · `/article/ai-predictions` · `/article/suns-vs-magic` · `/league/pba` · `/admin` (Editorial Studio).

---

## 2. Access inventory

Fill this in before hand-off and store it in the team password manager. The launch cannot be supported without it.

| Access | Owner | Where the credential lives | Notes |
|---|---|---|---|
| GitHub repository | | | `sporty-ph`, main branch protected |
| Vercel project | | | Production + preview deployments |
| Domain registrar | | | DNS control required |
| Google Search Console | | | Verify both domain and URL-prefix properties |
| Google Analytics 4 | | | Property + data stream |
| Google Tag Manager | | | Container for all tags |
| Email service provider | | | Newsletter list + sending domain |
| Sportsbook affiliate accounts | | | OKBet, ArenaPlus — approved affiliate IDs |
| Social accounts | | | Facebook page, X, TikTok, Viber/Telegram channel |
| Image library | | | Licensed stock or owned photography |

**Rule:** no launch until every row has an owner. Unowned access is how launches stall on day two.

---

## 3. Pre-launch checklist (T–14 days)

### Technical

- [ ] Production domain purchased and pointed at Vercel
- [ ] **Deployment Protection turned OFF** in Vercel → Settings → Deployment Protection (this is the single most common blocker — with it on, every shared link redirects to a Vercel login and the client thinks the site is broken)
- [ ] `robots.txt` allows Googlebot, Bingbot, GPTBot, PerplexityBot, ClaudeBot, Google-Extended
- [ ] `sitemap.xml` live and submitting
- [ ] `sitemap-news.xml` live for the last 48 hours of stories
- [ ] `llms.txt` at the domain root
- [ ] Every route returns 200 — test all seven including `/admin`
- [ ] Open Graph and Twitter card images render on all routes
- [ ] Canonical tags correct on every page
- [ ] Lighthouse: LCP under 2.5s on mobile, CLS under 0.1

### Content

- [ ] 20 stories published before launch day (a site with 3 stories looks abandoned)
- [ ] Homepage hero, secondary rail, and sidebar all populated with real content
- [ ] League hubs exist for NBA, PBA, and at least one of NFL/Soccer/PVL
- [ ] About, Contact, Privacy, Terms, and Affiliate Disclosure pages live
- [ ] 21+ and responsible-gambling language on every page showing odds

### Commercial

- [ ] Sportsbook affiliate IDs issued and links carrying the tracking parameter
- [ ] Affiliate disclosure near the first affiliate link on every earning page
- [ ] Newsletter capture form connected to the ESP and sending a test welcome email
- [ ] Ad slots defined and labelled (top banner, in-content, sidebar)
- [ ] Analytics conversion events firing: newsletter signup, affiliate click, odds widget view

### Editorial

- [ ] Two editors trained on the five-stage pipeline
- [ ] Editorial standards read and acknowledged by both
- [ ] Autonomy ladder agreed: which categories may auto-post on day one (recommendation: none — start at level 1 and promote after two clean weeks)
- [ ] Correction policy understood and logged in the CMS
- [ ] First week's fixture shells created in the topic bank

---

## 4. Domain and DNS

1. Buy the domain at the registrar of record.
2. In Vercel → Project → Settings → Domains, add both the apex (`sporty.ph`) and `www`.
3. At the registrar, point the apex to Vercel's A record and `www` to the CNAME Vercel shows. Do not guess these values — copy them from the dashboard.
4. Wait for propagation (usually under an hour, up to 24).
5. Confirm the redirect: `www` should 308 to the apex, or the reverse — pick one and be consistent.
6. Verify TLS is issued automatically. If it stalls, remove and re-add the domain in Vercel.

---

## 5. Vercel configuration that must be right

| Setting | Value | Why |
|---|---|---|
| Deployment Protection | **Disabled** | Otherwise every client and reader link hits a login wall |
| Framework preset | Next.js | Correct build command and output |
| Node version | 20.x | Matches the build |
| Output | Static export (`out/`) | The app is `output: 'export'` |
| Build command | `npm run build` | |
| Environment variables | Analytics IDs, affiliate IDs, ESP keys | Never commit these to the repo |
| Domains | apex + www | |
| Git integration | Auto-deploy on `main` | Every push is a release |

**Publish flow:** push to `main` → Vercel builds → production updates. There is no manual upload step.

---

## 6. Analytics and measurement

Set up in this order, because each layer depends on the one above.

1. **GA4 property** with a web data stream for the production domain.
2. **GTM container** installed in the site's root layout, firing GA4 plus any ad pixels.
3. **Four conversion events**, defined once and never renamed:
   - `newsletter_signup` — form submit success
   - `affiliate_click` — any outbound sportsbook link, with `operator` as a parameter
   - `odds_widget_view` — odds block enters viewport
   - `article_scroll_75` — 75% scroll depth
4. **Search Console** verified, sitemap submitted, both properties.
5. **Dashboard** — four numbers on one screen: sessions, newsletter capture rate, affiliate click rate, pages per session.

Do not add a fifth metric in month one. Four is what a two-editor desk can actually act on.

---

## 7. Newsletter setup (SPORTY DAILY)

| Item | Value |
|---|---|
| Send time | 07:00 PHT, every weekday |
| Format | 3 stories, 60 words each, one odds line, one CTA |
| Sending domain | Subdomain of the main domain (e.g. `mail.sporty.ph`) |
| Authentication | SPF, DKIM, DMARC all configured before the first send |
| Welcome sequence | 3 emails: day 0 confirmation, day 1 best-of, day 3 odds explainer |
| Capture points | Hero band, mid-article box, sticky mobile footer, exit intent |

Send one test to the team, then one to a small seed list, then the full list. Never send a first campaign to the whole list without a seed test — a deliverability problem on day one is very hard to undo.

---

## 8. Affiliate and compliance onboarding

1. Apply to each sportsbook affiliate programme and record the approval date.
2. Store the affiliate ID in Vercel environment variables, never in the repo.
3. Build the link pattern once: `{operator_base_url}?ref={affiliate_id}&utm_source=sporty&utm_medium=article`.
4. Place the disclosure near the first affiliate link, above the fold, in plain language.
5. Add the age gate and regulator line to every page that shows odds.
6. Log every odds snapshot with operator name and timestamp — this is both a compliance requirement and the thing that protects the site if a price is disputed.

**Non-negotiable:** no odds without a timestamped source, no certainty language ("guaranteed", "sure win", "risk-free"), no stake recommendations.

---

## 9. First 30 days of content

The mix matters more than the volume. A desk that publishes only wires gets a traffic spike and then flatlines.

| Week | Wires | Durable pillars | Notes |
|---|---|---|---|
| 1 | 10/day | 3 | Publish the pillars first so the site has depth on day one |
| 2 | 12/day | 3 | Add the second league hub |
| 3 | 15/day | 4 | First odds explainer series |
| 4 | 15/day | 4 | First monthly recap feature |

**Pillars to build in month one:** how to watch the PBA in 2026 · NBA schedule in Philippine time · what a handicap actually means · PBA team guide · best sportsbook bonuses compared (with disclosure) · UAAP season explainer · PVL conference guide.

Every pillar should be linked from the homepage and from at least three wires. A pillar nobody links to is a page nobody finds.

---

## 10. Team and roles

| Role | Headcount | Responsibility | Hours/day |
|---|---|---|---|
| Editor-in-chief | 1 | Standards, autonomy ladder, corrections, weekly review | 2 |
| Desk editor | 2 | Triage, fact pass, voice pass, publish | 6 each |
| Newsletter editor | 0.5 | Morning send, welcome sequence, list health | 1 |
| Growth/SEO | 0.5 | Search Console, pillar calendar, internal links | 2 |
| Developer (on call) | 0.2 | Deploys, broken links, analytics fixes | as needed |

Two desk editors at 28 minutes per story sustain roughly 25 stories a day. Do not promise 50 without auto-post on level 2–3 categories and a fourth editor.

---

## 11. Launch day runbook

| Time (PHT) | Action | Owner |
|---|---|---|
| 06:00 | Final production deploy; confirm all routes 200 | Dev |
| 06:30 | Deployment Protection confirmed off; open the site on a phone that is not logged in | Dev |
| 07:00 | First SPORTY DAILY send to the seed list | Newsletter |
| 08:00 | Search Console: submit sitemap, request indexing on the 10 best URLs | Growth |
| 09:00 | Publish 5 stories from the queue; confirm each renders correctly on mobile | Desk |
| 11:00 | Social cards for the top 3 stories | Growth |
| 13:00 | Check GA4 realtime — are sessions and events arriving? | Dev |
| 15:00 | Publish 5 more; run the auto-post audit | Desk |
| 17:00 | First-day review: what broke, what was slow, what to fix tomorrow | EIC |
| 18:00 | Handoff note written | Desk |

**Launch-day success is not traffic.** It is: every page loads, every link works, the newsletter sends, analytics records, and ten stories are live. Traffic is week four.

---

## 12. First 7 days

- Publish every day, including the weekend. A gap on day three signals the site is dormant.
- Read every auto-published story end to end. Log any error with the pipeline stage that let it through.
- Watch Search Console for coverage errors daily; fix the first five immediately.
- Check the newsletter capture rate daily. Under 0.5% means the forms are not where readers are.
- Confirm affiliate clicks are recording before spending anything on promotion.

---

## 13. First 30 days — what "working" looks like

| Metric | Floor | Target |
|---|---|---|
| Stories published | 200 | 350 |
| Sessions | 15,000 | 60,000 |
| Newsletter subscribers | 300 | 1,000 |
| Capture rate | 0.6% | 1.2% |
| Affiliate clicks | 200 | 1,000 |
| Pages per session | 1.6 | 2.4 |
| Fact-error rate | under 1 in 100 | under 1 in 200 |

If sessions are strong but affiliate clicks are weak, the odds modules are in the wrong place. If clicks are strong but subscribers are weak, the capture points are too late in the page. If both are weak, the content is not matching search intent — go back to the pillar list.

---

## 14. Handover sign-off

Both parties initial every line. This is the document that prevents "nobody told me."

| Item | Handed over | Received | Date |
|---|---|---|---|
| Repository access | | | |
| Vercel project access | | | |
| Domain and DNS control | | | |
| Search Console and GA4 | | | |
| ESP and newsletter list | | | |
| Affiliate accounts and IDs | | | |
| Social accounts | | | |
| Editorial Studio walkthrough completed | | | |
| Content automation SOP read | | | |
| Editorial standards acknowledged | | | |
| Autonomy ladder agreed | | | |
| This runbook reviewed | | | |

---

## 15. Escalation

| Issue | First response | Escalate if |
|---|---|---|
| Site down or 5xx | Check Vercel deployment status, roll back to last good deploy | Not resolved in 15 minutes |
| Wrong score or fact published | Correct on site, note at top, social correction | It touches a named person or a legal matter |
| Affiliate links not tracking | Verify the tracking parameter and the network's reporting | Revenue at risk beyond one day |
| Newsletter deliverability drop | Check authentication records, pause sends | Open rate drops below 20% |
| Traffic collapse | Check Search Console manual actions and coverage | No recovery in 72 hours |

---

## 16. Running costs to expect

| Item | Monthly |
|---|---|
| Vercel Pro | ~$20 |
| Domain | ~$2 (annualised) |
| Email service provider | $0–$50 depending on list size |
| Analytics | $0 (GA4) |
| Image library | $0–$30 |
| Intake and research APIs (if used) | under $40 at 50 wires/day |
| **Total infrastructure** | **~$60–$140** |

Content production is the real cost: two desk editors is the line item that decides whether this business works, not hosting.

---

*Hand-off prepared 25 November 2026. Pair this document with `docs/SPORTY_STRATEGY.md` for the why and the `sports-content-automation` skill for the how.*
