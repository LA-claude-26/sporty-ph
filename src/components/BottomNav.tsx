import Link from "next/link"

export function BottomNav() {
  return (
    <nav className="bnav" aria-label="Mobile navigation">
      <div className="bnav-inner">
        <Link className="bnav-item" href="/">Home</Link>
        <Link className="bnav-item" href="/odds">Scores</Link>
        <Link className="bnav-item" href="/odds">Odds</Link>
        <Link className="bnav-item" href="/article/ai-predictions">AI Picks</Link>
        <Link className="bnav-item" href="/newsletter">Newsletter</Link>
      </div>
    </nav>
  )
}
