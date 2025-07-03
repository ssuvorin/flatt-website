'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Smartphone, User, Scroll, Trash2, AlertTriangle, Phone, Mail } from 'lucide-react'

export default function DeleteAccount() {
  const steps = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Open the Flatt app",
      description: "Open the Flatt app on your phone"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Tap the Profile icon",
      description: "Tap the Profile icon at the bottom of the screen"
    },
    {
      icon: <Scroll className="w-8 h-8" />,
      title: "Scroll down",
      description: "Go to scroll down in your profile settings"
    },
    {
      icon: <Trash2 className="w-8 h-8" />,
      title: "Find Delete Account",
      description: "Find and select Delete Account"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Choose reason",
      description: "Confirm your choice and choose reason for deletion"
    },
    {
      icon: <Trash2 className="w-8 h-8" />,
      title: "Permanent removal",
      description: "Once confirmed, your account and all associated data will be permanently removed"
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-gray max-w-none"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How to Delete Your Flatt Account
            </h1>
            <p className="text-gray-600">
              Follow these simple steps to permanently delete your account
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <p className="text-gray-600 leading-relaxed mb-8">
                To delete your Flatt account, follow these steps in the mobile app:
              </p>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-sky rounded-lg flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-brand-blue font-bold text-lg">
                          {index + 1}.
                        </span>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg"
              >
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold text-red-800 mb-4">Important Notes</h2>
                    
                    <div className="space-y-3 text-red-700">
                      <div className="flex items-start space-x-2">
                        <span className="text-red-600 font-bold">•</span>
                        <p className="leading-relaxed">
                          <strong>Permanent deletion:</strong> After deletion, all of your data (filled forms, chat history, favorites) cannot be recovered
                        </p>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="text-red-600 font-bold">•</span>
                        <p className="leading-relaxed">
                          <strong>Cannot log in?</strong> If you cannot log in to the app, please contact our support team via WhatsApp for assistance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            <section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Need Help?</span>
                </h3>
                
                <p className="text-blue-700 leading-relaxed mb-4">
                  If you're having trouble deleting your account or need assistance with the process, our support team is here to help via WhatsApp:
                </p>
                
                <div className="space-y-3 text-blue-700">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <div>
                      <strong>WhatsApp:</strong>{' '}
                      <a href="https://wa.me/971563118775" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                        +971 56 311 87 75
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <div>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:+971564046554" className="text-blue-600 hover:underline font-medium">
                        +971 56 404 65 54
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            <section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">What Data Gets Deleted?</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Personal Information:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Profile details and settings</li>
                      <li>• Contact information</li>
                      <li>• Uploaded documents</li>
                      <li>• Payment information</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">App Data:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Service request history</li>
                      <li>• Chat messages</li>
                      <li>• Saved favorites</li>
                      <li>• Transaction records</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> Some data may be retained for legal compliance purposes as outlined in our{' '}
                    <Link href="/legal/privacy" className="text-yellow-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </motion.div>
            </section>

            <section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-center bg-gradient-to-r from-brand-blue to-brand-sky p-8 rounded-lg text-white"
              >
                <h3 className="text-xl font-semibold mb-3">
                  Considering Alternatives?
                </h3>
                <p className="mb-6 opacity-90">
                  Before deleting your account, you might want to explore our other options or contact support via WhatsApp to resolve any issues
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    href="/faq" 
                    className="px-6 py-3 bg-white text-brand-blue rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Check FAQ
                  </Link>
                  <a 
                    href="https://wa.me/971563118775" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-brand-blue transition-colors"
                  >
                    Contact Support
                  </a>
                </div>
              </motion.div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link href="/" className="button-primary inline-block">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 