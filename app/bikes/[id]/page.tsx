'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, MapPin, Shield, Clock, Zap, ChevronLeft, Check, ArrowRight } from 'lucide-react'

const BIKES_DATA: Record<string, any> = {
  '1': { name: 'Honda Activa 6G', type: 'Scooter', price: 49, rating: 4.8, reviews: 2840, cc: 110, fuel: 'Petrol', mileage: '60 km/L', weight: '107 kg', color: 'Pearl Sparkling White', tag: 'Most Popular', tagColor: '#f97316', emoji: '🛵', desc: 'The undisputed king of Indian scooters. The Activa 6G offers unmatched reliability, excellent fuel efficiency, and a comfortable ride — perfect for navigating Hyderabad\'s busy streets.' },
  '2': { name: 'Royal Enfield Classic 350', type: 'Cruiser', price: 89, rating: 4.9, reviews: 1620, cc: 350, fuel: 'Petrol', mileage: '35 km/L', weight: '195 kg', color: 'Halcyon Black', tag: 'Premium', tagColor: '#7c3aed', emoji: '🏍️', desc: 'A legend on two wheels. The Classic 350 blends timeless design with modern engineering for a soul-stirring riding experience across the Deccan plateau.' },
  '3': { name: 'Ather 450X', type: 'Electric', price: 65, rating: 4.7, reviews: 980, cc: 0, fuel: 'Electric', mileage: '85 km/charge', weight: '108 kg', color: 'Space Grey', tag: 'Eco Ride', tagColor: '#059669', emoji: '⚡', desc: 'Hyderabad\'s favourite electric scooter. The Ather 450X delivers thrilling performance with zero emissions — the future of urban mobility, available today.' },
}

const STATIONS = ['Hitech City Metro', 'Banjara Hills Rd 12', 'Jubilee Hills', 'Madhapur Junction', 'Gachibowli Stadium', 'Kondapur Signal']

export default function BikeDetailPage({ params }: { params: { id: string } }) {
  const bike = BIKES_DATA[params.id] || BIKES_DATA['1']
  const [station,   setStation]   = useState(STATIONS[0])
  const [startDate, setStartDate] = useState('')
  const [endDate,   setEndDate]   = useState('')
  const [hours,     setHours]     = useState(4)
  const [booked,    setBooked]    = useState(false)

  const total     = bike.price * hours
  const gst       = Math.round(total * 0.18)
  const insurance = 30
  const grand     = total + gst + insurance

  const handleBook = () => {
    if (!startDate) return alert('Please select a start date')
    setBooked(true)
  }

  if (booked) {
    return (
      <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <div style={{ width: 80, height: 80, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Check size={36} color="#16a34a" strokeWidth={3} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: 'var(--text)', marginBottom: 12, letterSpacing: '-1px' }}>Booking confirmed!</h2>
          <p style={{ fontSize: 15, color: 'var(--text-2)', marginBottom: 8 }}>Your {bike.name} is reserved at {station}.</p>
          <p style={{ fontSize: 15, color: 'var(--text-2)', marginBottom: 32 }}>Total charged: <strong style={{ color: '#f97316' }}>₹{grand}</strong></p>
          <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 16, padding: 20, marginBottom: 28, textAlign: 'left' }}>
            {[['Booking ID', '#ZR' + Math.floor(Math.random() * 90000 + 10000)], ['Bike', bike.name], ['Station', station], ['Duration', `${hours} hrs`], ['Amount paid', `₹${grand}`]].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: 13, color: 'var(--text-2)' }}>{k}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{v}</span>
              </div>
            ))}
          </div>
          <Link href="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#f97316', color: '#fff', padding: '13px 28px', borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
            View my rides <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>

        {/* Back */}
        <Link href="/bikes" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--text-2)', textDecoration: 'none', marginBottom: 24 }}
          onMouseEnter={e => (e.currentTarget.style.color = '#f97316')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
        >
          <ChevronLeft size={16} /> Back to bikes
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 40, alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-2">

          {/* Left: Bike info */}
          <div>
            {/* Hero visual */}
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 20, height: 280, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', width: 300, height: 300, background: '#f97316', borderRadius: '50%', opacity: 0.05, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
              <span style={{ fontSize: 120, filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.1))' }}>{bike.emoji}</span>
              <div style={{ position: 'absolute', top: 16, left: 16, background: bike.tagColor + '22', color: bike.tagColor, border: `1px solid ${bike.tagColor}44`, borderRadius: 99, padding: '4px 12px', fontSize: 12, fontWeight: 700 }}>{bike.tag}</div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div>
                  <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px', marginBottom: 4 }}>{bike.name}</h1>
                  <p style={{ fontSize: 14, color: 'var(--text-3)' }}>{bike.type} {bike.cc > 0 ? `· ${bike.cc}cc` : '· Electric'} · {bike.color}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: '#f97316' }}>₹{bike.price}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-3)' }}>per hour</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 3 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#f97316" color="#f97316" />)}
                </div>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{bike.rating}</span>
                <span style={{ fontSize: 13, color: 'var(--text-3)' }}>({bike.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>

            <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 28 }}>{bike.desc}</p>

            {/* Specs grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 28 }}>
              {[
                { label: 'Engine', value: bike.cc > 0 ? `${bike.cc}cc` : 'Electric motor' },
                { label: 'Fuel type', value: bike.fuel },
                { label: 'Mileage', value: bike.mileage },
                { label: 'Kerb weight', value: bike.weight },
              ].map(({ label, value }) => (
                <div key={label} style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 16px' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{label}</p>
                  <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>{value}</p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {[
                { icon: Shield, text: 'Fully insured' },
                { icon: Clock,  text: 'Free cancellation' },
                { icon: Zap,    text: 'Instant booking' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '8px 12px' }}>
                  <Icon size={14} color="#16a34a" />
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#166534' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Booking panel */}
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 20, padding: 24, position: 'sticky', top: 80 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 20 }}>Book this bike</p>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Pick-up station</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={14} color="#f97316" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                <select value={station} onChange={e => setStation(e.target.value)} style={{
                  width: '100%', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 10,
                  padding: '10px 10px 10px 30px', fontSize: 14, color: 'var(--text)', outline: 'none', cursor: 'pointer',
                }}>
                  {STATIONS.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
              {[{ label: 'Start date', value: startDate, setter: setStartDate }, { label: 'End date', value: endDate, setter: setEndDate }].map(({ label, value, setter }) => (
                <div key={label}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{label}</label>
                  <input type="date" value={value} onChange={e => setter(e.target.value)} style={{ width: '100%', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px', fontSize: 13, color: 'var(--text)', outline: 'none' }} />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <label style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Duration</label>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#f97316' }}>{hours} hrs</span>
              </div>
              <input type="range" min={1} max={24} step={1} value={hours} onChange={e => setHours(Number(e.target.value))} style={{ width: '100%', accentColor: '#f97316' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <span style={{ fontSize: 11, color: 'var(--text-3)' }}>1 hr</span>
                <span style={{ fontSize: 11, color: 'var(--text-3)' }}>24 hrs</span>
              </div>
            </div>

            {/* Price breakdown */}
            <div style={{ background: 'var(--bg-2)', borderRadius: 12, padding: 16, marginBottom: 16 }}>
              {[
                [`Rent (₹${bike.price} × ${hours} hrs)`, `₹${total}`],
                ['GST (18%)', `₹${gst}`],
                ['Insurance', `₹${insurance}`],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: 'var(--text-2)' }}>{k}</span>
                  <span style={{ fontSize: 13, color: 'var(--text)' }}>{v}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Total</span>
                <span style={{ fontSize: 18, fontWeight: 800, color: '#f97316', fontFamily: 'var(--font-display)' }}>₹{grand}</span>
              </div>
            </div>

            <button onClick={handleBook} style={{
              width: '100%', background: '#f97316', color: '#fff',
              border: 'none', borderRadius: 12, padding: '14px',
              fontSize: 15, fontWeight: 700, cursor: 'pointer', transition: 'background 0.2s',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#ea6b0d')}
            onMouseLeave={e => (e.currentTarget.style.background = '#f97316')}
            >
              Confirm & pay ₹{grand} <ArrowRight size={16} />
            </button>

            <p style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center', marginTop: 12 }}>
              Secured by Razorpay · No hidden charges
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
