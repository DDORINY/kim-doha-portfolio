import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section className="section page-section"><div className="container contact-page"><SectionHeading eyebrow="CONTACT" title="AI와 서비스에 대해 이야기해요." description="새로운 기회, 프로젝트, 기술 이야기를 언제든 환영합니다." /><div className="contact-grid"><a href={profile.github} target="_blank" rel="noreferrer"><span>01 / GITHUB</span><h2>코드와 작업 기록</h2><p>{profile.github}</p><strong>↗</strong></a><a href={`mailto:${profile.email}`}><span>02 / EMAIL</span><h2>메일 보내기</h2><p>{profile.email}</p><strong>↗</strong></a><a href={profile.notion} target="_blank" rel="noreferrer"><span>03 / AI LEARNING NOTION</span><h2>AI 학습 기록</h2><p>Python부터 AI API 연동까지</p><strong>↗</strong></a><div className="contact-placeholder"><span>04 / MORE LINKS</span><h2>추가 포트폴리오</h2><p>링크 준비 중</p></div></div></div></section>
  )
}
