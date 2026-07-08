import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'

export default function ProjectShowcase() {
  const slides = projects.filter((p) => p.screenshots[0])
  const [index, setIndex] = useState(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    if (slides.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % slides.length)
    }, 4200)
    return () => clearInterval(id)
  }, [slides.length])

  if (slides.length === 0) return null

  return (
    <div className="hero-backdrop" onMouseEnter={() => (pausedRef.current = true)} onMouseLeave={() => (pausedRef.current = false)}>
      <div className="hero-backdrop-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((project) => (
          <div className="hero-backdrop-slide" key={project.slug}>
            <img src={project.screenshots[0].src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="hero-backdrop-scrim" />
      {slides.length > 1 && (
        <div className="hero-backdrop-dots">
          {slides.map((project, i) => (
            <button
              type="button"
              key={project.slug}
              className={i === index ? 'active' : ''}
              onClick={() => setIndex(i)}
              aria-label={`${project.name} 화면 보기`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
