import { client } from './sanity.config'

export async function generateSitemap() {
  const baseUrl = 'https://fashionbrand.com'

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
  const collectionRoutes = collections.map((collection: { slug: string }) => 
    `/collection/${collection.slug}`
  )
  const newsRoutes = news.map((newsItem: { slug: string }) => 
    `/news/${newsItem.slug}`
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
} 