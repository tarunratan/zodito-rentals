'use client'

import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
// 1. Import a professional font (Inter for body, Plus Jakarta Sans for headings)
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <title>ZoditoRentals — Renting Made Easy | Hyderabad</title>
        <meta name="description" content="Affordable bike & scooter rentals across Hyderabad. Book in seconds, ride in minutes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      {/* 2. Apply the font class to the body */}
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="page-enter">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
