import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageTitle } from "@/components/PageShell";
import { ArticleTile } from "@/components/ArticleCard";
import { getArticles, getCategories } from "@/content/articles";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore — The Unfinished Thought" },
      {
        name: "description",
        content:
          "Browse The Unfinished Thought by subject: ideas, society, technology, culture, psychology and more.",
      },
      { property: "og:title", content: "Explore — The Unfinished Thought" },
      { property: "og:description", content: "Browse the publication by subject." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/explore" },
    ],
    links: [{ rel: "canonical", href: "/explore" }],
  }),
  component: ExplorePage,
});

function ExplorePage() {
  const categories = getCategories();
  const all = getArticles();

  return (
    <PageShell>
      <PageTitle
        eyebrow="Categories"
        title="Explore"
        lede="The publication has no fixed niche. Categories appear as the writing does."
      />

      <div className="mx-auto max-w-[92rem] px-5 pb-28 sm:px-8">
        {categories.map((c) => (
          <section
            key={c.name}
            id={c.name.toLowerCase()}
            className="scroll-mt-28 border-t border-border py-14"
          >
            <div className="flex items-baseline gap-4">
              <h2 className="font-display text-3xl text-espresso sm:text-4xl">{c.name}</h2>
              <span className="font-ui text-xs tracking-[0.2em] text-gold-deep">
                {c.count} {c.count === 1 ? "essay" : "essays"}
              </span>
            </div>
            <div className="mt-9 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {all
                .filter((a) => a.category === c.name)
                .map((a) => (
                  <ArticleTile key={a.slug} article={a} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
