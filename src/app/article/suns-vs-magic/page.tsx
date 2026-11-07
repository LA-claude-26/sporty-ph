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
      <div className="breaking">
        <div className="breaking-inner">
          <span className="breaking-tag">VARIATION 2</span>
          <div className="breaking-text">
            <strong>Game betting preview</strong> — the ~250-word format you supplied: decimal odds snapshot, injury report, key stats, ATS trends, verdict. See also:{" "}
            <Link href="/article/ai-predictions" style={{ color: "var(--mint)", textDecoration: "underline" }}>Variation 1 (AI predictions)</Link> ·{" "}
            <Link href="/league/pba" style={{ color: "var(--mint)", textDecoration: "underline" }}>PBA hub</Link> ·{" "}
            <Link href="/odds" style={{ color: "var(--mint)", textDecoration: "underline" }}>Odds board</Link> ·{" "}
            <Link href="/newsletter" style={{ color: "var(--mint)", textDecoration: "underline" }}>Newsletter funnel</Link>
          </div>
        </div>
      </div>

      <div className="page-shell" style={{ marginTop: 18 }}>
        <div className="sidewinder-grid">
          <main className="article-main">
            <div className="article-badge">NBA · BETTING PREVIEW</div>
            <h1 className="article-title">NBA: Phoenix Suns vs. Orlando Magic</h1>
            <div className="article-meta">
              <span>By <strong>SPORTY Staff</strong> · <strong>Homer D. Sayson</strong> desk</span>
              <span>·</span><span>1.5 min read</span>
              <span>·</span><span>Nov 6, 2026, 09:18 PHT</span>
              <span>·</span><span>Lines: OKBet PH</span>
            </div>

            <div className="article-hero-img" style={{ backgroundImage: "url('/images/story-matchup.jpg')" }}>
              <div style={{ position: "absolute", bottom: 14, left: 16, zIndex: 2, display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800 }}>
                <TeamLogo team="phx" size={30} /> SUNS &nbsp;vs&nbsp; MAGIC <TeamLogo team="orl" size={30} />
              </div>
            </div>

            <div className="odds-card">
              <div className="odds-header"><span>LIVE MARKET SNAPSHOT</span><span className="odds-provider">OKBET · 09:18 PHT</span></div>
              <div className="odds-grid">
                <div className="odd-box hot"><div className="odd-lbl">MONEYLINE</div><div className="odd-val">PHX 1.90 / ORL 1.96</div></div>
                <div className="odd-box"><div className="odd-lbl">HANDICAP</div><div className="odd-val">PHX −1 (1.97) / +1 (1.91)</div></div>
                <div className="odd-box"><div className="odd-lbl">TOTAL POINTS</div><div className="odd-val">222.5</div></div>
              </div>
            </div>

            <div className="article-body">
              <p>
                The Phoenix Suns host the Orlando Magic in a matchup between two teams struggling for consistency. Phoenix has lost <strong>nine of its last 10 games</strong>, while Orlando has dropped <strong>eight of its last 10</strong>. According to OKBet, the Suns are slight favorites at <strong>1.90</strong> on the moneyline, while Orlando is priced at <strong>1.96</strong>. The handicap is set at Phoenix −1 (1.97) and Orlando +1 (1.91), with the total points line at 222.5.
              </p>
              <p>
                Injuries could play a significant role, particularly for Orlando, which will be without <strong>Paolo Banchero, Jalen Suggs, Jonathan Isaac, Noah Penda and Izaiyah Nelson</strong>. Phoenix will be without Mark Williams, while Rasheer Fleming and Jordan Goodwin are listed as day to day. The Magic average <strong>105.7 points per game</strong>, while Phoenix allows <strong>124.3</strong>, highlighting a potential defensive vulnerability for the Suns. Phoenix has also seen the total go over in eight of its last 10 games.
              </p>
              <p>
                Historically, Orlando has had the upper hand against the spread, covering in <strong>eight of the last 10 head to head meetings</strong>, with one push and one loss. The teams are evenly matched in those meetings at five wins apiece, while the over under record stands at 5 to 5. With both teams dealing with poor recent form and significant injury concerns, the 222.5 total and narrow one point handicap make this an intriguing matchup for bettors.
              </p>
            </div>

            <div className="stat-strip">
              <div className="stat-cell"><div className="n">9/10</div><div className="l">Suns losses last 10</div></div>
              <div className="stat-cell"><div className="n">124.3</div><div className="l">Suns PPG allowed</div></div>
              <div className="stat-cell"><div className="n">8-1-1</div><div className="l">Magic ATS in H2H</div></div>
              <div className="stat-cell"><div className="n">8/10</div><div className="l">Suns overs last 10</div></div>
            </div>

            <div className="sub-form" style={{ margin: "24px 0", background: "var(--bg-card2)", border: "1px solid var(--mint)", borderRadius: 10, padding: 14, alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <strong style={{ color: "var(--text)" }}>Get picks like this every morning at 7AM PHT.</strong>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>SPORTY DAILY newsletter — free, no spam, cancel anytime.</div>
              </div>
              <Link className="btn btn-accent" href="/newsletter">SUBSCRIBE FREE</Link>
            </div>

            <section className="reco-section">
              <div className="section-head"><span className="section-title">MORE IN THIS SERIES</span><span className="section-link">ORL @ PHX HUB →</span></div>
              <div className="reco-grid">
                <Link className="reco-card" href="/article/ai-predictions#bestpick" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-lebron.jpg')" }} /><div className="reco-body"><div className="reco-tag">INJURY IMPACT</div><div className="reco-title">How Orlando's offense shifts with Banchero sidelined: player props in play</div><div className="reco-foot">2 min read</div></div></Link>
                <Link className="reco-card" href="/odds" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-finals.jpg')" }} /><div className="reco-body"><div className="reco-tag">BETTING EDGE</div><div className="reco-title">Why the Suns total over (222.5) is the most backed bet on OKBet today</div><div className="reco-foot">1.5 min read</div></div></Link>
                <Link className="reco-card" href="/article/ai-predictions" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-arena.jpg')" }} /><div className="reco-body"><div className="reco-tag">ATS DEEP DIVE</div><div className="reco-title">Orlando's 8-1-1 ATS edge vs Phoenix explained</div><div className="reco-foot">1 min read</div></div></Link>
              </div>
            </section>

            <section className="reco-section">
              <div className="section-head"><span className="section-title">TRENDING BETS TODAY</span><span className="src-badge">ODDS MOVEMENT</span></div>
              <div className="reco-grid">
                <Link className="reco-card" href="/league/pba" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-celebration.jpg')" }} /><div className="reco-body"><div className="reco-tag">PBA SF GM4</div><div className="reco-title">SMB moneyline moved 1.85 → 1.72 after heavy Manila action</div><div className="reco-foot">LINE SHIFT</div></div></Link>
                <Link className="reco-card" href="/article/ai-predictions#slate" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-spike.jpg')" }} /><div className="reco-body"><div className="reco-tag">NBA SPREAD</div><div className="reco-title">Celtics -6.5 seeing 78% of the public money vs 76ers</div><div className="reco-foot">PUBLIC BET</div></div></Link>
                <Link className="reco-card" href="/league/pba" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-pvl.jpg')" }} /><div className="reco-body"><div className="reco-tag">UAAP TITLE</div><div className="reco-title">UP Maroons championship futures shorten to 1.30</div><div className="reco-foot">FUTURES</div></div></Link>
              </div>
            </section>

            <section className="reco-section">
              <div className="section-head"><span className="section-title">YOU MAY ALSO LIKE</span></div>
              <div className="reco-grid">
                <Link className="reco-card" href="/article/ai-predictions" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/hero-nba-arena.jpg')" }} /><div className="reco-body"><div className="reco-tag">AI PICKS</div><div className="reco-title">NBA AI predictions tonight: ATS picks and score projections for every game</div><div className="reco-foot">VARIATION 1</div></div></Link>
                <Link className="reco-card" href="/league/pba" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-celebration.jpg')" }} /><div className="reco-body"><div className="reco-tag">PBA HUB</div><div className="reco-title">PBA semifinals hub: SMB vs Ginebra, Converge vs RoS, odds and standings</div><div className="reco-foot">HUB PAGE</div></div></Link>
                <Link className="reco-card" href="/odds" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-finals.jpg')" }} /><div className="reco-body"><div className="reco-tag">GUIDE</div><div className="reco-title">How to read decimal odds on OKBet: beginner's 60-second explainer</div><div className="reco-foot">EVERGREEN</div></div></Link>
              </div>
            </section>
          </main>

          <Sidewinder />
        </div>
      </div>
    </>
  )
}
