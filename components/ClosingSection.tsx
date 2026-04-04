'use client'

export default function ClosingSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/sehar-stay/memories.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
          We create long-lasting memories
        </h2>

        <p className="text-lg md:text-xl text-white/90 font-sans leading-relaxed mb-8">
          Every moment at SEHAR is designed to touch your heart and transform your spirit. 
          Join us for an unforgettable journey in the heart of the Himalayas.
        </p>

        <button className="bg-secondary text-gray-900 px-8 md:px-12 py-3 md:py-4 rounded-full hover:bg-secondary/90 transition-colors font-sans font-semibold text-base md:text-lg shadow-lg">
          Start Your Journey
        </button>
      </div>
    </section>
  )
}
