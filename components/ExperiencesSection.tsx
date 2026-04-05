'use client'

import type { FC } from 'react'

interface Experience {
  id: string
  title: string
  description: string
  image: string
}

const experiences: readonly Experience[] = [
  {
    id: "yoga",
    title: "Sacred Yoga",
    description: "Connect with your inner self through curated yoga sessions",
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "breathwork",
    title: "Breathwork",
    description: "Harness the power of breath for deeper healing",
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "sound-bath",
    title: "Sound Bath",
    description: "Immerse yourself in healing frequencies and vibrations",
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "art-therapy",
    title: "Art Therapy",
    description: "Express your creativity through guided art sessions",
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "culinary",
    title: "Culinary Experience",
    description: "Learn traditional cooking techniques from local experts",
    image: "/placeholder.svg?height=500&width=500",
  },
]

export default function ExperiencesSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Sehar Sacred Experiences</h2>
          <p className="text-foreground/70 font-sans text-lg md:text-xl">Curated activities to deepen your journey</p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {experiences.map((experience) => (
            <div key={experience.id} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-80 hover:-translate-y-1">
              {/* Background Image */}
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 opacity-100 group-hover:opacity-95 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{experience.title}</h3>
                <p className="font-sans text-xs md:text-sm text-white/90 leading-relaxed group-hover:text-white/95 transition-colors">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
