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
    default: 'Flatt – Property Management Made Simple in Dubai | UAE Property Solutions',
    template: '%s | Flatt – Property Management in Dubai',
  },
  description: 'Flatt simplifies property management for tenants and property owners in Dubai. Book maintenance, pay rent securely, manage properties, and connect with vetted contractors all in one mobile app. Free download for iOS and Android.',
  keywords: [
    'property management Dubai', 
    'Dubai property management', 
    'property management app',
    'Dubai rental management',
    'property maintenance Dubai',
    'rent payment app Dubai',
    'Dubai property owners',
    'Dubai tenants app',
    'property management software',
    'Dubai real estate management',
    'property services Dubai',
    'maintenance booking Dubai',
    'Dubai property solutions',
    'property management platform',
    'smart property management',
    'property management technology',
    'UAE property management',
    'Dubai property app'
  ],
  authors: [{ name: 'Flatt Technologies', url: 'https://flatt.ae' }],
  creator: 'Flatt Technologies',
  publisher: 'Flatt Technologies',
  applicationName: 'Flatt Property Management',
  category: 'Property Management',
  classification: 'Business Application',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    'max-snippet': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://flatt.ae',
    languages: {
      'en': 'https://flatt.ae',
      'ar': 'https://flatt.ae',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flatt.ae',
    siteName: 'Flatt Property Management',
    title: 'Flatt – Property Management Made Simple in Dubai',
    description: 'Simplify your property management with Flatt. Book services, pay rent, manage properties, and connect with vetted contractors in Dubai. Download free on iOS & Android.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flatt Property Management App - Dubai Property Solutions',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@flatt_ae',
    creator: '@flatt_ae',
    title: 'Flatt – Property Management Made Simple in Dubai',
    description: 'Simplify property management in Dubai with Flatt. Book maintenance, pay rent, manage properties. Free download for iOS & Android.',
    images: ['/og-image.jpg'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Flatt',
    startupImage: '/startup-image.png',
  },
  verification: {
    google: 'add-your-google-verification-code-here',
    yandex: 'add-your-yandex-verification-code-here',
  },
  other: {
    'apple-itunes-app': 'app-id=6742777441',
    'google-play-app': 'app-id=com.flattllcfz.app',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'theme-color': '#006AFF',
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
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo_blue.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo_blue.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/flatt-full-logo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/flatt-full-logo.svg" />
        <link rel="canonical" href="https://flatt.ae" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Flatt Technologies",
              "legalName": "Flatt LLC FZ",
              "url": "https://flatt.ae",
              "logo": "https://flatt.ae/flatt-full-logo.svg",
              "description": "Flatt simplifies property management for tenants and property owners in Dubai through innovative mobile technology",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AE",
                "addressRegion": "Dubai",
                "addressLocality": "Dubai"
              },
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+971-56-311-8775",
                "contactType": "customer service",
                "availableLanguage": ["English", "Arabic"],
                "areaServed": "AE"
              }],
              "sameAs": [
                "https://apps.apple.com/us/app/flatt-ae/id6742777441",
                "https://play.google.com/store/apps/details?id=com.flattllcfz.app"
              ],
              "foundingDate": "2024",
              "industry": "Property Management Technology",
              "numberOfEmployees": "10-50"
            })
          }}
        />
        
        {/* Structured Data for Software Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Flatt Property Management",
              "operatingSystem": ["iOS", "Android"],
              "applicationCategory": "BusinessApplication",
              "description": "Property management app that simplifies rental processes for Dubai tenants and property owners",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "downloadUrl": [
                "https://apps.apple.com/us/app/flatt-ae/id6742777441",
                "https://play.google.com/store/apps/details?id=com.flattllcfz.app"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
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