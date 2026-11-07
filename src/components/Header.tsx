"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAMES: Record<string, string> = {
  "SPORTY": "S",
  BALLSHOT: "B",
  "BUZZER PH": "B",
  "FASTBREAK PH": "F",
  "FULLCOURT PH": "F",
  HOOPBEAT: "H",
  "TEMPO PH": "T",
  "OT NEWS": "O",
}

const PILLS = [
  { href: "/", label: "ALL" },
  { href: "/article/ai-predictions", label: "NBA" },
  { href: "/league/pba", label: "PBA" },
  { href: "/#gilas", label: "GILAS" },
  { href: "/#uaap", label: "UAAP/NCAA" },
  { href: "/#pvl", label: "PVL" },
  { href: "/odds", label: "BETTING" },
  { href: "/newsletter", label: "NEWSLETTER", mint: true },
]

export function Header() {
  const [name, setName] = useState("SPORTY")
  const pathname = usePathname()

  const toggleTheme = () => {
    const h = document.documentElement
    h.dataset.theme = h.dataset.theme === "light" ? "dark" : "light"
  }

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="logo">
          <Link href="/" className="logo-mark" aria-label="SPORTY PH home">
            {NAMES[name] || name[0]}
          </Link>
          <div>
            <div className="logo-name">{name}</div>
            <div className="logo-tag">Sports · Trending · Odds</div>
          </div>
          <select
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="logo-dropdown"
            title="Preview alternate brand names"
            style={{
              background: "none",
              color: "var(--text-dim)",
              fontSize: 11,
              padding: "3px 6px",
              border: "1px solid var(--border)",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            {Object.keys(NAMES).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <nav className="nav-pills" aria-label="League navigation">
          {PILLS.map((p) => {
            const active = pathname === p.href
            return (
              <Link
                key={p.href}
                href={p.href}
                className={`pill ${active ? "active" : ""}`}
                style={p.mint ? { color: "var(--mint)" } : undefined}
              >
                {p.label}
              </Link>
            )
          })}
        </nav>
        <div className="top-actions">
          <button className="btn btn-ghost" id="themeToggle" onClick={toggleTheme} aria-label="Toggle theme">
            ◐
          </button>
          <Link className="btn btn-accent" href="/newsletter">
            SUBSCRIBE
          </Link>
        </div>
      </div>
    </header>
  )
}
