'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Features', href: '#features' },
      { name: 'Reviews', href: '#reviews' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
      { name: 'Delete Account', href: '/legal/delete-account' },
      { name: 'FAQ', href: '/faq' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: 'https://wa.me/971563118775' },
      { name: 'Report Issue', href: '#' },
      { name: 'Status', href: '#' },
    ],
  }

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Instagram', href: '#', icon: '📸' },
    { name: 'Facebook', href: '#', icon: '📘' },
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Cubes */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: -100, opacity: 1 }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: 'linear',
            }}
            className="absolute w-4 h-4 bg-brand-sky"
            style={{
              left: `${Math.random() * 100}%`,
              transform: 'rotate(45deg)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-sky rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white rounded-sm" />
                </div>
                <span className="text-2xl font-bold gradient-text">flatt</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Flatt is a team of professionals focused on making property management 
                simple and efficient using technology. Streamline your rental process 
                with our mobile-first platform
              </p>
              
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} />
                  <span>Dubai, United Arab Emirates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} />
                  <a href="mailto:team@flatt.ae" className="hover:text-brand-sky transition-colors">
                    team@flatt.ae
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} />
                  <a href="https://wa.me/971563118775" target="_blank" rel="noopener noreferrer" className="hover:text-brand-sky transition-colors">
                    +971 56 311 87 75 (WhatsApp)
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="font-semibold text-lg mb-4 capitalize">
                  {category === 'company' ? 'Company' : category === 'legal' ? 'Legal' : 'Support'}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith('http') || link.href.startsWith('#') ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-400 hover:text-brand-sky transition-colors text-sm flex items-center space-x-1 group"
                        >
                          <span>{link.name}</span>
                          {link.href.startsWith('http') && (
                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-brand-sky transition-colors text-sm flex items-center space-x-1 group"
                        >
                          <span>{link.name}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h4 className="text-lg font-semibold mb-2">Download Flatt Today</h4>
                <p className="text-gray-400 text-sm">Available on iOS and Android</p>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://apps.apple.com/us/app/flatt-ae/id6742777441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <span className="text-2xl">📱</span>
                  <div className="text-sm">
                    <div>Download on</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
                
                <a
                  href="https://play.google.com/store/apps/details?id=com.flattllcfz.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <span className="text-2xl">🤖</span>
                  <div className="text-sm">
                    <div>Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2025 Flatt. All rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-6">
                <span>Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="hover:text-brand-sky transition-colors"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 