import AIExpertise from '../../components/home/AIExpertise'
import CareerSummary from '../../components/home/CareerSummary'
import ContactCTA from '../../components/home/ContactCTA'
import CoreCompetencies from '../../components/home/CoreCompetencies'
import FeaturedProjects from '../../components/home/FeaturedProjects'
import HeroSection from '../../components/home/HeroSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoreCompetencies />
      <FeaturedProjects />
      <AIExpertise />
      <CareerSummary />
      <ContactCTA />
    </>
  )
}
