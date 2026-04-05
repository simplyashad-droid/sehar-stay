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
    id: "mountain-retreat",
    title: "Mountain Retreat",
    description: "Relax in scenic courtyards with panoramic valley views",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5919.JPG-o4a5a5aTxcvClxrBf3zY5zeSZqgeaw.jpeg",
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
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#df6327]/10 via-background to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Bringing Magic to Your Life</h2>
          <p className="text-foreground/70 font-sans text-lg md:text-xl">Discover the enchanting experiences that await you</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {experiences.map((experience) => (
                <div
                  key={experience.id}
                  className="min-w-[33.333%] px-4"
                >
                  <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-96 hover:-translate-y-2 ring-2 ring-[#df6327]/0 hover:ring-[#df6327]">
                    {/* Background Image */}
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 opacity-100 group-hover:opacity-95 transition-opacity" />

                    {/* Orange accent bar */}
                    <div className="absolute top-0 left-0 w-1 h-12 bg-[#df6327] transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="font-serif text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#df6327] transition-colors duration-300">{experience.title}</h3>
                      <p className="font-sans text-xs md:text-sm text-white/90 leading-relaxed group-hover:text-white/95 transition-colors">{experience.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 p-3 bg-[#df6327] hover:bg-[#c55a1f] text-white rounded-full transition-all duration-300 z-10"
            aria-label="Previous experiences"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 p-3 bg-[#df6327] hover:bg-[#c55a1f] text-white rounded-full transition-all duration-300 z-10"
            aria-label="Next experiences"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(experiences.length - itemsPerView + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-[#df6327]' : 'w-2 bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperiencesSection
