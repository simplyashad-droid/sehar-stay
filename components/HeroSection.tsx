'use client'

import type { FC } from 'react'

const HeroSection: FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/sehar-cottage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      </div>

      <div className="relative z-10 pt-32 text-center max-w-3xl mx-auto px-4">
        
        <p className="font-serif text-orange-50 text-lg md:text-xl mb-4 drop-shadow-lg">
          Your dream stay in a
        </p>

        <h2 className="font-serif text-orange-50 text-5xl md:text-7xl font-bold mb-6 drop-shadow-xl">
          Himalayan Cottage
        </h2>

        <p className="font-serif text-orange-100 text-base md:text-lg drop-shadow-lg">
          SEHAR BOUTIQUE<br />STAY & GALLERY
        </p>
      </div>

      <div className="absolute bottom-16 left-0 right-0 z-10 flex flex-col items-center gap-3">
        
        <h1 className="text-primary text-4xl md:text-5xl font-serif font-bold drop-shadow-lg">
          Find Your Room
        </h1>

        <p className="text-xs md:text-sm text-orange-100 tracking-widest drop-shadow-md uppercase font-semibold">
          A ROOM MADE FOR YOU
        </p>

        <button className="mt-4 px-8 py-3 bg-primary hover:bg-primary/90 text-white font-sans font-semibold rounded-full transition-all duration-300 drop-shadow-lg hover:scale-105">
          Explore Rooms
        </button>

      </div>

    </section>
  )
}

export default HeroSection
