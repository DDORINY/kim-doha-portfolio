import { coreCompetencies } from '../../data/home'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

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
        <div className="home-card-grid">
          {coreCompetencies.map((competency, index) => (
            <Reveal as="article" className="home-info-card" delay={index * 70} key={competency.title}>
              <span className="section-number">0{index + 1}</span>
              <h3>{competency.title}</h3>
              <p>{competency.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
