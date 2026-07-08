import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import Reveal from './Reveal'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal as="article" className="project-card" style={{ '--accent': project.accent } as React.CSSProperties}>
      {project.screenshots[0] && (
        <div className="project-card-image">
          <img src={project.screenshots[0].src} alt={project.screenshots[0].alt} loading="lazy" />
        </div>
      )}
      <div className="card-topline"><span>0{index + 1}</span><span>{project.type}</span></div>
      <h3>{project.name}</h3>
      <p className="tagline">{project.tagline}</p>
      {project.highlights?.length ? (
        <div className="highlight-row">
          {project.highlights.slice(0, 6).map((item) => <span className="highlight-chip" key={item}>{item}</span>)}
        </div>
      ) : null}
      <div className="card-meta">
        <div><span className="meta-label">ROLE</span><p>{project.role.slice(0, 2).join(' · ')}</p></div>
        <div><span className="meta-label">STACK</span><div className="chip-row">{project.techStack.slice(0, 4).map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div></div>
      </div>
      <div className="card-footer">
        <Link className="text-link" to={`/projects/${project.slug}`} aria-label={`${project.name} 상세 보기`}>프로젝트 상세 보기 <span>↗</span></Link>
        {project.deploy.url && !project.deploy.placeholder && (
          <a className="deploy-link" href={project.deploy.url} target="_blank" rel="noreferrer" aria-label={`${project.name} 배포 사이트로 이동`}>배포 사이트 바로가기 <span>↗</span></a>
        )}
      </div>
    </Reveal>
  )
}
