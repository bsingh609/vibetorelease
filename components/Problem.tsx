'use client';

import { motion } from 'framer-motion';
import { FaLaptopCode, FaTheaterMasks, FaFireAlt, FaRedo } from 'react-icons/fa';
import { useIntersectionObserver } from '@/hooks';

const painPoints = [
  {
    icon: FaLaptopCode,
    title: 'Works perfectly... on one developer\'s laptop',
    description: 'Your AI model runs great in Jupyter notebooks, but production is a different beast entirely.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaTheaterMasks,
    title: 'Impressed investors... months ago',
    description: 'The demo was amazing. But demos don\'t generate revenue. Shipped products do.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaFireAlt,
    title: 'Burning money while competitors ship',
    description: 'Every month of delay costs you market share and burns through your runway.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FaRedo,
    title: 'Your team keeps saying \'just a bit more work\'',
    description: 'The scope keeps creeping. The timeline keeps slipping. Sound familiar?',
    color: 'from-green-500 to-emerald-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Problem() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section id="problem" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-semibold mb-4">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Prototype Purgatory
          </h2>
          <p className="text-lg text-gray-600">
            Sound familiar? You&apos;re not alone. 85% of AI projects get stuck here.
            The good news: there&apos;s a way out.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-sm
                       hover:shadow-xl transition-all duration-300
                       border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0
                          group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl
                            bg-gradient-to-br ${point.color} mb-6`}
                >
                  <point.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div
                className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full
                          bg-gradient-to-br ${point.color} opacity-10
                          group-hover:opacity-20 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-700 font-medium">
            Ready to break free from prototype purgatory?
          </p>
          <p className="text-gray-500 mt-2">
            Keep scrolling to see how we do it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
