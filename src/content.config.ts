import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─── Team ─────────────────────────────────────────────────────────────────────
const teamCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    position: z.enum(['PI', 'Postdoc', 'PhD Student', 'Master Student', 'Research Engineer', 'Visiting Researcher', 'Alumni']),
    photo: z.string().optional(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    orcid: z.string().optional(),
    googleScholar: z.string().url().optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    twitter: z.string().optional(),
    cv: z.string().optional(),
    researchInterests: z.array(z.string()),
    joinedYear: z.number(),
    order: z.number().default(99),
    awards: z.array(z.object({ year: z.number(), title: z.string(), org: z.string() })).optional(),
    grants: z.array(z.object({ years: z.string(), title: z.string(), funder: z.string(), amount: z.string().optional() })).optional(),
    invitedTalks: z.array(z.object({ year: z.number(), title: z.string(), venue: z.string() })).optional(),
    mediaAppearances: z.array(z.object({ date: z.string(), outlet: z.string(), title: z.string(), url: z.string().url().optional() })).optional(),
  }),
});

// ─── Publications ────────────────────────────────────────────────────────────
const publicationsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    venueShort: z.string().optional(),
    type: z.enum(['journal', 'conference', 'preprint', 'book-chapter', 'thesis', 'workshop']),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    pdf: z.string().optional(),
    code: z.string().url().optional(),
    abstract: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    award: z.string().optional(),
    image: z.string().optional(),
  }),
});

// ─── News ─────────────────────────────────────────────────────────────────────
const newsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    category: z.enum(['Award', 'Publication', 'Grant', 'Event', 'Hiring', 'Media', 'General']),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
  }),
});

// ─── Projects ────────────────────────────────────────────────────────────────
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    status: z.enum(['active', 'completed', 'planned']),
    startYear: z.number(),
    endYear: z.number().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    funders: z.array(z.string()).default([]),
    members: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = {
  team: teamCollection,
  publications: publicationsCollection,
  news: newsCollection,
  projects: projectsCollection,
};
