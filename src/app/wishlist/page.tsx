'use client'

import styled from 'styled-components'
import { useWishlist } from '@/contexts/WishlistContext'
import { ProductCard } from '@/components/common/ProductCard/ProductCard'
import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation/Navigation'
import Layout from '@/components/layout/Layout/Layout'

const WishlistContainer = styled.div`
  max-width: 1400px;
  margin: 120px auto 40px;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.h1};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: 'Playfair Display', serif;
`

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xxl};
`

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`

const EmptyStateText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const ShopNowButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: 25px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`

export default function WishlistPage() {
  const { state } = useWishlist();

  return (
    <Layout>
      <WishlistContainer>
        <Header>
          <Title>My Wishlist</Title>
          <Subtitle>Your favorite items in one place</Subtitle>
        </Header>

        {state.items.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ProductGrid>
              {state.items.map((item) => (
                <ProductCard
                  key={item.id}
                  product={{
                    ...item,
                    color: '',
                    size: '',
                  }}
                />
              ))}
            </ProductGrid>
          </motion.div>
        ) : (
          <EmptyState>
            <EmptyStateText>Your wishlist is empty</EmptyStateText>
            <ShopNowButton onClick={() => window.location.href = '/collections'}>
              Start Shopping
            </ShopNowButton>
          </EmptyState>
        )}
      </WishlistContainer>
    </Layout>
  )
} 