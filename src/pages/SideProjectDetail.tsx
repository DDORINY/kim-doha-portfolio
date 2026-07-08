import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import TechIcon, { TechChip } from '../components/TechIcon'
import { getSideProject } from '../data/sideProjects'

export default function SideProjectDetail() {
  const { slug } = useParams()
  const project = getSideProject(slug)
  if (!project) return <section className="section empty-state"><h1>프로젝트를 찾을 수 없습니다.</h1><Link className="button primary" to="/projects">프로젝트 목록</Link></section>

  const sectionIds = [
    project.note && 'background',
    project.role?.length && 'role',
    project.features?.length && 'features',
    project.tags?.length && 'stack',
    project.troubleshooting?.length && 'trouble',
    project.retrospective && 'retrospect',
  ].filter((id): id is string => Boolean(id))
  const num = (id: string) => String(sectionIds.indexOf(id) + 1).padStart(2, '0')

  return (
    <article className="detail-page side-detail-page" style={{ '--accent': project.accent ?? '#8c83ff' } as React.CSSProperties}>
      <header className="detail-hero section">
        <div className="container">
          <Link className="back-link" to="/projects">← Projects</Link>
          <div className="detail-title">
            <div>
              <span className="eyebrow">SIDE PROJECT{project.status === 'in-progress' ? ' · 개발 중' : ''}</span>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
            </div>
            <div className="detail-actions">
              <a className="resource-link" href={project.url} target="_blank" rel="noreferrer"><TechIcon name={project.linkLabel ?? '사이트 바로가기'} />{project.linkLabel ?? '사이트 바로가기'}<span>↗</span></a>
              {project.github && project.github !== project.url && (
                <a className="resource-link" href={project.github} target="_blank" rel="noreferrer"><TechIcon name="GitHub" />GitHub 저장소<span>↗</span></a>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="container side-detail-layout">
        <div className="detail-content">
          {project.image && (
            <Reveal as="div" className="side-detail-image"><img src={project.image} alt={`${project.name} 대표 이미지`} /></Reveal>
          )}
          {project.note && (
            <Reveal as="section" id="background" className="detail-section"><span className="section-number">{num('background')} / BACKGROUND</span><h2>개발 배경</h2><p>{project.note}</p></Reveal>
          )}
          {project.role?.length ? (
            <Reveal as="section" id="role" className="detail-section"><span className="section-number">{num('role')} / MY ROLE</span><h2>담당 역할</h2><ul className="check-list">{project.role.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
          ) : null}
          {project.features?.length ? (
            <Reveal as="section" id="features" className="detail-section"><span className="section-number">{num('features')} / FEATURES</span><h2>주요 기능</h2><div className="feature-grid">{project.features.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3></div>)}</div></Reveal>
          ) : null}
          {project.tags?.length ? (
            <Reveal as="section" id="stack" className="detail-section"><span className="section-number">{num('stack')} / TECH STACK</span><h2>기술 스택</h2><div className="large-chip-row">{project.tags.map((tech) => <TechChip label={tech} key={tech} />)}</div></Reveal>
          ) : null}
          {project.troubleshooting?.length ? (
            <Reveal as="section" id="trouble" className="detail-section"><span className="section-number">{num('trouble')} / PROBLEM SOLVING</span><h2>문제 해결 경험</h2><div className="trouble-list">{project.troubleshooting.map((item) => <div className="trouble-card" key={item.title}><h3>{item.title}</h3><dl><div><dt>Situation</dt><dd>{item.situation}</dd></div><div><dt>Solution</dt><dd>{item.solution}</dd></div><div><dt>Result</dt><dd>{item.result}</dd></div></dl></div>)}</div></Reveal>
          ) : null}
          {project.retrospective && (
            <Reveal as="section" id="retrospect" className="detail-section"><span className="section-number">{num('retrospect')} / RETROSPECTIVE</span><h2>회고</h2><blockquote>{project.retrospective}</blockquote></Reveal>
          )}
          <div className="detail-bottom"><Link className="button secondary" to="/projects">← 프로젝트 목록</Link></div>
        </div>
      </div>
    </article>
  )
}
