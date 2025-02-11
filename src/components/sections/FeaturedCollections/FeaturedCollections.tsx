'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl};
  padding-top: calc(${({ theme }) => theme.spacing.xxl} + 60px);
  max-width: 1200px;
  margin: 0 auto;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
    pointer-events: none;
  }
`

const CollectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  background-color: ${({ theme }) => theme.colors.background};
`

const CollectionInfo = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.white};
  z-index: 2;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  h3 {
    font-size: 2.2rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.95;
    line-height: 1.6;
    max-width: 90%;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
`

const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const CollectionCard = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 3/4;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover ${CollectionInfo} {
    transform: translateY(-5px);
  }
`

const collections = [
  {
    id: 1,
    title: 'Spring Collection',
    description: 'Fresh and vibrant pieces for the new season',
    image: '/featured-1.jpg',
  },
  {
    id: 2,
    title: 'Summer Essentials',
    description: 'Light and breezy styles for warm days',
    image: '/featured-2.jpg',
  },
  {
    id: 3,
    title: 'Autumn Looks',
    description: 'Cozy and stylish transitional pieces',
    image: '/featured-3.jpg',
  },
  {
    id: 4,
    title: 'Evening Elegance',
    description: 'Sophisticated dresses and formal wear',
    image: '/featured-4.jpg',
  },
  {
    id: 5,
    title: 'Winter Luxe',
    description: 'Luxurious winter coats and accessories',
    image: '/featured-5.jpg',
  },
  {
    id: 6,
    title: 'Designer Exclusives',
    description: 'Limited edition pieces from top designers',
    image: '/featured-6.jpg',
  },
]

export default function FeaturedCollections() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/store-front.jpg'
  }

  return (
    <Section>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '2.8rem',
          marginBottom: '2.5rem',
          fontFamily: 'Cormorant Garamond, serif',
          textAlign: 'center',
          color: 'inherit',
          fontWeight: '600',
          letterSpacing: '1px'
        }}
      >
        Featured Collections
      </motion.h2>
      <CollectionGrid ref={ref}>
        {collections.map((collection, index) => (
          <CollectionCard
            key={collection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ImageContainer>
              <CollectionImage
                src={collection.image}
                alt={collection.title}
                loading="lazy"
                onError={handleImageError}
              />
            </ImageContainer>
            <CollectionInfo
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
            </CollectionInfo>
          </CollectionCard>
        ))}
      </CollectionGrid>
    </Section>
  )
} 