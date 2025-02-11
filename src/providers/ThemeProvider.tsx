'use client'

import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

export const theme = {
  colors: {
    primary: '#1a1a1a',
    secondary: '#ffffff',
    background: '#ffffff',
    text: '#1a1a1a',
    textLight: '#666666',
    accent: '#e6b800',
    white: '#ffffff',
  },
  typography: {
    heading: {
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.75rem',
      h4: '1.5rem',
    },
    body: {
      regular: '1rem',
      small: '0.875rem',
      tiny: '0.75rem',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  },
}

export type Theme = typeof theme

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  )
} 