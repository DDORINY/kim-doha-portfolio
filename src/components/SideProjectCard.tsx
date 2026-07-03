import type { SideProject } from '../data/sideProjects'

export default function SideProjectCard({ project }: { project: SideProject }) {
  return (
    <a className="side-project-card" href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.name} 배포 사이트로 이동`}>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <span className="side-project-link">배포 사이트 바로가기 ↗</span>
    </a>
  )
}
