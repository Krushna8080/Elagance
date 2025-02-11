'use client'

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const CountdownContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  text-align: center;
  margin: ${({ theme }) => theme.spacing.lg} auto;
  max-width: 1200px;
`

const EventTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.heading.h3};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const TimerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.sm};
  }
`

const TimeUnit = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  
  .number {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  .label {
    font-size: ${({ theme }) => theme.typography.body.small};
    color: ${({ theme }) => theme.colors.textLight};
  }
`

interface EventCountdownProps {
  eventDate: string
  eventTitle: string
}

export default function EventCountdown({ eventDate, eventTitle }: EventCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(eventDate) - +new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ]

  return (
    <CountdownContainer>
      <EventTitle>{eventTitle}</EventTitle>
      <TimerGrid>
        {timeUnits.map((unit, index) => (
          <TimeUnit
            key={unit.label}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="number">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="label">{unit.label}</div>
          </TimeUnit>
        ))}
      </TimerGrid>
    </CountdownContainer>
  )
} 