import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'
import { TechChip } from './TechIcon'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal as="article" className="project-card" style={{ '--accent': project.accent } as React.CSSProperties}>
      {project.screenshots[0] && (
        <div className="project-card-image">
          <ImageWithFallback src={project.screenshots[0].src} alt={project.screenshots[0].alt} loading="lazy" fallbackLabel="대표 이미지 준비 중" />
        </div>
      )}
      <div className="card-topline"><span>0{index + 1}</span><span>{project.type}</span></div>
      <div className="card-title-row"><h3>{project.name}</h3>{project.status === 'in-progress' && <span className="status-badge">개발 중</span>}</div>
      <p className="tagline">{project.tagline}</p>
      {project.highlights?.length ? (
        <div className="highlight-row">
          {project.highlights.slice(0, 6).map((item) => <TechChip label={item} className="highlight-chip" key={item} />)}
        </div>
      ) : null}
      {(project.proofCompetencies?.length || project.proofEvidence?.length) ? (
        <div className="project-proof-list">
          {project.proofCompetencies?.length ? <div><span className="meta-label">핵심 역량</span><p>{project.proofCompetencies.join(' · ')}</p></div> : null}
          {project.proofEvidence?.length ? <div><span className="meta-label">대표 증거</span><p>{project.proofEvidence.join(' · ')}</p></div> : null}
        </div>
      ) : null}
      <div className="card-meta">
        <div><span className="meta-label">ROLE</span><p>{project.role.slice(0, 2).join(' · ')}</p></div>
        <div><span className="meta-label">STACK</span><div className="chip-row">{project.techStack.slice(0, 4).map((tech) => <TechChip label={tech} key={tech} />)}</div></div>
      </div>
      <div className="card-footer">
        <Link className="text-link" to={`/projects/${project.slug}`} aria-label={`${project.name} 상세 보기`}>프로젝트 상세 보기 <span>↗</span></Link>
        {project.deploy.url && !project.deploy.placeholder && (
          <a className="deploy-link" href={project.deploy.url} target="_blank" rel="noreferrer" aria-label={`${project.name} 배포 사이트로 이동`}>배포 사이트 바로가기 <span>↗</span></a>
        )}
        {project.github.url && !project.github.placeholder && (
          <a className="deploy-link" href={project.github.url} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub 저장소로 이동`}>GitHub 저장소 <span>↗</span></a>
        )}
      </div>
    </Reveal>
  )
}
