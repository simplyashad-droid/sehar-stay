'use client'

import { useState, useEffect, type FC } from 'react'

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

interface RoomBookingModalProps {
  room: Room
  onClose: () => void
}

declare global {
  interface Window {
    Razorpay: any
  }
}

const RoomBookingModal: FC<RoomBookingModalProps> = ({ room, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    checkInDate: '',
    numberOfNights: 1,
    numberOfGuests: 1,
    name: '',
    phone: '',
    termsAccepted: false,
  })

  const roomImages = room.images || [room.image]
  const totalImages = roomImages.length

  const basePrice = room.basePrice
  const discount = basePrice * 0.15
  const pricePerNight = basePrice - discount
  const totalPrice = pricePerNight * formData.numberOfNights

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const createRazorpayOrder = async () => {
    try {
      setIsProcessing(true)
      const response = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalPrice,
          currency: 'INR',
          receipt: `booking_${room.id}_${Date.now()}`,
          notes: {
            roomName: room.roomName,
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
      alert('Please accept terms and conditions')
      return
    }

    const order = await createRazorpayOrder()
    if (!order) return

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: 'Sehar Boutique Stay',
      description: `Booking ${room.roomName} for ${formData.numberOfNights} night(s)`,
      prefill: {
        name: formData.name,
        contact: formData.phone,
      },
      handler: async (response: any) => {
        try {
          // Verify payment on backend
          const verifyResponse = await fetch('/api/razorpay/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          })

          if (verifyResponse.ok) {
            const verifyData = await verifyResponse.json()
            alert(`Payment successful! Your booking reference: ${verifyData.paymentId}`)
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
      modal: {
        ondismiss: () => {
          setIsProcessing(false)
        },
      },
      theme: {
        color: '#df6327',
      },
    }

    const razorpay = new window.Razorpay(options)
    razorpay.open()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className={`relative max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br ${room.gradient}`}>
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
          {/* Image Carousel Section */}
          <div className="w-full">
            {/* Main Carousel Image */}
            <div className="relative h-96 bg-white/80 flex items-center justify-center overflow-hidden">
              <img
                src={roomImages[currentImageIndex]}
                alt={`${room.roomName} - Image ${currentImageIndex + 1}`}
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
            </div>

            {/* Carousel Indicators */}
            {totalImages > 1 && (
              <div className="flex justify-center gap-3 py-6 px-6 bg-white/50">
                {Array.from({ length: totalImages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all ${
                      currentImageIndex === index
                        ? 'w-3 h-3 bg-[#df6327] rounded-full'
                        : 'w-2 h-2 bg-gray-400 rounded-full opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`Image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Room Details & Booking Form */}
          <div className="p-8 space-y-6">
            {/* Room Info */}
            <div>
              <p className="text-[#df6327] text-xs font-bold uppercase tracking-widest mb-2">{room.category}</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-1">{room.roomName}</h2>
              {room.roomNameMeaning && <p className="text-foreground/60 font-serif italic">{room.roomNameMeaning}</p>}
            </div>

            {/* Price Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-sm text-foreground/70">Base Price (per night)</p>
                  <p className="text-2xl font-bold text-foreground">₹{basePrice.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#df6327] font-bold">10% OFF</p>
                  <p className="text-sm text-foreground/70">-₹{discount.toLocaleString()}</p>
                </div>
              </div>
              <div className="border-t border-foreground/20 pt-3 mb-3">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-foreground">Your Price (per night)</p>
                  <p className="text-xl font-bold text-[#df6327]">₹{pricePerNight.toLocaleString()}</p>
                </div>
              </div>
              <div className="border-t border-foreground/20 pt-3">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-foreground">Total ({formData.numberOfNights} night{formData.numberOfNights !== 1 ? 's' : ''})</p>
                  <p className="text-2xl font-bold text-[#df6327]">₹{totalPrice.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handlePayment} className="space-y-4">
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
                  {Array.from({ length: room.maxGuests }, (_, i) => i + 1).map((num) => (
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

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
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
                disabled={!formData.termsAccepted || isProcessing}
                className="w-full py-3 mt-6 bg-[#df6327] text-white font-semibold rounded-full hover:bg-[#c55a1f] disabled:bg-gray-400 transition duration-300 text-lg"
              >
                {isProcessing ? 'Processing...' : 'Book your Stay'}
              </button>
            </form>

            <p className="text-xs text-foreground/60 text-center mt-4">You will be redirected to a secure payment gateway</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomBookingModal
