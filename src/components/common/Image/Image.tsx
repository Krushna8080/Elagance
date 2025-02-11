'use client'

import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface ImageProps extends Omit<NextImageProps, 'onLoadingComplete'> {
  aspectRatio?: number
  withBlur?: boolean
}

const ImageWrapper = styled(motion.div)<{ $aspectRatio?: number }>`
  position: relative;
  width: 100%;
  ${({ $aspectRatio }) =>
    $aspectRatio &&
    `
    aspect-ratio: ${$aspectRatio};
  `}
`

const StyledImage = styled(NextImage)`
  object-fit: cover;
`

const BlurOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.5);
`

export default function Image({
  aspectRatio,
  withBlur = true,
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ImageWrapper $aspectRatio={aspectRatio}>
      <StyledImage
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {withBlur && isLoading && (
        <BlurOverlay
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </ImageWrapper>
  )
} 