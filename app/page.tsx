'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import AppShowcase from '@/components/AppShowcase'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Flatt Property Management",
    "description": "Flatt simplifies property management for tenants and property owners in Dubai",
    "url": "https://flatt.ae",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://flatt.ae/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://flatt.ae"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Property Management App",
        "item": "https://flatt.ae/#features"
      }
    ]
  }

  return (
    <>
      {/* Structured Data for Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <AppShowcase />
        <CTA />
        <Footer />
      </motion.main>
    </>
  )
} 