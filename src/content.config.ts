import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const calendar = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/data/calendar"}),
  schema: z.object({
    title: z.string(),
    type: z.enum(['event', 'guest', 'race']),
    date: z.coerce.date()
  })
})

export const collections = {calendar}