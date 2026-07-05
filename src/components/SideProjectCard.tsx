import type { SideProject } from '../data/sideProjects'

export default function SideProjectCard({ project }: { project: SideProject }) {
  const linkLabel = project.linkLabel ?? '배포 사이트 바로가기'
  return (
    <a className="side-project-card" href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.name} ${linkLabel}`}>
      <div className="side-project-head">
        <h4>{project.name}</h4>
        {project.status === 'in-progress' && <span className="status-badge">개발 중</span>}
      </div>
      <p>{project.description}</p>
      {project.tags?.length ? (
        <div className="side-project-tags">
          {project.tags.map((tag) => <span className="side-project-tag" key={tag}>{tag}</span>)}
        </div>
      ) : null}
      <span className="side-project-link">{linkLabel} ↗</span>
    </a>
  )
}
