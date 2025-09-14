'use client';

import Link from 'next/link';
import Image from 'next/image';
import './not-found.css';
import { useRevealer } from '@/hooks/useRevealer';

export default function NotFound() {
  useRevealer();
  return (
    <>
      <div className="revealer"></div>
      <div className="not-found-container">
        <div className="left-section">
          <div className="top-content">
            <p className="error-message">
              The page you&apos;re looking does not<br />
              exist or has been removed. Let&apos;s take<br />
              you back in the right direction.
            </p>

            <Link href="/" className="home-button">
              GO BACK TO HOME
              <div className="button-dot"></div>
            </Link>
          </div>

          <div className="bottom-content">
            <h1 className="error-code">
              404 PAGE<br />
              NOT FOUND
            </h1>
          </div>
        </div>

        <div className="right-section">
          <Image
            src="/hero-bg.avif"
            alt="Car wash service"
            className="carwash-image"
            fill
            priority
          />
        </div>
      </div>
    </>
  );
}
