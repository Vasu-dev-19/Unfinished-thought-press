import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import heroImage from "@/assets/hero-library.jpg";

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
// Ease-out cubic keeps the shrink from feeling like a linear CSS scale.
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export function Hero() {
  const [p, setP] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const span = window.innerHeight * 0.6;
        setP(reduced ? (window.scrollY > span ? 1 : 0) : ease(clamp(window.scrollY / span)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-espresso"
      aria-label="The Unfinished Thought"
    >
      <img
        src={heroImage}
        alt="Late afternoon light across the desk of an old reading room"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transform: `scale(${lerp(1.04, 1.12, p)})`, opacity: lerp(1, 0.55, p) }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--espresso) 62%, transparent) 0%, color-mix(in oklab, var(--espresso) 40%, transparent) 45%, color-mix(in oklab, var(--espresso) 85%, transparent) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-1 flex-col px-5 pb-16 pt-8 sm:px-8 sm:pt-10">
        <div className="flex items-start justify-between">
          <p
            className="eyebrow text-ivory-deep/80"
            style={{ opacity: 1 - p }}
          >
            Independent Publication
          </p>
          <Logo
            className="text-ivory"
            style={{ width: `${lerp(88, 34, p)}px`, height: `${lerp(88, 34, p)}px` }}
          />
        </div>

        <div className="mt-auto max-w-5xl">
          <h1
            className="font-display font-normal text-ivory-light"
            style={{
              fontSize: `clamp(${lerp(2.9, 1.6, p)}rem, ${lerp(9, 3.4, p)}vw, ${lerp(8.5, 2.6, p)}rem)`,
              lineHeight: 0.95,
              letterSpacing: `${lerp(-0.02, 0.01, p)}em`,
              transform: `translateY(${lerp(0, -8, p)}px)`,
            }}
          >
            The Unfinished Thought
          </h1>

          <div
            style={{
              opacity: clamp(1 - p * 1.8),
              transform: `translateY(${p * 18}px)`,
              maxHeight: `${lerp(140, 0, clamp(p * 1.5))}px`,
              overflow: "hidden",
            }}
          >
            <p className="mt-7 max-w-xl font-body text-lg italic leading-relaxed text-ivory-soft/90 sm:text-xl">
              Thoughts that don&rsquo;t end at the obvious.
            </p>
            <p className="eyebrow mt-8 text-gold-light">Scroll to begin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
