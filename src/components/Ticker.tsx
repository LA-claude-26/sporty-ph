import Link from "next/link"
import { TeamLogo, TeamCode } from "./TeamLogo"

interface TickerItem {
  t1: { code: TeamCode; name: string; ml: string }
  t2: { code: TeamCode; name: string; ml: string }
  href: string
}

const ITEMS: TickerItem[] = [
  { t1: { code: "phx", name: "PHX", ml: "1.90" }, t2: { code: "orl", name: "ORL", ml: "1.96" }, href: "/article/suns-vs-magic" },
  { t1: { code: "bos", name: "BOS", ml: "1.45" }, t2: { code: "phi", name: "PHI", ml: "2.80" }, href: "/article/ai-predictions#bestpick" },
  { t1: { code: "lal", name: "LAL", ml: "1.83" }, t2: { code: "den", name: "DEN", ml: "2.02" }, href: "/odds" },
  { t1: { code: "smb", name: "SMB", ml: "1.72" }, t2: { code: "gin", name: "GIN", ml: "2.15" }, href: "/league/pba" },
  { t1: { code: "con", name: "CON", ml: "1.62" }, t2: { code: "ros", name: "ROS", ml: "2.35" }, href: "/league/pba" },
  { t1: { code: "up", name: "UP", ml: "1.30" }, t2: { code: "adu", name: "ADU", ml: "3.50" }, href: "/odds" },
]

export function Ticker() {
  return (
    <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", fontSize: 11, overflow: "hidden" }}>
      <div className="shell" style={{ display: "flex", alignItems: "center", gap: 12, padding: "7px 16px" }}>
        <span style={{ fontWeight: 800, letterSpacing: "0.08em", fontSize: 10, color: "var(--ink-faint)", whiteSpace: "nowrap" }}>
          OKBET LIVE TAPE
        </span>
        <div style={{ display: "flex", gap: 14, overflowX: "auto", scrollbarWidth: "none", flex: 1 }}>
          {ITEMS.map((it, i) => (
            <Link key={i} href={it.href} style={{ display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap", color: "var(--ink-muted)", textDecoration: "none" }}>
              <TeamLogo team={it.t1.code} size={14} /><span>{it.t1.name}</span><strong>{it.t1.ml}</strong>
              <span style={{ color: "var(--ink-faint)" }}>·</span>
              <TeamLogo team={it.t2.code} size={14} /><span>{it.t2.name}</span><strong>{it.t2.ml}</strong>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
