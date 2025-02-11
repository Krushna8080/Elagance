import { generatePageMetadataFromProps } from '@/lib/generatePageMetadata'
import { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadataFromProps({
  title: 'News & Updates',
  description: 'Stay up to date with the latest news, events, and collections from our fashion brand.',
  path: '/news',
  openGraph: {
    type: 'website',
    images: ['/og-image.jpg'],
  },
})

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 