import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { WhyStemSection } from "@/components/why-stem-section"
import { WhyKidtronicSection } from "@/components/why-kidtronic-section"
import { ProgramsPreview } from "@/components/programs-preview"
import { PartnersTestimonials } from "@/components/partners-testimonials"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <WhyStemSection />
      <WhyKidtronicSection />
      <ProgramsPreview />
      <PartnersTestimonials />
      <Footer />
    </main>
  )
}
