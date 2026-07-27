import { Link } from 'react-router-dom'
import { careerJourney } from '../../data/home'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

export default function CareerSummary() {
  return (
    <section className="section home-career" aria-labelledby="career-journey-title">
      <div className="container">
        <SectionHeading
          id="career-journey-title"
          eyebrow="04 / JOURNEY"
          title="CAREER JOURNEY"
          description="운영 현장의 문제를 이해하는 경험에서 출발해 AI 기능을 실제 서비스로 연결하는 개발자로 전환하고 있습니다."
        />
        <div className="home-career-grid">
          {careerJourney.map((item, index) => (
            <Reveal as="article" className="home-career-card" delay={index * 70} key={item.step}>
              <span className="section-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
        <div className="center-action"><Link className="button secondary" to="/resume">VIEW FULL RESUME</Link></div>
      </div>
    </section>
  )
}
