import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const ProjectPhotos = defineCollection({
  loader: glob({
    pattern: "**/**",
    base: "../../assets/project-photos",
  }),
  schema: z.object({}),
});

export const collections = { ProjectPhotos };
