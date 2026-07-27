import { Link } from 'react-router-dom'
import Reveal from '../Reveal'

export default function ContactCTA() {
  return (
    <section className="section compact-cta" aria-labelledby="contact-cta-title">
      <div className="container">
        <Reveal className="cta-box">
          <div>
            <span className="eyebrow">05 / CONTACT</span>
            <h2 id="contact-cta-title">LET'S BUILD AI SERVICES</h2>
            <p>AI 서비스 개발, Python 백엔드, Computer Vision과<br />LLM 애플리케이션 직무를 목표로 하고 있습니다.</p>
          </div>
          <Link className="button light cta-arrow-button" to="/contact">CONTACT ME <span aria-hidden="true">→</span></Link>
        </Reveal>
      </div>
    </section>
  )
}
