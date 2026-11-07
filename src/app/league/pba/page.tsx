import type { Metadata } from "next"
import Link from "next/link"
import { Sidewinder } from "@/components/Sidewinder"
import { TeamLogo } from "@/components/TeamLogo"

export const metadata: Metadata = {
  title: "PBA Hub: Semifinals Odds, Series Tracker & Short Stories",
  description:
    "SMB vs Ginebra, Converge vs Rain or Shine — decimal odds from OKBet, series tracker, and 300-word short stories.",
}

export default function PbaHubPage() {
  return (
    <>
      <div className="shell" style={{ marginTop: 8 }}>
        <div className="break-bar" style={{ borderRadius: 4 }}>
          <span className="break-chip">HUB</span>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            <strong>PBA hub</strong> — series tracker, futures, standings and every PBA short story. See also:{" "}
            <Link href="/article/ai-predictions" style={{ color: "#fff", textDecoration: "underline" }}>AI picks</Link> ·{" "}
            <Link href="/article/suns-vs-magic" style={{ color: "#fff", textDecoration: "underline" }}>game preview</Link> ·{" "}
            <Link href="/odds" style={{ color: "#fff", textDecoration: "underline" }}>odds board</Link> ·{" "}
            <Link href="/newsletter" style={{ color: "#fff", textDecoration: "underline" }}>newsletter</Link>
          </span>
        </div>
      </div>

      <div className="shell" style={{ marginTop: 18 }}>
        <div className="home-body" style={{ gridTemplateColumns: "1fr 300px" }}>
          <main style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: 30 }}>
            <span className="tag-pill tag-red">PBA · Philippine Basketball Association</span>
            <h1 className="article-h">PBA hub: where every story is 90 seconds and the odds are live</h1>
            <p className="dek" style={{ fontStyle: "normal" }}>The soul of Philippine sports. We cover every semifinal battle with decimal-odds breakdowns from OKBet, injury flags, and 300-word short stories built for your commute.</p>

            <div className="guide-bar" style={{ marginTop: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-faint)" }}>SEMIFINALS SERIES TRACKER</span>
              <span style={{ fontSize: 11, color: "var(--ink-faint)" }}>OKBET DECIMAL</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, margin: "12px 0" }}>
              <div className="stat-box" style={{ textAlign: "left", padding: 14 }}>
                <span className="tag-pill tag-red" style={{ marginBottom: 6 }}>Semifinal A</span>
                <div style={{ fontWeight: 800, fontSize: 13 }}>San Miguel leads Ginebra 2–1</div>
                <div style={{ fontSize: 11, color: "var(--ink-faint)", margin: "4px 0" }}>Beermen revived pride in Game 3; Game 4 Sunday</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700 }}>Game 4: SMB 1.72 · GIN 2.15</div>
              </div>
              <div className="stat-box" style={{ textAlign: "left", padding: 14 }}>
                <span className="tag-pill tag-blue" style={{ marginBottom: 6 }}>Semifinal B</span>
                <div style={{ fontWeight: 800, fontSize: 13 }}>Converge leads Rain or Shine 2–1</div>
                <div style={{ fontSize: 11, color: "var(--ink-faint)", margin: "4px 0" }}>Delta Pineda's crew one win from first Finals</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700 }}>Game 4: CON 1.62 · ROS 2.35</div>
              </div>
              <div className="stat-box" style={{ textAlign: "left", padding: 14 }}>
                <span className="tag-pill tag-green" style={{ marginBottom: 6 }}>Finals picture</span>
                <div style={{ fontWeight: 800, fontSize: 13 }}>Winner A vs Winner B</div>
                <div style={{ fontSize: 11, color: "var(--ink-faint)", margin: "4px 0" }}>Best-of-seven begins mid-November</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700 }}>Futures market below</div>
              </div>
            </div>

            <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3, margin: "26px 0 10px" }}>Championship futures · OKBet</h2>
            <table className="slate-table">
              <thead><tr><th>Team</th><th>Title odds</th><th>Implied prob</th><th>Trend</th></tr></thead>
              <tbody>
                <tr><td><span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><TeamLogo team="smb" /> San Miguel Beermen</span></td><td style={{ fontWeight: 800, color: "var(--mint-text)" }}>1.85</td><td>54%</td><td>↓ shortened after G3</td></tr>
                <tr><td><span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><TeamLogo team="con" /> Converge FiberXers</span></td><td style={{ fontWeight: 800 }}>2.60</td><td>38%</td><td>best value in market</td></tr>
                <tr><td><span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><TeamLogo team="gin" /> Barangay Ginebra</span></td><td style={{ fontWeight: 800 }}>3.40</td><td>29%</td><td>↑ drifted after loss</td></tr>
                <tr><td><span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><TeamLogo team="ros" /> Rain or Shine Elasto Painters</span></td><td style={{ fontWeight: 800 }}>5.50</td><td>18%</td><td>↑ longest shot</td></tr>
              </tbody>
            </table>

            <div className="recos-wrap">
              <div className="recos-h">Latest PBA short stories</div>
              <div className="recos-grid">
                <Link className="reco-card" href="/article/suns-vs-magic"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-finals.jpg')" }} /><div className="reco-copy"><span className="reco-tag">Semifinals</span><div className="reco-title">SMB survives Ginebra comeback, forces Game 4 in heated Manila derby</div><span className="reco-time">SMB 1.72 · GIN 2.15 · 32 min ago</span></div></Link>
                <Link className="reco-card" href="/article/suns-vs-magic"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-celebration.jpg')" }} /><div className="reco-copy"><span className="reco-tag">Semifinals</span><div className="reco-title">Converge one win from first PBA Finals after Game 3 dominance over RoS</div><span className="reco-time">CON 1.62 · ROS 2.35 · 2 hrs ago</span></div></Link>
                <Link className="reco-card" href="/article/suns-vs-magic"><div className="reco-thumb" style={{ backgroundImage: "url('/images/story-arena.jpg')" }} /><div className="reco-copy"><span className="reco-tag">Feature</span><div className="reco-title">Delta Pineda's halftime speech that turned the series: inside Converge's locker room</div><span className="reco-time">1 min read</span></div></Link>
              </div>
            </div>

            <div style={{ margin: "24px 0", background: "var(--surface-subtle)", border: "1px solid var(--mint)", borderRadius: 10, padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div>
                <strong style={{ fontSize: 14 }}>Never miss a PBA line movement.</strong>
                <div style={{ fontSize: 11, color: "var(--ink-faint)" }}>SPORTY DAILY — every morning at 7:00 AM PHT. Free forever.</div>
              </div>
              <Link className="btn-ink btn-mint" href="/newsletter" style={{ fontSize: 11 }}>Subscribe free</Link>
            </div>

            <p style={{ fontSize: 11, color: "var(--ink-faint)" }}>PBA odds powered by OKBet (PAGCOR licensed). Decimal format. 21+ only. Bet responsibly.</p>
          </main>

          <Sidewinder />
        </div>
      </div>
    </>
  )
}
