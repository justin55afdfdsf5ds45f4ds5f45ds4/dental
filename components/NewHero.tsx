'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export const NewHero = () => {
  return (
    <div className="relative min-h-screen bg-[#f9f7f4]">
      {/* Main Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-dental.jpg"
            alt="Modern dental clinic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
              Giving You More Reasons to Smile
            </h1>
            <p className="text-xl md:text-2xl font-sans mb-8 text-white/90">
              Boutique dental care that blends cutting-edge technology with elevated, approachable service in Colaba, Mumbai.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#c97b63] text-white px-8 py-4 rounded-full text-lg font-sans font-medium hover:bg-[#b56e58] transition-colors"
            >
              Request an Appointment
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20 bg-[#f9f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-[#2d2d2d] mb-6">Your Trusted Dentist in Colaba</h2>
            <p className="text-lg font-sans text-[#2d2d2d] leading-relaxed">
              At The Tooth Studio Dental ,Skin & Hair clinic, Colaba, we're redefining what it means to go to the dentist. Our studio-style practice combines advanced technology, 
              aesthetic expertise, and a down-to-earth team that's here to make you feel heard, respected, and genuinely cared for. Whether you're here 
              for a cleaning, a complete smile makeover, or urgent dental care—we're here to deliver modern dentistry that's designed around your life.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-[#2d2d2d] mb-4">Our Most Requested Treatments</h2>
            <p className="text-lg font-sans text-[#2d2d2d]">Personalized care for your unique smile</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f9f7f4] rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-serif text-[#2d2d2d] mb-4">{service.title}</h3>
                <p className="text-[#2d2d2d] font-sans mb-6">{service.description}</p>
                <Link 
                  href={service.link}
                  className="inline-block text-[#c97b63] font-sans hover:text-[#b56e58] transition-colors"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-20 bg-gradient-to-r from-[#c97b63] to-[#8b9b8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-6">Our Philosophy</h2>
            <p className="text-lg font-sans leading-relaxed mb-12">
              From the first phone call to your final result, we aim to make your dental experience feel different—in the best way possible. 
              Your comfort and trust are at the heart of everything we do, with a focus on honest communication and personalized care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-xl font-serif">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const featuredServices = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive care focusing on prevention, early detection, and maintaining your oral health with a gentle, judgment-free approach.',
    link: '/services/general-dentistry'
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements that restore both function and confidence with state-of-the-art technology.',
    link: '/services/dental-implants'
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Advanced treatments to enhance your smile, from professional whitening to complete smile makeovers tailored to your goals.',
    link: '/services/cosmetic-dentistry'
  }
];

const philosophyPoints = [
  'Modern, spa-like environment',
  'State-of-the-art technology',
  'Kind, collaborative team'
];