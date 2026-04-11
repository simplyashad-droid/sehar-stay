'use client'

import { useState, type FC } from 'react'
import { X } from 'lucide-react'

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

interface BookingFormModalProps {
  isOpen: boolean
  onClose: () => void
  rooms: Room[]
}

const BookingFormModal: FC<BookingFormModalProps> = ({ isOpen, onClose, rooms }) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(rooms[0]?.id || '')
  const [formData, setFormData] = useState({
    name: '',
    checkInDate: '',
    numberOfNights: 1,
    numberOfGuests: 1,
  })

  const selectedRoom = rooms.find(room => room.id === selectedRoomId) || rooms[0]
  const basePrice = selectedRoom?.basePrice || 5000
  const discount = basePrice * 0.1
  const pricePerNight = basePrice - discount
  const totalPrice = pricePerNight * formData.numberOfNights

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'numberOfNights' || name === 'numberOfGuests' ? parseInt(value) : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Booking submitted:', { ...formData, room: selectedRoom, totalPrice })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className={`relative max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br ${selectedRoom?.gradient || 'from-orange-100 to-white'} my-8`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 hover:bg-black/10 rounded-full transition"
          aria-label="Close booking form"
        >
          <X size={24} className="text-foreground" />
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          {/* Room Image */}
          <div className="w-full h-80 bg-white/80 overflow-hidden">
            <img
              src={selectedRoom?.image}
              alt={selectedRoom?.roomName}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Form Content */}
          <div className="p-8 space-y-6">
            {/* Room Info */}
            <div>
              <p className="text-[#df6327] text-xs font-bold uppercase tracking-widest mb-2">
                {selectedRoom?.category}
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-1">
                {selectedRoom?.roomName}
              </h2>
              {selectedRoom?.roomNameMeaning && (
                <p className="text-foreground/60 font-serif italic">{selectedRoom.roomNameMeaning}</p>
              )}
            </div>

            {/* Room Selection Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Select a Room</label>
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-[#df6327] bg-white/70 font-medium"
              >
                {rooms.map(room => (
                  <option key={room.id} value={room.id}>
                    {room.roomName} - ₹{room.basePrice.toLocaleString()} per night
                  </option>
                ))}
              </select>
            </div>

            {/* Price Breakdown */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-foreground/70">Base Price per night</span>
                <span className="font-semibold text-foreground">₹{basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground/70">Discount (10%)</span>
                <span className="font-semibold text-[#df6327]">-₹{Math.round(discount).toLocaleString()}</span>
              </div>
              <div className="border-t border-foreground/20 pt-3">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-foreground">Price per night</span>
                  <span className="text-lg font-bold text-[#df6327]">₹{Math.round(pricePerNight).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Total ({formData.numberOfNights} night{formData.numberOfNights !== 1 ? 's' : ''})</span>
                  <span className="text-2xl font-bold text-[#df6327]">₹{Math.round(totalPrice).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-[#df6327] bg-white/70"
                />
              </div>

              {/* Check-in Date */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Check-in Date</label>
                <input
                  type="date"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-[#df6327] bg-white/70"
                />
              </div>

              {/* Number of Nights */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Number of Nights</label>
                <input
                  type="number"
                  name="numberOfNights"
                  value={formData.numberOfNights}
                  onChange={handleInputChange}
                  min="1"
                  max="30"
                  required
                  className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-[#df6327] bg-white/70"
                />
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Number of Guests</label>
                <select
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-[#df6327] bg-white/70 font-medium"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 mt-6 bg-[#df6327] text-white font-semibold rounded-full hover:bg-[#c55a1f] transition duration-300 text-lg shadow-lg"
              >
                Book Your Stay
              </button>
            </form>

            <p className="text-xs text-foreground/60 text-center">10% discount already applied to your booking</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingFormModal
