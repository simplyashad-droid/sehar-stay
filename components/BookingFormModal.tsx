'use client'

import { useState, useEffect, type FC } from 'react'
import { X } from 'lucide-react'

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
  maxGuests: number
}

interface BookingFormModalProps {
  isOpen: boolean
  onClose: () => void
  rooms: Room[]
}

const BookingFormModal: FC<BookingFormModalProps> = ({ isOpen, onClose, rooms }) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(rooms[0]?.id || '')
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkInDate: '',
    numberOfNights: 1,
    numberOfGuests: 1,
    termsAccepted: false,
  })

  const selectedRoom = rooms.find(room => room.id === selectedRoomId) || rooms[0]
  const roomImages = selectedRoom?.images || [selectedRoom?.image]
  const totalImages = roomImages.length
  const basePrice = selectedRoom?.basePrice || 5000
  const maxGuests = selectedRoom?.maxGuests || 6
  const discount = basePrice * 0.15
  const pricePerNight = basePrice - discount
  const totalPrice = pricePerNight * formData.numberOfNights

  // Load Razorpay script
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.async = true
      document.body.appendChild(script)
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const parsedValue = name === 'numberOfNights' || name === 'numberOfGuests' ? parseInt(value) : value

    if (name === 'numberOfGuests' && parseInt(value) > maxGuests) {
      return
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : parsedValue,
    }))
  }

  const createRazorpayOrder = async () => {
    try {
      const response = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalPrice,
          currency: 'INR',
          receipt: `booking_${selectedRoom.id}_${Date.now()}`,
          notes: {
            roomName: selectedRoom.roomName,
            guestName: formData.name,
            guestPhone: formData.phone,
            checkInDate: formData.checkInDate,
            numberOfNights: formData.numberOfNights,
            numberOfGuests: formData.numberOfGuests,
          },
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.details || 'Failed to create order')
      }
      return await response.json()
    } catch (error) {
      console.error('[v0] Error creating order:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      alert(`Failed to create payment order: ${errorMessage}`)
      setIsProcessing(false)
      return null
    }
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions')
      return
    }

    if (!formData.name || !formData.phone || !formData.checkInDate) {
      alert('Please fill in all required fields')
      return
    }

    setIsProcessing(true)
    const order = await createRazorpayOrder()
    if (!order) return

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Sehar Boutique Stay',
      description: `Booking - ${selectedRoom.roomName}`,
      order_id: order.id,
      handler: async (response: any) => {
        try {
          const verifyResponse = await fetch('/api/razorpay/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          })

          const verificationResult = await verifyResponse.json()

          if (verificationResult.success) {
            alert('Payment successful! Your booking is confirmed.')
            console.log('Booking confirmed:', {
              ...formData,
              room: selectedRoom,
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
            })
            onClose()
          } else {
            alert('Payment verification failed. Please contact support.')
          }
        } catch (error) {
          console.error('Payment verification error:', error)
          alert('Payment completed but verification failed. Please contact support.')
        } finally {
          setIsProcessing(false)
        }
      },
      prefill: {
        name: formData.name,
        contact: formData.phone,
      },
      theme: {
        color: '#df6327',
      },
      modal: {
        ondismiss: () => {
          setIsProcessing(false)
        },
      },
    }

    const razorpayInstance = new (window as any).Razorpay(options)
    razorpayInstance.open()
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

            {/* Carousel */}
            {totalImages > 0 && (
              <div className="relative h-64 bg-white/80 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  src={roomImages[currentImageIndex]}
                  alt={`${selectedRoom.roomName} - Image ${currentImageIndex + 1}`}
                  className="h-full w-full object-cover"
                />

                {/* Carousel Navigation */}
                {totalImages > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex(prev => (prev - 1 + totalImages) % totalImages)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex(prev => (prev + 1) % totalImages)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Indicators */}
                {totalImages > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {Array.from({ length: totalImages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all ${
                          currentImageIndex === index
                            ? 'w-3 h-3 bg-[#df6327]'
                            : 'w-2 h-2 bg-white/60'
                        } rounded-full`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Room Selection Grid */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-4">Select a Room</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {rooms.map(room => (
                  <button
                    key={room.id}
                    onClick={() => {
                      setSelectedRoomId(room.id)
                      setCurrentImageIndex(0)
                      if (formData.numberOfGuests > room.maxGuests) {
                        setFormData(prev => ({ ...prev, numberOfGuests: 1 }))
                      }
                    }}
                    className={`relative overflow-hidden rounded-lg transition-all duration-300 group ${
                      selectedRoomId === room.id
                        ? 'ring-2 ring-[#df6327] shadow-lg scale-105'
                        : 'hover:shadow-md hover:scale-102'
                    }`}
                  >
                    <div className="relative h-32 md:h-40 overflow-hidden bg-white/80">
                      <img
                        src={room.image}
                        alt={room.roomName}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white font-semibold text-sm md:text-base truncate">{room.roomName}</p>
                      <p className="text-white/80 text-xs">₹{room.basePrice.toLocaleString()}/night</p>
                    </div>

                    {selectedRoomId === room.id && (
                      <div className="absolute top-2 right-2 bg-[#df6327] text-white rounded-full p-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-foreground/70">Base Price per night</span>
                <span className="font-semibold text-foreground">₹{basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground/70">Discount (15%)</span>
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
            <form onSubmit={handlePayment} className="space-y-4">
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

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
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
                  required
                  className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-[#df6327] bg-white/70"
                />
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Number of Guests (Max: {maxGuests})</label>
                <select
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-[#df6327] bg-white/70"
                >
                  {Array.from({ length: maxGuests }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>{num} Guest{num !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className="w-5 h-5 mt-1 rounded border-2 border-foreground/20 cursor-pointer accent-[#df6327]"
                />
                <label className="text-sm text-foreground/70">
                  I agree to the terms and conditions, cancellation policy, and privacy policy
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!formData.termsAccepted || isProcessing}
                className="w-full py-3 mt-6 bg-[#df6327] text-white font-semibold rounded-full hover:bg-[#c55a1f] disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 text-lg"
              >
                {isProcessing ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </form>

            <p className="text-xs text-foreground/60 text-center mt-4">You will be redirected to a secure payment gateway</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingFormModal
