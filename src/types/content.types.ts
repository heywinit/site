import type { CollectionEntry } from 'astro:content'

// Reading time interface
export interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

// TOC item interface
export interface TOCItem {
  level: number
  text: string
  id: string
  index: number
}

// PostList component props interface
export interface PostListProps {
  posts: CollectionEntry<'posts'>[]
}

// ProjectList component props interface
export interface ProjectListProps {
  projects: CollectionEntry<'projects'>[]
  showMetadata?: boolean
}

// WorkList component props interface
export interface WorkListProps {
  work: CollectionEntry<'work'>[]
}
