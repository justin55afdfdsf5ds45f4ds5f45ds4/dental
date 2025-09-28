'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="pt-20 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">About Us</h1>
          <p className="mt-4 text-xl text-gray-600">Your trusted partner in dental health</p>
        </div>

        <div className="mt-16">
          {/* Doctor Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  className="h-96 w-full object-cover md:w-96"
                  src="/images/dentist-profile.jpg"
                  alt="Dr. Sood"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">Dr. Sood</h3>
                <p className="mt-2 text-gray-600">DMD, Advanced Cosmetic & Restorative Dentistry</p>
                <p className="mt-4 text-gray-600">
                  With over 15 years of experience in dentistry, Dr. Sood is committed to providing 
                  the highest quality dental care in a comfortable and welcoming environment. 
                  Specializing in cosmetic and restorative dentistry, Dr. Sood stays at the forefront 
                  of dental technology and techniques through continuous education.
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900">Education & Certifications</h4>
                  <ul className="mt-2 text-gray-600">
                    <li>• Doctorate in Dental Medicine (DMD)</li>
                    <li>• Advanced Training in Cosmetic Dentistry</li>
                    <li>• Certified in Invisalign Treatment</li>
                    <li>• Member of American Dental Association</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-blue-50 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-gray-600">
                At The Tooth Studio, our mission is to provide exceptional dental care that enhances 
                our patients' quality of life. We are dedicated to creating beautiful, healthy smiles 
                in a comfortable and caring environment. Our commitment to excellence, combined with 
                state-of-the-art technology and a patient-centered approach, ensures that every visit 
                to our practice is a positive experience.
              </p>
            </div>
          </motion.div>

          {/* Practice Values */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">Patient-Focused Care</h4>
              <p className="mt-4 text-gray-600">
                Your comfort and satisfaction are our top priorities. We take time to listen and 
                understand your needs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">Modern Technology</h4>
              <p className="mt-4 text-gray-600">
                We invest in the latest dental technology to provide efficient, precise, and 
                comfortable treatments.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">Continuous Learning</h4>
              <p className="mt-4 text-gray-600">
                Our team regularly pursues continuing education to stay current with the latest 
                dental advances.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}