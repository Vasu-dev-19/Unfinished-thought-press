import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageTitle } from "@/components/PageShell";
import { ArticleRow } from "@/components/ArticleCard";
import { searchArticles } from "@/content/articles";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — The Unfinished Thought" },
      { name: "description", content: "Search essays by title, excerpt, category or content." },
      { property: "og:title", content: "Search — The Unfinished Thought" },
      { property: "og:description", content: "Search the archive." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/search" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/search" }],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [query, setQuery] = useState("");
  const results = searchArticles(query);

  return (
    <PageShell>
      <PageTitle eyebrow="Archive" title="Search" />
      <div className="mx-auto max-w-[92rem] px-5 pb-28 sm:px-8">
        <label htmlFor="q" className="eyebrow text-espresso-light">
          Find a thought
        </label>
        <input
          id="q"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Attention, money, school…"
          className="mt-3 w-full max-w-xl border-b border-espresso-light/40 bg-transparent pb-3 font-display text-2xl text-espresso placeholder:text-espresso-light/50 focus:border-gold focus:outline-none"
        />

        <div className="mt-14">
          {query.trim() === "" ? (
            <p className="font-body italic text-espresso-light">
              Start typing to search titles, excerpts, categories and article text.
            </p>
          ) : results.length === 0 ? (
            <p className="font-body italic text-espresso-light">
              Nothing here yet for &ldquo;{query}&rdquo;.
            </p>
          ) : (
            <>
              <p className="eyebrow text-espresso-light">
                {results.length} {results.length === 1 ? "result" : "results"}
              </p>
              <div className="mt-6">
                {results.map((a, i) => (
                  <ArticleRow key={a.slug} article={a} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </PageShell>
  );
}
