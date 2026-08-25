interface LogoProps {
  className?: string;
  title?: string;
}

/**
 * The mark: a custom "U" drawn as an open loop — a stroke that begins,
 * turns, and continues past the frame instead of closing. A single
 * champagne dot marks where the thought stops rather than ends.
 */
export function Logo({ className, title = "The Unfinished Thought" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M16 12v25c0 8.8 7.2 15 16 15 8.8 0 16-6.2 16-15V12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path
        d="M48 12v25"
        stroke="var(--gold)"
        strokeWidth="3"
        strokeLinecap="square"
        opacity="0"
      />
      <path
        d="M48 37c0 6-2.6 10.6-6.8 13.2"
        stroke="var(--gold)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
      <circle cx="32" cy="57" r="2" fill="var(--gold)" />
    </svg>
  );
}
