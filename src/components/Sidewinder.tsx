"use client"

import { useState } from "react"
import Link from "next/link"
import { TeamLogo } from "./TeamLogo"
import { SidebarAd } from "./Ads"

export function Sidewinder() {
  const [subOk, setSubOk] = useState(false)
  const [poll, setPoll] = useState<string | null>(null)

  const subscribed = (e: React.FormEvent) => {
    e.preventDefault()
    setSubOk(true)
  }

  return (
    <aside aria-label="Sidebar">
      <div className="odds-box">
        <div className="box-h mint">
          <span>Live Odds · OKBet</span>
          <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", fontWeight: 400 }}>UPDATED 09:25</span>
        </div>
        <div className="odds-match">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
              <TeamLogo team="phx" /> <TeamLogo team="orl" /> Suns @ Magic
            </div>
            <Link href="/article/suns-vs-magic" className="odd-chip best">1.90 / 1.96</Link>
          </div>
          <div className="score-odds" style={{ marginTop: 2 }}><span>ML 1.90/1.96 · spread -1</span><Link href="/article/suns-vs-magic" style={{ color: "var(--mint-text)" }}>preview →</Link></div>
        </div>
        <div className="odds-match">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
              <TeamLogo team="bos" /> <TeamLogo team="phi" /> Celtics @ 76ers
            </div>
            <span className="odd-chip">1.45 / 2.80</span>
          </div>
          <div className="score-odds" style={{ marginTop: 2 }}><span>ML 1.45/2.80 · spread -6.5</span><Link href="/article/ai-predictions#bestpick" style={{ color: "var(--mint-text)" }}>preview →</Link></div>
        </div>
        <div className="odds-match">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
              <TeamLogo team="smb" /> <TeamLogo team="gin" /> SMB @ Ginebra
            </div>
            <span className="odd-chip best">1.72 / 2.15</span>
          </div>
          <div className="score-odds" style={{ marginTop: 2 }}><span>PBA SF Game 4 · Sun</span><Link href="/league/pba" style={{ color: "var(--mint-text)" }}>hub →</Link></div>
        </div>
        <div className="odds-match">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
              <TeamLogo team="con" /> <TeamLogo team="ros" /> FiberXers @ Painters
            </div>
            <span className="odd-chip">1.62 / 2.35</span>
          </div>
          <div className="score-odds" style={{ marginTop: 2 }}><span>PBA SF Game 4 · Sun</span><Link href="/league/pba" style={{ color: "var(--mint-text)" }}>hub →</Link></div>
        </div>
        <p style={{ fontSize: 10, color: "var(--ink-faint)", marginTop: 10, display: "flex", justifyContent: "space-between" }}>
          <span>Decimal odds · updates every 15 min</span>
          <Link href="/odds" style={{ color: "var(--mint-text)", fontWeight: 700 }}>Full board →</Link>
        </p>
      </div>

      <SidebarAd />

      <div className="sidebar-box">
        <div className="box-h"><span>Injury Wire</span><span className="tag-pill tag-red" style={{ fontSize: 8 }}>4 TODAY</span></div>
        <div className="side-item">
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 12 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><TeamLogo team="orl" size={14} /> Paolo Banchero (ORL)</span>
            <span className="tag-pill tag-red" style={{ fontSize: 8 }}>OUT</span>
          </div>
          <div style={{ fontSize: 11, color: "var(--ink-faint)" }}>Abdominal strain · vs Suns · spread moving</div>
        </div>
        <div className="side-item">
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 12 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><TeamLogo team="orl" size={14} /> Jalen Suggs (ORL)</span>
            <span className="tag-pill tag-red" style={{ fontSize: 8 }}>OUT</span>
          </div>
          <div style={{ fontSize: 11, color: "var(--ink-faint)" }}>Hamstring · 3-4 weeks</div>
        </div>
        <div className="side-item">
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 12 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><TeamLogo team="gil" size={14} /> Kai Sotto (Gilas)</span>
            <span className="tag-pill tag-red" style={{ fontSize: 8 }}>OUT</span>
          </div>
          <div style={{ fontSize: 11, color: "var(--ink-faint)" }}>Knee · FIBA qualifying window</div>
        </div>
        <div className="side-item">
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 12 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><TeamLogo team="gil" size={14} /> Carl Tamayo (Gilas)</span>
            <span className="tag-pill tag-red" style={{ fontSize: 8 }}>OUT</span>
          </div>
          <div style={{ fontSize: 11, color: "var(--ink-faint)" }}>Ankle · FIBA qualifying window</div>
        </div>
      </div>

      <div className="sidebar-box">
        <div className="box-h"><span>Community Pick</span><span style={{ fontSize: 10, color: "var(--ink-faint)" }}>1,280 VOTES</span></div>
        <p style={{ fontSize: 12, margin: "0 0 10px", color: "var(--ink-muted)" }}>Who covers the 1-point spread: Suns or Magic?</p>
        <button type="button" style={{ width: "100%", padding: "7px 10px", border: "1px solid var(--border)", borderRadius: 6, fontSize: 12, marginBottom: 6, background: poll === "PHX" ? "var(--mint-light)" : "var(--surface)", fontWeight: 700, cursor: "pointer", borderColor: poll === "PHX" ? "var(--mint)" : "var(--border)" }} onClick={() => setPoll("PHX")}>
          PHX −1 (1.90) — {poll ? "57%" : "tap to vote"}
        </button>
        <button type="button" style={{ width: "100%", padding: "7px 10px", border: "1px solid var(--border)", borderRadius: 6, fontSize: 12, background: poll === "ORL" ? "var(--mint-light)" : "var(--surface)", fontWeight: 700, cursor: "pointer", borderColor: poll === "ORL" ? "var(--mint)" : "var(--border)" }} onClick={() => setPoll("ORL")}>
          ORL +1 (1.96) — {poll ? "43%" : "tap to vote"}
        </button>
      </div>

      <div className="sidebar-box" style={{ borderColor: "var(--mint)", background: "var(--mint-light)" }}>
        <div className="box-h mint"><span>SPORTY DAILY</span></div>
        <p style={{ fontSize: 12, color: "var(--ink-muted)", margin: "0 0 12px" }}>Top 5 stories + betting edges every morning at 7AM PHT. Viber & email. Free.</p>
        <form className="funnel-form" onSubmit={subscribed} style={{ maxWidth: "100%" }}>
          <input className="funnel-input" placeholder="you@email.com" type="email" required />
          <button className="btn-ink btn-mint" type="submit" style={{ padding: "8px 12px", fontSize: 11 }}>GET</button>
        </form>
        {subOk && <p style={{ fontSize: 11, color: "var(--mint-text)", marginTop: 8 }}>✓ You're in! Check your inbox for the Viber invite.</p>}
        <div style={{ fontSize: 10, color: "var(--ink-faint)", marginTop: 8 }}>18,400+ Pinoy fans · <Link href="/newsletter" style={{ color: "var(--mint-text)", fontWeight: 700 }}>learn more →</Link></div>
      </div>
    </aside>
  )
}
