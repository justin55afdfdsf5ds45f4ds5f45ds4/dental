'use client';
import { useState } from 'react';
import { BookingModal } from '@/components/BookingModal';

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="pt-28 min-h-screen bg-[#f9f7f4]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#c97b63] to-[#8b9b8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif sm:text-5xl mb-4">Contact Us</h1>
            <p className="text-xl font-sans">Get in touch with The Tooth Studio</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center">
          
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg">
            <h2 className="text-2xl font-serif text-[#2d2d2d] mb-8">Contact Information</h2>
            
            {/* Phone Number */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-[#c97b63] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-lg font-serif text-[#2d2d2d]">Phone</h3>
              </div>
              <a href="tel:+919867005439" className="text-2xl font-sans text-[#c97b63] hover:text-[#b56e58] transition-colors">
                +91 9867005439
              </a>
            </div>

            {/* Location */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-[#c97b63] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-serif text-[#2d2d2d]">Location</h3>
              </div>
              <div className="text-[#2d2d2d] font-sans">
                <p>The Tooth Studio</p>
                <p>Shop no.13, Gala House, Market,</p>
                <p>Lala Nigam Rd, near Janta Store,</p>
                <p>Apollo Bandar, Colaba,</p>
                <p>Mumbai, Maharashtra 400005</p>
              </div>
            </div>

            {/* Book Appointment Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#c97b63] text-white px-8 py-4 rounded-full text-lg font-sans font-medium hover:bg-[#b56e58] transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-[#2d2d2d] mb-4">Find Us</h2>
            <p className="text-lg font-sans text-[#2d2d2d]">Visit our clinic in the heart of Colaba</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60389.15994105605!2d72.7522743486328!3d18.917114300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1bfd1ac6bab%3A0x6691d1bd89134756!2sThe%20Tooth%20Studio%20Dental%20%2CSkin%20%26%20Hair%20clinic%2C%20Colaba!5e0!3m2!1sen!2sin!4v1759083593499!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
