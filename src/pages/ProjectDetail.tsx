import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { getProject } from '../data/projects'

function ResourceLink({ label, url, placeholder }: { label: string; url?: string; placeholder?: boolean }) {
  return placeholder || !url ? <span className="resource-link disabled">{label}<small>자료 준비 중</small></span> : <a className="resource-link" href={url} target="_blank" rel="noreferrer">{label}<span>↗</span></a>
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <section className="section empty-state"><h1>프로젝트를 찾을 수 없습니다.</h1><Link className="button primary" to="/projects">프로젝트 목록</Link></section>

  const baseIds = ['overview', 'background', 'role', 'features', 'stack', 'flow', 'trouble', 'screens', 'docs', 'retrospect'] as const
  const extrasAfter = (id: string) => project.extraSections?.filter((s) => s.insertAfter === id) ?? []
  const sectionIds = baseIds.flatMap((id) => [id, ...extrasAfter(id).map((s) => s.id)])
  const num = (id: string) => String(sectionIds.indexOf(id) + 1).padStart(2, '0')
  const ExtraSections = ({ after }: { after: string }) => <>{extrasAfter(after).map((s) => <Reveal as="section" id={s.id} className="detail-section" key={s.id}><span className="section-number">{num(s.id)} / {s.label}</span><h2>{s.heading}</h2><ul className="check-list">{s.items.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>)}</>

  return (
    <article className="detail-page" style={{ '--accent': project.accent } as React.CSSProperties}>
      <header className="detail-hero section"><div className="container"><Link className="back-link" to="/projects">← Projects</Link><div className="detail-title"><div><span className="eyebrow">{project.type}{project.period && !project.type.includes(project.period) ? ` · ${project.period}` : ''}</span><h1>{project.name}</h1><p>{project.tagline}</p></div><div className="detail-actions"><ResourceLink {...project.deploy} /><ResourceLink {...project.github} /></div></div></div></header>
      <div className="container detail-layout">
        <aside className="detail-nav"><span>CONTENTS</span>{sectionIds.map((id, i) => <button type="button" onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })} aria-label={`${id} 섹션으로 이동`} key={id}>{String(i + 1).padStart(2, '0')}</button>)}</aside>
        <div className="detail-content">
          <Reveal as="section" id="overview" className="detail-section"><span className="section-number">{num('overview')} / OVERVIEW</span><h2>프로젝트 개요</h2>{project.teamNote && <span className="team-note">{project.teamNote}</span>}<p className="lead-copy">{project.summary}</p>{project.resumeHighlight && (
            <div className="role-summary-card">
              <div><span className="meta-label">ROLE</span><p>{project.resumeHighlight.role}</p></div>
              <div><span className="meta-label">CONTRIBUTION</span><p>{project.resumeHighlight.contribution}</p></div>
              <div><span className="meta-label">ACHIEVEMENT</span><p>{project.resumeHighlight.achievement}</p></div>
            </div>
          )}</Reveal>
          <Reveal as="section" id="background" className="detail-section"><span className="section-number">{num('background')} / BACKGROUND</span><h2>개발 배경</h2><p>{project.background}</p></Reveal>
          <Reveal as="section" id="role" className="detail-section"><span className="section-number">{num('role')} / MY ROLE</span><h2>담당 역할</h2><ul className="check-list">{project.role.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
          <Reveal as="section" id="features" className="detail-section"><span className="section-number">{num('features')} / FEATURES</span><h2>주요 기능</h2><div className="feature-grid">{project.features.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3></div>)}</div></Reveal>
          <ExtraSections after="features" />
          <Reveal as="section" id="stack" className="detail-section"><span className="section-number">{num('stack')} / TECH STACK</span><h2>기술 스택</h2><div className="large-chip-row">{project.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div></Reveal>
          <ExtraSections after="stack" />
          <Reveal as="section" id="flow" className="detail-section"><span className="section-number">{num('flow')} / SYSTEM FLOW</span><h2>시스템 구조와 서비스 흐름</h2><div className="system-flow">{project.systemFlow.map((step, index) => <div className="flow-step" key={step.label}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{step.label}</h3><p>{step.description}</p></div></div>)}</div>{project.slug === 'staccato' && <p className="security-note">보안을 위해 실제 인프라 IP와 내부 접속 정보는 공개하지 않습니다.</p>}</Reveal>
          <ExtraSections after="flow" />
          <Reveal as="section" id="trouble" className="detail-section"><span className="section-number">{num('trouble')} / PROBLEM SOLVING</span><h2>문제 해결 경험</h2><div className="trouble-list">{project.troubleshooting.map((item) => <div className="trouble-card" key={item.title}><h3>{item.title}</h3><dl><div><dt>Situation</dt><dd>{item.situation}</dd></div><div><dt>Solution</dt><dd>{item.solution}</dd></div><div><dt>Result</dt><dd>{item.result}</dd></div></dl></div>)}</div></Reveal>
          <ExtraSections after="trouble" />
          <Reveal as="section" id="screens" className="detail-section"><span className="section-number">{num('screens')} / SCREENS</span><h2>화면 캡처</h2><div className="screenshots">{project.screenshots.map((image) => <figure key={image.src}><img src={`${import.meta.env.BASE_URL}${image.src.replace(/^\//, '')}`} alt={image.alt} /><figcaption>{image.caption}</figcaption></figure>)}</div></Reveal>
          <Reveal as="section" id="docs" className="detail-section"><span className="section-number">{num('docs')} / RESOURCES</span><h2>문서와 링크</h2><div className="resource-grid">{project.documents.map((doc) => <ResourceLink key={doc.label} {...doc} />)}<ResourceLink {...project.deploy} /><ResourceLink {...project.github} /></div></Reveal>
          <Reveal as="section" id="retrospect" className="detail-section"><span className="section-number">{num('retrospect')} / RETROSPECTIVE</span><h2>회고</h2><blockquote>{project.retrospective}</blockquote></Reveal>
          <div className="detail-bottom"><Link className="button secondary" to="/projects">← 프로젝트 목록</Link></div>
        </div>
      </div>
    </article>
  )
}
