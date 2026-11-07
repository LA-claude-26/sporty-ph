"use client"

import { useState } from "react"
import Link from "next/link"

export default function NewsletterPage() {
  const [ok, setOk] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setOk(true)
  }

  return (
    <div className="shell-read" style={{ marginTop: 20 }}>
      <section className="funnel-hero" id="join">
        <span className="tag-pill tag-green" style={{ marginBottom: 12 }}>SPORTY DAILY · FREE MORNING EMAIL</span>
        <h1>The sports email built for Filipinos who want the story and the odds</h1>
        <p>Every morning: the top 5 NBA and PBA stories, injury flags before tip-off, and decimal-odds betting edges from PAGCOR-licensed books. In your inbox and Viber before your commute.</p>
        <form className="funnel-form" onSubmit={submit}>
          <input className="funnel-input" placeholder="you@email.com" type="email" required />
          <button className="btn-ink btn-mint" type="submit" style={{ padding: "11px 20px" }}>Subscribe free</button>
        </form>
        {ok && <p style={{ color: "var(--mint-text)", marginTop: 12, fontSize: 13 }}>✓ Check your inbox — we just sent the confirmation and your Viber community invite.</p>}
        <div className="funnel-sub">18,400+ subscribers · No spam · One-click unsubscribe · Viber community included</div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, margin: "22px 0" }}>
        <div className="stat-box" style={{ textAlign: "left", padding: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "var(--mint-text)", marginBottom: 4 }}>01</div>
          <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 6 }}>Top 5 stories, 90 seconds each</div>
          <p style={{ fontSize: 12, color: "var(--ink-muted)", margin: 0 }}>NBA, PBA, Gilas, UAAP, PVL — tightly edited short stories with the Philippine angle first.</p>
        </div>
        <div className="stat-box" style={{ textAlign: "left", padding: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "var(--mint-text)", marginBottom: 4 }}>02</div>
          <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 6 }}>Decimal-odds betting edges</div>
          <p style={{ fontSize: 12, color: "var(--ink-muted)", margin: 0 }}>OKBet lines, line-movement alerts, ATS trends and our featured AI pick — in the format Philippine bettors use.</p>
        </div>
        <div className="stat-box" style={{ textAlign: "left", padding: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "var(--mint-text)", marginBottom: 4 }}>03</div>
          <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 6 }}>Viber community</div>
          <p style={{ fontSize: 12, color: "var(--ink-muted)", margin: 0 }}>Join the daily discussion channel — the platform Filipino fandom lives on. Included free.</p>
        </div>
      </div>

      <div className="guide-bar" style={{ marginTop: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-faint)" }}>CHOOSE YOUR ACCESS</span>
      </div>

      <div className="tiers">
        <div className="tier-card feat">
          <span className="tier-chip">Most popular</span>
          <div className="tier-name">SPORTY DAILY</div>
          <div className="tier-dek">The morning email and Viber broadcast</div>
          <div className="price">₱0 <small>forever</small></div>
          <ul className="tier-list">
            <li>5 curated short stories every morning</li>
            <li>Decimal odds + betting edges</li>
            <li>Injury flags before tip-off</li>
            <li>Viber community access</li>
          </ul>
          <a className="btn-ink btn-mint" href="#join" style={{ width: "100%", justifyContent: "center", padding: 11 }}>Start free</a>
        </div>
        <div className="tier-card">
          <div className="tier-name">SPORTY VIP</div>
          <div className="tier-dek">For serious bettors — coming soon</div>
          <div className="price">₱499 <small>/month</small></div>
          <ul className="tier-list">
            <li>Everything in free</li>
            <li>Model-based spread &amp; total projections</li>
            <li>Player prop projections</li>
            <li>Gilas insider notes &amp; injury exclusives</li>
            <li>VIP-only Telegram channel</li>
          </ul>
          <a className="btn-ink" href="#join" style={{ width: "100%", justifyContent: "center", padding: 11, background: "var(--surface-subtle)", color: "var(--ink)", border: "1px solid var(--border)" }}>Join the waitlist</a>
        </div>
      </div>

      <div className="quote-math">
        <strong>Why a sports newsletter?</strong> Sports newsletters convert free-to-paid at <strong>1.93% — more than 3× the platform median</strong> — with ~12.9 months average subscriber lifespan (Beehiiv 2026 data). That is why Sporty is newsletter-first: free subscribers are the asset; betting affiliates, sponsorships and VIP memberships are the monetisation.
      </div>

      <form className="funnel-form" onSubmit={submit} style={{ margin: "30px auto 0" }}>
        <input className="funnel-input" placeholder="you@email.com" type="email" required />
        <button className="btn-ink btn-mint" type="submit" style={{ padding: "11px 20px" }}>Subscribe free</button>
      </form>
    </div>
  )
}
