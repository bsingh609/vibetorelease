'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { useIntersectionObserver } from '@/hooks';
import { TESTIMONIALS } from '@/lib/constants';

export default function Proof() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="proof" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100
                         text-green-600 text-sm font-semibold mb-4">
            Proof It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Prototypes We&apos;ve Released
          </h2>
          <p className="text-lg text-gray-600">
            Real results from real companies who were stuck in prototype purgatory.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:grid md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100
                       hover:shadow-xl hover:border-gradient-purple/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                  <FaQuoteLeft className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Result Badge */}
              <div className="flex justify-end mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full
                               bg-green-100 text-green-700 text-sm font-semibold">
                  {testimonial.result}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center
                              text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                {/* Result Badge */}
                <div className="flex justify-between items-center mb-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                    <FaQuoteLeft className="w-4 h-4 text-white" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full
                                 bg-green-100 text-green-700 text-sm font-semibold">
                    {TESTIMONIALS[activeIndex].result}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  &quot;{TESTIMONIALS[activeIndex].quote}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center
                                text-white font-bold text-lg">
                    {TESTIMONIALS[activeIndex].author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {TESTIMONIALS[activeIndex].author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {TESTIMONIALS[activeIndex].role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                         text-gray-600 hover:bg-gradient-purple hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? 'w-6 bg-gradient-purple'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                         text-gray-600 hover:bg-gradient-purple hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
