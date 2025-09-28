'use client';
import { motion } from 'framer-motion';

const trustPoints = [
  {
    icon: (
      <svg className="w-12 h-12 text-[#c97b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '13+ Years Experience',
    description: 'Serving Colaba with excellence since 2010'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#c97b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Premium Technology',
    description: 'State-of-the-art equipment for precise care'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#c97b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Prime Location',
    description: 'Easily accessible in the heart of South Mumbai'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#c97b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Patient-Centered Care',
    description: 'Personalized attention for every smile'
  }
];

export const TrustSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-[#2d2d2d] mb-4">Why Choose Us</h2>
          <p className="text-lg font-sans text-[#2d2d2d]">South Mumbai's trusted dental care provider</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-[#f9f7f4] rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-serif text-[#2d2d2d] mb-2">{point.title}</h3>
              <p className="text-[#2d2d2d] font-sans">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};