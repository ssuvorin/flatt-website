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
  const pathname = typeof window !== 'undefined' ? window.location.href : ''
  return (
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
  )
} 