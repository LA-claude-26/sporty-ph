import type { Metadata } from "next"
import Link from "next/link"
import { Sidewinder } from "@/components/Sidewinder"
import { TeamLogo } from "@/components/TeamLogo"

export const metadata: Metadata = {
  title: "PBA Hub: Semifinals Odds, Series Tracker & Short Stories",
  description: "SMB vs Ginebra, Converge vs Rain or Shine — decimal odds from OKBet, series tracker, and 300-word short stories.",
}

export default function PbaHubPage() {
  return (
    <>
      <div className="breaking">
        <div className="breaking-inner">
          <span className="breaking-tag">LEAGUE HUB</span>
          <div className="breaking-text">
            <strong>PBA hub (SEO pillar page)</strong> — series tracker, futures, standings, and every PBA short story in one place. See:{" "}
            <Link href="/article/ai-predictions" style={{ color: "var(--mint)", textDecoration: "underline" }}>Variation 1 (AI picks)</Link> ·{" "}
            <Link href="/article/suns-vs-magic" style={{ color: "var(--mint)", textDecoration: "underline" }}>Variation 2 (game preview)</Link> ·{" "}
            <Link href="/odds" style={{ color: "var(--mint)", textDecoration: "underline" }}>Odds board</Link> ·{" "}
            <Link href="/newsletter" style={{ color: "var(--mint)", textDecoration: "underline" }}>Newsletter funnel</Link>
          </div>
        </div>
      </div>

      <div className="page-shell" style={{ marginTop: 18 }}>
        <div className="sidewinder-grid">
          <main className="article-main">
            <div className="hub-hero">
              <span className="hub-tag">LEAGUE HUB · PHILIPPINE BASKETBALL ASSOCIATION</span>
              <h1 className="hub-title">PBA: Where every story is 90 seconds and the odds are live</h1>
              <p style={{ fontSize: 14, color: "var(--text-dim)", maxWidth: 720 }}>
                The PBA is the soul of Philippine sports. We cover every semifinal battle with decimal-odds breakdowns from OKBet, injury flags, and 300-word short stories built for your commute.
              </p>
            </div>

            <div className="section-head"><span className="section-title">SEMIFINALS SERIES TRACKER</span><span className="src-badge">LIVE · OKBET</span></div>
            <div className="series-grid">
              <div className="series-card"><div className="reco-tag" style={{ color: "var(--red)" }}>SEMIFINAL A</div><div className="t">San Miguel leads Ginebra 2–1</div><p style={{ fontSize: 12, color: "var(--text-dim)" }}>Beermen revived their pride in Game 3; Game 4 Sunday.</p><div style={{ marginTop: 10, fontFamily: "var(--font-mono)", fontSize: 12 }}>Game 4 ML: SMB 1.72 · GIN 2.15</div></div>
              <div className="series-card"><div className="reco-tag" style={{ color: "var(--orange)" }}>SEMIFINAL B</div><div className="t">Converge leads Rain or Shine 2–1</div><p style={{ fontSize: 12, color: "var(--text-dim)" }}>Delta Pineda's crew one win from the franchise's first Finals.</p><div style={{ marginTop: 10, fontFamily: "var(--font-mono)", fontSize: 12 }}>Game 4 ML: CON 1.62 · ROS 2.35</div></div>
              <div className="series-card"><div className="reco-tag">FINALS PICTURE</div><div className="t">Winner of A vs winner of B</div><p style={{ fontSize: 12, color: "var(--text-dim)" }}>Best-of-seven begins mid-November. Futures market below.</p><div style={{ marginTop: 10, fontFamily: "var(--font-mono)", fontSize: 12 }}>Championship futures live</div></div>
            </div>

            <div className="section-head"><span className="section-title">CHAMPIONSHIP FUTURES</span><span className="odds-provider">OKBET · DECIMAL</span></div>
            <table className="standings-table">
              <thead><tr><th>Team</th><th>Title odds</th><th>Implied prob</th><th>Trend</th></tr></thead>
              <tbody>
                <tr><td><TeamLogo team="smb" className="mr-1" /> San Miguel Beermen</td><td style={{ color: "var(--mint)", fontWeight: 700 }}>1.85</td><td>54%</td><td>↓ shortened after G3</td></tr>
                <tr><td><TeamLogo team="con" className="mr-1" /> Converge FiberXers</td><td>2.60</td><td>38%</td><td>↓ best value in market</td></tr>
                <tr><td><TeamLogo team="gin" className="mr-1" /> Barangay Ginebra</td><td>3.40</td><td>29%</td><td>↑ drifted after loss</td></tr>
                <tr><td><TeamLogo team="ros" className="mr-1" /> Rain or Shine Elasto Painters</td><td>5.50</td><td>18%</td><td>↑ longest shot</td></tr>
              </tbody>
            </table>

            <div className="section-head"><span className="section-title">LATEST PBA SHORT STORIES</span><span className="section-link">NEWEST FIRST</span></div>
            <div className="reco-grid" style={{ marginTop: 0 }}>
              <Link className="reco-card" href="/article/suns-vs-magic" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-finals.jpg')" }} /><div className="reco-body"><div className="reco-tag">SEMIFINALS</div><div className="reco-title">SMB survives Ginebra comeback, forces Game 4 in heated Manila derby</div><div className="reco-foot">SMB 1.72 · GIN 2.15 · 32 min ago</div></div></Link>
              <Link className="reco-card" href="/article/suns-vs-magic" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-celebration.jpg')" }} /><div className="reco-body"><div className="reco-tag">SEMIFINALS</div><div className="reco-title">Converge one win from first PBA Finals after Game 3 dominance over RoS</div><div className="reco-foot">CON 1.62 · ROS 2.35 · 2 hrs ago</div></div></Link>
              <Link className="reco-card" href="/article/suns-vs-magic" style={{ textDecoration: "none" }}><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-arena.jpg')" }} /><div className="reco-body"><div className="reco-tag">FEATURE</div><div className="reco-title">Delta Pineda's halftime speech that turned the series: inside the Converge locker room</div><div className="reco-foot">1 min read</div></div></Link>
            </div>

            <div className="sub-form" style={{ margin: "26px 0", background: "var(--bg-card2)", border: "1px solid var(--mint)", borderRadius: 10, padding: 14, alignItems: "center" }}>
              <div style={{ flex: 1 }}><strong style={{ color: "var(--text)" }}>Never miss a PBA line movement.</strong><div style={{ fontSize: 11, color: "var(--text-muted)" }}>CLUTCH DAILY — every morning 7AM PHT. Free forever.</div></div>
              <Link className="btn btn-accent" href="/newsletter">SUBSCRIBE FREE</Link>
            </div>

            <p style={{ fontSize: 11, color: "var(--text-muted)" }}>PBA odds powered by OKBet (PAGCOR licensed). Decimal format. 21+. Bet responsibly.</p>
          </main>

          <Sidewinder />
        </div>
      </div>
    </>
  )
}
