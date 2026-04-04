import RoomCard from "./RoomCard"

const rooms = [
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
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </section>
  )
}
