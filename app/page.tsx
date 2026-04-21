{/* ── HERO ── */}
<section style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg)' }} className="bg-dots">
  <div style={{ 
    maxWidth: 1200, 
    margin: '0 auto', 
    padding: '80px 24px 60px', 
    display: 'flex',           /* Changed from grid to flex */
    flexDirection: 'column',   /* Stack content vertically */
    alignItems: 'center',      /* Center items */
    textAlign: 'center'        /* Center text */
  }}>

    {/* Left: Copy */}
    <div style={{ 
      opacity: visible ? 1 : 0, 
      transform: visible ? 'none' : 'translateY(24px)', 
      transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
      maxWidth: 800             /* Limit width for readability when centered */
    }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 99, padding: '5px 14px', marginBottom: 24 }}>
        <Sparkles size={13} color="#f97316" />
        <span style={{ fontSize: 12, fontWeight: 600, color: '#c2410c' }}>Now live across 38 stations in Hyderabad</span>
      </div>

      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px', color: 'var(--text)', marginBottom: 24 }}>
        Ride the city on your <br />
        <span style={{ color: '#f97316', position: 'relative' }}>
          own terms.
        </span>
      </h1>

      <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 32, marginInline: 'auto', maxWidth: 540 }}>
        Affordable bikes & scooters at 38+ stations across Hyderabad. Book in seconds — no paperwork, no deposits, no drama.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40, justifyContent: 'center' }}>
        <Link href="/bikes" style={{ /* ... your existing styles ... */ }}>
          Browse bikes <ArrowRight size={16} />
        </Link>
        <Link href="#how" style={{ /* ... your existing styles ... */ }}>
          How it works
        </Link>
      </div>

      {/* Social proof centered */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center' }}>
        {/* ... existing social proof content ... */}
      </div>
    </div>

    {/* The Booking Widget <div> that was here has been DELETED */}
  </div>
</section>
