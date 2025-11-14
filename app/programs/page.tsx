import { Navigation } from "@/components/navigation"
import { ProgramsHero } from "@/components/programs-hero"
import { ProgramsGrid } from "@/components/programs-grid"
import { ProgramBenefits } from "@/components/program-benefits"
import { EnrollmentCTA } from "@/components/enrollment-cta"
import { Footer } from "@/components/footer"

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProgramsHero />
      <ProgramsGrid />
      <ProgramBenefits />
      <EnrollmentCTA />
      <Footer />
    </main>
  )
}
