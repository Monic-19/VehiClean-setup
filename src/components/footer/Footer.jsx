"use client"
import React from 'react';
import Link from 'next/link';
import { usePageNavigation } from '../../hooks/usePageNavigation';
import './footer.css';

const Footer = () => {
  const { handleNavClick } = usePageNavigation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <h3 className="footer-brand">VehiClean</h3>
            <p className="footer-description">
              Professional car cleaning services at your doorstep. 
              Keep your ride shining bright and rolling right!
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/" onClick={handleNavClick('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={handleNavClick('/services')}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/bundles" onClick={handleNavClick('/bundles')}>
                  Bundles
                </Link>
              </li>
              <li>
                <Link href="/book-now" onClick={handleNavClick('/book-now')}>
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="/contact" onClick={handleNavClick('/contact')}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/partnership" onClick={handleNavClick('/partnership')}>
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={handleNavClick('/about')}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" onClick={handleNavClick('/careers')}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <p>📍 Jaipur, Rajasthan</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ hello@vehiclean.com</p>
              <p>⏰ Mon - Sun: 8AM - 8PM</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 VehiClean. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
