'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '@/components/layout/Layout/Layout'
import ClientProviders from '@/components/providers/ClientProviders'
import { useInView } from 'react-intersection-observer'

const NewsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl};
  padding-top: calc(${({ theme }) => theme.spacing.xxl} + 100px);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl};
    padding-top: calc(${({ theme }) => theme.spacing.xl} + 100px);
  }
`

const NewsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  padding-top: ${({ theme }) => theme.spacing.xl};
`

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const NewsCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`

const NewsImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${NewsCard}:hover & {
    transform: scale(1.05);
  }
`

const NewsContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.background} 0%,
    rgba(255, 255, 255, 0.95) 100%
  );
`

const NewsTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.h3};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Playfair Display', serif;
`

const NewsExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
  font-size: 1.1rem;
`

const NewsDate = styled.time`
  display: block;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-style: italic;
`

const Category = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const DecorativeLogo = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.07;
  pointer-events: none;
  z-index: 0;
  
  svg {
    width: 180px;
    height: 180px;
  }
`

const newsItems = [
  {
    id: 1,
    title: 'Spring Collection Launch',
    excerpt: 'Discover our latest spring collection featuring sustainable materials and timeless designs.',
    image: '/collection-1.jpg',
    date: '2024-03-15',
    category: 'New Collection',
  },
  {
    id: 2,
    title: 'Sustainable Fashion Event',
    excerpt: 'Join us for an exclusive event discussing the future of sustainable fashion.',
    image: '/collection-2.jpg',
    date: '2024-03-20',
    category: 'Events',
  },
  {
    id: 3,
    title: 'New Store Opening',
    excerpt: "We're excited to announce the opening of our new flagship store.",
    image: '/collection-3.jpg',
    date: '2024-04-01',
    category: 'Announcements',
  },
  {
    id: 4,
    title: 'Fashion Show Announcement',
    excerpt: 'Save the date for our upcoming fashion show featuring local designers.',
    image: '/collection-4.jpg',
    date: '2024-04-15',
    category: 'Events',
  },
]

export default function NewsPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <ClientProviders>
      <Layout>
        <NewsSection>
          <NewsHeader>
            <DecorativeLogo>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7">
                <path d="M12 3L9 9h6l-3-6z" />
                <path d="M9 9l-6 6h18l-6-6H9z" />
                <path d="M4.5 15L3 19.5h18L19.5 15h-15z" />
                <circle cx="12" cy="6" r="1" fill="currentColor" />
                <circle cx="7.5" cy="12" r="1" fill="currentColor" />
                <circle cx="16.5" cy="12" r="1" fill="currentColor" />
              </svg>
            </DecorativeLogo>
            <Title
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Journal & Stories
            </Title>
            <Description
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Stay updated with our latest collections, events, and fashion insights
            </Description>
          </NewsHeader>
          <NewsGrid ref={ref}>
            {newsItems.map((item, index) => (
              <NewsCard
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => console.log(`Clicked news item: ${item.id}`)}
              >
                <NewsImage src={item.image} alt={item.title} loading="lazy" />
                <NewsContent>
                  <Category>{item.category}</Category>
                  <NewsDate dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </NewsDate>
                  <NewsTitle>{item.title}</NewsTitle>
                  <NewsExcerpt>{item.excerpt}</NewsExcerpt>
                </NewsContent>
              </NewsCard>
            ))}
          </NewsGrid>
        </NewsSection>
      </Layout>
    </ClientProviders>
  )
} 