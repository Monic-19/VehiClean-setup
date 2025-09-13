"use client";
import React from 'react'
import Link from 'next/link'
import './navigator.css'
import { useTransitionRouter } from 'next-view-transitions'
import { usePathname } from 'next/navigation'

const Navigator = () => {
    const router = useTransitionRouter();
    const pathname = usePathname();

    function triggerPageTransition() {
      document.documentElement.animate([
        {
            clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
        },
        {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        }
      ],{
        duration: 2000,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      })
    }


    const handleNavClick = (path) => (e) => {
        if(pathname === path) {
            e.preventDefault();
            return;
        }

        router.push(path, {
            onTransitionReady: triggerPageTransition,
        });
    }

  return (
    <div className='nav'>
      <div className="col">
        <div className="nav-logo">
            <Link href={"/"} onClick={handleNavClick("/")}>VehiClean</Link>
        </div>
      </div>
      <div className="col">
        <div className="nav-items">
          
            <div className="nav-item">
                <Link href={"/work"} onClick={handleNavClick("/work")}>Work</Link>
            </div>
            <div className="nav-item">
                <Link href={"/studio"} onClick={handleNavClick("/studio")}>Studio</Link>
            </div>
            <div className="nav-item">
                <Link href={"/contact"} onClick={handleNavClick("/contact")}>Contact</Link>
            </div>
        </div>
        <div className="nav-copy">
            <p>Jaipur, Rajasthan</p>
        </div>
      </div>
    </div>
  )
}

export default Navigator
