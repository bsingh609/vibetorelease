'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { useIntersectionObserver } from '@/hooks';
import { CALENDLY_URL } from '@/lib/constants';

export default function FinalCTA() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg-animated" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Finally Ship
            <br />
            <span className="text-white/90">Your AI Prototype?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Book a free 30-minute deployment audit. We&apos;ll diagnose what&apos;s blocking
            production and give you a clear roadmap to launch.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900
                       rounded-full font-bold text-lg transition-all duration-300
                       hover:shadow-2xl hover:shadow-white/25 hover:scale-105"
              data-tracking="final-cta"
            >
              <FaCalendarAlt className="w-5 h-5" />
              Book Your Free Deployment Audit
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              30-minute call
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Actionable roadmap included
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
