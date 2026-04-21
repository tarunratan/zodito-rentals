# 🛵 ZoditoRentals — Renting Made Easy

> Full-stack bike rental web app for Hyderabad, built with Next.js 14, Supabase, and Razorpay.

![ZoditoRentals](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=flat-square&logo=supabase)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-blue?style=flat-square&logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat-square&logo=docker)

---

## ✨ Features

- 🏠 **Landing page** — Hero, marquee ticker, bike fleet, how-it-works, testimonials
- 🔍 **Bike listing** — Filter by type, price slider, search, sort
- 📋 **Bike detail** — Specs, booking widget with price breakdown, confirmation
- 👤 **User dashboard** — Ride history, active booking, stats
- ⚙️ **Admin dashboard** — Metrics, bookings table, fleet status per station
- 🔐 **Auth** — Email/password + phone OTP (via Supabase)
- 💳 **Payments** — Razorpay integration (UPI, card, wallet)
- 🌙 **Dark mode** — Full light/dark theme toggle
- 🐳 **Docker** — Production-ready Dockerfile + docker-compose

---

## 🚀 Quick Start

### 1. Clone & install

```bash
cd zodito-rentals
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Fill in your values:

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Project Settings → API |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay Dashboard → Settings → API Keys |
| `RAZORPAY_KEY_SECRET` | Razorpay Dashboard → Settings → API Keys |

### 3. Set up Supabase database

1. Go to [supabase.com](https://supabase.com) → Create project
2. Open **SQL Editor**
3. Copy and run the entire contents of `lib/schema.sql`
4. Done — all tables, seed data, and RLS policies are set up

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🐳 Docker Deployment

### Development

```bash
docker build -t zodito-rentals .
docker run -p 3000:3000 --env-file .env.local zodito-rentals
```

### Production (with Nginx)

```bash
# Copy and fill your env vars
cp .env.local.example .env.local
nano .env.local

# Start all services
docker-compose up -d

# With Nginx reverse proxy
docker-compose --profile production up -d
```

### Check logs

```bash
docker-compose logs -f app
```

---

## 📁 Project Structure

```
zodito-rentals/
├── app/
│   ├── page.tsx                  # Home / landing page
│   ├── layout.tsx                # Root layout with ThemeProvider
│   ├── globals.css               # Global styles + CSS variables
│   ├── bikes/
│   │   ├── page.tsx              # Bike listing with filters
│   │   └── [id]/page.tsx         # Bike detail + booking
│   ├── dashboard/
│   │   └── page.tsx              # User dashboard
│   ├── admin/
│   │   └── page.tsx              # Admin dashboard
│   ├── auth/
│   │   └── login/page.tsx        # Login + Signup
│   └── api/
│       ├── bookings/route.ts     # Bookings CRUD
│       └── payment/
│           └── create-order/route.ts  # Razorpay order creation
├── components/
│   └── layout/
│       ├── Navbar.tsx            # Sticky nav with dark mode toggle
│       └── Footer.tsx            # Footer with links
├── lib/
│   ├── supabase.ts               # Supabase client + types
│   └── schema.sql                # Full DB schema (run in Supabase)
├── Dockerfile                    # Multi-stage production build
├── docker-compose.yml            # App + optional Nginx
├── nginx.conf                    # Nginx reverse proxy config
├── tailwind.config.ts
├── next.config.js
└── .env.local.example            # Environment variable template
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary color | `#f97316` (Orange) |
| Font — display | Syne (headings) |
| Font — body | DM Sans |
| Font — mono | DM Mono |
| Dark mode | `next-themes` class strategy |
| Border radius | 8px / 12px / 16px |

---

## 🔌 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Database + Auth | Supabase (PostgreSQL) |
| Payments | Razorpay |
| Styling | Tailwind CSS + CSS Variables |
| Animations | Framer Motion |
| Theme | next-themes |
| Icons | Lucide React |
| Deployment | Docker + Nginx |

---

## 📍 Pages & Routes

| Route | Page |
|---|---|
| `/` | Landing page |
| `/bikes` | Bike listing |
| `/bikes/[id]` | Bike detail + booking |
| `/dashboard` | User dashboard |
| `/admin` | Admin dashboard |
| `/auth/login` | Login + Signup |

---

## 💡 Next Steps

- [ ] Connect real Supabase auth to all pages
- [ ] Integrate Razorpay payment flow end-to-end
- [ ] Add Google Maps for station picker
- [ ] Add push notifications for booking confirmation
- [ ] Build mobile app with React Native + same Supabase backend
- [ ] Add ride tracking (GPS) via WebSocket

---

## 🙌 Made in Hyderabad with ♥

**ZoditoRentals** — renting made easy
