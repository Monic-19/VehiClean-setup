'use client';

import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

export const usePageNavigation = (options = {}) => {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const { isMobileMenuOpen, setIsMobileMenuOpen, delayMs = 300 } = options;

  function triggerPageTransition() {
    document.documentElement.animate(
      [
        {
          clipPath: 'polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)',
        },
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
      ],
      {
        duration: 2000,
        easing: 'cubic-bezier(0.9, 0, 0.1, 1)',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  }

  const handleNavClick = path => e => {
    e.preventDefault();

    if (pathname === path) {
      return;
    }

    // Handle mobile menu closing if provided
    if (isMobileMenuOpen && setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);

      setTimeout(() => {
        router.push(path, {
          onTransitionReady: triggerPageTransition,
        });
      }, delayMs);
    } else {
      router.push(path, {
        onTransitionReady: triggerPageTransition,
      });
    }
  };

  // For direct navigation without event handling
  const navigateTo = path => {
    if (pathname === path) {
      return;
    }

    router.push(path, {
      onTransitionReady: triggerPageTransition,
    });
  };

  return {
    handleNavClick,
    navigateTo,
    currentPath: pathname,
    triggerPageTransition,
  };
};
