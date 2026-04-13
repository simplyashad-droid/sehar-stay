'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function CancellationPolicy() {
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
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Title Section */}
          <div className="mb-12 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cancellation Policy
            </h1>
            <p className="text-foreground/60 text-lg">
              Understanding our cancellation, modification, and refund policies
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Cancellation Timeline</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our cancellation policy is structured based on how much advance notice you provide. The following timelines and refund amounts apply:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <h3 className="font-semibold text-green-900 mb-1">More than 30 days before arrival:</h3>
                  <p className="text-green-800">100% refund (except non-refundable booking fees)</p>
                </div>
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <h3 className="font-semibold text-yellow-900 mb-1">15-30 days before arrival:</h3>
                  <p className="text-yellow-800">50% refund of room charges</p>
                </div>
                <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
                  <h3 className="font-semibold text-orange-900 mb-1">7-14 days before arrival:</h3>
                  <p className="text-orange-800">25% refund of room charges</p>
                </div>
                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                  <h3 className="font-semibold text-red-900 mb-1">Less than 7 days before arrival:</h3>
                  <p className="text-red-800">No refund (full charge applies)</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. How to Cancel</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To cancel your booking, please follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-foreground/80 leading-relaxed">
                <li>Log into your account on our website</li>
                <li>Navigate to &quot;My Bookings&quot; and select the reservation you wish to cancel</li>
                <li>Click &quot;Cancel Booking&quot; and follow the confirmation steps</li>
                <li>You will receive a cancellation confirmation email immediately</li>
              </ol>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Alternatively, you can contact our customer service team directly via email or phone. All cancellation requests must be received by 11:59 PM IST on the specified cancellation date to qualify for refund processing.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. No-Show Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you do not arrive at the property on your check-in date without prior communication, your booking will be treated as a no-show. The full booking amount will be charged, and no refund will be issued. If you anticipate a delay, please contact us immediately to adjust your check-in time.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Modifications to Your Booking</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you wish to modify your booking (change dates, number of rooms, etc.), please log into your account or contact us directly. Modifications are subject to availability and the same cancellation policy applies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
                <li>If modifying to a later date, any price difference will be charged</li>
                <li>If modifying to an earlier date, refund policies apply accordingly</li>
                <li>Some modifications may not be possible for bookings within 7 days</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Special Events & Group Bookings</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                For group bookings, special event packages, or bulk reservations, different cancellation policies may apply. Please contact our team directly to discuss custom terms for your specific needs.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Group cancellations typically require more advance notice, and separate terms regarding deposit refunds will be agreed upon in writing.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Refund Processing</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Once a cancellation is confirmed, refunds are processed according to the following timeline:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
                <li>Credit card refunds: 5-7 business days</li>
                <li>Debit card refunds: 7-10 business days</li>
                <li>Bank transfers: 5-10 business days depending on your bank</li>
                <li>Non-refundable fees and taxes are not returned</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Please ensure your payment method details are correct to avoid delays in refund processing. If you do not receive your refund within the specified timeline, please contact us immediately.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Non-Refundable Bookings</h2>
              <p className="text-foreground/80 leading-relaxed">
                Certain promotional rates or packages may be marked as &quot;Non-Refundable.&quot; These bookings cannot be cancelled for refunds but may be eligible for modification depending on availability. Non-refundable bookings are typically offered at a discounted rate and are clearly labeled during the booking process.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Force Majeure</h2>
              <p className="text-foreground/80 leading-relaxed">
                In the event of unforeseeable circumstances beyond our control (natural disasters, government lockdowns, pandemics, etc.), we reserve the right to cancel or postpone bookings. In such cases, we will offer alternative dates or a full refund of all charges.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">9. Our Cancellation Rights</h2>
              <p className="text-foreground/80 leading-relaxed">
                Sehar Stay reserves the right to cancel any booking and provide a full refund if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
                <li>The guest violates our Terms & Conditions or House Rules</li>
                <li>Guest conduct poses a threat to staff or other guests</li>
                <li>The property becomes unavailable due to unforeseen circumstances</li>
                <li>Payment processing fails or fraudulent activity is detected</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">10. Dispute Resolution</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have a dispute regarding a cancellation or refund, please contact us immediately with supporting documentation. We will investigate and attempt to resolve the matter within 10 business days.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                If the issue cannot be resolved to your satisfaction, you may pursue the matter through your credit card company or payment provider, or seek resolution through applicable consumer protection laws.
              </p>
            </section>

            {/* Contact Section */}
            <section className="mt-12 p-6 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Need Help with Your Booking?</h3>
              <p className="text-foreground/80 mb-4">
                If you have questions about cancellations or need to make changes to your reservation, our team is here to help.
              </p>
              <Link 
                href="/contact-us"
                className="inline-block px-6 py-2 bg-[#df6327] text-white rounded-full font-medium hover:bg-[#d85a1f] transition"
              >
                Contact Us
              </Link>
            </section>
          </div>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-foreground/10 text-center text-foreground/60 text-sm">
            <p>Last updated: April 2026</p>
          </div>
        </div>
      </main>
    </div>
  )
}
