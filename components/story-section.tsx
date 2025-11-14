import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function StorySection() {
  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white border border-gray-200 py-16 px-8 overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-black">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kidtronic was created to spark a love for STEM in children by making technology playful, engaging, and accessible. We believe that every child has the potential to become an innovator when given the right tools and opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Too often, robotics and coding are introduced late in education, making them seem complex or intimidating. Kidtronic was formed to change that by introducing children early to hands-on robotics, coding, and creative problem-solving in a way that feels like play.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our mission is to turn curiosity into confidence and imagination into innovation. Through Kidtronic, we are preparing the next generation of thinkers, builders, and leaders who will shape the future with technology.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We're driven by the spark we see in our students' eyes when they successfully program their first robot, solve a complex coding challenge, or design an innovative solution to a real-world problem.
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="space-y-8">
            <Card className="border-gray-200 bg-white">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-black mb-4" />
                <blockquote className="text-lg text-black leading-relaxed mb-6">
                  "We founded Kidtronic because we believe every child deserves the opportunity to explore, create, and
                  innovate. STEM education isn't just about preparing students for future careers—it's about giving them
                  the tools to understand and shape the world around them."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">KP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-black">Koutoh Paul Dela</div>
                    <div className="text-sm text-gray-600">Co-Founder and Technical Lead, Kidtronic</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-gray-200 bg-white">
                <div className="text-3xl font-bold text-black mb-2">500+</div>
                <div className="text-sm text-gray-600">Students Impacted</div>
              </Card>
              <Card className="text-center p-6 border-gray-200 bg-white">
                <div className="text-3xl font-bold text-black mb-2">50+</div>
                <div className="text-sm text-gray-600">School Partners</div>
              </Card>
              <Card className="text-center p-6 border-gray-200 bg-white">
                <div className="text-3xl font-bold text-black mb-2">25+</div>
                <div className="text-sm text-gray-600">Expert Instructors</div>
              </Card>
              <Card className="text-center p-6 border-gray-200 bg-white">
                <div className="text-3xl font-bold text-black mb-2">95%</div>
                <div className="text-sm text-gray-600">Parent Satisfaction</div>
              </Card>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
