import type { ReactNode } from 'react'

export default function ProjectAreaSection({ index, title, children }: { index: number; title: string; children: ReactNode }) {
  return (
    <div className="project-area-section">
      <span className="section-number">{String(index).padStart(2, '0')} / {title}</span>
      {children}
    </div>
  )
}
