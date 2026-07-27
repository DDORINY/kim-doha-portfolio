import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, variant = 'default', id }: { eyebrow: string; title: string; description?: string; variant?: 'default' | 'single'; id?: string }) {
  return (
    <Reveal className={variant === 'single' ? 'section-heading section-heading-single' : 'section-heading'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </Reveal>
  )
}
