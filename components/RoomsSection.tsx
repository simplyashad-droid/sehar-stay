'use client'

// v3 - cache bust
import type React from 'react'
import { useState, type FC } from 'react'
import Image from 'next/image'
import RoomBookingModal from './RoomBookingModal'
import SharedSpacesGallery from './SharedSpacesGallery'

interface Room {
  id: string
  image: string
  category: string
  description: string
  roomName: string
  roomNameMeaning?: string
  gradient: string
  basePrice: number
}

const rooms: readonly Room[] = [
  {
    id: "shambala",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shambala-room-POTNbhWctm7eJXh6eYvGe3swbHS18V.png",
    category: "SEHAR PURPLE ROOM",
    description: "LUXURY ROOM WITH ENSUITE BATHROOM AND ATTIC",
    roomName: "Shambala",
    gradient: "from-purple-200 via-purple-100 to-white",
    basePrice: 5000,
  },
  {
    id: "nerika",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nerika-room-4QuiGwKJA7BKRRZmX0cZRYEJXehoZL.png",
    category: "SEHAR GREEN ROOM",
    description: "LUXURY ROOM WITH BOHO INTERIORS",
    roomName: "Nerika",
    roomNameMeaning: "Heart Portal",
    gradient: "from-green-200 via-green-100 to-white",
    basePrice: 4500,
  },
  {
    id: "family-hub",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/family-hub-room-csBiYxBeQzJdNqpOmadxlTGMkTGjiZ.png",
    category: "SEHAR FAMILY STUDIO",
    description: "WHERE TOGETHERNESS IS EXPERIENCED",
    roomName: "Family Hub",
    gradient: "from-blue-200 via-blue-100 to-white",
    basePrice: 3812,
  },
  {
    id: "escape",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/escape-room-8PtxdZC389QRB6PQgjkSkJU6QEvg5T.png",
    category: "SEHAR DREAMY ROOM",
    description: "LUXURY ROOM WITH GARDEN VIEW",
    roomName: "Escape",
    gradient: "from-yellow-200 via-yellow-100 to-white",
    basePrice: 4200,
  },
  {
    id: "nazar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nazar-room-ywMwvA5lWmq75Dd5FEwcJNsmwT2br4.png",
    category: "SEHAR STANDARD ROOM",
    description: "LUXURY ROOM WITH FOREST VIEW & ENSUITE",
    roomName: "Nazar",
    gradient: "from-amber-200 via-amber-100 to-white",
    basePrice: 3500,
  },
]

const RoomsSection: FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

  return (
    <>
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-background to-[#df6327]/5">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 animate-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Where Luxury meets Creativity</h2>
            <p className="text-foreground/70 font-sans text-lg md:text-xl">Discover our collection of thoughtfully curated rooms</p>
          </div>

          {/* Rooms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className={`cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-b ${room.gradient} flex flex-col animate-on-scroll`}
              >
                {/* Room Image - Full width, edge to edge - Lazy loaded with Next.js Image optimization */}
                <div className="w-full h-64 overflow-hidden bg-gray-200">
                  <img
                    src={room.image}
                    alt={room.roomName}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage loading...%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>

                {/* Room Info */}
                <div className="px-6 py-6 space-y-4 flex-grow flex flex-col text-center">
                  <div>
                    <p className="text-[#df6327] text-xs font-sans font-bold mb-2 uppercase tracking-widest">{room.category}</p>
                    <h3 className="font-serif text-3xl font-bold text-foreground">{room.roomName}</h3>
                    {room.roomNameMeaning && <p className="text-foreground/60 font-serif italic text-sm">{room.roomNameMeaning}</p>}
                  </div>

                  {/* Discount Message */}
                  <p className="text-xs text-[#df6327] font-medium">Get flat 10% off if you book with us</p>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-2">
                    <button className="w-full px-6 py-2 bg-[#df6327] text-white font-medium rounded-full hover:bg-[#c55a1f] transition duration-300 text-sm">
                      Book your Stay
                    </button>
                    <a
                      href="#"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 text-xs font-medium text-foreground/60 hover:text-foreground transition"
                    >
                      <span>Book on Airbnb</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Spaces Gallery */}
      <SharedSpacesGallery />

      {/* Room Booking Modal */}
      {selectedRoom && (
        <RoomBookingModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </>
  )
}

export default RoomsSection
