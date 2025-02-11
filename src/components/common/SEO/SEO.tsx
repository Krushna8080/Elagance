'use client'

import { NextSeo } from 'next-seo'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    images?: Array<{ url: string; alt: string }>
  }
}

export default function SEO({
  title = 'Fashion Brand',
  description = 'Modern and sophisticated fashion brand focused on sustainable and timeless pieces.',
  canonical,
  openGraph,
}: SEOProps) {
  return (
    <NextSeo
      title={title}
      titleTemplate="%s | Fashion Brand"
      description={description}
      canonical={canonical}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: canonical,
        siteName: 'Fashion Brand',
        title: openGraph?.title || title,
        description: openGraph?.description || description,
        images: openGraph?.images || [
          {
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Fashion Brand',
          },
        ],
      }}
      twitter={{
        handle: '@fashionbrand',
        site: '@fashionbrand',
        cardType: 'summary_large_image',
      }}
    />
  )
} 