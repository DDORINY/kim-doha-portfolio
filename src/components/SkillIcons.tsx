function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4 3 12l5 8" />
      <path d="M16 4l5 8-5 8" />
    </svg>
  )
}

export const skillGroupMeta: Record<string, { accent: string; Icon: () => React.JSX.Element }> = {
  'AI / Computer Vision': { accent: '#70e1f5', Icon: EyeIcon },
  'Backend / Database': { accent: '#ffbe70', Icon: DatabaseIcon },
  'Frontend / Collaboration / Infra': { accent: '#8b80ff', Icon: CodeIcon },
}

export const defaultSkillMeta = { accent: '#8c83ff', Icon: CodeIcon }
