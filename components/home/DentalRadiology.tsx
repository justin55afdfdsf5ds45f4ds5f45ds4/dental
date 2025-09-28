'use client';
import { motion } from 'framer-motion';

export const DentalRadiology = () => {
  return (
    <section className="py-20 bg-white">
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
            Dental Radiology at The Tooth Studio Colaba
          </h2>
        </motion.div>

        {/* Understanding Dental Radiology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#f9f7f4] rounded-2xl shadow-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Understanding Dental Radiology and Imaging Services</h3>
          <p className="text-[#2d2d2d] font-sans leading-relaxed">
            Dental radiology is a specialized field within dentistry that uses various imaging techniques to diagnose oral and maxillofacial conditions. At The Tooth Studio Dental, Skin & Hair Clinic in Colaba, our advanced dental radiology services provide crucial diagnostic information that guides treatment planning and ensures accurate diagnosis of dental problems that are not visible during clinical examination alone.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Importance of Dental X-Rays */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Importance of Dental X-Rays at The Tooth Studio Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              Dental X-rays are essential diagnostic tools that allow our Colaba dental team to see beyond what is visible during routine oral examinations. These images reveal hidden dental decay, bone loss, impacted teeth, cysts, tumors, and other conditions that might otherwise go undetected until they become more serious and painful. At The Tooth Studio Colaba, we utilize state-of-the-art digital radiography systems that provide superior image quality with significantly reduced radiation exposure compared to traditional film X-rays.
            </p>
          </motion.div>

          {/* Types of Dental X-Rays */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Types of Dental X-Rays Available in Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              At The Tooth Studio Colaba, we offer various types of dental radiographs to meet different diagnostic needs. Bitewing X-rays capture images of upper and lower teeth in a single view, primarily used to detect decay between teeth and assess bone levels around teeth. Periapical X-rays show the entire tooth from crown to root tip, essential for diagnosing root problems, abscesses, and periapical pathology. Panoramic X-rays provide a broad overview of the entire mouth, including all teeth, jaws, sinuses, and surrounding structures in a single image. These are particularly useful for treatment planning, wisdom tooth evaluation, and detecting cysts or tumors. Cephalometric X-rays capture side-view images of the head and are primarily used for orthodontic treatment planning and surgical procedures.
            </p>
          </motion.div>

          {/* Digital Radiography Technology */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Digital Radiography Technology in Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
              The Tooth Studio Colaba has invested in the latest digital radiography technology that offers numerous advantages over traditional film-based X-rays. Digital sensors capture images instantly, eliminating the need for chemical processing and reducing appointment time. The images can be enhanced, magnified, and analyzed immediately, allowing for better diagnostic accuracy and patient education.
            </p>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              Digital X-rays at our Colaba location use up to 90% less radiation than conventional film X-rays while providing superior image quality. The images are stored electronically, making them easily accessible for treatment planning, referrals, and comparison with future images to monitor changes over time. This technology also supports our commitment to environmental responsibility by eliminating chemical processing waste.
            </p>
          </motion.div>

          {/* 3D Cone Beam CT Imaging */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">3D Cone Beam CT Imaging at The Tooth Studio Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
              For complex cases requiring detailed three-dimensional analysis, The Tooth Studio Colaba offers Cone Beam Computed Tomography (CBCT) imaging. This advanced technology provides high-resolution 3D images of teeth, bone, sinuses, and surrounding structures, offering unprecedented detail for treatment planning. CBCT is particularly valuable for dental implant placement, wisdom tooth extraction, endodontic therapy, and orthodontic treatment planning.
            </p>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              The 3D imaging capabilities at our Colaba location allow for precise measurement of bone density, nerve location, and anatomical structures, ensuring safer and more predictable treatment outcomes. The detailed images help identify pathology that might be missed on traditional 2D X-rays and enable virtual treatment planning for complex procedures.
            </p>
          </motion.div>

        </div>

        {/* Radiation Safety and Specialized Imaging */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Radiation Safety */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#c97b63] to-[#8b9b8a] text-white rounded-2xl p-8"
          >
            <h3 className="text-2xl font-serif mb-6">Radiation Safety and Protection Measures</h3>
            <p className="text-white font-sans leading-relaxed mb-4">
              At The Tooth Studio Colaba, patient safety is our top priority, and we follow strict radiation safety protocols to minimize exposure while obtaining necessary diagnostic information. Our digital X-ray systems are regularly calibrated and maintained to ensure optimal performance and minimal radiation output. We use lead aprons and thyroid collars to protect patients during X-ray procedures.
            </p>
            <p className="text-white font-sans leading-relaxed">
              Our dental team is trained in radiation safety principles and follows ALARA (As Low As Reasonably Achievable) guidelines to ensure X-rays are taken only when clinically necessary. The frequency of X-rays is determined based on individual patient risk factors, oral health status, and treatment needs rather than arbitrary schedules.
            </p>
          </motion.div>

          {/* Specialized Imaging for Treatment Planning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#f9f7f4] rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Specialized Imaging for Treatment Planning</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
              The dental radiology services at The Tooth Studio Colaba play a crucial role in treatment planning for various dental procedures. For dental implant placement, detailed imaging helps determine bone quality, quantity, and the presence of vital structures such as nerves and sinuses. This information guides implant selection, placement angle, and surgical approach to ensure predictable outcomes.
            </p>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              Endodontic treatment planning benefits from high-resolution images that reveal root anatomy, canal configuration, and periapical pathology. Orthodontic treatment relies on cephalometric analysis and panoramic images to assess growth patterns, tooth positions, and jaw relationships. Oral surgery procedures require detailed imaging to identify anatomical variations and plan surgical approaches safely.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
