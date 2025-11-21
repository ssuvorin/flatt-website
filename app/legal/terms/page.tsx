'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TermsOfUse() {
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
              Terms of Use
            </h1>
            <p className="text-gray-600">
              Effective Date: December 2025
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <p className="text-gray-600 leading-relaxed">
                This Agreement outlines the terms and conditions governing access to and use of the Flatt.ae App and Website, including all content, features, and services offered on or through www.flatt.ae or the Flatt.ae App, operated by Flatt Technologies (hereinafter referred to as "Flatt.ae," "we," or "us").
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                By using the Flatt.ae Platform, you ("Customer" or "You") enter into this Agreement with Flatt.ae (individually referred to as a "Party" and collectively as the "Parties"). This Agreement allows you to engage with service professionals or entities that provide independent services (collectively referred to as "Professional/s") through the platform. If you do not agree to these terms, you must discontinue using the Flatt.ae Platform immediately.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
                <p className="text-red-800 font-semibold">
                  PLEASE READ THIS AGREEMENT CAREFULLY.
                </p>
              </div>
            </section>

            <hr className="border-gray-300" />

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">PART 1: GENERAL</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Agreement, along with the Privacy Policy, constitutes a legally binding contract between Flatt.ae and the Customer. It sets forth the Customer's rights and obligations regarding:
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>The Flatt.ae Platform, which includes classified advertisements, forums, email functions, internet links, content, and services accessible via www.flatt.ae (collectively referred to as the "Website").</li>
                    <li>Online Transactions, which occur between Customers and Professionals offering services via the Flatt.ae Platform (referred to as "Services").</li>
                  </ol>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Flatt.ae acts as a digital marketplace facilitating interactions between Customers and Professionals. By accessing, registering on, or using the Website, and by confirming your agreement through the "I have read and agree to the terms of use" option, you certify that:
                </p>

                <div className="bg-green-50 p-4 rounded-lg">
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>You are a Customer.</li>
                    <li>You have the authority to enter into this Agreement.</li>
                    <li>By confirming a booking, you authorize the transfer of payment for the Professional Services requested through the Flatt.ae App or the Website.</li>
                    <li>You agree to comply with all terms and conditions outlined in this Agreement.</li>
                  </ol>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">PART 2: GENERAL TERMS</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Flatt.ae{"'"}s Role and Use of Services</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">1.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Flatt.ae enables Customers to avail services on the Flatt.ae App and Website. Flatt.ae acts as a technology service provider and is not responsible for Professional Services, which are provided by independent third-party contractors.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">2.</span>
                      <p className="text-gray-600 leading-relaxed">
                        The Customer acknowledges that all contractual arrangements fulfilled at the completion or delivery of services are solely between the Customer and the Professional.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Account Creation</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">1.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Customers must register an account on the Flatt.ae Platform and provide valid information as required in Exhibit B.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">2.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Customers are solely responsible for maintaining the confidentiality of their login credentials.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">3.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Flatt.ae reserves the right to decline any registration at its sole discretion and to verify customer identity.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">4.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Customers must use the Flatt.ae Platform in accordance with this Agreement and all applicable laws.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Service Requests</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">1.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Flatt.ae connects Customers with Professionals who provide requested services.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">2.</span>
                      <div className="text-gray-600 leading-relaxed">
                        <p className="mb-2">Once a service request is made:</p>
                        <ul className="space-y-1 ml-4">
                          <li>• Flatt.ae assigns Professionals based on availability.</li>
                          <li>• The request is subject to acceptance by a Professional.</li>
                          <li>• If no Professional is available, Flatt.ae will notify the Customer.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">3.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Customers may cancel a service request through the Flatt.ae App or by contacting customer care.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">4.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Refunds are governed by Flatt.ae's cancellation policy.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Payment Terms</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">1.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Customers authorize Flatt.ae to collect payments on behalf of Professionals.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">2.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Flatt.ae may adjust pricing and fees at its sole discretion.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">3.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Customers agree that all transactions and disputes will be resolved in accordance with Flatt.ae's policies.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Confidentiality & Privacy</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">1.</span>
                      <p className="text-gray-600 leading-relaxed">
                        The Parties must keep confidential all information shared under this Agreement.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">2.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Flatt.ae collects and processes customer data in compliance with its{' '}
                        <Link href="/legal/privacy" className="text-brand-blue hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Intellectual Property Rights</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">1.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Flatt.ae retains all rights to its platform, technology, and intellectual property.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">2.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Customers may not copy, modify, distribute, or reverse-engineer any part of the Flatt.ae Platform.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-blue font-semibold mr-2">3.</span>
                      <p className="text-gray-600 leading-relaxed">
                        Customers are responsible for any content they post or share via the Flatt.ae Platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">PART 3: LIABILITY & DISPUTE RESOLUTION</h2>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <div className="flex items-start">
                    <span className="text-yellow-700 font-semibold mr-2">1.</span>
                    <p className="text-yellow-800 leading-relaxed">
                      Flatt.ae is not liable for the quality, safety, or legality of services provided by Professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-brand-blue font-semibold mr-2">2.</span>
                  <p className="text-gray-600 leading-relaxed">
                    Customers assume responsibility for interactions with Professionals and service-related risks.
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-brand-blue font-semibold mr-2">3.</span>
                  <p className="text-gray-600 leading-relaxed">
                    Disputes between Customers and Professionals must be resolved directly between the parties. Flatt.ae may assist but is not liable for outcomes.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <div className="flex items-start">
                    <span className="text-red-700 font-semibold mr-2">4.</span>
                    <p className="text-red-800 leading-relaxed">
                      <strong>Governing law:</strong> This Agreement shall be governed by the laws of the United Arab Emirates. Disputes will be resolved exclusively in the courts of Dubai.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">PART 4: TERMINATION & AMENDMENTS</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-brand-blue font-semibold mr-2">1.</span>
                  <p className="text-gray-600 leading-relaxed">
                    Flatt.ae may terminate this Agreement at any time for violations of terms.
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-brand-blue font-semibold mr-2">2.</span>
                  <p className="text-gray-600 leading-relaxed">
                    Flatt.ae may modify these terms without prior notice, and continued use constitutes acceptance.
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-brand-blue font-semibold mr-2">3.</span>
                  <p className="text-gray-600 leading-relaxed">
                    Customers may terminate their accounts by contacting Flatt.ae support.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                For questions about these Terms of Use or to exercise your rights, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Email:</strong>{' '}
                  {(() => { const email = 'team' + '@' + 'flatt.ae'; return (
                    <a href={`mailto:${email}`} className="text-brand-blue hover:underline">{email}</a>
                  )})()}
                </p>
                <p>
                  <strong>WhatsApp Support:</strong>{' '}
                  <a href="https://wa.me/971563118775" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                    +971 56 311 87 75
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+971564046554" className="text-brand-blue hover:underline">
                    +971 56 404 65 54
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> Dubai, United Arab Emirates
                </p>
              </div>
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