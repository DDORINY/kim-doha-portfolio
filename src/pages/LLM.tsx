import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SectionScrollButton from '../components/SectionScrollButton'
import {
  architectureFlow,
  developmentRows,
  documents,
  evidenceMetrics,
  gates,
  governancePrinciples,
  hardwareSpecs,
  modelChecks,
  modelModules,
  modelSpecs,
  notCompleted,
  overviewCards,
  pipelineStages,
  repositoryUrl,
  roadmap,
  statusLabels,
  tokenizerChecks,
  tokenizerFacts,
  trainerFeatures,
  trainingFlow,
  verifiedResults,
  type DevelopmentStatus,
} from '../data/llm'

const sectionLinks = [
  ['OVERVIEW', 'overview'], ['STATUS', 'status'], ['PIPELINE', 'pipeline'], ['ARCHITECTURE', 'architecture'],
  ['IMPLEMENTATION', 'implementation'], ['TRAINING', 'training'], ['QUALITY', 'quality'], ['ROADMAP', 'roadmap'], ['DOCUMENTS', 'documents'],
] as const

function StatusBadge({ status }: { status: DevelopmentStatus }) {
  return <span className={`llm-status llm-status-${status}`}>{statusLabels[status]}</span>
}

function SpecList({ items }: { items: readonly (readonly [string, string])[] }) {
  return <dl className="llm-spec-list">{items.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
}

function Flow({ items, className = '' }: { items: readonly string[]; className?: string }) {
  return <div className={`llm-linear-flow ${className}`} role="list">{items.map((item, index) => <div role="listitem" key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>)}</div>
}

export default function LLM() {
  return (
    <div className="llm-page">
      <section className="llm-hero page-section" aria-labelledby="llm-page-title">
        <div className="container llm-hero-grid">
          <Reveal className="llm-hero-copy">
            <span className="eyebrow">KOREAN SMALL LANGUAGE MODEL</span>
            <h1 id="llm-page-title">DOHA<span>LM</span></h1>
            <h2>한국어 소형 언어모델의<br />토크나이저부터 학습 시스템까지 직접 구현합니다.</h2>
            <p>PyTorch 기반 Decoder-only Transformer를 직접 구현하고, RTX 3060 Ti 8GB 환경에서 데이터·토크나이저·모델·학습 파이프라인을 단계별 Quality Gate와 테스트 증거로 검증하는 개인 프로젝트입니다.</p>
            <div className="llm-hero-tags" aria-label="DohaLM 현재 상태">
              {['IN DEVELOPMENT', 'GATE 7 PASSED', '571 TESTS PASSED', 'RTX 3060 Ti 8GB', 'DECODER-ONLY'].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="llm-hero-actions">
              <SectionScrollButton className="button primary" targetId="status">VIEW DEVELOPMENT STATUS <span>↓</span></SectionScrollButton>
              <SectionScrollButton className="button secondary" targetId="architecture">EXPLORE ARCHITECTURE <span>↓</span></SectionScrollButton>
              <a className="button ghost" href={repositoryUrl} target="_blank" rel="noreferrer" aria-label="DohaLM GitHub Repository 새 창에서 열기">GITHUB REPOSITORY <span>↗</span></a>
            </div>
          </Reveal>
          <Reveal className="llm-hero-panel" delay={100} aria-label="DohaLM 개발 파이프라인 상태">
            <div className="llm-panel-head"><span>MODEL DEVELOPMENT PIPELINE</span><StatusBadge status="in-progress" /></div>
            <div className="llm-hero-flow" role="list">
              {[
                ['CORPUS', 'verified'], ['TOKENIZER', 'verified'], ['TRANSFORMER', 'verified'],
                ['TRAINER', 'verified'], ['CHECKPOINT', 'verified'], ['VERIFICATION', 'verified'],
              ].map(([label, status], index) => <div role="listitem" className="llm-hero-node" key={label}><i>{String(index + 1).padStart(2, '0')}</i><strong>{label}</strong><StatusBadge status={status as DevelopmentStatus} /></div>)}
            </div>
            <div className="llm-panel-foot"><span><i /> EVIDENCE BASELINE</span><strong>GATE 7</strong></div>
          </Reveal>
        </div>
      </section>

      <nav className="llm-section-index" aria-label="DohaLM 페이지 섹션">
        <div className="container">{sectionLinks.map(([label, id]) => <SectionScrollButton className="llm-section-index-button" targetId={id} key={id}>{label}</SectionScrollButton>)}</div>
      </nav>

      <section className="section llm-overview" id="overview" aria-labelledby="llm-overview-title">
        <div className="container">
          <SectionHeading id="llm-overview-title" eyebrow="01 / PROJECT OVERVIEW" title="BUILDING A KOREAN LANGUAGE MODEL FROM FIRST PRINCIPLES" description="기존 모델 호출이나 미세조정에 그치지 않고, 텍스트가 토큰과 다음 토큰 확률로 바뀌는 전체 흐름을 직접 구현합니다." />
          <div className="llm-overview-grid">{overviewCards.map((card, index) => <Reveal as="article" className="llm-card llm-overview-card" delay={index * 60} key={card.code}><span>{card.code}</span><h3>{card.title}</h3><p>{card.description}</p></Reveal>)}</div>
          <Reveal className="llm-why"><span>WHY DOHALM</span><p>LLM을 사용하는 수준을 넘어, 텍스트가 토큰으로 변환되고 Transformer를 거쳐 다음 토큰 확률이 생성되는 전체 흐름을 이해하기 위해 시작했습니다.</p><div>{['FROM-SCRATCH IMPLEMENTATION', 'SINGLE-GPU CONSTRAINT', 'QUALITY GATE VALIDATION', 'REALISTIC PROJECT SCOPE'].map((item) => <b key={item}>{item}</b>)}</div></Reveal>
        </div>
      </section>

      <section className="section llm-status-section" id="status" aria-labelledby="llm-status-title">
        <div className="container">
          <SectionHeading id="llm-status-title" eyebrow="02 / DEVELOPMENT STATUS" title="CURRENT DEVELOPMENT STATUS" description="완료율 대신 코드·테스트·실행 Evidence가 확인된 범위만 VERIFIED로 구분합니다." />
          <Reveal className="llm-status-summary"><div><span>CURRENT STAGE</span><strong>Gate 7 Passed</strong></div><div><span>VERIFIED SCOPE</span><strong>Tiny Training Pipeline</strong></div><div><span>PROJECT STATUS</span><strong>In Development</strong></div></Reveal>
          <Reveal className="llm-table-wrap" tabIndex={0} aria-label="DohaLM 개발 상태 표, 모바일에서 가로 스크롤 가능">
            <table className="llm-table"><caption className="sr-only">DohaLM 기능별 개발 상태와 근거</caption><thead><tr><th scope="col">AREA</th><th scope="col">STATUS</th><th scope="col">EVIDENCE</th></tr></thead><tbody>{developmentRows.map((row) => <tr key={row.id}><th scope="row">{row.label}</th><td><StatusBadge status={row.status} /></td><td>{row.evidence}</td></tr>)}</tbody></table>
          </Reveal>
          <Reveal className="llm-conflict-note"><StatusBadge status="in-progress" /><div><strong>STATUS CONFLICT RECORDED</strong><p>최신 develop 문서에는 canonical 100-step Pilot과 Candidate A 단일 실행 근거가 있으나 상단 README의 미실행·미승인 경계와 충돌합니다. 수치와 모델 품질 주장은 이 페이지에서 제외하고 Gate 8 상태 수렴 대상으로 기록했습니다.</p></div></Reveal>
        </div>
      </section>

      <section className="section" id="pipeline" aria-labelledby="llm-pipeline-title">
        <div className="container">
          <SectionHeading id="llm-pipeline-title" eyebrow="03 / END-TO-END PIPELINE" title="END-TO-END LLM PIPELINE" description="현재 검증된 흐름과 이후 계획을 같은 Pipeline 안에서 숨김없이 분리합니다." />
          <div className="llm-pipeline-grid" role="list">{pipelineStages.map((stage, index) => <Reveal className={`llm-pipeline-node is-${stage.status}`} role="listitem" delay={index * 45} key={stage.id}><span>{String(index + 1).padStart(2, '0')}</span><h3>{stage.label}</h3><p>{stage.evidence}</p><StatusBadge status={stage.status} /></Reveal>)}</div>
        </div>
      </section>

      <section className="section llm-architecture-section" id="architecture" aria-labelledby="llm-architecture-title">
        <div className="container">
          <SectionHeading id="llm-architecture-title" eyebrow="04 / MODEL ARCHITECTURE" title="DOHALM-TINY ARCHITECTURE" description="승인된 Tiny 설정과 실제 모델 코드의 파라미터 계산 결과를 대조했습니다." />
          <div className="llm-two-column"><Reveal className="llm-card llm-architecture-flow"><div className="llm-card-head"><span>DECODER STACK</span><StatusBadge status="verified" /></div><Flow items={architectureFlow} /></Reveal><Reveal className="llm-card llm-spec-card" delay={80}><div className="llm-card-head"><span>MODEL SPECIFICATION</span><strong>16.89M</strong></div><SpecList items={modelSpecs} /></Reveal></div>
        </div>
      </section>

      <section className="section" id="implementation" aria-labelledby="llm-implementation-title">
        <div className="container">
          <SectionHeading id="llm-implementation-title" eyebrow="05 / IMPLEMENTATION" title="TOKENIZER & MODEL IMPLEMENTATION" description="운영 Tokenizer Bundle과 PyTorch 모델 모듈을 구현·검증 항목 중심으로 정리했습니다." />
          <div className="llm-two-column llm-implementation-grid">
            <Reveal as="article" className="llm-card llm-implementation-card"><div className="llm-card-head"><span>KOREAN TOKENIZER</span><StatusBadge status="verified" /></div><h3>SentencePiece<br />Unigram 16K</h3><SpecList items={tokenizerFacts} /><div className="llm-checks" aria-label="Tokenizer 검증 항목">{tokenizerChecks.map((item) => <span key={item}>✓ {item}</span>)}</div><div className="llm-scope-note"><strong>APPROVED SCOPE</strong><p>Tokenizer 개발과 제한된 Tiny 검증 범위입니다. Artifact 공개·재배포와 추가 Pretraining은 별도 승인 대상입니다.</p></div></Reveal>
            <Reveal as="article" className="llm-card llm-implementation-card" delay={80}><div className="llm-card-head"><span>MODEL IMPLEMENTATION</span><StatusBadge status="verified" /></div><div className="llm-module-grid">{modelModules.map((module) => <div key={module.label}><strong>{module.label}</strong>{module.values.map((value) => <span key={value}>{value}</span>)}</div>)}</div><div className="llm-checks" aria-label="Model 검증 항목">{modelChecks.map((item) => <span key={item}>✓ {item}</span>)}</div></Reveal>
          </div>
        </div>
      </section>

      <section className="section llm-training-section" id="training" aria-labelledby="llm-training-title">
        <div className="container">
          <SectionHeading id="llm-training-title" eyebrow="06 / TRAINING SYSTEM" title="TRAINING ON A SINGLE 8GB GPU" description="고성능 장비를 가정하지 않고 RTX 3060 Ti 8GB 안에서 실행 가능한 모델과 학습 범위를 측정하며 설계했습니다." />
          <div className="llm-training-layout"><Reveal className="llm-card llm-trainer-card"><div className="llm-card-head"><span>TRAINER FOUNDATION</span><StatusBadge status="verified" /></div><div className="llm-feature-grid">{trainerFeatures.map((item) => <span key={item}>✓ {item}</span>)}</div><Flow items={trainingFlow} className="llm-training-flow" /></Reveal><Reveal className="llm-card llm-hardware-card" delay={80}><div className="llm-card-head"><span>VERIFIED HARDWARE</span><strong>SINGLE GPU</strong></div><SpecList items={hardwareSpecs} /><p className="llm-card-note">Tiny model first · Context 256 · FP16 · Gradient Accumulation · VRAM-based probe · No distributed training</p></Reveal></div>
        </div>
      </section>

      <section className="section" id="quality" aria-labelledby="llm-quality-title">
        <div className="container">
          <SectionHeading id="llm-quality-title" eyebrow="07 / QUALITY GATES" title="QUALITY GATE DEVELOPMENT" description="설계 문서, 코드, 자동화 테스트와 실행 결과를 함께 검토한 뒤 다음 단계로 이동합니다." />
          <div className="llm-gate-grid">{gates.map(([gate, scope], index) => <Reveal className="llm-gate-card" delay={index * 55} key={gate}><span>{gate}</span><StatusBadge status="verified" /><strong>{scope}</strong></Reveal>)}</div>
          <div className="llm-metrics-grid">{evidenceMetrics.map((metric, index) => <Reveal className="llm-metric-card" delay={index * 60} key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></Reveal>)}</div>
          <Reveal className="llm-overfit-note"><span>OVERFIT VALIDATION ONLY</span><p>동일한 64개 문서로 구성된 제한 Corpus의 memorization 검증 결과입니다. Packed top-1 99.9047%는 일반화 성능, Perplexity 평가 또는 Pretraining 완료를 의미하지 않습니다.</p></Reveal>
          <div className="llm-scope-columns"><Reveal className="llm-scope-list is-verified"><div className="llm-card-head"><span>VERIFIED RESULTS</span><StatusBadge status="verified" /></div>{verifiedResults.map((item) => <p key={item}>✓ {item}</p>)}</Reveal><Reveal className="llm-scope-list is-planned" delay={80}><div className="llm-card-head"><span>NOT YET COMPLETED</span><StatusBadge status="planned" /></div>{notCompleted.map((item) => <p key={item}>— {item}</p>)}</Reveal></div>
        </div>
      </section>

      <section className="section llm-roadmap-section" id="roadmap" aria-labelledby="llm-roadmap-title">
        <div className="container">
          <SectionHeading id="llm-roadmap-title" eyebrow="08 / GOVERNANCE & ROADMAP" title="DATA GOVERNANCE & NEXT GATES" description="사용 가능한 데이터 범위와 아직 승인되지 않은 다음 단계를 분리해 관리합니다." />
          <div className="llm-two-column"><Reveal className="llm-card llm-governance-card"><div className="llm-card-head"><span>DATA GOVERNANCE</span><StatusBadge status="verified" /></div><p>출처·라이선스·개인정보·재배포 조건과 평가 데이터 누수 여부를 사용 전에 검토합니다.</p><div className="llm-governance-list">{governancePrinciples.map((item) => <span key={item}>✓ {item}</span>)}</div><div className="llm-boundary-grid"><div><strong>CURRENT SCOPE</strong><p>승인된 Tokenizer 개발과 제한 Tiny Overfit</p></div><div><strong>BLOCKED SCOPE</strong><p>추가 학습·Artifact 재배포·목적 확대</p></div></div></Reveal><Reveal className="llm-card llm-roadmap-card" delay={80}><div className="llm-card-head"><span>NEXT DEVELOPMENT GATES</span><StatusBadge status="in-progress" /></div>{roadmap.map((item) => <div className="llm-roadmap-row" key={item.phase}><span>{item.phase}</span><strong>{item.label}</strong><StatusBadge status={item.status} /></div>)}</Reveal></div>
        </div>
      </section>

      <section className="section llm-documents-section" id="documents" aria-labelledby="llm-documents-title">
        <div className="container">
          <SectionHeading id="llm-documents-title" eyebrow="09 / REPOSITORY & DOCUMENTS" title="DOCUMENTED BY DESIGN" description="설계 승인과 구현 완료를 구분하고, 결정과 검증 결과를 실제 저장소 문서로 추적합니다." />
          <div className="llm-document-grid">{documents.map((document, index) => <Reveal as="a" className="llm-document-link" delay={(index % 5) * 45} href={document.href} target="_blank" rel="noreferrer" aria-label={`${document.title} 문서 새 창에서 열기`} key={document.href}><span>{document.category}</span><strong>{document.title}</strong><small>{document.status.toUpperCase()} ↗</small></Reveal>)}</div>
          <Reveal className="llm-document-cta"><div><span className="eyebrow">REPOSITORY / CTA</span><h2>코드와 근거 문서를 함께 확인하세요.</h2><p>Portfolio 화면의 상태는 DohaLM develop 브랜치에서 확인 가능한 코드·테스트·문서에 한정했습니다.</p></div><div><a className="button primary" href={repositoryUrl} target="_blank" rel="noreferrer" aria-label="DohaLM GitHub Repository 새 창에서 열기">VIEW GITHUB REPOSITORY <span>↗</span></a><a className="button secondary" href={`${repositoryUrl}/docs`} target="_blank" rel="noreferrer" aria-label="DohaLM 문서 목록 새 창에서 열기">EXPLORE DOCUMENTS <span>↗</span></a><Link className="button ghost" to="/projects">VIEW ALL PROJECTS <span>→</span></Link><Link className="button ghost" to="/contact">CONTACT <span>→</span></Link></div></Reveal>
        </div>
      </section>
    </div>
  )
}
