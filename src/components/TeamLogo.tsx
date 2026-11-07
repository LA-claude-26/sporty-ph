import type { ReactNode } from "react"

export type TeamCode = "phx"|"orl"|"smb"|"gin"|"bos"|"phi"|"lal"|"den"|"con"|"ros"|"up"|"adu"|"gil"|"dal"|"ind"

const logos: Record<TeamCode, ReactNode> = {
  phx: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l1.6 4.7 4.9.4-3.7 3.4 1 4.9-4.8-2.3L6.2 15.4l1-4.9L3.5 7.1l4.9-.4z"/></svg>,
  orl: <svg viewBox="0 0 24 24"><polygon fill="currentColor" points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9"/></svg>,
  smb: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="currentColor"/><path fill="#9B1D20" d="M12 5v14M5 12h14"/></svg>,
  gin: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l8 4v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7z"/></svg>,
  bos: <svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="4" fill="currentColor"/><circle cx="16" cy="8" r="4" fill="currentColor"/><circle cx="12" cy="15" r="4" fill="currentColor"/></svg>,
  phi: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 17l4-12h4L8 17z"/><polygon fill="#ED174C" points="14,17 17,9 20,9 17,17"/></svg>,
  lal: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M5 4h5v12h10v4H5z"/></svg>,
  den: <svg viewBox="0 0 24 24"><polygon fill="currentColor" points="12,4 4,20 20,20"/></svg>,
  con: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9h-4a5 5 0 1 1-5-5V3z"/></svg>,
  ros: <svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="3" d="M4 17a8 8 0 0 1 16 0"/></svg>,
  up: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 4c-3 0-5 2-5 5v3c0 3 2 5 5 5s5-2 5-5V9c0-3-2-5-5-5z"/></svg>,
  adu: <svg viewBox="0 0 24 24"><polygon fill="currentColor" points="12,3 4,21 12,17 20,21"/></svg>,
  gil: <svg viewBox="0 0 24 24"><polygon fill="#FCD116" points="12,4 14,9 19,9 15,13 17,19 12,15 7,19 9,13 5,9 10,9"/></svg>,
  dal: <svg viewBox="0 0 24 24"><path fill="currentColor" d="M0 3594"/></svg>,
  ind: <svg viewBox="0 0 24 24"><polygon fill="currentColor" points="12,2 20,20 4,20"/></svg>,
}

export function TeamLogo({ team, size = 22, className = "" }: { team: TeamCode; size?: number; className?: string }) {
  return (
    <span
      className={`tlogo tlogo-${team} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {logos[team]}
    </span>
  )
}
