import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'

export async function POST(request: NextRequest) {
  try {
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
    const keySecret = process.env.RAZORPAY_KEY_SECRET

    console.log('[v0] Creating Razorpay instance with keyId:', keyId ? 'present' : 'MISSING')
    console.log('[v0] Secret key present:', keySecret ? 'yes' : 'MISSING')

    if (!keyId || !keySecret) {
      console.error('[v0] Missing Razorpay credentials')
      return NextResponse.json(
        { error: 'Razorpay credentials not configured' },
        { status: 500 }
      )
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    })

    const { amount, currency, receipt, notes } = await request.json()

    console.log('[v0] Received order request:', { amount, currency, receipt })

    if (!amount || !currency) {
      return NextResponse.json(
        { error: 'Amount and currency are required' },
        { status: 400 }
      )
    }

    const options = {
      amount: Math.round(amount * 100),
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      notes: notes || {},
    }

    console.log('[v0] Creating order with options:', options)

    const order = await razorpay.orders.create(options)

    console.log('[v0] Order created successfully:', order.id)

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('[v0] Razorpay order creation error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Failed to create order', details: errorMessage },
      { status: 500 }
    )
  }
}
