'use client';
import { motion } from 'framer-motion';

export const OrthodontistServices = () => {
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
            Orthodontist Services at The Tooth Studio Colaba
          </h2>
        </motion.div>

        {/* Understanding Orthodontics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Understanding Orthodontics and The Tooth Studio Colaba Expertise</h3>
          <p className="text-[#2d2d2d] font-sans leading-relaxed">
            Orthodontics is a specialized branch of dentistry focused on the diagnosis, prevention, and treatment of dental and facial irregularities. At The Tooth Studio Dental, Skin & Hair Clinic in Colaba, our orthodontic services address problems related to tooth alignment, bite relationships, and jaw position. Our orthodontic specialists help patients achieve properly aligned teeth, improved oral function, and enhanced facial aesthetics.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* What Does an Orthodontist Do */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">What Does an Orthodontist Do at The Tooth Studio Colaba?</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
              An orthodontist is a dental specialist who has completed additional years of education beyond dental school, focusing specifically on tooth movement and facial development. The orthodontists at The Tooth Studio Colaba diagnose malocclusions (bad bites), crowded or crooked teeth, gaps between teeth, and jaw alignment issues. They develop comprehensive treatment plans using various orthodontic appliances to gradually move teeth into proper positions.
            </p>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              The orthodontic process at our Colaba location begins with a thorough examination including clinical assessment, digital X-rays, photographs, and dental impressions. Our orthodontists analyze facial symmetry, jaw relationships, and tooth positions to determine the most effective treatment approach. This detailed analysis ensures optimal treatment outcomes and patient satisfaction.
            </p>
          </motion.div>

          {/* Types of Problems Treated */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Types of Orthodontic Problems Treated in Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              At The Tooth Studio Colaba, our orthodontists treat a wide range of dental alignment issues. Crowded teeth occur when there is insufficient space in the jaw for all teeth to align properly, leading to overlapping and twisted teeth. Spacing issues involve excessive gaps between teeth, which can affect both aesthetics and function. Overbites occur when upper teeth significantly overlap lower teeth, while underbites present when lower teeth protrude beyond upper teeth. Crossbites involve misalignment where some upper teeth bite inside lower teeth, and open bites occur when front teeth don't meet when the jaw is closed. Our Colaba orthodontists also address more complex issues such as impacted teeth, jaw asymmetries, and facial imbalances that affect both oral function and facial aesthetics.
            </p>
          </motion.div>

          {/* Traditional Braces */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Traditional Braces Treatment at The Tooth Studio Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
              Traditional metal braces remain one of the most effective orthodontic treatments available, and The Tooth Studio Colaba utilizes the latest advancements in braces technology. Modern braces are smaller, more comfortable, and more efficient than previous generations. Our orthodontists use high-grade stainless steel brackets and advanced wire systems that apply gentle, continuous pressure to move teeth gradually into proper positions.
            </p>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              The treatment process with traditional braces at our Colaba location typically involves monthly adjustment appointments where orthodontists modify wire tension and replace elastics to continue the tooth movement process. Treatment duration varies depending on the complexity of the case, but most patients achieve desired results within 18-24 months. Our orthodontists provide detailed care instructions and emergency protocols to ensure smooth treatment progress.
            </p>
          </motion.div>

          {/* Clear Aligner Therapy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-serif text-[#c97b63] mb-6">Clear Aligner Therapy in Colaba</h3>
            <p className="text-[#2d2d2d] font-sans leading-relaxed mb-4">
              For patients seeking a more discreet orthodontic option, The Tooth Studio Colaba offers clear aligner therapy using advanced 3D imaging technology. Clear aligners are virtually invisible, removable orthodontic appliances that gradually straighten teeth through a series of custom-made trays. Each aligner is worn for approximately two weeks before progressing to the next stage of treatment.
            </p>
            <p className="text-[#2d2d2d] font-sans leading-relaxed">
              Clear aligner treatment at our Colaba location begins with digital impressions and 3D treatment planning, allowing patients to visualize their expected results before beginning treatment. The removable nature of aligners allows patients to maintain normal eating habits and oral hygiene routines throughout treatment. Regular progress monitoring ensures optimal treatment outcomes and timely completion.
            </p>
          </motion.div>

        </div>

        {/* Orthodontic Care for Children */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#c97b63] to-[#8b9b8a] text-white rounded-2xl p-8"
        >
          <h3 className="text-3xl font-serif mb-6 text-center">Orthodontic Care for Children in Colaba</h3>
          <p className="text-white font-sans leading-relaxed mb-4">
            The Tooth Studio Colaba provides specialized orthodontic care for children and adolescents, taking advantage of growth and development to achieve optimal results. Early orthodontic intervention can address developing problems before they become more complex and difficult to treat. Our orthodontists recommend initial evaluations by age 7 to identify potential issues and determine appropriate timing for treatment.
          </p>
          <p className="text-white font-sans leading-relaxed">
            Phase I treatment for younger patients may involve expansion appliances, space maintainers, or habit-breaking devices to guide proper dental development. Phase II treatment typically occurs during adolescence when permanent teeth have erupted, allowing for comprehensive alignment and bite correction. Our Colaba orthodontists work closely with parents to ensure understanding and compliance throughout the treatment process.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
