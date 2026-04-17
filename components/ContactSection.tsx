'use client'

import Link from 'next/link'
import type { FC, ReactNode } from 'react'

const PhoneIcon: FC = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const EmailIcon: FC = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const LocationIcon: FC = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-foreground/70 font-sans text-lg">We'd love to help you plan your perfect stay</p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Phone */}
          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow border border-foreground/10">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#df6327]/10 text-[#df6327]">
                <PhoneIcon />
              </div>
            </div>
            <h3 className="font-sans font-semibold text-foreground mb-3 text-center">Call Us</h3>
            <a href="tel:+918219584232" className="text-foreground/80 hover:text-foreground font-sans text-center block transition-colors font-medium">
              +91 8219584232
            </a>
          </div>

          {/* Email */}
          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow border border-foreground/10">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#df6327]/10 text-[#df6327]">
                <EmailIcon />
              </div>
            </div>
            <h3 className="font-sans font-semibold text-foreground mb-3 text-center">Email Us</h3>
            <a href="mailto:hello@seharmanali.com" className="text-foreground/80 hover:text-foreground font-sans text-center block transition-colors font-medium text-sm break-all">
              hello@seharmanali.com
            </a>
          </div>

          {/* Location */}
          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow border border-foreground/10">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#df6327]/10 text-[#df6327]">
                <LocationIcon />
              </div>
            </div>
            <h3 className="font-sans font-semibold text-foreground mb-3 text-center">Visit Us</h3>
            <p className="text-foreground/70 font-sans text-sm text-center">Manali, Himachal Pradesh, India</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 md:mt-16 text-center border-t border-foreground/10 pt-8">
          <p className="text-foreground/70 font-sans mb-6 uppercase tracking-wide text-sm">Follow our journey</p>
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.instagram.com/seharboutiquestay/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-transparent text-[#df6327] transition-all duration-300 font-sans font-medium text-sm border-2 border-[#df6327] hover:bg-[#df6327]/10">
              Instagram
            </a>
            <a href="https://www.facebook.com/p/Sehar-Boutique-Stay-Gallery-61553047706399/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-transparent text-[#df6327] transition-all duration-300 font-sans font-medium text-sm border-2 border-[#df6327] hover:bg-[#df6327]/10">
              Facebook
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-foreground/10">
          <div className="text-center mb-6">
            <p className="text-foreground/60 font-sans text-sm">
              © 2026 SEHAR. All rights reserved. | Your dream stay awaits.
            </p>
          </div>
          
          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link 
              href="/terms-and-conditions"
              className="text-foreground/70 hover:text-foreground font-sans transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-foreground/30">|</span>
            <Link 
              href="/privacy-policy"
              className="text-foreground/70 hover:text-foreground font-sans transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-foreground/30">|</span>
            <Link 
              href="/cancellation-policy"
              className="text-foreground/70 hover:text-foreground font-sans transition-colors"
            >
              Cancellation Policy
            </Link>
            <span className="text-foreground/30">|</span>
            <Link 
              href="/contact-us"
              className="text-foreground/70 hover:text-foreground font-sans transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
