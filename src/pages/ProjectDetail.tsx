import { Link, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'

function ResourceLink({ label, url, placeholder }: { label: string; url?: string; placeholder?: boolean }) {
  return placeholder || !url ? <span className="resource-link disabled">{label}<small>자료 준비 중</small></span> : <a className="resource-link" href={url} target="_blank" rel="noreferrer">{label}<span>↗</span></a>
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <section className="section empty-state"><h1>프로젝트를 찾을 수 없습니다.</h1><Link className="button primary" to="/projects">프로젝트 목록</Link></section>

  return (
    <article className="detail-page" style={{ '--accent': project.accent } as React.CSSProperties}>
      <header className="detail-hero section"><div className="container"><Link className="back-link" to="/projects">← Projects</Link><div className="detail-title"><div><span className="eyebrow">{project.type} · {project.period}</span><h1>{project.name}</h1><p>{project.tagline}</p></div><div className="detail-actions"><ResourceLink {...project.deploy} /><ResourceLink {...project.github} /></div></div></div></header>
      <div className="container detail-layout">
        <aside className="detail-nav"><span>CONTENTS</span>{['overview','background','role','features','stack','flow','trouble','screens','docs','retrospect'].map((id, i) => <button type="button" onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })} aria-label={`${id} 섹션으로 이동`} key={id}>{String(i + 1).padStart(2, '0')}</button>)}</aside>
        <div className="detail-content">
          <section id="overview" className="detail-section"><span className="section-number">01 / OVERVIEW</span><h2>프로젝트 개요</h2><p className="lead-copy">{project.summary}</p></section>
          <section id="background" className="detail-section"><span className="section-number">02 / BACKGROUND</span><h2>개발 배경</h2><p>{project.background}</p></section>
          <section id="role" className="detail-section"><span className="section-number">03 / MY ROLE</span><h2>담당 역할</h2><ul className="check-list">{project.role.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section id="features" className="detail-section"><span className="section-number">04 / FEATURES</span><h2>주요 기능</h2><div className="feature-grid">{project.features.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3></div>)}</div></section>
          <section id="stack" className="detail-section"><span className="section-number">05 / TECH STACK</span><h2>기술 스택</h2><div className="large-chip-row">{project.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div></section>
          <section id="flow" className="detail-section"><span className="section-number">06 / SYSTEM FLOW</span><h2>시스템 구조와 서비스 흐름</h2><div className="system-flow">{project.systemFlow.map((step, index) => <div className="flow-step" key={step.label}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{step.label}</h3><p>{step.description}</p></div></div>)}</div>{project.slug === 'staccato' && <p className="security-note">보안을 위해 실제 인프라 IP와 내부 접속 정보는 공개하지 않습니다.</p>}</section>
          <section id="trouble" className="detail-section"><span className="section-number">07 / PROBLEM SOLVING</span><h2>문제 해결 경험</h2><div className="trouble-list">{project.troubleshooting.map((item) => <div className="trouble-card" key={item.title}><h3>{item.title}</h3><dl><div><dt>Situation</dt><dd>{item.situation}</dd></div><div><dt>Solution</dt><dd>{item.solution}</dd></div><div><dt>Result</dt><dd>{item.result}</dd></div></dl></div>)}</div></section>
          <section id="screens" className="detail-section"><span className="section-number">08 / SCREENS</span><h2>화면 캡처</h2><div className="screenshots">{project.screenshots.map((image) => <figure key={image.src}><img src={`${import.meta.env.BASE_URL}${image.src.replace(/^\//, '')}`} alt={image.alt} /><figcaption>{image.caption}</figcaption></figure>)}</div></section>
          <section id="docs" className="detail-section"><span className="section-number">09 / RESOURCES</span><h2>문서와 링크</h2><div className="resource-grid">{project.documents.map((doc) => <ResourceLink key={doc.label} {...doc} />)}<ResourceLink {...project.deploy} /><ResourceLink {...project.github} /></div></section>
          <section id="retrospect" className="detail-section"><span className="section-number">10 / RETROSPECTIVE</span><h2>회고</h2><blockquote>{project.retrospective}</blockquote></section>
          <div className="detail-bottom"><Link className="button secondary" to="/projects">← 프로젝트 목록</Link></div>
        </div>
      </div>
    </article>
  )
}
