import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import ImageWithFallback from '../components/ImageWithFallback'
import ProjectDetailNav from '../components/project-detail/ProjectDetailNav'
import ProjectPager from '../components/project-detail/ProjectPager'
import ProjectResourceLink from '../components/project-detail/ProjectResourceLink'
import Reveal from '../components/Reveal'
import { TechChip } from '../components/TechIcon'
import {
  getAdjacentSideProjects,
  getFeatureGroups,
  getProjectStatus,
  getSideProjectEvidence,
  sideDetailSections,
  splitRetrospective,
} from '../data/projectDetail'
import { getSideProject } from '../data/sideProjects'

export default function SideProjectDetail() {
  const { slug } = useParams()
  const project = getSideProject(slug)
  if (!project) return <section className="section empty-state"><h1>프로젝트를 찾을 수 없습니다.</h1><Link className="button primary" to="/projects">프로젝트 목록</Link></section>

  const evidence = getSideProjectEvidence(project)
  const features = getFeatureGroups(project.features ?? [])
  const retrospective = splitRetrospective(project.retrospective)
  const adjacent = getAdjacentSideProjects(project.slug)
  const team = project.note?.includes('3인 팀') ? '3인 팀 프로젝트' : '개인 프로젝트'
  const sections = sideDetailSections.filter((section) => {
    if (section.id === 'features') return features.length > 0
    if (section.id === 'architecture') return Boolean(project.tags?.length)
    if (section.id === 'evidence') return Boolean(project.image || evidence.length || project.url || project.github)
    if (section.id === 'problem-solving') return Boolean(project.troubleshooting?.length)
    if (section.id === 'retrospective') return retrospective.length > 0
    return true
  })

  return (
    <article className="detail-page unified-detail-page side-detail-page" style={{ '--accent': project.accent ?? '#8c83ff' } as CSSProperties}>
      <header className="detail-hero section" aria-labelledby="side-project-detail-title">
        <div className="container">
          <Link className="back-link" to="/projects"><span aria-hidden="true">←</span> Projects</Link>
          <div className="detail-hero-grid">
            <div className="detail-hero-copy">
              <div className="detail-status-line"><span>{getProjectStatus(project)}</span><small>SIDE PROJECT</small></div>
              <h1 id="side-project-detail-title">{project.name}</h1>
              <p>{project.description}</p>
              <dl className="detail-hero-meta">
                <div><dt>TYPE</dt><dd>Side Project</dd></div>
                <div><dt>TEAM</dt><dd>{team}</dd></div>
                {project.role?.length ? <div><dt>MY ROLE</dt><dd>{project.role.slice(0, 2).join(' · ')}</dd></div> : null}
                <div><dt>STATUS</dt><dd>{getProjectStatus(project)}</dd></div>
              </dl>
              <div className="detail-actions"><ProjectResourceLink label={project.linkLabel ?? 'Live / Project'} url={project.url} />{project.github && project.github !== project.url && <ProjectResourceLink label={project.githubLabel ?? 'GitHub 저장소'} url={project.github} />}</div>
            </div>
            <div className="detail-hero-visual">
              {project.image ? <ImageWithFallback src={project.image} alt={`${project.name} 대표 화면`} loading="eager" fallbackLabel={project.name} /> : <div className="detail-visual-fallback" role="img" aria-label={`${project.name} 프로젝트 요약`}><span>SIDE PROJECT</span><strong>{getProjectStatus(project)}</strong></div>}
            </div>
          </div>
        </div>
      </header>

      <div className="container detail-layout side-detail-layout">
        <ProjectDetailNav sections={sections} />
        <div className="detail-content">
          <Reveal as="section" id="overview" className="detail-section detail-overview-section">
            <span className="section-number">02 / OVERVIEW</span><h2>프로젝트 개요</h2>
            <div className="detail-overview-grid">
              <div className="detail-overview-document"><div><span>개발 배경과 목표</span><p>{project.note ?? project.description}</p></div></div>
              <div className="detail-overview-scope"><span>담당 역할</span>{project.role?.length ? <ul>{project.role.map((item) => <li key={item}>{item}</li>)}</ul> : <p>{project.description}</p>}</div>
            </div>
          </Reveal>

          {features.length > 0 && <Reveal as="section" id="features" className="detail-section"><span className="section-number">03 / KEY FEATURES</span><h2>핵심 기능</h2><div className="feature-grid detail-feature-grid">{features.map((feature, index) => <article key={`${feature.title}-${index}`}><span>{String(index + 1).padStart(2, '0')}</span><h3>{feature.title}</h3>{feature.description && <p>{feature.description}</p>}</article>)}</div></Reveal>}

          {project.tags?.length ? <Reveal as="section" id="architecture" className="detail-section detail-architecture-section"><span className="section-number">04 / TECHNICAL NOTES</span><h2>기술 구조와 구현</h2><div className="detail-stack-summary"><span>CORE STACK</span><div className="large-chip-row">{project.tags.map((tech) => <TechChip label={tech} key={tech} />)}</div></div>{evidence[0] && <div className="side-technical-note"><span>IMPLEMENTED FLOW</span><p>{evidence[0].value}</p></div>}</Reveal> : null}

          {(project.image || evidence.length > 0 || project.url || project.github) && <Reveal as="section" id="evidence" className="detail-section detail-evidence-section"><span className="section-number">05 / EVIDENCE & SCREENS</span><h2>구현 결과와 화면</h2>{evidence.length > 0 && <div className="evidence-grid">{evidence.map((item) => <article className="evidence-card" key={`${item.label}-${item.value}`}><span className="evidence-card-label">{item.label}</span><strong>{item.value}</strong></article>)}</div>}{project.image && <figure className="detail-evidence-image"><ImageWithFallback src={project.image} alt={`${project.name} 구현 화면`} loading="lazy" fallbackLabel={project.name} /><figcaption>{project.description}</figcaption></figure>}<div className="detail-resources-block"><h3>프로젝트 자료</h3><div className="resource-grid"><ProjectResourceLink label={project.linkLabel ?? 'Live / Project'} url={project.url} />{project.github && project.github !== project.url && <ProjectResourceLink label={project.githubLabel ?? 'GitHub 저장소'} url={project.github} />}</div></div></Reveal>}

          {project.troubleshooting?.length ? <Reveal as="section" id="problem-solving" className="detail-section"><span className="section-number">06 / PROBLEM SOLVING</span><h2>문제 해결 경험</h2><div className="trouble-list">{project.troubleshooting.slice(0, 4).map((item) => <article className="trouble-card" key={item.title}><h3>{item.title}</h3><dl><div><dt>문제</dt><dd>{item.situation}</dd></div><div><dt>원인과 해결</dt><dd>{item.solution}</dd></div><div><dt>결과</dt><dd>{item.result}</dd></div></dl></article>)}</div></Reveal> : null}

          {retrospective.length > 0 && <Reveal as="section" id="retrospective" className="detail-section detail-retrospective-section"><span className="section-number">07 / RETROSPECTIVE</span><h2>회고</h2><div className="retrospective-grid">{retrospective.map((item) => <article key={item.label}><span>{item.label}</span><p>{item.value}</p></article>)}</div></Reveal>}

          <ProjectPager previous={adjacent.previous} next={adjacent.next} side />
        </div>
      </div>
    </article>
  )
}
