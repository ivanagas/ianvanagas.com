import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const post = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/posts" }),
    schema: z.object({
      title: z.string(),
      date: z.date(),
      image: z.string().optional(),
      tags: z.array(z.string())
    })
});

const book = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    readDate: z.date(),
    tags: z.array(z.string())
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = { post, book };
