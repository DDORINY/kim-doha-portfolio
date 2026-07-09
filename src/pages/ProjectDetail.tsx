import { Link, useParams } from 'react-router-dom'
import ImageWithFallback from '../components/ImageWithFallback'
import Reveal from '../components/Reveal'
import TechIcon, { TechChip } from '../components/TechIcon'
import { getProject } from '../data/projects'

function ResourceLink({ label, url, placeholder }: { label: string; url?: string; placeholder?: boolean }) {
  return placeholder || !url ? <span className="resource-link disabled"><TechIcon name={label} />{label}<small>자료 준비 중</small></span> : <a className="resource-link" href={url} target="_blank" rel="noreferrer"><TechIcon name={label} />{label}<span>↗</span></a>
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <section className="section empty-state"><h1>프로젝트를 찾을 수 없습니다.</h1><Link className="button primary" to="/projects">프로젝트 목록</Link></section>

  const baseIds = ['overview', 'background', 'role', 'features', 'stack', 'flow', 'trouble', 'screens', 'docs', 'retrospect'] as const
  const baseLabels: Record<string, string> = {
    overview: '프로젝트 개요',
    background: '개발 배경',
    role: '담당 역할',
    features: '주요 기능',
    stack: '기술 스택',
    flow: '시스템 구조·흐름',
    trouble: '문제 해결 경험',
    screens: '화면 캡처',
    docs: '문서와 링크',
    retrospect: '회고',
  }
  const evidenceLabels: Record<string, string> = {
    'evidence-overview': 'Project Evidence Overview',
    architecture: 'System Architecture Evidence',
    'model-evidence': 'AI Model Evidence',
    operation: 'Operation Evidence',
  }
  const extraLabels: Record<string, string> = Object.fromEntries((project.extraSections ?? []).map((s) => [s.id, s.heading]))
  const getLabel = (id: string) => baseLabels[id] ?? evidenceLabels[id] ?? extraLabels[id] ?? id
  const extrasAfter = (id: string) => project.extraSections?.filter((s) => s.insertAfter === id) ?? []
  const sectionIds: string[] = []
  baseIds.forEach((id) => {
    sectionIds.push(id)
    if (id === 'overview') sectionIds.push('evidence-overview')
    if (id === 'flow' && project.architectureFlow?.length) sectionIds.push('architecture')
    extrasAfter(id).forEach((s) => sectionIds.push(s.id))
    if (id === 'flow' && project.modelExperiments?.length) sectionIds.push('model-evidence')
    if (id === 'flow' && project.operationChecks?.length) sectionIds.push('operation')
  })
  const num = (id: string) => String(sectionIds.indexOf(id) + 1).padStart(2, '0')
  const ExtraSections = ({ after }: { after: string }) => <>{extrasAfter(after).map((s) => <Reveal as="section" id={s.id} className="detail-section" key={s.id}><span className="section-number">{num(s.id)} / {s.label}</span><h2>{s.heading}</h2><ul className="check-list">{s.items.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>)}</>

  const aiKeywords = ['YOLO', 'RT-DETR', 'TensorFlow', 'Keras', 'OpenCV', 'CNN']
  const aiStack = project.techStack.filter((tech) => aiKeywords.some((k) => tech.includes(k)))
  const infraSectionCount = (project.extraSections ?? []).filter((s) => /VM|INFRA|ARCHITECTURE|SECURITY/i.test(s.label)).length
  const qaSection = project.extraSections?.find((s) => s.id === 'qa')
  const overviewCards: { label: string; value: string; description: string }[] = [
    { label: 'AI Model', value: aiStack.length ? `${aiStack.length}개 기술` : 'TODO', description: aiStack.length ? aiStack.slice(0, 4).join(' · ') : 'AI 모델 미적용 프로젝트' },
    { label: 'Service Integration', value: `${project.systemFlow.length}단계`, description: '요청 → 처리 → 저장 → 알림까지 서비스 흐름 연결' },
    { label: 'Infra / VM', value: infraSectionCount ? `${infraSectionCount}개 섹션` : 'TODO', description: infraSectionCount ? '서버·VM 분리 운영 및 배포 점검 경험' : 'VM/인프라 분리 경험 없음' },
    { label: 'Operation Check', value: project.operationChecks?.length ? `${project.operationChecks.length}개 항목` : 'TODO', description: '실행 환경·연결 상태 점검 체크리스트' },
    { label: 'QA / Test', value: qaSection ? `${qaSection.items.length}개 확인` : 'TODO', description: qaSection ? '배포 전 브라우저·API 기준 검증' : '별도 QA 체크리스트 미기록' },
    { label: 'Troubleshooting', value: `${project.troubleshooting.length}건`, description: 'Problem → Cause → Fix → Result로 정리' },
  ]

  return (
    <article className="detail-page" style={{ '--accent': project.accent } as React.CSSProperties}>
      <header className="detail-hero section"><div className="container"><Link className="back-link" to="/projects">← Projects</Link><div className="detail-title"><div><span className="eyebrow">{project.type}{project.period && !project.type.includes(project.period) ? ` · ${project.period}` : ''}</span><h1>{project.name}</h1><p>{project.tagline}</p></div><div className="detail-actions"><ResourceLink {...project.deploy} /><ResourceLink {...project.github} /></div></div></div></header>
      <div className="container detail-layout">
        <aside className="detail-nav"><span>CONTENTS</span>{sectionIds.map((id, i) => (
          <button type="button" onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })} aria-label={`${getLabel(id)} 섹션으로 이동`} key={id}>
            <span className="detail-nav-index">{String(i + 1).padStart(2, '0')}</span>
            <span className="detail-nav-label">{getLabel(id)}</span>
          </button>
        ))}</aside>
        <div className="detail-content">
          <Reveal as="section" id="overview" className="detail-section"><span className="section-number">{num('overview')} / OVERVIEW</span><h2>프로젝트 개요</h2>{project.teamNote && <span className="team-note">{project.teamNote}</span>}<p className="lead-copy">{project.summary}</p>{project.resumeHighlight && (
            <div className="role-summary-card">
              <div><span className="meta-label">ROLE</span><p>{project.resumeHighlight.role}</p></div>
              <div><span className="meta-label">CONTRIBUTION</span><p>{project.resumeHighlight.contribution}</p></div>
              <div><span className="meta-label">ACHIEVEMENT</span><p>{project.resumeHighlight.achievement}</p></div>
            </div>
          )}</Reveal>
          <Reveal as="section" id="evidence-overview" className="detail-section"><span className="section-number">{num('evidence-overview')} / EVIDENCE</span><h2>Project Evidence Overview</h2><div className="evidence-grid">{overviewCards.map((card) => <div className="evidence-card" key={card.label}><span className="evidence-card-label">{card.label}</span><strong>{card.value}</strong><p>{card.description}</p></div>)}</div></Reveal>
          <Reveal as="section" id="background" className="detail-section"><span className="section-number">{num('background')} / BACKGROUND</span><h2>개발 배경</h2><p>{project.background}</p></Reveal>
          <Reveal as="section" id="role" className="detail-section"><span className="section-number">{num('role')} / MY ROLE</span><h2>담당 역할</h2><ul className="check-list">{project.role.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
          <Reveal as="section" id="features" className="detail-section"><span className="section-number">{num('features')} / FEATURES</span><h2>주요 기능</h2><div className="feature-grid">{project.features.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3></div>)}</div></Reveal>
          <ExtraSections after="features" />
          <Reveal as="section" id="stack" className="detail-section"><span className="section-number">{num('stack')} / TECH STACK</span><h2>기술 스택</h2><div className="large-chip-row">{project.techStack.map((tech) => <TechChip label={tech} className="" key={tech} />)}</div></Reveal>
          <ExtraSections after="stack" />
          <Reveal as="section" id="flow" className="detail-section"><span className="section-number">{num('flow')} / SYSTEM FLOW</span><h2>시스템 구조와 서비스 흐름</h2><div className="system-flow">{project.systemFlow.map((step, index) => <div className="flow-step" key={step.label}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{step.label}</h3><p>{step.description}</p></div></div>)}</div>{project.slug === 'staccato' && <p className="security-note">보안을 위해 실제 인프라 IP와 내부 접속 정보는 공개하지 않습니다.</p>}</Reveal>
          {project.architectureFlow?.length ? (
            <Reveal as="section" id="architecture" className="detail-section">
              <span className="section-number">{num('architecture')} / ARCHITECTURE EVIDENCE</span>
              <h2>System Architecture Evidence</h2>
              <div className="architecture-diagram">
                {project.architectureFlow.map((node, index) => (
                  <div className="architecture-node" key={node.label}>
                    <div className="architecture-box"><strong>{node.label}</strong>{node.sub && <span>{node.sub}</span>}</div>
                    {index < project.architectureFlow!.length - 1 && <span className="architecture-arrow" aria-hidden="true">→</span>}
                  </div>
                ))}
              </div>
            </Reveal>
          ) : null}
          <ExtraSections after="flow" />
          {project.modelExperiments?.length ? (
            <Reveal as="section" id="model-evidence" className="detail-section">
              <span className="section-number">{num('model-evidence')} / AI MODEL EVIDENCE</span>
              <h2>AI Model Evidence</h2>
              {project.datasetSummary && (
                <div className="evidence-card dataset-summary-card">
                  <span className="evidence-card-label">{project.datasetSummary.title}</span>
                  <ul className="check-list" style={{ gridTemplateColumns: '1fr', gap: 8, marginTop: 14 }}>
                    {project.datasetSummary.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              )}
              <div className="experiment-table-wrap">
                <table className="experiment-table">
                  <thead><tr><th>Model</th><th>Precision</th><th>Recall</th><th>F1</th><th>mAP50</th><th>mAP50-95</th><th>특징</th></tr></thead>
                  <tbody>
                    {project.modelExperiments.map((row) => (
                      <tr key={row.model}>
                        <td>{row.model}</td>
                        <td>{row.precision}</td>
                        <td>{row.recall}</td>
                        <td>{row.f1}</td>
                        <td>{row.map50}</td>
                        <td>{row.map5095}</td>
                        <td>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {project.modelEvidenceNote && <p className="security-note model-evidence-note">{project.modelEvidenceNote}</p>}
            </Reveal>
          ) : null}
          {project.operationChecks?.length ? (
            <Reveal as="section" id="operation" className="detail-section">
              <span className="section-number">{num('operation')} / OPERATION EVIDENCE</span>
              <h2>Operation Evidence</h2>
              <div className="operation-check-grid">{project.operationChecks.map((item) => <div className="operation-check-item" key={item}><span aria-hidden="true">✓</span>{item}</div>)}</div>
            </Reveal>
          ) : null}
          <Reveal as="section" id="trouble" className="detail-section"><span className="section-number">{num('trouble')} / PROBLEM SOLVING</span><h2>문제 해결 경험</h2><div className="trouble-list">{project.troubleshooting.map((item) => <div className="trouble-card" key={item.title}><h3>{item.title}</h3><dl><div><dt>Problem</dt><dd>{item.situation}</dd></div><div><dt>Cause & Fix</dt><dd>{item.solution}</dd></div><div><dt>Result</dt><dd>{item.result}</dd></div></dl></div>)}</div></Reveal>
          <ExtraSections after="trouble" />
          <Reveal as="section" id="screens" className="detail-section"><span className="section-number">{num('screens')} / SCREENS</span><h2>화면 캡처</h2><div className="screenshots">{project.screenshots.map((image) => <figure key={image.src}><ImageWithFallback src={`${import.meta.env.BASE_URL}${image.src.replace(/^\//, '')}`} alt={image.alt} fallbackLabel="화면 캡처 준비 중" /><figcaption>{image.caption}</figcaption></figure>)}</div></Reveal>
          <Reveal as="section" id="docs" className="detail-section"><span className="section-number">{num('docs')} / RESOURCES</span><h2>문서와 링크</h2><div className="resource-grid">{project.documents.map((doc) => <ResourceLink key={doc.label} {...doc} />)}<ResourceLink {...project.deploy} /><ResourceLink {...project.github} /></div></Reveal>
          <Reveal as="section" id="retrospect" className="detail-section"><span className="section-number">{num('retrospect')} / RETROSPECTIVE</span><h2>회고</h2><blockquote>{project.retrospective}</blockquote></Reveal>
          <div className="detail-bottom"><Link className="button secondary" to="/projects">← 프로젝트 목록</Link></div>
        </div>
      </div>
    </article>
  )
}
