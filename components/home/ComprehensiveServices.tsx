'use client';
import { motion } from 'framer-motion';

export const ComprehensiveServices = () => {
  return (
    <section className="py-20 bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-[#2d2d2d] mb-6">
            Dental Clinic in Colaba - The Tooth Studio
          </h2>
          <p className="text-xl text-[#2d2d2d] font-sans max-w-4xl mx-auto">
            What is a Dental Clinic and Why Choose The Tooth Studio Colaba?
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <p className="text-lg font-sans text-[#2d2d2d] leading-relaxed mb-6">
            A dental clinic is a specialized healthcare facility dedicated to providing comprehensive oral health services, diagnosis, treatment, and prevention of dental and oral diseases. At The Tooth Studio Dental, Skin & Hair Clinic in Colaba, we represent the gold standard of dental care in South Mumbai, offering a complete range of dental services under one roof.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Dental Clinic Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Understanding Dental Clinic Services at The Tooth Studio Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
              Dental clinics serve as the primary point of care for all oral health needs, from routine preventive care to complex restorative procedures. At The Tooth Studio Colaba, our dental clinic operates as a comprehensive healthcare center where patients can receive everything from basic dental cleanings to advanced surgical procedures. Our facility combines state-of-the-art equipment with experienced dental professionals to deliver exceptional patient outcomes.
            </p>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              The primary function of a dental clinic like The Tooth Studio in Colaba is to maintain and restore oral health through various treatment modalities. This includes preventive services such as regular check-ups, professional cleanings, fluoride treatments, and oral cancer screenings. Our Colaba location ensures easy access for residents of South Mumbai who prioritize their oral health.
            </p>
          </motion.div>

          {/* Preventive Care */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Preventive Dental Care at The Tooth Studio Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
              Preventive dentistry forms the foundation of excellent oral health, and our dental clinic in Colaba emphasizes the importance of regular preventive care. During routine visits to The Tooth Studio, patients receive comprehensive oral examinations, professional teeth cleaning, and personalized oral hygiene instruction. Our dental hygienists use advanced ultrasonic scaling technology to remove plaque and tartar buildup that regular brushing and flossing cannot eliminate.
            </p>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              Preventive services at our Colaba dental clinic include digital X-rays for early detection of dental problems, oral cancer screenings, gum disease assessment, and bite analysis. We also provide dental sealants for children and adults to prevent cavities in hard-to-reach areas of the teeth. Our fluoride treatments help strengthen tooth enamel and provide additional protection against decay.
            </p>
          </motion.div>

          {/* Restorative Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Restorative Dental Services in Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
              When dental problems occur, The Tooth Studio Dental Clinic in Colaba provides comprehensive restorative services to repair and restore damaged teeth. Our restorative treatments include dental fillings using tooth-colored composite materials, dental crowns and bridges, root canal therapy, and partial or complete dentures. Each restoration is carefully planned and executed to ensure optimal function and aesthetics.
            </p>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              Our Colaba dental clinic utilizes CAD/CAM technology for same-day crown fabrication, allowing patients to receive permanent restorations in a single visit. This advanced technology ensures precise fit and superior aesthetics while saving valuable time for our busy South Mumbai patients. The porcelain and ceramic materials we use are biocompatible and provide long-lasting results that blend seamlessly with natural teeth.
            </p>
          </motion.div>

          {/* Emergency Care */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Emergency Dental Care at The Tooth Studio Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
              Dental emergencies can occur at any time, and The Tooth Studio Dental Clinic in Colaba is equipped to handle urgent dental situations promptly and effectively. Common dental emergencies include severe toothaches, knocked-out teeth, broken or chipped teeth, lost fillings or crowns, and acute gum infections. Our emergency dental protocols ensure rapid assessment and immediate treatment to alleviate pain and prevent further complications.
            </p>
          </motion.div>
        </div>

        {/* Technology Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#c97b63] to-[#8b9b8a] text-white rounded-2xl p-8 mb-12"
        >
          <h3 className="text-3xl font-serif mb-6 text-center">Technology and Equipment at Our Colaba Dental Clinic</h3>
          <p className="text-lg font-sans leading-relaxed text-center max-w-4xl mx-auto">
            The Tooth Studio Dental Clinic in Colaba features cutting-edge dental technology that enhances diagnostic accuracy and treatment outcomes. Our digital radiography system provides high-quality images with minimal radiation exposure, while our intraoral cameras allow patients to see their teeth and gums in real-time during examinations. We utilize laser dentistry for soft tissue procedures, offering precision treatment with reduced healing time and minimal discomfort.
          </p>
        </motion.div>

        {/* Specialized Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Dentist Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-[#c97b63] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-serif text-[#2d2d2d] mb-3">Dentist Services</h4>
            <p className="text-[#2d2d2d] font-sans text-sm leading-relaxed">
              Our experienced dentists provide comprehensive oral healthcare services including examinations, treatment planning, cosmetic dentistry, and patient education at our Colaba location.
            </p>
          </motion.div>

          {/* Orthodontist Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-[#c97b63] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-serif text-[#2d2d2d] mb-3">Orthodontist Services</h4>
            <p className="text-[#2d2d2d] font-sans text-sm leading-relaxed">
              Our orthodontic specialists address tooth alignment, bite relationships, and jaw position using traditional braces, clear aligners, and specialized appliances in Colaba.
            </p>
          </motion.div>

          {/* Dental Radiology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-[#c97b63] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h4 className="text-xl font-serif text-[#2d2d2d] mb-3">Dental Radiology</h4>
            <p className="text-[#2d2d2d] font-sans text-sm leading-relaxed">
              Advanced imaging services including digital X-rays, panoramic radiographs, and 3D Cone Beam CT imaging for accurate diagnosis and treatment planning at our Colaba clinic.
            </p>
          </motion.div>

          {/* Dental Implants Periodontist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-[#c97b63] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h4 className="text-xl font-serif text-[#2d2d2d] mb-3">Dental Implants Periodontist</h4>
            <p className="text-[#2d2d2d] font-sans text-sm leading-relaxed">
              Specialized periodontal care, dental implant placement, bone grafting, and gum disease treatment by our experienced periodontist in Colaba.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
