import { coreCompetencies } from '../../data/home'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { TechChip } from '../TechIcon'

export default function CoreCompetencies() {
  return (
    <section className="section home-competencies home-capabilities" aria-labelledby="core-competencies-title">
      <div className="container">
        <SectionHeading
          id="core-competencies-title"
          eyebrow="02 / CORE CAPABILITIES"
          title="AI ENGINEERING STACK"
          description="LLM, AI Serving, Python Backend, Computer Vision을 하나의 서비스 구현 흐름으로 연결합니다."
        />
        <div className="home-capability-grid">
          {coreCompetencies.map((competency, index) => (
            <Reveal as="article" className={`home-capability-card${index === 1 ? ' is-primary' : ''}`} delay={index * 60} key={competency.title}>
              <span>0{index + 1}</span>
              <h3>{competency.title}</h3>
              <p>{competency.description}</p>
              <div className="chip-row">{competency.keywords.map((keyword) => <TechChip label={keyword} key={keyword} />)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
