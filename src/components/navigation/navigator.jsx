'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './navigator.css';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageNavigation } from '../../hooks/usePageNavigation';

const Navigator = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { handleNavClick } = usePageNavigation({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    delayMs: 300,
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="nav">
        <div className="col">
          <div className="nav-logo">
            <Link href={'/'} onClick={handleNavClick('/')}>
              VehiClean
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="col desktop-nav">
          <div className="nav-items">
            <div className="nav-item">
              <Link href={'/services'} onClick={handleNavClick('/services')}>
                Services
              </Link>
            </div>
            <div className="nav-item">
              <Link href={'/bundles'} onClick={handleNavClick('/bundles')}>
                Bundles
              </Link>
            </div>
            
            <div className="nav-item">
              <Link href={'/contact'} onClick={handleNavClick('/contact')}>
                Contact
              </Link>
            </div>
            <div className="nav-item">
              <Link
                href={'/partnership'}
                onClick={handleNavClick('/partnership')}
              >
                Partner With Us
              </Link>
            </div>
            <div className="nav-item">
              <Link href={'/book-now'} onClick={handleNavClick('/book-now')}>
                Book Now
              </Link>
            </div>
          </div>
          <div className="nav-copy">
            <p>Jaipur, Rajasthan</p>
          </div>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="hamburger-btn"
          aria-label="Toggle mobile menu"
        >
          <motion.span
            className="hamburger-line"
            animate={
              isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="hamburger-line"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="hamburger-line"
            animate={
              isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay and Slide-in Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-overlay"
              onClick={closeMobileMenu}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="mobile-menu-container"
            >
              {/* Mobile Menu Header */}
              <div className="mobile-menu-header">
                <Link
                  href={'/'}
                  onClick={handleNavClick('/')}
                  className="mobile-menu-logo"
                >
                  VehiClean
                </Link>
              </div>

              {/* Mobile Menu Items */}
              <nav className="mobile-menu-nav">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <Link
                    href="/"
                    onClick={handleNavClick('/')}
                    className="mobile-menu-link"
                  >
                    Home
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href="/services"
                    onClick={handleNavClick('/services')}
                    className="mobile-menu-link"
                  >
                    Services
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <Link
                    href="/bundles"
                    onClick={handleNavClick('/bundles')}
                    className="mobile-menu-link"
                  >
                    Bundles
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/book-now"
                    onClick={handleNavClick('/book-now')}
                    className="mobile-menu-link"
                  >
                    Book Now
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    href="/contact"
                    onClick={handleNavClick('/contact')}
                    className="mobile-menu-link"
                  >
                    Contact
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/partnership"
                    onClick={handleNavClick('/partnership')}
                    className="mobile-menu-link"
                  >
                    Partner With Us
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigator;
