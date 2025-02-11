'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { GlobalStyles } from '@/styles/GlobalStyles'

const theme = {
  colors: {
    primary: '#1a1a1a',
    secondary: '#ffffff',
    background: '#ffffff',
    text: '#1a1a1a',
    textLight: '#666666',
    accent: '#e6b800',
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

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [sheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement()
    sheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') {
    return (
      <ThemeProvider>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    )
  }

  return (
    <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  )
} 