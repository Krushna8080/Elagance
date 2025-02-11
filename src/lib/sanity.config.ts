import { createClient } from 'next-sanity'

// Using demo data instead of actual Sanity client
export const client = {
  fetch: async (query: string) => {
    // Check query type and return appropriate demo data
    if (query.includes('_type == "collection"')) {
      return [
        {
          title: 'Spring Collection',
          description: 'Fresh and vibrant pieces for the new season',
          image: '/collection-1.jpg',
          slug: { current: 'spring-collection' }
        },
        {
          title: 'Summer Essentials',
          description: 'Light and breezy styles for warm days',
          image: '/collection-2.jpg',
          slug: { current: 'summer-essentials' }
        }
      ]
    } else if (query.includes('_type == "news"')) {
      return [
        {
          title: 'New Collection Launch',
          description: 'Introducing our latest collection',
          image: '/news-1.jpg',
          slug: { current: 'new-collection-launch' }
        },
        {
          title: 'Fashion Week Coverage',
          description: 'Highlights from Fashion Week',
          image: '/news-2.jpg',
          slug: { current: 'fashion-week-coverage' }
        }
      ]
    }
    return []
  }
} 