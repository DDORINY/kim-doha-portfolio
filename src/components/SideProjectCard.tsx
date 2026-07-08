import { Link } from 'react-router-dom'
import type { SideProject } from '../data/sideProjects'
import Reveal from './Reveal'

export default function SideProjectCard({ project }: { project: SideProject }) {
  return (
    <Reveal as={Link} className="side-project-card" to={`/side-projects/${project.slug}`} aria-label={`${project.name} 상세 보기`}>
      {project.image && (
        <div className="side-project-image">
          <img src={project.image} alt={`${project.name} 대표 이미지`} loading="lazy" />
        </div>
      )}
      <div className="side-project-head">
        <h3>{project.name}</h3>
        {project.status === 'in-progress' && <span className="status-badge">개발 중</span>}
      </div>
      <p>{project.description}</p>
      {project.tags?.length ? (
        <div className="side-project-tags">
          {project.tags.map((tag) => <span className="side-project-tag" key={tag}>{tag}</span>)}
        </div>
      ) : null}
      <span className="side-project-link">상세 보기 →</span>
    </Reveal>
  )
}
