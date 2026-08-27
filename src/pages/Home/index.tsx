import CareerSummary from '../../components/home/CareerSummary'
import ContactCTA from '../../components/home/ContactCTA'
import CoreCompetencies from '../../components/home/CoreCompetencies'
import DohaStudioOverview from '../../components/home/DohaStudioOverview'
import FeaturedProjects from '../../components/home/FeaturedProjects'
import HeroSection from '../../components/home/HeroSection'
import TechStrip from '../../components/home/TechStrip'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStrip />
      <FeaturedProjects />
      <CoreCompetencies />
      <DohaStudioOverview />
      <CareerSummary />
      <ContactCTA />
    </>
  )
}
