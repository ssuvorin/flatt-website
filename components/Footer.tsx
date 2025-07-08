'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Share2, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Flatt', href: '#' },
      { name: 'How Flatt Works', href: '#how-it-works' },
      { name: 'App Features', href: '#features' },
      { name: 'Business Partners', href: '/partners' },
      { name: 'User Reviews', href: '#reviews' },
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
      { name: 'WhatsApp Support', href: 'https://wa.me/971563118775' },
      { name: 'Report Issue', href: '#' },
      { name: 'Service Status', href: '#' },
    ],
  }

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/flatt-ae', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/flatt_ae', icon: '🐦' },
    { name: 'Instagram', href: 'https://instagram.com/flatt.ae', icon: '📸' },
    { name: 'Facebook', href: 'https://facebook.com/flatt.ae', icon: '📘' },
  ]

  const shareUrl = 'https://flatt.ae'
  const shareText = 'Check out Flatt - Property Management Made Simple in Dubai!'

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
    }
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400')
  }

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
        {/* Social Sharing Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-2 flex items-center space-x-2">
                  <Share2 size={20} />
                  <span>Share Flatt with Friends</span>
                </h3>
                <p className="text-gray-400 text-sm">Help others discover simplified property management</p>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors text-sm"
                  aria-label="Share on WhatsApp"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors text-sm"
                  aria-label="Share on Twitter"
                >
                  <span>🐦</span>
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors text-sm"
                  aria-label="Share on Facebook"
                >
                  <span>📘</span>
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors text-sm"
                  aria-label="Share on LinkedIn"
                >
                  <span>💼</span>
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>

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
                <Image
                  src="/flatt-full-fogo.png"
                  alt="Flatt Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-2xl font-bold gradient-text">flatt</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Flatt is a team of professionals focused on making <strong>property management 
                simple and efficient</strong> using technology. Streamline your rental process 
                with our mobile-first platform designed for Dubai&apos;s property market.
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
                <h4 className="text-lg font-semibold mb-2">Get Flatt Mobile App</h4>
                <p className="text-gray-400 text-sm">Available for free on iOS and Android</p>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://apps.apple.com/us/app/flatt-ae/id6742777441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                  aria-label="Download Flatt Property Management on App Store"
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
                  aria-label="Get Flatt Property Management on Google Play"
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
                <p>&copy; 2025 Flatt Technologies. All rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-6">
                <span>Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-sky transition-colors"
                    title={`Follow Flatt on ${social.name}`}
                    aria-label={`Follow Flatt on ${social.name}`}
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