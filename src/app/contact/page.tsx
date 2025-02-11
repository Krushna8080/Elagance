'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '@/components/layout/Layout/Layout'
import ClientProviders from '@/components/providers/ClientProviders'

const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl};
  padding-top: calc(${({ theme }) => theme.spacing.xxl} + 80px);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl};
    padding-top: calc(${({ theme }) => theme.spacing.xl} + 80px);
  }
`

const PageTitle = styled(motion.h1)`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

const ContactInfo = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);

  h2 {
    font-size: 2.2rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-family: 'Cormorant Garamond', serif;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1.1rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }
`

const StoreHours = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};

  h3 {
    font-size: ${({ theme }) => theme.typography.heading.h3};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text};
  }
`

const MapContainer = styled.div`
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
`

const MapPlaceholder = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textLight};
`

export default function ContactPage() {
  return (
    <ClientProviders>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ContactSection>
            <PageTitle
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Contact Us
            </PageTitle>
            <ContactGrid>
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <ContactInfo>
                  <h2>Store Location</h2>
                  <p>123 Fashion Avenue</p>
                  <p>New York, NY 10001</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: contact@fashionbrand.com</p>

                  <StoreHours>
                    <h3>Store Hours</h3>
                    <ul>
                      <li>Monday - Friday: 10:00 AM - 8:00 PM</li>
                      <li>Saturday: 10:00 AM - 6:00 PM</li>
                      <li>Sunday: 12:00 PM - 5:00 PM</li>
                    </ul>
                  </StoreHours>
                </ContactInfo>
              </motion.div>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <MapContainer>
                  <MapPlaceholder>
                    <p>Map preview unavailable</p>
                    <p>Please add your Google Maps API key to .env file</p>
                  </MapPlaceholder>
                </MapContainer>
              </motion.div>
            </ContactGrid>
          </ContactSection>
        </motion.div>
      </Layout>
    </ClientProviders>
  )
} 