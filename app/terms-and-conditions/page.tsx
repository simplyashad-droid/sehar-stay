'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function TermsAndConditions() {
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
              Terms & Conditions
            </h1>
            <p className="text-foreground/60 text-lg">
              Please read these terms carefully before booking with us
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Booking & Reservation</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                All bookings at Sehar Stay are subject to availability and confirmation. Once you submit a booking request, you will receive a confirmation email within 24 hours. A valid payment method is required to secure your reservation. Bookings are considered confirmed only after full payment or deposit as specified.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Guests must provide accurate personal and contact information. Any discrepancies may result in booking cancellation without refund. We reserve the right to decline bookings that do not meet our safety or conduct standards.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Check-In & Check-Out</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Standard check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in or late check-out is available subject to availability and may incur additional charges. Guests must vacate their rooms by the specified check-out time.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                A valid government-issued ID is required at check-in. We reserve the right to refuse entry if the guest cannot provide proper identification or if there are security concerns.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. House Rules & Guest Conduct</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Guests are expected to maintain respect for other guests and staff. Excessive noise, disruptive behavior, or any illegal activities are strictly prohibited and may result in immediate eviction without refund.
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
                <li>No smoking inside rooms or common areas (designated smoking areas available)</li>
                <li>No outside guests without prior approval from management</li>
                <li>No pets without explicit written permission</li>
                <li>No unauthorized events or gatherings</li>
                <li>Guests are responsible for any damage caused to the property</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Pricing & Payment</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                All prices are quoted in Indian Rupees and are subject to change without notice. The final bill includes room charges, applicable taxes (GST), and any services used. Payment can be made via credit card, debit card, bank transfer, or other methods as specified at checkout.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Additional charges apply for extra amenities, services, or late check-out. A deposit of 50% is required to confirm booking, with the remaining balance due at check-in (unless other arrangements are made).
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Liability & Damages</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Sehar Stay is not responsible for loss, theft, or damage to personal belongings. Guests are advised to use in-room safes for valuables. In case of damage to the property caused by the guest, the cost of repairs will be charged to the guest&apos;s account.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The property is not liable for injuries or accidents on the premises unless caused by negligence of the management or staff. Guests participate in all activities at their own risk.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Privacy & Data Protection</h2>
              <p className="text-foreground/80 leading-relaxed">
                Your personal information is collected and used in accordance with our Privacy Policy. We do not share guest information with third parties without consent, except as required by law. For detailed information, please refer to our Privacy Policy page.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Modification & Cancellation Policy</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                For full details on cancellation, modification, and refund policies, please refer to our Cancellation Policy page. Different terms may apply depending on the booking type and time of cancellation.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Right to Refuse Service</h2>
              <p className="text-foreground/80 leading-relaxed">
                Sehar Stay reserves the right to refuse service or deny entry to guests who violate these terms, engage in unlawful behavior, or pose a threat to the safety and comfort of other guests and staff. In such cases, no refund will be provided.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">9. Dispute Resolution</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Any disputes arising from your stay will be governed by the laws of India. Guests agree to resolve disputes through amicable discussion and mediation before pursuing legal action. The jurisdiction for any legal proceedings shall be the courts of Himachal Pradesh.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">10. Changes to Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                Sehar Stay reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to the website. Continued use of the booking system constitutes acceptance of updated terms.
              </p>
            </section>

            {/* Contact Section */}
            <section className="mt-12 p-6 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Questions About Our Terms?</h3>
              <p className="text-foreground/80 mb-4">
                If you have any questions or concerns about our Terms & Conditions, please don&apos;t hesitate to contact us.
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
