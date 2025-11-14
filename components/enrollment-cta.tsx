import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Phone, Mail } from "lucide-react"

export function EnrollmentCTA() {
  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white border border-gray-200">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-black">
                    Ready to Start Your STEM Journey?
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Join hundreds of students who have discovered their passion for STEM through our engaging, hands-on
                    programs. Enrollment is now open for our next session.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5 text-black" />
                    <span>Next session starts February 15th, 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-black" />
                    <span>Free consultation available</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-black" />
                    <span>Early bird discounts available</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                    Enroll Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-black text-black hover:bg-black/10 bg-transparent"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200">
                  <img
                    src="/placeholder.svg?height=400&width=500&text=Students+working+on+STEM+projects"
                    alt="Students working on STEM projects"
                    className="w-full h-auto rounded-lg filter grayscale"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-black text-white p-3 rounded-xl shadow-lg">
                  <span className="font-bold text-sm">New Session</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-black text-white p-3 rounded-xl shadow-lg">
                  <span className="font-bold text-sm">Limited Spots</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
