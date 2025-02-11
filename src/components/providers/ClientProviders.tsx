'use client'

import React from 'react'
import { Analytics } from '@/lib/analytics'
import { DefaultSeo } from 'next-seo'
import { defaultSEOConfig } from '@/lib/seo.config'
import JsonLd from '@/components/common/JsonLd/JsonLd'

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      <JsonLd />
      {children}
      <Analytics />
    </>
  )
} 