'use client'

import { useState, useEffect, type FC } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface Experience {
  id: string
  title: string
  byeline: string
  videoUrl: string
  thumbnail: string
  posterImage: string
}

const experiences: Experience[] = [
  {
    id: 'yoga',
    title: 'Yoga | Breathwork | Meditation',
    byeline: 'Find inner peace through guided practices in our serene mountain sanctuary',
    videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yoga%20%281%29-nPpFnaogPpiQjnJpHqrTyHgAVndeWk.mp4',
    thumbnail: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    posterImage: '/yoga-meditation-poster.jpg',
  },
  {
    id: 'soundbath',
    title: 'Sound Bath',
    byeline: 'Immerse yourself in healing vibrations and sonic therapy',
    videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOUND%20BATH%20%281%29-nOTXxn6NfNBXxISzHWnCTVNvuzQpIc.mp4',
    thumbnail: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    posterImage: '/sound-bath-poster.jpg',
  },
  {
    id: 'art',
    title: 'Art Exploration',
    byeline: 'Discover your creative expression through guided artistic experiences',
    videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art-EinrUtEQ5ROfeSYn9xrUGvgjrIzdXN.MOV',
    thumbnail: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    posterImage: '/art-exploration-poster.jpg',
  },
  {
    id: 'lebanese',
    title: 'Lebanese Cooking & Feast',
    byeline: 'Engage in authentic culinary traditions and share a feast with fellow guests',
    videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lebanese%20food-1%20%281%29-MO6j9Gb05FOJ59smxhOAlrqZjp0Mfe.mp4',
    thumbnail: 'linear-gradient(135deg, #ff9b56 0%, #ff6a88 100%)',
    posterImage: '/lebanese-food-poster.jpg',
  },
]

const SacredExperiencesSection: FC = () => {
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(null)
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const selectedIndex = experiences.findIndex((exp) => exp.id === selectedExperienceId)
  const selectedExperience = selectedIndex !== -1 ? experiences[selectedIndex] : null

  // Lazy load videos only when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsSectionVisible(true)
      }
    }, { threshold: 0.1 })

    const section = document.getElementById('sacred-experiences-section')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleNextVideo = () => {
    const nextIndex = (selectedIndex + 1) % experiences.length
    setSelectedExperienceId(experiences[nextIndex].id)
  }

  const handlePrevVideo = () => {
    const prevIndex = selectedIndex === 0 ? experiences.length - 1 : selectedIndex - 1
    setSelectedExperienceId(experiences[prevIndex].id)
  }

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 via-white to-orange-50" id="sacred-experiences-section">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#df6327] uppercase tracking-wider mb-4">
              Sacred Moments
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Sehar Sacred Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Choose among a variety of curated experiences to add value to our guests stay
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-3xl mx-auto">
            {experiences.map((experience) => (
              <button
                key={experience.id}
                onClick={() => setSelectedExperienceId(experience.id)}
                className="group flex flex-col items-center gap-4 cursor-pointer"
              >
                {/* Portrait Rectangle Video Tile */}
                <div
                  className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 border-orange-200 group-hover:border-[#df6327]"
                >
                  <video
                    src={isSectionVisible ? experience.videoUrl : undefined}
                    poster={experience.posterImage}
                    className="w-full h-full object-cover"
                    muted
                    preload="metadata"
                    crossOrigin="anonymous"
                    onError={(e) => console.log('[v0] Video load error:', experience.id)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ▶
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-center font-semibold text-gray-900 text-base md:text-lg leading-tight">
                  {experience.title}
                </h3>

                {/* Byeline */}
                <p className="text-center text-sm md:text-base text-gray-600 line-clamp-2 max-w-sm">
                  {experience.byeline}
                </p>
              </button>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center gap-2">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedExperienceId(exp.id)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selectedExperienceId === exp.id ? 'bg-[#df6327] w-8' : 'bg-orange-200 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-start justify-center p-4 overflow-y-auto pt-8">
          <button
            onClick={() => setSelectedExperienceId(null)}
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={32} />
          </button>

          <div className="w-full max-w-2xl">
            {/* Video */}
            <video
              src={selectedExperience.videoUrl}
              className="w-full h-auto rounded-lg bg-black"
              controls
              autoPlay
              crossOrigin="anonymous"
            />

            {/* Title and Byeline */}
            <div className="mt-8 text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {selectedExperience.title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {selectedExperience.byeline}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <button
                onClick={handlePrevVideo}
                className="text-white hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <ChevronLeft size={32} />
              </button>

              <div className="text-white text-sm font-semibold">
                {selectedIndex + 1} / {experiences.length}
              </div>

              <button
                onClick={handleNextVideo}
                className="text-white hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SacredExperiencesSection
