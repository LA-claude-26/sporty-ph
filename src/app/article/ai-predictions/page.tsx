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
      <div className="breaking">
        <div className="breaking-inner">
          <span className="breaking-tag">VARIATION 1</span>
          <div className="breaking-text">
            <strong>Covers-style AI Predictions post</strong> — full-slate table with pick chips, matchup deep dives, win probabilities, and season record. See also:{" "}
            <Link href="/article/suns-vs-magic" style={{ color: "var(--mint)", textDecoration: "underline" }}>Variation 2 (game preview)</Link> ·{" "}
            <Link href="/league/pba" style={{ color: "var(--mint)", textDecoration: "underline" }}>PBA hub</Link> ·{" "}
            <Link href="/odds" style={{ color: "var(--mint)", textDecoration: "underline" }}>Odds board</Link> ·{" "}
            <Link href="/newsletter" style={{ color: "var(--mint)", textDecoration: "underline" }}>Newsletter funnel</Link>
          </div>
        </div>
      </div>

      <div className="page-shell" style={{ marginTop: 18 }}>
        <div className="sidewinder-grid">
          <main className="article-main">
            <div className="article-badge">NBA · AI PREDICTIONS</div>
            <h1 className="article-title">NBA AI Predictions Tonight: ATS Picks &amp; Score Projections for Every Game</h1>
            <div className="article-meta">
              <span>By <strong>CLUTCH Staff</strong> · <strong>Odds Desk</strong></span>
              <span>·</span><span>Updated: Nov 6, 2026, 09:18 PHT</span>
              <span>·</span><span>Lines: OKBet PH (decimal)</span>
              <span>·</span><span>3 min read</span>
            </div>

            <div className="jump-links">
              <span style={{ fontSize: 11, color: "var(--text-muted)", alignSelf: "center" }}>JUMP TO:</span>
              <a href="#slate">Full slate table</a>
              <a href="#bestpick">Best pick</a>
              <a href="#upset">Biggest upset</a>
              <a href="#record">Season record</a>
              <a href="#how">How it works</a>
            </div>

            <div className="article-hero-img" style={{ backgroundImage: "url('/images/hero-nba-arena.jpg')" }} />

            <div className="article-body">
              <p>
                After an <strong>11–3 week outright</strong> and an <strong>8–6 finish against the spread</strong>, we carry a winning ATS record into tonight's NBA slate. Our custom forecasting model projects the final score for each matchup, then compares those projections against the latest decimal odds from <strong>OKBet</strong> — the PAGCOR-licensed sportsbook — to generate ATS and Over/Under selections.
              </p>

              <h2 id="slate">AI picks for the full slate</h2>
              <p style={{ fontSize: 12, color: "var(--text-dim)" }}>All lines from OKBet; all times Philippine (PHT). Click any matchup row for the deep dive.</p>

              <table className="pred-table">
                <thead>
                  <tr><th>Tip-off</th><th>Matchup</th><th>ATS Pick</th><th>O/U Pick</th><th>Projected</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sat 10:00 AM</td>
                    <td><TeamLogo team="phx" className="mr-1" /> PHX @ ORL <TeamLogo team="orl" className="ml-1" /></td>
                    <td><span className="pred-pick">ORL +1 (1.91)</span></td>
                    <td><span className="pred-pick">OVER 222.5</span></td>
                    <td>ORL 114 PHX 111</td>
                  </tr>
                  <tr>
                    <td>Sat 10:00 AM</td>
                    <td><TeamLogo team="lal" className="mr-1" /> LAL @ DEN <TeamLogo team="den" className="ml-1" /></td>
                    <td><span className="pred-pick">DEN +1.5</span></td>
                    <td><span className="pred-pick">UNDER 226</span></td>
                    <td>DEN 110 LAL 108</td>
                  </tr>
                  <tr>
                    <td>Sat 10:00 AM</td>
                    <td><TeamLogo team="bos" className="mr-1" /> BOS @ PHI <TeamLogo team="phi" className="ml-1" /></td>
                    <td><span className="pred-pick">BOS -6.5</span> <span className="pred-badge badge-best">BEST PICK</span></td>
                    <td><span className="pred-pick">UNDER 218</span></td>
                    <td>BOS 113 PHI 102</td>
                  </tr>
                  <tr>
                    <td>Sat 10:30 AM</td>
                    <td><TeamLogo team="dal" className="mr-1" /> DAL @ IND <TeamLogo team="ind" className="ml-1" /></td>
                    <td><span className="pred-pick">IND +5.5</span> <span className="pred-badge badge-upset">UPSET</span></td>
                    <td><span className="pred-pick">OVER 228</span></td>
                    <td>IND 118 DAL 114</td>
                  </tr>
                </tbody>
              </table>

              <h2 id="bestpick">Best Pick: Celtics at 76ers</h2>
              <div className="matchup-card">
                <div className="matchup-head"><span>MODEL PROJECTION</span><span>BOS -6.5 · BEST PRICE 1.45 @ OKBET</span></div>
                <div className="matchup-scoreline">
                  <div className="matchup-side"><TeamLogo team="bos" /> Boston Celtics 113</div>
                  <div className="matchup-prob">win prob <strong>72%</strong><div className="prob-bar"><div className="prob-fill" style={{ width: "72%" }} /></div></div>
                  <div className="matchup-side">102 Philadelphia 76ers <TeamLogo team="phi" /></div>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-dim)" }}>
                  The Celtics are 7–2 ATS in their last nine, with the NBA's top-rated offense facing a Philadelphia team on a back-to-back. The Sixers are covering just 41% of home games this season. Boston is projected to win by 11 with the total comfortably staying under the 218 line.
                </p>
                <div className="matchup-buttons">
                  <a className="matchup-btn" href="#bet">BOS -6.5 ↗ 1.45</a>
                  <a className="matchup-btn" href="#bet">UNDER 218 ↗</a>
                  <Link className="matchup-btn" href="/odds" style={{ background: "var(--mint)", color: "#0B0F17", borderColor: "var(--mint)" }}>Full game preview →</Link>
                </div>
              </div>

              <h2 id="upset">Biggest Upset: Pacers over Mavericks</h2>
              <div className="matchup-card">
                <div className="matchup-head"><span>MODEL PROJECTION</span><span>IND +5.5 · BEST PRICE 2.65 @ OKBET</span></div>
                <div className="matchup-scoreline">
                  <div className="matchup-side"><TeamLogo team="ind" /> Indiana Pacers 118</div>
                  <div className="matchup-prob">market 29% · model <strong>48%</strong><div className="prob-bar"><div className="prob-fill" style={{ width: "48%" }} /></div></div>
                  <div className="matchup-side">114 Dallas Mavericks <TeamLogo team="dal" /></div>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-dim)" }}>
                  Dallas just allowed 128 points in an overtime loss to Memphis; the Mavericks are 6–2 to the Over this season. Indiana's pace matches up favorably against the NBA's 24th-ranked perimeter defense. The +5.5 spread provides the widest value wedge of the night.
                </p>
                <div className="matchup-buttons">
                  <a className="matchup-btn" href="#bet">IND +5.5 ↗ 2.05</a>
                  <a className="matchup-btn" href="#bet">OVER 228 ↗</a>
                  <Link className="matchup-btn" href="/odds" style={{ background: "var(--mint)", color: "#0B0F17", borderColor: "var(--mint)" }}>Full game preview →</Link>
                </div>
              </div>

              <h2>Matchup: Suns vs Magic — injuries flip the edge</h2>
              <div className="matchup-card">
                <div className="matchup-head"><span>MODEL PROJECTION</span><span>PHX -1 · BEST PRICE 1.90 @ OKBET</span></div>
                <div className="matchup-scoreline">
                  <div className="matchup-side"><TeamLogo team="orl" /> Orlando Magic 114</div>
                  <div className="matchup-prob">win prob <strong>49%</strong><div className="prob-bar"><div className="prob-fill" style={{ width: "49%" }} /></div></div>
                  <div className="matchup-side">111 Phoenix Suns <TeamLogo team="phx" /></div>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-dim)" }}>
                  Phoenix has lost 9 of 10 and allows 124.3 PPG; Orlando sits five players (Banchero, Suggs, Isaac, Penda, Nelson) but has covered 8 of the last 10 head-to-head meetings. The model shades the Magic despite the injuries.
                </p>
                <div className="matchup-buttons">
                  <Link className="matchup-btn" href="/article/suns-vs-magic" style={{ background: "var(--mint)", color: "#0B0F17", borderColor: "var(--mint)" }}>Read full 250-word betting preview →</Link>
                  <a className="matchup-btn" href="#bet">ORL +1 ↗ 1.91</a>
                  <a className="matchup-btn" href="#bet">OVER 222.5 ↗</a>
                </div>
              </div>

              <h2 id="record">Season record</h2>
              <table className="pred-table">
                <thead><tr><th>Period</th><th>Straight-Up</th><th>ATS</th><th>O/U</th><th>Best Pick</th></tr></thead>
                <tbody>
                  <tr><td>Last week</td><td>11–3</td><td>8–6</td><td>7–7</td><td>1–0</td></tr>
                  <tr><td>Season</td><td>74–46</td><td>62–59</td><td>54–67</td><td>4–4</td></tr>
                </tbody>
              </table>

              <h2 id="how">How our AI predictions work</h2>
              <p>
                Our custom forecasting model combines team ratings, pace, shooting-location profiles, and player-availability data to project a final score for every matchup. Confirmed injury reports inform the assumptions, but complete information is not always available at publish time. We then compare those projections with the latest OKBet spreads and totals to produce our ATS and Over/Under picks. Best Pick identifies the featured selection, not a guaranteed outcome.
              </p>
              <p style={{ fontSize: 11, color: "var(--text-muted)" }}>
                <strong>Affiliate Disclosure:</strong> Links to sportsbooks may earn us a commission at no cost to you. Only bet what you can afford to lose. 21+ · PAGCOR licensed partners only.
              </p>
            </div>

            <div className="sub-form" style={{ margin: "24px 0", background: "var(--bg-card2)", border: "1px solid var(--mint)", borderRadius: 10, padding: 14, alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <strong style={{ color: "var(--text)" }}>Get tonight's best picks in your inbox every morning.</strong>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>CLUTCH DAILY · 7AM PHT · NBA + PBA betting edges · free</div>
              </div>
              <Link className="btn btn-accent" href="/newsletter">SUBSCRIBE FREE</Link>
            </div>

            {/* 3-TIER RECOMMENDATIONS */}
            <section className="reco-section">
              <div className="section-head"><span className="section-title">MORE IN THIS SERIES</span><span className="section-link">NBA HUB →</span></div>
              <div className="reco-grid">
                <Link className="reco-card" href="/article/suns-vs-magic" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-matchup.jpg')" }} /><div className="reco-body"><div className="reco-tag">GAME PREVIEW</div><div className="reco-title">Suns vs Magic: Orlando covers 8 of last 10 despite five injuries</div><div className="reco-foot">1.5 min read</div></div></Link>
                <Link className="reco-card" href="/article/ai-predictions#slate" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-finals.jpg')" }} /><div className="reco-body"><div className="reco-tag">ODDS WATCH</div><div className="reco-title">Celtics -6.5 road favorites at 76ers: Boston 7-2 ATS in last nine</div><div className="reco-foot">1 min read</div></div></Link>
                <Link className="reco-card" href="/article/ai-predictions" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-lebron.jpg')" }} /><div className="reco-body"><div className="reco-tag">FUTURES</div><div className="reco-title">NBA championship odds mover: Thunder shorten to 5.50 after 9-1 start</div><div className="reco-foot">2 min read</div></div></Link>
              </div>
            </section>

            <section className="reco-section">
              <div className="section-head"><span className="section-title">TRENDING BETS TODAY</span><span className="src-badge">LINE MOVEMENT</span></div>
              <div className="reco-grid">
                <Link className="reco-card" href="/league/pba" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-celebration.jpg')" }} /><div className="reco-body"><div className="reco-tag">PBA SF GM4</div><div className="reco-title">SMB moneyline 1.85 → 1.72 after heavy Manila action</div><div className="reco-foot">PBA</div></div></Link>
                <Link className="reco-card" href="/odds" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-arena.jpg')" }} /><div className="reco-body"><div className="reco-tag">NBA SPREAD</div><div className="reco-title">Celtics -6.5 seeing 78% public money vs 76ers</div><div className="reco-foot">PUBLIC BET</div></div></Link>
                <Link className="reco-card" href="/league/pba" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-spike.jpg')" }} /><div className="reco-body"><div className="reco-tag">UAAP TITLE</div><div className="reco-title">UP Maroons championship futures shorten to 1.30</div><div className="reco-foot">FUTURES</div></div></Link>
              </div>
            </section>

            <section className="reco-section">
              <div className="section-head"><span className="section-title">YOU MAY ALSO LIKE</span></div>
              <div className="reco-grid">
                <Link className="reco-card" href="/article/suns-vs-magic" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-pvl.jpg')" }} /><div className="reco-body"><div className="reco-tag">GILAS</div><div className="reco-title">Kai Sotto and Carl Tamayo ruled out of FIBA window</div><div className="reco-foot">1 min read</div></div></Link>
                <Link className="reco-card" href="/odds" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-finals.jpg')" }} /><div className="reco-body"><div className="reco-tag">GUIDE</div><div className="reco-title">How to read decimal odds on OKBet: beginner's 60-second explainer</div><div className="reco-foot">EVERGREEN</div></div></Link>
                <Link className="reco-card" href="/article/ai-predictions" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-arena.jpg')" }} /><div className="reco-body"><div className="reco-tag">COLLEGIATE</div><div className="reco-title">UP Maroons outlast Adamson 82-70, cement solo first place</div><div className="reco-foot">UAAP S89</div></div></Link>
              </div>
            </section>
          </main>

          <Sidewinder />
        </div>
      </div>
    </>
  )
}
