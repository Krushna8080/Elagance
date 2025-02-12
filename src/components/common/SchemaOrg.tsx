import { Organization, WebSite, WithContext } from 'schema-dts'

export default function SchemaOrg() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
  
  const schema: WithContext<WebSite | Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Armoire',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Modern and sophisticated fashion brand offering sustainable and elegant clothing collections.',
    sameAs: [
      'https://facebook.com/armoire',
      'https://instagram.com/armoire',
      'https://twitter.com/armoire'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English']
    }
  }

  // Add separate WebSite schema
  const websiteSchema: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Armoire',
    url: baseUrl,
    description: 'Modern and sophisticated fashion brand offering sustainable and elegant clothing collections.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
} 