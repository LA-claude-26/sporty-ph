import Link from "next/link"
import { TeamLogo, TeamCode } from "./TeamLogo"

export interface GameScore {
  league: string
  away: { code: TeamCode; name: string }
  home: { code: TeamCode; name: string }
  awayScore?: number
  homeScore?: number
  state: string
  stateKind: "final" | "live" | "upcoming"
  time: string
  mlAway?: string
  mlHome?: string
  href: string
}

const GAMES: GameScore[] = [
  { league: "NBA", away: { code: "jax", name: "Jaguars" }, home: { code: "bal", name: "Ravens" }, awayScore: 26, homeScore: 20, state: "FINAL", stateKind: "final", time: "Thu", href: "/article/ai-predictions" },
  { league: "NBA", away: { code: "bos", name: "Celtics" }, home: { code: "phi", name: "76ers" }, awayScore: 104, homeScore: 98, state: "FINAL", stateKind: "final", time: "Fri", href: "/article/ai-predictions" },
  { league: "NBA", away: { code: "lal", name: "Lakers" }, home: { code: "den", name: "Nuggets" }, awayScore: 89, homeScore: 86, state: "Q4 3:24", stateKind: "live", time: "LIVE", href: "/article/ai-predictions" },
  { league: "NBA", away: { code: "phx", name: "Suns" }, home: { code: "orl", name: "Magic" }, state: "10:00 AM PHT", stateKind: "upcoming", time: "Sat", mlAway: "1.90", mlHome: "1.96", href: "/article/suns-vs-magic" },
  { league: "NBA", away: { code: "dal", name: "Mavs" }, home: { code: "ind", name: "Pacers" }, state: "10:30 AM PHT", stateKind: "upcoming", time: "Sat", mlAway: "1.55", mlHome: "2.50", href: "/article/ai-predictions" },
  { league: "PBA", away: { code: "con", name: "FiberXers" }, home: { code: "ros", name: "Painters" }, state: "4:00 PM PHT", stateKind: "upcoming", time: "Sun", mlAway: "1.62", mlHome: "2.35", href: "/league/pba" },
  { league: "PBA", away: { code: "smb", name: "Beermen" }, home: { code: "gin", name: "Ginebra" }, awayScore: 107, homeScore: 103, state: "FINAL · G3", stateKind: "final", time: "Thu", href: "/league/pba" },
  { league: "UAAP", away: { code: "up", name: "Maroons" }, home: { code: "adu", name: "Falcons" }, awayScore: 78, homeScore: 66, state: "FINAL", stateKind: "final", time: "Sat", href: "/league/pba" },
]

export function Scoreboard() {
  return (
    <section className="scores-rail" aria-label="Live sports scores">
      <div className="scores-track">
        {GAMES.map((g, i) => (
          <Link key={i} href={g.href} className="score-card">
            <div className="score-head">
              <span>{g.league} · {g.time}</span>
              <span className={`score-state state-${g.stateKind}`}>{g.state}</span>
            </div>
            <div className="score-row">
              <span className="score-team"><TeamLogo team={g.away.code} /><span>{g.away.name}</span></span>
              <span className="score-num">{g.awayScore ?? "—"}</span>
            </div>
            <div className="score-row">
              <span className="score-team"><TeamLogo team={g.home.code} /><span>{g.home.name}</span></span>
              <span className="score-num">{g.homeScore ?? "—"}</span>
            </div>
            {(g.mlAway || g.mlHome) && (
              <div className="score-odds">
                <span>OKBet ML</span>
                <span>{g.mlAway} / {g.mlHome}</span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}
