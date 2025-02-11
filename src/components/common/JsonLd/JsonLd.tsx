'use client'

import { Organization, Store, WebSite } from 'schema-dts'

export default function JsonLd() {
  const organizationData: Organization = {
    '@type': 'Organization',
    name: 'Fashion Brand',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    logo: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`,
    sameAs: [
      'https://facebook.com/fashionbrand',
      'https://instagram.com/fashionbrand',
      'https://twitter.com/fashionbrand',
    ],
  }

  const storeData: Store = {
    '@type': 'Store',
    name: 'Fashion Brand Store',
    image: [
      `${process.env.NEXT_PUBLIC_BASE_URL}/store-front.jpg`,
      `${process.env.NEXT_PUBLIC_BASE_URL}/store-interior.jpg`,
    ],
    '@id': `${process.env.NEXT_PUBLIC_BASE_URL}/#store`,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    telephone: '(555) 123-4567',
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
        opens: '12:00',
        closes: '17:00',
      },
    ],
  }

  const websiteData: WebSite = {
    '@type': 'WebSite',
    name: 'Fashion Brand',
    url: process.env.NEXT_PUBLIC_BASE_URL,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            ...organizationData,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            ...storeData,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            ...websiteData,
          }),
        }}
      />
    </>
  )
} 