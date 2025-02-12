'use client'

import { Organization, Store, WebSite, BreadcrumbList, WithContext, Product } from 'schema-dts'

interface Props {
  path?: string
  product?: {
    name: string
    description: string
    price: number
    image: string
    sku: string
  }
}

export default function JsonLd({ path, product }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com'

  const organizationData: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Elegance Fashion',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: 'Modern and sustainable fashion brand focused on timeless elegance',
    sameAs: [
      'https://facebook.com/elegancefashion',
      'https://instagram.com/elegancefashion',
      'https://twitter.com/elegancefashion',
      'https://pinterest.com/elegancefashion',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'support@elegancefashion.com',
      availableLanguage: ['English'],
    },
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Person',
        name: 'Jane Doe',
        jobTitle: 'CEO & Founder',
      },
    ],
    ethicsPolicy: `${baseUrl}/ethics-policy`,
    slogan: 'Sustainable Elegance for Modern Life',
  }

  const storeData: WithContext<Store> = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'Elegance Fashion Store',
    image: [
      `${baseUrl}/images/store-front.jpg`,
      `${baseUrl}/images/store-interior.jpg`,
    ],
    '@id': `${baseUrl}/#store`,
    url: baseUrl,
    telephone: '+1-555-123-4567',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Fashion Avenue',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.0060,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        closes: '17:00',
        opens: '12:00',
      },
    ],
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    currenciesAccepted: 'USD',
  }

  const websiteData: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Elegance Fashion',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      query: 'required name=search_term_string',
    },
    description: 'Discover sustainable and elegant fashion for the modern lifestyle',
    publisher: {
      '@type': 'Organization',
      name: 'Elegance Fashion',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
  }

  const breadcrumbData: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: path
      ? path
          .split('/')
          .filter(Boolean)
          .map((part, index, array) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
            item: `${baseUrl}/${array.slice(0, index + 1).join('/')}`,
          }))
      : [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
        ],
  }

  const productData = product
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image,
        sku: product.sku,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Elegance Fashion',
          },
        },
        brand: {
          '@type': 'Brand',
          name: 'Elegance Fashion',
        },
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(storeData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      {productData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productData),
          }}
        />
      )}
    </>
  )
} 