import { heroTechKeywords } from '../../data/home'

export default function TechStrip() {
  return (
    <section className="home-tech-strip" aria-label="핵심 기술">
      <div className="container">
        {heroTechKeywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
      </div>
    </section>
  )
}
