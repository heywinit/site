import { getCollection, type CollectionEntry } from 'astro:content'

/**
 * Get all work items, filtering out items whose filenames start with _
 */
export async function getFilteredWork() {
  const work = await getCollection('work')
  return work.filter((item: CollectionEntry<'work'>) => !item.id.startsWith('_'))
}
