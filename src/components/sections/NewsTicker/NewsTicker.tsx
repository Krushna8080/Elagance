'use client'

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const TickerContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
  position: relative;
`

const TickerContent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.body.regular};
  font-weight: 500;
`

const newsItems = [
  'New Summer Collection Coming Soon!',
  'Join us for our Sustainable Fashion Event this Weekend',
  'Limited Edition Pieces Available In-Store',
  'Fashion Show: Save the Date - June 15th',
]

export default function NewsTicker() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
    }, 5000) // Change news every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <TickerContainer>
      <AnimatePresence mode="wait">
        <TickerContent
          key={currentNewsIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {newsItems[currentNewsIndex]}
        </TickerContent>
      </AnimatePresence>
    </TickerContainer>
  )
} 