import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { projectListingMeta } from '../data/projectListing'
import type { Project } from '../data/projects'
import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'
import { TechChip } from './TechIcon'

function getPreview(project: Project) {
  if (project.slug === 'staccato') return project.screenshots[1] ?? project.screenshots[0]
  return project.screenshots[0]
}

export default function ProjectCaseStudy({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const listing = projectListingMeta[project.slug]
  const preview = getPreview(project)

  return (
    <Reveal
      as="article"
      className={`projects-case-study${featured ? ' is-featured' : ''}`}
      style={{ '--accent': project.accent } as CSSProperties}
      delay={index * 80}
    >
      <div className="case-study-preview">
        <div className="case-study-window-bar" aria-hidden="true"><span /><span /><span /><small>PROJECT / {String(index + 1).padStart(2, '0')}</small></div>
        {preview && <ImageWithFallback src={preview.src} alt={preview.alt} loading="lazy" fallbackLabel={`${project.name} 프로젝트 화면`} />}
      </div>
      <div className="case-study-body">
        <div className="case-study-topline">
          <span>{project.type}</span>
          <strong>COMPLETED</strong>
        </div>
        <h3>{project.name}</h3>
        {listing.subtitle && <p className="case-study-subtitle">{listing.subtitle}</p>}
        <dl className="case-study-facts">
          <div><dt>WHAT</dt><dd>{listing.what}</dd></div>
          <div><dt>MY ROLE</dt><dd>{listing.role}</dd></div>
          <div><dt>EVIDENCE</dt><dd>{listing.evidence.join(' · ')}</dd></div>
        </dl>
        <div className="case-study-tech">
          <span className="meta-label">CORE TECH</span>
          <div className="chip-row">{(project.techHighlights ?? project.techStack).slice(0, 4).map((tech) => <TechChip label={tech} key={tech} />)}</div>
        </div>
        <div className="case-study-actions">
          <Link className="case-study-primary" to={`/projects/${project.slug}`}>VIEW CASE STUDY <span>→</span></Link>
          {project.deploy.url && !project.deploy.placeholder && <a href={project.deploy.url} target="_blank" rel="noreferrer" aria-label={`${project.name} Live Service 새 창에서 열기`}>LIVE SERVICE <span>↗</span></a>}
          {project.github.url && !project.github.placeholder && <a href={project.github.url} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub 새 창에서 열기`}>GITHUB <span>↗</span></a>}
        </div>
      </div>
    </Reveal>
  )
}
