'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, SlidersHorizontal, Star, Zap, X } from 'lucide-react'

const ALL_BIKES = [
  { id: 1,  name: 'Honda Activa 6G',        type: 'Scooter',  price: 49,  rating: 4.8, reviews: 2840, tag: 'Popular',    tagColor: '#f97316', available: 24, fuel: 'Petrol',   cc: 110, emoji: '🛵' },
  { id: 2,  name: 'Royal Enfield Classic',  type: 'Cruiser',  price: 89,  rating: 4.9, reviews: 1620, tag: 'Premium',    tagColor: '#7c3aed', available: 8,  fuel: 'Petrol',   cc: 350, emoji: '🏍️' },
  { id: 3,  name: 'Ather 450X',             type: 'Electric', price: 65,  rating: 4.7, reviews: 980,  tag: 'Eco',        tagColor: '#059669', available: 16, fuel: 'Electric', cc: 0,   emoji: '⚡' },
  { id: 4,  name: 'TVS Jupiter',            type: 'Scooter',  price: 45,  rating: 4.6, reviews: 1440, tag: 'Budget',     tagColor: '#0891b2', available: 31, fuel: 'Petrol',   cc: 110, emoji: '🛵' },
  { id: 5,  name: 'Bajaj Pulsar NS200',     type: 'Sport',    price: 79,  rating: 4.8, reviews: 760,  tag: 'Sporty',     tagColor: '#dc2626', available: 12, fuel: 'Petrol',   cc: 200, emoji: '🏎️' },
  { id: 6,  name: 'Hero Splendor Plus',     type: 'Commuter', price: 35,  rating: 4.5, reviews: 3200, tag: 'Value',      tagColor: '#ca8a04', available: 45, fuel: 'Petrol',   cc: 100, emoji: '🚲' },
  { id: 7,  name: 'Yamaha MT-15',           type: 'Sport',    price: 85,  rating: 4.8, reviews: 540,  tag: 'Sporty',     tagColor: '#dc2626', available: 6,  fuel: 'Petrol',   cc: 155, emoji: '🏎️' },
  { id: 8,  name: 'Ola S1 Pro',             type: 'Electric', price: 70,  rating: 4.6, reviews: 890,  tag: 'Eco',        tagColor: '#059669', available: 20, fuel: 'Electric', cc: 0,   emoji: '⚡' },
  { id: 9,  name: 'Suzuki Access 125',      type: 'Scooter',  price: 52,  rating: 4.7, reviews: 1100, tag: 'Reliable',   tagColor: '#f97316', available: 18, fuel: 'Petrol',   cc: 125, emoji: '🛵' },
  { id: 10, name: 'Kawasaki Ninja 300',     type: 'Sport',    price: 120, rating: 4.9, reviews: 320,  tag: 'Premium',    tagColor: '#7c3aed', available: 4,  fuel: 'Petrol',   cc: 300, emoji: '🏎️' },
  { id: 11, name: 'Honda CB Shine',         type: 'Commuter', price: 40,  rating: 4.5, reviews: 2100, tag: 'Value',      tagColor: '#ca8a04', available: 28, fuel: 'Petrol',   cc: 125, emoji: '🚲' },
  { id: 12, name: 'TVS iQube Electric',     type: 'Electric', price: 60,  rating: 4.6, reviews: 650,  tag: 'Eco',        tagColor: '#059669', available: 14, fuel: 'Electric', cc: 0,   emoji: '⚡' },
]

const TYPES   = ['All', 'Scooter', 'Sport', 'Cruiser', 'Electric', 'Commuter']
const SORT_BY = ['Price: Low to high', 'Price: High to low', 'Rating', 'Availability']

export default function BikesPage() {
  const [search,   setSearch]   = useState('')
  const [type,     setType]     = useState('All')
  const [maxPrice, setMaxPrice] = useState(150)
  const [sort,     setSort]     = useState(SORT_BY[0])
  const [showFilter, setShowFilter] = useState(false)

  const filtered = ALL_BIKES
    .filter(b => type === 'All' || b.type === type)
    .filter(b => b.price <= maxPrice)
    .filter(b => b.name.toLowerCase().includes(search.toLowerCase()) || b.type.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === SORT_BY[0]) return a.price - b.price
      if (sort === SORT_BY[1]) return b.price - a.price
      if (sort === SORT_BY[2]) return b.rating - a.rating
      return b.available - a.available
    })

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64 }}>

      {/* Header */}
      <div style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border)', padding: '32px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-1px', marginBottom: 8 }}>
            Browse bikes
          </h1>
          <p style={{ fontSize: 15, color: 'var(--text-2)' }}>
            {filtered.length} bikes available across Hyderabad
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px', display: 'flex', gap: 32 }} className="flex-col md:flex-row">

        {/* Sidebar Filters — desktop */}
        <aside style={{ width: 240, flexShrink: 0 }} className="hidden md:block">
          <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 16, padding: 20, position: 'sticky', top: 80 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 20 }}>Filters</p>

            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Type</p>
              {TYPES.map(t => (
                <button key={t} onClick={() => setType(t)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  width: '100%', padding: '8px 10px', borderRadius: 8,
                  background: type === t ? '#fff7ed' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  fontSize: 14, color: type === t ? '#c2410c' : 'var(--text-2)',
                  fontWeight: type === t ? 600 : 400,
                  marginBottom: 2, transition: 'all 0.15s',
                }}>
                  {t}
                  <span style={{ fontSize: 12, color: 'var(--text-3)' }}>{t === 'All' ? ALL_BIKES.length : ALL_BIKES.filter(b => b.type === t).length}</span>
                </button>
              ))}
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Max price / hr</p>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#f97316' }}>₹{maxPrice}</span>
              </div>
              <input type="range" min={35} max={150} step={5} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#f97316' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                <span style={{ fontSize: 11, color: 'var(--text-3)' }}>₹35</span>
                <span style={{ fontSize: 11, color: 'var(--text-3)' }}>₹150</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div style={{ flex: 1 }}>
          {/* Search + Sort row */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
              <Search size={16} color="var(--text-3)" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text" placeholder="Search bikes..." value={search} onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', padding: '11px 12px 11px 38px',
                  background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 10,
                  fontSize: 14, color: 'var(--text)', outline: 'none',
                }}
              />
              {search && (
                <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-3)' }}>
                  <X size={14} />
                </button>
              )}
            </div>
            <select value={sort} onChange={e => setSort(e.target.value)} style={{
              padding: '11px 14px', background: 'var(--bg-2)', border: '1px solid var(--border)',
              borderRadius: 10, fontSize: 14, color: 'var(--text)', outline: 'none', cursor: 'pointer',
            }}>
              {SORT_BY.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          {/* Type pills — mobile */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
            {TYPES.map(t => (
              <button key={t} onClick={() => setType(t)} style={{
                padding: '6px 14px', borderRadius: 99,
                border: `1px solid ${type === t ? '#f97316' : 'var(--border)'}`,
                background: type === t ? '#fff7ed' : 'var(--bg-2)',
                color: type === t ? '#c2410c' : 'var(--text-2)',
                fontSize: 13, fontWeight: type === t ? 600 : 400,
                cursor: 'pointer', transition: 'all 0.15s',
              }}>{t}</button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 24px' }}>
              <p style={{ fontSize: 48, marginBottom: 16 }}>🔍</p>
              <p style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>No bikes found</p>
              <p style={{ fontSize: 14, color: 'var(--text-2)' }}>Try adjusting your filters</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 18 }}>
              {filtered.map(bike => (
                <Link key={bike.id} href={`/bikes/${bike.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: 'var(--bg)', border: '1px solid var(--border)',
                    borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(249,115,22,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
                  >
                    <div style={{ height: 140, background: 'var(--bg-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                      <span style={{ fontSize: 60 }}>{bike.emoji}</span>
                      <div style={{ position: 'absolute', top: 10, left: 10, background: bike.tagColor + '22', color: bike.tagColor, border: `1px solid ${bike.tagColor}44`, borderRadius: 99, padding: '2px 9px', fontSize: 11, fontWeight: 700 }}>{bike.tag}</div>
                      {bike.fuel === 'Electric' && (
                        <div style={{ position: 'absolute', top: 10, right: 10 }}>
                          <Zap size={14} fill="#059669" color="#059669" />
                        </div>
                      )}
                    </div>
                    <div style={{ padding: '14px 16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                        <div>
                          <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{bike.name}</p>
                          <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>{bike.type} {bike.cc > 0 ? `· ${bike.cc}cc` : '· Electric'}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontSize: 18, fontWeight: 800, color: '#f97316', fontFamily: 'var(--font-display)' }}>₹{bike.price}</p>
                          <p style={{ fontSize: 11, color: 'var(--text-3)' }}>/hr</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <Star size={12} fill="#f97316" color="#f97316" />
                          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{bike.rating}</span>
                          <span style={{ fontSize: 11, color: 'var(--text-3)' }}>({bike.reviews.toLocaleString()})</span>
                        </div>
                        <span style={{ fontSize: 12, color: '#059669', fontWeight: 500 }}>{bike.available} available</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
