import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageTitle } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Unfinished Thought" },
      {
        name: "description",
        content:
          "Why The Unfinished Thought exists: an independent publication for the second honest sentence, not the first.",
      },
      { property: "og:title", content: "About — The Unfinished Thought" },
      { property: "og:description", content: "Why this publication exists." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageTitle eyebrow="The Publication" title="About" />
      <div className="mx-auto max-w-[46rem] px-5 pb-28 sm:px-8">
        <div className="prose-editorial">
          <p>
            The Unfinished Thought is an independent editorial publication. It has no fixed subject
            and no ambition to become one. Essays here move between technology, society, culture,
            psychology, education, money, the internet, and the unremarkable observations that stop
            being unremarkable when you sit with them.
          </p>
          <blockquote>Thoughts that don&rsquo;t end at the obvious.</blockquote>
          <h2>The editorial standard</h2>
          <p>
            Every piece is written to be worth the reader&rsquo;s time twice: once while reading,
            and again a week later when a line resurfaces unprompted. No manufactured controversy,
            no invented statistics, no headline the article cannot honour.
          </p>
          <h2>How it is published</h2>
          <p>
            Writing appears when it is finished, not on a schedule. Categories emerge from the work
            rather than being decided in advance.
          </p>
          <p>
            The author writes anonymously — on purpose.{" "}
            <Link to="/author" className="text-gold-deep link-underline">
              More on that here.
            </Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
