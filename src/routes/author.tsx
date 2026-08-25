import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/author")({
  head: () => ({
    meta: [
      { title: "The Author — The Unfinished Thought" },
      {
        name: "description",
        content:
          "The Unfinished Thought is written anonymously. A note on the writer behind the publication.",
      },
      { property: "og:title", content: "The Author — The Unfinished Thought" },
      { property: "og:description", content: "Written anonymously, on purpose." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/author" },
    ],
    links: [{ rel: "canonical", href: "/author" }],
  }),
  component: AuthorPage,
});

function AuthorPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[46rem] px-5 pb-28 pt-20 sm:px-8">
        <Logo className="h-12 w-12 text-espresso" />
        <p className="eyebrow mt-8 text-gold-deep">The Author</p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1] text-espresso">
          Written anonymously, on purpose.
        </h1>

        <div className="prose-editorial mt-12">
          <p>
            There is no photograph on this page and no name at the bottom of the essays. That is a
            deliberate editorial choice, not an oversight. Anonymity keeps attention on the argument
            and away from the person making it — and lets subjects be approached honestly rather
            than reputationally.
          </p>

          <h2>Why The Unfinished Thought exists</h2>
          <p>
            {/* PLACEHOLDER — replace with the author's own words. */}
            Placeholder: a short statement, in the author&rsquo;s own words, about why this
            publication was started and what it is trying to do.
          </p>

          <h2>Editorial philosophy</h2>
          <p>
            {/* PLACEHOLDER — replace. */}
            Placeholder: the principles the writing holds itself to — honesty over provocation,
            specificity over generality, curiosity over conclusion.
          </p>

          <h2>What the author writes about</h2>
          <p>
            {/* PLACEHOLDER — replace. */}
            Placeholder: the recurring preoccupations behind the essays, described without
            identifying detail.
          </p>

          <h2>A short anonymous biography</h2>
          <p>
            {/* PLACEHOLDER — replace when provided. */}
            Placeholder: to be added if and when the author chooses.
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Link to="/latest" className="eyebrow link-underline text-espresso">
            Read the essays instead
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
