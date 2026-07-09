import { Link } from 'react-router-dom'
import type { SideProject } from '../data/sideProjects'
import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'
import { TechChip } from './TechIcon'

export default function SideProjectCard({ project }: { project: SideProject }) {
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
      {project.tags?.length ? (
        <div className="side-project-tags">
          {project.tags.map((tag) => <TechChip label={tag} className="side-project-tag" key={tag} />)}
        </div>
      ) : null}
      <span className="side-project-link">상세 보기 →</span>
    </Reveal>
  )
}
