'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Metadata } from 'next'

const faqs = [
  {
    question: 'What is Flatt and how does it work?',
    answer: 'Flatt is a mobile app that streamlines property management for tenants and property owners in Dubai. It connects users with vetted contractors for cleaning, maintenance, and repairs, while providing secure payment processing and real-time updates.'
  },
  {
    question: 'How much does Flatt cost to use?',
    answer: 'Flatt is free to download and use. We charge a small service fee on completed transactions to maintain our platform and ensure quality service from our contractor network.'
  },
  {
    question: 'Are all contractors on Flatt verified?',
    answer: 'Yes, all contractors on our platform go through a thorough vetting process including background checks, skill verification, and customer review analysis. Only qualified professionals are approved to join our network.'
  },
  {
    question: 'What types of services can I book through Flatt?',
    answer: 'You can book various services including deep cleaning, regular maintenance, AC repairs, plumbing, electrical work, painting, and general property maintenance. Our contractor network covers all essential property management needs.'
  },
  {
    question: 'How do payments work on Flatt?',
    answer: 'Payments are processed securely through Stripe. You can pay by credit card, debit card, or other supported payment methods. Payment is only released to contractors after service completion and your approval.'
  },
  {
    question: 'Can property owners track multiple properties?',
    answer: 'Yes, property owners can manage multiple properties from a single account. After uploading your title deeds for verification, you\'ll get access to comprehensive analytics and management tools for all your properties.'
  },
  {
    question: 'What happens if I\'m not satisfied with a service?',
    answer: 'We have a satisfaction guarantee. If you\'re not happy with the service, contact our support team via WhatsApp immediately. We\'ll work with you and the contractor to resolve the issue, and if necessary, arrange for the work to be redone at no extra cost.'
  },
  {
    question: 'Is Flatt available outside of Dubai?',
    answer: 'Currently, Flatt is focused on the Dubai market to ensure the highest quality service. We\'re planning to expand to other UAE emirates in the future. Follow our updates for expansion announcements.'
  },
  {
    question: 'How do I rate and review contractors?',
    answer: 'After each completed service, you\'ll receive a prompt to rate your experience and leave a review. This helps maintain service quality and assists other users in making informed decisions when choosing contractors.'
  },
  {
    question: 'Can I schedule recurring services?',
    answer: 'Yes, you can schedule recurring services like weekly cleaning or monthly maintenance checks. This feature is perfect for property owners who want consistent upkeep of their properties.'
  }
]

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-xl overflow-hidden mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
      >
        <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
        {isOpen ? (
          <ChevronUp size={20} className="text-brand-blue flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-brand-blue flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4"
        >
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-gray pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-800">Frequently Asked</span>
            <br />
            <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Flatt, our services, and how we can help 
            streamline your property management needs
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center glass rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help via WhatsApp. Get in touch and we'll respond within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971563118775"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Contact Support
            </a>
            <a
              href="/"
              className="button-secondary"
            >
              Back to Home
            </a>
          </div>
        </motion.div>
      </div>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  )
} 