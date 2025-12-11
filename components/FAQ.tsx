'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useIntersectionObserver } from '@/hooks';
import { FAQ_ITEMS } from '@/lib/constants';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-gradient-purple
                 focus-visible:ring-offset-2 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center
                   text-gray-600 group-hover:bg-gradient-purple group-hover:text-white transition-colors"
        >
          {isOpen ? (
            <FaMinus className="w-3 h-3" />
          ) : (
            <FaPlus className="w-3 h-3" />
          )}
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100
                           text-gray-700 text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about working with us.
            </p>
          </motion.div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-6 md:p-8"
          >
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
