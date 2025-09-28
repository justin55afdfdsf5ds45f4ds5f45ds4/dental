'use client';
import { useState } from 'react';
import { BookingModal } from '@/components/BookingModal';

export default function PatientInfoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="pt-28 min-h-screen bg-[#f9f7f4]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#c97b63] to-[#8b9b8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif sm:text-5xl mb-4">Patient Information</h1>
            <p className="text-xl font-sans">Everything you need to know about your visit</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* New Patients */}
          <div className="bg-white rounded-2xl shadow-lg">
            <div className="p-8">
              <h3 className="text-2xl font-serif text-[#2d2d2d] mb-6">New Patients</h3>
              <div className="space-y-4 text-[#2d2d2d] font-sans">
                <p>Welcome to The Tooth Studio! To make your first visit smoother, please:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Arrive 15 minutes early to complete paperwork</li>
                  <li>Bring your ID and insurance card</li>
                  <li>Bring a list of current medications</li>
                  <li>Have your previous dental records transferred</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Insurance & Payment */}
          <div className="bg-white rounded-2xl shadow-lg">
            <div className="p-8">
              <h3 className="text-2xl font-serif text-[#2d2d2d] mb-6">Insurance & Payment</h3>
              <div className="space-y-4 text-[#2d2d2d] font-sans">
                <p>We accept most major insurance plans and offer flexible payment options:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Major insurance providers accepted</li>
                  <li>Flexible payment plans available</li>
                  <li>Credit cards accepted</li>
                  <li>Healthcare financing options</li>
                  <li>In-house dental savings plan</li>
                </ul>
                <p className="mt-4 italic">
                  Contact our office for detailed information about your insurance coverage.
                </p>
              </div>
            </div>
          </div>

          {/* Office Policies */}
          <div className="bg-white rounded-2xl shadow-lg">
            <div className="p-8">
              <h3 className="text-2xl font-serif text-[#2d2d2d] mb-6">Office Policies</h3>
              <div className="space-y-4 text-[#2d2d2d] font-sans">
                <h4 className="text-lg font-serif">Appointments</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Please arrive 5-10 minutes before your appointment</li>
                  <li>24-hour notice required for cancellations</li>
                  <li>Late arrivals may need to be rescheduled</li>
                </ul>
                <h4 className="text-lg font-serif mt-6">Privacy</h4>
                <p>
                  We adhere to strict privacy guidelines to protect your information. 
                  Your data is always kept confidential.
                </p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-white rounded-2xl shadow-lg">
            <div className="p-8">
              <h3 className="text-2xl font-serif text-[#2d2d2d] mb-6">What to Expect</h3>
              <div className="space-y-4 text-[#2d2d2d] font-sans">
                <p>Your first visit will typically include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comprehensive oral examination</li>
                  <li>Digital X-rays</li>
                  <li>Professional cleaning</li>
                  <li>Treatment plan discussion</li>
                  <li>Questions and answers session</li>
                </ul>
                <p className="mt-4">
                  We strive to make every visit comfortable and informative. 
                  Don't hesitate to ask questions!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-serif text-[#2d2d2d] mb-6">Ready to Schedule Your Visit?</h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-[#c97b63] text-white px-8 py-4 rounded-full text-lg font-sans font-medium hover:bg-[#b56e58] transition-colors"
            >
              Book Appointment
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-white text-[#2d2d2d] px-8 py-4 rounded-full text-lg font-sans font-medium hover:bg-[#e6ddd5] transition-colors"
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}