import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Video } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/contact", label: "Contact" },
  ]

  const programs = [
    { href: "/programs#early-robotics", label: "Early Robotics & Coding for Kids" },
    { href: "/programs#creative-coding", label: "Creative Coding & Game Development" },
    { href: "/programs#arduino-electronics", label: "Arduino & Electronics" },
    { href: "/programs#robotics-engineering", label: "Robotics Engineering" },
    { href: "/programs#3d-design", label: "3D Design & Printing" },
    { href: "/programs#iot-smart-devices", label: "IoT & Smart Devices" },
    { href: "/programs#steam-challenges", label: "STEAM Challenges & Innovation Labs" },
    { href: "/programs#science-backed", label: "Science-Backed Activities" },
    { href: "/programs#project-based", label: "Project Based Learning" },
    { href: "/programs#summer-camps", label: "Summer STEM Camps & After-School Clubs" },
  ]

  const resources = [
    { href: "/resources#articles", label: "Articles & Guides" },
    { href: "/resources#challenges", label: "STEM Challenges" },
    { href: "/resources#diy", label: "DIY Projects" },
    { href: "/resources#newsletter", label: "Newsletter" },
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-auto flex items-center justify-center relative">
                  <Image 
                    src="/kidtronic logo (1).gif" 
                    alt="Kidtronic Logo" 
                    width={120} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Igniting curiosity, creativity, and innovation in young minds through hands-on STEM education. Building
                tomorrow's innovators today.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-white" />
                  <div className="flex gap-2 text-sm">
                    <Link href="tel:0599717102" className="hover:text-white transition-colors">
                      0599717102
                    </Link>
                    <span>|</span>
                    <Link href="tel:0572416161" className="hover:text-white transition-colors">
                      0572416161
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-white" />
                  <Link href="mailto:kidtronic10@gmail.com" className="text-sm hover:text-white transition-colors">
                    kidtronic10@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-sm">43 Bathur St. East Legon, Accra, Ghana</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-transparent border-gray-700 text-white hover:bg-gray-800"
                  asChild
                >
                  <Link href="https://www.linkedin.com/company/kidtroniclabs/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-transparent border-gray-700 text-white hover:bg-gray-800"
                  asChild
                >
                  <Link href="https://www.instagram.com/kidtroniclabs/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-transparent border-gray-700 text-white hover:bg-gray-800"
                  asChild
                >
                  <Link href="https://www.tiktok.com/@kidtroniclabs?_t=ZM-90InLFqlWG3&_r=1" target="_blank" rel="noopener noreferrer">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </div>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-lg text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs - Split into two columns */}
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-lg text-white">Our Programs</h3>
              <ul className="space-y-3">
                {programs.slice(0, 5).map((program) => (
                  <li key={program.href}>
                    <Link
                      href={program.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {program.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Newsletter */}
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-lg text-white">More Programs</h3>
              <ul className="space-y-3 mb-6">
                {programs.slice(5).map((program) => (
                  <li key={program.href}>
                    <Link
                      href={program.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {program.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Stay Updated</h4>
                <p className="text-xs text-gray-300">Get weekly STEM resources and updates</p>
                <div className="flex gap-2">
                  <Input type="email" placeholder="Your email" className="text-sm bg-gray-900 border-gray-700 text-white" />
                  <Button size="sm" className="bg-white hover:bg-gray-200 text-black whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">© 2025 Kidtronic. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
