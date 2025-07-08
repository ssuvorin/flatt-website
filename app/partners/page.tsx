'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, TrendingUp, Shield, Mail, Phone, MapPin, ArrowRight, Star, Globe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Partners() {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Grow Your Business",
      description: "Expand your customer base and increase revenue through our platform with thousands of active users"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Platform",
      description: "Join a reliable and secure platform that ensures quality standards and customer satisfaction"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Network",
      description: "Connect with other service providers and build valuable business relationships"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Market Reach",
      description: "Access property owners and tenants across Dubai with our comprehensive market coverage"
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Fill out our partnership application with your business details and service offerings"
    },
    {
      number: "02", 
      title: "Verification Process",
      description: "Our team reviews your credentials, licenses, and service quality standards"
    },
    {
      number: "03",
      title: "Onboarding",
      description: "Complete training on our platform and tools to ensure service excellence"
    },
    {
      number: "04",
      title: "Start Earning",
      description: "Begin receiving service requests and growing your business with Flatt"
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Navbar />
      
      {/* Hero Section */}
      <section className="section relative overflow-hidden bg-hero-gradient pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-sky rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gray-800">Partner with</span>
              <br />
              <span className="gradient-text">flatt</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Join our network of trusted service providers and grow your business 
              while helping property owners and tenants across Dubai
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partners@flatt.ae?subject=Partnership Inquiry - Flatt&body=Hello Flatt Team,%0D%0A%0D%0AI am interested in becoming a partner and would like to learn more about the opportunities available.%0D%0A%0D%0AThank you!"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-yellow-500 hover:text-blue-600 hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                <span>Become a Partner</span>
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 hover:-translate-y-0.5"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Learn More</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5" style={{ pointerEvents: 'none' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: -100, opacity: 1 }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: 'linear',
              }}
              className="absolute w-4 h-4 bg-brand-sky"
              style={{
                left: `${Math.random() * 100}%`,
                transform: 'rotate(45deg)',
                pointerEvents: 'none'
              }}
            />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Partner</span> with Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a growing ecosystem of service providers and unlock new opportunities for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-sky rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Simple</span> Onboarding Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with Flatt is easy. Follow these steps to become a verified partner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative h-full"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col min-h-[280px]">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-sky rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4 flex-shrink-0">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 flex-shrink-0">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Services We&apos;re Looking For
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our platform if you provide any of these essential property services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Property Maintenance",
              "Cleaning Services", 
              "Electrical Work",
              "Plumbing Services",
              "HVAC Services",
              "Painting & Renovation",
              "Landscaping",
              "Security Services",
              "Moving Services"
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-3 h-3 bg-gradient-to-br from-brand-blue to-brand-sky rounded-full"></div>
                <span className="text-lg font-medium text-gray-800">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-sky relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of service providers who are already growing their business with Flatt
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-lg mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <span className="text-xl font-semibold text-white">Get in Touch</span>
              </div>
              
              <div className="space-y-4 text-white/90">
                <div className="flex items-center justify-center space-x-3">
                  <Mail size={18} />
                  <a 
                    href="mailto:partners@flatt.ae?subject=Partnership Inquiry - Flatt&body=Hello Flatt Team,%0D%0A%0D%0AI am interested in becoming a partner and would like to learn more about the opportunities available.%0D%0A%0D%0AThank you!" 
                    className="hover:text-yellow-500 transition-colors"
                  >
                    partners@flatt.ae
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone size={18} />
                  <a href="https://wa.me/971563118775" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">
                    +971 56 311 87 75 (WhatsApp)
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin size={18} />
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>
              
              <div className="mt-8">
                <a
                  href="mailto:partners@flatt.ae?subject=Partnership Inquiry - Flatt&body=Hello Flatt Team,%0D%0A%0D%0AI am interested in becoming a partner and would like to learn more about the opportunities available.%0D%0A%0D%0AThank you!"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-500 hover:text-blue-600 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail size={20} />
                  <span>Send Partnership Inquiry</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </section>

      <Footer />
    </motion.main>
  )
} 