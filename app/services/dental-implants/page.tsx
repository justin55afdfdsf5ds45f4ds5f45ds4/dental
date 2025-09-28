'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const implantServices = [
  {
    title: 'Single Tooth Implants',
    description: 'Perfect solution for replacing individual missing teeth with natural-looking results.',
    features: [
      'Natural Appearance',
      'Preserves Jaw Bone',
      'Long-lasting Results',
      'Comfortable Fit',
      'Easy Maintenance'
    ]
  },
  {
    title: 'Multiple Tooth Implants',
    description: 'Comprehensive solution for multiple missing teeth with bridge or partial denture options.',
    features: [
      'Custom Treatment Plans',
      'Improved Functionality',
      'Stable & Secure',
      'Prevents Bone Loss',
      'Better Speech & Eating'
    ]
  },
  {
    title: 'Full Arch Rehabilitation',
    description: 'Complete restoration for full upper or lower arch with All-on-4 or All-on-6 implants.',
    features: [
      'Immediate Results',
      'Fixed Solution',
      'Full Functionality',
      'Improved Quality of Life',
      'Cost-effective'
    ]
  }
];

const benefitsSection = [
  {
    title: 'Permanent Solution',
    description: 'Unlike traditional dentures, implants provide a permanent, fixed solution for missing teeth.'
  },
  {
    title: 'Natural Look & Feel',
    description: 'Custom-designed to match your natural teeth in color, shape, and size.'
  },
  {
    title: 'Bone Preservation',
    description: 'Helps maintain jawbone density and facial structure by preventing bone loss.'
  },
  {
    title: 'Improved Confidence',
    description: 'Eat, speak, and smile with complete confidence knowing your teeth are secure.'
  }
];

const faqItems = [
  {
    question: "How long do dental implants last?",
    description: "With proper care and maintenance, dental implants can last a lifetime. The crown may need replacement after 10-15 years due to normal wear."
  },
  {
    question: "Is the implant procedure painful?",
    description: "The procedure is performed under local anesthesia, ensuring you feel no pain during treatment. Any post-procedure discomfort can be managed with prescribed medication."
  },
  {
    question: "Am I a candidate for dental implants?",
    description: "Most people with good general and oral health are candidates for implants. We'll evaluate your bone density and overall health to determine suitability."
  },
  {
    question: "What is the recovery time?",
    description: "Initial healing takes about 1-2 weeks, while complete integration of the implant with bone (osseointegration) takes 3-6 months."
  }
];

export default function DentalImplantsPage() {
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Dental Implant Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-sans">
              Restore your smile with advanced implant technology in Colaba, Mumbai
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {implantServices.map((service, index) => (
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
      <div className="py-16 bg-[#e6ddd5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif text-[#2d2d2d]">Benefits of Dental Implants</h2>
            <p className="mt-4 text-xl text-[#2d2d2d] font-sans">Why choose dental implants for tooth replacement</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsSection.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f9f7f4] rounded-2xl p-6"
              >
                <h3 className="text-xl font-serif text-[#2d2d2d] mb-2">{benefit.title}</h3>
                <p className="text-[#2d2d2d] font-sans">{benefit.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-serif text-[#2d2d2d]">Common Questions</h2>
            <p className="mt-4 text-xl text-[#2d2d2d] font-sans">Learn more about dental implant procedures</p>
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
            <h2 className="text-3xl font-serif mb-4">Schedule Your Consultation</h2>
            <p className="text-xl mb-8 font-sans">Take the first step towards your new smile</p>
            <Link
              href="/contact"
              className="inline-block bg-[#f9f7f4] text-[#c97b63] px-8 py-3 rounded-full text-lg font-sans hover:bg-[#e6ddd5] transition-colors"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}