import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageTitle } from "@/components/PageShell";
import { ArticleRow } from "@/components/ArticleCard";
import { getArticles } from "@/content/articles";

export const Route = createFileRoute("/latest")({
  head: () => ({
    meta: [
      { title: "Latest Thoughts — The Unfinished Thought" },
      {
        name: "description",
        content: "Every essay published by The Unfinished Thought, newest first.",
      },
      { property: "og:title", content: "Latest Thoughts — The Unfinished Thought" },
      { property: "og:description", content: "Every essay published, newest first." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/latest" },
    ],
    links: [{ rel: "canonical", href: "/latest" }],
  }),
  component: LatestPage,
});

function LatestPage() {
  const all = getArticles();
  return (
    <PageShell>
      <PageTitle
        eyebrow="The Archive"
        title="Latest Thoughts"
        lede="Everything published so far, in the order it arrived."
      />
      <div className="mx-auto max-w-[92rem] px-5 pb-28 sm:px-8">
        {all.map((a, i) => (
          <ArticleRow key={a.slug} article={a} index={i} />
        ))}
      </div>
    </PageShell>
  );
}
