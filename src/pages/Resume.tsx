import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Resume() {
  return (
    <section className="section page-section"><div className="container resume-page">
      <div className="resume-header"><SectionHeading eyebrow="RESUME" title={`${profile.name} · ${profile.role}`} description={profile.intro} /><button className="button secondary disabled-button" disabled title="public/docs에 PDF를 추가한 뒤 링크를 연결해 주세요">PDF 이력서 준비 중</button></div>
      <div className="resume-grid">
        <section className="resume-block full"><span className="section-number">01 / CAREER SUMMARY</span><h2>경력 요약</h2><dl className="summary-table">{profile.careerSummary.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></section>
        <section className="resume-block full"><span className="section-number">02 / ABOUT</span><h2>자기소개</h2><div className="about-text">{profile.about.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></section>
        <section className="resume-block"><span className="section-number">03 / EDUCATION</span><h2>교육</h2>{profile.education.map((item) => <div className="timeline-item" key={item.title}><span>{item.period}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>)}</section>
        <section className="resume-block"><span className="section-number">04 / DESIRED ROLES</span><h2>희망 직무</h2><div className="large-chip-row">{profile.desiredRoles.map((role) => <span key={role}>{role}</span>)}</div></section>
        <section className="resume-block full"><span className="section-number">05 / CERTIFICATIONS</span><h2>자격증</h2><div className="cert-list">{profile.certifications.map((cert) => <div className="cert-item" key={cert.title}><h3>{cert.title}</h3><p>{cert.issuer} · {cert.date}</p></div>)}</div></section>
        <section className="resume-block full"><span className="section-number">06 / SKILLS</span><h2>기술 스택</h2><div className="skills-grid">{Object.entries(profile.skills).map(([group, skills]) => <div key={group}><h3>{group}</h3><div className="large-chip-row">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>
        <section className="resume-block full"><span className="section-number">07 / INFRASTRUCTURE</span><h2>인프라 구축 및 배포 환경</h2><p>{profile.infra.summary}</p><ul className="check-list">{profile.infra.highlights.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section className="resume-block full"><span className="section-number">08 / WORK EXPERIENCE</span><h2>경력 사항</h2><div className="work-list">{profile.workExperience.map((job) => (
          <div className="work-item" key={job.role}>
            <div className="work-item-head"><span>{job.period}</span><div><h3>{job.role}</h3><p>{job.description}</p></div></div>
            <ul className="check-list work-tasks">{job.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
            <p className="work-takeaway">{job.takeaway}</p>
          </div>
        ))}</div></section>
        <section className="resume-block full"><span className="section-number">09 / PROJECTS</span><h2>프로젝트 요약</h2><div className="resume-projects">{projects.map((project) => <Link to={`/projects/${project.slug}`} key={project.slug}><div><span>{project.type}</span><h3>{project.name}</h3><p>{project.tagline}</p></div><strong>↗</strong></Link>)}</div></section>
      </div>
    </div></section>
  )
}
