"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const p = usePathname()
  return (
    <header className="site-header">
      <div className="header-top shell">
        <span>PHILIPPINES EDITION · TODAY 09:30 PHT</span>
        <div style={{ display: "flex", gap: 14 }}>
          <span>Decimal odds by OKBet (PAGCOR licensed)</span>
          <Link href="/odds" style={{ color: "var(--mint-text)", fontWeight: 700 }}>Live Odds Board →</Link>
        </div>
      </div>
      <div className="header-main shell">
        <Link href="/" className="brand" aria-label="Sporty home">
          <span className="brand-mark">S</span>
          <span>SPORTY</span>
          <span className="tagline">· Sports trending short stories</span>
        </Link>
        <nav className="nav">
          <Link href="/" className={p === "/" ? "active" : ""}>Home</Link>
          <Link href="/article/ai-predictions" className={p.startsWith("/article/ai") ? "active" : ""}>AI Picks</Link>
          <Link href="/league/pba" className={p === "/league/pba" ? "active" : ""}>PBA</Link>
          <Link href="/odds" className={p === "/odds" ? "active" : ""}>Odds</Link>
          <Link href="/newsletter" className={p === "/newsletter" ? "active" : ""}>Newsletter</Link>
        </nav>
        <div className="header-actions">
          <Link href="/newsletter" className="btn-ink btn-mint" style={{ padding: "8px 13px", fontSize: 11 }}>Get Sporty Daily</Link>
        </div>
      </div>
    </header>
  )
}
