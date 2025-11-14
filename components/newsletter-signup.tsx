import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Gift, BookOpen, Zap } from "lucide-react"

export function NewsletterSignup() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-chart-3/5 border-primary/20">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <Mail className="w-4 h-4" />
                    Stay Updated
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                    Get Weekly STEM Resources & Updates
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Join thousands of parents and educators who receive our weekly newsletter packed with STEM
                    activities, educational insights, and exclusive resources.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Gift className="w-5 h-5 text-primary" />
                    <span>Free STEM activity pack for new subscribers</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span>Weekly challenges and DIY projects</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Early access to new programs and events</span>
                  </div>
                </div>

                {/* Newsletter Form */}
                <div className="space-y-4 pt-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input type="email" placeholder="Enter your email address" className="flex-1 bg-background" />
                    <Button size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                      Subscribe Now
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    No spam, unsubscribe at any time. We respect your privacy and will never share your information.
                  </p>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="bg-card rounded-2xl p-6 shadow-lg">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=Newsletter+Preview"
                    alt="Newsletter preview showing STEM activities"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Stats */}
                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">5,000+</div>
                  <div className="text-xs opacity-90">Subscribers</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs opacity-90">Satisfaction</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
