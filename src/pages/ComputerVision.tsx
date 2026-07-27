import { Link } from 'react-router-dom'
import ImageWithFallback from '../components/ImageWithFallback'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { TechChip } from '../components/TechIcon'
import { projects, type Project } from '../data/projects'

const visionProjects = projects.filter((project) => project.categories?.includes('AI / Computer Vision'))
const bySlug = (slug: Project['slug']) => visionProjects.find((project) => project.slug === slug)!
const staccato = bySlug('staccato')
const roadSafety = bySlug('404rnf')
const roadbogo = bySlug('roadbogo')

type VisionProjectView = {
  project: Project
  problem: string
  target: string
  model: string
  scope: string
  contribution: string
  evidence: string
  integration: string
  image?: { src: string; alt: string; caption: string }
}

const projectViews: VisionProjectView[] = [
  {
    project: staccato,
    problem: '고속도로 CCTV에서 정차·갓길 정차 차량을 빠르게 식별하고 관제 대응으로 연결',
    target: 'car · truck · bus',
    model: 'YOLO11s · RT-DETR-L · Keras experiments',
    scope: '차량 탐지 → ByteTrack 추적 → ROI 이벤트 판단 → API·DB·실시간 관제 화면',
    contribution: 'Keras 모델 실험, 프론트엔드 MVP, Flask 연동·BBOX metadata·4개 VM 연결·QA 점검',
    evidence: '20,000장 balanced dataset · 최종 mAP50 0.9290 · F1 0.8932',
    integration: 'FastAPI · Flask · MySQL · Socket.IO · Next.js · 4 VM',
    image: staccato.aiPipelineImage ?? staccato.screenshots[1],
  },
  {
    project: roadSafety,
    problem: '도로 낙하물 신고를 객체 탐지와 위험도 분류, 관리자 대응으로 연결',
    target: '도로 위 낙하물',
    model: 'YOLOv8 · YOLOv8-p2 · RT-DETR',
    scope: '신고 업로드 → 객체 탐지 → 위험도 분류 → 실시간 알림 → 관리자 처리',
    contribution: '팀장, Flask 구조·DB 모델링·관리자 기능, 동일 신고 데이터 기반 3개 모델 비교 화면 구현',
    evidence: '팀장 · 개인 기여도 약 80% 이상 · 모델 비교분석 기능 및 실서비스 화면',
    integration: 'Flask · SQLAlchemy · MySQL · Flask-SocketIO · Jinja2',
    image: roadSafety.screenshots[0],
  },
  {
    project: roadbogo,
    problem: '차량·낙하물·야생동물 위험 후보를 관제자 판정과 현장 출동 흐름으로 연결',
    target: '차량 · 낙하물 · 야생동물',
    model: 'YOLO 기반 탐지 환경',
    scope: 'CCTV 분석 → 위험 후보 → 관제 판정 → 출동 배정·현장 조치',
    contribution: '현재 담당 범위: MySQL 37개 테이블, Event Outbox, Primary-Replica, Raspberry Pi 연동 스키마 설계',
    evidence: '진행 중 · CV 모델 구현이 아닌 DB·인프라 설계 범위만 완료 근거로 표시',
    integration: 'FastAPI · MySQL 8.0 · WebSocket · Docker · Raspberry Pi',
  },
]

const workflow = [
  ['01', 'DATA', '데이터 구성', '클래스·라벨을 확인하고 train / validation / test를 분리합니다.'],
  ['02', 'TRAIN', '모델 학습', 'YOLO 계열과 RT-DETR, Keras 실험을 목적에 따라 수행합니다.'],
  ['03', 'EVALUATE', '성능 비교', 'Precision · Recall · F1 · mAP를 동일 조건의 실험 안에서 비교합니다.'],
  ['04', 'SELECT', '모델 선정', '정확도뿐 아니라 처리 속도와 서비스 연동성을 함께 검토합니다.'],
  ['05', 'INFERENCE', '추론 API', '탐지 결과를 confidence · bbox · class 구조로 전달합니다.'],
  ['06', 'SERVICE', '서비스 연결', 'DB 저장, 실시간 알림, 관제 화면과 운영 환경까지 연결합니다.'],
] as const

const integrationRows = [
  { label: 'STACCATO', cells: ['YOLO11s · ByteTrack · ROI', 'FastAPI → Flask Gateway', 'MySQL event metadata', 'Socket.IO · BBOX UI · 4 VM'] },
  { label: '404 R·N·F AI', cells: ['YOLOv8 · RT-DETR 비교', 'Flask service layer', 'SQLAlchemy · MySQL', 'Flask-SocketIO · Admin UI'] },
  { label: '도로보GO', cells: ['YOLO 탐지 환경', 'FastAPI · WebSocket 환경', '37 tables · Event Outbox', 'Primary-Replica · Raspberry Pi'] },
] as const

function ProjectIndexCard({ item, index }: { item: VisionProjectView; index: number }) {
  const { project } = item
  return (
    <Reveal as="article" className="cv-index-card" delay={index * 70}>
      <div className="cv-index-topline"><span>0{index + 1}</span><strong className={project.status === 'in-progress' ? 'is-progress' : ''}>{project.status === 'in-progress' ? 'IN PROGRESS' : 'COMPLETED'}</strong></div>
      <h3>{project.name}</h3>
      <p>{project.tagline}</p>
      <dl>
        <div><dt>DETECTION</dt><dd>{item.target}</dd></div>
        <div><dt>MODEL / ENV.</dt><dd>{item.model}</dd></div>
        <div><dt>MY SCOPE</dt><dd>{item.contribution}</dd></div>
      </dl>
      <a href={`#experience-${project.slug}`}>VIEW EXPERIENCE <span>↓</span></a>
    </Reveal>
  )
}

function ExperienceCard({ item, index }: { item: VisionProjectView; index: number }) {
  const { project } = item
  return (
    <Reveal as="article" id={`experience-${project.slug}`} className="cv-experience-card" delay={index * 60}>
      <div className="cv-experience-main">
        <div className="cv-experience-heading">
          <span>0{index + 1} / {project.status === 'in-progress' ? 'CURRENT PROJECT' : 'PROJECT EXPERIENCE'}</span>
          <strong className={project.status === 'in-progress' ? 'is-progress' : ''}>{project.status === 'in-progress' ? 'IN PROGRESS' : 'VERIFIED'}</strong>
        </div>
        <h3>{project.name}</h3>
        <p className="cv-project-type">{project.type} · {project.teamNote}</p>
        <div className="cv-scope-grid">
          <section><span>PROJECT SCOPE</span><p>{item.scope}</p></section>
          <section><span>MY CONTRIBUTION</span><p>{item.contribution}</p></section>
        </div>
        <dl className="cv-fact-grid">
          <div><dt>PROBLEM</dt><dd>{item.problem}</dd></div>
          <div><dt>DETECTION TARGET</dt><dd>{item.target}</dd></div>
          <div><dt>MODEL</dt><dd>{item.model}</dd></div>
          <div><dt>EVIDENCE</dt><dd>{item.evidence}</dd></div>
          <div className="wide"><dt>SERVICE INTEGRATION</dt><dd>{item.integration}</dd></div>
        </dl>
        <div className="cv-card-actions">
          <Link to={`/projects/${project.slug}`}>DETAIL <span>→</span></Link>
          {project.slug === 'staccato' && project.github.url && <a href={project.github.url} target="_blank" rel="noreferrer">GITHUB <span>↗</span></a>}
          {project.slug === '404rnf' && project.deploy.url && <a href={project.deploy.url} target="_blank" rel="noreferrer">LIVE <span>↗</span></a>}
        </div>
      </div>
      {item.image ? (
        <figure className="cv-evidence-figure">
          <ImageWithFallback src={item.image.src} alt={item.image.alt} loading="lazy" fallbackLabel={`${project.name} 화면`} />
          <figcaption>{item.image.caption}</figcaption>
        </figure>
      ) : (
        <div className="cv-progress-visual" aria-label="도로보GO 현재 진행 범위">
          <span>CURRENT SCOPE</span><strong>DATABASE &amp;<br />INFRASTRUCTURE</strong><small>CV service environment · implementation in progress</small>
        </div>
      )}
    </Reveal>
  )
}

export default function ComputerVision() {
  const finalModels = staccato.modelExperiments ?? []
  return (
    <div className="computer-vision-page">
      <section className="cv-hero page-section" aria-labelledby="cv-page-title">
        <div className="container cv-hero-grid">
          <Reveal className="cv-hero-copy">
            <span className="eyebrow">COMPUTER VISION</span>
            <h1 id="cv-page-title">객체 탐지를<br />서비스로 연결한 경험</h1>
            <p>데이터 구성과 모델 학습·평가에서 끝나지 않고, 탐지 결과를 API·데이터베이스·실시간 관제 화면과 운영 환경까지 연결했습니다.</p>
            <div className="chip-row cv-hero-tech" aria-label="핵심 Computer Vision 기술">
              {['YOLO11', 'YOLOv8', 'RT-DETR', 'OpenCV', 'Keras', 'Flask', 'MySQL'].map((tech) => <TechChip label={tech} key={tech} />)}
            </div>
            <a className="button primary" href="#vision-projects">VIEW VISION PROJECTS <span>↓</span></a>
          </Reveal>
          <Reveal className="cv-hero-evidence" delay={100} aria-label="Computer Vision 경험 요약">
            <div className="cv-panel-head"><span>VISION SERVICE EVIDENCE</span><small>VERIFIED DATA</small></div>
            <div className="cv-hero-preview">
              <ImageWithFallback src="/images/staccato-13-detection-stopped-vehicle-2.png" alt="STACCATO 정차 차량 객체 탐지 결과" loading="eager" />
              <span className="cv-detection-label label-a">STOPPED VEHICLE <b>0.89</b></span>
              <span className="cv-detection-label label-b">CAR <b>0.86</b></span>
            </div>
            <dl className="cv-hero-metrics">
              <div><dt>PROJECTS</dt><dd>03</dd></div><div><dt>DATASET</dt><dd>20K</dd></div><div><dt>mAP50</dt><dd>.9290</dd></div><div><dt>PIPELINE</dt><dd>E2E</dd></div>
            </dl>
            <div className="cv-panel-foot"><span><i /> MODEL → API → DB → UI</span><strong>SERVICE CONNECTED</strong></div>
          </Reveal>
        </div>
      </section>

      <section className="section cv-index-section" id="vision-projects" aria-labelledby="cv-index-title">
        <div className="container">
          <SectionHeading id="cv-index-title" eyebrow="01 / VISION PROJECT INDEX" title="VISION PROJECT INDEX" description="프로젝트별 탐지 대상, 모델 환경, 실제 담당 범위를 빠르게 비교합니다." />
          <div className="cv-index-grid">{projectViews.map((item, index) => <ProjectIndexCard item={item} index={index} key={item.project.slug} />)}</div>
        </div>
      </section>

      <section className="section cv-experience-section" aria-labelledby="cv-experience-title">
        <div className="container">
          <SectionHeading id="cv-experience-title" eyebrow="02 / PROJECT EXPERIENCE" title="PROJECT EXPERIENCE" description="팀 전체 시스템 범위와 직접 수행한 역할을 분리해 Computer Vision 경험만 압축했습니다." />
          <div className="cv-experience-list">{projectViews.map((item, index) => <ExperienceCard item={item} index={index} key={item.project.slug} />)}</div>
        </div>
      </section>

      <section className="section cv-workflow-section" aria-labelledby="cv-workflow-title">
        <div className="container">
          <SectionHeading id="cv-workflow-title" eyebrow="03 / SHARED WORKFLOW" title="SHARED VISION WORKFLOW" description="여러 프로젝트에서 확인된 모델 실험과 서비스 적용의 공통 흐름입니다." />
          <Reveal className="cv-workflow" role="list">
            {workflow.map(([number, code, title, description]) => <div className="cv-workflow-step" role="listitem" key={number}><span>{number}</span><small>{code}</small><h3>{title}</h3><p>{description}</p></div>)}
          </Reveal>
        </div>
      </section>

      <section className="section cv-model-section" aria-labelledby="cv-model-title">
        <div className="container">
          <SectionHeading id="cv-model-title" eyebrow="04 / MODEL EVIDENCE" title="MODEL EVIDENCE" description="STACCATO 최종 발표 성능표의 동일 비교 조건 데이터만 사용했습니다." />
          <Reveal className="cv-model-layout">
            <div className="cv-model-summary">
              <span className="cv-final-badge">FINAL MODEL</span><h3>YOLO11s<br />CVAT balanced</h3>
              <p>20,000장 · car / truck / bus 3-class · train 16,000 / val 2,000 / test 2,000</p>
              <div className="cv-final-metrics"><div><span>PRECISION</span><strong>.9210</strong></div><div><span>RECALL</span><strong>.8670</strong></div><div><span>F1</span><strong>.8932</strong></div><div><span>mAP50</span><strong>.9290</strong></div></div>
              <p className="cv-selection-note">{staccato.modelEvidenceNote}</p>
            </div>
            <div className="cv-model-table-wrap" tabIndex={0} aria-label="STACCATO 모델 성능 비교표, 가로로 스크롤 가능">
              <table className="cv-model-table">
                <caption className="sr-only">STACCATO 동일 최종 비교표 모델 성능</caption>
                <thead><tr><th>MODEL</th><th>PRECISION</th><th>RECALL</th><th>F1</th><th>mAP50</th><th>mAP50-95</th><th>RESULT</th></tr></thead>
                <tbody>{finalModels.map((model) => <tr className={model.note.includes('최종') ? 'is-final' : ''} key={model.model}><th>{model.model}</th><td>{model.precision}</td><td>{model.recall}</td><td>{model.f1}</td><td>{model.map50}</td><td>{model.map5095}</td><td>{model.note}</td></tr>)}</tbody>
              </table>
            </div>
          </Reveal>
          <Reveal as="p" className="cv-data-note">데이터 충돌 처리: 입력 960 · F1 0.8696 · mAP50 0.9083 후보는 현재 프로젝트 데이터에서 동일 모델·데이터셋·평가 시점을 확인할 수 없어 제외했습니다. RT-DETR-L 조기 종료 로그(mAP@0.5 0.786)도 100 epoch 최종 비교표와 다른 실험 시점이므로 혼합하지 않았습니다.</Reveal>
        </div>
      </section>

      <section className="section cv-integration-section" aria-labelledby="cv-integration-title">
        <div className="container">
          <SectionHeading id="cv-integration-title" eyebrow="05 / SERVICE INTEGRATION" title="SERVICE INTEGRATION MATRIX" description="모델 출력이 백엔드·데이터·사용자 화면과 어떤 경로로 연결됐는지 프로젝트별로 정리했습니다." />
          <Reveal className="cv-matrix" role="table" aria-label="Computer Vision 서비스 통합 매트릭스">
            <div className="cv-matrix-row cv-matrix-head" role="row"><span role="columnheader">PROJECT</span><span role="columnheader">AI</span><span role="columnheader">BACKEND</span><span role="columnheader">DATA</span><span role="columnheader">DELIVERY</span></div>
            {integrationRows.map((row) => <div className="cv-matrix-row" role="row" key={row.label}><strong role="rowheader">{row.label}</strong>{row.cells.map((cell, index) => <span role="cell" data-label={['AI', 'BACKEND', 'DATA', 'DELIVERY'][index]} key={cell}>{cell}</span>)}</div>)}
          </Reveal>
        </div>
      </section>

      <section className="section cv-stack-section" aria-labelledby="cv-stack-title">
        <div className="container">
          <SectionHeading id="cv-stack-title" eyebrow="06 / COMMON STACK" title="COMMON VISION STACK" description="프로젝트 데이터에서 직접 학습·구현·연동 또는 운영 근거가 확인된 기술만 표시합니다." />
          <Reveal className="cv-stack-grid">
            {[['DETECTION', ['YOLO11', 'YOLOv8', 'RT-DETR', 'OpenCV']], ['EXPERIMENT', ['Python', 'Keras', 'TensorFlow']], ['SERVICE', ['FastAPI', 'Flask', 'Socket.IO', 'MySQL']], ['OPERATION', ['Linux', 'Nginx', 'Docker', 'VMware']]].map(([label, techs]) => <div key={label as string}><span>{label}</span><div className="chip-row">{(techs as string[]).map((tech) => <TechChip label={tech} key={tech} />)}</div></div>)}
          </Reveal>
        </div>
      </section>

      <section className="section cv-cta-section">
        <div className="container"><Reveal className="cv-cta-panel"><div><span className="eyebrow">RELATED PROJECTS / CTA</span><h2>구현 근거를 더 자세히 확인하세요.</h2><p>프로젝트 상세 페이지에서 시스템 구조, 트러블슈팅, 실제 화면과 문서를 확인할 수 있습니다.</p></div><div className="cv-cta-actions"><Link className="button primary" to="/projects">VIEW ALL PROJECTS <span>→</span></Link><Link className="button ghost" to="/contact">CONTACT <span>→</span></Link></div></Reveal></div>
      </section>
    </div>
  )
}
