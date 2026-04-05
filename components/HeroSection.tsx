'use client'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/sehar-stay/bg-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />
      </div>

      <div className="relative z-10 pt-20 text-center max-w-2xl mx-auto px-4">
        
        <p className="font-serif text-primary">
          Your dream stay in a
        </p>

        <h2 className="font-serif text-primary">
          Himalayan Cottage
        </h2>

        <p className="font-serif">
          SEHAR BOUTIQUE<br />STAY & GALLERY
        </p>
      </div>

      <div className="absolute bottom-16 left-0 right-0 z-10 flex flex-col items-center">
        
        <h1 className="text-primary">
          Find Your Room
        </h1>

        <p className="text-xs">
          A ROOM MADE FOR YOU
        </p>

      </div>

    </section>
  )
}
