'use client'

import Link from 'next/link'
import { ArrowRight, Star, MapPin, Clock, CheckCircle, AlertCircle, Bike } from 'lucide-react'

const RIDES = [
  { id: 'ZR10234', bike: 'Honda Activa 6G', emoji: '🛵', station: 'Hitech City Metro', date: 'Apr 18, 2025', duration: '3 hrs', amount: 196, status: 'completed', rating: 5 },
  { id: 'ZR10187', bike: 'Ather 450X',      emoji: '⚡', station: 'Banjara Hills Rd 12', date: 'Apr 14, 2025', duration: '5 hrs', amount: 397, status: 'completed', rating: 4 },
  { id: 'ZR10091', bike: 'TVS Jupiter',     emoji: '🛵', station: 'Madhapur Junction',   date: 'Apr 10, 2025', duration: '2 hrs', amount: 139, status: 'completed', rating: 5 },
  { id: 'ZR10055', bike: 'Royal Enfield',   emoji: '🏍️', station: 'Jubilee Hills',       date: 'Apr 06, 2025', duration: '4 hrs', amount: 444, status: 'completed', rating: 5 },
]

const ACTIVE = { id: 'ZR10289', bike: 'Bajaj Pulsar NS200', emoji: '🏎️', station: 'Gachibowli Stadium', startTime: '10:00 AM', endTime: '2:00 PM', amount: 396 }

const STATS = [
  { label: 'Total rides',    value: '18' },
  { label: 'Km covered',     value: '412' },
  { label: 'Hours on road',  value: '67' },
  { label: 'Amount saved',   value: '₹8.4K' },
]

export default function DashboardPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64 }}>

      {/* Header */}
      <div style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border)', padding: '32px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#fff7ed', border: '2px solid #fed7aa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>👤</div>
            <div>
              <p style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 2 }}>Welcome back</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' }}>Rahul Verma</p>
              <p style={{ fontSize: 13, color: 'var(--text-3)' }}>rahul.verma@gmail.com</p>
            </div>
          </div>
          <Link href="/bikes" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#f97316', color: '#fff', padding: '11px 22px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Book new ride <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 36 }}>
          {STATS.map(({ label, value }) => (
            <div key={label} style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 14, padding: '20px 18px' }}>
              <p style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 8 }}>{label}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: 'var(--text)', letterSpacing: '-1px' }}>{value}</p>
            </div>
          ))}
        </div>

        {/* Active ride */}
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Active booking</p>
          <div style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a00 100%)', border: '1px solid #3d1f00', borderRadius: 16, padding: '22px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ width: 56, height: 56, background: '#1c0e00', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>{ACTIVE.emoji}</div>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{ACTIVE.bike}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <MapPin size={12} color="#f97316" />
                    <span style={{ fontSize: 13, color: '#f97316' }}>{ACTIVE.station}</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 20 }}>
                <div>
                  <p style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>START</p>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{ACTIVE.startTime}</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>END</p>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#f97316' }}>{ACTIVE.endTime}</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>TOTAL</p>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>₹{ACTIVE.amount}</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 600 }}>Currently active · #{ACTIVE.id}</span>
            </div>
          </div>
        </div>

        {/* Ride history */}
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Ride history</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {RIDES.map(ride => (
              <div key={ride.id} style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 14, padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div style={{ width: 48, height: 48, background: 'var(--bg-3)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{ride.emoji}</div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{ride.bike}</p>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--text-3)' }}><MapPin size={11} />{ride.station}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--text-3)' }}><Clock size={11} />{ride.duration}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>₹{ride.amount}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-3)' }}>{ride.date}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[...Array(ride.rating)].map((_, i) => <Star key={i} size={12} fill="#f97316" color="#f97316" />)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#f0fdf4', borderRadius: 99, padding: '4px 10px' }}>
                    <CheckCircle size={12} color="#16a34a" />
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#166534' }}>Completed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
