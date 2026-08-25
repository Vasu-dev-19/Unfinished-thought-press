import { Link } from "@tanstack/react-router";
import type { Article } from "@/content/articles";
import { formatDate } from "@/content/articles";

export function CategoryLabel({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow text-gold-deep">{children}</span>;
}

export function Meta({ article }: { article: Article }) {
  return (
    <p className="font-ui text-xs tracking-[0.12em] text-espresso-light">
      {formatDate(article.publishedAt)} · {article.readingTime} min read
    </p>
  );
}

/** Horizontal editorial row — used for the latest archive. */
export function ArticleRow({ article, index }: { article: Article; index: number }) {
  return (
    <article className="group border-t border-border py-9">
      <Link
        to="/articles/$slug"
        params={{ slug: article.slug }}
        className="grid gap-4 md:grid-cols-[5rem_1fr_18rem] md:items-baseline md:gap-10"
      >
        <span className="font-ui text-xs tracking-[0.2em] text-espresso-light/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <CategoryLabel>{article.category}</CategoryLabel>
          <h3 className="mt-2 font-display text-[1.9rem] leading-[1.12] text-espresso transition-colors group-hover:text-gold-deep sm:text-[2.3rem]">
            {article.title}
          </h3>
          <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-espresso-mid">
            {article.excerpt.split(". ").slice(0, 2).join(". ").replace(/\.?$/, ".")}
          </p>
        </div>
        <div className="md:text-right">
          <Meta article={article} />
        </div>
      </Link>
    </article>
  );
}

/** Compact column card — used for related articles and category listings. */
export function ArticleTile({ article }: { article: Article }) {
  return (
    <article className="group">
      <Link to="/articles/$slug" params={{ slug: article.slug }} className="block">
        <CategoryLabel>{article.category}</CategoryLabel>
        <h3 className="mt-2 font-display text-2xl leading-tight text-espresso transition-colors group-hover:text-gold-deep">
          {article.title}
        </h3>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-espresso-mid">
          {article.excerpt.slice(0, 150)}…
        </p>
        <div className="mt-4">
          <Meta article={article} />
        </div>
      </Link>
    </article>
  );
}
