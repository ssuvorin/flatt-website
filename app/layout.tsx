import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Flatt – Property Management & Maintenance Services in Dubai',
    template: '%s | Flatt – Property Management & Maintenance Services in Dubai',
  },
  description:
    'Manage Dubai rentals with ease. Flatt lets owners and tenants book maintenance, track payments, and access real-time analytics—all in one app.',
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
        <link rel="preload" as="image" href="/hero.avif" type="image/avif" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`
        {"@context":"https://schema.org","@type":"MobileApplication","name":"Flatt","operatingSystem":"iOS, Android","applicationCategory":"PropertyManagementApplication","offers":{"@type":"Offer","price":"0","priceCurrency":"AED"},"downloadUrl":["https://apps.apple.com/us/app/flatt-ae/id6742777441","https://play.google.com/store/apps/details?id=com.flattllcfz.app"]}
        `}} />
        <link rel="apple-touch-icon" href="/flatt-full-logo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/flatt-full-logo.svg" />
        <link rel="canonical" href="https://flatt.ae/" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WL75MBXLEE"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WL75MBXLEE');
          `}
        </Script>
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
        <Analytics />
      </body>
    </html>
  )
} 