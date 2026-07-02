import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card" style={{ '--accent': project.accent } as React.CSSProperties}>
      <div className="card-topline"><span>0{index + 1}</span><span>{project.type}</span></div>
      <h3>{project.name}</h3>
      <p className="tagline">{project.tagline}</p>
      <div className="card-meta">
        <div><span className="meta-label">ROLE</span><p>{project.role.slice(0, 2).join(' · ')}</p></div>
        <div><span className="meta-label">STACK</span><div className="chip-row">{project.techStack.slice(0, 4).map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div></div>
      </div>
      <Link className="text-link" to={`/projects/${project.slug}`} aria-label={`${project.name} 상세 보기`}>프로젝트 상세 보기 <span>↗</span></Link>
    </article>
  )
}
