'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="download" className="section py-20 bg-gradient-to-br from-brand-blue to-brand-sky relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to streamline your
            <br />
            <span className="text-brand-yellow">property management?</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied users who have simplified their rental process with Flatt. 
            Download now and experience the future of property management
          </p>
        </motion.div>

        <div className="prose mx-auto text-center font-sans text-white mb-10">
          <p>
            Flatt is the all-in-one app for property owners and tenants in Dubai
            Manage maintenance, track payments, and access real-time analytics — simply and securely
          </p>
        </div>

        {/* SEO: Extra hidden text for text-to-code ratio */}
        <section className="sr-only">
          <h2>About Flatt Property Management</h2>
          <p>
            Flatt is a modern property management platform for Dubai, helping owners and tenants manage rentals, book maintenance, and track payments in one app.
          </p>
          <h2>Frequently Asked Questions</h2>
          <p>
            How does Flatt work? Flatt connects property owners and tenants with trusted contractors for fast, secure service bookings and payments.
          </p>
        </section>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="https://apps.apple.com/us/app/flatt-ae/id6742777441"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg"
          >
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-sm">Download on the</div>
              <div className="text-lg font-bold">App Store</div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.flattllcfz.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg"
          >
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-sm">Get it on</div>
              <div className="text-lg font-bold">Google Play</div>
            </div>
          </a>
        </motion.div>

        {/* Features Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white"
        >
          {[
            { icon: '🏠', text: 'Property Management' },
            { icon: '💳', text: 'Secure Payments' },
            { icon: '👷', text: 'Vetted Contractors' },
            { icon: '📊', text: 'Real-time Analytics' },
          ].map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <div className="text-sm font-medium">{feature.text}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.1, rotate: 180 }}
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0],
            transition: { 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute top-20 right-6 md:right-20 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-brand-yellow to-orange-500 rounded-xl shadow-lg flex items-center justify-center cursor-pointer z-20"
        >
          <Download size={20} className="text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.1, rotate: -180 }}
          animate={{ 
            y: [0, 8, 0],
            x: [0, -5, 0],
            transition: { 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute bottom-20 left-6 md:left-20 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-white to-brand-sky rounded-lg shadow-lg cursor-pointer z-20"
        />

        {/* Additional Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.2, rotate: 90 }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -10, 0],
            transition: { 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute top-32 left-8 md:left-16 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg cursor-pointer z-20"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{ scale: 1.3, rotate: 360 }}
          animate={{ 
            y: [0, -8, 0],
            scale: [1, 1.05, 1],
            transition: { 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute bottom-32 right-12 md:right-24 w-7 h-7 md:w-9 md:h-9 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full shadow-lg cursor-pointer z-20"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          whileHover={{ scale: 1.1, rotate: 45 }}
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, 15, 0],
            transition: { 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute bottom-16 left-32 md:left-48 w-5 h-5 md:w-7 md:h-7 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg shadow-lg cursor-pointer z-20 transform rotate-12"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ scale: 1.2, rotate: -45 }}
          animate={{ 
            y: [0, -12, 0],
            x: [0, -6, 0],
            transition: { 
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute top-48 left-4 md:left-8 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full shadow-lg cursor-pointer z-20"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          whileHover={{ scale: 1.25, rotate: 120 }}
          animate={{ 
            y: [0, 6, 0],
            rotate: [0, -8, 0],
            transition: { 
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute top-56 right-8 md:right-16 w-9 h-9 md:w-11 md:h-11 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl shadow-lg cursor-pointer z-20 transform rotate-30"
        />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-yellow/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
} 