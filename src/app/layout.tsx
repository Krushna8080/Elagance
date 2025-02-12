import StyledComponentsRegistry from '@/lib/registry'
import { CartProvider } from '@/contexts/CartContext'
import { WishlistProvider } from '@/contexts/WishlistContext'
import { Inter, Playfair_Display } from 'next/font/google'
import { Metadata } from 'next'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import SchemaOrg from '@/components/common/SchemaOrg'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: 'Armoire | Modern Fashion Brand',
    template: '%s | Armoire'
  },
  description: 'Discover Armoire\'s modern and sophisticated fashion collections. Shop the latest trends in sustainable and elegant clothing.',
  keywords: ['fashion', 'modern clothing', 'sustainable fashion', 'elegant wear', 'Armoire brand'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'i8U5kUKJ4-31oK_EMzN3zsncPk8xc3pxkCKbGI_tvlI',
  },
  openGraph: {
    title: 'Armoire | Modern Fashion Brand',
    description: 'Discover Armoire\'s modern and sophisticated fashion collections. Shop the latest trends in sustainable and elegant clothing.',
    url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
    siteName: 'Armoire',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Armoire Fashion Brand',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armoire | Modern Fashion Brand',
    description: 'Discover Armoire\'s modern and sophisticated fashion collections',
    images: ['/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="i8U5kUKJ4-31oK_EMzN3zsncPk8xc3pxkCKbGI_tvlI" />
        <SchemaOrg />
      </head>
      <body className={`${inter.className} ${playfair.className}`}>
        <StyledComponentsRegistry>
          <ErrorBoundary>
            <CartProvider>
              <WishlistProvider>
                {children}
              </WishlistProvider>
            </CartProvider>
          </ErrorBoundary>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
} 