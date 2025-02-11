'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const Content = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.typography.heading.h2};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: ${({ theme }) => theme.typography.body.regular};
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 400px;
  }
`

export default function BrandStory() {
  return (
    <Section>
      <Container>
        <Content>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Story</h2>
            <p>
              Founded with a vision to redefine modern fashion, our brand combines timeless elegance
              with contemporary design. We believe in creating pieces that not only look beautiful
              but also tell a story.
            </p>
            <p>
              Every collection is thoughtfully crafted using sustainable materials and ethical
              practices, ensuring that our commitment to style never compromises our responsibility
              to the planet.
            </p>
          </motion.div>
        </Content>
        <ImageWrapper
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/images/brand-story.jpg" alt="Our brand story" />
        </ImageWrapper>
      </Container>
    </Section>
  )
} 