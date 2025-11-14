import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Video } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section className="py-20 bg-[#f6f6f6] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Get in Touch!</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, we're here to
            help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Email Us</h3>
                  <Link href="mailto:kidtronic10@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                    kidtronic10@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Call Us</h3>
                  <div className="text-gray-600 flex gap-2">
                    <Link href="tel:0599717102" className="hover:text-black transition-colors">
                      0599717102
                    </Link>
                    <span>|</span>
                    <Link href="tel:0572416161" className="hover:text-black transition-colors">
                      0572416161
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Visit Us</h3>
                  <p className="text-gray-600">43 Bathur St. East Legon, Accra, Ghana</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-black mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link 
                  href="https://www.linkedin.com/company/kidtroniclabs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </Link>
                <Link 
                  href="https://www.instagram.com/kidtroniclabs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </Link>
                <Link 
                  href="https://www.tiktok.com/@kidtroniclabs?_t=ZM-90InLFqlWG3&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <form className="space-y-6">
              <div className="space-y-2">
                <Input
                  placeholder="Your Name"
                  className="h-12 bg-gray-50 border-gray-200 text-black placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="h-12 bg-gray-50 border-gray-200 text-black placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-gray-50 border-gray-200 text-black placeholder-gray-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-12 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
