import Link from 'next/link'
import { Bike, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: '#f97316', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bike size={18} color="#fff" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>
                Zodito<span style={{ color: '#f97316' }}>Rentals</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 20, maxWidth: 240 }}>
              Renting made easy. The smartest way to ride Hyderabad — affordable, flexible, and always nearby.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <div key={i} style={{
                  width: 34, height: 34, borderRadius: 8, border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'var(--text-2)',
                  transition: 'all 0.2s',
                }}>
                  <Icon size={15} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--text)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Explore</p>
            {['Browse bikes', 'Stations map', 'Pricing plans', 'How it works', 'Corporate rentals'].map(link => (
              <Link key={link} href="#" style={{ display: 'block', fontSize: 14, color: 'var(--text-2)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f97316')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
              >{link}</Link>
            ))}
          </div>

          {/* Support */}
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--text)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Support</p>
            {['Help centre', 'Safety guide', 'Cancellation policy', 'Terms of service', 'Privacy policy'].map(link => (
              <Link key={link} href="#" style={{ display: 'block', fontSize: 14, color: 'var(--text-2)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f97316')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
              >{link}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--text)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { Icon: MapPin,  text: 'Hitech City, Hyderabad, TS 500081' },
                { Icon: Phone,   text: '+91 98765 43210' },
                { Icon: Mail,    text: 'hello@zoditorentals.in' },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <Icon size={15} color="#f97316" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: '12px 16px', background: '#fff7ed', borderRadius: 10, border: '1px solid #fed7aa' }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: '#9a3412', marginBottom: 2 }}>Available 24/7</p>
              <p style={{ fontSize: 12, color: '#c2410c' }}>Emergency helpline active</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'var(--text-3)' }}>© 2025 ZoditoRentals. All rights reserved.</p>
          <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Made with <span style={{ color: '#f97316' }}>♥</span> in Hyderabad</p>
        </div>
      </div>
    </footer>
  )
}
