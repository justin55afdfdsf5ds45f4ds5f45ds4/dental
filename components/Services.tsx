'use client';
import { motion } from 'framer-motion';
import { 
  SparklesIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  HeartIcon,
  ArrowPathIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'General Dentistry',
    description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
    icon: BeakerIcon,
  },
  {
    name: 'Cosmetic Dentistry',
    description: 'Transform your smile with whitening, veneers, and other aesthetic procedures.',
    icon: SparklesIcon,
  },
  {
    name: 'Preventive Care',
    description: 'Regular check-ups and cleanings to maintain optimal oral health.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Family Dentistry',
    description: 'Dental care for the whole family, from children to seniors.',
    icon: UserGroupIcon,
  },
  {
    name: 'Emergency Care',
    description: 'Urgent dental care services during our business hours.',
    icon: HeartIcon,
  },
  {
    name: 'Restorative Services',
    description: 'Full mouth rehabilitation and dental implant services.',
    icon: ArrowPathIcon,
  },
];

export const Services = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Dental Care
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a wide range of dental services to meet all your oral health needs.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 group-hover:scale-105">
                  <div className="px-6 py-8">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-base text-gray-500">{service.description}</p>
                  </div>
                  <div className="p-6 bg-gray-50 mt-auto">
                    <a href="/services" className="text-base font-medium text-blue-600 hover:text-blue-500">
                      Learn more →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};