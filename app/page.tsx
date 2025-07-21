'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import AppShowcase from '@/components/AppShowcase'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Share2 } from "lucide-react"
import { usePathname } from "next/navigation"

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
      {/* Share Drawer */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="fixed bottom-6 right-6 z-50 bg-brand-yellow text-gray-900 p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all flex items-center">
            <Share2 className="w-6 h-6" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-xs mx-auto text-center">
          <h3 className="text-lg font-bold mb-4">Share Flatt</h3>
          <div className="flex flex-col gap-3">
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pathname)}`} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">Share on Twitter</a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pathname)}`} target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">Share on Facebook</a>
            <a href={`https://wa.me/?text=${encodeURIComponent(pathname)}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition">Share on WhatsApp</a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pathname)}`} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-950 transition">Share on LinkedIn</a>
          </div>
        </DialogContent>
      </Dialog>
    </motion.main>
  )
} 