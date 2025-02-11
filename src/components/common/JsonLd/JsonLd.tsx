'use client'

import { Organization, Store, WebSite, BreadcrumbList } from 'schema-dts'

export default function JsonLd() {
  const baseUrl = 'https://your-domain.onrender.com'

  const organizationData: Organization = {
    '@type': 'Organization',
    '@context': 'https://schema.org',
    name: 'Elegance Fashion',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
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
  }

  const storeData: Store = {
    '@type': 'Store',
    '@context': 'https://schema.org',
    name: 'Elegance Fashion Store',
    image: [
      `${baseUrl}/store-front.jpg`,
      `${baseUrl}/store-interior.jpg`,
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
    department: [
      {
        '@type': 'Department',
        name: "Women's Fashion",
        description: 'Contemporary women\'s clothing and accessories',
      },
      {
        '@type': 'Department',
        name: "Men's Fashion",
        description: 'Modern men\'s clothing and accessories',
      },
    ],
  }

  const websiteData: WebSite = {
    '@type': 'WebSite',
    '@context': 'https://schema.org',
    name: 'Elegance Fashion',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumbData: BreadcrumbList = {
    '@type': 'BreadcrumbList',
    '@context': 'https://schema.org',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Collections',
        item: `${baseUrl}/collections`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'About',
        item: `${baseUrl}/about`,
      },
    ],
  }

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
    </>
  )
} 