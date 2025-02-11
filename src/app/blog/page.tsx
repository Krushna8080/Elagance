'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '@/components/layout/Layout/Layout'
import ClientProviders from '@/components/providers/ClientProviders'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/common/Button/Button'

const BlogSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl};
  max-width: 1200px;
  margin: 0 auto;
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const BlogCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const BlogImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

const BlogContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};

  h2 {
    font-size: ${({ theme }) => theme.typography.heading.h3};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    line-height: 1.6;
  }

  .category {
    display: inline-block;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    font-size: ${({ theme }) => theme.typography.body.small};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  time {
    display: block;
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ theme }) => theme.typography.body.small};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`

const blogPosts = [
  {
    id: 1,
    title: 'Behind the Scenes: Spring Collection Photoshoot',
    excerpt: 'Get an exclusive look at how we created our stunning spring campaign, featuring local artists and sustainable practices.',
    image: '/collection-1.jpg',
    category: 'Behind the Scenes',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'Sustainable Fashion Guide: Building a Timeless Wardrobe',
    excerpt: 'Learn how to create a sustainable and versatile wardrobe that stands the test of time.',
    image: '/collection-2.jpg',
    category: 'Style Guide',
    date: '2024-03-20',
  },
  {
    id: 3,
    title: 'Meet Our Artisans: The Craftsmanship Behind Each Piece',
    excerpt: 'Discover the skilled artisans and traditional techniques that bring our designs to life.',
    image: '/collection-3.jpg',
    category: 'Brand Story',
    date: '2024-04-01',
  },
  {
    id: 4,
    title: 'Spring/Summer Style Guide: Essential Pieces and How to Wear Them',
    excerpt: 'Your complete guide to mixing and matching our latest collection for any occasion.',
    image: '/collection-4.jpg',
    category: 'Style Guide',
    date: '2024-04-15',
  },
]

export default function BlogPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <ClientProviders>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <BlogSection>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Stories & Style Guides
            </motion.h1>
            <BlogGrid ref={ref}>
              {blogPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogImage src={post.image} alt={post.title} loading="lazy" />
                  <BlogContent>
                    <span className="category">{post.category}</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <Button variant="primary" size="small">
                      Read More
                    </Button>
                  </BlogContent>
                </BlogCard>
              ))}
            </BlogGrid>
          </BlogSection>
        </motion.div>
      </Layout>
    </ClientProviders>
  )
} 