'use client'

import { useState, type FC } from 'react'

interface Room {
  id: string
  image: string
  category: string
  description: string
  roomName: string
  roomNameMeaning?: string
  gradient: string
  basePrice?: number
}

interface RoomBookingModalProps {
  onClose: () => void
  initialRoom?: Room
}

// Room data with pricing
const roomsData: Room[] = [
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
    id: "sacred-space",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sacred-space-room-8Ywa8p7qj3uVNG2iMCHaYjm64mz8pt.png",
    category: "SEHAR SACRED SPACE",
    description: "HEALING ROOM - BREATH & SILENCE",
    roomName: "Sacred Space",
    gradient: "from-pink-200 via-pink-100 to-white",
    basePrice: 4800,
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

const RoomBookingModal: FC<RoomBookingModalProps> = ({ onClose, initialRoom }) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoom?.id || roomsData[0].id)
  const [formData, setFormData] = useState({
    checkInDate: '',
    numberOfNights: 1,
    numberOfGuests: 1,
    name: '',
    termsAccepted: false,
  })

  const selectedRoom = roomsData.find(room => room.id === selectedRoomId) || roomsData[0]
  const basePrice = selectedRoom.basePrice || 5000
  const discount = basePrice * 0.1
  const pricePerNight = basePrice - discount
  const totalPrice = pricePerNight * formData.numberOfNights

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking data:', { ...formData, selectedRoom, totalPrice })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className={`relative max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br ${selectedRoom.gradient} my-8`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 hover:bg-black/10 rounded-full transition"
          aria-label="Close"
        >
          <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          {/* Image Section */}
          <div className="w-full h-80 bg-white/80 overflow-hidden">
            <img
              src={selectedRoom.image}
              alt={selectedRoom.roomName}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Booking Form */}
          <div className="p-8 space-y-6">
            {/* Room Info */}
            <div>
              <p className="text-[#df6327] text-xs font-bold uppercase tracking-widest mb-2">{selectedRoom.category}</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-1">{selectedRoom.roomName}</h2>
              {selectedRoom.roomNameMeaning && <p className="text-foreground/60 font-serif italic">{selectedRoom.roomNameMeaning}</p>}
            </div>

            {/* Room Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Select Room</label>
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df6327] bg-white/70"
              >
                {roomsData.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.roomName} - ₹{room.basePrice?.toLocaleString()} per night
                  </option>
                ))}
              </select>
            </div>

            {/* Price Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <p className="text-sm text-foreground/70">Base Price per night</p>
                  <p className="font-semibold text-foreground">₹{basePrice.toLocaleString()}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-foreground/70">Discount (10%)</p>
                  <p className="font-semibold text-[#df6327]">-₹{discount.toLocaleString()}</p>
                </div>
              </div>
              <div className="border-t border-foreground/20 pt-3 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <p className="font-semibold text-foreground">Price per night</p>
                  <p className="text-xl font-bold text-[#df6327]">₹{pricePerNight.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-foreground">Total ({formData.numberOfNights} night{formData.numberOfNights !== 1 ? 's' : ''})</p>
                  <p className="text-2xl font-bold text-[#df6327]">₹{totalPrice.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Check-in Date */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Check-in Date</label>
                <input
                  type="date"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df6327] bg-white/70"
                />
              </div>

              {/* Number of Nights */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Number of Nights</label>
                <input
                  type="number"
                  name="numberOfNights"
                  value={formData.numberOfNights}
                  onChange={handleInputChange}
                  min="1"
                  max="30"
                  required
                  className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df6327] bg-white/70"
                />
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Number of Guests</label>
                <select
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df6327] bg-white/70"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df6327] bg-white/70"
                />
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  id="terms"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 mt-0.5 accent-[#df6327] cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs text-foreground/70 cursor-pointer">
                  I agree to the terms and conditions, cancellation policy, and privacy policy
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!formData.termsAccepted}
                className="w-full py-3 mt-6 bg-[#df6327] text-white font-semibold rounded-full hover:bg-[#c55a1f] disabled:bg-gray-400 transition duration-300 text-lg"
              >
                Start Your Journey
              </button>
            </form>

            <p className="text-xs text-foreground/60 text-center mt-4">Get a flat 10% discount when you book with us</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomBookingModal
