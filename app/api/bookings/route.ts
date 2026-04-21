import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// POST /api/bookings — create a new booking
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { userId, bikeId, stationId, startTime, endTime, totalHours, totalAmount } = body

    const gst       = Math.round(totalAmount * 0.18)
    const insurance = 30
    const grandTotal = totalAmount + gst + insurance

    const { data, error } = await supabase
      .from('bookings')
      .insert({
        user_id:      userId,
        bike_id:      bikeId,
        station_id:   stationId,
        start_time:   startTime,
        end_time:     endTime,
        total_hours:  totalHours,
        total_amount: grandTotal,
        status:       'pending',
      })
      .select()
      .single()

    if (error) throw error

    // Mark bike as rented
    await supabase.from('bikes').update({ status: 'rented' }).eq('id', bikeId)

    return NextResponse.json({ success: true, booking: data })
  } catch (error) {
    console.error('Booking creation failed:', error)
    return NextResponse.json({ success: false, error: 'Booking failed' }, { status: 500 })
  }
}

// GET /api/bookings?userId=xxx — get user bookings
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('userId')
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })

  const { data, error } = await supabase
    .from('bookings')
    .select('*, bikes(*), stations(*)')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ bookings: data })
}
