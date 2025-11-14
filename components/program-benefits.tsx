import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Lightbulb, Target, Heart, Zap } from "lucide-react"

const benefits = [
  {
    icon: Trophy,
    title: "Real-World Skills",
    description: "Students develop practical skills that are directly applicable to future careers in STEM fields.",
    color: "text-black",
    bgColor: "bg-black/10",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Work in teams to solve problems, share ideas, and learn from peers in a supportive environment.",
    color: "text-black",
    bgColor: "bg-black/10",
  },
  {
    icon: Lightbulb,
    title: "Creative Problem-Solving",
    description: "Develop critical thinking skills and learn to approach challenges from multiple perspectives.",
    color: "text-black",
    bgColor: "bg-black/10",
  },
  {
    icon: Target,
    title: "Project-Based Learning",
    description: "Complete meaningful projects that demonstrate learning and build a portfolio of achievements.",
    color: "text-black",
    bgColor: "bg-black/10",
  },
  {
    icon: Heart,
    title: "Confidence Building",
    description: "Build self-confidence through hands-on success and supportive mentorship from expert instructors.",
    color: "text-black",
    bgColor: "bg-black/10",
  },
  {
    icon: Zap,
    title: "Future-Ready Skills",
    description: "Learn cutting-edge technologies and methodologies that prepare students for tomorrow's challenges.",
    color: "text-black",
    bgColor: "bg-black/10",
  },
]

export function ProgramBenefits() {
  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white border border-gray-200 py-16 px-8 overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] pointer-events-none"></div>
          
          <div className="text-center space-y-4 mb-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">Why Choose Kidtronic Programs?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our programs go beyond traditional education to provide comprehensive learning experiences that prepare
              students for success in an increasingly digital world.
            </p>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon
            return (
              <Card
                key={benefit.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 bg-white"
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${benefit.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-lg text-black">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
          </div>
      </div>
    </section>
  )
}
