'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout/Layout'

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  text-align: center;
  background: ${({ theme }) => theme.colors.background};
`

const Content = styled.div`
  max-width: 600px;
`

const Title = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1;
`

const Subtitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: 1.1rem;
  line-height: 1.6;
`

const BackButton = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

export default function NotFound() {
  return (
    <Layout>
      <NotFoundContainer>
        <Content>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title>404</Title>
            <Subtitle>Page Not Found</Subtitle>
            <Description>
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </Description>
            <BackButton href="/">
              Return to Homepage
            </BackButton>
          </motion.div>
        </Content>
      </NotFoundContainer>
    </Layout>
  )
} 