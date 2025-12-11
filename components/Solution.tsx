'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaChevronDown } from 'react-icons/fa';
import { useIntersectionObserver } from '@/hooks';
import { SOLUTION_PHASES } from '@/lib/constants';

interface PhaseCardProps {
  phase: typeof SOLUTION_PHASES[number];
  index: number;
  isVisible: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

function PhaseCard({ phase, index, isVisible, isExpanded, onToggle }: PhaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Connector */}
      {index < SOLUTION_PHASES.length - 1 && (
        <div className="hidden lg:block absolute top-24 left-1/2 w-full h-0.5 bg-gradient-to-r from-gradient-purple to-gradient-pink" />
      )}

      <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Phase Header */}
        <button
          type="button"
          onClick={onToggle}
          className="w-full p-6 md:p-8 text-left focus:outline-none focus-visible:ring-2
                   focus-visible:ring-gradient-purple focus-visible:ring-offset-2"
          aria-expanded={isExpanded}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              {/* Phase Number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-bg
                            flex items-center justify-center text-white font-bold text-lg">
                {phase.phase}
              </div>
              <div>
                <span className="text-sm font-medium text-gradient-purple">
                  {phase.subtitle}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-1">
                  {phase.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {phase.description}
                </p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <FaChevronDown className="w-4 h-4 text-gray-500" />
            </motion.div>
          </div>
        </button>

        {/* Expandable Checklist */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 border-t border-gray-100">
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100
                                     flex items-center justify-center mt-0.5">
                        <FaCheck className="w-3 h-3 text-green-600" />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Solution() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  const togglePhase = (index: number) => {
    setExpandedPhase(expandedPhase === index ? null : index);
  };

  return (
    <section id="solution" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-purple/10
                         text-gradient-purple text-sm font-semibold mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            From Vibe to Release:{' '}
            <span className="gradient-text">Our Production Pipeline</span>
          </h2>
          <p className="text-lg text-gray-600">
            A battle-tested process that gets your AI prototype live in 6-8 weeks.
            No surprises. No scope creep. Just results.
          </p>
        </motion.div>

        {/* Timeline Progress Bar (Desktop) */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isIntersecting ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block h-1 bg-gradient-to-r from-gradient-purple to-gradient-pink
                   rounded-full mb-12 origin-left"
        />

        {/* Phases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {SOLUTION_PHASES.map((phase, index) => (
            <PhaseCard
              key={index}
              phase={phase}
              index={index}
              isVisible={isIntersecting}
              isExpanded={expandedPhase === index}
              onToggle={() => togglePhase(index)}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 p-6 bg-white rounded-xl border border-gray-200"
        >
          <p className="text-gray-700">
            <span className="font-semibold">Every engagement includes:</span>{' '}
            Documentation, knowledge transfer, and 30 days of post-deployment support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
