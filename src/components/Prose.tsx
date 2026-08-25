/**
 * Minimal renderer for the article body format:
 *   "## " → heading, "> " → pull quote, everything else → paragraph.
 * Keeps the content files plain-text and GitHub-editable.
 */
export function Prose({ body }: { body: string }) {
  const blocks = body.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="prose-editorial">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) return <h2 key={i}>{block.slice(3)}</h2>;
        if (block.startsWith("> ")) return <blockquote key={i}>{block.slice(2)}</blockquote>;
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}
