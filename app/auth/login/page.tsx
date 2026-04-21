'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bike, Eye, EyeOff, ArrowRight, Phone } from 'lucide-react'

export default function AuthPage() {
  const [mode,      setMode]      = useState<'login' | 'signup'>('login')
  const [showPass,  setShowPass]  = useState(false)
  const [phone,     setPhone]     = useState('')
  const [otp,       setOtp]       = useState('')
  const [email,     setEmail]     = useState('')
  const [password,  setPassword]  = useState('')
  const [name,      setName]      = useState('')
  const [otpSent,   setOtpSent]   = useState(false)
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email')

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'var(--bg-2)', border: '1px solid var(--border)',
    borderRadius: 10, padding: '12px 14px', fontSize: 15, color: 'var(--text)', outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, display: 'flex' }}>

      {/* Left panel — decorative */}
      <div style={{ flex: 1, background: '#0a0a0a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 48 }} className="hidden md:flex">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, background: '#f97316', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bike size={18} color="#fff" />
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#fff' }}>
            Zodito<span style={{ color: '#f97316' }}>Rentals</span>
          </span>
        </div>
        <div>
          <div style={{ fontSize: 80, marginBottom: 24 }}>🛵</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 20 }}>
            Hyderabad rides<br />at your fingertips.
          </h2>
          <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7, maxWidth: 360, marginBottom: 32 }}>
            Join 50,000+ riders who trust ZoditoRentals for their daily commute across the city.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['Free cancellation up to 30 minutes before', 'Every bike fully insured', '38 stations across Hyderabad'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#f9731622', border: '1px solid #f9731644', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 10, color: '#f97316' }}>✓</span>
                </div>
                <span style={{ fontSize: 14, color: '#888' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: 12, color: '#333' }}>© 2025 ZoditoRentals · renting made easy</p>
      </div>

      {/* Right panel — form */}
      <div style={{ width: '100%', maxWidth: 480, padding: '48px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: 36 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px', marginBottom: 8 }}>
            {mode === 'login' ? 'Welcome back' : 'Create account'}
          </h1>
          <p style={{ fontSize: 15, color: 'var(--text-2)' }}>
            {mode === 'login' ? 'Sign in to manage your bookings.' : 'Start renting in under 2 minutes.'}
          </p>
        </div>

        {/* Toggle auth method */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 24, background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 10, padding: 4 }}>
          {(['email', 'phone'] as const).map(m => (
            <button key={m} onClick={() => setAuthMethod(m)} style={{
              flex: 1, padding: '9px', border: 'none', borderRadius: 7,
              background: authMethod === m ? '#f97316' : 'transparent',
              color: authMethod === m ? '#fff' : 'var(--text-2)',
              fontSize: 14, fontWeight: authMethod === m ? 600 : 400,
              cursor: 'pointer', transition: 'all 0.2s', textTransform: 'capitalize',
            }}>{m === 'phone' ? 'Phone / OTP' : 'Email'}</button>
          ))}
        </div>

        {authMethod === 'email' ? (
          <div>
            {mode === 'signup' && (
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', display: 'block', marginBottom: 6 }}>Full name</label>
                <input type="text" placeholder="Rahul Verma" value={name} onChange={e => setName(e.target.value)} style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#f97316')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
            )}
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', display: 'block', marginBottom: 6 }}>Email</label>
              <input type="email" placeholder="rahul@example.com" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#f97316')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', display: 'block', marginBottom: 6 }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input type={showPass ? 'text' : 'password'} placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} style={{ ...inputStyle, paddingRight: 44 }}
                  onFocus={e => (e.target.style.borderColor = '#f97316')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
                <button onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-3)' }}>
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', display: 'block', marginBottom: 6 }}>Mobile number</label>
              <div style={{ display: 'flex', gap: 10 }}>
                <div style={{ ...inputStyle, width: 60, textAlign: 'center', flexShrink: 0 }}>+91</div>
                <input type="tel" placeholder="98765 43210" value={phone} onChange={e => setPhone(e.target.value)} style={{ ...inputStyle }}
                  onFocus={e => (e.target.style.borderColor = '#f97316')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
            </div>
            {otpSent && (
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', display: 'block', marginBottom: 6 }}>OTP sent to +91 {phone}</label>
                <input type="text" placeholder="Enter 6-digit OTP" value={otp} onChange={e => setOtp(e.target.value)} maxLength={6} style={{ ...inputStyle, letterSpacing: '0.3em', fontSize: 20, textAlign: 'center' }}
                  onFocus={e => (e.target.style.borderColor = '#f97316')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
            )}
            {!otpSent && (
              <button onClick={() => setOtpSent(true)} style={{ width: '100%', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 10, padding: '12px', fontSize: 14, fontWeight: 600, color: '#f97316', cursor: 'pointer', marginBottom: 16, transition: 'all 0.2s' }}>
                Send OTP
              </button>
            )}
          </div>
        )}

        <Link href="/dashboard" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          width: '100%', background: '#f97316', color: '#fff',
          padding: '14px', borderRadius: 12,
          fontSize: 15, fontWeight: 700, textDecoration: 'none',
          transition: 'background 0.2s',
          marginBottom: 20,
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#ea6b0d')}
        onMouseLeave={e => (e.currentTarget.style.background = '#f97316')}
        >
          {mode === 'login' ? 'Sign in' : 'Create account'} <ArrowRight size={16} />
        </Link>

        {mode === 'login' && (
          <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-3)', marginBottom: 20 }}>
            <Link href="#" style={{ color: '#f97316', textDecoration: 'none' }}>Forgot password?</Link>
          </p>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <span style={{ fontSize: 12, color: 'var(--text-3)' }}>or continue with</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
          {['Google', 'Apple'].map(provider => (
            <button key={provider} style={{
              flex: 1, padding: '11px', border: '1px solid var(--border)', borderRadius: 10,
              background: 'var(--bg-2)', fontSize: 14, fontWeight: 500, color: 'var(--text)',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#f97316')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >{provider === 'Google' ? '🔍' : '🍎'} {provider}</button>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--text-2)' }}>
          {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} style={{ background: 'none', border: 'none', color: '#f97316', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>
            {mode === 'login' ? 'Sign up free' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  )
}
