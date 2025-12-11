'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS, CALENDLY_URL } from '@/lib/constants';
import { useScrollPosition } from '@/hooks';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScrollPosition();

  const isScrolled = scrollY > 20;

  // Close mobile menu on scroll
  useEffect(() => {
    if (isMobileMenuOpen && scrollY > 100) {
      setIsMobileMenuOpen(false);
    }
  }, [scrollY, isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            aria-label="VibeToRelease Home"
          >
            <span className="text-xl md:text-2xl font-bold">
              <span className={isScrolled ? 'text-gray-900' : 'text-white'}>
                Vibe
              </span>
              <span className="gradient-text">To</span>
              <span className={isScrolled ? 'text-gray-900' : 'text-white'}>
                Release
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gradient-purple ${
                  isScrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-6 !text-sm"
              data-tracking="header-cta"
            >
              Book Free Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container-custom py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block py-3 text-lg font-medium text-gray-900 hover:text-gradient-purple transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="btn-primary w-full mt-4"
                data-tracking="mobile-header-cta"
              >
                Book Free Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
