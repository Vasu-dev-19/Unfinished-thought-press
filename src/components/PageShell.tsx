import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">{children}</main>
      <SiteFooter />
    </>
  );
}

export function PageTitle({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="mx-auto max-w-[92rem] px-5 pb-14 pt-20 sm:px-8">
      <p className="eyebrow text-gold-deep">{eyebrow}</p>
      <h1 className="mt-4 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] text-espresso">
        {title}
      </h1>
      {lede && (
        <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-espresso-mid">{lede}</p>
      )}
    </header>
  );
}
