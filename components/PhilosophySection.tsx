'use client'

import { useState, useEffect, type FC } from 'react'
import { philosophyCarouselImages } from '@/constants/philosophyCarouselImages'

const PhilosophySection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const images = philosophyCarouselImages.map(img => img.url)
  const imageData = philosophyCarouselImages

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
    <section className="py-16 md:py-28 px-4 md:px-8 bg-[#df6327]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Bringing <span className="italic text-blue-900">Magic</span> to your life
            </h2>

            <blockquote className="text-lg md:text-xl leading-relaxed text-white/95 uppercase tracking-wide font-sans font-light">
              "LIFE IS TOO MAGICAL NOT TO BE ENCHANTED BY IT"
            </blockquote>

            <p className="font-sans text-base md:text-lg leading-relaxed text-white/90 font-light">
              ~ Sehar family
            </p>

            <p className="font-sans text-base md:text-lg leading-relaxed text-white/85 font-light pt-2">
              We can&apos;t stop raving about the magic of our HOUSE OF BLISS.<br />
              The only way to fully experience its magic is to spend a few days with us.
            </p>
          </div>

          {/* Right Carousel */}
          <div className="relative group">
            {/* Carousel Container with enhanced styling */}
            <div className="relative h-96 md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Soft gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10 z-20 pointer-events-none rounded-3xl" />
              
              {/* Carousel Images */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={imageData[index]?.alt || `Carousel slide ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}

              {/* Navigation Arrows - Refined styling */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm group-hover:bg-white/40"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm group-hover:bg-white/40"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot Indicators - Enhanced styling */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-4 px-6 py-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-500 ${
                      index === currentSlide 
                        ? 'bg-white w-10 h-3 shadow-lg' 
                        : 'bg-white/50 w-3 h-3 hover:bg-white/75'
                    } rounded-full`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
