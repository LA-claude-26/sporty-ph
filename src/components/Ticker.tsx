import Link from "next/link"
import { TeamLogo, TeamCode } from "./TeamLogo"

interface TickerItem {
  t1: { code: TeamCode; name: string; ml: string }
  t2: { code: TeamCode; name: string; ml: string }
  sub: string
  href: string
}

const ITEMS: TickerItem[] = [
  { t1: { code: "phx", name: "PHX", ml: "1.90" }, t2: { code: "orl", name: "ORL", ml: "1.96" }, sub: "-1 · O/U 222.5", href: "/article/suns-vs-magic" },
  { t1: { code: "smb", name: "SMB", ml: "1.72" }, t2: { code: "gin", name: "GIN", ml: "2.15" }, sub: "PBA · SF Gm4", href: "/league/pba" },
  { t1: { code: "bos", name: "BOS", ml: "1.45" }, t2: { code: "phi", name: "PHI", ml: "2.80" }, sub: "-6.5 · O/U 218", href: "/article/ai-predictions#bestpick" },
  { t1: { code: "lal", name: "LAL", ml: "1.83" }, t2: { code: "den", name: "DEN", ml: "2.02" }, sub: "-1.5 · O/U 226", href: "/odds" },
  { t1: { code: "con", name: "CON", ml: "1.62" }, t2: { code: "ros", name: "ROS", ml: "2.35" }, sub: "PBA · SF Gm4", href: "/league/pba" },
  { t1: { code: "up", name: "UP", ml: "1.30" }, t2: { code: "adu", name: "ADU", ml: "3.50" }, sub: "UAAP S89", href: "/odds" },
]

export function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        <div className="ticker-label">
          <span className="live-dot" /> LIVE ODDS · OKBET
        </div>
        <div className="ticker-track">
          {ITEMS.map((it, i) => (
            <Link key={i} className="score-card" href={it.href}>
              <div className="score-teams">
                <div className="score-team">
                  <span className="tname">
                    <TeamLogo team={it.t1.code} />
                    <span>{it.t1.name}</span>
                  </span>
                  <strong>{it.t1.ml}</strong>
                </div>
                <div className="score-team">
                  <span className="tname">
                    <TeamLogo team={it.t2.code} />
                    <span>{it.t2.name}</span>
                  </span>
                  <strong>{it.t2.ml}</strong>
                </div>
              </div>
              <div className="score-odds">{it.sub}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
