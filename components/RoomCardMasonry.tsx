'use client'

import RoomCard from './RoomCard'

interface Room {
  id: string
  image: string
  category: string
  description: string
  roomName: string
  roomNameMeaning?: string
}

interface RoomCardMasonryProps {
  rooms: Room[]
}

export default function RoomCardMasonry({ rooms }: RoomCardMasonryProps) {
  const masonryHeights = ['h-96', 'h-80', 'h-96', 'h-80', 'h-96', 'h-80']

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
      {rooms.map((room, index) => (
        <div
          key={room.id}
          className={`group relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl ${
            masonryHeights[index % masonryHeights.length]
          } ${index % 2 === 0 ? 'lg:col-span-1' : 'lg:col-span-1'}`}
        >
          {/* Decorative corner accent */}
          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M 10 10 L 10 40 M 10 10 L 40 10" />
            </svg>
          </div>

          {/* Card Content */}
          <RoomCard
            image={room.image}
            category={room.category}
            description={room.description}
            roomName={room.roomName}
            roomNameMeaning={room.roomNameMeaning}
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/0 via-transparent to-secondary/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-xl" />
        </div>
      ))}
    </div>
  )
}
