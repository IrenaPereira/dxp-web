import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog / work-highlight posts. Add a new post by dropping a Markdown file
// into src/content/blog/ with the frontmatter fields below.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default("Irena Pereira"),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
