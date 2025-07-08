'use client'

import { motion } from 'framer-motion'
import { UserCheck, ClipboardList, Bell, Star } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: UserCheck,
      title: 'Sign Up & Verify',
      description: 'Create your account and verify your identity. Property owners can upload title deeds for full analytics access',
      color: 'from-brand-blue to-brand-sky',
    },
    {
      icon: ClipboardList,
      title: 'Request & Compare Offers',
      description: 'Submit your service request and receive multiple quotes from vetted contractors. Compare prices, ratings, and available schedules',
      color: 'from-brand-sky to-brand-yellow',
    },
    {
      icon: Bell,
      title: 'Real-time Updates',
      description: 'Get notifications about service progress, receive before/after photos, and stay informed throughout',
      color: 'from-brand-yellow to-orange-500',
    },
    {
      icon: Star,
      title: 'Rate & Review',
      description: 'Share your experience and help others make informed decisions. Build a trusted community together',
      color: 'from-orange-500 to-brand-blue',
    },
  ]

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: 'easeInOut', delay: 0.5 },
    },
  }

  return (
    <section id="how-it-works" className="section py-20 bg-gradient-to-b from-white to-brand-gray">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-800">How</span> <span className="gradient-text">Flatt</span> <span className="text-gray-800">works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and efficient. Get started in minutes and experience 
            the future of property management
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full">
            <svg width="4" height="100%" className="text-brand-blue">
              <motion.line
                x1="2"
                y1="0"
                x2="2"
                y2="100%"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              />
            </svg>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12 lg:space-y-24"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <step.icon size={32} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                    {step.title}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Illustration placeholder */}
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-full opacity-20`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { text: 'Easy Setup', label: 'Quick Onboarding' },
            { text: 'Secure Payments', label: 'Stripe Protected' },
            { text: 'Quality Focus', label: 'Vetted Contractors' },
            { text: '24/7', label: 'Customer Support' },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-lg p-4"
            >
              <div className="text-lg lg:text-xl font-bold gradient-text mb-1">
                {feature.text}
              </div>
              <div className="text-sm text-gray-600">{feature.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 