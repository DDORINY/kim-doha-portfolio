import { useEffect, useRef } from 'react'
import type { SideProject } from '../data/sideProjects'
import SideProjectCard from './SideProjectCard'

export default function SideProjectCarousel({ projects }: { projects: SideProject[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('.side-project-card')
    const amount = card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8

    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
    const atStart = track.scrollLeft <= 4
    if (dir === 1 && atEnd) track.scrollTo({ left: 0, behavior: 'smooth' })
    else if (dir === -1 && atStart) track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' })
    else track.scrollBy({ left: amount * dir, behavior: 'smooth' })
  }

  useEffect(() => {
    if (projects.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (!pausedRef.current) scrollByCard(1)
    }, 4200)
    return () => clearInterval(id)
  }, [projects.length])

  return (
    <div className="side-project-carousel" onMouseEnter={() => (pausedRef.current = true)} onMouseLeave={() => (pausedRef.current = false)}>
      {projects.length > 1 && (
        <button type="button" className="carousel-arrow prev" onClick={() => scrollByCard(-1)} aria-label="이전 프로젝트">‹</button>
      )}
      <div className="side-project-track" ref={trackRef} onTouchStart={() => (pausedRef.current = true)} onTouchEnd={() => (pausedRef.current = false)}>
        {projects.map((project) => <SideProjectCard project={project} key={project.slug} />)}
      </div>
      {projects.length > 1 && (
        <button type="button" className="carousel-arrow next" onClick={() => scrollByCard(1)} aria-label="다음 프로젝트">›</button>
      )}
    </div>
  )
}
