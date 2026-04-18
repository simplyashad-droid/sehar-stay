import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json()

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

    return NextResponse.json(
      { 
        success: true, 
        message: 'Payment verified successfully',
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
