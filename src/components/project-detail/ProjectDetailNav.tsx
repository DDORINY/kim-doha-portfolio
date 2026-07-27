import { useEffect, useState } from 'react'

type SectionItem = { id: string; label: string }

export default function ProjectDetailNav({ sections }: { sections: readonly SectionItem[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '')
  const sectionKey = sections.map((section) => section.id).join('|')

  useEffect(() => {
    const elements = sectionKey.split('|').map((id) => document.getElementById(id)).filter((element): element is HTMLElement => Boolean(element))
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveId(visible.target.id)
    }, { rootMargin: '-22% 0px -62% 0px', threshold: [0, 0.2, 0.6] })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [sectionKey])

  const moveTo = (id: string) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <nav className="detail-nav" aria-label="프로젝트 상세 섹션">
      <span>CONTENTS</span>
      <div className="detail-nav-track">
        {sections.map((section, index) => (
          <button type="button" className={activeId === section.id ? 'active' : ''} aria-current={activeId === section.id ? 'location' : undefined} onClick={() => moveTo(section.id)} aria-label={`${section.label} 섹션으로 이동`} key={section.id}>
            <span className="detail-nav-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="detail-nav-label">{section.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
