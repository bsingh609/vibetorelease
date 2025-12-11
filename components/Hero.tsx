'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { CALENDLY_URL } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0118]">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[128px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-[15%] w-2 h-2 bg-purple-400 rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-[20%] w-3 h-3 bg-pink-400 rounded-full"
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-40 left-[25%] w-2 h-2 bg-violet-400 rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-60 right-[15%] w-1.5 h-1.5 bg-purple-300 rounded-full"
        animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8"
          >
            <span className="text-white">Your Prototype Has Been</span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400
                             bg-clip-text text-transparent">
                &quot;Almost Ready&quot;
              </span>
            </span>
            <span className="text-white"> for Months.</span>
            <br />
            <span className="text-gray-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 block">
              We Deploy It to Production.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Stop demoing. Start earning.{' '}
            <span className="text-white font-medium">From vibe to release.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4
                       bg-gradient-to-r from-purple-600 to-pink-600
                       rounded-full font-semibold text-lg text-white
                       transition-all duration-300 hover:scale-105
                       shadow-[0_0_40px_rgba(168,85,247,0.4)]
                       hover:shadow-[0_0_60px_rgba(168,85,247,0.6)]"
              data-tracking="hero-primary-cta"
            >
              Book Your Free Deployment Audit
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#solution"
              className="inline-flex items-center gap-2 px-6 py-4 text-gray-400 font-medium
                       hover:text-white transition-colors border border-gray-700 rounded-full
                       hover:border-gray-500"
            >
              See How It Works
              <FaArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

          {/* Social Proof Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 flex items-center justify-center gap-8 text-gray-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fixed-price engagements</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>6-8 week delivery</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-500"
        >
          <div className="w-5 h-8 rounded-full border-2 border-purple-500/30 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1 h-1 rounded-full bg-purple-400"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
