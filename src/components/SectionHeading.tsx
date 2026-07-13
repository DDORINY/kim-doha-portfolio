import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, variant = 'default' }: { eyebrow: string; title: string; description?: string; variant?: 'default' | 'single' }) {
  return (
    <Reveal className={variant === 'single' ? 'section-heading section-heading-single' : 'section-heading'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Reveal>
  )
}
