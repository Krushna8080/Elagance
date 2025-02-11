'use client'

import { Product, WithContext } from 'schema-dts'

interface CollectionJsonLdProps {
  title: string
  description: string
  image: string
  price?: string
}

export default function CollectionJsonLd({
  title,
  description,
  image,
  price,
}: CollectionJsonLdProps) {
  const schema: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: 'Fashion Brand',
    },
    offers: price
      ? {
          '@type': 'Offer',
          price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        }
      : undefined,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 