'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-[#f9f7f4] border-t border-[#e6ddd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-serif text-[#2d2d2d]">Quick Links</h3>
            <div className="space-y-2 font-sans">
              <div><Link href="/" className="text-[#2d2d2d] hover:text-[#c97b63] transition-colors">Home</Link></div>
              <div><Link href="/services" className="text-[#2d2d2d] hover:text-[#c97b63] transition-colors">Services</Link></div>
              <div><Link href="/patient-info" className="text-[#2d2d2d] hover:text-[#c97b63] transition-colors">Patient Info</Link></div>
              <div><Link href="/contact" className="text-[#2d2d2d] hover:text-[#c97b63] transition-colors">Contact</Link></div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-serif text-[#2d2d2d]">Contact</h3>
            <div className="space-y-2 font-sans text-[#2d2d2d]">
              <p>The Tooth Studio</p>
              <p>Shop no.13, Gala House, Market,</p>
              <p>Lala Nigam Rd, near Janta Store,</p>
              <p>Apollo Bandar, Colaba,</p>
              <p>Mumbai, Maharashtra 400005</p>
              <p>
                <a href="tel:+919867005439" className="hover:text-[#c97b63] transition-colors">
                  +91 9867005439
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-serif text-[#2d2d2d]">Opening Hours</h3>
            <div className="space-y-2 font-sans text-[#2d2d2d]">
              <p>Monday - Saturday: 10:00 AM - 9:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>


        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12 mb-8">
          {/* Instagram */}
          <a href="#" className="text-[#2d2d2d] hover:text-[#c97b63] transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6h-4z M12 15a3 3 0 100-6 3 3 0 000 6z M16.5 7.5v.001" />
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" className="text-[#2d2d2d] hover:text-[#c97b63] transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="text-[#2d2d2d] hover:text-[#c97b63] transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v16h16V4H4zM8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 00-4 0" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#2d2d2d] font-sans border-t border-[#e6ddd5] pt-8">
          <p>© {new Date().getFullYear()} The Tooth Studio, Shop no.13, Gala House, Colaba Mumbai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};