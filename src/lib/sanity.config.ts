import { createClient } from 'next-sanity'

// Using demo data instead of actual Sanity client
export const client = {
  fetch: async () => {
    // Demo data for collections
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
  }
} 