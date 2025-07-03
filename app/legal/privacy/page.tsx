'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
              Flatt.ae Privacy Policy
            </h1>
            <p className="text-gray-600">
              Effective Date: December 2025
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Flatt.ae ("Flatt", "we", "us" or "our") is committed to protecting your personal data. This Privacy Policy describes how the Flatt mobile application (available on iOS and Android) collects, uses, and shares your information. We adhere to applicable data protection laws in the United Arab Emirates, including the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021, "PDPL"), as well as international standards such as the EU General Data Protection Regulation ("GDPR"). By using Flatt, you agree to the practices described in this Policy. If you do not agree, please discontinue use of the app. We encourage you to read this Policy carefully to understand our practices and your rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We only collect personal data that is necessary to provide our services. Below are the types of information we collect and process:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Personal Identifiers</h3>
                  <p className="text-gray-600 leading-relaxed">
                    When you create an account or use Flatt, we collect information such as your name, email address, and mobile phone number. Your mobile number is used for login authentication and to identify your account.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Location Data</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With your permission, we collect your device's location information to enable location-based features (for example, showing nearby services or confirming property locations). You can choose to allow or deny location services via your device settings at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Property Documents</h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you are a property owner or tenant user, you may upload property-related documents (e.g. title deeds, lease or rental agreements) to the app. These documents may contain personal information. We store these documents for your use in managing your property and to facilitate any services you request (such as sharing with an authorized party when necessary).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Contractor Documents</h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you register as a contractor or service provider on Flatt, you may upload business documents like your trade license or Tax Registration Certificate (TRC). We collect and store these documents to verify your credentials and compliance. We treat these documents as confidential business/personal data. Certain details (such as your business name or license number) may be shown to users to indicate that you are a verified contractor, but the documents themselves are not shared with others except as needed for verification or legal compliance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Transactional Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    When you schedule and pay for property services through Flatt, we record transaction details (such as the service booked, date and amount paid). <strong>Note:</strong> We do not collect or store your payment card details or bank account information. Payments are processed securely by a licensed third-party payment gateway (e.g. Stripe), so payment information like credit card numbers never reaches our servers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Device and Usage Data</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may collect limited technical data about your use of the app for maintenance and improvement purposes. This includes information like your device model, operating system version, unique device identifiers, IP address, and usage logs or crash reports. We do not use this data to identify you or track you across other apps. It is used solely to ensure the app functions properly, to debug issues, and to improve user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Communications</h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you contact us for support or feedback (for example, via email or in-app chat if available), we will collect the information you provide in those communications (such as your contact details and the content of your message). We use this to respond to you and resolve any issues.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Data Not Collected</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We do not ask for or collect sensitive personal identification documents (such as Emirates ID or passport copies) or direct payment details within the app. We also do not knowingly collect any information from children (the app is intended for adult users).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the collected information for the following purposes, in accordance with applicable laws and your expectations:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Providing and Improving Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We process your personal data to create and manage your account, and to provide the core services of the Flatt app. This includes using your name and contact details to set up your profile, using your phone number to authenticate your login via one-time passcode, and using your information to deliver features you request. We also use data (like usage logs or feedback) to maintain, troubleshoot, and improve the app's functionality and performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Property Management Features</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your uploaded property documents are used to facilitate convenient property management. For example, the app stores your title deed or lease so you can access them easily and share with relevant parties when needed. We may use these documents to verify your ownership or tenancy status if required for providing services (e.g. confirming you are the owner before connecting you with certain contractor services).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Connecting with Contractors</h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you choose to book maintenance, cleaning, or other services through Flatt, we use your information to connect you with the appropriate contractor. For instance, when you book a service, we will share your name, contact number, service address or location, and relevant details about the request with the contractor so they can perform the service and communicate with you. Likewise, if you are a contractor, information from your profile (such as your name, business name, contact info, and verification status) will be shown to users seeking services. This use of data is necessary to enable the two-way communication and fulfillment of services between users and contractors.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Payments and Transactions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We use your information to facilitate secure payments for services. For example, when you pay for a contractor's service through the app, we transmit the necessary information (such as your order details and contact info) to our payment processor (Stripe) to charge your card. As noted, we do not handle your card data directly; we rely on Stripe's secure payment platform. We maintain a record of your transactions (date, amount, service, and status) to provide you with receipts, transaction history, and to resolve any payment disputes or refunds.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Security and Fraud Prevention</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We process certain data to keep the app and our users safe. This includes using your phone number for authentication (to ensure the person logging in is you), and monitoring usage and transaction information to detect and prevent fraudulent activity or misuse of our platform. If necessary, we may use and retain data to investigate potential violations of our Terms of Service or illegal activities (such as fraud, money laundering, or other misbehavior) and to take action to prevent harm.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Legal Bases for Processing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our use of your data is justified by various legal grounds under data protection law. Primarily, we process your information to perform our contract with you – i.e. to provide the services you request through Flatt. In certain cases, we rely on your consent (for example, when accessing your location, you consent via your device settings; you can withdraw this consent at any time by disabling location permission). We may also process data to comply with a legal obligation or when it is in our legitimate interests to do so (such as improving our services or ensuring security), provided these interests do not override your fundamental rights. We will always ensure we have a valid legal basis to use your personal data in accordance with UAE PDPL and international standards.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sharing Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We treat your personal data with care and confidentiality. We do not sell or rent your personal information to third parties. However, in order to operate the Flatt service, we sometimes need to share information with third parties under strict conditions. The scenarios in which we share user data include:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Service Providers and Partners</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">We use reputable third-party companies to help us deliver our services. This includes:</p>
                  <ul className="space-y-2 text-gray-600 ml-4">
                    <li>• <strong>Payment Processors:</strong> As noted, all payments in Flatt are handled by third-party payment gateways (such as Stripe). When you make a payment, we share the necessary information with the payment processor to complete the transaction (e.g. your name, contact info, and order amount). These payment providers are responsible for processing your payment information (like credit card details) securely. We do not receive or store your full payment account details; we only receive confirmation of payment and basic transaction info.</li>
                    <li>• <strong>SMS and Authentication Providers:</strong> We integrate with an SMS messaging service to send the one-time passcodes (OTP) for mobile number verification during login. Your phone number is shared with this service solely to deliver the verification SMS. The provider is not allowed to use your number for any other purpose.</li>
                    <li>• <strong>Cloud Storage and Infrastructure:</strong> Flatt is hosted on secure cloud servers. We may store your data (including personal info and uploaded documents) on cloud platforms or data center providers. These service providers process data on our behalf for storage and backup purposes. They are contractually obligated to protect your information and not to access or use it for any purpose other than storing and retrieving as needed for our service.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Legal Compliance and Protection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may disclose personal information to government authorities, regulators, or other third parties if required to do so by law or legal process. For example, if we receive a lawful court order, subpoena, or request from the UAE Data Office or law enforcement, we will review it and may release the requested data, but only to the extent we are legally compelled. We may also share information when necessary to investigate or remedy suspected fraud, security issues, violations of our Terms of Service, or any harm to our rights or the rights of others. This kind of disclosure will only occur in compliance with applicable laws and regulations.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-600 leading-relaxed">
                    <strong>In all cases of sharing, we only share the minimum information necessary and we require third parties to protect your data. We do not share your personal information with any third parties for their own marketing or advertising purposes without your explicit consent.</strong>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We respect your rights to your personal data. Under UAE law and international data protection standards, including GDPR, you have various rights regarding the personal information we hold about you. These include:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Right to Access</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You have the right to request confirmation of whether we are processing your personal data, and to obtain a copy of the personal data we hold about you, along with information about how we use it. We will provide you with a summary of your personal information in our records upon request. This helps you understand what data we have and verify that we are processing it lawfully.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Right to Correction (Rectification)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    If any of your personal information is inaccurate or incomplete, you have the right to have it corrected or updated. You can edit certain basic details (like your name, email address, profile information, and uploaded documents) directly within the Flatt app. For security reasons, you cannot change your registered mobile number through the app's interface (since it is your primary login identifier). If you need to update your phone number, please contact us at our support email so we can verify your identity and assist with the change.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Right to Deletion (Erasure)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You may request that we delete your personal data. You can do this, for example, if you no longer wish to use Flatt. We will honor deletion requests and erase your personal information from our records, provided we do not have a valid legal reason to keep it (such as an ongoing contractual engagement or a legal obligation to retain certain data). If you request account deletion, we will remove your profile information, personal details, and uploaded documents from active databases.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Right to Data Portability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To the extent applicable under law, you can request a copy of the personal data you provided to us in a structured, common electronic format, so that you can transfer it to another service provider. For example, you could request an export of your account information and any documents or records you have uploaded to Flatt. We will provide this in a machine-readable format (such as JSON or CSV) upon legitimate request.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Exercising Your Rights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You can exercise most of the rights above by contacting us at the email or phone number provided in the "Contact Us" section of this Policy. Please specify which right you wish to exercise and provide enough information for us to verify your identity (for example, contacting us from your registered email or providing your phone number). This is to protect your account from unauthorized requests. We will respond to your request as soon as possible, and in any event within the timeframe required by law (generally within 30 days).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Storage and Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We understand the importance of securely storing your personal data. Flatt uses robust measures to protect your information from unauthorized access, disclosure, or loss.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Security Measures</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We employ a range of technical and organizational security measures to safeguard your data. This includes encryption of data in transit (our app and servers use HTTPS/TLS encryption for all communications, so that data like your login credentials and documents are encrypted when transmitted). We also encrypt sensitive data at rest in our databases and storage. Access to personal data within our organization is restricted on a need-to-know basis – only authorized personnel and contractors who require access to operate or improve the service are allowed to handle data, and they are bound by strict confidentiality obligations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Retention Period</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. In practice, this means we keep your account information and uploaded documents for as long as you maintain an active account. If you delete your account or request deletion, we will initiate the process of removing your data. Some data may persist in secure backups for a short period (due to regular backup cycles), but we will purge it according to our data retention schedule.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Data Breach Response</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Despite our best efforts, no security measures are 100% foolproof. In the unlikely event of a data breach that compromises your personal data, we will act promptly in accordance with applicable laws. We have a data breach response plan which includes notifying the relevant UAE authorities and, where required, informing affected users without undue delay. If you are an EU user, we will also fulfill any GDPR breach notification obligations. We will take all steps to mitigate the impact and prevent future incidents.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Flatt is designed for users primarily in the UAE, but the infrastructure and some third-party services we rely on may be located in other countries. Therefore, your personal information may be transferred to and processed in countries other than your country of residence. Those countries may have data protection laws that are different from those in your jurisdiction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whenever we transfer personal data across borders, we take steps to ensure compliance with relevant data transfer restrictions and to protect your data. This includes adequacy assessments, contractual safeguards, and your consent where applicable. If we transfer data from the UAE to another country, we will do so in line with the UAE PDPL's requirements for cross-border data transfer. Similarly, if we transfer data out of the EEA (for any EU users), we will ensure the receiving country has been deemed adequate by the European Commission, or we will use Standard Contractual Clauses or obtain your consent, as required by GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Flatt.ae does not use cookies or similar tracking technologies in our mobile application. Cookies are small text files used mainly in web browsers; since Flatt is a mobile app, there are no traditional web cookies stored on your device for our service. We also do not use web beacons, pixel tags, or third-party ad tracking libraries in the app.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">No Third-Party Ads or Behavioral Tracking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We do not serve third-party advertisements within the app, and we do not track your activities across other apps or websites for advertising purposes. You will not receive targeted ads based on your use of Flatt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Local Storage</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The app may use secure local storage on your device for certain functional data – for example, to keep you logged in (storing an authentication token) or to cache content for faster performance. This data stays on your device and is not accessible to outside parties. It is strictly to enhance your user experience and is not used to monitor your behavior.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to this Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update or modify this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make changes, we will revise the "Effective Date" at the top of the Policy. If the changes are significant, we will provide a more prominent notice of the update (such as a notification within the app or an email to users, where appropriate).
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We encourage you to review this Policy periodically to stay informed about how we are protecting your information. Continued use of the Flatt app after a Policy update constitutes your acceptance of the changes, to the extent permitted by law. If you do not agree to the revised terms, you should stop using the app or exercise your rights (such as deleting your account).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please do not hesitate to contact us. We are here to help and are committed to addressing any privacy-related issues.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:privacy@flatt.ae" className="text-brand-blue hover:underline">privacy@flatt.ae</a> or <a href="mailto:team@flatt.ae" className="text-brand-blue hover:underline">team@flatt.ae</a>
                  </p>
                  <p className="text-gray-500 text-sm">
                    This is our dedicated email for privacy inquiries and support. Please include as much detail as possible in your request or question, along with your contact information, and we will respond promptly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800">WhatsApp Support</h3>
                  <p className="text-gray-600">
                    <a href="https://wa.me/971563118775" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">+971 56 311 87 75</a>
                  </p>
                  <p className="text-gray-500 text-sm">
                    For quick support questions and general assistance, you can reach our team via WhatsApp. This is ideal for non-urgent privacy questions and account support.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Telephone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+971564046554" className="text-brand-blue hover:underline">+971 56 404 65 54</a>
                  </p>
                  <p className="text-gray-500 text-sm">
                    You may call our support line for urgent matters. Our support team will verify your identity and direct your call to the appropriate privacy officer or department.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mt-4">
                We will endeavor to resolve any issues directly and amicably. If you feel that we have not addressed your privacy concern adequately, you have the right to seek further recourse. For UAE residents, you can contact the UAE Data Office or relevant authority under the PDPL. For individuals in other jurisdictions (such as the EU), you may reach out to your local data protection authority.
              </p>
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