'use client'

import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>ZoditoRentals — Renting Made Easy | Hyderabad</title>
        <meta name="description" content="Affordable bike & scooter rentals across Hyderabad. Book in seconds, ride in minutes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="page-enter">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
