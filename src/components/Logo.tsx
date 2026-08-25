import type { CSSProperties } from "react";

interface LogoProps {
  className?: string;
  style?: CSSProperties;
  title?: string;
}

/**
 * The mark: a custom "U" drawn as an open loop — a stroke that begins,
 * turns, and continues instead of closing. A champagne trail and a single
 * point mark where the thought stops rather than ends.
 */
export function Logo({ className, style, title = "The Unfinished Thought" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      style={style}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 12v25c0 8.8 7.2 15 16 15 8.8 0 16-6.2 16-15V12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path
        d="M48 37c0 6.4-2.8 11.2-7.4 13.8"
        stroke="var(--gold)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
      <circle cx="32" cy="57.5" r="2" fill="var(--gold)" />
    </svg>
  );
}
