import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleRow, CategoryLabel, Meta } from "@/components/ArticleCard";
import { getArticles, getCategories, getFeatured } from "@/content/articles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Unfinished Thought — Thoughts that don't end at the obvious" },
      {
        name: "description",
        content:
          "An independent editorial publication on technology, society, culture and the observations most writing stops just short of.",
      },
      { property: "og:title", content: "The Unfinished Thought" },
      {
        property: "og:description",
        content: "Thoughts that don't end at the obvious. An independent editorial publication.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = getFeatured();
  const latest = getArticles()
    .filter((a) => a.slug !== featured.slug)
    .slice(0, 5);
  const categories = getCategories();

  return (
    <>
      <SiteHeader revealOnScroll />
      <main>
        <Hero />

        {/* FEATURED THOUGHT */}
        <section className="bg-ivory-light" aria-labelledby="featured-heading">
          <div className="mx-auto max-w-[92rem] px-5 py-24 sm:px-8 sm:py-32">
            <p id="featured-heading" className="eyebrow rule-gold text-espresso-light">
              Featured Thought
            </p>

            <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div>
                <CategoryLabel>{featured.category}</CategoryLabel>
                <h2 className="mt-4 font-display text-[clamp(2.6rem,6vw,4.75rem)] leading-[0.98] text-espresso">
                  <Link to="/articles/$slug" params={{ slug: featured.slug }}>
                    {featured.title}
                  </Link>
                </h2>
                {featured.subtitle && (
                  <p className="mt-5 max-w-xl font-body text-lg italic text-espresso-mid">
                    {featured.subtitle}
                  </p>
                )}
              </div>

              <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-2">
                <p className="font-body text-[1.15rem] leading-[1.8] text-espresso-soft">
                  {featured.excerpt}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link
                    to="/articles/$slug"
                    params={{ slug: featured.slug }}
                    className="eyebrow border-b border-gold pb-1 text-espresso transition-colors hover:text-gold-deep"
                  >
                    Read the essay
                  </Link>
                  <Meta article={featured} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST THOUGHTS */}
        <section className="bg-ivory" aria-labelledby="latest-heading">
          <div className="mx-auto max-w-[92rem] px-5 py-24 sm:px-8">
            <div className="flex items-end justify-between gap-6">
              <h2 id="latest-heading" className="font-display text-4xl text-espresso sm:text-5xl">
                Latest Thoughts
              </h2>
              <Link to="/latest" className="eyebrow link-underline text-espresso-mid">
                All writing
              </Link>
            </div>
            <div className="mt-12">
              {latest.map((a, i) => (
                <ArticleRow key={a.slug} article={a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* EXPLORE */}
        <section className="bg-espresso text-ivory-soft" aria-labelledby="explore-heading">
          <div className="mx-auto max-w-[92rem] px-5 py-24 sm:px-8">
            <h2 id="explore-heading" className="font-display text-4xl text-ivory sm:text-5xl">
              Explore
            </h2>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
              {categories.map((c) => (
                <Link
                  key={c.name}
                  to="/explore"
                  hash={c.name.toLowerCase()}
                  className="group font-display text-3xl text-ivory-soft transition-colors hover:text-gold-light sm:text-4xl"
                >
                  {c.name}
                  <sup className="ml-2 font-ui text-xs tracking-widest text-gold">{c.count}</sup>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-ivory-light" aria-labelledby="about-heading">
          <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <h2 id="about-heading" className="eyebrow rule-gold text-espresso-light">
              About the Publication
            </h2>
            <div>
              <p className="font-display text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.25] text-espresso">
                Most writing stops at the first honest sentence. This publication is interested in
                the second one.
              </p>
              <p className="mt-8 max-w-2xl font-body text-[1.08rem] leading-[1.85] text-espresso-mid">
                The Unfinished Thought has no fixed subject. It follows curiosity — through
                technology, society, culture, psychology, money, the internet, and the ordinary
                observations that turn strange when you look at them twice. What holds it together
                is the voice, not the topic.
              </p>
              <div className="mt-10 flex flex-wrap gap-8">
                <Link to="/about" className="eyebrow link-underline text-espresso">
                  Read more
                </Link>
                <Link to="/author" className="eyebrow text-gold-deep link-underline">
                  The Author
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
