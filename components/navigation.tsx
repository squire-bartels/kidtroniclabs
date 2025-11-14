"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/contact", label: "Contact" },
  ]

  // WhatsApp enrollment function
  const handleEnrollClick = () => {
    const whatsappNumber = "+233599717102"
    const message = "Hi! I'm interested in enrolling in Kidtronic's STEM programs. Could you please provide more information?"
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-10 w-auto flex items-center justify-center relative">
              <Image 
                src="/kidtronic logo.gif" 
                alt="Kidtronic Logo" 
                width={120} 
                height={40} 
                style={{ objectFit: 'contain', height: '100%', width: 'auto' }} 
                priority 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black hover:text-gray-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className="bg-black text-white hover:bg-gray-800"
              onClick={handleEnrollClick}
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
              className="text-black hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-black hover:text-gray-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-black text-white hover:bg-gray-800"
                  onClick={handleEnrollClick}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
