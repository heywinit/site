import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      image: z.string().optional()
    })
})

const about = defineCollection({
  // Load Markdown files in the `src/content/about/` directory.
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: z.object({})
})

const projects = defineCollection({
  // Load Markdown files in the `src/content/projects/` directory.
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      url: z.string().url().optional(),
      github: z.string().url().optional(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().default(false),
      order: z.number().optional()
    })
})

const work = defineCollection({
  // Load Markdown files in the `src/content/work/` directory.
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      url: z.string().url().optional(),
      tags: z.array(z.string()).optional()
    })
})

export const collections = { posts, about, projects, work }
