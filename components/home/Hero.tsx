'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BookingModal } from '../BookingModal';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#f9f7f4] overflow-hidden">
      <div className="absolute inset-0 z-0 lg:left-1/2 hidden lg:block">
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
            style={{ 
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      
      <div className="relative z-10 w-full h-full">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 px-4 pt-32 pb-8 lg:px-8 lg:py-32 lg:pr-20"
            >
              <div className="max-w-xl lg:ml-auto">
                <span className="block text-[#c97b63] font-serif text-lg mb-4">The Tooth Studio Dental ,Skin & Hair clinic, Colaba</span>
                <h1 className="text-4xl lg:text-5xl font-serif text-[#2d2d2d] mb-6 leading-tight">
                  Giving You More<br />Reasons to Smile<br />
                  <span className="text-2xl block mt-2">Colaba, Mumbai</span>
                </h1>
                <p className="text-lg font-sans text-[#2d2d2d] mb-10 leading-relaxed">
                  Located at Gala House, Apollo Bandar, Colaba — where modern dentistry meets personalized care.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-block bg-[#c97b63] text-white px-8 py-3 rounded-full text-base font-sans font-medium hover:bg-[#b56e58] transition-colors"
                  >
                    Book Appointment
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-block bg-white text-[#2d2d2d] px-8 py-3 rounded-full text-base font-sans font-medium hover:bg-[#e6ddd5] transition-colors border border-[#2d2d2d]"
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Video */}
      <div className="lg:hidden relative w-full h-[60vh] mt-4">
        <video
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          style={{ 
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};