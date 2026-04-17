'use client'

import type { FC } from 'react'
import { useState } from 'react'

interface Experience {
  id: string
  title: string
  description: string
  image: string
}

const experiences: readonly Experience[] = [
  {
    id: "library-nook",
    title: "Sacred Library",
    description: "Immerse yourself in our vibrant, bohemian sanctuary",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%2022.04.01.png-LdcrmjbfRTGN3jVK82aWYfKdgmxTTa.jpeg",
  },
  {
    id: "snowy-serenity",
    title: "Snowy Serenity",
    description: "Experience the magical landscape covered in pristine snow",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6395.JPG-07bjUWs1mEcevHnQuOnnl1aQLO2FWe.jpeg",
  },
  {
    id: "golden-sunset",
    title: "Golden Sunset",
    description: "Witness breathtaking sunsets over snow-capped mountains",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5816.JPG-ncMlT8r6as528XyYnqzthfFljds03V.jpeg",
  },

  {
    id: "sacred-entrance",
    title: "Sacred Welcome",
    description: "Enter through our vibrant, spiritually-designed gates",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/92700FCB-2677-4016-95C4-761958A3DE78.JPG-W9uh9JmtxC6Il66oimmXtdDfn687su.jpeg",
  },
  {
    id: "colorful-rooms",
    title: "Colorful Interiors",
    description: "Stay in thoughtfully designed rooms filled with warmth",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1330523F-BA35-43F5-A446-4CE3E0C3EE6D.JPG-HW5OoESgCk3pyY7J9OpBtVtH7TYx3M.jpeg",
  },
  {
    id: "forest-paths",
    title: "Forest Exploration",
    description: "Discover mystical trails through ancient forests",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5646.JPG-8Xg7sTp43UumnSswutFDNGrsaa5Ore.jpeg",
  },
  {
    id: "elevated-views",
    title: "Elevated Perspectives",
    description: "Experience breathtaking views from our signature structures",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/40C831AC-192C-453A-8ED9-D8C28999996A.JPG-Xwd9I1HMMALiHz7PpvHF75mwtGo7St.jpeg",
  },
  {
    id: "cozy-nooks",
    title: "Cozy Nooks",
    description: "Find your perfect spot overlooking nature's canvas",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5758.JPG-fnf3yDXwSDMVgyclHJlUjrlPNA1JNC.jpeg",
  },
  {
    id: "intimate-gatherings",
    title: "Intimate Gatherings",
    description: "Connect with fellow seekers in our warm community spaces",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A4E790ED-4D14-436B-A5D7-2EE722F35560.JPG-yR8mDTU5EzJfVvC89mMty6YhiH4mPZ.jpeg",
  },
]

const ExperiencesSection: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.ceil(experiences.length - itemsPerView)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#df6327]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex-1 text-white space-y-6 animate-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Bringing <span className="text-blue-600 italic">Magic</span> to your life
            </h2>

            <blockquote className="text-lg md:text-xl font-sans leading-relaxed">
              "LIFE IS TOO MAGICAL NOT TO BE ENCHANTED BY IT"
            </blockquote>

            <p className="text-white/90 font-sans">
              ~ Sehar family
            </p>

            <p className="text-base md:text-lg font-sans leading-relaxed text-white/95">
              We can't stop raving about the magic of our house of Bliss. The only way to fully experience its magic is to spend a few days with us.
            </p>
          </div>

          {/* Right Carousel */}
          <div className="flex-1 w-full animate-on-scroll">
            <div className="relative group">
              {/* Carousel Card */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                {/* Decorative frame background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none z-10" />

                {/* Carousel */}
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                  >
                    {experiences.map((experience) => (
                      <div
                        key={experience.id}
                        className="w-full flex-shrink-0"
                      >
                        <div className="relative h-96 overflow-hidden bg-gray-900">
                          {/* Background Image with lazy loading and error handling */}
                          <img
                            src={experience.image}
                            alt={experience.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.background = '#4b5563'
                            }}
                          />

                          {/* Elegant overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons - Frosted glass overlay */}
                <button
                  onClick={goPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/25 hover:bg-white/35 backdrop-blur-md text-white rounded-full transition-all duration-300 z-20 shadow-lg hover:shadow-xl hover:scale-110 hidden lg:flex items-center justify-center border border-white/40"
                  aria-label="Previous experiences"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/25 hover:bg-white/35 backdrop-blur-md text-white rounded-full transition-all duration-300 z-20 shadow-lg hover:shadow-xl hover:scale-110 hidden lg:flex items-center justify-center border border-white/40"
                  aria-label="Next experiences"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Mobile Navigation */}
                <button
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-[#df6327]/80 hover:bg-[#df6327] text-white rounded-full transition-all duration-300 z-20 md:hidden"
                  aria-label="Previous experiences"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#df6327]/80 hover:bg-[#df6327] text-white rounded-full transition-all duration-300 z-20 md:hidden"
                  aria-label="Next experiences"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Indicator Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${index === currentIndex
                        ? 'w-8 h-3 bg-[#df6327]'
                        : 'w-3 h-3 bg-white/50 hover:bg-white/70'
                      }`}
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

export default ExperiencesSection
