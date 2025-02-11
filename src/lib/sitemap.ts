import { client } from './sanity.config'

interface SanityDocument {
  title: string
  description: string
  image: string
  slug: {
    current: string
  }
}

export async function generateSitemap() {
  const baseUrl = 'https://fashionbrand.com'

  try {
    // Get all dynamic routes from Sanity
    const collections = await client.fetch(`
      *[_type == "collection"] {
        "slug": slug.current
      }
    `)

    const news = await client.fetch(`
      *[_type == "news"] {
        "slug": slug.current
      }
    `)

    // Static routes
    const staticRoutes = [
      '',
      '/about',
      '/gallery',
      '/news',
      '/store',
    ]

    // Dynamic routes
    const collectionRoutes = collections.map((collection: SanityDocument) => 
      `/collection/${collection.slug.current}`
    )
    const newsRoutes = news.map((newsItem: SanityDocument) => 
      `/news/${newsItem.slug.current}`
    )

    const allRoutes = [
      ...staticRoutes,
      ...collectionRoutes,
      ...newsRoutes,
    ]

    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allRoutes
          .map(route => {
            return `
              <url>
                <loc>${baseUrl}${route}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
              </url>
            `
          })
          .join('')}
      </urlset>
    `
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
      </urlset>
    `
  }
} 