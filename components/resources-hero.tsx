import { BookOpen, Lightbulb } from "lucide-react"

export function ResourcesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-primary/10 py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              Learning Resources
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                STEM Resources for <span className="text-primary">Families</span> &{" "}
                <span className="text-accent">Educators</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover expert insights, practical tips, and engaging activities to support STEM learning at home and
                in the classroom. From parent guides to hands-on challenges, we've got everything you need to inspire
                young minds.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Articles & Guides</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-accent">25+</div>
                <div className="text-sm text-muted-foreground">STEM Challenges</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-chart-3">100+</div>
                <div className="text-sm text-muted-foreground">DIY Projects</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 shadow-xl">
              <img
                src="/placeholder.svg?height=400&width=500&text=Family+learning+STEM+together"
                alt="Family learning STEM together"
                className="w-full h-auto rounded-lg"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground p-3 rounded-xl shadow-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-3 rounded-xl shadow-lg">
                <Lightbulb className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
