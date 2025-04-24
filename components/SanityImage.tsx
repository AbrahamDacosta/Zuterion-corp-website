// components/SanityImage.tsx
import Image from 'next/image'
import { urlFor } from '@/lib/image'

interface SanityImageProps {
  image: any
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function SanityImage({
  image,
  alt,
  width = 600,
  height = 400,
  className = '',
  priority = false,
}: SanityImageProps) {
  const imageUrl = urlFor(image).width(width).height(height).auto('format').url()

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      placeholder="empty" // ou "blur" avec blurDataURL
    />
  )
}
