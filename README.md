# Sporty

Philippines-focused sports trending news website — NBA, PBA, Gilas, UAAP, NCAA, PVL and live decimal odds from PAGCOR-licensed sportsbooks.

## Tech stack

- **Next.js 15 (App Router)** + React 19 + TypeScript
- **Tailwind CSS** + mint-green design system (`#00E8A7`, `--la-mint: #85d4ae`)
- **Typography:** Poppins (display) + Inter (body) + JetBrains Mono (data)
- **Deployment:** Vercel

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # production server
```

## Deploy to Vercel

The repo `github.com/LA-claude-26/sporty-ph` is Git-connected to the Vercel project
**`sporty-ph`** on the **leadadvisors** team. Every push to a branch builds a preview;
every merge to `main` builds production.

### Which URL to share

| URL shape | What it is | Who can open it |
|---|---|---|
| `sporty-ph-xxxxxxxx-leadadvisors.vercel.app` | Hashed per-deployment URL | Vercel team members only (login wall, by default) |
| `sporty-ph-git-<branch>-leadadvisors.vercel.app` | Branch preview | Vercel team members only (login wall, by default) |
| `sporty-ph.vercel.app` | Production domain, updated on every merge to `main` | **Anyone** |

So: merge to `main` and share the production domain. No settings change is needed
for that. If preview links must also be shareable, go to **Project → Settings →
Deployment Protection** and set *Vercel Authentication* to **Disabled**, or keep it
on and use the *Share* button on a deployment to mint a time-limited public link.

Optional: **Settings → Domains** → add `sporty.ph` (or whichever domain is bought),
then set `NEXT_PUBLIC_SITE_URL=https://sporty.ph` under *Environment Variables* so
sitemap, robots and Open Graph tags use the custom domain.

### Build settings

| Setting | Value |
|---|---|
| Framework preset | Next.js (auto-detected via `vercel.json`) |
| Build command | `next build` (static export, `output: "export"`) |
| Output directory | `out` (Next.js static export, auto-detected) |
| Node.js | 22.x |
| Env vars | none required. `NEXT_PUBLIC_SITE_URL` optional (see above) |

The canonical site URL is resolved in `src/lib/site.ts`: `NEXT_PUBLIC_SITE_URL`
→ Vercel's `VERCEL_PROJECT_PRODUCTION_URL` → `http://localhost:3000`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx                # Shell: leaderboard ad, header, ticker, footer
│   ├── page.tsx                  # Homepage (hero, gallery, 3-col trending+feed+sidewinder)
│   ├── article/
│   │   ├── ai-predictions/       # Variation 1: Covers-style AI predictions post
│   │   └── suns-vs-magic/        # Variation 2: Game betting preview (~250 words)
│   ├── league/pba/               # PBA league hub (SEO pillar)
│   ├── odds/                     # Live decimal odds board
│   ├── newsletter/               # Sporty DAILY funnel landing page
│   ├── icon.svg                  # Brand favicon
│   ├── robots.ts & sitemap.ts    # SEO (URLs from src/lib/site.ts)
│   └── globals.css               # Full mint design system
├── lib/
│   └── site.ts                   # Canonical SITE_URL resolver (env → Vercel → localhost)
├── components/
│   ├── TeamLogo.tsx              # 15 inline SVG team badges
│   ├── Header.tsx                # Topbar + brand name switcher + theme toggle
│   ├── Ticker.tsx                # Live scores ticker with team logos
│   ├── Ads.tsx                   # LeaderboardAd & SidebarAd demo slots
│   ├── Sidewinder.tsx            # Same-level widgets sidebar
│   ├── Footer.tsx
│   └── BottomNav.tsx             # Mobile bottom navigation
└── public/
    └── images/                   # Real sports imagery
```

## Post formats included

| Format | Page | Notes |
|---|---|---|
| AI predictions | `/article/ai-predictions` | Covers-style slate table, matchup deep dives, season record |
| Game betting preview | `/article/suns-vs-magic` | Supplied sample: decimal odds, injuries, ATS trends |
| League hub | `/league/pba` | Series tracker, futures odds, short-story cluster |
| Odds board | `/odds` | Decimal lines, best-price highlights, bet CTAs |
| Subscriber funnel | `/newsletter` | Free vs VIP tiers, Viber community |
