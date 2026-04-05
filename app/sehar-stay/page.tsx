'use client'

// Cache bust: v4
import { useState, type FC } from "react"
import Link from "next/link"
import Image from "next/image"

import HeroSection from "@/components/HeroSection"
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
            <button className="px-4 py-1 text-sm border border-[#df6327] text-[#df6327] font-medium rounded-full hover:bg-[#df6327] hover:text-white transition duration-300">
              Stay with us
            </button>
          </nav>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <button className="w-full px-4 py-1 text-sm border border-[#df6327] text-[#df6327] font-medium rounded-full hover:bg-[#df6327] hover:text-white transition duration-300">
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
        <ClosingSection />
        <ContactSection />
      </main>

    </div>
  )
}

export default SeharStayPage
