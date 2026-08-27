import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import TechIcon, { TechChip } from '../components/TechIcon'
import { profile } from '../data/profile'
import type { Project } from '../data/projects'
import { certificationStatus, educationStatus, representativeResumeProjects, resumeCompetencies, resumeMetrics, resumeProfileSummary, resumeSkillGroups, serviceExperience } from '../data/resume'

function PrintProject({ project }: { project: Project }) {
  return (
    <div className="print-project">
      <div className="print-project-head">
        <strong>{project.name}</strong>
        <span>{project.type}</span>
      </div>
      <p>{project.tagline}</p>
      {project.resumeHighlight && (
        <p className="print-project-role">
          <b>역할</b> {project.resumeHighlight.role} · <b>범위</b> {project.resumeHighlight.contribution}
        </p>
      )}
      {(project.techHighlights ?? project.highlights) && <p className="print-project-tech">{(project.techHighlights ?? project.highlights)!.slice(0, 6).join(' · ')}</p>}
    </div>
  )
}

function PrintButton({ className = 'button primary' }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.print()} title="브라우저 인쇄 대화상자에서 PDF로 저장할 수 있습니다" aria-label="브라우저 인쇄 대화상자를 열어 이력서를 PDF로 저장">
      SAVE RESUME AS PDF
    </button>
  )
}

const resumeProjectFocus: Record<string, string> = {
  'hawk-ai': 'LLM SERVICE INTEGRATION',
  dohalm: 'MODEL / TRAINING / RUNTIME',
  staccato: 'COMPUTER VISION → SERVICE',
}

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-screen-only resume-web">
        <section className="resume-web-hero page-section" aria-labelledby="resume-page-title">
          <div className="container resume-web-hero-grid">
            <Reveal className="resume-web-hero-copy">
              <span className="eyebrow">01 / RESUME · AI SERVICE DEVELOPER</span>
              <h1 id="resume-page-title">{profile.name}</h1>
              <p className="resume-web-role">AI Service Developer</p>
              <p className="resume-web-specialty">LLM · AI Backend · Service Integration</p>
              <h2>
                LLM과 AI 모델을 Python Backend와
                <br />
                실제 사용 가능한 서비스로 연결합니다.
              </h2>
              <p className="resume-web-transition">5년 8개월의 온라인 운영 경험을 바탕으로, 데이터와 AI를 실제 업무 흐름에 적용하는 개발자로 전환했습니다.</p>
              <div className="resume-web-tech" aria-label="핵심 기술">
                {['Python', 'FastAPI / Flask', 'LLM / LoRA', 'MySQL', 'Docker / Linux'].map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </Reveal>
            <Reveal className="resume-web-profile" delay={80}>
              <div className="resume-web-photo">
                <img src={profile.photo} alt={`${profile.name} 증명사진`} width="960" height="1280" loading="eager" fetchPriority="high" decoding="async" />
              </div>
              <div className="resume-web-contact">
                <span>CONTACT / AVAILABLE</span>
                <strong>{profile.availability}</strong>
                <a href={`mailto:${profile.email}`}>
                  EMAIL <small>{profile.email}</small>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GITHUB github.com/DDORINY 새 창에서 열기">
                  GITHUB <small>github.com/DDORINY ↗</small>
                </a>
                <PrintButton />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section resume-summary-section" aria-labelledby="resume-summary-title">
          <div className="container">
            <SectionHeading id="resume-summary-title" eyebrow="02 / PROFILE SUMMARY" title="PROFILE SUMMARY" description="운영 경험에서 발견한 문제를 데이터·AI·서비스 구조로 연결하는 개발자입니다." />
            <div className="resume-metric-grid">
              {resumeMetrics.map((metric, index) => (
                <Reveal className="resume-metric" delay={index * 60} key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.description}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="resume-summary-copy">
              {resumeProfileSummary.map((summary) => (
                <p key={summary}>{summary}</p>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="resume-competencies-title">
          <div className="container">
            <SectionHeading id="resume-competencies-title" eyebrow="03 / CORE COMPETENCIES" title="CORE COMPETENCIES" description="기술 이름이 아니라 프로젝트에서 수행한 서비스 개발 단위로 정리했습니다." />
            <div className="resume-competency-grid">
              {resumeCompetencies.map((competency, index) => (
                <Reveal as="article" className="resume-competency-card" delay={index * 55} key={competency.id}>
                  <div className="resume-competency-head">
                    <span>{competency.code}</span>
                    <TechIcon name={competency.icon} />
                  </div>
                  <h3>{competency.title}</h3>
                  <p>{competency.description}</p>
                  <div className="chip-row">
                    {competency.tech.map((tech) => (
                      <TechChip label={tech} key={tech} />
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section resume-project-section" aria-labelledby="resume-projects-title">
          <div className="container">
            <SectionHeading id="resume-projects-title" eyebrow="04 / REPRESENTATIVE PROJECTS" title="REPRESENTATIVE PROJECTS" description="LLM 서비스 통합, 모델·Runtime 개발, Computer Vision 서비스 구현을 대표하는 프로젝트입니다." />
            <div className="resume-project-list">
              {representativeResumeProjects.map((project, index) => (
                <Reveal as="article" className="resume-project-row" delay={index * 60} key={project.slug}>
                  <div className="resume-project-index">
                    <span>0{index + 1}</span>
                    <b className={project.status === 'in-progress' ? 'is-progress' : ''}>{project.status === 'in-progress' ? 'IN PROGRESS' : 'COMPLETED'}</b>
                  </div>
                  <div className="resume-project-main">
                    <span>
                      {project.period} · {project.teamNote}
                    </span>
                    <h3>{project.name}</h3>
                    <strong className="resume-project-focus">{resumeProjectFocus[project.slug]}</strong>
                    <p>{project.tagline}</p>
                  </div>
                  <dl className="resume-project-evidence">
                    <div>
                      <dt>ROLE</dt>
                      <dd>{project.resumeHighlight?.role}</dd>
                    </div>
                    <div>
                      <dt>{project.teamNote?.startsWith('개인') ? 'SCOPE' : 'CONTRIBUTION'}</dt>
                      <dd>{project.resumeHighlight?.contribution}</dd>
                    </div>
                    <div>
                      <dt>EVIDENCE</dt>
                      <dd>{project.resumeHighlight?.achievement}</dd>
                    </div>
                    <div>
                      <dt>STACK</dt>
                      <dd>
                        <span className="chip-row">
                          {(project.techHighlights ?? []).slice(0, 4).map((tech) => (
                            <TechChip label={tech} key={tech} />
                          ))}
                        </span>
                      </dd>
                    </div>
                  </dl>
                  <Link className="resume-project-link" to={`/projects/${project.slug}`}>
                    VIEW PROJECT DETAIL <span>→</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="resume-experience-title">
          <div className="container">
            <SectionHeading id="resume-experience-title" eyebrow="05 / WORK EXPERIENCE" title="WORK EXPERIENCE" description="5년 8개월의 운영 경험에서 익힌 사용자 흐름, 업무 프로세스, 데이터 관리와 운영 문제를 AI 서비스 설계의 기반으로 연결했습니다." />
            <Reveal className="resume-career-bar">
              <div>
                <span>TOTAL EXPERIENCE</span>
                <strong>{profile.careerSummary[0].value}</strong>
              </div>
              <div>
                <span>FIELD</span>
                <strong>온라인 마케팅·운영</strong>
              </div>
              <div>
                <span>FOCUS</span>
                <strong>상품 데이터 · 쇼핑몰 · 콘텐츠 · 교육</strong>
              </div>
            </Reveal>
            <div className="resume-timeline">
              {profile.workExperience.map((job, index) => (
                <Reveal as="article" className="resume-job" delay={index * 65} key={job.role}>
                  <div className="resume-job-marker" aria-hidden="true">
                    <i />
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="resume-job-period">{job.period}</div>
                  <div className="resume-job-body">
                    <h3>{job.role}</h3>
                    <p>{job.description}</p>
                    <ul>
                      {job.tasks.slice(0, 3).map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                    <strong>{job.takeaway}</strong>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section resume-skills-section" aria-labelledby="resume-skills-title">
          <div className="container">
            <SectionHeading id="resume-skills-title" eyebrow="06 / TECHNICAL SKILLS" title="TECHNICAL SKILLS" description="지원 직무에서 빠르게 확인할 수 있도록 4개 기술 영역과 실제 프로젝트 사용 기술만 선별했습니다." />
            <div className="resume-skill-grid">
              {resumeSkillGroups.map((group, index) => (
                <Reveal as="article" className="resume-skill-group" delay={index * 55} key={group.label}>
                  <span>{group.label}</span>
                  <h3>{group.description}</h3>
                  <div className="chip-row">
                    {group.skills.map((skill) => (
                      <TechChip label={skill} key={skill} />
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section resume-service-section" aria-labelledby="resume-service-title">
          <div className="container">
            <SectionHeading id="resume-service-title" eyebrow="07 / SERVICE & INFRASTRUCTURE" title="SERVICE & DEPLOYMENT EXPERIENCE" description="AI 모델을 학습하는 데서 끝내지 않고, API·데이터베이스·프론트엔드·배포 환경까지 실제 담당 범위 안에서 연결합니다." />
            <div className="resume-service-grid">
              {serviceExperience.map((item, index) => (
                <Reveal as="article" className="resume-service-step" delay={index * 50} key={item.code}>
                  <div>
                    <span>{item.code}</span>
                    <b>{item.scope}</b>
                  </div>
                  <h3>{item.title}</h3>
                  <div className="resume-service-tags">
                    {item.environment.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <p>{item.contribution}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section resume-education-section" aria-labelledby="resume-education-title">
          <div className="container">
            <SectionHeading id="resume-education-title" eyebrow="08 / EDUCATION & CERTIFICATIONS" title="EDUCATION & CERTIFICATIONS" description="교육 과정과 자격·수상 상태를 텍스트 중심으로 구분하고, 증빙은 필요할 때 새 창에서 확인할 수 있습니다." />
            <div className="resume-education-grid">
              <Reveal className="resume-education-column">
                <h3>EDUCATION & TRAINING</h3>
                {profile.education.map((item) => (
                  <article key={item.title}>
                    <div>
                      <span>{item.period}</span>
                      <b>{educationStatus(item.period)}</b>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </article>
                ))}
              </Reveal>
              <Reveal className="resume-education-column" delay={80}>
                <h3>CERTIFICATIONS</h3>
                {profile.certifications.map((cert) => (
                  <article key={cert.title}>
                    <div>
                      <span>{cert.date}</span>
                      <b>{certificationStatus(cert.title)}</b>
                    </div>
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                    {cert.image && (
                      <a href={cert.image} target="_blank" rel="noreferrer" aria-label={`${cert.title} 증빙 이미지 새 창에서 열기`}>
                        VIEW CREDENTIAL <span>↗</span>
                      </a>
                    )}
                  </article>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section resume-contact-section" aria-labelledby="resume-contact-title">
          <div className="container">
            <Reveal className="resume-contact-panel">
              <div>
                <span className="eyebrow">09 / CONTACT</span>
                <h2 id="resume-contact-title">
                  AI 모델을 실제 서비스로 연결하는
                  <br />
                  AI Service Developer 김도하입니다.
                </h2>
                <p>프로젝트 상세 구현과 역할은 각 프로젝트 페이지에서 확인할 수 있습니다.</p>
              </div>
              <div className="resume-contact-actions">
                <a className="button primary" href={`mailto:${profile.email}`}>
                  EMAIL <span>→</span>
                </a>
                <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer" aria-label="김도하 GitHub 새 창에서 열기">
                  GITHUB <span>↗</span>
                </a>
                <Link className="button secondary" to="/projects">
                  VIEW PROJECTS <span>→</span>
                </Link>
                <PrintButton className="button secondary" />
                <a className="resume-notion-link" href={profile.notion} target="_blank" rel="noreferrer" aria-label="김도하 학습 기록 Notion 새 창에서 열기">
                  NOTION LEARNING LOG ↗
                </a>
              </div>
            </Reveal>
          </div>
        </section>
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
          <ul className="print-summary">
            {profile.resumeSummary.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <section className="print-section">
            <h2>핵심 역량</h2>
            <ul className="print-list">
              {profile.coreCompetencies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="print-section">
            <h2>대표 프로젝트</h2>
            {representativeResumeProjects.slice(0, 2).map((project) => (
              <PrintProject project={project} key={project.slug} />
            ))}
          </section>
        </div>
        <div className="print-page print-page-2">
          <section className="print-section">
            <h2>대표 프로젝트 (계속)</h2>
            {representativeResumeProjects.slice(2, 3).map((project) => (
              <PrintProject project={project} key={project.slug} />
            ))}
          </section>
          <section className="print-section">
            <h2>기술 스택</h2>
            <div className="print-skills">
              {Object.entries(profile.skills).map(([group, skills]) => (
                <p key={group}>
                  <b>{group}</b> {skills.join(', ')}
                </p>
              ))}
            </div>
          </section>
          <section className="print-section">
            <h2>경력 요약</h2>
            <ul className="print-list">
              {profile.careerSummary.map((item) => (
                <li key={item.label}>
                  <b>{item.label}</b> {item.value}
                </li>
              ))}
            </ul>
          </section>
          <section className="print-section">
            <h2>교육 · 자격증</h2>
            <ul className="print-list">
              {profile.education.map((item) => (
                <li key={item.title}>
                  <b>{item.title}</b> — {item.period}
                </li>
              ))}
              {profile.certifications.map((cert) => (
                <li key={cert.title}>
                  <b>{cert.title}</b> — {cert.issuer} · {cert.date}
                </li>
              ))}
            </ul>
          </section>
          <p className="print-footer-links">Portfolio ddoriny.com · GitHub github.com/DDORINY</p>
        </div>
      </div>
    </div>
  )
}
