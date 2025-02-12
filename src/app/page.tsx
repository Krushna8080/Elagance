'use client'

import styled from 'styled-components'
import Layout from '@/components/layout/Layout/Layout'
import { Button } from '@/components/common/Button/Button'
import FeaturedCollections from '@/components/sections/FeaturedCollections/FeaturedCollections'
import NewsTicker from '@/components/sections/NewsTicker/NewsTicker'
import StyleGuide from '@/components/sections/StyleGuide/StyleGuide'
import EventCountdown from '@/components/common/EventCountdown/EventCountdown'
import { motion } from 'framer-motion'
import ClientProviders from '@/components/providers/ClientProviders'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const HeroSection = styled.section`
  min-height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
  margin-top: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const HeroContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 4.5rem;
    line-height: 1.1;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    letter-spacing: -1px;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    color: ${({ theme }) => theme.colors.text};
    max-width: 500px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl};
    h1 {
      font-size: 2.5rem;
    }
    p {
      margin: 0 auto;
      margin-bottom: ${({ theme }) => theme.spacing.xl};
      font-size: 1.1rem;
    }
  }
`

const HeroImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #f3f4f6, #e5e7eb);
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 50vh;
    grid-row: 1;
  }
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const Dots = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  z-index: 1;

  .dot {
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    opacity: 0.5;
  }
`

const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`

const FeaturedSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: ${({ theme }) => theme.colors.background};
`

const upcomingEvent = {
  date: '2024-06-15',
  title: 'Summer Fashion Show 2024',
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: none;
  }
`

const ImageSlider = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

export default function Home() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = ['/hero-1.jpg', '/hero-2.jpg', '/hero-3.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleShopClick = () => {
    router.push('/collections');
  };

  const handleLearnMoreClick = () => {
    router.push('/about');
  };

  return (
    <ClientProviders>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <NewsTicker />
          <HeroSection>
            <HeroContent>
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Elevate Your Style With Timeless Fashion
              </motion.h1>
              <motion.p
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Discover our curated collection of sustainable and modern pieces designed to make you stand out with Armoire's signature style and sophistication.
              </motion.p>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <HeroButtons>
                  <Button variant="primary" onClick={handleShopClick}>
                    Shop Collection
                  </Button>
                  <SecondaryButton variant="secondary" onClick={handleLearnMoreClick}>
                    Learn More
                  </SecondaryButton>
                </HeroButtons>
              </motion.div>
            </HeroContent>
            <HeroImageContainer>
              <Dots>
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="dot"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                  />
                ))}
              </Dots>
              {heroImages.map((src, index) => (
                <ImageSlider
                  key={src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <HeroImage 
                    src={src} 
                    alt={`Fashion Model ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </ImageSlider>
              ))}
            </HeroImageContainer>
          </HeroSection>
          <FeaturedSection>
            <EventCountdown 
              eventDate={upcomingEvent.date} 
              eventTitle={upcomingEvent.title} 
            />
            <FeaturedCollections />
            <StyleGuide />
          </FeaturedSection>
        </motion.div>
      </Layout>
    </ClientProviders>
  )
} 