'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const reviews = [
  {
    name: "Priya Shah",
    image: "/images/testimonial-1.jpg",
    text: "The Tooth Studio has been my family's dental care provider for years. Dr. and the team are incredibly professional and caring.",
    rating: 5
  },
  {
    name: "Rahul Mehta",
    image: "/images/testimonial-2.jpg",
    text: "Best dental experience in South Mumbai! State-of-the-art facility with a team that truly cares about your comfort.",
    rating: 5
  },
  {
    name: "Anjali Desai",
    image: "/images/testimonial-3.jpg",
    text: "I had my dental implant procedure here. The entire process was smooth, and the results are amazing. Highly recommended!",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-[#2d2d2d] mb-4">What Our Patients Say</h2>
          <p className="text-lg font-sans text-[#2d2d2d]">Real experiences from our valued patients</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f9f7f4] rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-serif text-[#2d2d2d]">{review.name}</h3>
                  <div className="flex text-[#c97b63]">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#2d2d2d] font-sans italic">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};