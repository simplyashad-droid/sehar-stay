'use client'

import { useState, useEffect, FC } from 'react'

const PhilosophySection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const images: string[] = [
    '/sehar-carousel/IMG_5758.jpg',
    '/sehar-carousel/IMG_gate.jpg',
    '/sehar-carousel/IMG_entrance.jpg',
    '/sehar-carousel/IMG_6648.jpg',
    '/sehar-carousel/IMG_6393.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-balance leading-tight">
              Bringing <span className="italic text-blue-900">Magic</span> to your life
            </h2>

            <blockquote className="text-lg md:text-xl mb-8 leading-relaxed text-white/95 uppercase tracking-wide font-sans">
              "LIFE IS TOO MAGICAL NOT TO BE ENCHANTED BY IT"
            </blockquote>

            <p className="font-sans text-base md:text-lg leading-relaxed mb-6 text-white/90">
              ~ Sehar family
            </p>

            <p className="font-sans text-base md:text-lg leading-relaxed text-white/85">
              We can't stop raving about the magic of our house of Bliss. The only way to fully experience its magic is to spend a few days with us.
            </p>
          </div>

          {/* Right Carousel */}
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl ring-4 ring-white/20">
            {/* Carousel Images */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Carousel slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3 bg-black/30 backdrop-blur px-4 py-2 rounded-full">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary w-8 h-3' : 'bg-white/50 w-3 h-3 hover:bg-white/75'
                  } rounded-full`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
