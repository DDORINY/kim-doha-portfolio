import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { defaultSkillMeta, skillGroupMeta } from '../components/SkillIcons'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Resume() {
  return (
    <section className="section page-section"><div className="container resume-page">
      <div className="resume-header">
        <SectionHeading eyebrow="RESUME" title={`${profile.name} · ${profile.role}`} description={profile.intro} />
        <div className="resume-photo-card">
          <img src={profile.photo} alt={`${profile.name} 증명사진`} />
          <button className="button primary" onClick={() => window.print()} title="브라우저 인쇄 대화상자에서 PDF로 저장할 수 있습니다">이력서 다운로드</button>
        </div>
      </div>
      <div className="resume-links">
        <a href={`mailto:${profile.email}`}>Email · {profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub · github.com/DDORINY</a>
        <a href={profile.portfolio} target="_blank" rel="noreferrer">Portfolio · ddoriny.com</a>
        <a href={profile.notion} target="_blank" rel="noreferrer">Notion · 학습 기록</a>
      </div>
      <div className="resume-positioning"><span>{profile.positioning.position}</span><p>{profile.positioning.statement}</p></div>
      <div className="resume-grid">
        <Reveal as="section" className="resume-block full"><span className="section-number">01 / CORE COMPETENCIES</span><h2>핵심 역량</h2><ul className="check-list" style={{ gridTemplateColumns: '1fr', gap: 10, marginTop: 12 }}>{profile.coreCompetencies.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
        <Reveal as="section" className="resume-block full"><span className="section-number">02 / CAREER SUMMARY</span><h2>경력 요약</h2><dl className="summary-table">{profile.careerSummary.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></Reveal>
        <Reveal as="section" className="resume-block full"><span className="section-number">03 / ABOUT</span><h2>자기소개</h2><div className="about-text">{profile.about.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></Reveal>
        <Reveal as="section" className="resume-block"><span className="section-number">04 / EDUCATION</span><h2>교육</h2>{profile.education.map((item) => <div className="timeline-item" key={item.title}><span>{item.period}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>)}</Reveal>
        <Reveal as="section" className="resume-block"><span className="section-number">05 / DESIRED ROLES</span><h2>희망 직무</h2><div className="large-chip-row">{profile.desiredRoles.map((role) => <span key={role}>{role}</span>)}</div></Reveal>
        <Reveal as="section" className="resume-block full"><span className="section-number">06 / STRENGTHS BY ROLE</span><h2>지원 가능 직무별 강점</h2><div className="role-strength-grid">{profile.roleStrengths.map((item) => (
          <div className="role-strength-card" key={item.role}>
            <h3>{item.role}</h3>
            <ul className="check-list" style={{ gridTemplateColumns: '1fr', gap: 8 }}>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </div>
        ))}</div></Reveal>
        <Reveal as="section" className="resume-block full"><span className="section-number">07 / CERTIFICATIONS & AWARDS</span><h2>자격증 · 수료 · 수상</h2><div className="cert-list">{profile.certifications.map((cert) => (
          <div className={cert.image ? 'cert-item has-image' : 'cert-item'} key={cert.title}>
            {cert.image && (
              <a className="cert-image" href={cert.image} target="_blank" rel="noreferrer" aria-label={`${cert.title} 이미지 크게 보기`}>
                <img src={cert.image} alt={cert.title} loading="lazy" />
              </a>
            )}
            <h3>{cert.title}</h3>
            <p>{cert.issuer} · {cert.date}</p>
          </div>
        ))}</div></Reveal>
        <Reveal as="section" className="resume-block full"><span className="section-number">08 / SKILLS</span><h2>기술 스택</h2><div className="skills-grid">{Object.entries(profile.skills).map(([group, skills]) => {
          const meta = skillGroupMeta[group] ?? defaultSkillMeta
          const usage = profile.skillUsage[group as keyof typeof profile.skillUsage]
          return (
            <Reveal as="div" className="skill-category" style={{ '--accent': meta.accent } as React.CSSProperties} key={group}>
              <div className="skill-category-head"><span className="skill-icon-badge"><meta.Icon /></span><h3>{group}</h3></div>
              <div className="skill-chip-grid">{skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
              {usage && <ul className="skill-usage-list">{usage.map((entry) => <li key={entry.skill}><strong>{entry.skill}</strong>{entry.usage}</li>)}</ul>}
            </Reveal>
          )
        })}</div></Reveal>
        <Reveal as="section" className="resume-block full"><span className="section-number">09 / INFRASTRUCTURE</span><h2>배포 및 인프라 경험</h2><p>{profile.infra.summary}</p><div className="cert-list">{profile.infra.categories.map((category) => (
          <div className="cert-item" key={category.title}>
            <h3>{category.title}</h3>
            <ul className="check-list" style={{ gridTemplateColumns: '1fr', gap: 8, marginTop: 12 }}>{category.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}</div></Reveal>
        <Reveal as="section" className="resume-block full"><span className="section-number">10 / WORK EXPERIENCE</span><h2>경력 사항</h2><div className="work-list">{profile.workExperience.map((job) => (
          <div className="work-item" key={job.role}>
            <div className="work-item-head"><span>{job.period}</span><div><h3>{job.role}</h3><p>{job.description}</p></div></div>
            <ul className="check-list work-tasks">{job.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
            <p className="work-takeaway">{job.takeaway}</p>
          </div>
        ))}</div></Reveal>
        <Reveal as="section" className="resume-block full"><span className="section-number">11 / PROJECTS</span><h2>프로젝트 요약</h2><div className="resume-projects">{projects.map((project) => (
          <Reveal as={Link} to={`/projects/${project.slug}`} key={project.slug}>
            <div>
              <span>{project.type}</span><h3>{project.name}</h3><p>{project.tagline}</p>
              {project.resumeHighlight && (
                <dl className="resume-project-meta">
                  <div><dt>역할</dt><dd>{project.resumeHighlight.role}</dd></div>
                  <div><dt>기여도</dt><dd>{project.resumeHighlight.contribution}</dd></div>
                  <div><dt>핵심 성과</dt><dd>{project.resumeHighlight.achievement}</dd></div>
                </dl>
              )}
            </div>
            <strong>↗</strong>
          </Reveal>
        ))}</div></Reveal>
      </div>
    </div></section>
  )
}
