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
        
        <p style={{ fontFamily: 'serif', color: '#df6327' }}>
          Your dream stay in a
        </p>

        <h2 style={{ fontFamily: 'serif', color: '#df6327' }}>
          Himalayan Cottage
        </h2>

        <p style={{ fontFamily: 'Georgia, serif' }}>
          SEHAR BOUTIQUE<br />STAY & GALLERY
        </p>
      </div>

      <div className="absolute bottom-16 left-0 right-0 z-10 flex flex-col items-center">
        
        <h1 style={{ color: '#df6327' }}>
          Find Your Room
        </h1>

        <p style={{ fontSize: '10px' }}>
          A ROOM MADE FOR YOU
        </p>

      </div>

    </section>
  )
}
