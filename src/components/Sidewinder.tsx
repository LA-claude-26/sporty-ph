"use client"

import { useState } from "react"
import Link from "next/link"
import { TeamLogo } from "./TeamLogo"
import { SidebarAd } from "./Ads"

export function Sidewinder({ variant = "full" }: { variant?: "full" | "article" }) {
  const [subOk, setSubOk] = useState(false)
  const [poll, setPoll] = useState<string | null>(null)

  const subscribed = (e: React.FormEvent) => {
    e.preventDefault()
    setSubOk(true)
  }

  return (
    <aside className="col-right">
      <div className="widget">
        <div className="widget-head">
          <span className="widget-title">LIVE ODDS BOARD</span>
          <span className="src-badge">OKBET PH</span>
        </div>
        <div className="odd-row">
          <div>
            <div className="odd-game">
              <TeamLogo team="phx" />
              <TeamLogo team="orl" /> PHX vs ORL
            </div>
            <div className="odd-nums">
              <span>ML 1.90 / 1.96</span>
              <span>-1.0</span>
            </div>
          </div>
          <Link className="odd-btn" href="/article/suns-vs-magic">BET</Link>
        </div>
        <div className="odd-row">
          <div>
            <div className="odd-game">
              <TeamLogo team="bos" />
              <TeamLogo team="phi" /> BOS vs PHI
            </div>
            <div className="odd-nums">
              <span>ML 1.45 / 2.80</span>
              <span>-6.5</span>
            </div>
          </div>
          <Link className="odd-btn" href="/article/ai-predictions#bestpick">BET</Link>
        </div>
        <div className="odd-row">
          <div>
            <div className="odd-game">
              <TeamLogo team="lal" />
              <TeamLogo team="den" /> LAL vs DEN
            </div>
            <div className="odd-nums">
              <span>ML 1.83 / 2.02</span>
              <span>-1.5</span>
            </div>
          </div>
          <Link className="odd-btn" href="/odds">BET</Link>
        </div>
        <div className="odd-row">
          <div>
            <div className="odd-game">
              <TeamLogo team="smb" />
              <TeamLogo team="gin" /> SMB vs GIN (PBA)
            </div>
            <div className="odd-nums">
              <span>ML 1.72 / 2.15</span>
              <span>-2.0</span>
            </div>
          </div>
          <Link className="odd-btn" href="/league/pba">BET</Link>
        </div>
        <p style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 10 }}>
          Lines update every 15 min · <Link href="/odds" style={{ color: "var(--mint)" }}>Full odds board →</Link>
        </p>
      </div>

      <SidebarAd />

      <div className="widget">
        <div className="widget-head">
          <span className="widget-title">INJURY WIRE</span>
          <span style={{ fontSize: 10, color: "var(--text-muted)" }}>TODAY</span>
        </div>
        <div className="injury-row">
          <div className="injury-player">
            <span className="injury-name">
              <TeamLogo team="orl" /> Paolo Banchero (ORL)
            </span>
            <span className="injury-status status-out">OUT</span>
          </div>
          <div className="injury-sub">Abdominal strain · vs Suns</div>
        </div>
        <div className="injury-row">
          <div className="injury-player">
            <span className="injury-name">
              <TeamLogo team="orl" /> Jalen Suggs (ORL)
            </span>
            <span className="injury-status status-out">OUT</span>
          </div>
          <div className="injury-sub">Hamstring · vs Suns</div>
        </div>
        <div className="injury-row">
          <div className="injury-player">
            <span className="injury-name">
              <TeamLogo team="gil" /> Kai Sotto (Gilas)
            </span>
            <span className="injury-status status-out">OUT</span>
          </div>
          <div className="injury-sub">Knee · FIBA window</div>
        </div>
        <div className="injury-row">
          <div className="injury-player">
            <span className="injury-name">
              <TeamLogo team="gil" /> Carl Tamayo (Gilas)
            </span>
            <span className="injury-status status-out">OUT</span>
          </div>
          <div className="injury-sub">Ankle · FIBA window</div>
        </div>
      </div>

      <div className="widget">
        <div className="widget-head">
          <span className="widget-title">COMMUNITY PICK</span>
          <span style={{ fontSize: 10, color: "var(--text-muted)" }}>1,280 VOTES</span>
        </div>
        <p style={{ fontSize: 12, marginBottom: 10 }}>Who covers the 1-point spread in Suns–Magic?</p>
        <button
          className="btn btn-ghost"
          style={{ width: "100%", marginBottom: 8, justifyContent: "center" }}
          onClick={() => setPoll("PHX")}
        >
          PHX (1.90) — {poll ? "57%" : "tap to vote"}
        </button>
        <button
          className="btn btn-ghost"
          style={{ width: "100%", justifyContent: "center" }}
          onClick={() => setPoll("ORL")}
        >
          ORL (1.96) — {poll ? "43%" : "tap to vote"}
        </button>
      </div>

      <div className="widget sub-widget">
        <div className="sub-title">CLUTCH DAILY</div>
        <div className="sub-sub">Top 5 stories + betting edges every morning 7AM PHT. Viber & email. Free.</div>
        <form className="sub-form" onSubmit={subscribed}>
          <input className="sub-input" placeholder="you@email.com" type="email" required />
          <button className="btn btn-accent" type="submit">GET</button>
        </form>
        {subOk && (
          <p style={{ fontSize: 11, color: "var(--mint)", marginTop: 8 }}>
            ✓ You're in! Check your inbox for the Viber invite.
          </p>
        )}
        <div className="sub-fine">
          18,400+ Pinoy fans subscribed ·{" "}
          <Link href="/newsletter" style={{ color: "var(--mint)" }}>Learn more →</Link>
        </div>
      </div>

      <div className="widget">
        <div className="widget-head">
          <span className="widget-title">TRENDING NOW</span>
        </div>
        <div className="trend-item" style={{ marginBottom: 8 }}>
          <span className="trend-num">01</span>
          <div>
            <div className="trend-title">
              <Link href="/article/suns-vs-magic">Suns vs Magic preview &amp; best bets</Link>
            </div>
            <div className="trend-meta">NBA · 4.8K reads</div>
          </div>
        </div>
        <div className="trend-item" style={{ marginBottom: 8 }}>
          <span className="trend-num">02</span>
          <div>
            <div className="trend-title">
              <Link href="/league/pba">SMB vs Ginebra Game 4 line movement</Link>
            </div>
            <div className="trend-meta">PBA · 7.1K reads</div>
          </div>
        </div>
        <div className="trend-item">
          <span className="trend-num">03</span>
          <div>
            <div className="trend-title">Kai Sotto out of FIBA window</div>
            <div className="trend-meta">GILAS · 9.4K reads</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
