import { useEffect, useRef, useState } from 'react'

const heroImages = [
  { src: `${import.meta.env.BASE_URL}images/hero-ai-developer-bg.png`, alt: '' },
  { src: `${import.meta.env.BASE_URL}images/hero-ai-object-detection.png`, alt: '' },
]

export default function ProjectShowcase() {
  const [index, setIndex] = useState(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    if (heroImages.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % heroImages.length)
    }, 4200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="hero-backdrop" onMouseEnter={() => (pausedRef.current = true)} onMouseLeave={() => (pausedRef.current = false)}>
      <div className="hero-backdrop-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {heroImages.map((image) => (
          <div className="hero-backdrop-slide" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="hero-backdrop-scrim" />
      {heroImages.length > 1 && (
        <div className="hero-backdrop-dots">
          {heroImages.map((image, i) => (
            <button
              type="button"
              key={image.src}
              className={i === index ? 'active' : ''}
              onClick={() => setIndex(i)}
              aria-label={`배경 이미지 ${i + 1} 보기`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
