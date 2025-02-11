import { Metadata } from 'next'

interface GenerateMetadataProps {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
}

export function generateMetadata({
  title = 'Fashion Brand',
  description = 'Modern and sophisticated fashion brand focused on sustainable and timeless pieces.',
  image = '/og-image.jpg',
  noIndex = false,
}: GenerateMetadataProps): Metadata {
  const baseUrl = 'https://fashionbrand.com'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    alternates: {
      canonical: baseUrl,
    },
  }
} 