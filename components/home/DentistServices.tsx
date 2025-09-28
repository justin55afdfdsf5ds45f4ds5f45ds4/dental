'use client';
import { motion } from 'framer-motion';

export const DentistServices = () => {
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
            Dentist Services at The Tooth Studio Colaba
          </h2>
        </motion.div>

        {/* Understanding the Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#f9f7f4] rounded-2xl shadow-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Understanding the Role of a Dentist at The Tooth Studio</h3>
          <p className="text-[#2d2d2d] font-sans leading-relaxed">
            A dentist is a licensed healthcare professional who specializes in the diagnosis, prevention, and treatment of diseases and conditions affecting the teeth, gums, and oral cavity. At The Tooth Studio Dental, Skin & Hair Clinic in Colaba, our team of experienced dentists provides comprehensive oral healthcare services to patients of all ages, from children to seniors.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Educational Background */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Educational Background and Training of Dentists at The Tooth Studio Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              The dentists at The Tooth Studio Colaba have completed extensive education and training to provide the highest quality dental care. Each dentist holds a Bachelor of Dental Surgery (BDS) degree from accredited dental schools, followed by additional specialized training and continuing education courses. Our Colaba dental team stays current with the latest advancements in dental science, technology, and treatment techniques through regular professional development programs.
            </p>
          </motion.div>

          {/* Comprehensive Examinations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Comprehensive Dental Examinations in Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
              During a comprehensive dental examination at The Tooth Studio Colaba, our dentists perform thorough assessments of your oral health status. This includes visual examination of teeth and gums, palpation of oral tissues, bite analysis, and review of dental X-rays. Our dentists check for signs of tooth decay, gum disease, oral cancer, TMJ disorders, and other oral health conditions that may require treatment.
            </p>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              The examination process at our Colaba location also includes assessment of existing dental work such as fillings, crowns, and bridges to ensure they remain in good condition. Our dentists evaluate your bite alignment and jaw function, checking for signs of teeth grinding or clenching that could lead to dental problems. This comprehensive approach ensures early detection and prevention of dental issues.
            </p>
          </motion.div>

          {/* Diagnostic Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Diagnostic Capabilities of Dentists at The Tooth Studio Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              Modern dentistry relies heavily on accurate diagnosis, and the dentists at The Tooth Studio Colaba utilize advanced diagnostic tools and techniques to identify dental problems in their earliest stages. Digital X-rays provide detailed images of tooth structure, bone levels, and hidden decay areas that are not visible during clinical examination. Our intraoral cameras capture high-resolution images of teeth and gums, allowing both dentist and patient to visualize problem areas clearly.
            </p>
          </motion.div>

          {/* Treatment Planning */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Treatment Planning and Patient Education</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
              The dentists at The Tooth Studio Colaba excel in developing personalized treatment plans that address each patient's unique needs and goals. After completing the diagnostic phase, our dentists explain findings clearly and present treatment options with their associated benefits, risks, and costs. This collaborative approach ensures that patients are well-informed and comfortable with their treatment decisions.
            </p>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              Patient education is a cornerstone of dental care at our Colaba location. Our dentists take time to educate patients about proper oral hygiene techniques, dietary factors that affect oral health, and lifestyle modifications that can improve dental outcomes. This educational approach helps patients maintain their oral health between dental visits and prevents future dental problems.
            </p>
          </motion.div>

        </div>

        {/* Cosmetic Dentistry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#c97b63] to-[#8b9b8a] text-white rounded-2xl p-8"
        >
          <h3 className="text-3xl font-serif mb-6 text-center">Cosmetic Dentistry Services by Dentists in Colaba</h3>
          <p className="text-white font-sans leading-relaxed mb-4">
            The dentists at The Tooth Studio Colaba are skilled in various cosmetic dentistry procedures designed to enhance the appearance of teeth and smiles. Professional teeth whitening treatments can brighten discolored teeth by several shades, providing immediate aesthetic improvement. Porcelain veneers offer a comprehensive solution for teeth with multiple cosmetic imperfections, including chips, stains, gaps, and minor misalignment.
          </p>
          <p className="text-white font-sans leading-relaxed">
            Cosmetic bonding procedures performed by our Colaba dentists can repair small chips and gaps while improving tooth shape and color. Smile makeovers combine multiple cosmetic treatments to achieve dramatic improvements in smile appearance. Our dentists work closely with patients to understand their aesthetic goals and create treatment plans that deliver beautiful, natural-looking results.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
