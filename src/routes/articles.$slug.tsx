import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Prose } from "@/components/Prose";
import { ArticleTile } from "@/components/ArticleCard";
import { formatDate, getArticle, getArticles } from "@/content/articles";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable — The Unfinished Thought" }, { name: "robots", content: "noindex" }] };
    }
    const a = loaderData.article;
    const title = a.seoTitle ?? `${a.title} — The Unfinished Thought`;
    const description = a.seoDescription ?? a.excerpt.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: a.title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/articles/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/articles/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description,
            datePublished: a.publishedAt,
            dateModified: a.updatedAt ?? a.publishedAt,
            articleSection: a.category,
            keywords: a.tags.join(", "),
            author: { "@type": "Person", name: "Anonymous" },
            publisher: { "@type": "Organization", name: "The Unfinished Thought" },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const all = getArticles();
  const index = all.findIndex((a) => a.slug === article.slug);
  const previous = all[index + 1];
  const next = all[index - 1];
  const related = all
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .concat(all.filter((a) => a.slug !== article.slug && a.category !== article.category))
    .slice(0, 3);

  return (
    <PageShell>
      <article>
        <header className="mx-auto max-w-[46rem] px-5 pb-12 pt-20 sm:px-8">
          <p className="eyebrow text-gold-deep">{article.category}</p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.02] text-espresso">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mt-6 font-body text-xl italic leading-relaxed text-espresso-mid">
              {article.subtitle}
            </p>
          )}
          <p className="mt-8 font-ui text-xs tracking-[0.16em] text-espresso-light">
            {formatDate(article.publishedAt)} · {article.readingTime} min read
          </p>
        </header>

        <div className="mx-auto max-w-[46rem] px-5 sm:px-8">
          <div className="border-t border-border pt-12">
            <p className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] leading-[1.35] text-espresso">
              {article.excerpt}
            </p>
          </div>
          <div className="mt-12">
            <Prose body={article.body} />
          </div>
        </div>

        <footer className="mx-auto max-w-[46rem] px-5 pb-8 pt-16 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-8">
            <Link to="/author" className="eyebrow text-gold-deep link-underline">
              The Author
            </Link>
            <ShareLinks title={article.title} slug={article.slug} />
            <Link to="/latest" className="eyebrow link-underline text-espresso-mid">
              Back to latest
            </Link>
          </div>

          <nav className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-2" aria-label="Article">
            {previous ? (
              <Link to="/articles/$slug" params={{ slug: previous.slug }} className="group">
                <p className="eyebrow text-espresso-light">Previous</p>
                <p className="mt-2 font-display text-xl text-espresso group-hover:text-gold-deep">
                  {previous.title}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to="/articles/$slug"
                params={{ slug: next.slug }}
                className="group sm:text-right"
              >
                <p className="eyebrow text-espresso-light">Next</p>
                <p className="mt-2 font-display text-xl text-espresso group-hover:text-gold-deep">
                  {next.title}
                </p>
              </Link>
            )}
          </nav>
        </footer>
      </article>

      <section className="bg-ivory-light" aria-labelledby="related">
        <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8">
          <h2 id="related" className="eyebrow rule-gold text-espresso-light">
            Continue reading
          </h2>
          <div className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-3">
            {related.map((a) => (
              <ArticleTile key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ShareLinks({ title, slug }: { title: string; slug: string }) {
  const share = async () => {
    const url = `${window.location.origin}/articles/${slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        /* dismissed */
      }
    }
    await navigator.clipboard.writeText(url);
  };

  return (
    <button type="button" onClick={share} className="eyebrow text-espresso-mid hover:text-gold-deep">
      Share
    </button>
  );
}
