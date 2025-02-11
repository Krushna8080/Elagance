import { generatePageMetadataFromProps } from '@/lib/generatePageMetadata'
import { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadataFromProps({
  title: 'Product Details',
  description: 'View detailed information about our fashion products.',
  path: '/product',
  openGraph: {
    type: 'product',
    images: ['/og-image.jpg'],
  },
})

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 