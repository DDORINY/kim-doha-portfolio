import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { projectListingMeta } from '../data/projectListing'
import type { Project } from '../data/projects'
import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'
import { TechChip } from './TechIcon'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const listing = projectListingMeta[project.slug]
  const isInProgress = project.status === 'in-progress'
  const preview = project.slug === 'staccato' ? (project.screenshots[1] ?? project.screenshots[0]) : project.screenshots[0]

  return (
    <Reveal
      as="article"
      className={`project-card projects-compact-card${isInProgress ? ' is-in-progress' : ''}`}
      style={{ '--accent': project.accent } as CSSProperties}
      delay={index * 70}
    >
      {preview ? (
        <div className="project-card-image">
          <ImageWithFallback src={preview.src} alt={preview.alt} loading="lazy" fallbackLabel="대표 이미지 준비 중" />
          {isInProgress && <span className="project-preview-status">IN PROGRESS</span>}
        </div>
      ) : (
        <div className="project-card-status-preview" role="img" aria-label={`${project.name} 진행 상태 요약`}>
          <span>IN PROGRESS</span><strong>{listing.currentStatus ?? 'IN DEVELOPMENT'}</strong><small>{project.period}</small>
        </div>
      )}
      <div className="projects-compact-body">
        <div className="card-topline"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.type}</span></div>
        <div className="card-title-row"><h3>{project.name}</h3><span className={`project-state-badge${isInProgress ? ' is-progress' : ''}`}>{isInProgress ? '진행 중' : '완료'}</span></div>
        {listing.subtitle && <p className="project-card-subtitle">{listing.subtitle}</p>}
        <p className="tagline">{listing.what}</p>
        {isInProgress ? (
          <dl className="project-progress-facts">
            <div><dt>CURRENT STATUS</dt><dd>{listing.currentStatus}</dd></div>
            <div><dt>MY CURRENT SCOPE</dt><dd>{listing.currentScope}</dd></div>
            <div><dt>NEXT MILESTONE</dt><dd>{listing.nextMilestone}</dd></div>
          </dl>
        ) : (
          <dl className="compact-project-facts">
            <div><dt>MY ROLE</dt><dd>{listing.role}</dd></div>
            <div><dt>EVIDENCE</dt><dd>{listing.evidence.join(' · ')}</dd></div>
          </dl>
        )}
        <div className="compact-project-tech">
          <span className="meta-label">CORE TECH</span>
          <div className="chip-row">{(project.techHighlights ?? project.techStack).slice(0, 4).map((tech) => <TechChip label={tech} key={tech} />)}</div>
        </div>
        <div className="compact-project-actions">
          <Link className="compact-project-primary" to={`/projects/${project.slug}`} aria-label={`${project.name} Case Study 보기`}>VIEW CASE STUDY <span>→</span></Link>
          {!isInProgress && project.deploy.url && !project.deploy.placeholder && <a href={project.deploy.url} target="_blank" rel="noreferrer" aria-label={`${project.name} Live Service 새 창에서 열기`}>LIVE <span>↗</span></a>}
          {!isInProgress && project.github.url && !project.github.placeholder && <a href={project.github.url} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub 새 창에서 열기`}>GITHUB <span>↗</span></a>}
        </div>
      </div>
    </Reveal>
  )
}
