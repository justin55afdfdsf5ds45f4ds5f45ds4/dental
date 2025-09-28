'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookingModal } from '@/components/BookingModal';

const generalDentistryServices = [
  {
    title: 'Preventive Care',
    description: 'Maintain optimal oral health with our comprehensive preventive treatments.',
    features: [
      'Professional Teeth Cleaning',
      'Digital X-rays',
      'Oral Cancer Screening',
      'Fluoride Treatments'
    ]
  },
  {
    title: 'Restorative Dentistry',
    description: 'Advanced treatments to repair and restore damaged or missing teeth.',
    features: [
      'Tooth-Colored Fillings',
      'Dental Crowns',
      'Root Canal Therapy',
      'Dental Bridges',
      'Dentures'
    ]
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our range of aesthetic dental procedures.',
    features: [
      'Teeth Whitening',
      'Porcelain Veneers',
      'Dental Bonding',
      'Smile Makeovers',
      'Gum Contouring'
    ]
  }
];

const faqItems = [
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend visiting our clinic every 6 months for routine checkups and professional cleaning. However, if you have specific dental concerns or are undergoing treatment, more frequent visits may be necessary.'
  },
  {
    question: 'What happens during a routine dental checkup?',
    answer: 'During a routine checkup, we perform a comprehensive examination of your teeth, gums, and mouth, professional cleaning, X-rays if needed, oral cancer screening, and discuss any concerns or treatment recommendations.'
  },
  {
    question: 'Do you treat dental emergencies?',
    answer: 'Yes, we provide emergency dental care during our regular business hours. If you experience severe tooth pain, broken teeth, lost fillings, or other dental emergencies during our operating hours, contact us immediately and we will strive to accommodate urgent cases as quickly as possible.'
  },
  {
    question: 'What payment options do you offer?',
    answer: 'We accept most major insurance plans and offer various payment options including credit cards and flexible payment plans. Our team will help you understand your insurance coverage and discuss financial arrangements.'
  }
];

export default function GeneralDentistryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6">General Dentistry Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-sans">
              Comprehensive dental care for you and your family in the heart of Colaba, Mumbai
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {generalDentistryServices.map((service, index) => (
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

      {/* Why Choose Us */}
      <div className="py-16 bg-[#e6ddd5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif text-[#2d2d2d]">Why Choose The Tooth Studio?</h2>
            <p className="mt-4 text-xl text-[#2d2d2d] font-sans">Experience excellence in dental care with our expert team</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f9f7f4] rounded-2xl p-6 text-center">
              <div className="text-[#c97b63] mb-4">
                <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#2d2d2d] mb-2">13+ Years of Excellence</h3>
              <p className="text-[#2d2d2d] font-sans">Trusted by thousands of patients in South Mumbai</p>
            </div>

            <div className="bg-[#f9f7f4] rounded-2xl p-6 text-center">
              <div className="text-[#c97b63] mb-4">
                <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#2d2d2d] mb-2">Advanced Technology</h3>
              <p className="text-[#2d2d2d] font-sans">State-of-the-art equipment for precise diagnostics and treatment</p>
            </div>

            <div className="bg-[#f9f7f4] rounded-2xl p-6 text-center">
              <div className="text-[#c97b63] mb-4">
                <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#2d2d2d] mb-2">Patient Comfort</h3>
              <p className="text-[#2d2d2d] font-sans">Gentle care in a relaxing environment</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif text-[#2d2d2d]">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-[#2d2d2d] font-sans">Find answers to common questions about our dental services</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-serif text-[#2d2d2d] mb-2">{item.question}</h3>
                <p className="text-[#2d2d2d] font-sans">{item.answer}</p>
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
            <h2 className="text-3xl font-serif mb-4">Ready to Schedule Your Visit?</h2>
            <p className="text-xl mb-8 font-sans">Book an appointment today and experience the difference at The Tooth Studio</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-[#f9f7f4] text-[#c97b63] px-8 py-3 rounded-full text-lg font-sans hover:bg-[#e6ddd5] transition-colors"
            >
              Book Appointment
            </button>
          </motion.div>
        </div>
      </div>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}