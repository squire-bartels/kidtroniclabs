import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Code, Brain, Cog } from "lucide-react"

const programs = [
  {
    icon: Bot,
    title: "Robotics",
    description: "Build and program robots to solve real-world problems.",
    image: "/futuristic-helper-robot.png",
  },
  {
    icon: Code,
    title: "Coding",
    description: "Learn to code and create your own games and applications.",
    image: "/computer-screen-with-code.png",
  },
  {
    icon: Brain,
    title: "AI",
    description: "Explore the world of artificial intelligence and machine learning.",
    image: "/placeholder-j1sor.png",
  },
  {
    icon: Cog,
    title: "Engineering",
    description: "Design and build innovative engineering projects.",
    image: "/placeholder-qa3xs.png",
  },
]

export function ProgramsPreview() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#f6f6f6] border border-gray-200 py-16 px-8 overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] pointer-events-none"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-bold text-black mb-8">Our Programs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
            {programs.map((program) => {
              return (
                <Card key={program.title} className="text-center p-6 hover:shadow-lg transition-shadow bg-white border border-gray-200">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 bg-black/10 p-4 rounded-full">
                      <program.icon className="w-full h-full text-black" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">{program.description}</CardDescription>
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
