'use client'

import { motion } from 'framer-motion'
import { Shield, CreditCard, Users, Home, FileText, BarChart3 } from 'lucide-react'
import { Tilt } from 'react-tilt'

export default function Features() {
  const features = [
    {
      icon: Home,
      title: 'Remote Property Management',
      description: 'Manage rent, documents, maintenance & cleaning from anywhere. Complete control at your fingertips',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: CreditCard,
      title: 'Secure Online Payments',
      description: 'Schedule cleaning or repairs and pay securely via Stripe. Safe, fast, and transparent transactions',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Users,
      title: 'Vetted Contractors',
      description: 'Browse profiles, ratings & reviews before booking. Only qualified professionals on our platform',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Complete Transparency',
      description: "Before/after photos & detailed reports. Know exactly what you're paying for every time",
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Store and manage all property documents digitally. Easy access to contracts, invoices, and reports',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: BarChart3,
      title: 'Market Analytics',
      description: 'Monthly reports & real-time data insights. Make informed decisions with comprehensive analytics',
      color: 'from-pink-500 to-pink-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
    <section id="features" className="section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Everything you need</span>
            <br />
            <span className="text-gray-800">for property management</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flatt combines powerful tools with an intuitive interface to make property 
            management simple and efficient for everyone
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Tilt
                options={{
                  max: 5,
                  speed: 400,
                  glare: true,
                  'max-glare': 0.1,
                }}
                className="h-full"
              >
                <div className="glass rounded-xl p-6 h-full hover:shadow-brand-lg transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-500">
            <span>✓ Available in English</span>
            <span>✓ Mobile-first design</span>
            <span>✓ Dubai-focused</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 