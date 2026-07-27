import { coreCompetencies } from '../../data/home'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

function CompetencyVisual({ index }: { index: number }) {
  if (index === 0) return <div className="competency-visual visual-integration" aria-hidden="true"><span>AI</span><i /><span>API</span><i /><span>UI</span></div>
  if (index === 1) return <div className="competency-visual visual-detection" aria-hidden="true"><span className="visual-box box-a" /><span className="visual-box box-b" /><small>CAR · 94%</small></div>
  if (index === 2) return <div className="competency-visual visual-endpoint" aria-hidden="true"><span>POST</span><code>/api/v1/inference</code><i>200</i></div>
  return <div className="competency-visual visual-deploy" aria-hidden="true"><span><i />ai-server <b>UP</b></span><span><i />api-server <b>UP</b></span><span><i />database <b>UP</b></span></div>
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
