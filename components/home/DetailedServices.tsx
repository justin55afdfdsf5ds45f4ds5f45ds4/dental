'use client';
import { motion } from 'framer-motion';

export const DetailedServices = () => {
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
          <h3 className="text-2xl font-serif text-[#c97b63] mb-6">
            What is a Dental Clinic and Why Choose The Tooth Studio Colaba?
          </h3>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <p className="text-lg font-sans text-[#2d2d2d] leading-relaxed">
            A dental clinic is a specialized healthcare facility dedicated to providing comprehensive oral health services, diagnosis, treatment, and prevention of dental and oral diseases. At The Tooth Studio Dental, Skin & Hair Clinic in Colaba, we represent the gold standard of dental care in South Mumbai, offering a complete range of dental services under one roof.
          </p>
        </motion.div>

        {/* Dental Clinic Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h3 className="text-3xl font-serif text-[#c97b63] mb-6">Understanding Dental Clinic Services at The Tooth Studio Colaba</h3>
          <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
            Dental clinics serve as the primary point of care for all oral health needs, from routine preventive care to complex restorative procedures. At The Tooth Studio Colaba, our dental clinic operates as a comprehensive healthcare center where patients can receive everything from basic dental cleanings to advanced surgical procedures. Our facility combines state-of-the-art equipment with experienced dental professionals to deliver exceptional patient outcomes.
          </p>
          <p className="text-[#2d2d2d] font-sans leading-relaxed">
            The primary function of a dental clinic like The Tooth Studio in Colaba is to maintain and restore oral health through various treatment modalities. This includes preventive services such as regular check-ups, professional cleanings, fluoride treatments, and oral cancer screenings. Our Colaba location ensures easy access for residents of South Mumbai who prioritize their oral health.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Preventive Care */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Emergency Dental Care at The Tooth Studio Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              Dental emergencies can occur at any time, and The Tooth Studio Dental Clinic in Colaba is equipped to handle urgent dental situations promptly and effectively. Common dental emergencies include severe toothaches, knocked-out teeth, broken or chipped teeth, lost fillings or crowns, and acute gum infections. Our emergency dental protocols ensure rapid assessment and immediate treatment to alleviate pain and prevent further complications.
            </p>
          </motion.div>

          {/* Technology */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#c97b63] to-[#8b9b8a] text-white rounded-2xl p-8"
          >
            <h3 className="text-2xl font-serif mb-6">Technology and Equipment at Our Colaba Dental Clinic</h3>
            <p className="text-white font-sans leading-relaxed">
              The Tooth Studio Dental Clinic in Colaba features cutting-edge dental technology that enhances diagnostic accuracy and treatment outcomes. Our digital radiography system provides high-quality images with minimal radiation exposure, while our intraoral cameras allow patients to see their teeth and gums in real-time during examinations. We utilize laser dentistry for soft tissue procedures, offering precision treatment with reduced healing time and minimal discomfort.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
