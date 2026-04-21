'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, Bike } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [mounted, setMounted]       = useState(false)
  const { theme, setTheme }         = useTheme()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Bikes',    href: '/bikes' },
    { label: 'Stations', href: '#stations' },
    { label: 'Plans',    href: '#plans' },
    { label: 'About',    href: '#about' },
  ]

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36,
              background: '#f97316',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Bike size={18} color="#fff" strokeWidth={2} />
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 18, fontWeight: 700,
              color: 'var(--text)',
              letterSpacing: '-0.5px',
            }}>
              Zodito<span style={{ color: '#f97316' }}>Rentals</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14, fontWeight: 500,
                color: 'var(--text-2)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f97316')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                style={{
                  width: 36, height: 36,
                  borderRadius: 8,
                  border: '1px solid var(--border)',
                  background: 'var(--bg-2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  color: 'var(--text-2)',
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            <Link href="/auth/login" style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14, fontWeight: 500,
              color: 'var(--text)',
              textDecoration: 'none',
              padding: '8px 16px',
              border: '1px solid var(--border)',
              borderRadius: 8,
              transition: 'all 0.2s',
            }}
            className="hidden md:block"
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.color = '#f97316' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
            >
              Sign in
            </Link>

            <Link href="/booking" style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14, fontWeight: 600,
              color: '#fff',
              textDecoration: 'none',
              padding: '9px 20px',
              background: '#f97316',
              borderRadius: 8,
              transition: 'background 0.2s',
            }}
            className="hidden md:block"
            onMouseEnter={e => (e.currentTarget.style.background = '#ea6b0d')}
            onMouseLeave={e => (e.currentTarget.style.background = '#f97316')}
            >
              Book now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                width: 36, height: 36, borderRadius: 8,
                border: '1px solid var(--border)',
                background: 'var(--bg-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'var(--text)',
              }}
              className="flex md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map(link => (
            <Link
              key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontFamily: 'var(--font-body)',
                fontSize: 16, fontWeight: 500,
                color: 'var(--text)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <Link href="/auth/login" onClick={() => setMenuOpen(false)} style={{
              flex: 1, textAlign: 'center', padding: '10px',
              border: '1px solid var(--border)', borderRadius: 8,
              fontSize: 14, fontWeight: 500, color: 'var(--text)', textDecoration: 'none',
            }}>Sign in</Link>
            <Link href="/booking" onClick={() => setMenuOpen(false)} style={{
              flex: 1, textAlign: 'center', padding: '10px',
              background: '#f97316', borderRadius: 8,
              fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none',
            }}>Book now</Link>
          </div>
        </div>
      )}
    </>
  )
}
