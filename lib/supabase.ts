import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Bike = {
  id: number
  name: string
  type: string
  price_per_hour: number
  status: 'available' | 'rented' | 'maintenance'
  station_id: number
  fuel_type: string
  cc: number
  rating: number
  image_url?: string
}

export type Booking = {
  id: string
  user_id: string
  bike_id: number
  station_id: number
  start_time: string
  end_time: string
  total_amount: number
  status: 'pending' | 'active' | 'completed' | 'cancelled'
  created_at: string
}

export type Station = {
  id: number
  name: string
  address: string
  lat: number
  lng: number
  city: string
  available_count: number
}

export type User = {
  id: string
  email: string
  full_name: string
  phone?: string
  avatar_url?: string
  created_at: string
}
