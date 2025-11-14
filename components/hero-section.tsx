"use client"

import { Button } from "@/components/ui/button"
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Slide data
const slides = [
  {
    id: 1,
    title: "Igniting Curiosity, Creativity & Innovation in Young Minds",
    description: "Empowering the next generation of innovators through hands-on STEM education.",
    backgroundImage: "/WhatsApp Image 2025-09-01 at 15.41.37_7144fb38.jpg",
    primaryButton: "Enroll Now",
    secondaryButton: "Learn More",
    primaryAction: "enroll",
    secondaryAction: "learnMore"
  },
  {
    id: 2,
    title: "Building Tomorrow's Tech Leaders Today",
    description: "Interactive coding workshops and robotics programs designed for curious young minds.",
    backgroundImage: "/WhatsApp Image 2025-09-12 at 17.19.04_1dfeb5e0.jpg",
    primaryButton: "View Programs",
    secondaryButton: "Book a Tour",
    primaryAction: "programs",
    secondaryAction: "contact"
  },
  {
    id: 3,
    title: "Where Learning Meets Innovation",
    description: "State-of-the-art facilities and expert instructors guiding every step of the journey.",
    backgroundImage: "/WhatsApp Image 2025-09-12 at 17.19.13_c93f5f95.jpg",
    primaryButton: "Get Started",
    secondaryButton: "Contact Us",
    primaryAction: "enroll",
    secondaryAction: "contact"
  }
]

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 60
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Button action handlers
  const handleButtonClick = (action: string) => {
    switch (action) {
      case 'enroll':
        // Open WhatsApp with the enrollment message
        const whatsappNumber = "+233599717102"
        const message = "Hi! I'm interested in enrolling in Kidtronic's STEM programs. Could you please provide more information?"
        const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
        break
      case 'programs':
        // Navigate to programs page
        window.location.href = '/programs'
        break
      case 'contact':
        // Navigate to contact page
        window.location.href = '/contact'
        break
      case 'learnMore':
        // Navigate to about page
        window.location.href = '/about'
        break
      default:
        console.log('Unknown action:', action)
    }
  }

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative rounded-3xl bg-black border border-gray-800 overflow-hidden shadow-2xl">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {slides.map((slide) => (
                <div key={slide.id} className="embla__slide flex-[0_0_100%] relative">
                  <div className="relative py-16 lg:py-24 px-8 flex items-center justify-center overflow-hidden">
                    {/* Optimized Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={slide.backgroundImage}
                        alt={`${slide.title} background`}
                        fill
                        priority={slide.id === 1} // Prioritize first slide
                        quality={85}
                        sizes="100vw"
                        className="object-cover opacity-40"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    
                    {/* Grid Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 text-center space-y-6 w-full max-w-4xl">
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>

                      <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        {slide.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                        <Button 
                          size="lg" 
                          className="bg-black hover:bg-gray-800 text-white px-8"
                          onClick={() => handleButtonClick(slide.primaryAction)}
                        >
                          {slide.primaryButton}
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-gray-500 text-white hover:bg-gray-800 px-8 bg-transparent"
                          onClick={() => handleButtonClick(slide.secondaryAction)}
                        >
                          {slide.secondaryButton}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === selectedIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
