import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { projectListingMeta } from '../data/projectListing'
import { projectInterviewEvidence } from '../data/interviewEvidence'
import type { Project } from '../data/projects'
import ImageWithFallback from './ImageWithFallback'
import ProjectFlow from './ProjectFlow'
import Reveal from './Reveal'
import { TechChip } from './TechIcon'

function getPreview(project: Project) {
  if (project.slug === 'staccato') return project.screenshots[1] ?? project.screenshots[0]
  return project.screenshots[0]
}

export default function ProjectCaseStudy({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const listing = projectListingMeta[project.slug]
  const preview = getPreview(project)
  const architectureStatus = listing.currentStatus?.includes('ARCHITECTURE')
  const statusLabel = architectureStatus ? 'ARCHITECTURE' : listing.maturity === 'in-progress' ? 'IN PROGRESS' : 'COMPLETED'
  const interviewEvidence = projectInterviewEvidence[project.slug]

  return (
    <Reveal
      as="article"
      className={`projects-case-study${featured ? ' is-featured' : ''}`}
      style={{ '--accent': project.accent } as CSSProperties}
      delay={index * 80}
    >
      <div className={`case-study-visual${preview ? ' has-preview' : ' has-flow'}`}>
        {preview ? (
          <div className="case-study-preview">
            <div className="case-study-window-bar" aria-hidden="true"><span /><span /><span /><small>PROJECT / {String(index + 1).padStart(2, '0')}</small></div>
            <ImageWithFallback src={preview.src} alt={preview.alt} loading={featured ? 'eager' : 'lazy'} fallbackLabel={`${project.name} 프로젝트 화면`} />
          </div>
        ) : <ProjectFlow project={project} compact />}
        {featured && <ProjectFlow project={project} compact />}
      </div>
      <div className="case-study-body">
        <div className="case-study-topline">
          <span>{featured ? 'TEAM PROJECT' : project.type}</span>
          <strong className={`case-study-status is-${architectureStatus ? 'architecture' : listing.maturity}`}>{statusLabel}</strong>
        </div>
        {featured && <p className="case-study-period">{project.period.replace(' ~ ', ' — ')}</p>}
        <h3>{project.name}</h3>
        {listing.subtitle && <p className="case-study-subtitle">{listing.subtitle}</p>}
        {featured ? (
          <dl className="case-study-facts">
            <div><dt>SERVICE</dt><dd>{listing.what}</dd></div>
            <div><dt>MY CONTRIBUTION</dt><dd className="case-study-contributions">{project.role.slice(0, 6).map((item) => <span key={item}>{item}</span>)}</dd></div>
            <div><dt>EVIDENCE</dt><dd className="case-study-evidence">{listing.evidence.map((item) => <span key={item}>{item}</span>)}</dd></div>
          </dl>
        ) : <p className="case-study-selected-summary">{listing.what}</p>}
        {interviewEvidence && <div className="case-study-decision"><span>KEY DECISION</span><strong>{interviewEvidence.keyDecision}</strong></div>}
        <div className="case-study-tech">
          <span className="meta-label">CORE TECH</span>
          <div className="chip-row">{(project.techHighlights ?? project.techStack).slice(0, 4).map((tech) => <TechChip label={tech} key={tech} />)}</div>
        </div>
        <div className="case-study-actions">
          <Link className="case-study-primary" to={`/projects/${project.slug}`}>VIEW CASE STUDY <span>→</span></Link>
          {featured && project.deploy.url && !project.deploy.placeholder && <a href={project.deploy.url} target="_blank" rel="noreferrer" aria-label={`${project.name} Live Service 새 창에서 열기`}>LIVE SERVICE <span>↗</span></a>}
          {featured && project.github.url && !project.github.placeholder && <a href={project.github.url} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub 새 창에서 열기`}>GITHUB <span>↗</span></a>}
        </div>
      </div>
    </Reveal>
  )
}
