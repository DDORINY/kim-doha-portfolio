import { Link } from 'react-router-dom'
import { aiExpertiseAreas } from '../../data/home'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { TechChip } from '../TechIcon'

function ExpertiseVisual({ type }: { type: 'vision' | 'llm' }) {
  if (type === 'vision') {
    return <div className="expertise-visual expertise-vision" aria-hidden="true"><span className="expertise-frame"><i /><i /><small>vehicle 0.94</small></span><b>FRAME → DETECT → EVENT</b></div>
  }
  return <div className="expertise-visual expertise-llm" aria-hidden="true"><span>DOC</span><i /><span>PROMPT</span><i /><span>JSON</span></div>
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
              <ExpertiseVisual type={index === 0 ? 'vision' : 'llm'} />
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
