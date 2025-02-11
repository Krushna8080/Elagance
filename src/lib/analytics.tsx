'use client'

import React from 'react'
import Script from 'next/script'

// Dummy GA Tracking ID for development
const DUMMY_GA_ID = 'G-XXXXXXXXXX'

export function Analytics() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
} 