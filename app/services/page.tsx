'use client';

export default function ServicesPage() {
  return (
    <div className="pt-36 pb-16 min-h-screen bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2d2d2d] sm:text-5xl font-playfair mb-12">Our Services</h1>
          <p className="text-xl text-[#2d2d2d]/80 font-inter max-w-2xl mx-auto">Comprehensive dental care for you and your family</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* General Dentistry */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#e6ddd5]">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#2d2d2d] font-playfair">General Dentistry</h3>
              <ul className="mt-4 space-y-3 text-[#2d2d2d]/70 font-inter">
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Routine Check-ups and Cleanings
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Cavity Fillings
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Root Canal Treatment
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Gum Disease Treatment
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Dental Sealants
                </li>
              </ul>
            </div>
          </div>

          {/* Cosmetic Dentistry */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#e6ddd5]">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#2d2d2d] font-playfair">Cosmetic Dentistry</h3>
              <ul className="mt-4 space-y-3 text-[#2d2d2d]/70 font-inter">
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Teeth Whitening
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Porcelain Veneers
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Dental Bonding
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Smile Makeovers
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Invisalign Clear Aligners
                </li>
              </ul>
            </div>
          </div>

          {/* Restorative Dentistry */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#e6ddd5]">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#2d2d2d] font-playfair">Restorative Dentistry</h3>
              <ul className="mt-4 space-y-3 text-[#2d2d2d]/70 font-inter">
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Dental Implants
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Dental Crowns and Bridges
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Dentures
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Inlays and Onlays
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Full Mouth Reconstruction
                </li>
              </ul>
            </div>
          </div>

          {/* Emergency Care */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#e6ddd5]">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#2d2d2d] font-playfair">Emergency Care</h3>
              <ul className="mt-4 space-y-3 text-[#2d2d2d]/70 font-inter">
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Toothache Relief
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Broken Tooth Repair
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Emergency Extractions
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Sports Injuries Treatment
                </li>
                <li className="flex items-center">
                  <span className="text-[#c97b63] mr-2">•</span>
                  Urgent Dental Care
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}