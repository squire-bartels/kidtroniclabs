import { MessageCircle, Phone, Mail } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-primary/10 py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Let's Start Your Child's <span className="text-primary">STEM Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Have questions about our programs? Want to schedule a visit? We're here to help you find the perfect STEM
              learning experience for your child.
            </p>
          </div>

          {/* Quick contact options */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 bg-card border rounded-full px-6 py-3">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">(555) 123-STEM</span>
            </div>
            <div className="flex items-center gap-2 bg-card border rounded-full px-6 py-3">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">hello@kidtronic.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
