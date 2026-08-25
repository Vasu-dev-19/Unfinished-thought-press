import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/latest", label: "Latest" },
  { to: "/explore", label: "Explore" },
  { to: "/about", label: "About" },
] as const;

interface SiteHeaderProps {
  /** On the homepage the header only appears once the hero has been scrolled past. */
  revealOnScroll?: boolean;
}

export function SiteHeader({ revealOnScroll = false }: SiteHeaderProps) {
  const [visible, setVisible] = useState(!revealOnScroll);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!revealOnScroll) return;
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealOnScroll]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-ivory-light/90 backdrop-blur-md transition-[opacity,transform] duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-[92rem] items-center gap-6 px-5 py-3 sm:px-8">
        <Link to="/" className="flex items-center gap-3 text-espresso" aria-label="The Unfinished Thought — home">
          <Logo className="h-7 w-7 shrink-0" />
          <span className="font-display text-[1.05rem] leading-none tracking-[0.02em] sm:text-[1.2rem]">
            The Unfinished Thought
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="eyebrow link-underline text-espresso-mid transition-colors hover:text-espresso"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-espresso" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/search"
            className="eyebrow text-espresso-light transition-colors hover:text-gold-deep"
          >
            Search
          </Link>
          <Link
            to="/author"
            className="eyebrow border-l border-border pl-8 text-gold-deep transition-colors hover:text-espresso"
          >
            The Author
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="eyebrow ml-auto text-espresso-mid md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-4 border-t border-border px-5 py-6 md:hidden"
          aria-label="Primary mobile"
        >
          {[...nav, { to: "/search", label: "Search" }, { to: "/author", label: "The Author" }].map(
            (item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="eyebrow text-espresso-mid"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
