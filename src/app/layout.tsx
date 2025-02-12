import StyledComponentsRegistry from '@/lib/registry'
import { CartProvider } from '@/contexts/CartContext'
import { WishlistProvider } from '@/contexts/WishlistContext'
import { Inter, Playfair_Display } from 'next/font/google'
import { Metadata } from 'next'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Armoire',
  description: 'Modern and sophisticated fashion brand website',
  verification: {
    google: 'google-site-verification=YOUR_VERIFICATION_CODE', // You'll get this from Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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