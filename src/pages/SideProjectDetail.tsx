import { Link, useParams } from 'react-router-dom'
import TechIcon, { TechChip } from '../components/TechIcon'
import { getSideProject } from '../data/sideProjects'

export default function SideProjectDetail() {
  const { slug } = useParams()
  const project = getSideProject(slug)
  if (!project) return <section className="section empty-state"><h1>프로젝트를 찾을 수 없습니다.</h1><Link className="button primary" to="/projects">프로젝트 목록</Link></section>

  return (
    <section className="section page-section">
      <div className="container side-detail">
        <Link className="back-link" to="/projects">← Projects</Link>
        <span className="eyebrow">SIDE PROJECT{project.status === 'in-progress' ? ' · 개발 중' : ''}</span>
        <h1>{project.name}</h1>
        <p className="lead-copy">{project.description}</p>
        {project.image && (
          <div className="side-detail-image">
            <img src={project.image} alt={`${project.name} 대표 이미지`} />
          </div>
        )}
        {project.note && <p className="side-detail-note">{project.note}</p>}
        {project.tags?.length ? <div className="chip-row">{project.tags.map((tag) => <TechChip label={tag} key={tag} />)}</div> : null}
        <div className="detail-actions">
          <a className="resource-link" href={project.url} target="_blank" rel="noreferrer"><TechIcon name={project.linkLabel ?? '사이트 바로가기'} />{project.linkLabel ?? '사이트 바로가기'}<span>↗</span></a>
          {project.github && project.github !== project.url && (
            <a className="resource-link" href={project.github} target="_blank" rel="noreferrer"><TechIcon name="GitHub" />GitHub 저장소<span>↗</span></a>
          )}
        </div>
      </div>
    </section>
  )
}
