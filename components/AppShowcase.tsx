'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Users, Star } from 'lucide-react'
import Image from 'next/image'

export default function AppShowcase() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Bank-level encryption protects all your data and transactions'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Get responses and updates in real-time across all devices'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Verified Network',
      description: 'All contractors are thoroughly vetted and reviewed'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Premium Experience',
      description: 'Intuitive design that makes property management effortless'
    }
  ]

  return (
    <section id="showcase" className="section py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-800">Experience the</span>
              <br />
              <span className="gradient-text">future of property</span>
              <br />
              <span className="text-gray-800">management</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Flatt combines cutting-edge technology with user-friendly design to deliver 
              an unparalleled property management experience. From seamless payments to 
              instant contractor matching, everything you need is at your fingertips
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-sky rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              {[
                { text: 'Free to Start', label: 'No Setup Fees' },
                { text: 'Dubai-First', label: 'Local Expertise' },
                { text: 'Mobile-Ready', label: 'iOS & Android' }
              ].map((feature, index) => (
                <div key={feature.label} className="text-center">
                  <div className="text-lg font-bold gradient-text">{feature.text}</div>
                  <div className="text-sm text-gray-600">{feature.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone Frame */}
            <div className="relative">
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                animate={{ 
                  y: [0, -10, 0],
                  transition: { 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="absolute -top-6 -left-6 glass rounded-lg p-3 shadow-lg z-40"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">📊</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">Revenue Up</div>
                    <div className="text-xs text-gray-500">+12% this month</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1 }}
                animate={{ 
                  y: [0, 10, 0],
                  transition: { 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }
                }}
                className="absolute -bottom-6 -right-6 glass rounded-lg p-3 shadow-lg z-40"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">⭐</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">Quality First</div>
                    <div className="text-xs text-gray-500">Vetted Partners</div>
                  </div>
                </div>
              </motion.div>

              {/* Phone Container */}
              <div className="relative w-64 h-[520px] mx-auto">
                {/* Phone Shadow */}
                <div className="absolute w-64 h-[520px] bg-black/20 rounded-[2.5rem] transform translate-x-2 translate-y-2 blur-lg"></div>
                
                {/* Phone Body */}
                <div className="relative w-full h-full bg-black rounded-[2.5rem] p-1 shadow-2xl">
                  {/* Screen Bezel */}
                  <div className="w-full h-full bg-gray-900 rounded-[2.2rem] p-0.5">
                    {/* Screen */}
                    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full z-30"></div>
                      
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/5 to-transparent z-20 flex items-center justify-between px-6 pt-2">
                        <span className="text-xs font-semibold text-black">2:47</span>
                        <div className="flex items-center space-x-1">
                          {/* Signal Bars */}
                          <div className="flex items-end space-x-0.5">
                            <div className="w-0.5 h-1.5 bg-black rounded-full"></div>
                            <div className="w-0.5 h-2 bg-black rounded-full"></div>
                            <div className="w-0.5 h-2.5 bg-black rounded-full"></div>
                            <div className="w-0.5 h-2.5 bg-black rounded-full"></div>
                          </div>
                          
                          {/* WiFi Icon */}
                          <svg className="w-3 h-3 text-black ml-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.65-4.35-1.65-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.86 9.14 5 13z"/>
                          </svg>
                          
                          {/* Battery */}
                          <div className="flex items-center ml-1">
                            <div className="w-4 h-2 border border-black rounded-sm flex items-center">
                              <div className="w-2.5 h-1 bg-green-500 rounded-sm mx-0.5"></div>
                            </div>
                            <div className="w-0.5 h-1 bg-black rounded-r ml-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="pt-12 pb-4 px-4 h-full flex flex-col bg-gray-50">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-brand-blue rounded-lg mr-3 flex items-center justify-center">
                              <Image
                                src="/flatt-full-fogo.webp"
                                alt="Flatt Logo"
                                width={20}
                                height={20}
                                sizes="(min-width:768px) 20px, 100vw"
                                className="rounded-sm"
                              />
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-gray-800">Analytics</h3>
                              <p className="text-xs text-gray-500">November 2025</p>
                            </div>
                          </div>
                          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-gray-600 text-xs">⚙️</span>
                          </div>
                        </div>
                        
                        {/* Stats Cards */}
                        <div className="flex-1 space-y-3">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-gray-500">Monthly Revenue</span>
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 text-xs">↗</span>
                              </div>
                            </div>
                            <div className="text-lg font-bold text-gray-800">48,562.50 AED</div>
                            <p className="text-xs text-green-600">+12% from last month</p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs text-gray-500">Active Requests</span>
                              <span className="text-brand-blue text-xs font-medium bg-brand-blue/10 px-2 py-1 rounded-full">
                                3 Pending
                              </span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-700">Plumbing Fix</span>
                                <span className="text-xs text-orange-600">In Progress</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-700">AC Service</span>
                                <span className="text-xs text-green-600">Completed</span>
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.6 }}
                            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs text-gray-500">Top Contractors</span>
                              <span className="text-xs text-gray-400">View All</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="flex -space-x-2">
                                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                                  <span className="text-white text-xs">A</span>
                                </div>
                                <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                  <span className="text-white text-xs">M</span>
                                </div>
                                <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                                  <span className="text-white text-xs">S</span>
                                </div>
                              </div>
                              <div>
                                <p className="text-xs font-medium text-gray-700">15 Active</p>
                                <p className="text-xs text-gray-500">All Verified</p>
                              </div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="mt-4 bg-white rounded-xl p-2 shadow-sm border border-gray-100">
                          <div className="flex justify-around items-center">
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                                <span className="text-gray-400 text-xs">🏠</span>
                              </div>
                              <span className="text-gray-400 text-xs">Home</span>
                            </div>
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-6 h-6 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                                <span className="text-brand-blue text-xs">📊</span>
                              </div>
                              <span className="text-brand-blue text-xs">Reports</span>
                            </div>
                            <div className="flex flex-col items-center space-y-1">
                              <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                                <span className="text-gray-400 text-xs">💳</span>
                              </div>
                              <span className="text-gray-400 text-xs">Pay</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-black/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 