'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';

const testimonials = [
  {
    name: 'Sarah Johnson',
    image: '/images/testimonial-1.jpg',
    text: 'Amazing dental care! The staff is friendly and professional. Dr. Sood made me feel comfortable throughout my entire procedure.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    image: '/images/testimonial-2.jpg',
    text: 'Best dental experience I\'ve ever had. The modern facility and gentle approach to dentistry make this place stand out.',
    rating: 5,
  },
  {
    name: 'Emma Wilson',
    image: '/images/testimonial-3.jpg',
    text: 'I\'ve been coming here for years and have always received excellent care. The entire team is knowledgeable and caring.',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Patients Say
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-900/5 rounded-xl"
              >
                <div>
                  <div className="flex items-center gap-x-4">
                    <Image
                      className="h-16 w-16 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                    />
                    <div>
                      <h3 className="text-lg font-semibold leading-6 text-gray-900">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className="h-5 w-5 text-yellow-400"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 leading-6">{testimonial.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};