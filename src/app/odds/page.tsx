import type { Metadata } from "next"
import Link from "next/link"
import { Sidewinder } from "@/components/Sidewinder"
import { TeamLogo, TeamCode } from "@/components/TeamLogo"

export const metadata: Metadata = {
  title: "Live Odds & Picks Board — OKBet Decimal Lines",
  description:
    "Compare live decimal odds, spreads and totals from PAGCOR-licensed sportsbooks. Updated every 15 minutes.",
}

const ROWS: Array<{
  time: string
  t1: TeamCode
  t2: TeamCode
  match: string
  ml: string
  spread: string
  total: string
  best: string
  href: string
}> = [
  { time: "Sat 10:00", t1: "phx", t2: "orl", match: "PHX @ ORL", ml: "1.90 / 1.96", spread: "PHX −1 (1.97)", total: "222.5", best: "PHX 1.90", href: "/article/suns-vs-magic" },
  { time: "Sat 10:00", t1: "lal", t2: "den", match: "LAL @ DEN", ml: "1.83 / 2.02", spread: "LAL −1.5 (1.91)", total: "226", best: "DEN 2.02", href: "/article/ai-predictions" },
  { time: "Sat 10:00", t1: "bos", t2: "phi", match: "BOS @ PHI", ml: "1.45 / 2.80", spread: "BOS −6.5 (1.95)", total: "218", best: "BOS 1.45", href: "/article/ai-predictions#bestpick" },
  { time: "Sat 10:30", t1: "dal", t2: "ind", match: "DAL @ IND", ml: "1.55 / 2.50", spread: "DAL −5.5 (1.93)", total: "228", best: "IND 2.65", href: "/article/ai-predictions#upset" },
  { time: "Sun 16:00", t1: "con", t2: "ros", match: "CON @ ROS", ml: "1.62 / 2.35", spread: "CON −3.5 (1.90)", total: "198.5", best: "CON 1.62", href: "/league/pba" },
  { time: "Sun 18:30", t1: "smb", t2: "gin", match: "SMB @ GIN", ml: "1.72 / 2.15", spread: "SMB −2.0 (1.91)", total: "204.5", best: "GIN 2.15", href: "/league/pba" },
]

export default function OddsPage() {
  return (
    <>
      <div className="shell" style={{ marginTop: 8 }}>
        <div className="break-bar" style={{ borderRadius: 4 }}>
          <span className="break-chip">PRODUCT</span>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            <strong>Live odds board</strong> — decimal lines, best-price highlights and direct affiliate conversion. See also:{" "}
            <Link href="/article/ai-predictions" style={{ color: "#fff", textDecoration: "underline" }}>AI picks</Link> ·{" "}
            <Link href="/article/suns-vs-magic" style={{ color: "#fff", textDecoration: "underline" }}>game preview</Link> ·{" "}
            <Link href="/league/pba" style={{ color: "#fff", textDecoration: "underline" }}>PBA hub</Link> ·{" "}
            <Link href="/newsletter" style={{ color: "#fff", textDecoration: "underline" }}>newsletter</Link>
          </span>
        </div>
      </div>

      <div className="shell" style={{ marginTop: 18 }}>
        <div className="home-body" style={{ gridTemplateColumns: "1fr 300px" }}>
          <main style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: 30 }}>
            <span className="tag-pill tag-green">Betting · Live board</span>
            <h1 className="article-h">Live odds board: decimal lines, spreads and totals — updated every 15 minutes</h1>
            <p className="dek" style={{ fontStyle: "normal" }}>Decimal odds are the Philippine standard. Best price across PAGCOR-licensed books is highlighted. Click any row for the full betting preview.</p>

            <table className="slate-table">
              <thead><tr><th>Time</th><th>Matchup</th><th>Moneyline</th><th>Spread</th><th>Total</th><th>Best ML</th><th>Preview</th></tr></thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={i}>
                    <td>{r.time}</td>
                    <td><span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><TeamLogo team={r.t1} /> {r.match} <TeamLogo team={r.t2} /></span></td>
                    <td>{r.ml}</td>
                    <td>{r.spread}</td>
                    <td>{r.total}</td>
                    <td style={{ fontWeight: 800, color: "var(--mint-text)" }}>{r.best}</td>
                    <td><Link href={r.href} style={{ color: "var(--mint-text)", fontWeight: 700 }}>Read →</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="guide-bar" style={{ marginTop: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-faint)" }}>ODDS MOVEMENT SPOTLIGHT · LAST 4 HOURS</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-muted)", lineHeight: 1.8, margin: "10px 0" }}>
              <p>• <strong>SMB (PBA SF Game 4)</strong>: 1.85 → 1.72 — Manila money arrived on the Beermen after the Game 3 escape.</p>
              <p>• <strong>Celtics at 76ers total</strong>: opened 219.5, now 218 — sharp money under on Philadelphia's back-to-back.</p>
              <p>• <strong>Gilas FIBA opener</strong>: −6.5 → −3.5 after Kai Sotto and Carl Tamayo were ruled out.</p>
            </div>

            <div style={{ margin: "24px 0", background: "var(--surface-subtle)", border: "1px solid var(--mint)", borderRadius: 10, padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div>
                <strong style={{ fontSize: 14 }}>Get daily line-movement alerts at 7:00 AM PHT.</strong>
                <div style={{ fontSize: 11, color: "var(--ink-faint)" }}>SPORTY DAILY — free, decimal odds, Philippine leagues included.</div>
              </div>
              <Link className="btn-ink btn-mint" href="/newsletter" style={{ fontSize: 11 }}>Subscribe free</Link>
            </div>

            <p style={{ fontSize: 11, color: "var(--ink-faint)" }}>Lines from PAGCOR-licensed sportsbooks. Decimal odds. We may earn a commission from sportsbook links at no cost to you. 21+ only. Bet responsibly — bet only what you can afford to lose.</p>
          </main>

          <Sidewinder />
        </div>
      </div>
    </>
  )
}
