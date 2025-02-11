'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Content = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.typography.heading.h2};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  p {
    font-size: ${({ theme }) => theme.typography.body.regular};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
              Founded with a vision to create timeless fashion that transcends seasons,
              our brand stands for quality, sustainability, and elegant design.
            </p>
            <p>
              Every piece in our collection is thoughtfully crafted to blend modern
              aesthetics with sustainable practices, ensuring that style never comes
              at the expense of our planet.
            </p>
          </motion.div>
        </Content>
        <ImageWrapper
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/brand-story.jpg" alt="Our brand story" />
        </ImageWrapper>
      </Container>
    </Section>
  )
} 