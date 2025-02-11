'use client'

import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

const Navigation = dynamic(() => import('../Navigation/Navigation'), {
  ssr: false
})

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: auto;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${({ theme }) => theme.spacing.xl};
  }

  h3, h4 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    opacity: 0.8;
  }
`

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Main>
      <Navigation />
      {children}
      <Footer>
        <div className="footer-content">
          <div>
            <h3>Fashion Brand</h3>
            <p>Modern and sophisticated fashion for the conscious consumer.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>123 Fashion Avenue</p>
            <p>New York, NY 10001</p>
            <p>contact@fashionbrand.com</p>
          </div>
          <div>
            <h4>Follow Us</h4>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
        </div>
      </Footer>
    </Main>
  )
} 