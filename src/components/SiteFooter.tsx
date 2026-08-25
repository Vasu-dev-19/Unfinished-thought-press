import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-espresso text-ivory-soft">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-10 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <Logo className="h-9 w-9 text-ivory" />
          <p className="mt-5 font-display text-2xl leading-tight text-ivory">
            The Unfinished Thought
          </p>
          <p className="mt-2 text-sm italic text-ivory-deep/80">
            Thoughts that don&rsquo;t end at the obvious.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-10 gap-y-4" aria-label="Footer">
          {[
            { to: "/latest", label: "Latest" },
            { to: "/explore", label: "Explore" },
            { to: "/about", label: "About" },
            { to: "/search", label: "Search" },
            { to: "/author", label: "The Author" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="eyebrow text-ivory-deep transition-colors hover:text-gold-light"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-espresso-mid/60">
        <p className="mx-auto max-w-[92rem] px-5 py-6 text-xs text-ivory-deep/60 sm:px-8">
          © {new Date().getFullYear()} The Unfinished Thought — written anonymously.
        </p>
      </div>
    </footer>
  );
}
