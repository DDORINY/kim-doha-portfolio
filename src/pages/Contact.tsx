import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section className="section page-section"><div className="container contact-page"><SectionHeading eyebrow="CONTACT" title="편하게 연락해 주세요." description="새로운 기회, 프로젝트, 기술 이야기를 언제든 환영합니다." /><div className="contact-grid"><a href={profile.github} target="_blank" rel="noreferrer"><span>01 / GITHUB</span><h2>코드와 작업 기록</h2><p>{profile.github}</p><strong>↗</strong></a><a href={`mailto:${profile.email}`}><span>02 / EMAIL</span><h2>메일 보내기</h2><p>{profile.email}</p><strong>↗</strong></a>{profile.portfolioLinks.map((link, i) => link.placeholder ? <div className="contact-placeholder" key={link.label}><span>0{i + 3} / {link.label.toUpperCase()}</span><h2>{link.label}</h2><p>링크 준비 중</p></div> : <a href={link.url} key={link.label}><span>0{i + 3} / {link.label.toUpperCase()}</span><h2>{link.label}</h2><strong>↗</strong></a>)}</div></div></section>
  )
}
