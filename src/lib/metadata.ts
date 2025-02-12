import type { Metadata } from 'next'

const defaultMetadata = {
  title: 'Elegance Fashion Brand | Modern & Sustainable Fashion',
  description: 'Discover timeless elegance with our sustainable fashion collections. Shop contemporary designs crafted with ethical practices and premium materials.',
  keywords: 'fashion, sustainable fashion, ethical clothing, modern fashion, elegance, luxury fashion, contemporary style, designer clothing, fashion brand, sustainable style',
  author: 'Elegance Fashion',
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://fashion-brand-website.vercel.app',
}

export function generateMetadata({ 
  title, 
  description,
  image,
  path 
}: { 
  title?: string
  description?: string
  image?: string
  path?: string
}): Metadata {
  const pageTitle = title ? `${title} | ${defaultMetadata.title}` : defaultMetadata.title
  const pageDescription = description || defaultMetadata.description
  const pageUrl = `${defaultMetadata.siteUrl}${path || ''}`
  const pageImage = image || `${defaultMetadata.siteUrl}/images/og-image.jpg`

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: defaultMetadata.keywords,
    authors: [{ name: defaultMetadata.author }],
    metadataBase: new URL(defaultMetadata.siteUrl),
    alternates: {
      canonical: pageUrl,
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
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: defaultMetadata.title,
      type: 'website',
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: '@elegancefashion',
      site: '@elegancefashion',
    },
    other: {
      'facebook-domain-verification': '<your-facebook-domain-verification>',
      'google-site-verification': '<your-google-site-verification>',
    },
    manifest: '/manifest.json',
  }
} 