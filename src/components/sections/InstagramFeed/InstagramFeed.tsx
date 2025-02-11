'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const InstaPost = styled(motion.div)`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }
`

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`

const Overlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

export default function InstagramFeed() {
  // Mock Instagram data - replace with actual Instagram API integration
  const posts = [
    { id: 1, image: '/insta-1.jpg', likes: 120 },
    { id: 2, image: '/insta-2.jpg', likes: 89 },
    { id: 3, image: '/insta-3.jpg', likes: 234 },
    { id: 4, image: '/insta-4.jpg', likes: 167 },
  ]

  return (
    <Section>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Follow Us on Instagram
        </motion.h2>
        <Grid>
          {posts.map((post, index) => (
            <InstaPost
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PostImage src={post.image} alt={`Instagram post ${post.id}`} />
              <Overlay>
                <span>❤️ {post.likes}</span>
              </Overlay>
            </InstaPost>
          ))}
        </Grid>
      </Container>
    </Section>
  )
} 