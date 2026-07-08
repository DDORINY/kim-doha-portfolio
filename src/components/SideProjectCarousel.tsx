import { useRef } from 'react'
import type { SideProject } from '../data/sideProjects'
import SideProjectCard from './SideProjectCard'

export default function SideProjectCarousel({ projects }: { projects: SideProject[] }) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('.side-project-card')
    const amount = card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8
    track.scrollBy({ left: amount * dir, behavior: 'smooth' })
  }

  return (
    <div className="side-project-carousel">
      {projects.length > 1 && (
        <button type="button" className="carousel-arrow prev" onClick={() => scrollByCard(-1)} aria-label="이전 프로젝트">‹</button>
      )}
      <div className="side-project-track" ref={trackRef}>
        {projects.map((project) => <SideProjectCard project={project} key={project.slug} />)}
      </div>
      {projects.length > 1 && (
        <button type="button" className="carousel-arrow next" onClick={() => scrollByCard(1)} aria-label="다음 프로젝트">›</button>
      )}
    </div>
  )
}
