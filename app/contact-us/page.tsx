'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-orange-200 via-orange-100 to-transparent">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/sehar-logo-sub.png" 
              alt="Sehar Stay Logo" 
              width={100} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link href="/" className="text-sm font-medium text-foreground hover:text-[#df6327] transition">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Title Section */}
          <div className="mb-12 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-foreground/60 text-lg">
              We&apos;d love to hear from you. Reach out with any questions or inquiries.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Location */}
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Sehar Stay<br />
                    Himalayan Boutique Cottage<br />
                    Himachal Pradesh, India
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:info@seharretreats.com" className="text-[#df6327] hover:text-[#d85a1f] transition">
                    info@seharretreats.com
                  </a>
                  <br />
                  <a href="mailto:support@seharretreats.com" className="text-[#df6327] hover:text-[#d85a1f] transition">
                    support@seharretreats.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-foreground/80">
                    <a href="tel:+919876543210" className="text-[#df6327] hover:text-[#d85a1f] transition">
                      +91 98765 43210
                    </a>
                  </p>
                  <p className="text-foreground/60 text-sm mt-1">Available 9 AM - 6 PM IST</p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Business Hours</h3>
                  <p className="text-foreground/80">
                    Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                    Saturday - Sunday: 10:00 AM - 4:00 PM IST<br />
                    Closed on public holidays
                  </p>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="inline-block px-4 py-2 bg-[#df6327] text-white rounded-full text-sm hover:bg-[#d85a1f] transition">
                      Instagram
                    </a>
                    <a href="#" className="inline-block px-4 py-2 bg-[#df6327] text-white rounded-full text-sm hover:bg-[#d85a1f] transition">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                  <p className="text-green-800 font-semibold">Thank you for your message!</p>
                  <p className="text-green-700 mt-2">We&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df6327] bg-background"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df6327] bg-background"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df6327] bg-background"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df6327] bg-background"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="general">General Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df6327] bg-background resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#df6327] text-white rounded-full font-semibold hover:bg-[#d85a1f] transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 pt-12 border-t border-foreground/10">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">What is your check-in time?</h3>
                <p className="text-foreground/80">Standard check-in time is 2:00 PM. Early check-in is available subject to availability.</p>
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Can I modify my booking?</h3>
                <p className="text-foreground/80">Yes, bookings can be modified subject to availability. Please refer to our Cancellation Policy for details.</p>
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Do you offer group bookings?</h3>
                <p className="text-foreground/80">Yes, we accommodate group bookings. Contact us for special rates and arrangements.</p>
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">What payment methods do you accept?</h3>
                <p className="text-foreground/80">We accept credit cards, debit cards, bank transfers, and other online payment methods.</p>
              </div>
            </div>
          </div>

          {/* Links to Other Pages */}
          <div className="mt-16 pt-12 border-t border-foreground/10 text-center space-y-4">
            <p className="text-foreground/80">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/terms-and-conditions"
                className="text-[#df6327] hover:text-[#d85a1f] transition font-medium"
              >
                Terms & Conditions
              </Link>
              <span className="text-foreground/30">|</span>
              <Link 
                href="/privacy-policy"
                className="text-[#df6327] hover:text-[#d85a1f] transition font-medium"
              >
                Privacy Policy
              </Link>
              <span className="text-foreground/30">|</span>
              <Link 
                href="/cancellation-policy"
                className="text-[#df6327] hover:text-[#d85a1f] transition font-medium"
              >
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
