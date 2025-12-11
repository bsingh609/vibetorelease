'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver, useCountUp } from '@/hooks';
import { STATS } from '@/lib/constants';

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  highlight?: boolean;
  isVisible: boolean;
  delay: number;
}

function StatCard({
  value,
  suffix = '',
  prefix = '',
  label,
  description,
  highlight = false,
  isVisible,
  delay,
}: StatCardProps) {
  const count = useCountUp({
    end: value,
    duration: 2000,
    delay: delay,
    enabled: isVisible,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={`relative p-6 md:p-8 rounded-2xl text-center ${
        highlight
          ? 'bg-gradient-to-br from-gradient-purple to-gradient-pink text-white'
          : 'bg-white text-gray-900'
      }`}
    >
      {/* Value */}
      <div className="mb-2">
        <span className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
          highlight ? 'text-white' : 'gradient-text'
        }`}>
          {prefix}
          {count}
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className={`text-lg font-semibold mb-1 ${
        highlight ? 'text-white/90' : 'text-gray-800'
      }`}>
        {label}
      </p>

      {/* Description */}
      <p className={`text-sm ${
        highlight ? 'text-white/70' : 'text-gray-500'
      }`}>
        {description}
      </p>

      {/* Highlight indicator */}
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full
                      bg-white text-gradient-purple text-xs font-bold shadow-lg">
          Our Track Record
        </div>
      )}
    </motion.div>
  );
}

export default function Stats() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  return (
    <section className="py-16 md:py-20 bg-gray-900" ref={ref}>
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            The AI Deployment Reality
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Most AI projects fail to reach production. We exist to change that.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              prefix={'prefix' in stat ? stat.prefix : ''}
              label={stat.label}
              description={stat.description}
              highlight={'highlight' in stat && stat.highlight}
              isVisible={isIntersecting}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
