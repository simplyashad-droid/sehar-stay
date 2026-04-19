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
  images?: string[]
  category: string
  description: string
  roomName: string
  roomNameMeaning?: string
  gradient: string
  basePrice: number
  airbnbUrl?: string
  maxGuests: number
}

const rooms: readonly Room[] = [
  {
    id: "shambala",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shambala-room-POTNbhWctm7eJXh6eYvGe3swbHS18V.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shambala-room-POTNbhWctm7eJXh6eYvGe3swbHS18V.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sambhala-2-p8fhfSurVc5R3JDLvuMindt1ojM1fx.avif",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sambhala-2-qKeL8FmFv9rTzOKyokhRoxxkU0gTrl.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sambhala-5-ddForTeyYGAN0yS1knzqtxE5YaSnfq.avif",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sambhala-3-sKXIiiBL0lwm5bObrDsLZyXD4y2nRi.webp",
    ],
    category: "SEHAR PURPLE ROOM",
    description: "LUXURY ROOM WITH ENSUITE BATHROOM AND ATTIC",
    roomName: "Shambala",
    gradient: "from-purple-200 via-purple-100 to-white",
    basePrice: 5000,
    airbnbUrl: "https://www.airbnb.co.in/rooms/1432655075166039675",
    maxGuests: 2,
  },
  {
    id: "nerika",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nerika-room-4QuiGwKJA7BKRRZmX0cZRYEJXehoZL.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nerika-room-4QuiGwKJA7BKRRZmX0cZRYEJXehoZL.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nerika-1-qsSJHtN9xLx4MU2VlgVa55vjpLIHOu.avif",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nerika-2-kPBV9Qhm2htiGKqLQb1e2ZGUkJWTt0.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nerika-3-ROaF3l2Lmx0t7QhVSqErLA6aw8mhb6.avif",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nerika-4-YqSP6xLAL1begM42Ix9ZGYUoZeGPlH.avif",
    ],
    category: "SEHAR GREEN ROOM",
    description: "LUXURY ROOM WITH BOHO INTERIORS",
    roomName: "Nerika",
    roomNameMeaning: "Heart Portal",
    gradient: "from-green-200 via-green-100 to-white",
    basePrice: 4000,
    airbnbUrl: "https://www.airbnb.co.in/rooms/1160859683250687941",
    maxGuests: 2,
  },
  {
    id: "family-hub",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/family-hub-room-csBiYxBeQzJdNqpOmadxlTGMkTGjiZ.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/family-hub-room-csBiYxBeQzJdNqpOmadxlTGMkTGjiZ.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family-2-FYVP28KVl4mHqBxm1uZSOOuhVZcFTj.avif",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family-1-GPEUdBpSn6ctY1yCBnIa3dptfVKwjh.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/family-3-9m9wI3dSUlQ8KOpnd514T1H5LXb3KS.avif",
    ],
    category: "SEHAR FAMILY STUDIO",
    description: "WHERE TOGETHERNESS IS EXPERIENCED",
    roomName: "Family Hub",
    gradient: "from-blue-200 via-blue-100 to-white",
    basePrice: 8800,
    airbnbUrl: "https://www.airbnb.co.in/rooms/1572289170324100000",
    maxGuests: 6,
  },
  {
    id: "escape",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/escape-room-8PtxdZC389QRB6PQgjkSkJU6QEvg5T.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/escape-room-8PtxdZC389QRB6PQgjkSkJU6QEvg5T.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/escape-2-qY4vp81Ny5WYlmrOZh7hNMSu91Whiw.avif",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/escape-1-Jpfa3C2yT0jnXa2ogPcE3t4MjKqGDr.avif",
    ],
    category: "SEHAR DREAMY ROOM",
    description: "LUXURY ROOM WITH GARDEN VIEW",
    roomName: "Escape",
    gradient: "from-yellow-200 via-yellow-100 to-white",
    basePrice: 4000,
    airbnbUrl: "https://www.airbnb.co.in/rooms/910499645296431133",
    maxGuests: 3,
  },
  {
    id: "nazar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nazar-room-ywMwvA5lWmq75Dd5FEwcJNsmwT2br4.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nazar-room-ywMwvA5lWmq75Dd5FEwcJNsmwT2br4.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nazar-1-Fnml0HcsNX0KRD2QhwOrqPF5KgPP4d.avif",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nazar-2-4dNTXrHmJFqA0a7y6p7hWYpGufbF4H.avif",
    ],
    category: "SEHAR STANDARD ROOM",
    description: "LUXURY ROOM WITH FOREST VIEW & ENSUITE",
    roomName: "Nazar",
    gradient: "from-amber-200 via-amber-100 to-white",
    basePrice: 1,
    airbnbUrl: "https://www.airbnb.co.in/rooms/1431977842087362144",
    maxGuests: 3,
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
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-b ${room.gradient} flex flex-col animate-on-scroll`}
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
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="w-full px-6 py-2 bg-[#df6327] text-white font-medium rounded-full hover:bg-[#c55a1f] transition duration-300 text-sm"
                    >
                      Book your Stay
                    </button>
                    <a
                      href={room.airbnbUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
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
