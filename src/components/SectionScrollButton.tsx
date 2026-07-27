import type { ReactNode } from 'react'

type SectionScrollButtonProps = {
  targetId: string
  className?: string
  children: ReactNode
  ariaLabel?: string
}

export default function SectionScrollButton({ targetId, className = '', children, ariaLabel }: SectionScrollButtonProps) {
  const scrollToSection = () => {
    const target = document.getElementById(targetId)
    if (!target) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <button
      type="button"
      className={`section-scroll-button${className ? ` ${className}` : ''}`}
      onClick={scrollToSection}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
