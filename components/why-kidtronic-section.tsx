"use client"

import { Users, Play, Smile } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function WhyKidtronicSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })
  
  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#f6f6f6] border border-gray-200 py-16 px-8 overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12 relative z-10"
          >
            <h2 className="text-3xl font-bold text-black mb-4">Why Kidtronic?</h2>
            <p className="text-gray-600 max-w-2xl">
              We provide a unique learning experience that goes beyond traditional education. Our approach is designed to
              make learning fun, engaging, and effective.
            </p>
          </motion.div>

          <div className="space-y-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from passionate educators and industry professionals dedicated to your success.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Play className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Hands-On Projects</h3>
                <p className="text-gray-600">
                  Apply what you learn through exciting projects that bring concepts to life.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Smile className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Personalized Learning</h3>
                <p className="text-gray-600">Our curriculum adapts to each student's pace and learning style.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
