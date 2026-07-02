import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Resume() {
  return (
    <section className="section page-section"><div className="container resume-page">
      <div className="resume-header"><SectionHeading eyebrow="RESUME" title={`${profile.name} · ${profile.role}`} description={profile.intro} /><button className="button secondary disabled-button" disabled title="public/docs에 PDF를 추가한 뒤 링크를 연결해 주세요">PDF 이력서 준비 중</button></div>
      <div className="resume-grid">
        <section className="resume-block"><span className="section-number">01 / SUMMARY</span><h2>경력 요약</h2><p>사용자의 흐름을 고려한 UI와 유지보수 가능한 컴포넌트 설계에 관심이 있습니다. 팀 프로젝트를 통해 기획부터 구현, 협업, 배포까지 제품 개발의 전 과정을 경험했습니다.</p></section>
        <section className="resume-block"><span className="section-number">02 / EDUCATION</span><h2>교육</h2>{profile.education.map((item) => <div className="timeline-item" key={item.title}><span>{item.period}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>)}</section>
        <section className="resume-block full"><span className="section-number">03 / SKILLS</span><h2>기술 스택</h2><div className="skills-grid">{Object.entries(profile.skills).map(([group, skills]) => <div key={group}><h3>{group}</h3><div className="large-chip-row">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>
        <section className="resume-block full"><span className="section-number">04 / PROJECTS</span><h2>프로젝트 요약</h2><div className="resume-projects">{projects.map((project) => <Link to={`/projects/${project.slug}`} key={project.slug}><div><span>{project.type}</span><h3>{project.name}</h3><p>{project.tagline}</p></div><strong>↗</strong></Link>)}</div></section>
      </div>
    </div></section>
  )
}
