import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  fallbackLabel?: string
}

export default function ImageWithFallback({ src, alt, className, loading, fallbackLabel }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={className ? `img-fallback ${className}` : 'img-fallback'} role="img" aria-label={alt}>
        <span>{fallbackLabel ?? '이미지 준비 중'}</span>
      </div>
    )
  }

  return <img src={src} alt={alt} className={className} loading={loading} onError={() => setFailed(true)} />
}
