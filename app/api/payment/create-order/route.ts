import { NextRequest, NextResponse } from 'next/server'

// POST /api/payment/create-order
export async function POST(req: NextRequest) {
  try {
    const { amount, bikeId, userId } = await req.json()

    // In production, install razorpay package and use:
    // const Razorpay = require('razorpay')
    // const razorpay = new Razorpay({
    //   key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    //   key_secret: process.env.RAZORPAY_KEY_SECRET,
    // })
    // const order = await razorpay.orders.create({
    //   amount: amount * 100, // paise
    //   currency: 'INR',
    //   receipt: `zodito_${Date.now()}`,
    // })

    // Mock response for development
    const mockOrder = {
      id: `order_${Date.now()}`,
      amount: amount * 100,
      currency: 'INR',
      receipt: `zodito_${Date.now()}`,
      status: 'created',
    }

    return NextResponse.json({ success: true, order: mockOrder })
  } catch (error) {
    console.error('Payment order creation failed:', error)
    return NextResponse.json({ success: false, error: 'Payment failed' }, { status: 500 })
  }
}
