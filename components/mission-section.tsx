import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target, Heart } from "lucide-react"

export function MissionSection() {
  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white border border-gray-200 py-16 px-8 overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] pointer-events-none"></div>
          
          <div className="text-center space-y-4 mb-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to creating an inclusive, engaging learning environment where every student can discover
              their passion for STEM and develop the skills they need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Mission */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-gray-200 bg-white">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-black/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-black">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To ignite curiosity, creativity, and innovation in young learners through hands-on STEM education that
                  prepares them to be the problem-solvers and innovators of tomorrow.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-gray-200 bg-white">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-black/10 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-black">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  A world where every child has access to quality STEM education and the confidence to pursue their dreams
                  in science, technology, engineering, and mathematics.
                </p>
              </CardContent>
            </Card>
            
            {/* Commitment */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-gray-200 bg-white">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-black/10 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-black">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We're dedicated to creating inclusive, supportive learning environments where students feel safe to
                  explore, experiment, and express their creativity without fear of failure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
