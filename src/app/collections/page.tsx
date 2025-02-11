'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '@/components/layout/Layout/Layout'
import ClientProviders from '@/components/providers/ClientProviders'
import { useState, useEffect, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import { ProductCard } from '@/components/common/ProductCard/ProductCard'
import { FilterSidebar } from '@/components/sections/FilterSidebar/FilterSidebar'
import { ProductSort } from '@/components/common/ProductSort/ProductSort'
import { useRouter, useSearchParams } from 'next/navigation'

// Define interfaces for our data types
interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  color: string
  size: string
}

interface Filters {
  category: string
  priceRange: [number, number]
  colors: string[]
  sizes: string[]
  sort: string
}

const CollectionContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  margin-top: 80px;
`

const CollectionHeader = styled.div`
  background: linear-gradient(45deg, #f3f4f6, #e5e7eb);
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  text-align: center;
`

const CollectionTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 700;
  letter-spacing: -1px;
`

const CollectionDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`

const CollectionContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xxl};
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`

const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const ResultCount = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
`

function CollectionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({
    category: searchParams.get('category') || 'all',
    priceRange: [0, 1000],
    colors: [],
    sizes: [],
    sort: 'newest'
  });
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    const fetchProducts = async () => {
      const mockProducts: Product[] = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `Fashion Item ${i + 1}`,
        price: Math.floor(Math.random() * 900) + 100,
        image: `/category-${(i % 4) + 1}.jpg`,
        category: ['spring', 'summer', 'autumn', 'winter'][Math.floor(Math.random() * 4)],
        color: ['Black', 'White', 'Blue', 'Red'][Math.floor(Math.random() * 4)],
        size: ['XS', 'S', 'M', 'L', 'XL'][Math.floor(Math.random() * 5)],
      }));

      setProducts(mockProducts);
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    // Update URL with new filters
    const params = new URLSearchParams();
    // Copy existing params
    searchParams.forEach((value, key) => {
      params.set(key, value);
    });
    // Update with new filters
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });
    router.push(`/collections?${params.toString()}`);
  };

  const filteredProducts = products
    .filter(product => {
      if (filters.category !== 'all' && product.category !== filters.category) return false;
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
      if (filters.colors.length && !filters.colors.includes(product.color)) return false;
      if (filters.sizes.length && !filters.sizes.includes(product.size)) return false;
      return true;
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return b.id - a.id; // newest first
      }
    });

  return (
    <CollectionContainer>
      <CollectionHeader>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <CollectionTitle>Our Collections</CollectionTitle>
          <CollectionDescription>
            Explore our latest collections featuring sustainable materials and timeless designs.
            Each piece is carefully crafted to ensure both style and comfort.
          </CollectionDescription>
        </motion.div>
      </CollectionHeader>

      <CollectionContentWrapper>
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        
        <div>
          <SortContainer>
            <ResultCount>
              Showing {filteredProducts.length} products
            </ResultCount>
            <ProductSort
              value={filters.sort}
              onChange={(sort) => handleFilterChange({ sort })}
            />
          </SortContainer>

          <ProductGrid ref={ref}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </ProductGrid>
        </div>
      </CollectionContentWrapper>
    </CollectionContainer>
  );
}

export default function CollectionPage() {
  return (
    <ClientProviders>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <CollectionContent />
        </Suspense>
      </Layout>
    </ClientProviders>
  );
} 