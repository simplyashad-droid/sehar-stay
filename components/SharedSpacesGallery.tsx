'use client'

import { useState, type FC } from 'react'
import { X } from 'lucide-react'

interface SharedSpace {
  id: string
  image: string
  title: string
  description: string
}

const sharedSpaces: SharedSpace[] = [
  {
    id: 'courtyard',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2ef65880-bfc6-4d18-ab45-b79841993238-ExfnBkbfXJaZrE5wFYRtwGFRU1PIRm.jpeg',
    title: 'Vibrant Courtyard Oasis',
    description: 'Colorful outdoor lounge with prayer flags, plush seating, and mountain views',
  },
  {
    id: 'soundbath',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4956a116-8f08-4fa8-9711-4a9cd0e027d9-oeMK2YzQjgeoOxo0rPgmUhRzEzIUHU.jpeg',
    title: 'Sound Bath Sanctuary',
    description: 'Mystical neon-lit healing chamber with glowing installations and singing bowls',
  },
  {
    id: 'kitchen',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ad380514-f6c2-4595-a045-f193b181cc7c-SJLHHtxnhd5djWmbRBVwnIpEBnGBnw.webp',
    title: 'Kitchen Garden',
    description: 'Bright bohemian culinary space with fresh produce and flowering plants',
  },
  {
    id: 'garden1',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9938b41c-4273-4d17-ae88-f2d9ef10a3c1%20%281%29-f3dcNTo5wegAmQ4gyueZjwF19u8MFL.avif',
    title: 'Mountain Garden Retreat',
    description: 'Serene wooden seating surrounded by lush Himalayan flora',
  },
  {
    id: 'space1',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/00baf6bf-459d-4b66-b174-9323aa7e0e92%20%281%29-8zJKGn3kVwHzQ7kPnKBrxxJ6POw14G.avif',
    title: 'Sacred Space',
    description: 'Peaceful sanctuary for meditation and spiritual connection',
  },
  {
    id: 'space2',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/87244c97-a99a-40a6-8e14-2a7ef487997b-n1xGWgYyzsr5GrlApwCdUA2gHYXTyT.avif',
    title: 'Creative Studio',
    description: 'Inspiring artistic space for workshops and creative expression',
  },
  {
    id: 'space3',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90ed7d06-fc64-4c85-917a-1e3e46949dad-INGYrUUXaK4LJAeF9ohGIfdjTxU69n.avif',
    title: 'Wellness Hub',
    description: 'Holistic space dedicated to health and rejuvenation',
  },
  {
    id: 'garden2',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/41291e60-8526-4d5e-9aa0-11d3dbeb4e1c-knJw5iNV8uGA0ZkxRwjqT3hqicbgpe.webp',
    title: 'Flower-Filled Retreat',
    description: 'Tranquil garden bench surrounded by blooming flowers and mountains',
  },
]

const SharedSpacesGallery: FC = () => {
  const [selectedImage, setSelectedImage] = useState<SharedSpace | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const currentIndex = selectedImage ? sharedSpaces.findIndex(s => s.id === selectedImage.id) : 0

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % sharedSpaces.length
    setSelectedImage(sharedSpaces[nextIndex])
  }

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + sharedSpaces.length) % sharedSpaces.length
    setSelectedImage(sharedSpaces[prevIndex])
  }

  return (
    <>
      {/* Gallery Subsection - No separate section header, integrates with Where Luxury meets Creativity */}
      <div className="w-full px-4 md:px-8 bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Secondary Header Only */}
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
              Shared Spaces at Sehar Boutique Stay
            </h3>
          </div>

          {/* Masonry Gallery Grid - 50% smaller with 2 columns on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[140px]">
            {sharedSpaces.map((space, index) => {
              // Create varied grid layouts
              const isLarge = index === 0 || index === 3 || index === 7
              const isMedium = index === 1 || index === 4

              return (
                <div
                  key={space.id}
                  onClick={() => setSelectedImage(space)}
                  className={`
                    relative overflow-hidden rounded-xl cursor-pointer group
                    ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                    ${isMedium ? 'md:row-span-2' : ''}
                    h-full
                  `}
                >
                  {/* Image */}
                  <img
                    src={space.image}
                    alt={space.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Text Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg mb-1 line-clamp-2">
                      {space.title}
                    </h3>
                    <p className="text-white/90 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {space.description}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 13H7" />
                    </svg>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setSelectedImage(null)
            if (e.key === 'ArrowRight') handleNext()
            if (e.key === 'ArrowLeft') handlePrevious()
          }}
          tabIndex={0}
        >
          {/* Close Button - Top Right */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-60 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors duration-300 backdrop-blur-sm"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Main Content */}
          <div className="w-full max-w-6xl mx-auto animate-in scale-in-95 duration-300 relative">
            {/* Image Container */}
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-6 shadow-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="text-center mb-8">
              <h2 className="text-white text-3xl md:text-4xl font-serif font-bold mb-3">
                {selectedImage.title}
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                {selectedImage.description}
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mb-6">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-300 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Image Counter */}
              <span className="text-white/80 text-sm font-medium">
                {currentIndex + 1} / {sharedSpaces.length}
              </span>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-300 backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Navigation Hints */}
            <div className="text-center text-white/60 text-xs space-y-1">
              <p>← → or use arrow keys to navigate</p>
              <p>Press ESC to close</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SharedSpacesGallery
