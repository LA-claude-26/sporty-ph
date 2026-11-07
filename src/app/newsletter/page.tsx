"use client"

import { useState } from "react"

export default function NewsletterPage() {
  const [ok, setOk] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setOk(true)
  }

  return (
    <div className="page-shell" style={{ marginTop: 20 }}>
      <div className="nl-hero" id="join">
        <div className="hub-tag">FREE DAILY EMAIL · 7AM PHT · 90-SECOND READ</div>
        <h1>
          The sports email built for Filipinos who want the story <span>and the odds</span>
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-dim)", maxWidth: 680, margin: "12px auto 22px" }}>
          Every morning: the top 5 NBA + PBA stories, injury flags before tip-off, and decimal-odds betting edges from PAGCOR-licensed books. In your inbox and Viber before your commute.
        </p>
        <form className="sub-form" style={{ maxWidth: 440, margin: "0 auto" }} onSubmit={submit}>
          <input className="sub-input" placeholder="your@email.com" type="email" required />
          <button className="btn btn-accent" style={{ padding: "10px 18px" }} type="submit">
            SUBSCRIBE FREE
          </button>
        </form>
        {ok && (
          <p style={{ color: "var(--mint)", marginTop: 12, fontSize: 13 }}>
            ✓ Check your inbox — we just sent the confirmation and your Viber community invite.
          </p>
        )}
        <div className="sub-fine" style={{ marginTop: 10 }}>
          18,400+ subscribers · No spam · Unsubscribe in one click · Viber community invite included
        </div>
      </div>

      <div className="perks-grid">
        <div className="perk">
          <div className="perk-num">01</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, marginBottom: 6 }}>Top 5 stories, 90 seconds each</h3>
          <p style={{ fontSize: 13, color: "var(--text-dim)" }}>
            NBA, PBA, Gilas, UAAP, PVL — tightly edited short stories with the Philippine angle always first.
          </p>
        </div>
        <div className="perk">
          <div className="perk-num">02</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, marginBottom: 6 }}>Decimal-odds betting edges</h3>
          <p style={{ fontSize: 13, color: "var(--text-dim)" }}>
            OKBet lines, line-movement alerts, ATS trends, and our featured AI pick — in the format Philippine bettors actually use.
          </p>
        </div>
        <div className="perk">
          <div className="perk-num">03</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, marginBottom: 6 }}>Viber community</h3>
          <p style={{ fontSize: 13, color: "var(--text-dim)" }}>
            Join the daily discussion channel — the #1 platform Filipino fandom already lives on. Included free.
          </p>
        </div>
      </div>

      <div className="section-head"><span className="section-title">CHOOSE YOUR ACCESS</span></div>
      <div className="pricing-grid">
        <div className="pricing-card featured">
          <span className="hub-tag">MOST POPULAR</span>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, margin: "8px 0 2px" }}>CLUTCH DAILY</h3>
          <p style={{ fontSize: 13, color: "var(--text-dim)" }}>The morning email and Viber broadcast</p>
          <div className="price">₱0 <span>forever</span></div>
          <ul className="check-list">
            <li>5 curated short stories every morning</li>
            <li>Decimal odds + betting edges</li>
            <li>Injury flags before tip-off</li>
            <li>Viber community access</li>
          </ul>
          <a className="btn btn-accent" style={{ width: "100%", justifyContent: "center", padding: 12 }} href="#join">
            START FREE →
          </a>
        </div>
        <div className="pricing-card">
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, margin: "8px 0 2px" }}>
            CLUTCH VIP <span style={{ fontSize: 12, color: "var(--orange)" }}>COMING SOON</span>
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-dim)" }}>For serious bettors</p>
          <div className="price">₱499 <span>/month</span></div>
          <ul className="check-list">
            <li>Everything in free</li>
            <li>Model-based spread &amp; total projections</li>
            <li>Player prop projections</li>
            <li>Gilas insider notes &amp; injury exclusives</li>
            <li>VIP-only Telegram channel</li>
          </ul>
          <a className="btn btn-ghost" style={{ width: "100%", justifyContent: "center", padding: 12 }} href="#join">
            JOIN THE WAITLIST →
          </a>
        </div>
      </div>

      <div className="section-head"><span className="section-title">WHY A SPORTS NEWSLETTER?</span></div>
      <p style={{ fontSize: 14, color: "var(--text-dim)", maxWidth: 760 }}>
        Sports newsletters are the highest-retention media format on the internet: Beehiiv's 2026 data shows sports newsletters convert free-to-paid at <strong style={{ color: "var(--text)" }}>1.93% — more than 3× the platform median</strong> — with ~12.9 months of average subscriber lifespan. That is why this site is built newsletter-first: free subscribers are the asset, betting affiliates and sponsorships are the monetization.
      </p>

      <form className="sub-form" style={{ margin: "34px auto 0", maxWidth: 520 }} onSubmit={submit}>
        <input className="sub-input" placeholder="your@email.com" type="email" required />
        <button className="btn btn-accent" type="submit">SUBSCRIBE FREE</button>
      </form>
    </div>
  )
}
