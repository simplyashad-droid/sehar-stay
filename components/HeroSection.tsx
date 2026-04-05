'use client'

import type { FC } from 'react'

const HeroSection: FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/sehar-cottage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      </div>

      {/* Right-Aligned Content Container */}
      <div className="relative z-10 w-full h-full flex items-start justify-end pt-20 md:pt-32">
        
        <div className="flex flex-col pr-6 md:pr-16 lg:pr-24 max-w-xl">
          
          <p className="font-serif text-foreground text-sm md:text-base mb-3 tracking-wide font-light">
            Your dream stay in a
          </p>

          <h2 className="font-serif text-primary text-5xl md:text-6xl lg:text-7xl font-bold mb-8 italic leading-tight">
            Himalayan Cottage
          </h2>

          <div className="space-y-1">
            <p className="font-sans text-foreground text-xs md:text-sm tracking-[0.15em] font-light">
              SEHAR BOUTIQUE
            </p>
            <p className="font-sans text-foreground text-xs md:text-sm tracking-[0.15em] font-light">
              STAY & GALLERY
            </p>
          </div>

        </div>

      </div>

      {/* Bottom CTA Section */}
      <div className="absolute bottom-20 left-0 right-0 z-10 flex flex-col items-center gap-4">
        
        <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-serif font-bold italic tracking-wide">
          FIND YOUR ROOM
        </h1>

        <p className="text-foreground/70 text-xs md:text-sm tracking-widest font-light uppercase">
          A ROOM MADE FOR YOU
        </p>

        {/* Scroll Indicator */}
        <div className="mt-6 animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

      </div>

    </section>
  )
}

export default HeroSection
