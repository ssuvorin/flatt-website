'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      
      setPrevScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollY])

  const navItems = [
    { name: 'Features', href: '/#features' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Showcase', href: '/#showcase' },
    { name: 'Partners', href: '/partners' },
    { name: 'FAQ', href: '/faq' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-4 py-4',
        'bg-white/80 backdrop-blur-md border-b border-white/20',
        'transition-all duration-300'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center space-x-2"
        >
          <a href="/" className="flex items-center space-x-2 cursor-pointer" style={{ pointerEvents: 'auto' }}>
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src="/flatt-full-fogo.webp"
                alt="Flatt Logo"
                width={32}
                height={32}
                sizes="(min-width:768px) 32px, 100vw"
                className="rounded-lg"
              />
            </div>
            <span className="text-xl font-bold gradient-text">flatt</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors animate-underline cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/#download"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-yellow-500 hover:text-blue-600 hover:scale-105 shadow-lg cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            <Download size={16} />
            <span>Download</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:text-brand-blue transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 pb-4 border-t border-white/20"
        >
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 cursor-pointer"
                style={{ pointerEvents: 'auto' }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/#download"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-yellow-500 hover:text-blue-600 mt-4 cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              <Download size={16} />
              <span>Download</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
} 