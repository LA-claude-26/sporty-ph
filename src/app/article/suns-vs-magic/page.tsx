import type { Metadata } from "next"
import Link from "next/link"
import { Sidewinder } from "@/components/Sidewinder"
import { TeamLogo } from "@/components/TeamLogo"

export const metadata: Metadata = {
  title: "NBA: Phoenix Suns vs. Orlando Magic — Odds, Injuries & Best Bets",
  description:
    "Game preview with OKBet decimal odds, injury report, ATS trends, and the betting verdict for Suns vs Magic.",
}

export default function SunsVsMagicPage() {
  return (
    <>
      <div className="shell" style={{ marginTop: 8 }}>
        <div className="break-bar" style={{ borderRadius: 4 }}>
          <span className="break-chip">FORMAT 02</span>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            <strong>Game betting preview</strong> — the ~250-word format you supplied: decimal odds snapshot, injury report, key stats, ATS trends, verdict. See also:{" "}
            <Link href="/article/ai-predictions" style={{ color: "#fff", textDecoration: "underline" }}>AI predictions</Link> ·{" "}
            <Link href="/league/pba" style={{ color: "#fff", textDecoration: "underline" }}>PBA hub</Link> ·{" "}
            <Link href="/odds" style={{ color: "#fff", textDecoration: "underline" }}>odds board</Link> ·{" "}
            <Link href="/newsletter" style={{ color: "#fff", textDecoration: "underline" }}>newsletter</Link>
          </span>
        </div>
      </div>

      <div className="shell" style={{ marginTop: 18 }}>
        <div className="home-body" style={{ gridTemplateColumns: "1fr 300px" }}>
          <main style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: 30 }}>
            <span className="tag-pill tag-green">NBA · Betting preview</span>
            <h1 className="article-h">NBA: Phoenix Suns vs. Orlando Magic</h1>
            <div className="article-meta">
              <span>By Sporty Staff · Odds desk</span>
              <span className="meta-dot">·</span>
              <span>1.5 min read</span>
              <span className="meta-dot">·</span>
              <span>6 Nov 2026, 09:30 PHT</span>
              <span className="meta-dot">·</span>
              <span style={{ color: "var(--mint-text)", fontWeight: 700 }}>OKBet lines</span>
            </div>

            <div className="article-hero" style={{ backgroundImage: "url('/images/story-matchup.jpg')", position: "relative" }}>
              <div style={{ position: "absolute", bottom: 12, left: 14, display: "flex", alignItems: "center", gap: 10, fontWeight: 900, fontSize: 15, color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
                <TeamLogo team="phx" size={26} /> SUNS vs MAGIC <TeamLogo team="orl" size={26} />
              </div>
            </div>

            <div className="market-card">
              <div className="market-head"><span>Live market snapshot</span><span style={{ color: "var(--mint-text)", fontFamily: "var(--font-mono)" }}>OKBET · 09:30 PHT</span></div>
              <div className="market-grid">
                <div className="market-cell hot"><div className="market-lbl">Moneyline</div><div className="market-val">PHX 1.90 / ORL 1.96</div></div>
                <div className="market-cell"><div className="market-lbl">Handicap</div><div className="market-val">PHX −1 (1.97) / ORL +1 (1.91)</div></div>
                <div className="market-cell"><div className="market-lbl">Total points</div><div className="market-val">222.5</div></div>
              </div>
            </div>

            <div className="article-body">
              <p>The Phoenix Suns host the Orlando Magic in a matchup between two teams struggling for consistency. Phoenix has lost <strong>nine of its last 10 games</strong>, while Orlando has dropped <strong>eight of its last 10</strong>. According to OKBet, the Suns are slight favourites at <strong>1.90</strong> on the moneyline, while Orlando is priced at <strong>1.96</strong>. The handicap is set at Phoenix −1 (1.97) and Orlando +1 (1.91), with the total points line at 222.5.</p>

              <p>Injuries could play a significant role, particularly for Orlando, which will be without <strong>Paolo Banchero, Jalen Suggs, Jonathan Isaac, Noah Penda and Izaiyah Nelson</strong>. Phoenix will be without Mark Williams, while Rasheer Fleming and Jordan Goodwin are listed as day-to-day. The Magic average <strong>105.7 points per game</strong>, while Phoenix allows <strong>124.3</strong>, highlighting a potential defensive vulnerability for the Suns. Phoenix has also seen the total go over in eight of its last 10 games.</p>

              <p>Historically, Orlando has had the upper hand against the spread, covering in <strong>eight of the last 10 head-to-head meetings</strong>, with one push and one loss. The teams are evenly matched in those meetings at five wins apiece, while the over/under record stands at 5–5. With both teams dealing with poor recent form and significant injury concerns, the 222.5 total and narrow one-point handicap make this an intriguing matchup for bettors.</p>
            </div>

            <div className="stats-row">
              <div className="stat-box"><div className="n">9/10</div><div className="l">Suns losses, last 10</div></div>
              <div className="stat-box"><div className="n">124.3</div><div className="l">Suns PPG allowed</div></div>
              <div className="stat-box"><div className="n">8-1-1</div><div className="l">Magic ATS in H2H</div></div>
              <div className="stat-box"><div className="n">8/10</div><div className="l">Suns overs, last 10</div></div>
            </div>

            <div style={{ margin: "24px 0", background: "var(--surface-subtle)", border: "1px solid var(--mint)", borderRadius: 10, padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div>
                <strong style={{ fontSize: 14 }}>Get picks like this every morning at 7:00 AM PHT.</strong>
                <div style={{ fontSize: 11, color: "var(--ink-faint)" }}>SPORTY DAILY — free, no spam, cancel anytime.</div>
              </div>
              <Link className="btn-ink btn-mint" href="/newsletter" style={{ fontSize: 11 }}>Subscribe free</Link>
            </div>

            {/* RECOMMENDATIONS */}
            <div className="recos-wrap">
              <div className="recos-h">More in this series</div>
              <div className="recos-grid">
                <Link className="reco-card" href="/article/ai-predictions"><div className="reco-thumb" style={{ backgroundImage: "url('/images/hero-nba-arena.jpg')" }} /><div className="reco-copy"><span className="reco-tag">AI Picks</span><div className="reco-title">NBA AI predictions tonight: ATS picks and score projections for every game</div><span className="reco-time">3 min read</span></div></Link>
                <Link className="reco-card" href="/article/ai-predictions"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-finals.jpg')" }} /><div className="reco-copy"><span className="reco-tag">Odds watch</span><div className="reco-title">Celtics -6.5 road favourites at 76ers: Boston 7-2 ATS in last nine</div><span className="reco-time">1.5 min read</span></div></Link>
                <Link className="reco-card" href="/league/pba"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-celebration.jpg')" }} /><div className="reco-copy"><span className="reco-tag">PBA</span><div className="reco-title">SMB survives Ginebra comeback, forces Game 4 in heated Manila derby</div><span className="reco-time">1.5 min read</span></div></Link>
              </div>
            </div>

            <div className="recos-wrap">
              <div className="recos-h">Trending bets today</div>
              <div className="recos-grid">
                <Link className="reco-card" href="/league/pba"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-finals.jpg')" }} /><div className="reco-copy"><span className="reco-tag">Line move</span><div className="reco-title">SMB moneyline 1.85 → 1.72 after heavy Manila action</div><span className="reco-time">PBA</span></div></Link>
                <Link className="reco-card" href="/odds"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-arena.jpg')" }} /><div className="reco-copy"><span className="reco-tag">Public bet</span><div className="reco-title">Celtics -6.5 seeing 78% public money vs 76ers</div><span className="reco-time">NBA</span></div></Link>
                <Link className="reco-card" href="/league/pba"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-spike.jpg')" }} /><div className="reco-copy"><span className="reco-tag">Futures</span><div className="reco-title">UP Maroons championship futures shorten to 1.30</div><span className="reco-time">UAAP</span></div></Link>
              </div>
            </div>

            <div className="recos-wrap">
              <div className="recos-h">You may also like</div>
              <div className="recos-grid">
                <Link className="reco-card" href="/league/pba"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-matchup.jpg')" }} /><div className="reco-copy"><span className="reco-tag">Gilas</span><div className="reco-title">Kai Sotto and Carl Tamayo ruled out of FIBA window</div><span className="reco-time">1.5 min read</span></div></Link>
                <Link className="reco-card" href="/league/pba"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-volleyball.jpg')" }} /><div className="reco-copy"><span className="reco-tag">PVL</span><div className="reco-title">Creamline vs Akari Game 1: finals rematch set for sold-out Araneta</div><span className="reco-time">1 min read</span></div></Link>
                <Link className="reco-card" href="/odds"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-lebron.jpg')" }} /><div className="reco-copy"><span className="reco-tag">Guide</span><div className="reco-title">How to read decimal odds on OKBet: beginner's 60-second explainer</div><span className="reco-time">Evergreen</span></div></Link>
              </div>
            </div>
          </main>

          <Sidewinder />
        </div>
      </div>
    </>
  )
}
