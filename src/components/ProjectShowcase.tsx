import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
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
    <div className="showcase" onMouseEnter={() => (pausedRef.current = true)} onMouseLeave={() => (pausedRef.current = false)}>
      <div className="showcase-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((project) => (
          <Link className="showcase-slide" to={`/projects/${project.slug}`} style={{ '--accent': project.accent } as React.CSSProperties} key={project.slug}>
            <img src={project.screenshots[0].src} alt={project.screenshots[0].alt} loading="lazy" />
            <div className="showcase-caption">
              <span>{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
      {slides.length > 1 && (
        <div className="showcase-dots">
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
