import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { projectListingMeta } from '../data/projectListing'
import type { Project } from '../data/projects'
import Reveal from './Reveal'
import { TechChip } from './TechIcon'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const listing = projectListingMeta[project.slug]
  const isInProgress = project.status === 'in-progress'
  const isArchitecture = listing.currentStatus?.includes('ARCHITECTURE')
  const stateLabel = isArchitecture ? 'ARCHITECTURE' : isInProgress ? 'IN PROGRESS' : 'COMPLETED'
  const category = project.slug === 'hawk-ai' || project.slug === 'dohalm' || project.slug === 'dohamusic'
    ? 'LLM / AI SERVICE'
    : project.categories?.[0] ?? project.type.split(' · ')[0]

  return (
    <Reveal
      as="article"
      className={`project-card projects-compact-card${isInProgress ? ' is-in-progress' : ''}`}
      style={{ '--accent': project.accent } as CSSProperties}
      delay={index * 70}
    >
      <div className="projects-compact-body">
        <div className="card-topline"><span>{category}</span><span className={`project-state-badge${isInProgress ? ' is-progress' : ''}${isArchitecture ? ' is-architecture' : ''}`}>{stateLabel}</span></div>
        <div className="card-title-row"><h3>{project.name}</h3><span>{String(index + 1).padStart(2, '0')}</span></div>
        {listing.subtitle && <p className="project-card-subtitle">{listing.subtitle}</p>}
        <p className="tagline">{listing.what}</p>
        <dl className="compact-project-facts"><div><dt>MY ROLE</dt><dd>{project.proofCompetencies?.slice(0, 3).join(' · ') ?? listing.role}</dd></div></dl>
        <div className="compact-project-tech">
          <span className="meta-label">CORE TECH</span>
          <div className="chip-row">{(project.techHighlights ?? project.techStack).slice(0, 4).map((tech) => <TechChip label={tech} key={tech} />)}</div>
        </div>
        <div className="compact-project-actions">
          <Link className="compact-project-primary" to={`/projects/${project.slug}`} aria-label={`${project.name} Case Study 보기`}>VIEW CASE STUDY <span>→</span></Link>
          {project.deploy.url && !project.deploy.placeholder && <a href={project.deploy.url} target="_blank" rel="noreferrer" aria-label={`${project.name} Live Service 새 창에서 열기`}>LIVE <span>↗</span></a>}
          {project.github.url && !project.github.placeholder && <a href={project.github.url} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub 새 창에서 열기`}>GITHUB <span>↗</span></a>}
        </div>
      </div>
    </Reveal>
  )
}
