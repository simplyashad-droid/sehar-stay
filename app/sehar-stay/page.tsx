'use client'

import type React from "react"
import { useState } from "react"
import Link from "next/link"

import HeroSection from "@/components/HeroSection"
import PhilosophySection from "@/components/PhilosophySection"
import RoomsSection from "@/components/RoomsSection"
import ExperiencesSection from "@/components/ExperiencesSection"
import ClosingSection from "@/components/ClosingSection"
import ContactSection from "@/components/ContactSection"

export default function SeharStayPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          <Link href="/sehar-stay" className="text-2xl font-serif font-bold">
            SEHAR
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            ☰
          </button>

          <nav className="hidden md:flex gap-6">
            <Link href="/sehar-stay">Home</Link>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <Link href="/sehar-stay">Home</Link>
            <a href="#contact">Contact</a>
          </div>
        )}
      </header>

      {/* Page Sections */}
      <main className="pt-20">
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
