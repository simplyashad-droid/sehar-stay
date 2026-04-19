import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import nodemailer from 'nodemailer'

async function sendConfirmationEmail(email: string, bookingDetails: any) {
  try {
    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: 'Booking Confirmation - Sehar Stay',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #df6327;">Booking Confirmation</h2>
          <p>Thank you for your booking at Sehar Boutique Stay!</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3>Booking Details</h3>
            <p><strong>Room:</strong> ${bookingDetails.roomName}</p>
            <p><strong>Guest Name:</strong> ${bookingDetails.guestName}</p>
            <p><strong>Phone:</strong> ${bookingDetails.guestPhone}</p>
            <p><strong>Check-in Date:</strong> ${bookingDetails.checkInDate}</p>
            <p><strong>Number of Nights:</strong> ${bookingDetails.numberOfNights}</p>
            <p><strong>Number of Guests:</strong> ${bookingDetails.numberOfGuests}</p>
            <p><strong>Order ID:</strong> ${bookingDetails.orderId}</p>
            <p><strong>Payment ID:</strong> ${bookingDetails.paymentId}</p>
          </div>

          <p style="color: #666;">We look forward to welcoming you at Sehar Stay!</p>
          <p style="color: #666; font-size: 12px;">For any queries, please contact us at support@seharstay.com</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log('[v0] Confirmation email sent to:', email)
    return true
  } catch (error) {
    console.error('[v0] Error sending email:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingDetails } = await request.json()

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing payment verification data' },
        { status: 400 }
      )
    }

    const secret = process.env.RAZORPAY_KEY_SECRET || ''
    const body = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('hex')

    const isSignatureValid = expectedSignature === razorpay_signature

    if (!isSignatureValid) {
      return NextResponse.json(
        { error: 'Invalid payment signature' },
        { status: 401 }
      )
    }

    // Send confirmation email
    const emailData = {
      ...bookingDetails,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    }
    
    await sendConfirmationEmail('erah51423@gmail.com', emailData)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Payment verified successfully and confirmation email sent',
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    )
  }
}
