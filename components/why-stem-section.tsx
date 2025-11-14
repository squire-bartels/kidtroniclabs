import { Brain, Lightbulb, Briefcase } from "lucide-react"

export function WhyStemSection() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#f6f6f6] border border-gray-200 py-20 px-8 overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] pointer-events-none"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Why STEM Matters</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              STEM education is crucial for preparing students for the future. It develops critical thinking,
              problem-solving, and creativity, skills that are essential in a rapidly changing world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Critical Thinking</h3>
              <p className="text-gray-600">
                Encourages students to analyze information, solve complex problems, and make informed decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Innovation</h3>
              <p className="text-gray-600">
                Fosters creativity and a mindset of innovation, empowering students to create new technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Future Careers</h3>
              <p className="text-gray-600">
                Prepares students for high-demand careers in science, technology, engineering, and math.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
