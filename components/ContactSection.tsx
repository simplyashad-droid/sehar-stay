'use client'

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
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                <PhoneIcon />
              </div>
            </div>
            <h3 className="font-sans font-semibold text-foreground mb-3 text-center">Call Us</h3>
            <a href="tel:+919876543210" className="text-foreground/80 hover:text-foreground font-sans text-center block transition-colors font-medium">
              +91 9876 543 210
            </a>
          </div>

          {/* Email */}
          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow border border-foreground/10">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
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
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
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
            <a href="#" className="px-6 py-2 rounded-full bg-transparent text-primary transition-all duration-300 font-sans font-medium text-sm border-2 border-primary hover:bg-primary/10">
              Instagram
            </a>
            <a href="#" className="px-6 py-2 rounded-full bg-transparent text-primary transition-all duration-300 font-sans font-medium text-sm border-2 border-primary hover:bg-primary/10">
              Facebook
            </a>
            <a href="#" className="px-6 py-2 rounded-full bg-transparent text-primary transition-all duration-300 font-sans font-medium text-sm border-2 border-primary hover:bg-primary/10">
              Twitter
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-foreground/10 text-center">
          <p className="text-foreground/60 font-sans text-sm">
            © 2026 SEHAR. All rights reserved. | Your dream stay awaits.
          </p>
        </div>
      </div>
    </section>
  )
}
