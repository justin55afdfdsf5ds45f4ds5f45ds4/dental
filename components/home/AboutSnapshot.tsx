'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const AboutSnapshot = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#2d2d2d] mb-4 md:mb-6">
              Your Trusted Dental Partner in South Mumbai
            </h2>
            <p className="text-lg font-sans text-[#2d2d2d] leading-relaxed">
              For over 13 years, The Tooth Studio Dental ,Skin & Hair clinic, Colaba has been a cornerstone of dental excellence in Colaba. 
              Our state-of-the-art clinic combines advanced technology with a warm, welcoming atmosphere 
              where patients become family.
            </p>
            <p className="text-lg font-sans text-[#2d2d2d] leading-relaxed">
              Led by our experienced team, we've earned the trust of thousands of patients from Colaba, 
              Fort, and across South Mumbai through our commitment to exceptional care and stunning results.
            </p>
            <div className="flex items-center justify-between sm:justify-start sm:space-x-8 space-x-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-[#c97b63]">13+</div>
                <div className="text-xs md:text-sm font-sans text-[#2d2d2d]">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-[#c97b63]">10k+</div>
                <div className="text-xs md:text-sm font-sans text-[#2d2d2d]">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-[#c97b63]">4.9</div>
                <div className="text-xs md:text-sm font-sans text-[#2d2d2d]">Star Rating</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2"
          >
            <Image
              src="/images/clinic-interior.webp"
              alt="The Tooth Studio clinic interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};