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

1. Push this repo to GitHub (or use the one already created: `github.com/LeadAdvisorsdotcom/sporty`).
2. Go to **vercel.com/new** → import `LeadAdvisorsdotcom/sporty`.
3. Framework preset: **Next.js** (auto-detected) → click **Deploy**.
4. Every push to `main` auto-deploys.

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
│   ├── robots.ts & sitemap.ts    # SEO
│   └── globals.css               # Full mint design system
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
