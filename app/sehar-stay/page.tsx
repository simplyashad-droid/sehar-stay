'use client'

// Force rebuild
import { useState, type FC } from "react"
import Link from "next/link"
import Image from "next/image"

import HeroSection from "@/components/HeroSection"
import PhilosophySection from "@/components/PhilosophySection"
import RoomsSection from "@/components/RoomsSection"
import ExperiencesSection from "@/components/ExperiencesSection"
import ClosingSection from "@/components/ClosingSection"
import ContactSection from "@/components/ContactSection"

const SeharStayPage: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-orange-200 via-orange-100 to-transparent">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          
          <Link href="/sehar-stay" className="flex-shrink-0">
            <Image 
              src="/sehar-logo-sub.png" 
              alt="Sehar Stay Logo" 
              width={120} 
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            ☰
          </button>

          <nav className="hidden md:flex gap-6 items-center">
            <button className="px-6 py-2 bg-[#df6327] text-white font-medium rounded hover:bg-[#c55a1f] transition duration-300">
              Stay with us
            </button>
          </nav>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <button className="w-full px-6 py-2 bg-[#df6327] text-white font-medium rounded hover:bg-[#c55a1f] transition duration-300">
              Stay with us
            </button>
          </div>
        )}
      </header>

      {/* Page Sections */}
      <main className="pt-0">
        <HeroSection />
        <PhilosophySection />
        <RoomsSection />
        <ExperiencesSection />
        <ClosingSection />
        <ContactSection />
      </main>

    </div>
  )
}

export default SeharStayPage
