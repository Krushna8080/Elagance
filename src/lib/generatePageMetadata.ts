import { Metadata } from 'next'

interface PageMetadata {
  title: string
  description: string
  image?: string
  type?: string
}

interface GenerateMetadataProps {
  title: string
  description: string
  path: string
  openGraph?: {
    images?: string[]
    type?: string
  }
}

export async function generatePageMetadata(
  pageType: 'collection' | 'news' | 'gallery' | 'about' | 'store',
  slug?: string
): Promise<Metadata> {
  let metadata: PageMetadata

  // Using demo data instead of Sanity queries
  switch (pageType) {
    case 'collection':
      metadata = {
        title: 'Fashion Collections',
        description: 'Explore our latest fashion collections featuring sustainable and timeless pieces.',
        image: '/collection-1.jpg',
        type: 'website',
      }
      break

    case 'news':
      metadata = {
        title: 'Fashion News & Updates',
        description: 'Stay updated with the latest fashion news, events, and announcements.',
        image: '/collection-2.jpg',
        type: 'website',
      }
      break

    case 'about':
      metadata = {
        title: 'About Us',
        description: 'Learn about our commitment to sustainable and timeless fashion.',
        type: 'website',
      }
      break

    default:
      metadata = {
        title: 'Fashion Brand',
        description: 'Modern and sophisticated fashion brand',
        type: 'website',
      }
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  
  return {
    title: `${metadata.title} | Fashion Brand`,
    description: metadata.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${slug ? `/${slug}` : ''}`,
    },
    openGraph: {
      title: `${metadata.title} | Fashion Brand`,
      description: metadata.description,
      url: `${baseUrl}${slug ? `/${slug}` : ''}`,
      siteName: 'Fashion Brand',
      locale: 'en_US',
      type: metadata.type as 'website' | 'article',
      images: metadata.image ? [{ url: metadata.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${metadata.title} | Fashion Brand`,
      description: metadata.description,
      creator: '@fashionbrand',
      images: metadata.image ? [metadata.image] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generatePageMetadataFromProps({
  title,
  description,
  path,
  openGraph,
}: GenerateMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  
  return {
    title: `${title} | Fashion Brand`,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    openGraph: {
      title: `${title} | Fashion Brand`,
      description,
      url: `${baseUrl}${path}`,
      siteName: 'Fashion Brand',
      locale: 'en_US',
      type: (openGraph?.type || 'website') as 'website' | 'article',
      images: openGraph?.images || [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Fashion Brand`,
      description,
      creator: '@fashionbrand',
      images: openGraph?.images || [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
} 