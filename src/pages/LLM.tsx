import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'
import { projectInterviewEvidence } from '../data/interviewEvidence'
import {
  dohaLmArchitecture,
  dohaLmPhases,
  governancePrinciples,
  hawkContributions,
  hawkEvidence,
  hawkServiceFlow,
  langGraphIntents,
  langGraphNodes,
  llmStackGroups,
  modelSpecs,
  repositoryUrl,
  statusLabels,
  structuredOutputFlow,
  trainingPipeline,
  type DevelopmentStatus,
} from '../data/llm'

const hawkAi = projects.find((project) => project.slug === 'hawk-ai')
const dohaLm = projects.find((project) => project.slug === 'dohalm')
const heroPipeline = [
  { label: 'TRAIN', detail: 'Qwen · LoRA / QLoRA', evidence: 'Dataset · Adapter' },
  { label: 'EVALUATE', detail: 'Validation', evidence: 'Evaluation Evidence' },
  { label: 'SERVE', detail: 'FastAPI Runtime', evidence: 'REST · SSE' },
  { label: 'INTEGRATE', detail: 'Backend · Structured Output', evidence: 'Board · Chat Product UI' },
] as const
const codeProjectComparisons = [
  {
    code: 'A / SERVICE INTEGRATION',
    name: 'HAWK-AI',
    focus: 'Qwen + LoRA 결과를 게시판과 챗봇 기능으로 연결',
    flow: ['Frontend', 'Backend AI Client', 'FastAPI Serving', 'Qwen + LoRA'],
    evidence: ['Board Service', 'Structured Output', 'Chat Graph'],
    path: '/projects/hawk-ai',
  },
  {
    code: 'B / MODEL & RUNTIME',
    name: 'DohaLM',
    focus: '데이터 승인부터 학습·평가·Runtime까지 Provider로 분리',
    flow: ['Dataset', 'Training', 'Evaluation', 'Runtime API'],
    evidence: ['Dataset Governance', 'Training Pipeline', 'REST / SSE'],
    path: '/projects/dohalm',
  },
] as const

function StatusBadge({ status }: { status: DevelopmentStatus }) {
  return <span className={`llm-status llm-status-${status}`}>{statusLabels[status]}</span>
}

function TechnicalFlow({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <div className="llm-tech-flow" role="list" aria-label={label}>
      {items.map((item, index) => (
        <div className="llm-tech-flow-item" role="listitem" key={item}>
          <div><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>
          {index < items.length - 1 && <i aria-hidden="true">→</i>}
        </div>
      ))}
    </div>
  )
}

export default function LLM() {
  return (
    <div className="llm-page llm-portfolio-page">
      <section className="llm-portfolio-hero page-section" aria-labelledby="llm-page-title">
        <div className="container llm-portfolio-hero-grid">
          <Reveal className="llm-portfolio-hero-copy">
            <span className="eyebrow">LLM ENGINEERING</span>
            <h1 id="llm-page-title">LLM<br /><span>ENGINEERING</span></h1>
            <h2>From training<br />to product integration.</h2>
            <p>Qwen 기반 Fine-Tuning과 LoRA/QLoRA, FastAPI Runtime, Backend와 실제 제품 기능 연결까지 경험했습니다.</p>
            <dl className="llm-hero-scope"><div><dt>MODEL</dt><dd>Qwen · LoRA / QLoRA</dd></div><div><dt>RUNTIME</dt><dd>FastAPI · REST / SSE</dd></div><div><dt>PRODUCT</dt><dd>Backend · Structured Output · UI</dd></div></dl>
            <div className="llm-portfolio-tags">{['Qwen', 'LoRA / QLoRA', 'FastAPI', 'Structured Output', 'Service Integration'].map((item) => <span key={item}>{item}</span>)}</div>
            <div className="llm-portfolio-actions"><Link className="button primary" to="/projects/hawk-ai">VIEW HAWK-AI</Link><Link className="button secondary" to="/projects/dohalm">VIEW DohaLM</Link></div>
          </Reveal>
          <Reveal className="llm-hero-pipeline" delay={80} aria-label="LLM engineering workflow">
            <div className="llm-hero-pipeline-head"><span>TECHNICAL FLOW</span><strong>TRAINING TO PRODUCT</strong></div>
            <ol>{heroPipeline.map((stage, index) => <li key={stage.label}><span>0{index + 1}</span><div><strong>{stage.label}</strong><small><b>{stage.detail}</b><em>{stage.evidence}</em></small></div>{index < heroPipeline.length - 1 && <i aria-hidden="true">↓</i>}</li>)}</ol>
          </Reveal>
        </div>
        <Reveal className="container llm-role-band" aria-label="HAWK-AI와 DohaLM 역할 비교">
          <div><span>TEAM PROJECT / HAWK-AI</span><strong>LLM을 실제 서비스 기능으로 연결</strong></div>
          <div><span>PERSONAL PROJECT / DohaLM</span><strong>모델·학습·Runtime 자체를 개발</strong></div>
        </Reveal>
      </section>

      {hawkAi && (
        <section className="section llm-hawk-section" aria-labelledby="llm-hawk-title">
          <div className="container">
            <SectionHeading id="llm-hawk-title" eyebrow="01 / LLM SERVICE INTEGRATION" title="HAWK-AI" description="Qwen + LoRA 모델을 FastAPI AI Serving, Backend AI Client, 실제 게시판과 챗봇 UI까지 연결한 팀 프로젝트입니다." />
            <Reveal className="llm-hawk-header">
              <div><span>TEAM PROJECT</span><strong>{hawkAi.period.replace(' ~ ', ' — ')}</strong></div>
              <StatusBadge status="in-progress" />
              <Link to="/projects/hawk-ai">VIEW CASE STUDY <span>→</span></Link>
            </Reveal>
            <TechnicalFlow items={hawkServiceFlow} label="HAWK-AI LLM service integration flow" />
            <div className="llm-hawk-grid">
              <Reveal className="llm-contribution-panel">
                <div className="llm-panel-title"><span>MY CONTRIBUTION</span><strong>서비스 연결 담당 범위</strong></div>
                <div className="llm-contribution-list">{hawkContributions.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div>
              </Reveal>
              <div className="llm-evidence-grid">{hawkEvidence.map((item, index) => <Reveal className="llm-evidence-card" delay={(index % 3) * 50} key={item.label}><span>{item.label}</span><strong>{item.value}</strong></Reveal>)}</div>
            </div>
            <Reveal className="llm-decision-strip"><span>ENGINEERING DECISIONS</span><div>{projectInterviewEvidence['hawk-ai']?.decisions.map((item) => <b key={item.title}>{item.title}</b>)}</div></Reveal>
          </div>
        </section>
      )}

      <section className="section llm-integration-section" aria-labelledby="structured-output-title">
        <div className="container llm-integration-grid">
          <Reveal className="llm-structured-panel">
            <SectionHeading id="structured-output-title" eyebrow="02 / BACKEND CONTRACT" title="STRUCTURED OUTPUT" description="LLM 응답을 그대로 표시하지 않고 서비스에서 사용할 수 있는 데이터 계약으로 변환합니다." />
            <TechnicalFlow items={structuredOutputFlow} label="Structured output processing flow" />
            <p>JSON 복구, Pydantic parsing, 필수 필드 검증과 후처리를 거쳐 `title / summary / content` 구조로 게시판 폼에 전달합니다.</p>
          </Reveal>
          <Reveal className="llm-langgraph-panel" delay={80}>
            <div className="llm-panel-title"><span>LANGGRAPH CHAT FLOW</span><strong>Intent-based orchestration</strong></div>
            <div className="llm-graph-flow">{langGraphNodes.map((node, index) => <div className={`llm-graph-node is-${node.label.toLowerCase()}`} key={node.label}><span>{node.label}</span><small>{node.detail}</small>{index < langGraphNodes.length - 1 && <i aria-hidden="true">↓</i>}</div>)}</div>
            <div className="llm-intent-list">{langGraphIntents.map((intent) => <span key={intent}>{intent}</span>)}</div>
          </Reveal>
        </div>
      </section>

      {dohaLm && (
        <section className="section llm-dohalm-section" aria-labelledby="llm-dohalm-title">
          <div className="container">
            <SectionHeading id="llm-dohalm-title" eyebrow="03 / MODEL & RUNTIME ENGINEERING" title="DohaLM" description="재사용 가능한 LLM Provider를 목표로 Dataset Governance, Foundation Model, Fine-Tuning, Evaluation, Runtime API를 분리해 개발하는 개인 프로젝트입니다." />
            <Reveal className="llm-dohalm-meta"><span>PERSONAL PROJECT</span><strong>{dohaLm.period.replace(' ~ ', ' — ').replace('진행 중', 'PRESENT')}</strong><StatusBadge status="in-progress" /><a href={repositoryUrl} target="_blank" rel="noreferrer">GITHUB <span>↗</span></a></Reveal>
            <TechnicalFlow items={dohaLmArchitecture} label="DohaLM model and runtime architecture" />
            <div className="llm-phase-grid">{dohaLmPhases.map((phase, index) => <Reveal as="article" className="llm-phase-card" delay={index * 60} key={phase.phase}><div><span>{phase.phase}</span><StatusBadge status={phase.status} /></div><h3>{phase.title}</h3><ul>{phase.items.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>)}</div>
            <Reveal className="llm-decision-strip"><span>ENGINEERING DECISIONS</span><div>{projectInterviewEvidence.dohalm?.decisions.map((item) => <b key={item.title}>{item.title}</b>)}</div></Reveal>
          </div>
        </section>
      )}

      <section className="section llm-model-section" aria-labelledby="llm-model-title">
        <div className="container">
          <SectionHeading id="llm-model-title" eyebrow="04 / FOUNDATION MODEL" title="DOHALM-TINY" description="승인된 Tiny 설정과 실제 코드의 구조 정보를 compact specification으로 정리했습니다." />
          <div className="llm-model-layout">
            <Reveal className="llm-model-specs">{modelSpecs.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</Reveal>
            <Reveal className="llm-model-boundary" delay={80}><span>VALIDATION BOUNDARY</span><h3>Evidence before claims.</h3><p>Tiny Corpus overfit은 학습 시스템 검증 근거이며 일반화 성능이나 전체 Pretraining 완료를 의미하지 않습니다.</p><div><StatusBadge status="verified" /><span>16.9M Decoder-only Transformer</span></div><div><StatusBadge status="blocked" /><span>Additional Pretraining approval</span></div></Reveal>
          </div>
        </div>
      </section>

      <section className="section llm-training-pipeline-section" aria-labelledby="llm-training-pipeline-title">
        <div className="container">
          <SectionHeading id="llm-training-pipeline-title" eyebrow="05 / TRAINING PIPELINE" title="DATA TO ARTIFACT" description="데이터 검증부터 평가 결과와 Model Manifest까지 재현 가능한 흐름으로 관리합니다." />
          <TechnicalFlow items={trainingPipeline} label="DohaLM training pipeline" />
        </div>
      </section>

      <section className="section llm-governance-stack-section" aria-labelledby="llm-governance-title">
        <div className="container llm-governance-stack-grid">
          <Reveal className="llm-governance-brief">
            <SectionHeading id="llm-governance-title" eyebrow="06 / DATASET GOVERNANCE" title="DATA IS AN ARTIFACT" description="학습 데이터는 수집 대상이 아니라 리뷰, 승인, publication, 권리 검증을 거치는 versioned artifact로 관리합니다." />
            <div>{governancePrinciples.map((item) => <span key={item}>{item}</span>)}</div>
          </Reveal>
          <Reveal className="llm-stack-panel" delay={80}>
            <div className="llm-panel-title"><span>LLM ENGINEERING STACK</span><strong>Role-based toolkit</strong></div>
            {llmStackGroups.map((group) => <div className="llm-stack-row" key={group.label}><span>{group.label}</span><div>{group.items.map((item) => <b key={item}>{item}</b>)}</div></div>)}
          </Reveal>
        </div>
      </section>

      <section className="section llm-portfolio-cta" aria-labelledby="llm-cta-title">
        <div className="container">
          <div className="llm-code-heading"><span className="eyebrow">07 / CODE &amp; PROJECTS</span><h2 id="llm-cta-title">두 프로젝트에서 확인하는 구현 범위</h2><p>서비스 통합과 모델 Runtime을 분리해 실제 코드 근거를 비교합니다.</p></div>
          <div className="llm-code-project-grid">{codeProjectComparisons.map((project, index) => <Reveal as="article" delay={index * 70} key={project.name}><div className="llm-code-project-head"><span>{project.code}</span><h3>{project.name}</h3><p>{project.focus}</p></div><div className="llm-code-flow">{project.flow.map((item, flowIndex) => <div key={item}><span>0{flowIndex + 1}</span><strong>{item}</strong>{flowIndex < project.flow.length - 1 && <i>→</i>}</div>)}</div><div className="llm-code-evidence"><span>CODE EVIDENCE</span><div>{project.evidence.map((item) => <b key={item}>{item}</b>)}</div></div><Link to={project.path}>VIEW CASE STUDY <span>→</span></Link></Reveal>)}</div>
          <Reveal className="llm-code-actions"><div><strong>MODEL → RUNTIME → PRODUCT</strong><p>프로젝트 상세에서 역할, 결정, 검증 근거를 이어서 확인할 수 있습니다.</p></div><div><Link className="button primary" to="/projects">VIEW ALL PROJECTS</Link><a className="button secondary" href={repositoryUrl} target="_blank" rel="noreferrer">VIEW GITHUB <span>↗</span></a></div></Reveal>
        </div>
      </section>
    </div>
  )
}
