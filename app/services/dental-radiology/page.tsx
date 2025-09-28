'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const radiologyServices = [
  {
    title: 'Digital X-rays',
    description: 'Advanced digital radiography for precise diagnosis with minimal radiation exposure.',
    features: [
      'Instant High-Quality Images',
      'Reduced Radiation Exposure',
      'Enhanced Diagnostic Accuracy',
      'Digital Image Enhancement',
      'Easy Image Sharing'
    ]
  },
  {
    title: '3D CBCT Scanning',
    description: 'State-of-the-art 3D imaging for comprehensive treatment planning.',
    features: [
      'Detailed 3D Views',
      'Precise Treatment Planning',
      'Implant Placement Guidance',
      'Orthodontic Assessment',
      'TMJ Analysis'
    ]
  },
  {
    title: 'Intraoral Scanning',
    description: 'Digital impressions for accurate and comfortable dental procedures.',
    features: [
      'No Physical Impressions',
      'Increased Comfort',
      'Improved Accuracy',
      'Instant Results',
      'Better Treatment Planning'
    ]
  }
];

const benefitsSection = [
  {
    title: 'Advanced Technology',
    description: 'Using the latest digital imaging technology for optimal diagnosis and treatment planning.'
  },
  {
    title: 'Reduced Radiation',
    description: 'Up to 90% less radiation compared to traditional X-rays while providing superior image quality.'
  },
  {
    title: 'Instant Results',
    description: 'Immediate image availability for faster diagnosis and treatment decisions.'
  },
  {
    title: 'Better Patient Education',
    description: 'Clear, detailed images help patients better understand their dental conditions and treatment options.'
  }
];

const faqItems = [
  {
    question: "How safe are dental X-rays?",
    description: "Our digital X-rays use minimal radiation levels that are considered completely safe. We also use protective equipment for added safety."
  },
  {
    question: "How often should I get dental X-rays?",
    description: "The frequency depends on your oral health needs, age, and risk factors. Generally, we recommend comprehensive X-rays every 2-3 years for healthy adults."
  },
  {
    question: "What can 3D imaging detect?",
    description: "3D imaging can detect various issues including bone structure abnormalities, tooth positioning, sinus problems, and assist in precise implant planning."
  },
  {
    question: "Are digital scans comfortable?",
    description: "Yes, digital scans are very comfortable and eliminate the need for traditional putty impressions, making the experience much more pleasant for patients."
  }
];

export default function DentalRadiologyPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#f9f7f4]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#c97b63] to-[#8b9b8a] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Dental Radiology Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-sans">
              Advanced diagnostic imaging for precise dental care in Colaba, Mumbai
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {radiologyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-[#2d2d2d] mb-4">{service.title}</h3>
                  <p className="text-[#2d2d2d] mb-6 font-sans">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-[#2d2d2d] font-sans">
                        <svg className="h-5 w-5 text-[#c97b63] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-[#2d2d2d] mb-4">Benefits of Digital Imaging</h2>
            <p className="text-xl text-[#2d2d2d] font-sans">Why we use advanced digital technology</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsSection.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-serif text-[#2d2d2d] mb-2">{benefit.title}</h3>
                <p className="text-[#2d2d2d] font-sans">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-16 bg-[#f9f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-[#2d2d2d]">Common Questions</h2>
            <p className="mt-4 text-xl text-[#2d2d2d] font-sans">Learn more about our dental imaging services</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-serif text-[#2d2d2d] mb-2">{item.question}</h3>
                <p className="text-[#2d2d2d] font-sans">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#c97b63] to-[#8b9b8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-serif mb-4">Schedule Your Consultation</h2>
            <p className="text-xl mb-8 font-sans">Experience the latest in dental diagnostic technology</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#c97b63] px-8 py-3 rounded-full text-lg font-sans font-medium hover:bg-[#f9f7f4] transition-colors"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}