import { Navigation } from "@/components/navigation"
import { ResourcesHero } from "@/components/resources-hero"
import { ArticlesSection } from "@/components/articles-section"
import { STEMChallenges } from "@/components/stem-challenges"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ResourcesHero />
      <ArticlesSection />
      <STEMChallenges />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}
