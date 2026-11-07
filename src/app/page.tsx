import Link from "next/link"
import { Sidewinder } from "@/components/Sidewinder"
import { TeamLogo } from "@/components/TeamLogo"

export default function Home() {
  return (
    <>
      <div className="shell" style={{ marginTop: 8 }}>
        <div className="break-bar" style={{ borderRadius: 4 }}>
          <span className="break-chip">BREAKING</span>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            <strong>Kai Sotto &amp; Carl Tamayo</strong> ruled out of Gilas FIBA window · <strong>SMB–Ginebra Game 4</strong> is the week's most-bet PBA game on OKBet · <strong>Banchero, Suggs out</strong> for Magic vs Suns
          </span>
        </div>
      </div>

      <div className="shell">
        {/* HERO TOP STORY */}
        <Link className="hero-story" href="/article/suns-vs-magic">
          <div className="hero-media" style={{ backgroundImage: "url('/images/hero-nba-arena.jpg')" }} />
          <div className="hero-copy">
            <div className="kicker mint">NBA · Betting preview · Trending #1</div>
            <h1 className="hero-h">Suns vs Magic: Orlando has covered 8 of the last 10 — despite missing five key players</h1>
            <p className="hero-p">Phoenix has lost nine of its last ten; Orlando eight of ten. The Magic sit five including Banchero and Suggs, yet Orlando's ATS history and Phoenix's league-worst 124.3 PPG allowed point the other way. Suns are 1.90 on OKBet with a 1-point spread.</p>
            <div className="meta">
              <span>2 min read</span>
              <span className="meta-dot">·</span>
              <span>Updated 8 min ago</span>
              <span className="meta-dot">·</span>
              <span style={{ color: "var(--mint-text)", fontWeight: 700 }}>OKBet lines inside</span>
            </div>
          </div>
        </Link>

        {/* 3-CARD SECONDARY GRID */}
        <div className="story-grid-3">
          <Link className="story-card" href="/article/ai-predictions">
            <div className="card-media" style={{ backgroundImage: "url('/images/story-lebron.jpg')" }} />
            <div className="card-copy">
              <span className="tag-pill tag-green" style={{ alignSelf: "flex-start" }}>NBA · AI Picks</span>
              <h2 className="card-h">Full-slate NBA AI predictions: Celtics best pick, Pacers biggest upset</h2>
              <p className="card-p">Our model projects scores for every game against OKBet decimal lines. Projections, win-probability bars and ATS edges for tonight's eight-game slate.</p>
              <div className="meta" style={{ marginTop: "auto" }}><span>3 min read</span><span className="meta-dot">·</span><span>45 min ago</span></div>
            </div>
          </Link>
          <Link className="story-card" href="/league/pba">
            <div className="card-media" style={{ backgroundImage: "url('/images/story-finals.jpg')" }} />
            <div className="card-copy">
              <span className="tag-pill tag-red" style={{ alignSelf: "flex-start" }}>PBA · Semifinals</span>
              <h2 className="card-h">SMB survives Ginebra comeback, forces Game 4 in heated Manila derby</h2>
              <p className="card-p">San Miguel held off a frantic Ginebra fourth quarter to extend the series. SMB is 1.72 on OKBet for Sunday's clash; Ginebra is priced at 2.15.</p>
              <div className="meta" style={{ marginTop: "auto" }}><span>1.5 min read</span><span className="meta-dot">·</span><span>32 min ago</span></div>
            </div>
          </Link>
          <Link className="story-card" href="/league/pba">
            <div className="card-media" style={{ backgroundImage: "url('/images/story-volleyball.jpg')" }} />
            <div className="card-copy">
              <span className="tag-pill tag-blue" style={{ alignSelf: "flex-start" }}>PVL · Finals</span>
              <h2 className="card-h">Creamline vs Akari Game 1: finals rematch set for sold-out Araneta</h2>
              <p className="card-p">The PVL Reinforced Conference best-of-three begins Saturday. Creamline are favourites at 1.40; Akari is 3.10 to pull the upset in front of 20,000.</p>
              <div className="meta" style={{ marginTop: "auto" }}><span>1 min read</span><span className="meta-dot">·</span><span>1 hr ago</span></div>
            </div>
          </Link>
        </div>

        {/* 3-COLUMN HOMEPAGE BODY */}
        <div className="home-body">
          {/* LEFT: TRENDING LIST */}
          <aside>
            <div className="sidebar-box">
              <div className="box-h"><span>Trending now</span><span style={{ fontSize: 10, color: "var(--ink-faint)" }}>REFRESH ↻</span></div>
              <ol className="trend-list">
                <li><Link href="/article/suns-vs-magic">Suns vs Magic: Phoenix -1 despite 9 losses in 10</Link></li>
                <li><Link href="/league/pba">SMB vs Ginebra Game 4 line movement</Link></li>
                <li><Link href="/article/ai-predictions">NBA AI predictions: full-slate ATS picks</Link></li>
                <li><span>Kai Sotto knee issues sideline him from Gilas window</span></li>
                <li><Link href="/league/pba">Converge one win from first PBA Finals</Link></li>
                <li><span>UP Maroons edge Adamson in UAAP Season 89</span></li>
              </ol>
            </div>

            <div className="sidebar-box" style={{ background: "var(--surface-subtle)" }}>
              <div className="box-h mint"><span>Idea bank · Perplexity intake</span><span className="tag-pill tag-green" style={{ fontSize: 8 }}>LIVE</span></div>
              <p style={{ fontSize: 11, color: "var(--ink-faint)", margin: "0 0 10px" }}>Trending signals detected in the last two hours, queued for the editorial desk.</p>
              <div className="side-item"><div className="side-tag">buzz +312%</div><div>NBA cup group betting edges</div></div>
              <div className="side-item"><div className="side-tag">local viral</div><div>MPBL South Finals: Biñan strikes first vs Quezon</div></div>
              <div className="side-item"><div className="side-tag">sentiment spike</div><div>Gilas roster without Sotto/Tamayo: who steps up</div></div>
              <div className="side-item"><div className="side-tag">market signal</div><div>OKBet odds movement tracker: SMB line shifts</div></div>
            </div>
          </aside>

          {/* CENTER: MAIN FEED */}
          <main>
            <div className="feed-head">
              <h2 className="feed-h">Latest short stories</h2>
              <div className="feed-filter">
                <span style={{ color: "var(--ink)" }}>All</span>
                <span>NBA</span>
                <span>PBA</span>
                <span>Gilas</span>
                <span>Betting</span>
              </div>
            </div>

            <article className="feed-item">
              <div className="feed-thumb" style={{ backgroundImage: "url('/images/story-matchup.jpg')" }} />
              <div>
                <span className="tag-pill tag-green">NBA · Preview</span>
                <Link href="/article/suns-vs-magic" className="feed-title" style={{ display: "block" }}>
                  Suns vs Magic: Orlando covers 8 of last 10 despite missing five key players
                </Link>
                <p className="feed-dek">Both Phoenix (9 losses in 10) and Orlando (8 of 10) are sliding. The Suns are 1.90 on OKBet with a 1-point spread — but Orlando's ATS history and Phoenix's defence point the other way.</p>
                <div className="meta"><span>2 min</span><span className="meta-dot">·</span><span>8 min ago</span><span className="meta-dot">·</span><span>PHX -1 · O/U 222.5</span></div>
              </div>
            </article>

            <article className="feed-item">
              <div className="feed-thumb" style={{ backgroundImage: "url('/images/story-celebration.jpg')" }} />
              <div>
                <span className="tag-pill tag-red">PBA · Semifinals</span>
                <Link href="/league/pba" className="feed-title" style={{ display: "block" }}>
                  Converge one win from first PBA Finals after Game 3 dominance over Rain or Shine
                </Link>
                <p className="feed-dek">Converge leads the series 2-1 as Delta Pineda's crew out-muscled RoS. Early lines for Game 4: Converge 1.62, RoS 2.35. Total opened at 198.5.</p>
                <div className="meta"><span>1.5 min</span><span className="meta-dot">·</span><span>2 hrs ago</span><span className="meta-dot">·</span><span>Series 2-1</span></div>
              </div>
            </article>

            <article className="feed-item">
              <div className="feed-thumb" style={{ backgroundImage: "url('/images/story-arena.jpg')" }} />
              <div>
                <span className="tag-pill tag-green">NBA · Odds watch</span>
                <Link href="/article/ai-predictions" className="feed-title" style={{ display: "block" }}>
                  Celtics -6.5 road favourites at 76ers: Boston 7-2 ATS in last nine
                </Link>
                <p className="feed-dek">Boston's top-rated offence faces Philadelphia on a back-to-back. Celtics moneyline 1.45 at OKBet; the total sits at 218. Sixers covering only 41% of home games.</p>
                <div className="meta"><span>1.5 min</span><span className="meta-dot">·</span><span>3 hrs ago</span><span className="meta-dot">·</span><span>BOS -6.5 · O/U 218</span></div>
              </div>
            </article>

            <article className="feed-item">
              <div className="feed-thumb" style={{ backgroundImage: "url('/images/story-matchup.jpg')" }} />
              <div>
                <span className="tag-pill tag-blue">Gilas · FIBA</span>
                <Link href="/article/suns-vs-magic" className="feed-title" style={{ display: "block" }}>
                  Kai Sotto and Carl Tamayo ruled out of FIBA window — who steps up for Cone?
                </Link>
                <p className="feed-dek">Sotto's knee and Tamayo's ankle force Tim Cone into small-ball adjustments. The Gilas betting line for the opener moved from −6.5 to −3.5 on PH books.</p>
                <div className="meta"><span>1.5 min</span><span className="meta-dot">·</span><span>1 hr ago</span><span className="meta-dot">·</span><span>PH -3.5</span></div>
              </div>
            </article>

            <article className="feed-item">
              <div className="feed-thumb" style={{ backgroundImage: "url('/images/story-lebron.jpg')" }} />
              <div>
                <span className="tag-pill tag-gray">Betting · Education</span>
                <Link href="/odds" className="feed-title" style={{ display: "block" }}>
                  How to read decimal odds on OKBet: the 60-second explainer for Pinoy fans
                </Link>
                <p className="feed-dek">Every Philippine sportsbook quotes decimal: odds × stake = total return. A quick worked example before the Friday night slate.</p>
                <div className="meta"><span>1 min</span><span className="meta-dot">·</span><span>5 hrs ago</span></div>
              </div>
            </article>

            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <button className="btn-ink" style={{ padding: "9px 22px" }} type="button">Load more stories ↻</button>
            </div>
          </main>

          {/* RIGHT: SIDEWINDER */}
          <Sidewinder />
        </div>

        {/* NEWSLETTER FUNNEL BAND */}
        <section className="funnel-hero" style={{ marginTop: 24, padding: "36px 20px" }}>
          <span className="tag-pill tag-green" style={{ marginBottom: 10 }}>SPORTY DAILY</span>
          <h2 style={{ fontSize: 26, fontWeight: 900, letterSpacing: -0.5, margin: "10px 0 8px" }}>The morning sports briefing built for your commute</h2>
          <p>Five stories, betting edges and odds movement delivered every weekday at 7:00 AM PHT — via email and our private Viber community. Free, forever.</p>
          <div className="funnel-form">
            <input className="funnel-input" placeholder="you@email.com" type="email" />
            <button className="btn-ink btn-mint" type="button" style={{ padding: "11px 20px" }}>Subscribe</button>
          </div>
          <div className="funnel-sub">18,400+ subscribers · No spam · <Link href="/newsletter" style={{ color: "var(--mint-text)", fontWeight: 700 }}>see membership tiers →</Link></div>
        </section>
      </div>
    </>
  )
}
