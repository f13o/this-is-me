import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    langRef: z.string(),
    summary: z.string(),
    thumbnail: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const cvExperience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cv-experience" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    order: z.number(),
  }),
});

const cvPublications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cv-publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(["journal", "conference"]),
    link: z.string().optional(),
  }),
});

const cvEducation = defineCollection({
  loader: file("src/data/cv-education.json"),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    year: z.number(),
    thesis: z.string().optional(),
    thesisLink: z.string().optional(),
  }),
});

const cvTheses = defineCollection({
  loader: file("src/data/cv-theses.json"),
  schema: z.object({
    title: z.string(),
    student: z.string(),
    year: z.number(),
    link: z.string().optional(),
  }),
});

const cvMedia = defineCollection({
  loader: file("src/data/cv-media.json"),
  schema: z.object({
    title: z.string(),
    source: z.string(),
    year: z.number(),
    spotifyEmbedUrl: z.string(),
  }),
});

export const collections = {
  projects,
  cvExperience,
  cvPublications,
  cvEducation,
  cvTheses,
  cvMedia,
};
