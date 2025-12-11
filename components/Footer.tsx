'use client';

import Link from 'next/link';
import { NAV_LINKS, CALENDLY_URL } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">Vibe</span>
                <span className="gradient-text">To</span>
                <span className="text-white">Release</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-md">
              We take prototypes from proof-of-concept to production-ready,
              revenue-generating systems. Stop demoing. Start earning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !text-sm !py-2 !px-4"
              data-tracking="footer-cta"
            >
              Book Free Audit
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} VibeToRelease. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
