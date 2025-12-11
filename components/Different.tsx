'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaFileContract, FaHandshake, FaGraduationCap, FaCheck } from 'react-icons/fa';
import { useIntersectionObserver } from '@/hooks';

const differentiators = [
  {
    icon: FaRocket,
    title: 'We Ship, Not Consult',
    description: 'No 100-page reports. We deploy your prototype to production ourselves. You get a running system, not recommendations.',
    highlights: ['Hands-on implementation', 'Real deployments', 'Working code'],
  },
  {
    icon: FaFileContract,
    title: 'Fixed Scope, Fixed Price',
    description: 'No surprise bills. We scope the work, quote a price, and deliver. If we underestimate, that\'s on us.',
    highlights: ['Transparent pricing', 'No hourly billing', 'Risk-free'],
  },
  {
    icon: FaHandshake,
    title: 'Skin in the Game',
    description: 'We succeed when you ship. Our reputation depends on getting your app into production, not billing hours.',
    highlights: ['Results-driven', 'Aligned incentives', 'Partnership mindset'],
  },
  {
    icon: FaGraduationCap,
    title: 'Your Team Learns',
    description: 'We don\'t create dependency. Your engineers work alongside us and inherit a production system they understand.',
    highlights: ['Knowledge transfer', 'Documentation', 'Team enablement'],
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Different() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10
                         text-white text-sm font-semibold mb-4">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How We&apos;re Different
          </h2>
          <p className="text-lg text-gray-400">
            We&apos;re not consultants who write reports. We&apos;re engineers who ship code.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8
                       border border-white/10 hover:border-gradient-purple/50
                       hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl
                            gradient-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {item.highlights.map((highlight, hIndex) => (
                  <span
                    key={hIndex}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                             bg-gradient-purple/20 text-gradient-purple text-sm font-medium"
                  >
                    <FaCheck className="w-3 h-3" />
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gradient-purple/0
                            to-gradient-pink/0 group-hover:from-gradient-purple/5
                            group-hover:to-gradient-pink/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
