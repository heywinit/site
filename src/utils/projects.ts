import { getCollection, type CollectionEntry } from 'astro:content'

/**
 * Get all projects, filtering out projects whose filenames start with _
 */
export async function getFilteredProjects() {
  const projects = await getCollection('projects')
  return projects.filter((project: CollectionEntry<'projects'>) => !project.id.startsWith('_'))
}

/**
 * Get only featured projects, sorted by order field (lower numbers first)
 */
export async function getFeaturedProjects() {
  const projects = await getFilteredProjects()
  const featured = projects.filter((project: CollectionEntry<'projects'>) =>
    Boolean(project.data.featured)
  )
  return featured.sort((a: CollectionEntry<'projects'>, b: CollectionEntry<'projects'>) => {
    const orderA = a.data.order ?? 999
    const orderB = b.data.order ?? 999
    return orderA - orderB
  })
}
