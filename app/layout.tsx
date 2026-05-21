import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['500', '600'],
  style: ['italic'],
  variable: '--font-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jejak Daging - Transparent Qurban Tracking',
  description: 'Platform pelacakan qurban yang transparan. Lacak perjalanan hewan qurban Anda dari peternakan hingga distribusi.',
  generator: 'v0.app',
  keywords: ['qurban', 'tracking', 'halal', 'islamic', 'livestock', 'transparency'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0e6e4f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} ${jetbrainsMono.variable} bg-off-white`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
