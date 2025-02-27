'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import ThemeWrapper from '@/providers/ThemeWrapper'

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [sheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement()
    sheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') {
    return (
      <StyleSheetManager enableVendorPrefixes>
        <ThemeWrapper>{children}</ThemeWrapper>
      </StyleSheetManager>
    )
  }

  return (
    <StyleSheetManager sheet={sheet.instance} enableVendorPrefixes>
      <ThemeWrapper>{children}</ThemeWrapper>
    </StyleSheetManager>
  )
} 