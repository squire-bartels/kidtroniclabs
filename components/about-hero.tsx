import { Sparkles, Users, Target } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-20 lg:py-36">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          About <span className="text-white">Kidtronic</span>
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <p className="text-lg sm:text-xl leading-relaxed">
            At Kidtronic, we are on a mission to ignite curiosity, creativity, and innovation in K-12 students through dynamic, hands-on STEM education. Our programs are designed to empower elementary through high school students with future-ready skills in robotics, coding, AI, and engineering, delivered in fun, engaging ways that nurture lifelong learning.
          </p>
          
          <p className="text-lg sm:text-xl leading-relaxed">
            We believe that every child is a builder, thinker, and problem-solver. That is why we combine creativity with technology to build the next generation of inventors, critical thinkers, and leaders in a tech-driven world.
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">2022</div>
            <div className="text-sm text-gray-300">Founded</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">K-12</div>
            <div className="text-sm text-gray-300">Ages 5-18</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">4</div>
            <div className="text-sm text-gray-300">Core Programs</div>
          </div>
        </div>
      </div>
    </section>
  )
}
