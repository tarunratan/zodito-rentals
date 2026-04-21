'use client'

import { useState } from 'react'
import { Bike, Users, IndianRupee, TrendingUp, AlertCircle, CheckCircle, Clock, MapPin } from 'lucide-react'

const METRICS = [
  { icon: IndianRupee, label: 'Revenue today',   value: '₹48,920', change: '+12%', positive: true },
  { icon: Bike,        label: 'Active rentals',   value: '134',     change: '+8',   positive: true },
  { icon: Users,       label: 'Users today',      value: '892',     change: '+23%', positive: true },
  { icon: TrendingUp,  label: 'Fleet utilisation',value: '78%',     change: '+5%',  positive: true },
]

const BOOKINGS = [
  { id: 'ZR10295', user: 'Priya S.',   bike: 'Ather 450X',     station: 'Hitech City',  time: '09:30',  amount: 227, status: 'active' },
  { id: 'ZR10294', user: 'Rahul V.',   bike: 'Pulsar NS200',   station: 'Gachibowli',   time: '10:00',  amount: 396, status: 'active' },
  { id: 'ZR10293', user: 'Kiran M.',   bike: 'Honda Activa',   station: 'Madhapur',     time: '08:15',  amount: 147, status: 'completed' },
  { id: 'ZR10292', user: 'Ananya R.',  bike: 'Royal Enfield',  station: 'Banjara Hills',time: '07:45',  amount: 444, status: 'completed' },
  { id: 'ZR10291', user: 'Sai K.',     bike: 'TVS Jupiter',    station: 'JNTU Metro',   time: '11:30',  amount: 184, status: 'pending' },
  { id: 'ZR10290', user: 'Deepa N.',   bike: 'Ola S1 Pro',     station: 'Kondapur',     time: '12:00',  amount: 261, status: 'pending' },
]

const FLEET_STATUS = [
  { station: 'Hitech City Metro',    total: 45, available: 28, maintenance: 2 },
  { station: 'Banjara Hills Rd 12',  total: 32, available: 18, maintenance: 1 },
  { station: 'Gachibowli Stadium',   total: 38, available: 21, maintenance: 3 },
  { station: 'Madhapur Junction',    total: 28, available: 14, maintenance: 0 },
]

const STATUS_STYLE: Record<string, any> = {
  active:    { bg: '#dbeafe', color: '#1e40af', label: 'Active' },
  completed: { bg: '#dcfce7', color: '#166534', label: 'Done' },
  pending:   { bg: '#fef9c3', color: '#854d0e', label: 'Pending' },
}

export default function AdminPage() {
  const [tab, setTab] = useState<'bookings' | 'fleet'>('bookings')

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64 }}>

      {/* Header */}
      <div style={{ background: '#0a0a0a', padding: '32px 24px', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <p style={{ fontSize: 12, color: '#f97316', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Admin panel</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>ZoditoRentals Dashboard</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 99, padding: '6px 14px' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: 12, color: '#aaa' }}>Live · Hyderabad</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 36 }}>
          {METRICS.map(({ icon: Icon, label, value, change, positive }) => (
            <div key={label} style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 14, padding: '20px 18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, background: '#fff7ed', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} color="#f97316" />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: positive ? '#16a34a' : '#dc2626', background: positive ? '#f0fdf4' : '#fef2f2', padding: '2px 8px', borderRadius: 99 }}>{change}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px', marginBottom: 4 }}>{value}</p>
              <p style={{ fontSize: 13, color: 'var(--text-3)' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 24, background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 10, padding: 4, width: 'fit-content' }}>
          {(['bookings', 'fleet'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: '8px 20px', borderRadius: 7, border: 'none',
              background: tab === t ? '#f97316' : 'transparent',
              color: tab === t ? '#fff' : 'var(--text-2)',
              fontSize: 14, fontWeight: tab === t ? 600 : 400,
              cursor: 'pointer', transition: 'all 0.2s', textTransform: 'capitalize',
            }}>{t}</button>
          ))}
        </div>

        {tab === 'bookings' && (
          <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>Recent bookings</p>
              <span style={{ fontSize: 12, color: 'var(--text-3)' }}>Today · {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    {['Booking ID', 'User', 'Bike', 'Station', 'Time', 'Amount', 'Status'].map(h => (
                      <th key={h} style={{ padding: '12px 16px', fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {BOOKINGS.map((b, i) => {
                    const s = STATUS_STYLE[b.status]
                    return (
                      <tr key={b.id} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-3)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 600, color: '#f97316', fontFamily: 'var(--font-mono)' }}>#{b.id}</td>
                        <td style={{ padding: '14px 16px', fontSize: 14, color: 'var(--text)' }}>{b.user}</td>
                        <td style={{ padding: '14px 16px', fontSize: 13, color: 'var(--text-2)' }}>{b.bike}</td>
                        <td style={{ padding: '14px 16px', fontSize: 13, color: 'var(--text-2)', whiteSpace: 'nowrap' }}>{b.station}</td>
                        <td style={{ padding: '14px 16px', fontSize: 13, color: 'var(--text-2)' }}>{b.time}</td>
                        <td style={{ padding: '14px 16px', fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>₹{b.amount}</td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{ fontSize: 11, fontWeight: 700, background: s.bg, color: s.color, padding: '3px 10px', borderRadius: 99 }}>{s.label}</span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === 'fleet' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {FLEET_STATUS.map(s => {
                const rented = s.total - s.available - s.maintenance
                const utilPct = Math.round((rented / s.total) * 100)
                return (
                  <div key={s.station} style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 16, padding: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 16 }}>
                      <MapPin size={16} color="#f97316" style={{ marginTop: 2, flexShrink: 0 }} />
                      <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', lineHeight: 1.4 }}>{s.station}</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 16 }}>
                      {[
                        { label: 'Available', value: s.available, color: '#16a34a' },
                        { label: 'Rented',    value: rented,      color: '#f97316' },
                        { label: 'Service',   value: s.maintenance,color: '#dc2626' },
                      ].map(({ label, value, color }) => (
                        <div key={label} style={{ textAlign: 'center' }}>
                          <p style={{ fontSize: 22, fontWeight: 800, color, fontFamily: 'var(--font-display)' }}>{value}</p>
                          <p style={{ fontSize: 11, color: 'var(--text-3)' }}>{label}</p>
                        </div>
                      ))}
                    </div>
                    {/* Utilisation bar */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                        <span style={{ fontSize: 11, color: 'var(--text-3)' }}>Utilisation</span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#f97316' }}>{utilPct}%</span>
                      </div>
                      <div style={{ height: 6, background: 'var(--border)', borderRadius: 99, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${utilPct}%`, background: '#f97316', borderRadius: 99, transition: 'width 0.5s ease' }} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
