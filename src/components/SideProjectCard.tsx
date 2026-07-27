import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { sideProjectListingMeta } from '../data/projectListing'
import type { SideProject } from '../data/sideProjects'
import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'
import { TechChip } from './TechIcon'

export default function SideProjectCard({ project, variant = 'default' }: { project: SideProject; variant?: 'default' | 'listing' }) {
  if (variant === 'listing') {
    const listing = sideProjectListingMeta[project.slug]
    const isInProgress = project.status === 'in-progress'

    return (
      <Reveal as="article" className={`side-project-card projects-side-card${isInProgress ? ' is-in-progress' : ''}`} style={{ '--accent': project.accent } as CSSProperties}>
        {project.image && (
          <div className="side-project-image">
            <ImageWithFallback src={project.image} alt={`${project.name} 대표 이미지`} loading="lazy" fallbackLabel="대표 이미지 준비 중" />
            {isInProgress && <span className="project-preview-status">IN PROGRESS</span>}
          </div>
        )}
        <div className="projects-side-card-body">
          <div className="side-project-head">
            <h3>{project.name}</h3>
            <span className={`project-state-badge${isInProgress ? ' is-progress' : ''}`}>{isInProgress ? '진행 중' : '완료'}</span>
          </div>
          <p className="projects-side-description">{project.description}</p>
          {isInProgress ? (
            <dl className="project-progress-facts side-progress-facts">
              <div><dt>CURRENT STATUS</dt><dd>{listing?.currentStatus}</dd></div>
              <div><dt>MY CURRENT SCOPE</dt><dd>{listing?.currentScope}</dd></div>
              <div><dt>NEXT MILESTONE</dt><dd>{listing?.nextMilestone}</dd></div>
            </dl>
          ) : (
            <div className="side-project-proof"><span className="meta-label">PROOF / LEARNING</span><p>{listing?.proof}</p></div>
          )}
          {project.tags?.length ? <div className="side-project-tags">{project.tags.slice(0, 4).map((tag) => <TechChip label={tag} className="side-project-tag" key={tag} />)}</div> : null}
          <div className="projects-side-actions">
            <Link to={`/side-projects/${project.slug}`}>DETAIL <span>→</span></Link>
            {project.url && <a href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.name} 서비스 또는 저장소 새 창에서 열기`}>{project.status === 'in-progress' ? 'PROJECT' : 'LIVE'} <span>↗</span></a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub 새 창에서 열기`}>GITHUB <span>↗</span></a>}
          </div>
        </div>
      </Reveal>
    )
  }

  return (
    <Reveal as={Link} className="side-project-card" to={`/side-projects/${project.slug}`} aria-label={`${project.name} 상세 보기`}>
      {project.image && (
        <div className="side-project-image">
          <ImageWithFallback src={project.image} alt={`${project.name} 대표 이미지`} loading="lazy" fallbackLabel="대표 이미지 준비 중" />
        </div>
      )}
      <div className="side-project-head">
        <h3>{project.name}</h3>
        {project.status === 'in-progress' && <span className="status-badge">개발 중</span>}
      </div>
      <p>{project.description}</p>
      {(project.proofCompetencies?.length || project.proofEvidence?.length) ? (
        <div className="project-proof-list">
          {project.proofCompetencies?.length ? <div><span className="meta-label">핵심 역량</span><p>{project.proofCompetencies.join(' · ')}</p></div> : null}
          {project.proofEvidence?.length ? <div><span className="meta-label">대표 증거</span><p>{project.proofEvidence.join(' · ')}</p></div> : null}
        </div>
      ) : null}
      {project.tags?.length ? <div className="side-project-tags">{project.tags.map((tag) => <TechChip label={tag} className="side-project-tag" key={tag} />)}</div> : null}
      <span className="side-project-link">상세 보기 →</span>
    </Reveal>
  )
}
