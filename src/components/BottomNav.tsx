import Link from "next/link"

export function BottomNav() {
  return (
    <nav className="mob-nav" aria-label="Mobile navigation">
      <Link className="mob-item" href="/">
        <svg viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V21H3z"/></svg>Home
      </Link>
      <Link className="mob-item" href="/odds">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>Scores
      </Link>
      <Link className="mob-item" href="/odds">
        <svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>Odds
      </Link>
      <Link className="mob-item" href="/article/ai-predictions">
        <svg viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>Trending
      </Link>
      <Link className="mob-item" href="/newsletter">
        <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>Inbox
      </Link>
    </nav>
  )
}
