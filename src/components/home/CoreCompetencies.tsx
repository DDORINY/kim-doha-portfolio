import { coreCompetencies } from '../../data/home'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

function CompetencyVisual({ index }: { index: number }) {
  if (index === 0) return (
    <div className="competency-visual visual-integration" aria-hidden="true">
      <div className="integration-flow"><span>AI<i /></span><b /><span>API<i /></span><b /><span>UI<i /></span></div>
      <div className="integration-metrics">
        <span><small>MODEL</small><strong>READY</strong></span>
        <span><small>API</small><strong>200 OK</strong></span>
        <span><small>LATENCY</small><strong>34ms</strong></span>
        <span><small>REQUESTS</small><strong>1,284</strong></span>
      </div>
      <div className="integration-connected"><i /> SERVICE CONNECTED</div>
    </div>
  )
  if (index === 1) return (
    <div className="competency-visual visual-detection" aria-hidden="true">
      <div className="detection-preview">
        <span className="visual-box box-a"><small>CAR 0.94</small></span>
        <span className="visual-box box-b"><small>TRUCK 0.88</small></span>
        <span className="visual-box box-c"><small>BUS 0.92</small></span>
        <i className="detection-road" />
      </div>
      <div className="detection-metrics">
        <span><small>BEST MODEL</small><strong>YOLO11s</strong></span>
        <span><small>mAP50</small><strong>92.90%</strong></span>
        <span><small>F1</small><strong>89.32%</strong></span>
        <span><small>FPS</small><strong>ASYNC</strong></span>
      </div>
    </div>
  )
  if (index === 2) return (
    <div className="competency-visual visual-endpoint" aria-hidden="true">
      <div className="endpoint-head"><span>POST</span><code>/predict</code><i>200 OK</i></div>
      <div className="endpoint-json">
        <small>{'{'}</small>
        <span><b>"status"</b><i>"success"</i></span>
        <span><b>"objects"</b><i>8</i></span>
        <span><b>"latency"</b><i>"34ms"</i></span>
        <small>{'}'}</small>
      </div>
    </div>
  )
  return (
    <div className="competency-visual visual-deploy" aria-hidden="true">
      <div className="deploy-head"><span>PRODUCTION SERVICES</span><strong><i /> HEALTHY</strong></div>
      <div className="deploy-services">
        <span><i />Frontend <b>RUNNING</b></span>
        <span><i />Backend <b>RUNNING</b></span>
        <span><i />AI Server <b>HEALTHY</b></span>
        <span><i />Database <b>CONNECTED</b></span>
        <span><i />Nginx <b>RUNNING</b></span>
        <span><i />Docker <b>HEALTHY</b></span>
      </div>
    </div>
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
            <Reveal as="article" className={`home-info-card home-bento-card home-bento-${index + 1}`} delay={index * 70} key={competency.title}>
              <div className="home-bento-copy">
                <span className="section-number">0{index + 1}</span>
                <h3>{competency.title}</h3>
                <p>{competency.description}</p>
              </div>
              <CompetencyVisual index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
