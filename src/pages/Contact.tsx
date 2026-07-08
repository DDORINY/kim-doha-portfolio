import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import TechIcon, { TechChip } from '../components/TechIcon'
import { contactFaq, contactKeywords, contactSummary, contactTopics, profile } from '../data/profile'

export default function Contact() {
  return (
    <section className="section page-section">
      <div className="container contact-page">
        <SectionHeading eyebrow="CONTACT" title="AI 서비스 개발자로의 기회를 기다립니다." description="Computer Vision, Flask/FastAPI 연동, DB 저장, 프론트엔드 통합, 배포·운영 점검 경험을 바탕으로 실제 서비스에 연결되는 AI 개발을 지향합니다." />
        <Reveal as="div" className="contact-summary">
          <span className="eyebrow">SUMMARY</span>
          <p>{contactSummary}</p>
          <div className="contact-keywords">{contactKeywords.map((keyword) => <TechChip label={keyword} key={keyword} />)}</div>
        </Reveal>
        <div className="contact-grid">
          <Reveal as="a" href={`mailto:${profile.email}`}><span>01 / EMAIL</span><h2>메일로 연락하기</h2><p>{profile.email}</p><strong>↗</strong></Reveal>
          <Reveal as="a" href={profile.github} target="_blank" rel="noreferrer"><span>02 / GITHUB</span><h2><TechIcon name="GitHub" />코드와 작업 기록</h2><p>{profile.github}</p><strong>↗</strong></Reveal>
          <Reveal as={Link} to="/projects"><span>03 / PROJECTS</span><h2>주요 프로젝트 보기</h2><p>STACCATO, 404RNF, CommerceOps ERP</p><strong>↗</strong></Reveal>
          <Reveal as={Link} to="/resume"><span>04 / RESUME</span><h2>이력서 확인</h2><p>경력, 기술 스택, 프로젝트 역할 정리</p><strong>↗</strong></Reveal>
          <Reveal as="a" href={profile.notion} target="_blank" rel="noreferrer"><span>05 / AI LEARNING NOTION</span><h2>AI 학습 기록</h2><p>Python, Keras, Computer Vision, AI API 연동</p><strong>↗</strong></Reveal>
          <Reveal as={Link} to="/resume"><span>06 / DEPLOYMENT</span><h2>배포·인프라 경험</h2><p>Linux, VMware, AWS, Vercel, DNS, HTTPS 설정 경험</p><strong>↗</strong></Reveal>
        </div>
        <div className="contact-topics">
          <SectionHeading eyebrow="CONTACT TOPICS" title="연락 가능한 주제" />
          <div className="contact-topic-list">{contactTopics.map((topic) => <span className="contact-topic-chip" key={topic}>{topic}</span>)}</div>
        </div>
        <div className="contact-faq">
          <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" description="면접이나 채용 담당자분들이 궁금해하실 만한 질문에 미리 답변을 정리했습니다." />
          <div className="faq-list">
            {contactFaq.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
