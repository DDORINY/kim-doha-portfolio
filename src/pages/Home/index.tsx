import CareerSummary from '../../components/home/CareerSummary'
import AIExpertise from '../../components/home/AIExpertise'
import ContactCTA from '../../components/home/ContactCTA'
import CoreCompetencies from '../../components/home/CoreCompetencies'
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
      <AIExpertise />
      <CareerSummary />
      <ContactCTA />
    </>
  )
}
