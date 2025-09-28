'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { BookingModal } from './BookingModal';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { 
      name: 'The Tooth Studio Dental, Skin & Hair clinic, Colaba', 
      href: '/' 
    },
    { 
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'General Dentistry', href: '/services/general-dentistry' },
        { name: 'Orthodontics', href: '/services/orthodontics' },
        { name: 'Dental Radiology', href: '/services/dental-radiology' },
        { name: 'Dental Implants', href: '/services/dental-implants' },
      ]
    },
    { name: 'Patient Info', href: '/patient-info' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <nav className="fixed w-full z-50">
      <div className="bg-[#f9f7f4] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-serif font-bold text-[#c97b63] hover:text-[#8b9b8a] transition-colors">
                The Tooth Studio
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-[#2d2d2d] hover:text-[#c97b63] px-3 py-2 rounded-md text-sm font-sans transition-colors inline-flex items-center"
                  >
                    {item.name}
                    {item.submenu && (
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                      <div className="relative bg-[#f9f7f4] rounded-2xl shadow-lg ring-1 ring-[#e6ddd5] overflow-hidden">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-[#2d2d2d] hover:bg-[#e6ddd5] hover:text-[#c97b63] transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#c97b63] text-white px-6 py-2 rounded-full text-sm font-sans hover:bg-[#8b9b8a] transition-colors"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-[#2d2d2d] hover:text-[#c97b63] hover:bg-[#e6ddd5] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#c97b63]"
              >
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="text-[#2d2d2d] hover:text-[#c97b63] block px-3 py-2 rounded-md text-base font-sans"
                  onClick={() => !item.submenu && setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1 bg-[#f9f7f4] rounded-lg">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="text-[#2d2d2d] hover:text-[#c97b63] hover:bg-[#e6ddd5] block px-3 py-2 rounded-md text-sm font-sans transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsOpen(false);
              }}
              className="bg-[#c97b63] text-white block px-3 py-2 rounded-full text-base font-sans hover:bg-[#8b9b8a] transition-colors w-full text-center"
            >
              Book Appointment
            </button>
          </div>
        </motion.div>
      </div>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};