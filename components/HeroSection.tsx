'use client'

import type { FC } from 'react'
import Image from 'next/image'

const HeroSection: FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden mt-16">
      
      {/* Background Image - Using Next.js Image for optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sehar-cottage.jpg"
          alt="Himalayan Cottage"
          fill
          priority
          className="object-cover object-top"
          style={{ backgroundAttachment: 'fixed' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      </div>

      {/* Right-Aligned Content Container - Positioned in Sky */}
      <div className="relative z-10 w-full flex items-start justify-end pt-4 md:pt-6 lg:pt-8">
        
        <div className="flex flex-col pr-6 md:pr-12 lg:pr-20 max-w-md">
          
          <p className="font-sans text-foreground/70 text-[10px] md:text-xs tracking-[0.1em] font-light uppercase">
            Your dream stay in a
          </p>

          <h2 className="font-serif text-[#df6327] text-2xl md:text-4xl lg:text-5xl font-bold mb-2 italic leading-tight">
            Himalayan Cottage
          </h2>

          <div className="space-y-0.5">
            <p className="font-sans text-foreground/70 text-[10px] md:text-xs tracking-[0.1em] font-light">
              SEHAR BOUTIQUE STAY & GALLERY
            </p>
          </div>

        </div>

      </div>

      {/* Bottom CTA Section */}
      <div className="absolute bottom-20 left-0 right-0 z-10 flex flex-col items-center gap-1">
        
        <h1 className="text-[#df6327] text-sm md:text-base lg:text-lg font-serif font-bold italic tracking-wide">
          CHOOSE YOUR ROOM
        </h1>

        <p className="text-white text-[8px] md:text-[10px] tracking-widest font-light uppercase">
          A ROOM MADE FOR YOU
        </p>

        {/* Scroll Indicator */}
        <div className="mt-1 animate-bounce">
          <svg
            className="w-6 h-6 text-[#df6327]"
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
