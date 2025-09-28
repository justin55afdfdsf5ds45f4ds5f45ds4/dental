'use client';
import { motion } from 'framer-motion';

export const LocationSection = () => {
  return (
    <section className="py-20 bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif text-[#2d2d2d] mb-4">Find Us</h2>
          <p className="text-lg font-sans text-[#2d2d2d]">Conveniently located in the heart of South Mumbai</p>
        </motion.div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.217778750385!2d72.83089067597658!3d18.91712798132064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1bfd1ac6bab%3A0x6691d1bd89134756!2sShop%20no.13%2C%20Gala%20House%2C%20Lala%20Nigam%20Rd%2C%20Apollo%20Bandar%2C%20Colaba%2C%20Mumbai%2C%20Maharashtra%20400005!5e0!3m2!1sen!2sin!4v1695556789012!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-lg font-sans text-[#2d2d2d]">
            Serving patients from Colaba, Fort, Churchgate, Nariman Point, Marine Drive & South Mumbai
          </p>
        </motion.div>
      </div>
    </section>
  );
};