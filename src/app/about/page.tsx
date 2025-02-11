'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '@/components/layout/Layout/Layout'
import ClientProviders from '@/components/providers/ClientProviders'
import { useInView } from 'react-intersection-observer'

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  margin-top: 80px;
`

const AboutHero = styled.div`
  background: linear-gradient(45deg, #f3f4f6, #e5e7eb);
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xxl};

  h1 {
    font-size: 3.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: -1px;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
    max-width: 800px;
  }
`

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StoryImage = styled(motion.div)`
  position: relative;
  height: 600px;
  background-image: url('/hero-2.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`

const ValuesContainer = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    font-weight: 600;
  }
`

const ValuesList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

const ValueItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }

  .content {
    h3 {
      font-size: 1.2rem;
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      margin: 0;
      color: ${({ theme }) => theme.colors.textLight};
      line-height: 1.6;
    }
  }
`

const values = [
  {
    icon: '🌱',
    title: 'Sustainable Materials',
    description: 'We carefully source eco-friendly fabrics and materials to minimize our environmental impact.',
  },
  {
    icon: '🤝',
    title: 'Ethical Production',
    description: 'Fair labor practices and transparent supply chain are at the core of our manufacturing process.',
  },
  {
    icon: '⭐',
    title: 'Timeless Design',
    description: 'Our pieces are designed to transcend seasonal trends, reducing fashion waste.',
  },
  {
    icon: '🌍',
    title: 'Local Community',
    description: 'We actively support and grow with our local fashion community through various initiatives.',
  },
]

export default function AboutPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <ClientProviders>
      <Layout>
        <AboutSection>
          <AboutHero>
            <AboutContent>
              <motion.h1
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Crafting Sustainable Fashion for the Modern World
              </motion.h1>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p>
                  Founded with a vision to redefine modern fashion, our brand stands at the intersection of timeless elegance and contemporary design. We believe in creating pieces that not only look beautiful but also tell a story of sustainable craftsmanship and conscious fashion choices.
                </p>
                <p>
                  Our journey began with a simple idea: to create clothing that respects both the wearer and the environment. Today, we continue to push boundaries while staying true to our core values of quality, sustainability, and timeless style.
                </p>
              </motion.div>
            </AboutContent>
          </AboutHero>

          <AboutContent>
            <StoryGrid ref={ref}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                <ValuesContainer>
                  <h2>Our Values</h2>
                  <ValuesList>
                    {values.map((value, index) => (
                      <ValueItem
                        key={value.title}
                        initial={{ x: -30, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="icon">{value.icon}</div>
                        <div className="content">
                          <h3>{value.title}</h3>
                          <p>{value.description}</p>
                        </div>
                      </ValueItem>
                    ))}
                  </ValuesList>
                </ValuesContainer>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                <StoryImage
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </StoryGrid>
          </AboutContent>
        </AboutSection>
      </Layout>
    </ClientProviders>
  )
} 