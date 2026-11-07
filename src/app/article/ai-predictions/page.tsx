import type { Metadata } from "next"
import Link from "next/link"
import { Sidewinder } from "@/components/Sidewinder"
import { TeamLogo } from "@/components/TeamLogo"

export const metadata: Metadata = {
  title: "NBA AI Predictions Tonight: ATS Picks & Score Projections",
  description:
    "Full-slate NBA ATS picks and projected scores from our forecasting model, compared against OKBet decimal lines.",
}

export default function AiPredictionsPage() {
  return (
    <>
      <div className="shell" style={{ marginTop: 8 }}>
        <div className="break-bar" style={{ borderRadius: 4 }}>
          <span className="break-chip">FORMAT 01</span>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            <strong>Covers-style AI predictions post</strong> — full-slate table with pick chips, matchup deep dives, win-probability bars and season record. See also:{" "}
            <Link href="/article/suns-vs-magic" style={{ color: "#fff", textDecoration: "underline" }}>game preview</Link> ·{" "}
            <Link href="/league/pba" style={{ color: "#fff", textDecoration: "underline" }}>PBA hub</Link> ·{" "}
            <Link href="/odds" style={{ color: "#fff", textDecoration: "underline" }}>odds board</Link> ·{" "}
            <Link href="/newsletter" style={{ color: "#fff", textDecoration: "underline" }}>newsletter</Link>
          </span>
        </div>
      </div>

      <div className="shell" style={{ marginTop: 18 }}>
        <div className="home-body" style={{ gridTemplateColumns: "1fr 300px" }}>
          <main style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: 30 }}>
            <span className="tag-pill tag-green">NBA · AI Predictions</span>
            <h1 className="article-h">NBA AI predictions tonight: ATS picks and projected final scores for every game</h1>
            <div className="article-meta">
              <span>By Sporty Staff · Odds desk</span>
              <span className="meta-dot">·</span>
              <span>Updated 6 Nov 2026, 09:30 PHT</span>
              <span className="meta-dot">·</span>
              <span style={{ color: "var(--mint-text)", fontWeight: 700 }}>OKBet decimal lines</span>
              <span className="meta-dot">·</span>
              <span>3 min read</span>
            </div>

            <div className="article-hero" style={{ backgroundImage: "url('/images/hero-nba-arena.jpg')" }} />

            <div className="guide-links" style={{ margin: "0 0 16px", flexWrap: "wrap", fontSize: 11 }}>
              <span style={{ color: "var(--ink-faint)" }}>JUMP TO:</span>
              <a href="#slate">Full slate table</a>
              <a href="#bestpick">Best pick</a>
              <a href="#upset">Biggest upset</a>
              <a href="#record">Season record</a>
              <a href="#how">How it works</a>
            </div>

            <div className="article-body">
              <p className="dek">We trained our forecasting model to project the final score for every game on tonight's NBA slate, then compared those projections with the latest decimal odds from OKBet to find the day's ATS and Over/Under edges.</p>

              <p>After an <strong>11–3 week outright</strong> and an <strong>8–6 finish against the spread</strong>, we carry a winning ATS record into tonight's slate. Our model projects a final score for each matchup before comparing with OKBet — the PAGCOR-licensed sportsbook — prices. Below are our selections and projected scores for the full card.</p>

              <h2 id="slate">AI picks for the full slate</h2>
              <p style={{ fontSize: 13, color: "var(--ink-muted)" }}>All lines from OKBet; all times Philippine (PHT). Click any matchup row for the deep dive.</p>

              <table className="slate-table">
                <thead>
                  <tr><th>Tip-off</th><th>Matchup</th><th>ATS pick</th><th>O/U pick</th><th>Projected</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sat 10:00 AM</td>
                    <td><span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><TeamLogo team="phx" /> PHX @ ORL <TeamLogo team="orl" /></span></td>
                    <td><a className="pick-chip pick-green" href="#match-orl">ORL +1 (1.91)</a></td>
                    <td><a className="pick-chip pick-blue" href="#match-orl">OVER 222.5</a></td>
                    <td>ORL 114, PHX 111</td>
                  </tr>
                  <tr>
                    <td>Sat 10:00 AM</td>
                    <td><span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><TeamLogo team="lal" /> LAL @ DEN <TeamLogo team="den" /></span></td>
                    <td><a className="pick-chip pick-green" href="#match-den">DEN +1.5 (2.00)</a></td>
                    <td><a className="pick-chip pick-blue" href="#match-den">UNDER 226</a></td>
                    <td>DEN 110, LAL 108</td>
                  </tr>
                  <tr>
                    <td>Sat 10:00 AM</td>
                    <td><span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><TeamLogo team="bos" /> BOS @ PHI <TeamLogo team="phi" /></span></td>
                    <td><a className="pick-chip pick-green" href="#bestpick">BOS −6.5 · BEST PICK</a></td>
                    <td><a className="pick-chip pick-blue" href="#bestpick">UNDER 218</a></td>
                    <td>BOS 113, PHI 102</td>
                  </tr>
                  <tr>
                    <td>Sat 10:30 AM</td>
                    <td><span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><TeamLogo team="dal" /> DAL @ IND <TeamLogo team="ind" /></span></td>
                    <td><a className="pick-chip pick-green" href="#upset">IND +5.5 · UPSET</a></td>
                    <td><a className="pick-chip pick-blue" href="#upset">OVER 228</a></td>
                    <td>IND 118, DAL 114</td>
                  </tr>
                </tbody>
              </table>

              <h2 id="bestpick">Best pick: Celtics at 76ers</h2>
              <div className="match-card">
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-faint)", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.06em", marginBottom: 8 }}>
                  <span>Model projection</span><span>BOS −6.5 · best price 1.45 at OKBet</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                  <div className="match-score"><span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><TeamLogo team="bos" /> Boston Celtics 113</span></div>
                  <div style={{ textAlign: "center", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                    win probability <strong>72%</strong>
                    <div className="prob-bar"><div className="prob-home" style={{ width: "72%" }} /></div>
                  </div>
                  <div className="match-score"><span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>102 Philadelphia 76ers <TeamLogo team="phi" /></span></div>
                </div>
                <p style={{ fontSize: 13, color: "var(--ink-muted)", margin: "12px 0" }}>
                  The Celtics are 7–2 ATS in their last nine, with the NBA's top-rated offence facing a Philadelphia team on a back-to-back. The Sixers are covering just 41% of home games this season. Boston is projected to win by 11 with the total comfortably staying under the 218 line.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <a className="btn-ink btn-mint" href="#bet" style={{ fontSize: 11 }}>BOS −6.5 ↗ 1.45</a>
                  <a className="btn-ink" href="#bet" style={{ fontSize: 11, background: "var(--surface-subtle)", color: "var(--ink)", border: "1px solid var(--border)" }}>UNDER 218 ↗</a>
                  <Link className="btn-ink" href="/odds" style={{ fontSize: 11, background: "var(--surface-subtle)", color: "var(--ink)", border: "1px solid var(--border)" }}>Full game preview →</Link>
                </div>
              </div>

              <h2 id="upset">Biggest upset: Pacers over Mavericks</h2>
              <div className="match-card">
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-faint)", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.06em", marginBottom: 8 }}>
                  <span>Model projection</span><span>IND +5.5 · best price 2.05 at OKBet</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                  <div className="match-score"><span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><TeamLogo team="ind" /> Indiana Pacers 118</span></div>
                  <div style={{ textAlign: "center", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                    market 29% · model <strong>48%</strong>
                    <div className="prob-bar"><div className="prob-home" style={{ width: "48%" }} /></div>
                  </div>
                  <div className="match-score"><span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>114 Dallas Mavericks <TeamLogo team="dal" /></span></div>
                </div>
                <p style={{ fontSize: 13, color: "var(--ink-muted)", margin: "12px 0" }}>
                  Dallas just allowed 128 points in an overtime loss to Memphis; the Mavericks are 6–2 to the Over this season. Indiana's pace matches up favourably against the NBA's 24th-ranked perimeter defence. The +5.5 spread provides the widest value wedge of the night.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <a className="btn-ink btn-mint" href="#bet" style={{ fontSize: 11 }}>IND +5.5 ↗ 2.05</a>
                  <a className="btn-ink" href="#bet" style={{ fontSize: 11, background: "var(--surface-subtle)", color: "var(--ink)", border: "1px solid var(--border)" }}>OVER 228 ↗</a>
                  <Link className="btn-ink" href="/odds" style={{ fontSize: 11, background: "var(--surface-subtle)", color: "var(--ink)", border: "1px solid var(--border)" }}>Full game preview →</Link>
                </div>
              </div>

              <h2 id="match-orl">Matchup: Suns vs Magic — injuries flip the edge</h2>
              <div className="match-card">
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-faint)", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.06em", marginBottom: 8 }}>
                  <span>Model projection</span><span>PHX −1 · best price 1.90 at OKBet</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                  <div className="match-score"><span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><TeamLogo team="orl" /> Orlando Magic 114</span></div>
                  <div style={{ textAlign: "center", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                    win probability <strong>49%</strong>
                    <div className="prob-bar"><div className="prob-home" style={{ width: "49%" }} /></div>
                  </div>
                  <div className="match-score"><span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>111 Phoenix Suns <TeamLogo team="phx" /></span></div>
                </div>
                <p style={{ fontSize: 13, color: "var(--ink-muted)", margin: "12px 0" }}>
                  Phoenix has lost nine of ten and allows 124.3 PPG; Orlando sits five players (Banchero, Suggs, Isaac, Penda, Nelson) but has covered eight of the last ten head-to-head meetings. The model shades the Magic despite the injuries.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <Link className="btn-ink btn-mint" href="/article/suns-vs-magic" style={{ fontSize: 11 }}>Read the full 250-word betting preview →</Link>
                  <a className="btn-ink" href="#bet" style={{ fontSize: 11, background: "var(--surface-subtle)", color: "var(--ink)", border: "1px solid var(--border)" }}>ORL +1 ↗ 1.91</a>
                  <a className="btn-ink" href="#bet" style={{ fontSize: 11, background: "var(--surface-subtle)", color: "var(--ink)", border: "1px solid var(--border)" }}>OVER 222.5 ↗</a>
                </div>
              </div>

              <h2 id="record">Season record</h2>
              <table className="slate-table">
                <thead><tr><th>Period</th><th>Straight-up</th><th>ATS</th><th>O/U</th><th>Best pick</th></tr></thead>
                <tbody>
                  <tr><td>Last week</td><td>11–3</td><td>8–6</td><td>7–7</td><td>1–0</td></tr>
                  <tr><td>Season</td><td>74–46</td><td>62–59</td><td>54–67</td><td>4–4</td></tr>
                </tbody>
              </table>

              <h2 id="how">How our AI predictions work</h2>
              <p>Our custom forecasting model combines team ratings, pace, shot-location profiles and player-availability data to project a final score for every matchup. Confirmed injury reports inform the assumptions; complete information is not always available at publish time. We then compare those projections with the latest OKBet spreads and totals to produce our ATS and Over/Under picks. Best Pick identifies the featured selection, not a guaranteed outcome.</p>
              <p style={{ fontSize: 11, color: "var(--ink-faint)" }}><strong>Affiliate disclosure:</strong> Links to sportsbooks may earn us a commission at no cost to you. Only bet what you can afford to lose. 21+ · PAGCOR-licensed partners only.</p>
            </div>

            <div style={{ margin: "24px 0", background: "var(--surface-subtle)", border: "1px solid var(--mint)", borderRadius: 10, padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div>
                <strong style={{ fontSize: 14 }}>Get tonight's best picks in your inbox every morning.</strong>
                <div style={{ fontSize: 11, color: "var(--ink-faint)" }}>SPORTY DAILY · 7:00 AM PHT · NBA + PBA betting edges · free</div>
              </div>
              <Link className="btn-ink btn-mint" href="/newsletter" style={{ fontSize: 11 }}>Subscribe free</Link>
            </div>

            {/* RECOMMENDATIONS */}
            <div className="recos-wrap">
              <div className="recos-h">More in this series</div>
              <div className="recos-grid">
                <Link className="reco-card" href="/article/suns-vs-magic"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-matchup.jpg')" }} /><div className="reco-copy"><span className="reco-tag">Game preview</span><div className="reco-title">Suns vs Magic: Orlando covers 8 of last 10 despite five injuries</div><span className="reco-time">2 min read</span></div></Link>
                <Link className="reco-card" href="/article/ai-predictions"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-finals.jpg')" }} /><div className="reco-copy"><span className="reco-tag">Odds watch</span><div className="reco-title">Celtics -6.5 road favourites at 76ers: Boston 7-2 ATS in last nine</div><span className="reco-time">1.5 min read</span></div></Link>
                <Link className="reco-card" href="/league/pba"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-celebration.jpg')" }} /><div className="reco-copy"><span className="reco-tag">PBA SF Gm4</span><div className="reco-title">SMB moneyline 1.85 → 1.72 after heavy Manila action</div><span className="reco-time">PBA</span></div></Link>
              </div>
            </div>
          </main>

          <Sidewinder />
        </div>
      </div>
    </>
  )
}
