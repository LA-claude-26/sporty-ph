import type { Metadata } from "next"
import Link from "next/link"
import { Sidewinder } from "@/components/Sidewinder"
import { TeamLogo } from "@/components/TeamLogo"

export const metadata: Metadata = {
  title: "Live Odds & Picks Board — OKBet Decimal Lines",
  description: "Compare live decimal odds, spreads, and totals from PAGCOR-licensed sportsbooks. Updated every 15 minutes.",
}

const ROWS = [
  { time: "Sat 10:00", t1: "phx", t2: "orl", match: "PHX @ ORL", ml: "1.90 / 1.96", spread: "PHX -1 (1.97)", total: "222.5", best: "PHX 1.90 · OKBet", href: "/article/suns-vs-magic" },
  { time: "Sat 10:00", t1: "lal", t2: "den", match: "LAL @ DEN", ml: "1.83 / 2.02", spread: "LAL -1.5 (1.91)", total: "226", best: "DEN 2.02 · OKBet", href: "/article/ai-predictions" },
  { time: "Sat 10:00", t1: "bos", t2: "phi", match: "BOS @ PHI", ml: "1.45 / 2.80", spread: "BOS -6.5 (1.95)", total: "218", best: "BOS 1.45 · OKBet", href: "/article/ai-predictions#bestpick" },
  { time: "Sat 10:30", t1: "dal", t2: "ind", match: "DAL @ IND", ml: "1.55 / 2.50", spread: "DAL -5.5 (1.93)", total: "228", best: "IND 2.65 · OKBet", href: "/article/ai-predictions#upset" },
  { time: "Sun 16:00", t1: "con", t2: "ros", match: "CON @ ROS", ml: "1.62 / 2.35", spread: "CON -3.5 (1.90)", total: "198.5", best: "CON 1.62 · OKBet", href: "/league/pba" },
  { time: "Sun 18:30", t1: "smb", t2: "gin", match: "SMB @ GIN", ml: "1.72 / 2.15", spread: "SMB -2.0 (1.91)", total: "204.5", best: "GIN 2.15 · OKBet", href: "/league/pba" },
]

export default function OddsPage() {
  return (
    <>
      <div className="breaking">
        <div className="breaking-inner">
          <span className="breaking-tag">ODDS BOARD</span>
          <div className="breaking-text">
            <strong>Dedicated odds &amp; picks product</strong> — live decimal lines, best-price highlighting, and direct affiliate conversion. See:{" "}
            <Link href="/article/ai-predictions" style={{ color: "var(--mint)", textDecoration: "underline" }}>Variation 1 (AI picks)</Link> ·{" "}
            <Link href="/article/suns-vs-magic" style={{ color: "var(--mint)", textDecoration: "underline" }}>Variation 2 (game preview)</Link> ·{" "}
            <Link href="/league/pba" style={{ color: "var(--mint)", textDecoration: "underline" }}>PBA hub</Link> ·{" "}
            <Link href="/newsletter" style={{ color: "var(--mint)", textDecoration: "underline" }}>Newsletter funnel</Link>
          </div>
        </div>
      </div>

      <div className="page-shell" style={{ marginTop: 18 }}>
        <div className="sidewinder-grid">
          <main className="article-main">
            <div className="article-badge">BETTING · LIVE BOARD</div>
            <h1 className="article-title">Live Odds Board: Decimal Lines, Spreads &amp; Totals — Updated Every 15 Minutes</h1>
            <p style={{ fontSize: 13, color: "var(--text-dim)" }}>
              Decimal odds are the Philippine standard. Best price across PAGCOR-licensed books is highlighted in <span style={{ color: "var(--mint)", fontWeight: 700 }}>mint</span>. Click any row for the full betting preview.
            </p>

            <table className="odds-full-table">
              <thead><tr><th>Time</th><th>Matchup</th><th>Moneyline</th><th>Spread</th><th>Total</th><th>Best ML</th><th>Preview</th></tr></thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={i}>
                    <td>{r.time}</td>
                    <td><TeamLogo team={r.t1 as any} className="mr-1" /> {r.match} <TeamLogo team={r.t2 as any} className="ml-1" /></td>
                    <td>{r.ml}</td><td>{r.spread}</td><td>{r.total}</td>
                    <td className="best-cell">{r.best}</td>
                    <td><Link href={r.href} style={{ color: "var(--mint)" }}>Read →</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="odds-card" style={{ marginTop: 24 }}>
              <div className="odds-header"><span>ODDS MOVEMENT SPOTLIGHT</span><span className="odds-provider">LAST 4 HOURS</span></div>
              <div style={{ fontSize: 12, color: "var(--text-dim)", lineHeight: 1.7 }}>
                <p>• <strong>SMB (PBA SF Game 4)</strong>: 1.85 → 1.72 — Manila money arriving hard on the Beermen after their Game 3 escape.</p>
                <p>• <strong>Celtics at 76ers total</strong>: opened 219.5, now 218 — sharp money under on Philadelphia back-to-back.</p>
                <p>• <strong>Gilas FIBA opener</strong>: −6.5 → −3.5 after Kai Sotto and Carl Tamayo were ruled out.</p>
              </div>
            </div>

            <div className="sub-form" style={{ margin: "26px 0", background: "var(--bg-card2)", border: "1px solid var(--mint)", borderRadius: 10, padding: 14, alignItems: "center" }}>
              <div style={{ flex: 1 }}><strong style={{ color: "var(--text)" }}>Get daily line-movement alerts at 7AM PHT.</strong><div style={{ fontSize: 11, color: "var(--text-muted)" }}>SPORTY DAILY — free, decimal odds, Philippine leagues included.</div></div>
              <Link className="btn btn-accent" href="/newsletter">SUBSCRIBE FREE</Link>
            </div>

            <p style={{ fontSize: 11, color: "var(--text-muted)" }}>Lines from PAGCOR-licensed sportsbooks. Decimal odds. We may earn a commission from sportsbook links at no cost to you. 21+. Bet responsibly — bet only what you can afford to lose.</p>
          </main>

          <Sidewinder />
        </div>
      </div>
    </>
  )
}
