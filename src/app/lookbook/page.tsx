'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '@/components/layout/Layout/Layout'
import ClientProviders from '@/components/providers/ClientProviders'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const LookbookSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  margin-top: 80px;
`

const LookbookHero = styled.div`
  background: linear-gradient(45deg, #f3f4f6, #e5e7eb);
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  text-align: center;
`

const LookbookContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xxl};

  h1 {
    font-size: 3.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: -1px;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const GalleryItem = styled(motion.div)`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 3/4;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`

const GalleryInfo = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: ${({ theme }) => theme.colors.white};
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${GalleryItem}:hover & {
    transform: translateY(0);
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.heading.h3};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: 600;
  }

  p {
    font-size: ${({ theme }) => theme.typography.body.regular};
    opacity: 0.9;
    margin: 0;
    line-height: 1.6;
  }
`

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  flex-wrap: wrap;
`

const FilterButton = styled.button<{ $isActive?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border: 2px solid ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : 'transparent'};
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : 'transparent'};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.white : theme.colors.text};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`

const collections = [
  {
    id: 1,
    title: 'Spring Collection',
    description: 'Light and airy pieces for the warmer days ahead',
    image: '/collection-1.jpg',
    category: 'spring',
    link: '/collections/spring',
  },
  {
    id: 2,
    title: 'Summer Essentials',
    description: 'Effortless style for those perfect summer moments',
    image: '/collection-2.jpg',
    category: 'summer',
    link: '/collections/summer',
  },
  {
    id: 3,
    title: 'Autumn Looks',
    description: 'Sophisticated layers for the changing seasons',
    image: '/collection-3.jpg',
    category: 'autumn',
    link: '/collections/autumn',
  },
  {
    id: 4,
    title: 'Winter Collection',
    description: 'Cozy and elegant pieces for the colder months',
    image: '/collection-4.jpg',
    category: 'winter',
    link: '/collections/winter',
  },
  {
    id: 5,
    title: 'Evening Wear',
    description: 'Stunning pieces for special occasions',
    image: '/lookbook-1.jpg',
    category: 'evening',
    link: '/collections/evening',
  },
  {
    id: 6,
    title: 'Casual Chic',
    description: 'Everyday elegance redefined',
    image: '/lookbook-2.jpg',
    category: 'casual',
    link: '/collections/casual',
  },
  {
    id: 7,
    title: 'Workwear Edit',
    description: 'Professional attire with a modern twist',
    image: '/lookbook-3.jpg',
    category: 'workwear',
    link: '/collections/workwear',
  },
  {
    id: 8,
    title: 'Weekend Getaway',
    description: 'Versatile pieces for your weekend adventures',
    image: '/lookbook-4.jpg',
    category: 'casual',
    link: '/collections/weekend',
  },
  {
    id: 9,
    title: 'Party Collection',
    description: 'Statement pieces for memorable nights',
    image: '/lookbook-5.jpg',
    category: 'evening',
    link: '/collections/party',
  },
  {
    id: 10,
    title: 'Sustainable Edit',
    description: 'Eco-friendly fashion that makes a difference',
    image: '/category-1.jpg',
    category: 'sustainable',
    link: '/collections/sustainable',
  },
  {
    id: 11,
    title: 'Minimalist Collection',
    description: 'Clean lines and timeless silhouettes',
    image: '/category-2.jpg',
    category: 'minimalist',
    link: '/collections/minimalist',
  },
  {
    id: 12,
    title: 'Bohemian Spirit',
    description: 'Free-spirited designs for the modern bohemian',
    image: '/category-3.jpg',
    category: 'bohemian',
    link: '/collections/bohemian',
  },
  {
    id: 13,
    title: 'Urban Explorer',
    description: 'City-ready pieces with an edge',
    image: '/category-4.jpg',
    category: 'urban',
    link: '/collections/urban',
  },
  {
    id: 14,
    title: 'Capsule Wardrobe',
    description: 'Essential pieces for a versatile wardrobe',
    image: '/wardrobe-1.jpg',
    category: 'capsule',
    link: '/collections/capsule',
  },
  {
    id: 15,
    title: 'Luxury Edit',
    description: 'Premium pieces for the discerning customer',
    image: '/wardrobe-2.jpg',
    category: 'luxury',
    link: '/collections/luxury',
  },
  {
    id: 16,
    title: 'Active Lifestyle',
    description: 'Fashion meets function for an active life',
    image: '/wardrobe-3.jpg',
    category: 'active',
    link: '/collections/active',
  },
  {
    id: 17,
    title: 'Resort Wear',
    description: 'Vacation-ready pieces for your getaway',
    image: '/wardrobe-4.jpg',
    category: 'resort',
    link: '/collections/resort',
  },
]

const categories = [
  { id: 'all', label: 'All Collections' },
  { id: 'spring', label: 'Spring' },
  { id: 'summer', label: 'Summer' },
  { id: 'autumn', label: 'Autumn' },
  { id: 'winter', label: 'Winter' },
  { id: 'evening', label: 'Evening' },
  { id: 'casual', label: 'Casual' },
  { id: 'workwear', label: 'Workwear' },
  { id: 'sustainable', label: 'Sustainable' },
  { id: 'minimalist', label: 'Minimalist' },
  { id: 'bohemian', label: 'Bohemian' },
  { id: 'urban', label: 'Urban' },
  { id: 'capsule', label: 'Capsule' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'active', label: 'Active' },
  { id: 'resort', label: 'Resort' },
]

export default function LookbookPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredCollections = collections.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  const handleCollectionClick = (link: string) => {
    router.push(link);
  };

  return (
    <ClientProviders>
      <Layout>
        <LookbookSection>
          <LookbookHero>
            <LookbookContent>
              <motion.h1
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Explore Our Collections
              </motion.h1>
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Discover our carefully curated collections that blend timeless elegance with contemporary style. Each piece tells a story of craftsmanship and sustainable fashion.
              </motion.p>
              <FilterButtons>
                {categories.map(category => (
                  <FilterButton
                    key={category.id}
                    $isActive={activeCategory === category.id}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label}
                  </FilterButton>
                ))}
              </FilterButtons>
            </LookbookContent>
          </LookbookHero>

          <LookbookContent>
            <GalleryGrid ref={ref}>
              {filteredCollections.map((item, index) => (
                <GalleryItem
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleCollectionClick(item.link)}
                >
                  <GalleryImage src={item.image} alt={item.title} loading="lazy" />
                  <GalleryInfo>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </GalleryInfo>
                </GalleryItem>
              ))}
            </GalleryGrid>
          </LookbookContent>
        </LookbookSection>
      </Layout>
    </ClientProviders>
  );
} 