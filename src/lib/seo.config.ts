export const defaultSEOConfig = {
  title: 'Fashion Brand',
  description: 'Modern and sophisticated fashion brand focused on sustainable and timeless pieces.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fashionbrand.com/',
    siteName: 'Fashion Brand',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fashion Brand',
      },
    ],
  },
  twitter: {
    handle: '@fashionbrand',
    site: '@fashionbrand',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
} 