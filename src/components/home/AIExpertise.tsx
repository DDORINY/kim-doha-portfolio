import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { aiExpertiseAreas } from '../../data/home'
import ImageWithFallback from '../ImageWithFallback'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { TechChip } from '../TechIcon'

const visionPipeline = [
  { label: 'DATASET', value: '20K IMAGES' },
  { label: 'TRAINING', value: 'YOLO11s' },
  { label: 'DETECTION', value: 'CAR · TRUCK · BUS' },
  { label: 'API', value: 'INFERENCE' },
  { label: 'MONITORING', value: 'DASHBOARD' },
]

const visionMetrics = [
  { label: 'BEST MODEL', value: 'YOLO11s' },
  { label: 'mAP50', value: '0.9290' },
  { label: 'F1 SCORE', value: '0.8932' },
  { label: 'PIPELINE', value: 'API CONNECTED' },
]

const llmWorkflow = [
  { label: 'INPUT', value: 'DOCUMENT' },
  { label: 'ANALYSIS', value: 'PROMPT' },
  { label: 'OUTPUT', value: 'STRUCTURED JSON' },
  { label: 'ACTION', value: 'AUTOMATION' },
]

const llmCapabilities = ['Document Analysis', 'Prompt Engineering', 'Structured Output', 'AI Agent', 'Automation']

function VisionExpertiseVisual() {
  return (
    <div className="expertise-main-visual vision-expertise-panel">
      <div className="expertise-panel-header">
        <span>DETECTION PIPELINE</span>
        <small>MODEL → SERVICE</small>
      </div>
      <div className="vision-pipeline-flow" role="img" aria-label="데이터셋부터 관제 화면까지 이어지는 객체 탐지 파이프라인">
        {visionPipeline.map((step, index) => (
          <div className="vision-pipeline-step" style={{ '--expertise-step': index } as CSSProperties} key={step.label}>
            <span>{step.label}</span>
            <strong>{step.value}</strong>
          </div>
        ))}
      </div>
      <figure className="vision-detection-preview">
        <ImageWithFallback
          src="/images/ai-learning/staccato-yolo11s-val-pred-01.jpg"
          alt="YOLO11s CVAT balanced 모델의 car, truck, bus 객체 탐지 결과"
          loading="lazy"
          fallbackLabel="YOLO11s 객체 탐지 결과"
        />
        <figcaption><span>VALIDATION DETECTION</span><strong>CAR · TRUCK · BUS</strong></figcaption>
      </figure>
      <dl className="expertise-metric-grid">
        {visionMetrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}
      </dl>
    </div>
  )
}

function LlmExpertiseVisual() {
  return (
    <div className="expertise-main-visual llm-expertise-panel">
      <div className="expertise-panel-header">
        <span>LLM APPLICATION WORKFLOW</span>
        <small>WORKFLOW EXAMPLE</small>
      </div>
      <div className="llm-workflow-flow" role="group" aria-label="문서 입력부터 자동화 작업까지 이어지는 LLM 워크플로 예시">
        {llmWorkflow.map((step, index) => (
          <div className="llm-workflow-step" style={{ '--expertise-step': index } as CSSProperties} key={step.label}>
            <span>{step.label}</span>
            <strong>{step.value}</strong>
          </div>
        ))}
      </div>
      <div className="llm-output-layout">
        <div className="llm-output-preview" role="group" aria-label="구조화 응답 워크플로 예시">
          <span>STRUCTURED RESPONSE</span>
          <code>
            <i>{'{'}</i>
            <em><b>&quot;source&quot;</b>: &quot;document&quot;,</em>
            <em><b>&quot;output&quot;</b>: &quot;structured&quot;,</em>
            <em><b>&quot;next&quot;</b>: &quot;automation&quot;</em>
            <i>{'}'}</i>
          </code>
        </div>
        <ul className="llm-capability-list" aria-label="LLM 구현 역량">
          {llmCapabilities.map((capability) => <li key={capability}><i aria-hidden="true">✓</i><span>{capability}</span></li>)}
        </ul>
      </div>
    </div>
  )
}

export default function AIExpertise() {
  return (
    <section className="section home-expertise" aria-labelledby="ai-expertise-title">
      <div className="container">
        <SectionHeading
          id="ai-expertise-title"
          eyebrow="03 / AI FOCUS"
          title="AI EXPERTISE"
          description="실제 서비스 구현 경험을 중심으로 확장하고 있는 AI 전문 영역입니다."
        />
        <div className="home-expertise-grid">
          {aiExpertiseAreas.map((area, index) => (
            <Reveal as="article" className={`home-expertise-card expertise-side-${index + 1}`} delay={index * 70} key={area.title}>
              <span className="section-number">0{index + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <div className="chip-row expertise-tags">
                {area.keywords.map((keyword) => <TechChip label={keyword} key={keyword} />)}
              </div>
              {index === 0 ? <VisionExpertiseVisual /> : <LlmExpertiseVisual />}
              <Link className="text-link expertise-cta" to={area.path}>{area.linkLabel} <span>↗</span></Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
