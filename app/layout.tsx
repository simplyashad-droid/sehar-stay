import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Sehar Stay - Himalayan Cottage Retreat',
  description: 'Experience luxury and creativity at Sehar Stay. A boutique himalayan cottage with thoughtfully designed rooms and sacred experiences.',
  keywords: 'himalayan cottage, luxury retreat, boutique stay, gallery, experiences',
  authors: [{ name: 'Sehar Stays' }],
  openGraph: {
    title: 'Sehar Stay - Himalayan Cottage Retreat',
    description: 'Experience luxury and creativity at Sehar Stay.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#df6327',
  colorScheme: 'light',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
