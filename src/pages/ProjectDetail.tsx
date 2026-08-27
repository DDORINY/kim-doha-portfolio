import { useState, type CSSProperties } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import ImageWithFallback from '../components/ImageWithFallback'
import MermaidDiagram from '../components/MermaidDiagram'
import ProjectAreaPanel from '../components/project-detail/ProjectAreaPanel'
import ProjectAreaTabs from '../components/project-detail/ProjectAreaTabs'
import ProjectEngineeringEvidence from '../components/project-detail/ProjectEngineeringEvidence'
import ProjectDetailNav from '../components/project-detail/ProjectDetailNav'
import ProjectPager from '../components/project-detail/ProjectPager'
import ProjectResourceLink from '../components/project-detail/ProjectResourceLink'
import Reveal from '../components/Reveal'
import { TechChip } from '../components/TechIcon'
import {
  getAdjacentProjects,
  getFeatureGroups,
  getProjectEvidence,
  getProjectHeroImage,
  getProjectStatus,
  engineeringDetailSections,
  mainDetailSections,
  splitRetrospective,
} from '../data/projectDetail'
import { projectListingMeta } from '../data/projectListing'
import { projectInterviewEvidence } from '../data/interviewEvidence'
import { getProject, type ProjectAreaKey } from '../data/projects'

const projectAreaOrder: ProjectAreaKey[] = ['frontend', 'backend', 'ai', 'database', 'infrastructure']

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  const [searchParams, setSearchParams] = useSearchParams()
  const projectAreas = [...(project?.projectAreas ?? [])].sort((a, b) => projectAreaOrder.indexOf(a.id) - projectAreaOrder.indexOf(b.id))
  const urlAreaId = searchParams.get('area') as ProjectAreaKey | null
  const initialAreaId = (urlAreaId && projectAreas.some((area) => area.id === urlAreaId) ? urlAreaId : projectAreas[0]?.id) as ProjectAreaKey
  const [activeAreaId, setActiveAreaId] = useState<ProjectAreaKey>(initialAreaId)

  if (!project) return <section className="section empty-state"><h1>프로젝트를 찾을 수 없습니다.</h1><Link className="button primary" to="/projects">프로젝트 목록</Link></section>

  const listing = projectListingMeta[project.slug]
  const heroImage = getProjectHeroImage(project)
  const featureGroups = getFeatureGroups(project.features)
  const evidence = getProjectEvidence(project)
  const activeArea = projectAreas.find((area) => area.id === activeAreaId) ?? projectAreas[0]
  const architecture = project.architectureFlow?.length
    ? project.architectureFlow
    : project.systemFlow.map((step) => ({ label: step.label, sub: step.description }))
  const evidenceSections = (project.extraSections ?? []).filter((section) => ['qa', 'achievements', 'progress'].includes(section.id))
  const retrospective = splitRetrospective(project.retrospective)
  const screenshots = project.screenshots.filter((image) => image.src)
  const resources = [
    ...project.documents.filter((resource) => resource.url),
    ...(project.deploy.url && !project.deploy.placeholder ? [project.deploy] : []),
    ...(project.github.url && !project.github.placeholder ? [project.github] : []),
  ]
  const adjacent = getAdjacentProjects(project.slug)
  const interviewEvidence = projectInterviewEvidence[project.slug]

  const handleAreaChange = (id: ProjectAreaKey) => {
    setActiveAreaId(id)
    const next = new URLSearchParams(searchParams)
    next.set('area', id)
    setSearchParams(next, { replace: true })
  }

  return (
    <article className="detail-page unified-detail-page" style={{ '--accent': project.accent } as CSSProperties}>
      <header className="detail-hero section" aria-labelledby="project-detail-title">
        <div className="container">
          <Link className="back-link" to="/projects"><span aria-hidden="true">←</span> Projects</Link>
          <div className="detail-hero-grid">
            <div className="detail-hero-copy">
              <div className="detail-status-line"><span>{getProjectStatus(project)}</span><small>{project.type}</small></div>
              <h1 id="project-detail-title">{project.name}</h1>
              <p>{project.tagline}</p>
              <dl className="detail-hero-meta">
                <div><dt>TYPE</dt><dd>{project.type}</dd></div>
                <div><dt>PERIOD</dt><dd>{project.period}</dd></div>
                {project.teamNote && <div><dt>TEAM / SCOPE</dt><dd>{project.teamNote}</dd></div>}
                <div><dt>MY ROLE</dt><dd>{listing.role}</dd></div>
                {interviewEvidence && <div><dt>KEY DECISION</dt><dd>{interviewEvidence.keyDecision}</dd></div>}
                {interviewEvidence && <div><dt>VERIFICATION</dt><dd>{interviewEvidence.verificationSummary}</dd></div>}
              </dl>
              <div className="detail-actions">
                {project.github.url && !project.github.placeholder && <ProjectResourceLink {...project.github} />}
                {project.deploy.url && !project.deploy.placeholder && <ProjectResourceLink {...project.deploy} />}
              </div>
            </div>
            <div className="detail-hero-visual">
              {heroImage ? <ImageWithFallback src={heroImage.src} alt={heroImage.alt} loading="eager" fallbackLabel={project.name} /> : <div className="detail-visual-fallback" role="img" aria-label={`${project.name} 프로젝트 요약`}><span>{project.type}</span><strong>{getProjectStatus(project)}</strong></div>}
              {heroImage?.caption && <span>{heroImage.caption}</span>}
            </div>
          </div>
        </div>
      </header>

      <div className="container detail-layout">
        <ProjectDetailNav sections={interviewEvidence ? engineeringDetailSections : mainDetailSections} />
        <div className="detail-content">
          <Reveal as="section" id="overview" className="detail-section detail-overview-section">
            <span className="section-number">02 / OVERVIEW</span><h2>프로젝트 개요</h2>
            <div className="detail-overview-grid">
              <div className="detail-overview-document">
                <div><span>해결하려는 문제</span><p>{project.background}</p></div>
                <div><span>프로젝트 목표와 구현 범위</span><p>{project.summary}</p></div>
              </div>
              <div className="detail-overview-scope">
                <span>나의 역할</span>
                <ul>{project.role.slice(0, 8).map((item) => <li key={item}>{item}</li>)}</ul>
                {project.resumeHighlight?.achievement && <div className="detail-highlight"><small>대표 성과</small><strong>{project.resumeHighlight.achievement}</strong></div>}
              </div>
            </div>
          </Reveal>

          <Reveal as="section" id="features" className="detail-section">
            <span className="section-number">03 / KEY FEATURES</span><h2>핵심 기능</h2>
            <div className="feature-grid detail-feature-grid">{featureGroups.map((feature, index) => <article key={`${feature.title}-${index}`}><span>{String(index + 1).padStart(2, '0')}</span><h3>{feature.title}</h3>{feature.description && <p>{feature.description}</p>}</article>)}</div>
          </Reveal>

          <Reveal as="section" id="architecture" className="detail-section detail-architecture-section">
            <span className="section-number">04 / TECHNICAL ARCHITECTURE</span><h2>기술 구조와 구현</h2>
            <div className="detail-stack-summary"><span>CORE STACK</span><div className="large-chip-row">{project.techStack.slice(0, 12).map((tech) => <TechChip label={tech} key={tech} />)}</div>{project.techStack.length > 12 && <details><summary>전체 기술 스택 보기</summary><div className="large-chip-row">{project.techStack.slice(12).map((tech) => <TechChip label={tech} key={tech} />)}</div></details>}</div>
            {project.architectureDiagram ? (
              <div className="detail-architecture-block detail-mermaid-block">
                <MermaidDiagram
                  chart={project.architectureDiagram.chart}
                  title={`${project.name} SYSTEM ARCHITECTURE`}
                  description={project.architectureDiagram.summary}
                  fallback={architecture}
                />
                <div className="architecture-key-flow"><span>KEY FLOW</span><strong>{project.architectureDiagram.keyFlow}</strong></div>
                <div className="architecture-notes">{project.architectureDiagram.notes.map((note) => <article key={note.label}><span>{note.label}</span><p>{note.text}</p></article>)}</div>
              </div>
            ) : (
              <div className="detail-architecture-block"><h3>시스템 아키텍처</h3><div className="architecture-diagram">{architecture.map((node, index) => <div className="architecture-node" key={`${node.label}-${index}`}><div className="architecture-box"><strong>{node.label}</strong>{node.sub && <span>{node.sub}</span>}</div>{index < architecture.length - 1 && <span className="architecture-arrow" aria-hidden="true">→</span>}</div>)}</div></div>
            )}
            {!project.architectureDiagram && project.aiPipeline?.length ? <div className="detail-architecture-block"><h3>AI 탐지 파이프라인</h3><div className="architecture-diagram">{project.aiPipeline.map((node, index) => <div className="architecture-node" key={node.label}><div className="architecture-box"><strong>{node.label}</strong>{node.sub && <span>{node.sub}</span>}</div>{index < project.aiPipeline!.length - 1 && <span className="architecture-arrow" aria-hidden="true">→</span>}</div>)}</div>{project.aiPipelineNote && <p className="security-note">{project.aiPipelineNote}</p>}</div> : null}
            {project.repositories?.length ? <div className="detail-repositories"><h3>Repository Responsibilities</h3><div>{project.repositories.map((repository) => <article key={repository.name}><div className="detail-repository-head"><span>{repository.role}</span><b>{repository.status}</b></div><h4>{repository.name}</h4><p>{repository.description}</p><div className="detail-repository-footer"><span>{repository.tech.join(' · ')}</span><a href={repository.github} target="_blank" rel="noreferrer">VIEW REPO <span>↗</span></a></div></article>)}</div></div> : null}
            {activeArea && <div className="detail-area-block"><h3>기술 영역별 구현</h3><ProjectAreaTabs areas={projectAreas} activeId={activeArea.id} onChange={handleAreaChange} /><ProjectAreaPanel area={activeArea} key={activeArea.id} /></div>}
          </Reveal>

          <Reveal as="section" id="evidence" className="detail-section detail-evidence-section">
            <span className="section-number">05 / EVIDENCE & RESULTS</span><h2>성과 및 검증 근거</h2>
            <div className="evidence-grid">{evidence.map((item) => <article className="evidence-card" key={`${item.label}-${item.value}`}><span className="evidence-card-label">{item.label}</span><strong>{item.value}</strong>{item.description && <p>{item.description}</p>}</article>)}</div>
            {project.datasetSummary && <div className="dataset-condition"><span>DATASET CONDITION</span><strong>{project.datasetSummary.title}</strong><p>{project.datasetSummary.items.join(' · ')}</p></div>}
            {project.modelExperiments?.length ? <div className="model-evidence-block"><h3>모델 성능 및 선정 근거</h3><div className="experiment-table-wrap" tabIndex={0} aria-label="모델 성능 비교표, 모바일에서 가로 스크롤 가능"><table className="experiment-table"><caption>동일한 데이터셋과 평가 조건에서 비교한 객체 탐지 모델 성능</caption><thead><tr><th scope="col">Model</th><th scope="col">Precision</th><th scope="col">Recall</th><th scope="col">F1</th><th scope="col">mAP50</th><th scope="col">mAP50-95</th><th scope="col">특징</th></tr></thead><tbody>{project.modelExperiments.map((row) => <tr className={row.note.includes('최종') ? 'is-selected' : ''} key={row.model}><th scope="row">{row.model}</th><td>{row.precision || '-'}</td><td>{row.recall || '-'}</td><td>{row.f1 || '-'}</td><td>{row.map50 || '-'}</td><td>{row.map5095 || '-'}</td><td>{row.note || '-'}</td></tr>)}</tbody></table></div>{project.modelEvidenceNote && <p className="model-selection-note">{project.modelEvidenceNote}</p>}</div> : null}
            {project.aiPipelineImage && <figure className="detail-evidence-image"><ImageWithFallback src={project.aiPipelineImage.src} alt={project.aiPipelineImage.alt} loading="lazy" fallbackLabel={project.name} /><figcaption>{project.aiPipelineImage.caption}</figcaption></figure>}
            {project.operationChecks?.length ? <div className="detail-check-block"><h3>운영 및 검증 근거</h3><div className="operation-check-grid">{project.operationChecks.map((item) => <div className="operation-check-item" key={item}><span aria-hidden="true">✓</span>{item}</div>)}</div></div> : null}
            {evidenceSections.map((section) => <div className="detail-check-block" key={section.id}><h3>{section.heading}</h3><ul className="check-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
          </Reveal>

          {interviewEvidence && <ProjectEngineeringEvidence evidence={interviewEvidence} />}

          {!interviewEvidence && <Reveal as="section" id="problem-solving" className="detail-section">
            <span className="section-number">06 / PROBLEM SOLVING</span><h2>문제 해결 경험</h2>
            <div className="trouble-list">{project.troubleshooting.slice(0, 4).map((item) => <article className="trouble-card" key={item.title}><h3>{item.title}</h3><dl><div><dt>문제</dt><dd>{item.situation}</dd></div><div><dt>원인과 해결</dt><dd>{item.solution}</dd></div><div><dt>결과</dt><dd>{item.result}</dd></div></dl></article>)}</div>
            {project.troubleshooting.length > 4 && <details className="detail-more"><summary>문제 해결 사례 {project.troubleshooting.length - 4}개 더 보기</summary><div className="trouble-list">{project.troubleshooting.slice(4).map((item) => <article className="trouble-card" key={item.title}><h3>{item.title}</h3><dl><div><dt>문제</dt><dd>{item.situation}</dd></div><div><dt>원인과 해결</dt><dd>{item.solution}</dd></div><div><dt>결과</dt><dd>{item.result}</dd></div></dl></article>)}</div></details>}
          </Reveal>}

          <Reveal as="section" id="resources" className="detail-section">
            <span className="section-number">{interviewEvidence ? '11' : '07'} / SCREENS & RESOURCES</span><h2>화면과 프로젝트 자료</h2>
            {screenshots.length > 0 && <div className="detail-screens-block"><h3>구현 화면</h3><div className="screenshots">{screenshots.map((image) => <figure key={image.src}><ImageWithFallback src={image.src} alt={image.alt} loading="lazy" fallbackLabel={project.name} /><figcaption>{image.category && <span>{image.category}</span>}{image.caption}</figcaption></figure>)}</div></div>}
            {resources.length > 0 && <div className="detail-resources-block"><h3>프로젝트 자료</h3><div className="resource-grid">{resources.map((resource) => <ProjectResourceLink label={resource.label} url={resource.url} key={`${resource.label}-${resource.url}`} />)}</div></div>}
          </Reveal>

          <Reveal as="section" id="retrospective" className="detail-section detail-retrospective-section">
            <span className="section-number">{interviewEvidence ? '12' : '08'} / RETROSPECTIVE</span><h2>회고</h2>
            <div className="retrospective-grid">{retrospective.map((item) => <article key={item.label}><span>{item.label}</span><p>{item.value}</p></article>)}</div>
          </Reveal>

          <ProjectPager previous={adjacent.previous} next={adjacent.next} />
        </div>
      </div>
    </article>
  )
}
