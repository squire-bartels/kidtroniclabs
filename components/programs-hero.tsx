import { Sparkles } from "lucide-react"

export function ProgramsHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            STEM Programs
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Discover Your <span className="text-white">STEM</span> Passion
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Explore our comprehensive programs designed to inspire creativity, build technical skills, and prepare
              students for the future. Each program combines hands-on learning with real-world applications.
            </p>
          </div>

          {/* Age groups */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium text-white">Ages 4-8: Explorers</span>
            </div>
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium text-white">Ages 9-12: Builders</span>
            </div>
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium text-white">Ages 13-18: Innovators</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
