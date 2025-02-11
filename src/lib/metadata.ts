import type { Metadata } from 'next'

const defaultMetadata = {
  title: 'Elegance Fashion Brand | Modern & Sustainable Fashion',
  description: 'Discover timeless elegance with our sustainable fashion collections. Shop contemporary designs crafted with ethical practices and premium materials.',
  keywords: 'fashion, sustainable fashion, ethical clothing, modern fashion, elegance, luxury fashion, contemporary style',
}

export function generateMetadata({ title, description }: { 
  title?: string, 
  description?: string 
}): Metadata {
  return {
    title: title ? `${title} | Elegance Fashion` : defaultMetadata.title,
    description: description || defaultMetadata.description,
    keywords: defaultMetadata.keywords,
    metadataBase: new URL('https://your-domain.onrender.com'),
    openGraph: {
      title: title || defaultMetadata.title,
      description: description || defaultMetadata.description,
      type: 'website',
      siteName: 'Elegance Fashion',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Elegance Fashion Brand',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title || defaultMetadata.title,
      description: description || defaultMetadata.description,
      images: ['/images/og-image.jpg'],
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
    verification: {
      google: 'your-google-verification-code',
    },
  }
} 