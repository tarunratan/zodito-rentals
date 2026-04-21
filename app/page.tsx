'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Star, Shield, Zap, Clock, Users, ChevronRight, Sparkles } from 'lucide-react'

const BIKES = [
  { id: 1, name: 'Honda Activa 6G', type: 'Scooter', price: 49, rating: 4.8, reviews: 2840, tag: 'Most Popular', tagColor: '#f97316', available: 24 },
  { id: 2, name: 'Royal Enfield Classic 350', type: 'Cruiser', price: 89, rating: 4.9, reviews: 1620, tag: 'Premium', tagColor: '#7c3aed', available: 8 },
  { id: 3, name: 'Ather 450X', type: 'Electric', price: 65, rating: 4.7, reviews: 980, tag: 'Eco Ride', tagColor: '#059669', available: 16 },
  { id: 4, name: 'TVS Jupiter', type: 'Scooter', price: 45, rating: 4.6, reviews: 1440, tag: 'Budget Pick', tagColor: '#0891b2', available: 31 },
  { id: 5, name: 'Bajaj Pulsar NS200', type: 'Sport', price: 79, rating: 4.8, reviews: 760, tag: 'Sporty', tagColor: '#dc2626', available: 12 },
  { id: 6, name: 'Hero Splendor Plus', type: 'Commuter', price: 35, rating: 4.5, reviews: 3200, tag: 'Value', tagColor: '#ca8a04', available: 45 },
]

const STATIONS = [
  'Hitech City Metro', 'Banjara Hills Rd 12', 'Jubilee Hills Check Post',
  'Madhapur Junction', 'Kondapur Signal', 'Gachibowli Stadium',
  'JNTU Metro', 'Ameerpet Cross', 'Kukatpally Y-Junction',
]

const FEATURES = [
  { icon: Zap,    title: 'Instant booking',   desc: 'Reserve your ride in under 60 seconds. No forms, no waiting.' },
  { icon: Shield, title: 'Fully insured',     desc: 'Every ride comes with comprehensive insurance coverage.' },
  { icon: Clock,  title: '24/7 support',      desc: 'Round-the-clock emergency helpline. We\'ve always got you.' },
  { icon: MapPin, title: '38+ stations',      desc: 'Drop off at any station across Hyderabad. Maximum flexibility.' },
]

const MARQUEE_ITEMS = [
  '⚡ Electric rides now available',
  '🛵 1,200+ bikes across Hyderabad',
  '🔒 Fully insured every ride',
  '📍 38 stations citywide',
  '💳 UPI, card & wallet accepted',
  '⭐ 50,000+ happy riders',
]

export default function HomePage() {
  const [station, setStation] = useState(STATIONS[0])
  const [bikeType, setBikeType] = useState('Any type')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [visible, setVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    setStartDate(today.toISOString().split('T')[0])
    setEndDate(tomorrow.toISOString().split('T')[0])
  }, [])

  const TESTIMONIALS = [
    { name: 'Arjun Reddy', role: 'Software Engineer', text: 'Best bike rental in Hyd! Booked an Ather for my morning commute — seamless app, clean bike, zero hassle. Using this every day now.', rating: 5, location: 'Hitech City' },
    { name: 'Priya Sharma', role: 'UX Designer', text: 'Finally a rental service that respects your time. Picked up a Pulsar in 2 mins flat. The dark mode on the website is gorgeous btw!', rating: 5, location: 'Banjara Hills' },
    { name: 'Karthik Nair', role: 'MBA Student', text: 'Switched from Ola/Uber to ZoditoRentals for my daily college run. Saving ₹4000/month easily. Absolute game changer.', rating: 5, location: 'Gachibowli' },
  ]

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* ── MARQUEE TICKER ── */}
      <div style={{ background: '#f97316', overflow: 'hidden', height: 36, display: 'flex', alignItems: 'center', marginTop: 64 }}>
        <div className="marquee-inner" style={{ whiteSpace: 'nowrap' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 600, color: '#fff', padding: '0 40px', letterSpacing: '0.03em' }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg)' }} className="bg-dots">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}
          className="grid-cols-1 md:grid-cols-2">

          {/* Left: Copy */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 99, padding: '5px 14px', marginBottom: 24 }}>
              <Sparkles size={13} color="#f97316" />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#c2410c' }}>Now live across 38 stations in Hyderabad</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px', color: 'var(--text)', marginBottom: 24 }}>
              Ride the city<br />
              on your<br />
              <span style={{ color: '#f97316', position: 'relative' }}>
                own terms.
                <svg style={{ position: 'absolute', bottom: -6, left: 0, width: '100%' }} viewBox="0 0 300 12" fill="none">
                  <path d="M0 8 Q75 2 150 8 Q225 14 300 8" stroke="#f97316" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4"/>
                </svg>
              </span>
            </h1>

            <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}>
              Affordable bikes & scooters at 38+ stations across Hyderabad. Book in seconds — no paperwork, no deposits, no drama.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              <Link href="/bikes" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#f97316', color: '#fff',
                padding: '14px 28px', borderRadius: 12,
                fontSize: 15, fontWeight: 600, textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#ea6b0d'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f97316'; e.currentTarget.style.transform = 'none' }}
              >
                Browse bikes <ArrowRight size={16} />
              </Link>
              <Link href="#how" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'transparent', color: 'var(--text)',
                padding: '14px 28px', borderRadius: 12,
                border: '1px solid var(--border)',
                fontSize: 15, fontWeight: 500, textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.color = '#f97316' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
              >
                How it works
              </Link>
            </div>

            {/* Social proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ display: 'flex' }}>
                {['🧑', '👩', '👨', '🧑'].map((emoji, i) => (
                  <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', background: '#f5f5f5', border: '2px solid var(--bg)', marginLeft: i > 0 ? -8 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#f97316" color="#f97316" />)}
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginLeft: 4 }}>4.9/5</span>
                </div>
                <p style={{ fontSize: 12, color: 'var(--text-2)' }}>from 50,000+ riders</p>
              </div>
            </div>
          </div>

          {/* Right: Booking widget */}
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(32px)',
            transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s',
          }}>
            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: 28,
              boxShadow: '0 0 0 1px var(--border), 0 24px 64px rgba(0,0,0,0.08)',
              position: 'relative',
            }}>
              {/* Card header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>Quick booking</p>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 2 }}>Find your ride in seconds</p>
                </div>
                <div style={{ background: '#fff7ed', borderRadius: 8, padding: '4px 10px' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#f97316' }}>LIVE</span>
                </div>
              </div>

              {/* Station field */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-2)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                  Pick-up station
                </label>
                <div style={{ position: 'relative' }}>
                  <MapPin size={15} color="#f97316" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
                  <select value={station} onChange={e => setStation(e.target.value)} style={{
                    width: '100%', background: 'var(--bg-2)', border: '1px solid var(--border)',
                    borderRadius: 10, padding: '11px 12px 11px 34px',
                    fontSize: 14, color: 'var(--text)',
                    outline: 'none', cursor: 'pointer',
                    appearance: 'none',
                  }}>
                    {STATIONS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              {/* Date row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                {[
                  { label: 'Start date', value: startDate, setter: setStartDate },
                  { label: 'End date',   value: endDate,   setter: setEndDate },
                ].map(({ label, value, setter }) => (
                  <div key={label}>
                    <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-2)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{label}</label>
                    <input type="date" value={value} onChange={e => setter(e.target.value)} style={{
                      width: '100%', background: 'var(--bg-2)', border: '1px solid var(--border)',
                      borderRadius: 10, padding: '11px 12px',
                      fontSize: 13, color: 'var(--text)',
                      outline: 'none', colorScheme: 'auto',
                    }} />
                  </div>
                ))}
              </div>

              {/* Bike type */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-2)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Bike type</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Any', 'Scooter', 'Electric', 'Cruiser', 'Sport'].map(type => (
                    <button key={type} onClick={() => setBikeType(type)} style={{
                      padding: '6px 14px', borderRadius: 99,
                      border: `1px solid ${bikeType === type ? '#f97316' : 'var(--border)'}`,
                      background: bikeType === type ? '#fff7ed' : 'transparent',
                      color: bikeType === type ? '#c2410c' : 'var(--text-2)',
                      fontSize: 13, fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
                    }}>{type}</button>
                  ))}
                </div>
              </div>

              <Link href="/bikes" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                width: '100%', background: '#f97316', color: '#fff',
                padding: '14px', borderRadius: 12,
                fontSize: 15, fontWeight: 600, textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#ea6b0d')}
              onMouseLeave={e => (e.currentTarget.style.background = '#f97316')}
              >
                Find available bikes <ArrowRight size={16} />
              </Link>

              {/* Trust badges */}
              <div style={{ display: 'flex', gap: 16, marginTop: 16, justifyContent: 'center' }}>
                {['Free cancellation', 'No deposit', 'Instant confirm'].map(badge => (
                  <span key={badge} style={{ fontSize: 11, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ color: '#059669', fontSize: 12 }}>✓</span> {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: '#0a0a0a', padding: '32px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }} className="grid-cols-2 md:grid-cols-4">
          {[
            { num: '1,200+', label: 'Bikes available' },
            { num: '38',     label: 'Stations in Hyd' },
            { num: '50K+',   label: 'Happy riders' },
            { num: '₹35',    label: 'Starting per hour' },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: 'center', padding: '20px 16px', borderRight: '1px solid #222' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: '#f97316', letterSpacing: '-1px' }}>{num}</p>
              <p style={{ fontSize: 12, color: '#666', marginTop: 4 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#f97316', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Why ZoditoRentals</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: 'var(--text)', marginTop: 8, letterSpacing: '-1px' }}>
            Built for Hyderabad riders
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border)',
              borderRadius: 16, padding: '28px 24px',
              transition: 'all 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ width: 44, height: 44, background: '#fff7ed', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={20} color="#f97316" />
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{title}</p>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BIKES ── */}
      <section style={{ padding: '0 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#f97316', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Fleet</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', marginTop: 8, letterSpacing: '-1px' }}>Popular rides</h2>
          </div>
          <Link href="/bikes" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: '#f97316', textDecoration: 'none' }}>
            View all bikes <ChevronRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {BIKES.map(bike => (
            <Link key={bike.id} href={`/bikes/${bike.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: 16, overflow: 'hidden',
                transition: 'all 0.3s', cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(249,115,22,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {/* Bike visual */}
                <div style={{ height: 160, background: 'var(--bg-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ fontSize: 72 }}>
                    {bike.type === 'Electric' ? '⚡' : bike.type === 'Cruiser' ? '🏍️' : bike.type === 'Sport' ? '🏎️' : '🛵'}
                  </div>
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    background: bike.tagColor + '22', color: bike.tagColor,
                    border: `1px solid ${bike.tagColor}44`,
                    borderRadius: 99, padding: '3px 10px',
                    fontSize: 11, fontWeight: 700,
                  }}>{bike.tag}</div>
                  <div style={{ position: 'absolute', top: 12, right: 12, background: '#dcfce7', borderRadius: 99, padding: '3px 10px' }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#166534' }}>{bike.available} avail.</span>
                  </div>
                </div>

                <div style={{ padding: '16px 18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>{bike.name}</p>
                      <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>{bike.type}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: 20, fontWeight: 800, color: '#f97316', fontFamily: 'var(--font-display)' }}>₹{bike.price}</p>
                      <p style={{ fontSize: 11, color: 'var(--text-3)' }}>per hour</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Star size={13} fill="#f97316" color="#f97316" />
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{bike.rating}</span>
                    <span style={{ fontSize: 12, color: 'var(--text-3)' }}>({bike.reviews.toLocaleString()} reviews)</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ padding: '80px 24px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#f97316', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Process</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: 'var(--text)', marginTop: 8, letterSpacing: '-1px' }}>Ride in 4 steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {[
              { num: '01', title: 'Choose a bike', desc: 'Browse our fleet by type, price range, or pick-up station.' },
              { num: '02', title: 'Book your slot', desc: 'Pick dates, your nearest station, and preferred duration.' },
              { num: '03', title: 'Pay securely', desc: 'UPI, debit/credit card, or any wallet. Instant confirmation.' },
              { num: '04', title: 'Ride & return', desc: 'Pick up the keys, ride freely, drop off at any station.' },
            ].map(({ num, title, desc }) => (
              <div key={num} style={{ position: 'relative' }}>
                <div style={{ marginBottom: 16 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 800, color: '#f97316', opacity: 0.2 }}>{num}</span>
                </div>
                <div style={{ width: 40, height: 40, background: '#f97316', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, marginTop: -20 }}>
                  <span style={{ color: '#fff', fontSize: 14, fontWeight: 800, fontFamily: 'var(--font-display)' }}>{num}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{title}</p>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#f97316', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Reviews</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: 'var(--text)', marginTop: 8, letterSpacing: '-1px' }}>Loved by Hyderabad</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 24,
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#f97316' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="#f97316" color="#f97316" />)}
              </div>
              <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff7ed', border: '1px solid #fed7aa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 16 }}>👤</span>
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-3)' }}>{t.role} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '0 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          background: '#0a0a0a',
          borderRadius: 24, padding: '56px 48px',
          position: 'relative', overflow: 'hidden',
          textAlign: 'center',
        }}>
          <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: '#f97316', borderRadius: '50%', opacity: 0.1 }} />
          <div style={{ position: 'absolute', bottom: -60, left: -20, width: 240, height: 240, background: '#f97316', borderRadius: '50%', opacity: 0.06 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#f97316', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get started today</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginTop: 8, marginBottom: 16, letterSpacing: '-1px' }}>
              Your next ride is<br />waiting for you.
            </h2>
            <p style={{ fontSize: 16, color: '#888', marginBottom: 32 }}>Join 50,000+ riders who chose smarter travel in Hyderabad.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/bikes" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#f97316', color: '#fff',
                padding: '14px 32px', borderRadius: 12,
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
              }}>
                Book your ride <ArrowRight size={16} />
              </Link>
              <Link href="/auth/signup" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'transparent', color: '#fff',
                padding: '14px 32px', borderRadius: 12,
                border: '1px solid #333',
                fontSize: 15, fontWeight: 500, textDecoration: 'none',
              }}>
                Create free account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
