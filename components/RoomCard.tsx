interface RoomCardProps {
  id: string
  image: string
  category: string
  description: string
  roomName: string
  roomNameMeaning?: string
}

// Color mapping for each room - inspired by bohemian aesthetic
const roomColors: Record<string, { light: string; accent: string }> = {
  shambala: { light: '#f3e6f5', accent: '#e6cceb' }, // Soft purple
  nerika: { light: '#f0f4e6', accent: '#e0ead3' }, // Soft sage green
  "family-hub": { light: '#fef9e6', accent: '#fef0cc' }, // Soft golden yellow
  escape: { light: '#e6f3f8', accent: '#cce6f0' }, // Soft sky blue
  "sacred-space": { light: '#f5e6f5', accent: '#ead3e6' }, // Soft lavender
  nazar: { light: '#f0e6f9', accent: '#e0ccf0' }, // Soft purple
}

export default function RoomCard({ id, image, category, description, roomName, roomNameMeaning }: RoomCardProps) {
  const colors = roomColors[id] || { light: '#f9f9f9', accent: '#f0f0f0' }
  
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: colors.light }}>
      {/* Image - Full width edge-to-edge, no margin/padding */}
      <img src={image} alt={roomName} className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-300 block" />

      {/* Content */}
      <div className="p-6 flex flex-col items-center text-center">
        {/* Category */}
        <div className="inline-block px-3 py-1 rounded-full mb-3" style={{ backgroundColor: 'rgba(223, 99, 39, 0.15)' }}>
          <p className="text-xs uppercase tracking-widest font-sans font-semibold" style={{ color: '#df6327' }}>{category}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/70 font-sans mb-4 leading-relaxed">{description}</p>

        {/* Room Name */}
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">{roomName}</h3>

        {/* Room Meaning */}
        {roomNameMeaning && (
          <p className="text-sm text-foreground/60 font-sans mb-6">{roomNameMeaning}</p>
        )}

        {/* Buttons Container */}
        <div className="flex flex-col gap-2 items-center w-full">
          {/* Primary Button */}
          <button className="w-full text-white font-sans font-semibold py-3 rounded-full transition-all duration-200 hover:opacity-90" 
            style={{ backgroundColor: '#df6327' }}>
            Book Here
          </button>
          
          {/* Secondary Link - Minimal text hyperlink */}
          <button className="font-sans text-sm font-medium transition-all duration-200 hover:opacity-70 py-2" 
            style={{ color: '#df6327', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
            Book an Airbnb
          </button>
        </div>
      </div>
    </div>
  )
}
