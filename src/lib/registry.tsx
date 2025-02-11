'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { GlobalStyles } from '@/styles/GlobalStyles'

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
      <StyleSheetManager enableVendorPrefixes>
        <ThemeProvider>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </StyleSheetManager>
    )
  }

  return (
    <StyleSheetManager sheet={sheet.instance} enableVendorPrefixes>
      <ThemeProvider>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  )
} 