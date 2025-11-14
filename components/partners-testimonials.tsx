"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import LogoLoop from "@/components/ui/logo-loop"

const partners = [
  { src: "/partner-1.jpg", alt: "Educational Partner" },
  { src: "/partner-2.jpeg", alt: "Technology Partner" },
  { src: "/partner-3.png", alt: "STEM Education Partner" },
]

export function PartnersTestimonials() {
  const sectionRef = useRef(null)
  const ctaRef = useRef(null)
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px 0px" })

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#f6f6f6] border border-gray-200 py-16 px-8 overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] pointer-events-none"></div>
          
          {/* Partners Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-3xl font-bold text-black mb-8">Our Trusted Partners</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              We collaborate with leading organizations to bring the best STEM learning experiences to students.
            </p>
            <div className="py-4">
              <LogoLoop
                logos={partners}
                speed={50}
                logoHeight={40}
                gap={48}
                fadeOut={true}
                fadeOutColor="#f6f6f6"
                pauseOnHover={true}
                scaleOnHover={true}
              />
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            ref={ctaRef}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={isCtaInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.7 }}
            className="text-center bg-black border border-gray-200 rounded-2xl p-12 relative z-10"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Ignite Your Child's Potential?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of young innovators and start an exciting journey in STEM.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-200 text-black px-8"
                onClick={() => {
                  const whatsappNumber = "+233599717102"
                  const message = "Hi! I'm interested in enrolling in Kidtronic's STEM programs. Could you please provide more information?"
                  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, '_blank')
                }}
              >
                Enroll Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
