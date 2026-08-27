import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import TechIcon from '../components/TechIcon'
import { profile } from '../data/profile'

const workReasons = [
  { index: '01', title: 'AI → SERVICE', flow: ['Model', 'API', 'DB', 'Product'], description: '모델 호출에서 끝내지 않고 Backend API, DB, 사용자 기능까지 연결합니다.', evidence: 'HAWK-AI · STACCATO' },
  { index: '02', title: 'MODEL & RUNTIME', flow: ['LLM', 'CV', 'Training', 'Runtime'], description: 'LLM Fine-Tuning·Runtime과 Computer Vision 모델 학습 경험을 갖고 있습니다.', evidence: 'DOHA STUDIO / DohaLM · STACCATO' },
  { index: '03', title: 'PRODUCT THINKING', flow: ['Operations', 'User Flow', 'AI Service'], description: '운영 경험을 바탕으로 기술 구현과 실제 사용자 흐름, 업무 프로세스를 함께 봅니다.', evidence: '5Y 8M OPERATIONS EXPERIENCE' },
]

const selectedWork = [
  { name: 'HAWK-AI', label: 'LLM SERVICE INTEGRATION', slug: 'hawk-ai' },
  { name: 'DOHA STUDIO', label: 'AI PRODUCT / MODEL & RUNTIME', slug: 'doha-studio' },
  { name: 'STACCATO', label: 'CV → SERVICE', slug: 'staccato' },
]

const recruiterFaq = [
  { q: '어떤 포지션을 찾고 있나요?', a: 'AI Service Developer를 중심으로 AI Backend, LLM Integration, Computer Vision Service 포지션을 찾고 있습니다.' },
  { q: 'LLM과 Computer Vision 중 어느 쪽이 주력인가요?', a: '현재 주력은 LLM 기반 AI 서비스 통합이며, Computer Vision 모델 학습과 서비스 연결 경험도 보유하고 있습니다.' },
  { q: '팀 프로젝트에서 어떤 역할을 맡았나요?', a: 'HAWK-AI에서는 게시판과 LLM 추론 서비스 연동을, STACCATO에서는 모델 비교와 Flask API 일부, 화면 연동 및 통합 QA를 담당했습니다.' },
  { q: '언제부터 근무할 수 있나요?', a: profile.availability + '합니다.' },
]

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
            <h1 id="contact-page-title">
              AI를 실제 서비스로 <br />
              연결하는 개발자입니다.
            </h1>
            <p className="contact-hero-lead">LLM · AI Backend · AI Service Integration 기반 개발 포지션의 채용 및 협업 연락을 기다립니다.</p>
            <a className="contact-email-address" href={`mailto:${profile.email}`} aria-label={`${profile.email}로 이메일 보내기`}>
              {profile.email}
            </a>
            <div className="contact-hero-actions">
              <a className="button primary" href={`mailto:${profile.email}`} aria-label={`${profile.email}로 이메일 보내기`}>
                EMAIL ME <span>→</span>
              </a>
              <Link className="button ghost" to="/resume">
                VIEW RESUME <span>→</span>
              </Link>
              <Link className="button ghost" to="/projects">
                VIEW PROJECTS <span>→</span>
              </Link>
              <button className="button secondary" type="button" onClick={copyEmail} aria-label="이메일 주소 복사">
                {copyStatus === 'success' ? 'COPIED' : copyStatus === 'error' ? 'COPY FAILED' : 'COPY EMAIL'} <span aria-hidden="true">{copyStatus === 'success' ? '✓' : '⎘'}</span>
              </button>
            </div>
            <span className="sr-only" role="status" aria-live="polite">
              {copyStatus === 'success' ? '이메일 주소가 복사되었습니다.' : copyStatus === 'error' ? '이메일 주소를 복사하지 못했습니다. 주소를 직접 선택해 복사해 주세요.' : ''}
            </span>
          </Reveal>

          <Reveal as="aside" className="contact-availability" delay={80} aria-label="희망 직무와 입사 가능 정보">
            <div className="contact-panel-head">
              <span>AVAILABLE FOR</span>
              <small>OPEN TO WORK</small>
            </div>
            <dl className="contact-availability-list">
              <div><dt>PRIMARY ROLE</dt><dd>AI SERVICE DEVELOPER</dd></div>
              <div><dt>FOCUS</dt><dd>LLM · AI Backend<br />Service Integration</dd></div>
              <div><dt>AVAILABILITY</dt><dd className="is-available"><i aria-hidden="true" />{profile.availability}</dd></div>
              <div><dt>LOCATION / TYPE</dt><dd>정규직 선호 · 근무 조건 협의</dd></div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="contact-section contact-channels" aria-labelledby="contact-channels-title">
        <div className="container">
          <SectionHeading eyebrow="01 / CONTACT CHANNELS" title="빠른 연락과 필요한 정보" description="이메일을 가장 먼저 확인하고, 코드·프로젝트·이력서로 이어질 수 있습니다." id="contact-channels-title" />
          <div className="contact-channel-grid">
            <Reveal as="a" href={`mailto:${profile.email}`} aria-label={`${profile.email}로 채용 또는 협업 문의 이메일 보내기`}>
              <span>01 / EMAIL</span>
              <h2>채용·협업 문의</h2>
              <p>{profile.email}</p>
              <strong>→</strong>
            </Reveal>
            <Reveal as="a" href={profile.github} target="_blank" rel="noreferrer" aria-label="김도하 GitHub 프로필 새 창에서 열기" delay={60}>
              <span>02 / GITHUB</span>
              <h2>
                <TechIcon name="GitHub" />
                코드와 개발 기록
              </h2>
              <p>GitHub Repository와 Commit 기록</p>
              <strong>↗</strong>
            </Reveal>
            <Reveal as={Link} to="/projects" delay={120}>
              <span>03 / PROJECTS</span>
              <h2>구현과 검증 근거</h2>
              <p>프로젝트별 역할 · 설계 · Evidence</p>
              <strong>→</strong>
            </Reveal>
            <Reveal as={Link} to="/resume" delay={180}>
              <span>04 / RESUME</span>
              <h2>경력과 기술 요약</h2>
              <p>경력 · 기술 스택 · 프로젝트 역할</p>
              <strong>→</strong>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="contact-section contact-why" aria-labelledby="contact-why-title">
        <div className="container">
          <SectionHeading eyebrow="02 / CAREER FIT" title="WHY WORK WITH ME" description="모델을 이해하고, 서비스 구조와 사용자 흐름까지 연결합니다." id="contact-why-title" />
          <div className="contact-why-grid">
            {workReasons.map((reason, index) => <Reveal as="article" delay={index * 70} key={reason.title}>
              <span>{reason.index}</span><h3>{reason.title}</h3>
              <div className="contact-why-flow">{reason.flow.map((step) => <b key={step}>{step}</b>)}</div>
              <p>{reason.description}</p><small>{reason.evidence}</small>
            </Reveal>)}
          </div>
        </div>
      </section>

      <section className="contact-selected-links" aria-labelledby="contact-links-title">
        <div className="container">
          <div className="contact-selected-head">
            <span className="eyebrow">03 / SELECTED WORK</span>
            <h2 id="contact-links-title">SELECTED WORK</h2>
          </div>
          <nav className="contact-link-list" aria-label="대표 프로젝트">
            {selectedWork.map((project) => <Link to={`/projects/${project.slug}`} key={project.slug}><span><b>{project.name}</b><small>{project.label}</small></span><i>→</i></Link>)}
          </nav>
        </div>
      </section>

      <section className="contact-section contact-compact-faq" aria-labelledby="contact-faq-title">
        <div className="container">
          <SectionHeading eyebrow="04 / QUICK ANSWERS" title="채용 전 확인할 내용" description="포지션과 프로젝트 역할, 근무 가능 조건을 짧게 답했습니다." id="contact-faq-title" />
          <div className="contact-compact-faq-grid">
            {recruiterFaq.map((item, index) => <Reveal as="article" delay={index * 50} key={item.q}><span>0{index + 1}</span><h3>{item.q}</h3><p>{item.a}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="contact-final-cta" aria-labelledby="contact-final-title">
        <div className="container contact-final-cta-inner">
          <div><span className="eyebrow">LET'S CONNECT</span><h2 id="contact-final-title">LET'S BUILD AI INTO PRODUCTS.</h2><p>채용 또는 프로젝트 관련 문의는 이메일로 가장 빠르게 확인합니다.</p></div>
          <div><a className="button primary" href={`mailto:${profile.email}`}>EMAIL ME <span>→</span></a></div>
        </div>
      </section>
    </div>
  )
}
