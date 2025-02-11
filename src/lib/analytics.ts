'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Dummy GA Tracking ID for development
const DUMMY_GA_ID = 'G-XXXXXXXXXX'

// Initialize Google Analytics
const initGA = () => {
  window.dataLayer = window.dataLayer || []
  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }
  gtag('js', new Date())
  gtag('config', DUMMY_GA_ID)
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export function Analytics() {
  useEffect(() => {
    initGA()
  }, [])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${DUMMY_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${DUMMY_GA_ID}');
        `}
      </Script>
    </>
  )
} 