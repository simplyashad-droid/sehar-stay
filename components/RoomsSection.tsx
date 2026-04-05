import type React from 'react'

interface Room {
  id: string
  image: string
  category: string
  description: string
  roomName: string
  roomNameMeaning?: string
}

const rooms: Room[] = [
  {
    id: "shambala",
    image: "/sehar-stay/shambala-room.png",
    category: "SEHAR PURPLE ROOM",
    description: "LUXURY ROOM WITH ENSUITE BATHROOM AND ATTIC",
    roomName: "Shambala",
  },
  {
    id: "nerika",
    image: "/sehar-stay/nerika-room.png",
    category: "SEHAR GREEN ROOM",
    description: "LUXURY ROOM WITH BOHO INTERIORS",
    roomName: "Nerika",
    roomNameMeaning: "Heart Portal",
  },
  {
    id: "family-hub",
    image: "/sehar-stay/family-hub-room.png",
    category: "SEHAR FAMILY STUDIO",
    description: "WHERE TOGETHERNESS IS EXPERIENCED",
    roomName: "Family Hub",
  },
  {
    id: "escape",
    image: "/sehar-stay/escape-room.png",
    category: "SEHAR DREAMY ROOM",
    description: "LUXURY ROOM WITH GARDEN VIEW",
    roomName: "Escape",
  },
  {
    id: "sacred-space",
    image: "/sehar-stay/sacred-space-room.png",
    category: "SEHAR SACRED SPACE",
    description: "HEALING ROOM - BREATH & SILENCE",
    roomName: "Sacred Space",
  },
  {
    id: "nazar",
    image: "/sehar-stay/nazar-room.png",
    category: "SEHAR STANDARD ROOM",
    description: "LUXURY ROOM WITH FOREST VIEW & ENSUITE",
    roomName: "Nazar",
  },
]

export default function RoomsSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Where Luxury meets Creativity</h2>
          <p className="text-foreground/70 font-sans text-lg md:text-xl">Discover our collection of thoughtfully designed rooms</p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Room Image */}
              <img
                src={room.image}
                alt={room.roomName}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Room Info */}
              <div className="p-6 bg-white">
                <p className="text-primary text-sm font-sans font-semibold mb-2 uppercase tracking-wide">{room.category}</p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{room.roomName}</h3>
                {room.roomNameMeaning && <p className="text-foreground/60 font-serif italic text-sm mb-3">{room.roomNameMeaning}</p>}
                <p className="text-foreground/70 font-sans text-sm">{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
