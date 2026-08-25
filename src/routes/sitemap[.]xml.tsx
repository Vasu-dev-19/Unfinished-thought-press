import { createFileRoute } from "@tanstack/react-router";
import { getArticles } from "@/content/articles";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const staticPaths = ["/", "/latest", "/explore", "/about", "/author"];
        const urls = [
          ...staticPaths.map((p) => ({ loc: `${origin}${p}`, lastmod: undefined as string | undefined })),
          ...getArticles().map((a) => ({
            loc: `${origin}/articles/${a.slug}`,
            lastmod: a.updatedAt ?? a.publishedAt,
          })),
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
