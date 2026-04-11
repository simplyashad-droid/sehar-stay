'use client'

// Cache bust: v4
import { useState, type FC } from "react"
import Link from "next/link"
import Image from "next/image"

import HeroSection from "@/components/HeroSection"
import RoomsSection from "@/components/RoomsSection"
import ExperiencesSection from "@/components/ExperiencesSection"
import SacredExperiencesSection from "@/components/SacredExperiencesSection"
import ClosingSection from "@/components/ClosingSection"
import ContactSection from "@/components/ContactSection"
import BookingFormModal from "@/components/BookingFormModal"

const SeharStayPage: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false)

  const rooms = [
    {
      id: "shambala",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shambala-room-POTNbhWctm7eJXh6eYvGe3swbHS18V.png",
      category: "SEHAR PURPLE ROOM",
      description: "LUXURY ROOM WITH ENSUITE BATHROOM AND ATTIC",
      roomName: "Shambala",
      gradient: "from-purple-200 via-purple-100 to-white",
      basePrice: 5000,
    },
    {
      id: "nerika",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nerika-room-4QuiGwKJA7BKRRZmX0cZRYEJXehoZL.png",
      category: "SEHAR GREEN ROOM",
      description: "LUXURY ROOM WITH BOHO INTERIORS",
      roomName: "Nerika",
      roomNameMeaning: "Heart Portal",
      gradient: "from-green-200 via-green-100 to-white",
      basePrice: 4500,
    },
    {
      id: "family-hub",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/family-hub-room-csBiYxBeQzJdNqpOmadxlTGMkTGjiZ.png",
      category: "SEHAR FAMILY STUDIO",
      description: "WHERE TOGETHERNESS IS EXPERIENCED",
      roomName: "Family Hub",
      gradient: "from-blue-200 via-blue-100 to-white",
      basePrice: 3812,
    },
    {
      id: "escape",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/escape-room-8PtxdZC389QRB6PQgjkSkJU6QEvg5T.png",
      category: "SEHAR DREAMY ROOM",
      description: "LUXURY ROOM WITH GARDEN VIEW",
      roomName: "Escape",
      gradient: "from-yellow-200 via-yellow-100 to-white",
      basePrice: 4200,
    },
    {
      id: "sacred-space",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sacred-space-room-8Ywa8p7qj3uVNG2iMCHaYjm64mz8pt.png",
      category: "SEHAR SACRED SPACE",
      description: "HEALING ROOM - BREATH & SILENCE",
      roomName: "Sacred Space",
      gradient: "from-pink-200 via-pink-100 to-white",
      basePrice: 4800,
    },
    {
      id: "nazar",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nazar-room-ywMwvA5lWmq75Dd5FEwcJNsmwT2br4.png",
      category: "SEHAR STANDARD ROOM",
      description: "LUXURY ROOM WITH FOREST VIEW & ENSUITE",
      roomName: "Nazar",
      gradient: "from-amber-200 via-amber-100 to-white",
      basePrice: 3500,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-orange-200 via-orange-100 to-transparent">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          
          <Link href="/sehar-stay" className="flex-shrink-0">
            <Image 
              src="/sehar-logo-sub.png" 
              alt="Sehar Stay Logo" 
              width={100} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            ☰
          </button>

          <nav className="hidden md:flex gap-6 items-center">
            <button onClick={() => setIsBookingModalOpen(true)} className="px-4 py-1 text-sm border border-[#df6327] text-[#df6327] font-medium rounded-full hover:bg-[#df6327] hover:text-white transition duration-300">
              Stay with us
            </button>
          </nav>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <button onClick={() => setIsBookingModalOpen(true)} className="w-full px-4 py-1 text-sm border border-[#df6327] text-[#df6327] font-medium rounded-full hover:bg-[#df6327] hover:text-white transition duration-300">
              Stay with us
            </button>
          </div>
        )}
      </header>

      {/* Page Sections */}
      <main className="pt-0">
        <HeroSection />
        <ExperiencesSection />
        <RoomsSection />
        <SacredExperiencesSection />
        <ClosingSection onStartJourney={() => setIsBookingModalOpen(true)} />
        <ContactSection />
      </main>

      {/* Booking Form Modal */}
      <BookingFormModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        rooms={rooms}
      />

    </div>
  )
}

export default SeharStayPage
