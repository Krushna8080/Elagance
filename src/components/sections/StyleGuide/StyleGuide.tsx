'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const StyleGuideSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl};
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Playfair Display', serif;
  font-weight: 600;
`

const GuideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const GuideCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`

const GuideImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${GuideCard}:hover & {
    transform: scale(1.05);
  }
`

const GuideContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.background} 0%,
    rgba(255, 255, 255, 0.95) 100%
  );
`

const GuideTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.heading.h3};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Playfair Display', serif;
`

const GuideList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    line-height: 1.6;

    &:before {
      content: '•';
      color: ${({ theme }) => theme.colors.primary};
      margin-right: ${({ theme }) => theme.spacing.sm};
      font-size: 1.2em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const styleGuides = [
  {
    id: 1,
    title: 'Essential Wardrobe Pieces',
    image: '/featured-1.jpg',
    tips: [
      'Classic white shirt for versatile styling',
      'Well-fitted blazer in neutral tones',
      'High-quality denim for everyday wear',
      'Little black dress for any occasion',
    ],
  },
  {
    id: 2,
    title: 'Color Coordination Guide',
    image: '/featured-2.jpg',
    tips: [
      'Understand color wheel basics',
      'Mix neutrals with statement pieces',
      'Create monochromatic looks',
      'Use complementary colors wisely',
    ],
  },
  {
    id: 3,
    title: 'Sustainable Fashion Tips',
    image: '/featured-3.jpg',
    tips: [
      'Choose quality over quantity',
      'Invest in timeless pieces',
      'Care for your clothes properly',
      'Support sustainable brands',
    ],
  },
]

export default function StyleGuide() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <StyleGuideSection>
      <SectionTitle
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Style Guides & Tips
      </SectionTitle>
      <GuideGrid ref={ref}>
        {styleGuides.map((guide, index) => (
          <GuideCard
            key={guide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GuideImage src={guide.image} alt={guide.title} loading="lazy" />
            <GuideContent>
              <GuideTitle>{guide.title}</GuideTitle>
              <GuideList>
                {guide.tips.map((tip, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                  >
                    {tip}
                  </motion.li>
                ))}
              </GuideList>
            </GuideContent>
          </GuideCard>
        ))}
      </GuideGrid>
    </StyleGuideSection>
  )
} 