import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { defaultSkillMeta, skillGroupMeta } from '../components/SkillIcons'
import TechIcon, { TechChip } from '../components/TechIcon'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

function PrintProject({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="print-project">
      <div className="print-project-head"><strong>{project.name}</strong><span>{project.type}</span></div>
      <p>{project.tagline}</p>
      {project.resumeHighlight && (
        <p className="print-project-role"><b>역할</b> {project.resumeHighlight.role} · <b>기여도</b> {project.resumeHighlight.contribution}</p>
      )}
      {(project.techHighlights ?? project.highlights) && (
        <p className="print-project-tech">{(project.techHighlights ?? project.highlights)!.slice(0, 6).join(' · ')}</p>
      )}
    </div>
  )
}

export default function Resume() {
  return (
    <section className="section page-section"><div className="container resume-page">
      <div className="resume-screen-only">
        <div className="resume-header">
          <div className="resume-heading">
            <span className="eyebrow">RESUME</span>
            <h1 className="resume-name">{profile.name}</h1>
            <p className="resume-primary-role">{profile.positioning.position}</p>
            <p className="resume-secondary-role">{profile.positioning.statement}</p>
            <ul className="check-list resume-summary-lines" style={{ gridTemplateColumns: '1fr', gap: 8 }}>
              {profile.resumeSummary.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </div>
          <div className="resume-photo-card">
            <img src={profile.photo} alt={`${profile.name} 증명사진`} />
            <span className="availability-badge">{profile.availability}</span>
            <button className="button primary" onClick={() => window.print()} title="브라우저 인쇄 대화상자에서 PDF로 저장할 수 있습니다">이력서 PDF 저장</button>
          </div>
        </div>
        <div className="resume-links">
          <a href={`mailto:${profile.email}`}>Email · {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><TechIcon name="GitHub" />GitHub · github.com/DDORINY</a>
          <a href={profile.portfolio} target="_blank" rel="noreferrer">Portfolio · ddoriny.com</a>
          <a href={profile.notion} target="_blank" rel="noreferrer">Notion · 학습 기록</a>
        </div>
        <div className="chip-row resume-desired-roles">{profile.desiredRoles.map((role) => <span className="chip" key={role}>{role}</span>)}</div>
        <div className="resume-grid">
          <Reveal as="section" className="resume-block full"><span className="section-number">01 / CORE COMPETENCIES</span><h2>핵심 역량</h2><ul className="check-list" style={{ gridTemplateColumns: '1fr', gap: 10, marginTop: 12 }}>{profile.coreCompetencies.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>

          <Reveal as="section" className="resume-block full"><span className="section-number">02 / REPRESENTATIVE PROJECTS</span><h2>대표 프로젝트</h2><div className="resume-projects">{projects.map((project) => (
            <Reveal as={Link} to={`/projects/${project.slug}`} key={project.slug}>
              <div>
                <span>{project.type}{project.status === 'in-progress' && <span className="status-badge" style={{ marginLeft: 8 }}>개발 중</span>}</span>
                <h3>{project.name}</h3><p>{project.tagline}</p>
                {project.resumeHighlight && (
                  <dl className="resume-project-meta">
                    <div><dt>역할</dt><dd>{project.resumeHighlight.role}</dd></div>
                    <div><dt>기여도</dt><dd>{project.resumeHighlight.contribution}</dd></div>
                    <div><dt>핵심 성과</dt><dd>{project.resumeHighlight.achievement}</dd></div>
                  </dl>
                )}
                {(project.techHighlights ?? project.highlights) && <div className="chip-row" style={{ marginTop: 12 }}>{(project.techHighlights ?? project.highlights)!.slice(0, 6).map((tech) => <TechChip label={tech} key={tech} />)}</div>}
              </div>
              <strong>↗</strong>
            </Reveal>
          ))}</div></Reveal>

          <Reveal as="section" className="resume-block full"><span className="section-number">03 / SKILLS</span><h2>기술 스택</h2><div className="skills-grid">{Object.entries(profile.skills).map(([group, skills]) => {
            const meta = skillGroupMeta[group] ?? defaultSkillMeta
            const usage = profile.skillUsage[group as keyof typeof profile.skillUsage]
            return (
              <Reveal as="div" className="skill-category" style={{ '--accent': meta.accent } as React.CSSProperties} key={group}>
                <div className="skill-category-head"><span className="skill-icon-badge"><meta.Icon /></span><h3>{group}</h3></div>
                <div className="skill-chip-grid">{skills.map((skill) => <TechChip label={skill} className="skill-chip" key={skill} />)}</div>
                {usage && <ul className="skill-usage-list">{usage.map((entry) => <li key={entry.skill}><strong>{entry.skill}</strong>{entry.usage}</li>)}</ul>}
              </Reveal>
            )
          })}</div></Reveal>

          <Reveal as="section" className="resume-block full"><span className="section-number">04 / WORK EXPERIENCE</span><h2>경력 사항</h2><div className="work-list">{profile.workExperience.map((job) => (
            <div className="work-item" key={job.role}>
              <div className="work-item-head"><span>{job.period}</span><div><h3>{job.role}</h3><p>{job.description}</p></div></div>
              <ul className="check-list work-tasks">{job.tasks.slice(0, 3).map((task) => <li key={task}>{task}</li>)}</ul>
              <p className="work-takeaway">{job.takeaway}</p>
            </div>
          ))}</div></Reveal>

          <Reveal as="section" className="resume-block full"><span className="section-number">05 / CAREER SUMMARY</span><h2>경력 요약</h2><dl className="summary-table">{profile.careerSummary.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></Reveal>

          <Reveal as="section" className="resume-block full"><span className="section-number">06 / EDUCATION & CERTIFICATIONS</span><h2>교육 · 자격증</h2><div className="resume-edu-cert-grid">
            <div>
              <h3 className="resume-subheading">교육</h3>
              {profile.education.map((item) => <div className="timeline-item" key={item.title}><span>{item.period}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>)}
            </div>
            <div>
              <h3 className="resume-subheading">자격증 · 수료 · 수상</h3>
              <div className="cert-list">{profile.certifications.map((cert) => (
                <div className={cert.image ? 'cert-item has-image' : 'cert-item'} key={cert.title}>
                  {cert.image && (
                    <a className="cert-image" href={cert.image} target="_blank" rel="noreferrer" aria-label={`${cert.title} 이미지 크게 보기`}>
                      <img src={cert.image} alt={cert.title} loading="lazy" />
                    </a>
                  )}
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer} · {cert.date}</p>
                </div>
              ))}</div>
            </div>
          </div></Reveal>

          <Reveal as="section" className="resume-block full"><span className="section-number">07 / ABOUT</span><h2>자기소개</h2><div className="about-text">{profile.aboutShort.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div><Link className="resume-inline-link" to="/ai-learning">학습 과정과 실험 기록 더 보기 → AI Learning</Link></Reveal>

          <Reveal as="details" className="resume-block full resume-more-details">
            <summary>지원 가능 직무별 강점 · 배포·인프라 경험 더 보기</summary>
            <div className="resume-more-content">
              <h3 className="resume-subheading">지원 가능 직무별 강점</h3>
              <div className="role-strength-grid">{profile.roleStrengths.map((item) => (
                <div className="role-strength-card" key={item.role}>
                  <h3>{item.role}</h3>
                  <ul className="check-list" style={{ gridTemplateColumns: '1fr', gap: 8 }}>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              ))}</div>
              <h3 className="resume-subheading" style={{ marginTop: 36 }}>배포 및 인프라 경험</h3>
              <p>{profile.infra.summary}</p>
              <div className="cert-list">{profile.infra.categories.map((category) => (
                <div className="cert-item" key={category.title}>
                  <h3>{category.title}</h3>
                  <ul className="check-list" style={{ gridTemplateColumns: '1fr', gap: 8, marginTop: 12 }}>{category.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}</div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="resume-print-page">
        <div className="print-page print-page-1">
          <div className="print-hero">
            <div>
              <h1>{profile.name}</h1>
              <p className="print-role">{profile.positioning.position}</p>
              <p className="print-contact">{profile.email} · github.com/DDORINY · ddoriny.com</p>
            </div>
            <img src={profile.photo} alt={`${profile.name} 증명사진`} />
          </div>
          <ul className="print-summary">{profile.resumeSummary.map((line) => <li key={line}>{line}</li>)}</ul>

          <section className="print-section">
            <h2>핵심 역량</h2>
            <ul className="print-list">{profile.coreCompetencies.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section className="print-section">
            <h2>대표 프로젝트</h2>
            {projects.slice(0, 2).map((project) => <PrintProject project={project} key={project.slug} />)}
          </section>
        </div>

        <div className="print-page print-page-2">
          <section className="print-section">
            <h2>대표 프로젝트 (계속)</h2>
            {projects.slice(2, 3).map((project) => <PrintProject project={project} key={project.slug} />)}
          </section>

          <section className="print-section">
            <h2>기술 스택</h2>
            <div className="print-skills">{Object.entries(profile.skills).map(([group, skills]) => (
              <p key={group}><b>{group}</b> {skills.join(', ')}</p>
            ))}</div>
          </section>

          <section className="print-section">
            <h2>경력 요약</h2>
            <ul className="print-list">{profile.careerSummary.map((item) => <li key={item.label}><b>{item.label}</b> {item.value}</li>)}</ul>
          </section>

          <section className="print-section">
            <h2>교육 · 자격증</h2>
            <ul className="print-list">
              {profile.education.map((item) => <li key={item.title}><b>{item.title}</b> — {item.period}</li>)}
              {profile.certifications.map((cert) => <li key={cert.title}><b>{cert.title}</b> — {cert.issuer} · {cert.date}</li>)}
            </ul>
          </section>

          <p className="print-footer-links">Portfolio ddoriny.com · GitHub github.com/DDORINY</p>
        </div>
      </div>
    </div></section>
  )
}
