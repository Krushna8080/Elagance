import StyledComponentsRegistry from '@/lib/registry'
import { CartProvider } from '@/contexts/CartContext'
import { WishlistProvider } from '@/contexts/WishlistContext'
import { Inter, Playfair_Display } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Elegance',
  description: 'Modern and sophisticated fashion brand website',
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
          <CartProvider>
            <WishlistProvider>
              {children}
            </WishlistProvider>
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
} 