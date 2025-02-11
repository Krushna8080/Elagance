'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import type { DefaultTheme } from 'styled-components'
import { theme } from '@/styles/theme'

interface Props {
  children: React.ReactNode
}

const CustomThemeProvider = ({ children }: Props) => {
  const customTheme: DefaultTheme = theme

  return (
    <ThemeProvider theme={customTheme}>
      {children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider 