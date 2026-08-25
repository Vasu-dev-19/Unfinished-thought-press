/**
 * DEMO CONTENT — replace with real articles.
 *
 * All placeholder entries are marked `demo: true` so they can be filtered out
 * or deleted wholesale once real articles exist. The shape below is the single
 * article data model used across the site; a future CMS/API layer only needs to
 * return objects of this shape.
 */

export interface Article {
  title: string;
  slug: string;
  subtitle?: string;
  excerpt: string;
  /** Plain paragraphs; lines starting with "## " are headings, "> " are pull quotes. */
  body: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  heroImage?: string;
  readingTime: number;
  seoTitle?: string;
  seoDescription?: string;
  socialImage?: string;
  demo?: boolean;
}

export const articles: Article[] = [
  {
    title: "The Last Quiet Hour",
    slug: "the-last-quiet-hour",
    subtitle: "On the disappearance of unstructured time, and what it took with it",
    excerpt:
      "There used to be an hour in the day that belonged to no one. Not work, not rest, not entertainment — just the gap between them. Most of us cannot remember when we stopped having it, which is the strangest part: we surrendered something daily and never noticed the transaction.",
    body: `There used to be an hour in the day that belonged to no one. It sat between arriving somewhere and doing something, and it had no name, which is probably why nobody defended it.

Ask anyone over thirty when they last sat still without a screen and they will describe it as a memory rather than a habit. Ask anyone under twenty and they will describe it as a punishment.

## The economics of the gap

Attention did not disappear. It was purchased, in increments so small that no single one felt like a sale. A minute in a queue. Ninety seconds waiting for a kettle. The stretch of a walk that used to be for thinking.

> We did not lose our free time. We rented it out, at a price nobody quoted us.

What made that hour valuable was not what happened in it. Nothing happened in it. That was the point. Boredom is the raw material of thought, and we have made it nearly impossible to obtain.

## What returns when you get it back

People who reclaim the quiet hour rarely describe it as pleasant at first. They describe it as loud — a backlog of unfinished thinking arriving all at once.

Then, usually within a week, something odd happens. Ideas arrive unbidden. Problems solve themselves sideways. The mind, given nothing to consume, starts producing.

That is not a productivity tip. It is closer to a warning about what we traded.`,
    category: "Life",
    tags: ["attention", "time", "modern life"],
    author: "The Unfinished Thought",
    publishedAt: "2026-08-18",
    featured: true,
    readingTime: 7,
    seoTitle: "The Last Quiet Hour — The Unfinished Thought",
    seoDescription:
      "There used to be an hour in the day that belonged to no one. On the quiet disappearance of unstructured time.",
    demo: true,
  },
  {
    title: "Everyone Is Reading the Same Twelve Sentences",
    slug: "the-same-twelve-sentences",
    subtitle: "How a handful of phrases became the internet's shared vocabulary",
    excerpt:
      "A phrase appears. Within a week it is everywhere — in captions, in arguments, in job interviews. Nobody agrees to adopt it. Nobody remembers where it came from. Language has always spread, but never this fast, and never with so few original speakers.",
    body: `A phrase appears. Within a week it is everywhere.

The interesting question is not why people repeat things. People have always repeated things. The interesting question is why the pool of things worth repeating has become so small.

## Compression as a side effect

Platforms reward the sentence that survives being screenshotted. That is a real constraint, and constraints shape language the way riverbeds shape rivers.

> A culture with fewer sentences has fewer arguments available to it.

## The cost of a shared script

When everyone reaches for the same phrase, disagreement starts to sound like a typo. Positions harden not because people believe more strongly but because the vocabulary for nuance quietly went out of circulation.`,
    category: "Internet",
    tags: ["language", "culture", "platforms"],
    author: "The Unfinished Thought",
    publishedAt: "2026-08-11",
    readingTime: 6,
    demo: true,
  },
  {
    title: "Money Is a Story We Agreed Not to Interrupt",
    slug: "money-is-a-story",
    excerpt:
      "The strangest thing about money is not that it works. It is that it keeps working after everyone involved admits it is imaginary. We tell children it is pretend and then organise our entire adult lives around the pretending.",
    body: `The strangest thing about money is not that it works.

It is that it keeps working after everyone involved admits it is imaginary.

## Belief that survives disbelief

Most shared fictions collapse the moment they are named. This one does not. You can explain the mechanism to a room of people and they will still trade their afternoon for it tomorrow.

> Fiction that survives being explained is no longer fiction. It is infrastructure.

## Where the story frays

It frays at the edges — in currencies people stop trusting, in prices that stop tracking anything real. Those moments are usually described as economic events. They are closer to narrative failures.`,
    category: "Society",
    tags: ["economics", "belief"],
    author: "The Unfinished Thought",
    publishedAt: "2026-08-04",
    readingTime: 5,
    demo: true,
  },
  {
    title: "The Confidence of People Who Have Not Checked",
    slug: "confidence-of-people-who-have-not-checked",
    subtitle: "A small observation about certainty, and who tends to have it",
    excerpt:
      "The most certain person in any room is rarely the one who has looked closest. This is not a new observation, but the version of it playing out now has an unfamiliar shape: certainty has become a style rather than a state.",
    body: `The most certain person in any room is rarely the one who has looked closest.

## Certainty as an aesthetic

Somewhere along the way, sounding sure became a genre. It has a cadence, a sentence length, a preferred kind of pause.

> Doubt reads as weakness only in rooms where nobody is checking.

## The quiet alternative

The people worth listening to tend to leave a small opening in every claim. Not hedging — accounting. It is the difference between a wall and a door.`,
    category: "Psychology",
    tags: ["certainty", "thinking"],
    author: "The Unfinished Thought",
    publishedAt: "2026-07-28",
    readingTime: 4,
    demo: true,
  },
  {
    title: "What School Actually Teaches, Measured in Hours",
    slug: "what-school-teaches",
    excerpt:
      "Count the hours instead of the subjects and a different curriculum appears. Not history, not mathematics — waiting, permission, and the management of visible effort. Whether that is a failure depends on what you think schooling is for.",
    body: `Count the hours instead of the subjects and a different curriculum appears.

## The hidden syllabus

Waiting. Asking permission. Producing effort in a form that can be observed. These are taught daily, with more repetition than any academic subject receives.

> Nobody writes the hidden syllabus. Everyone graduates fluent in it.

## Not necessarily a failure

Institutions must coordinate large numbers of people, and coordination has costs. The question worth asking is not whether the hidden syllabus exists but whether we would still choose it if we were writing it down.`,
    category: "Education",
    tags: ["school", "institutions"],
    author: "The Unfinished Thought",
    publishedAt: "2026-07-19",
    readingTime: 6,
    demo: true,
  },
  {
    title: "Distance",
    slug: "distance",
    subtitle: "On friendships that end without an ending",
    excerpt:
      "Nobody tells you that most friendships do not end. They simply stop being updated. There is no argument to point to, no moment to grieve — only a slow drift that becomes visible long after it is finished.",
    body: `Nobody tells you that most friendships do not end.

They stop being updated.

## Endings require witnesses

A breakup has a date. A drift has none, which is why it is so difficult to mourn — grief needs a location and this one refuses to provide an address.

> The friendship did not break. It just stopped being maintained, and maintenance was the whole thing.

## The repairable kind

Some drifts are reversible with a single unremarkable message. Most people know this and send nothing, because the message would require admitting how long it has been.`,
    category: "Stories",
    tags: ["friendship", "loss"],
    author: "The Unfinished Thought",
    publishedAt: "2026-07-08",
    readingTime: 4,
    demo: true,
  },
  {
    title: "The Machines Learned to Sound Reasonable Before They Learned to Be Right",
    slug: "sound-reasonable-before-right",
    excerpt:
      "Fluency arrived first. That ordering matters more than most of the current argument acknowledges, because humans have spent their entire evolutionary history using fluency as a proxy for competence — and the proxy has just been separated from the thing it measured.",
    body: `Fluency arrived first.

## An old shortcut, newly broken

We judge reliability by how something is said. It was a reasonable heuristic for as long as saying things well required understanding them.

> The heuristic did not fail. Its assumptions were quietly removed from underneath it.

## What replaces it

Verification, which is slow, unglamorous, and unevenly distributed. The people who develop the habit early will have an advantage that is difficult to describe and easy to underestimate.`,
    category: "Technology",
    tags: ["ai", "trust"],
    author: "The Unfinished Thought",
    publishedAt: "2026-06-30",
    readingTime: 5,
    demo: true,
  },
  {
    title: "A Room Nobody Has Entered in Eleven Years",
    slug: "a-room-nobody-has-entered",
    subtitle: "Notes on the places we preserve by refusing to look at them",
    excerpt:
      "Most families have one. A drawer, a room, a folder on an old laptop. It is never locked. That is what makes it interesting: the barrier is not security, it is agreement.",
    body: `Most families have one. A drawer, a room, a folder on an old laptop.

It is never locked.

## Agreement as architecture

The strongest boundaries in a household are rarely physical. They are conventions so well observed that they feel structural.

> We build walls out of habit and then mistake them for stone.

## Opening it

People who eventually open the room almost never find what they expected. They find something smaller, and usually sadder, and almost always survivable.`,
    category: "Culture",
    tags: ["memory", "family"],
    author: "The Unfinished Thought",
    publishedAt: "2026-06-21",
    readingTime: 5,
    demo: true,
  },
];

export const getArticles = () =>
  [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const getFeatured = () => getArticles().find((a) => a.featured) ?? getArticles()[0];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const getCategories = () => {
  const counts = new Map<string, number>();
  for (const a of articles) counts.set(a.category, (counts.get(a.category) ?? 0) + 1);
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
};

export const searchArticles = (query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getArticles().filter((a) =>
    [a.title, a.subtitle ?? "", a.excerpt, a.body, a.category, a.tags.join(" ")]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
};

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
