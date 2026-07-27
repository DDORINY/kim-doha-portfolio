import { Link } from 'react-router-dom'
import { aiExpertiseAreas } from '../../data/home'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { TechChip } from '../TechIcon'

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
            <Reveal as="article" className="home-expertise-card" delay={index * 70} key={area.title}>
              <span className="section-number">0{index + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <div className="chip-row">
                {area.keywords.map((keyword) => <TechChip label={keyword} key={keyword} />)}
              </div>
              <Link className="text-link" to={area.path}>{area.linkLabel} <span>↗</span></Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
