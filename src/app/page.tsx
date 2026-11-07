import Link from "next/link"
import { Sidewinder } from "@/components/Sidewinder"
import { TeamLogo } from "@/components/TeamLogo"

export default function Home() {
  return (
    <>
      <div className="breaking">
        <div className="breaking-inner">
          <span className="breaking-tag">TRENDING NOW</span>
          <div className="breaking-text">
            <strong>Kai Sotto &amp; Carl Tamayo</strong> ruled out of FIBA window · <strong>SMB vs Ginebra Game 4</strong> most bet on PBA match this week · <strong>Banchero, Suggs out</strong> for Magic vs Suns · <strong>Converge one win</strong> from first PBA Finals
          </div>
        </div>
      </div>

      <div className="page-shell" style={{ marginTop: 18 }}>
        {/* HERO */}
        <Link className="hero-card" href="/article/suns-vs-magic" style={{ textDecoration: "none" }}>
          <div className="hero-media" style={{ backgroundImage: "url('/images/hero-nba-arena.jpg')" }}>
            <div className="hero-badge">
              <TeamLogo team="phx" /> NBA · BETTING PREVIEW · TRENDING #1
            </div>
            <h1 className="hero-title">
              Suns vs Magic: <span>Odds, Injuries &amp; Best Bets</span> for Friday's Clash
            </h1>
            <div className="hero-meta">
              <span>1.5 min read</span><span className="dot" /><span>Nov 6, 2026</span><span className="dot" /><span>OKBet lines inside</span>
            </div>
          </div>
          <div className="hero-side">
            <p style={{ fontSize: 14, color: "var(--text-dim)", marginBottom: 14 }}>
              Phoenix has lost 9 of 10; Orlando 8 of 10. The Magic sit five players including Banchero and Suggs, yet Orlando has covered 8 of the last 10 head-to-head. Suns favored by one point at 1.90.
            </p>
            <div className="odds-card" style={{ margin: "0 0 14px" }}>
              <div className="odds-header">
                <span>ODDS BOARD</span><span className="odds-provider">OKBET · PAGCOR LICENSED</span>
              </div>
              <div className="odds-grid">
                <div className="odd-box hot"><div className="odd-lbl">MONEYLINE</div><div className="odd-val">PHX 1.90</div></div>
                <div className="odd-box"><div className="odd-lbl">SPREAD</div><div className="odd-val">PHX -1 (1.97)</div></div>
                <div className="odd-box"><div className="odd-lbl">TOTAL</div><div className="odd-val">222.5</div></div>
              </div>
            </div>
            <span className="btn btn-accent" style={{ alignSelf: "flex-start" }}>READ PREVIEW →</span>
          </div>
        </Link>

        {/* POST VARIATIONS GALLERY */}
        <div className="section-head">
          <span className="section-title">POST FORMATS IN THIS BUILD</span>
          <span style={{ fontSize: 11, color: "var(--text-muted)" }}>click any to open the live page</span>
        </div>
        <div className="var-grid">
          <Link className="var-card" href="/article/ai-predictions">
            <div className="var-num">01 · COVERS-STYLE</div>
            <div className="var-t">AI Predictions Post</div>
            <div className="var-d">Full-slate picks table with pick chips, matchup deep dives, win-probability bars, season record table — modeled on covers.com/nfl/ai-predictions-week-9-2026.</div>
          </Link>
          <Link className="var-card" href="/article/suns-vs-magic">
            <div className="var-num">02 · YOUR SAMPLE FORMAT</div>
            <div className="var-t">Game Betting Preview</div>
            <div className="var-d">The ~250-word Suns vs Magic story you supplied: decimal-odds snapshot, injury report, key stats, ATS trends, verdict.</div>
          </Link>
          <Link className="var-card" href="/league/pba">
            <div className="var-num">03 · SEO PILLAR</div>
            <div className="var-t">League Hub Page</div>
            <div className="var-d">PBA semifinals series tracker, futures odds table, and every PBA short story clustered in one hub.</div>
          </Link>
          <Link className="var-card" href="/odds">
            <div className="var-num">04 · DIRECT MONETIZATION</div>
            <div className="var-t">Live Odds Board</div>
            <div className="var-d">Decimal lines with best-price mint highlights, injury flags, and direct affiliate bet links.</div>
          </Link>
          <Link className="var-card" href="/newsletter">
            <div className="var-num">05 · SUBSCRIBER FUNNEL</div>
            <div className="var-t">Newsletter Landing Page</div>
            <div className="var-d">CLUTCH DAILY free vs VIP tiers, perks, Viber community access, and Beehiiv-benchmark conversion math.</div>
          </Link>
          <Link className="var-card" href="/article/ai-predictions#slate">
            <div className="var-num">06 · AFFILIATE ENGINE</div>
            <div className="var-t">Picks &amp; Matchup Cards</div>
            <div className="var-d">Every pick is a styled chip linked to the sportsbook redirect — just like the Covers model you shared.</div>
          </Link>
        </div>

        {/* 3-COLUMN LAYOUT */}
        <div className="layout">
          {/* LEFT */}
          <aside className="col-left">
            <div className="section-head"><span className="section-title">TRENDING NOW</span><span className="section-link">REFRESH ↻</span></div>
            <Link className="trend-item" href="/article/suns-vs-magic"><span className="trend-num">01</span><div><div className="trend-title">Suns vs Magic: Phoenix -1 favorite despite 9 losses in 10</div><div className="trend-meta">NBA · 1.5 min · 4.8K reads</div></div></Link>
            <Link className="trend-item" href="/league/pba"><span className="trend-num">02</span><div><div className="trend-title">SMB vs Ginebra Game 4: Beermen pride revived after Game 3 escape</div><div className="trend-meta">PBA · 2 min · 7.1K reads</div></div></Link>
            <div className="trend-item"><span className="trend-num">03</span><div><div className="trend-title">Kai Sotto knee issues sideline him from next Gilas FIBA window</div><div className="trend-meta">GILAS · 1 min · 9.4K reads</div></div></div>
            <Link className="trend-item" href="/league/pba"><span className="trend-num">04</span><div><div className="trend-title">Converge one win from first PBA Finals after Game 3 over RoS</div><div className="trend-meta">PBA · 1.5 min · 3.6K reads</div></div></Link>
            <Link className="trend-item" href="/article/ai-predictions"><span className="trend-num">05</span><div><div className="trend-title">NBA AI predictions: full-slate ATS picks &amp; score projections</div><div className="trend-meta">NBA · 3 min · 6.2K reads</div></div></Link>
            <div className="trend-item"><span className="trend-num">06</span><div><div className="trend-title">UP Maroons edge Adamson to keep UAAP Season 89 lead</div><div className="trend-meta">UAAP · 1 min · 2.1K reads</div></div></div>

            <div className="ideabank">
              <div className="ideabank-head"><span className="section-title" style={{ fontSize: 17 }}>IDEA BANK ⚡</span><span className="src-badge">PERPLEXITY INTAKE</span></div>
              <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 10 }}>Trending signals detected in last 2 hrs → queued for editorial.</p>
              <div className="idea-row"><div className="idea-title">NBA cup group betting edges</div><div className="idea-sub"><span>+312% buzz</span> · <span>angle: betting preview</span></div></div>
              <div className="idea-row"><div className="idea-title">MPBL South Finals: Biñan strikes first vs Quezon</div><div className="idea-sub"><span>local viral</span> · <span>angle: recap + odds</span></div></div>
              <div className="idea-row"><div className="idea-title">Gilas roster without Sotto/Tamayo: who steps up</div><div className="idea-sub"><span>sentiment spike</span> · <span>angle: analysis</span></div></div>
              <div className="idea-row"><div className="idea-title">OKBet odds movement tracker: SMB line shifts</div><div className="idea-sub"><span>market signal</span> · <span>angle: data piece</span></div></div>
            </div>
          </aside>

          {/* MID: STORIES */}
          <main className="col-mid">
            <div className="section-head"><span className="section-title">LATEST SHORT STORIES</span><span className="section-link">NEWEST FIRST</span></div>

            <article className="story-card"><Link href="/article/suns-vs-magic" style={{ textDecoration: "none" }}><div className="story-thumb" style={{ backgroundImage: "url('/images/story-matchup.jpg')" }}><div className="tlogo-chip"><TeamLogo team="phx" /><TeamLogo team="orl" /></div></div><div className="story-content"><div className="story-kicker"><span className="tag-nba">NBA</span><span>·</span><span>PREVIEW</span><span className="story-time">8 min ago</span></div><h2 className="story-title">Suns vs Magic: Orlando Covers 8 of Last 10 Despite Missing Five Key Players</h2><p className="story-deck">Both Phoenix (9 losses in 10) and Orlando (8 of 10) are sliding. The Suns are priced at 1.90 on OKBet with a 1-point spread — but Orlando's ATS history and Phoenix's defense (124.3 PPG allowed) point the other way.</p><div className="story-foot"><span className="odd-chip best">PHX -1 (1.97)</span><span className="odd-chip">O/U 222.5</span><span className="injury-chip">⚠ Banchero, Suggs OUT</span><span className="ats-chip">ORL 8-1-1 ATS</span></div></div></Link></article>

            <article className="story-card"><Link href="/league/pba" style={{ textDecoration: "none" }}><div className="story-thumb" style={{ backgroundImage: "url('/images/story-finals.jpg')" }}><div className="tlogo-chip"><TeamLogo team="smb" /><TeamLogo team="gin" /></div></div><div className="story-content"><div className="story-kicker"><span className="tag-pba">PBA</span><span>·</span><span>SEMIFINALS</span><span className="story-time">32 min ago</span></div><h2 className="story-title">SMB Survives Ginebra Comeback, Forces Game 4 in Heated Manila Derby</h2><p className="story-deck">San Miguel held off a frantic Barangay Ginebra fourth quarter to extend the series. Leo Austria's squad pride talk landed; SMB's moneyline sits at 1.72 on OKBet for Sunday's clash.</p><div className="story-foot"><span className="odd-chip">SMB 1.72</span><span className="odd-chip">GIN 2.15</span><span className="ats-chip">Series 2-1</span><span style={{ fontSize: 11, color: "var(--text-muted)" }}>1 min read</span></div></div></Link></article>

            <article className="story-card"><Link href="/article/ai-predictions" style={{ textDecoration: "none" }}><div className="story-thumb" style={{ backgroundImage: "url('/images/hero-nba-arena.jpg')" }}><div className="tlogo-chip"><TeamLogo team="bos" /><TeamLogo team="dal" /></div></div><div className="story-content"><div className="story-kicker"><span className="tag-nba">NBA</span><span>·</span><span>AI PICKS</span><span className="story-time">45 min ago</span></div><h2 className="story-title">NBA AI Predictions Tonight: Celtics Best Pick, Pacers Biggest Upset on the 8-Game Slate</h2><p className="story-deck">Full-slate projections against OKBet lines: Boston -6.5 the top edge, Indiana +5.5 live underdog, projected scores for every matchup. Model carries an 11–3 outright week into tonight.</p><div className="story-foot"><span className="pred-pick">BOS -6.5 BEST PICK</span><span className="pred-pick">IND +5.5 UPSET</span><span style={{ fontSize: 11, color: "var(--text-muted)" }}>3 min read</span></div></div></Link></article>

            <article className="story-card"><Link href="/article/suns-vs-magic" style={{ textDecoration: "none" }}><div className="story-thumb" style={{ backgroundImage: "url('/images/story-lebron.jpg')" }}><div className="tlogo-chip"><TeamLogo team="gil" /></div></div><div className="story-content"><div className="story-kicker"><span className="tag-gilas">GILAS PILIPINAS</span><span>·</span><span>FIBA</span><span className="story-time">1 hr ago</span></div><h2 className="story-title">Kai Sotto and Carl Tamayo Ruled Out of FIBA Window — Who Steps Up for Cone?</h2><p className="story-deck">Sotto's knee and Tamayo's ankle force Tim Cone into small-ball adjustments. The Gilas betting line for the opener moved from −6.5 to −3.5 on PH books.</p><div className="story-foot"><span className="injury-chip">⚠ Sotto, Tamayo OUT</span><span className="odd-chip best">PH -3.5</span><span style={{ fontSize: 11, color: "var(--text-muted)" }}>1.5 min read</span></div></div></Link></article>

            <article className="story-card"><Link href="/league/pba" style={{ textDecoration: "none" }}><div className="story-thumb" style={{ backgroundImage: "url('/images/story-celebration.jpg')" }}><div className="tlogo-chip"><TeamLogo team="con" /><TeamLogo team="ros" /></div></div><div className="story-content"><div className="story-kicker"><span className="tag-pba">PBA</span><span>·</span><span>SEMIFINALS</span><span className="story-time">2 hrs ago</span></div><h2 className="story-title">Converge One Win from First PBA Finals After Game 3 Dominance over Rain or Shine</h2><p className="story-deck">Converge leads the series 2-1 as Delta Pineda's crew out-muscled RoS. Early lines for Game 4: Converge 1.62, RoS 2.35. Total opened at 198.5.</p><div className="story-foot"><span className="odd-chip">CON 1.62</span><span className="odd-chip">ROS 2.35</span><span className="ats-chip">O/U 198.5</span></div></div></Link></article>

            <article className="story-card"><Link href="/odds" style={{ textDecoration: "none" }}><div className="story-thumb" style={{ backgroundImage: "url('/images/story-arena.jpg')" }}><div className="tlogo-chip"><TeamLogo team="bos" /><TeamLogo team="phi" /></div></div><div className="story-content"><div className="story-kicker"><span className="tag-nba">NBA</span><span>·</span><span>ODDS WATCH</span><span className="story-time">3 hrs ago</span></div><h2 className="story-title">Celtics -6.5 Road Favorites at 76ers: Boston 7-2 ATS in Last Nine</h2><p className="story-deck">Boston's top-rated offense faces Philadelphia on a back-to-back. Celtics moneyline 1.45 at OKBet; the total sits at 218. Sixers covering only 41% of home games.</p><div className="story-foot"><span className="odd-chip best">BOS -6.5</span><span className="ats-chip">BOS 7-2 ATS</span><span className="odd-chip">O/U 218</span></div></div></Link></article>

            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <button className="btn btn-ghost" style={{ padding: "10px 24px" }}>LOAD MORE STORIES ↻</button>
            </div>
          </main>

          {/* RIGHT */}
          <Sidewinder />
        </div>
      </div>
    </>
  )
}
