import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Flatt – Property Management in Dubai',
    template: '%s | Flatt – Property Management in Dubai',
  },
  description: 'Flatt helps tenants & property owners manage rentals, book services and pay securely – all in one mobile app.',
  keywords: ['property management', 'Dubai', 'rental', 'tenants', 'property owners', 'mobile app'],
  authors: [{ name: 'Flatt Team' }],
  creator: 'Flatt',
  publisher: 'Flatt',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flatt.ae',
    siteName: 'Flatt',
    title: 'Flatt – Property Management in Dubai',
    description: 'Streamline your rental process with Flatt. Manage properties, book services, and pay securely.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flatt Property Management App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flatt – Property Management in Dubai',
    description: 'Streamline your rental process with Flatt. Manage properties, book services, and pay securely.',
    images: ['/og-image.jpg'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Flatt',
  },
  other: {
    'apple-itunes-app': 'app-id=6742777441',
    'google-play-app': 'app-id=com.flattllcfz.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#006AFF" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo_blue.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo_blue.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/flatt-full-logo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/flatt-full-logo.svg" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <div className="cursor-glow" />
        <div className="cube-bg">
          {/* Animated cube background */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="cube"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 18}s`,
                animationDuration: `${18 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        {children}
      </body>
    </html>
  )
} 