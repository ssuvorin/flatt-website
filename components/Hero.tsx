'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Smartphone } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="section relative overflow-hidden bg-hero-gradient pt-20">
      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">flatt</span>
              <br />
              <span className="text-gray-800">simplifies property</span>
              <br />
              <span className="text-gray-800">management</span>
              <br />
              <span className="text-brand-blue">for everyone</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
            >
              Manage properties, book services, and pay securely all in one mobile app. 
              Perfect for tenants and property owners in Dubai
            </motion.p>

            {/* Store Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="https://apps.apple.com/us/app/flatt-ae/id6742777441"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.flattllcfz.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex items-center space-x-2 text-gray-500"
            >
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown size={16} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end w-full"
          >
            <div className="relative flex justify-center w-full lg:max-w-sm">
              {/* Phone Mockup */}
              <div className="relative">
                {/* Phone Shadow */}
                <div className="absolute w-64 h-[520px] bg-black/20 rounded-[2.5rem] transform translate-x-2 translate-y-2 blur-lg"></div>
                
                {/* Phone Container */}
                <div className="relative w-64 h-[520px] bg-black rounded-[2.5rem] p-1 shadow-2xl mx-auto">
                  {/* Screen Bezel */}
                  <div className="w-full h-full bg-gray-900 rounded-[2.2rem] p-0.5">
                    {/* Screen */}
                    <div className="w-full h-full bg-gradient-to-b from-brand-blue to-brand-sky rounded-[2rem] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full z-30"></div>
                      
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/10 to-transparent z-20 flex items-center justify-between px-6 pt-2">
                        <span className="text-xs font-semibold text-white">9:41</span>
                        <div className="flex items-center space-x-1">
                          {/* Signal Bars */}
                          <div className="flex items-end space-x-0.5">
                            <div className="w-0.5 h-1.5 bg-white rounded-full"></div>
                            <div className="w-0.5 h-2 bg-white rounded-full"></div>
                            <div className="w-0.5 h-2.5 bg-white rounded-full"></div>
                            <div className="w-0.5 h-2.5 bg-white rounded-full"></div>
                          </div>
                          
                          {/* WiFi Icon */}
                          <svg className="w-3 h-3 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.65-4.35-1.65-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.86 9.14 5 13z"/>
                          </svg>
                          
                          {/* Battery */}
                          <div className="flex items-center ml-1">
                            <div className="w-4 h-2 border border-white rounded-sm flex items-center">
                              <div className="w-2.5 h-1 bg-white rounded-sm mx-0.5"></div>
                            </div>
                            <div className="w-0.5 h-1 bg-white rounded-r ml-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="pt-12 pb-4 px-4 h-full flex flex-col">
                        {/* Header */}
                        <div className="text-center mb-6">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl mx-auto mb-3 flex items-center justify-center">
                            <Image
                              src="/flatt-full-fogo.png"
                              alt="Flatt Logo"
                              width={28}
                              height={28}
                              className="rounded-lg"
                            />
                          </div>
                          <h3 className="text-lg font-bold text-white">flatt</h3>
                          <p className="text-white/80 text-xs">Property Management</p>
                        </div>
                        
                        {/* Property Cards */}
                        <div className="flex-1 space-y-3">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="bg-white/15 backdrop-blur rounded-xl p-4"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-white font-semibold text-sm">Forte Tower 1</h4>
                              <span className="text-brand-yellow text-xs font-medium bg-brand-yellow/20 px-2 py-1 rounded-full">
                                Rented
                              </span>
                            </div>
                            <p className="text-white/70 text-xs mb-2">88, Al Tahani street</p>
                            <div className="text-white font-bold text-lg">16,528.26 AED</div>
                            <p className="text-white/60 text-xs">per month</p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            className="bg-white/15 backdrop-blur rounded-xl p-4"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-white font-semibold text-sm">Service Request</h4>
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                </svg>
                              </div>
                            </div>
                            <p className="text-white/70 text-xs mb-1">AC Maintenance</p>
                            <p className="text-white/60 text-xs">Scheduled for Tomorrow 2PM</p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.6 }}
                            className="bg-white/15 backdrop-blur rounded-xl p-4"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-white font-semibold text-sm">Quick Actions</h4>
                                <p className="text-white/60 text-xs">Tap to get started</p>
                              </div>
                              <div className="flex space-x-2">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                  <span className="text-white text-lg">🔧</span>
                                </div>
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                  <span className="text-white text-lg">🧹</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="mt-4 bg-white/10 backdrop-blur rounded-xl p-2">
                          <div className="flex justify-around items-center">
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-6 h-6 bg-white/30 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs">🏠</span>
                              </div>
                              <span className="text-white/80 text-xs">Home</span>
                            </div>
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                                <span className="text-white/60 text-xs">💳</span>
                              </div>
                              <span className="text-white/60 text-xs">Pay</span>
                            </div>
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                                <span className="text-white/60 text-xs">📊</span>
                              </div>
                              <span className="text-white/60 text-xs">Reports</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-8, 8, -8],
                  rotate: [-3, 3, -3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-brand-yellow to-orange-500 rounded-xl shadow-lg flex items-center justify-center"
              >
                <Download size={20} className="text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [8, -8, 8],
                  rotate: [3, -3, 3]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-4 w-10 h-10 bg-gradient-to-br from-brand-sky to-brand-blue rounded-lg shadow-lg"
              />

              <motion.div
                animate={{ 
                  y: [-4, 12, -4],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 -left-6 w-6 h-6 bg-brand-blue rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-sky/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-yellow/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
} 