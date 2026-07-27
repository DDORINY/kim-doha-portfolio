import { coreCompetencies } from '../../data/home'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

type MetricItemProps = {
  label: string
  value: string
  status?: boolean
}

type StatusRowProps = {
  label: string
  status: 'RUNNING' | 'HEALTHY' | 'CONNECTED'
}

const competencyTags = [
  ['Model Inference', 'API Contract', 'Service UI'],
  ['YOLOv8', 'YOLO11', 'RT-DETR', 'OpenCV', 'Roboflow', 'Keras'],
  ['REST API', 'Authentication', 'Data Processing', 'AI Inference'],
  ['Docker', 'Linux', 'Nginx', 'MySQL'],
]

function MetricItem({ label, value, status = false }: MetricItemProps) {
  return (
    <span className="competency-metric">
      <small>{label}</small>
      <strong className={status ? 'is-status' : undefined}>{value}</strong>
    </span>
  )
}

function SupportTags({ items }: { items: string[] }) {
  return (
    <div className="competency-tags" aria-label="관련 기술 및 구현 범위">
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  )
}

function PanelLabel({ children }: { children: string }) {
  return <span className="competency-panel-label">{children}</span>
}

function ServiceFlowPanel() {
  const nodes = [
    ['AI', 'MODEL'],
    ['API', 'REST'],
    ['SERVICE', 'WEB'],
    ['USER', 'CLIENT'],
  ]

  return (
    <div className="competency-visual service-flow-panel" aria-label="AI 서비스 연결 상태 예시">
      <div className="competency-panel-head">
        <PanelLabel>STATUS PREVIEW</PanelLabel>
        <span className="panel-live-status"><i aria-hidden="true" /> LIVE FLOW</span>
      </div>
      <div className="service-flow" aria-label="AI 모델, API, 서비스, 사용자 연결 흐름">
        {nodes.map(([title, detail], index) => (
          <div className="service-flow-step" key={title}>
            <span className="service-flow-node"><strong>{title}</strong><small>{detail}</small><i aria-hidden="true" /></span>
            {index < nodes.length - 1 && <span className="service-flow-line" aria-hidden="true"><i /></span>}
          </div>
        ))}
      </div>
      <div className="integration-metrics">
        <MetricItem label="MODEL STATUS" value="READY" status />
        <MetricItem label="API STATUS" value="200 OK" status />
        <MetricItem label="LATENCY" value="34ms" />
        <MetricItem label="REQUESTS" value="1,284" />
      </div>
      <div className="integration-connected"><i aria-hidden="true" /> SERVICE CONNECTED <small>UI SIMULATION</small></div>
    </div>
  )
}

function DetectionPreview() {
  return (
    <div className="competency-visual detection-panel">
      <div className="competency-panel-head detection-head">
        <PanelLabel>DETECTION PREVIEW</PanelLabel>
        <span className="panel-live-status"><i aria-hidden="true" /> OBJECT DETECTION</span>
      </div>
      <figure className="detection-preview">
        <img
          src="/images/staccato-11-cctv-bbox.png"
          alt="STACCATO CCTV 관제 화면의 차량 객체 탐지 결과"
          loading="lazy"
        />
        <span className="detection-image-badge">YOLO11s · CVAT BALANCED</span>
      </figure>
      <div className="detection-metrics">
        <MetricItem label="BEST MODEL" value="YOLO11s" />
        <MetricItem label="mAP50" value="92.90%" />
        <MetricItem label="F1 SCORE" value="89.32%" />
        <MetricItem label="INFERENCE" value="ASYNC API" />
      </div>
    </div>
  )
}

function ApiResponsePanel() {
  return (
    <div className="competency-visual api-response-panel" aria-label="REST API 응답 예시">
      <div className="competency-panel-head">
        <PanelLabel>RESPONSE EXAMPLE</PanelLabel>
        <span className="panel-live-status"><i aria-hidden="true" /> API FLOW</span>
      </div>
      <div className="endpoint-head"><span>POST</span><code>/predict</code><i>200 OK</i></div>
      <div className="endpoint-json" aria-label="예시 JSON 응답">
        <small>{'{'}</small>
        <span><b>"status"</b><i>"success",</i></span>
        <span><b>"objects"</b><i>8,</i></span>
        <span><b>"latency"</b><i>"34ms"</i></span>
        <small>{'}'}</small>
      </div>
    </div>
  )
}

function StatusRow({ label, status }: StatusRowProps) {
  return (
    <span className="service-status-row">
      <i aria-hidden="true" />
      <strong>{label}</strong>
      <small>{status}</small>
      <b><i aria-hidden="true" /> HEALTHY</b>
    </span>
  )
}

function ServiceStatusPanel() {
  const services: StatusRowProps[] = [
    { label: 'Frontend', status: 'RUNNING' },
    { label: 'Backend API', status: 'HEALTHY' },
    { label: 'AI Server', status: 'RUNNING' },
    { label: 'Database', status: 'CONNECTED' },
    { label: 'Nginx', status: 'HEALTHY' },
    { label: 'Docker', status: 'RUNNING' },
  ]

  return (
    <div className="competency-visual service-status-panel" aria-label="프로덕션 서비스 상태 예시">
      <div className="competency-panel-head">
        <PanelLabel>PRODUCTION SERVICES</PanelLabel>
        <span className="panel-live-status"><i aria-hidden="true" /> STATUS PREVIEW</span>
      </div>
      <div className="service-status-list">
        {services.map((service) => <StatusRow key={service.label} {...service} />)}
      </div>
    </div>
  )
}

function CompetencyVisual({ index }: { index: number }) {
  if (index === 0) return <ServiceFlowPanel />
  if (index === 1) return <DetectionPreview />
  if (index === 2) return <ApiResponsePanel />
  return <ServiceStatusPanel />
}

function CompetencyCard({ competency, index }: { competency: (typeof coreCompetencies)[number]; index: number }) {
  return (
    <Reveal as="article" className={`home-info-card home-bento-card home-bento-${index + 1}`} delay={index * 70}>
      <div className="home-bento-copy">
        <span className="section-number">0{index + 1}</span>
        <h3>{competency.title}</h3>
        <p>{competency.description}</p>
        <SupportTags items={competencyTags[index]} />
      </div>
      <CompetencyVisual index={index} />
    </Reveal>
  )
}

export default function CoreCompetencies() {
  return (
    <section className="section home-competencies" aria-labelledby="core-competencies-title">
      <div className="container">
        <SectionHeading
          id="core-competencies-title"
          eyebrow="01 / CAPABILITIES"
          title="CORE COMPETENCIES"
          description="AI 모델을 학습하는 것에서 끝내지 않고 웹 서비스와 API로 연결해 실제 사용 가능한 기능으로 구현합니다."
        />
        <div className="home-card-grid home-bento-grid">
          {coreCompetencies.map((competency, index) => (
            <CompetencyCard competency={competency} index={index} key={competency.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
