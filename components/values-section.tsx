import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Zap, Puzzle } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "We encourage students to think outside the box, explore new ideas, and express their unique perspectives through innovative projects and solutions.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We foster a culture of continuous learning and improvement, where students are empowered to create, iterate, and push the boundaries of what's possible.",
  },
  {
    icon: Puzzle,
    title: "Problem-Solving",
    description:
      "We teach students to approach challenges systematically, break down complex problems, and develop practical solutions using critical thinking skills.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white border border-gray-200 py-16 px-8 overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] pointer-events-none"></div>
          
          <div className="text-center space-y-4 mb-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the learning experience we provide for our
              students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={value.title}
                  className="text-center group hover:shadow-lg transition-all duration-300 border-gray-200 bg-white"
                >
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto bg-black/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                    <CardTitle className="text-xl text-black">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Image section */}
          <div className="mt-20 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-black">Learning Through Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our hands-on approach ensures that students don't just learn about STEM concepts—they experience them.
                  From building robots to coding their first app, every lesson is designed to be engaging, interactive,
                  and memorable.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that when students are actively involved in their learning, they develop deeper
                  understanding, stronger retention, and genuine enthusiasm for STEM subjects.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/placeholder-dbss6.png"
                  alt="Students engaged in hands-on STEM learning"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
