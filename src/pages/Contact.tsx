import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import TechIcon, { TechChip } from '../components/TechIcon'
import { contactFaq, profile } from '../data/profile'

const coreStack = ['Python', 'Flask', 'FastAPI', 'YOLO', 'OpenCV', 'MySQL', 'React / Next.js', 'Docker / Linux']

const coreExperience = [
  '객체 탐지 모델 실험 및 학습',
  'Flask/FastAPI AI API 연동',
  'MySQL 데이터 저장',
  '프론트엔드 결과 시각화',
  'Linux·VM 배포 및 운영 점검',
]

function FaqRelatedLinks({ related }: { related?: { label: string; to?: string; url?: string }[] }) {
  if (!related?.length) return null
  return (
    <div className="faq-related-links">
      <span>관련 자료</span>
      {related.map((item) => item.to ? (
        <Link className="faq-related-link" to={item.to} key={item.label}>{item.label} →</Link>
      ) : item.url ? (
        <a className="faq-related-link" href={item.url} target="_blank" rel="noreferrer" key={item.label} aria-label={`${item.label} 새 창에서 열기`}>{item.label} ↗</a>
      ) : null)}
    </div>
  )
}

function copyWithFallback(value: string) {
  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  try {
    textarea.select()
    const copied = document.execCommand('copy')
    if (!copied) throw new Error('Copy command was not accepted')
  } finally {
    textarea.remove()
  }
}

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const resetTimer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  const copyEmail = async () => {
    window.clearTimeout(resetTimer.current)
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) await navigator.clipboard.writeText(profile.email)
      else copyWithFallback(profile.email)
      setCopyStatus('success')
    } catch {
      setCopyStatus('error')
    }
    resetTimer.current = window.setTimeout(() => setCopyStatus('idle'), 2000)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero page-section" aria-labelledby="contact-page-title">
        <div className="container contact-hero-grid">
          <Reveal className="contact-hero-copy">
            <span className="eyebrow">CONTACT</span>
            <h1 id="contact-page-title">함께 서비스로 연결되는 <br />AI를 만들고 싶습니다.</h1>
            <p className="contact-hero-lead">AI 서비스 개발, Computer Vision, Python·Flask/FastAPI 기반 포지션의 채용 및 프로젝트 연락을 기다립니다.</p>
            <p className="contact-hero-support">객체 탐지 모델 실험과 학습, AI API 연동, 데이터베이스 저장, 프론트엔드 시각화, Linux·VM 기반 운영 환경까지 경험했습니다.</p>
            <a className="contact-email-address" href={`mailto:${profile.email}`} aria-label={`${profile.email}로 이메일 보내기`}>{profile.email}</a>
            <div className="contact-hero-actions">
              <a className="button primary" href={`mailto:${profile.email}`} aria-label={`${profile.email}로 이메일 보내기`}>EMAIL ME <span>→</span></a>
              <button className="button secondary" type="button" onClick={copyEmail} aria-label="이메일 주소 복사">{copyStatus === 'success' ? 'COPIED' : copyStatus === 'error' ? 'COPY FAILED' : 'COPY EMAIL'} <span aria-hidden="true">{copyStatus === 'success' ? '✓' : '⎘'}</span></button>
              <Link className="button ghost" to="/resume">VIEW RESUME <span>→</span></Link>
            </div>
            <span className="sr-only" role="status" aria-live="polite">{copyStatus === 'success' ? '이메일 주소가 복사되었습니다.' : copyStatus === 'error' ? '이메일 주소를 복사하지 못했습니다. 주소를 직접 선택해 복사해 주세요.' : ''}</span>
          </Reveal>

          <Reveal as="aside" className="contact-availability" delay={80} aria-label="희망 직무와 입사 가능 정보">
            <div className="contact-panel-head"><span>AVAILABLE FOR</span><small>CAREER INFO</small></div>
            <div className="contact-availability-block"><span>POSITION</span><ul>{profile.desiredRoles.map((role) => <li key={role}>{role}</li>)}</ul></div>
            <div className="contact-status-row"><div><span>STATUS</span><strong><i aria-hidden="true" />{profile.availability}</strong></div></div>
            <div className="contact-stack"><span>CORE STACK</span><div>{coreStack.map((tech) => <TechChip label={tech} key={tech} />)}</div></div>
          </Reveal>
        </div>
      </section>

      <section className="contact-section contact-channels" aria-labelledby="contact-channels-title">
        <div className="container">
          <SectionHeading eyebrow="01 / CONTACT CHANNELS" title="빠른 연락과 필요한 정보" description="이메일을 가장 먼저 확인하고, 코드·프로젝트·이력서로 이어질 수 있습니다." id="contact-channels-title" />
          <div className="contact-channel-grid">
            <Reveal as="a" href={`mailto:${profile.email}`} aria-label={`${profile.email}로 채용 또는 협업 문의 이메일 보내기`}><span>01 / EMAIL</span><h2>채용·협업 문의</h2><p>{profile.email}</p><strong>→</strong></Reveal>
            <Reveal as="a" href={profile.github} target="_blank" rel="noreferrer" aria-label="김도하 GitHub 프로필 새 창에서 열기" delay={60}><span>02 / GITHUB</span><h2><TechIcon name="GitHub" />코드와 개발 기록</h2><p>GitHub Repository와 Commit 기록</p><strong>↗</strong></Reveal>
            <Reveal as={Link} to="/projects" delay={120}><span>03 / PROJECTS</span><h2>주요 구현 사례</h2><p>STACCATO · 404 R·N·F AI · CommerceOps ERP</p><strong>→</strong></Reveal>
            <Reveal as={Link} to="/resume" delay={180}><span>04 / RESUME</span><h2>경력과 기술 요약</h2><p>경력 · 기술 스택 · 프로젝트 역할</p><strong>→</strong></Reveal>
          </div>
        </div>
      </section>

      <section className="contact-section contact-position" aria-labelledby="contact-position-title">
        <div className="container">
          <SectionHeading eyebrow="02 / CAREER FIT" title="POSITION & AVAILABILITY" description="지원 직무와 현재 근무 가능 조건을 정리했습니다." id="contact-position-title" />
          <div className="contact-position-grid">
            <Reveal as="article"><span>A / POSITION</span><h3>희망 직무</h3><ul>{profile.desiredRoles.map((role) => <li key={role}>{role}</li>)}</ul></Reveal>
            <Reveal as="article" delay={70}><span>B / AVAILABILITY</span><h3>근무 조건</h3><ul><li>정규직 선호</li><li>{profile.availability}</li></ul></Reveal>
            <Reveal as="article" delay={140}><span>C / EXPERIENCE</span><h3>핵심 경험</h3><ul>{coreExperience.map((experience) => <li key={experience}>{experience}</li>)}</ul></Reveal>
          </div>
        </div>
      </section>

      <section className="contact-selected-links" aria-labelledby="contact-links-title">
        <div className="container">
          <div className="contact-selected-head"><span className="eyebrow">03 / SELECTED LINKS</span><h2 id="contact-links-title">추가 자료</h2></div>
          <nav className="contact-link-list" aria-label="Contact 추가 자료">
            <a href={profile.notion} target="_blank" rel="noreferrer" aria-label="AI Learning Notion 새 창에서 열기">AI Learning Notion <span>↗</span></a>
            <Link to="/computer-vision">Computer Vision Experience <span>→</span></Link>
            <Link to="/llm">LLM &amp; AI <span>→</span></Link>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile 새 창에서 열기">GitHub Profile <span>↗</span></a>
          </nav>
        </div>
      </section>

      <section className="contact-section contact-faq" aria-labelledby="contact-faq-title">
        <div className="container">
          <SectionHeading eyebrow="04 / FAQ" title="연락 전 빠른 확인" description="채용과 프로젝트 역할에 필요한 내용만 간결하게 정리했습니다." id="contact-faq-title" />
          <div className="faq-list">{contactFaq.map((item) => <details className="faq-item" key={item.q}><summary>{item.q}</summary><p>{item.a}</p><FaqRelatedLinks related={item.related} /></details>)}</div>
        </div>
      </section>
    </div>
  )
}
