'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-foreground/60 text-lg">
              How we collect, use, and protect your personal information
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-foreground/80 leading-relaxed">
                Sehar Stay (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process information about you in connection with our website, booking platform, and services. Please read this policy carefully to understand our practices regarding your personal data.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">We collect information in the following ways:</p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Personal Information You Provide:</h3>
                  <ul className="list-disc list-inside space-y-1 text-foreground/80">
                    <li>Name, email address, phone number</li>
                    <li>Address and payment information</li>
                    <li>Government-issued ID information</li>
                    <li>Special requests and preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Information Collected Automatically:</h3>
                  <ul className="list-disc list-inside space-y-1 text-foreground/80">
                    <li>IP address and device type</li>
                    <li>Browser information and cookies</li>
                    <li>Pages visited and time spent</li>
                    <li>Referral source and click patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
                <li>Processing and managing your bookings and reservations</li>
                <li>Communicating with you about your stay</li>
                <li>Processing payments and managing financial transactions</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Improving our website, services, and user experience</li>
                <li>Sending promotional emails and newsletters (with your consent)</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Conducting research and analytics</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We do not sell or trade your personal information to third parties. However, we may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
                <li>Payment processors to process transactions</li>
                <li>Service providers who assist in operating our website and services</li>
                <li>Law enforcement if required by law or legal process</li>
                <li>Other parties with your explicit consent</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All sensitive data is encrypted and transmitted over secure connections. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Cookies & Tracking</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our website uses cookies to enhance user experience and gather analytics. Cookies are small files stored on your device that help us remember your preferences and analyze site usage. You can control cookie settings through your browser preferences.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We use cookies for authentication, personalization, security, and analytical purposes. Third-party analytics providers may also use cookies to track website performance.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Your Rights & Choices</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion of your data</li>
                <li>Right to opt-out of marketing communications</li>
                <li>Right to restrict how we use your information</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Data Retention</h2>
              <p className="text-foreground/80 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes. Once no longer needed, we securely delete or anonymize your information. Booking information is retained for a minimum of 7 years for regulatory compliance.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">9. Third-Party Links</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review the privacy policies of any third-party sites before providing your personal information.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">10. Policy Updates</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. Your continued use of our website constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have questions about our privacy practices, wish to exercise your rights, or want to report a privacy concern, please contact us through our Contact Us page.
              </p>
            </section>

            {/* Contact Section */}
            <section className="mt-12 p-6 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Privacy Concerns?</h3>
              <p className="text-foreground/80 mb-4">
                We take privacy seriously. If you have any concerns or requests related to your personal data, please reach out to us directly.
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
