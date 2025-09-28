'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Dental Clinic',
    description: 'Comprehensive dental care with a gentle touch',
    icon: (
      <svg className="w-16 h-16 text-[#c97b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
    link: '/services/general-dentistry'
  },
  {
    title: 'Orthodontist',
    description: 'Advanced solutions for your perfect smile',
    icon: (
      <svg className="w-16 h-16 text-[#c97b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: '/services/orthodontics'
  },
  {
    title: 'Dental Radiology',
    description: 'Precise diagnostics for better treatment',
    icon: (
      <svg className="w-16 h-16 text-[#c97b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    link: '/services/dental-radiology'
  },
  {
    title: 'Dental Implants',
    description: 'Restore your smile with expert care',
    icon: (
      <svg className="w-16 h-16 text-[#c97b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
      </svg>
    ),
    link: '/services/dental-implants'
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-20 bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-[#2d2d2d] mb-4">Our Featured Services</h2>
          <p className="text-lg font-sans text-[#2d2d2d]">Comprehensive dental care for your entire family</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.link} className="block">
                <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-[#2d2d2d] mb-2">{service.title}</h3>
                      <p className="text-[#2d2d2d] font-sans mb-4">{service.description}</p>
                      <span className="text-[#c97b63] font-sans hover:text-[#b56e58] transition-colors">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};