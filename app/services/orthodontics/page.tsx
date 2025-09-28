'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const orthodonticServices = [
  {
    title: 'Traditional Braces',
    description: 'Advanced metal braces with the latest technology for effective teeth alignment.',
    features: [
      'Modern Bracket System',
      'Comfortable Design',
      'Regular Adjustments',
      'Multiple Color Options',
      'Suitable for All Ages'
    ]
  },
  {
    title: 'Invisalign®',
    description: 'Clear aligners that straighten your teeth without metal brackets or wires.',
    features: [
      'Nearly Invisible Treatment',
      'Removable Aligners',
      'Custom-Made Design',
      'Digital Treatment Planning',
      'Comfortable Fit'
    ]
  },
  {
    title: 'Clear Ceramic Braces',
    description: 'Tooth-colored brackets for a more discreet orthodontic treatment option.',
    features: [
      'Aesthetically Pleasing',
      'Stain-Resistant Material',
      'Effective Alignment',
      'Less Noticeable',
      'Suitable for Adults'
    ]
  }
];

const faqItems = [
  {
    question: 'How long does orthodontic treatment typically take?',
    answer: "Treatment duration varies depending on individual cases, but typically ranges from 12 to 24 months. During your consultation, we will provide a more accurate timeline based on your specific needs."
  },
  {
    question: 'Is Invisalign as effective as traditional braces?',
    answer: 'Yes, Invisalign can be just as effective as traditional braces for most cases. However, some complex orthodontic issues may require traditional braces for optimal results.'
  },
  {
    question: 'At what age should orthodontic treatment begin?',
    answer: 'While orthodontic treatment can begin at any age, the American Association of Orthodontists recommends that children have their first orthodontic evaluation by age 7.'
  },
  {
    question: 'Will orthodontic treatment be painful?',
    answer: 'You may experience some discomfort when braces are first placed and after adjustments, but this typically subsides within a few days. Modern orthodontic techniques are designed to minimize discomfort.'
  }
];

export default function OrthodonticsPage() {
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Orthodontic Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-sans">
              Transform your smile with our advanced orthodontic treatments in Colaba, Mumbai
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {orthodonticServices.map((service, index) => (
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

      {/* Treatment Process */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-[#2d2d2d] mb-4">Our Treatment Process</h2>
            <p className="text-xl text-[#2d2d2d] font-sans">Your journey to a perfect smile</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-[#c97b63] mb-4">
                <span className="text-4xl font-serif">1</span>
              </div>
              <h3 className="text-xl font-serif text-[#2d2d2d] mb-2">Initial Consultation</h3>
              <p className="text-[#2d2d2d] font-sans">Comprehensive evaluation and treatment planning</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-[#c97b63] mb-4">
                <span className="text-4xl font-serif">2</span>
              </div>
              <h3 className="text-xl font-serif text-[#2d2d2d] mb-2">Custom Treatment</h3>
              <p className="text-[#2d2d2d] font-sans">Personalized orthodontic solution design</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-[#c97b63] mb-4">
                <span className="text-4xl font-serif">3</span>
              </div>
              <h3 className="text-xl font-serif text-[#2d2d2d] mb-2">Active Treatment</h3>
              <p className="text-[#2d2d2d] font-sans">Regular adjustments and progress monitoring</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-[#c97b63] mb-4">
                <span className="text-4xl font-serif">4</span>
              </div>
              <h3 className="text-xl font-serif text-[#2d2d2d] mb-2">Retention</h3>
              <p className="text-[#2d2d2d] font-sans">Maintaining your beautiful new smile</p>
            </div>
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
            <h2 className="text-4xl font-serif text-[#2d2d2d]">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-[#2d2d2d] font-sans">Common questions about orthodontic treatment</p>
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
            <h2 className="text-4xl font-serif mb-4">Start Your Smile Transformation</h2>
            <p className="text-xl mb-8 font-sans">Schedule your orthodontic consultation today</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#c97b63] px-8 py-3 rounded-full text-lg font-sans font-medium hover:bg-[#f9f7f4] transition-colors"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}