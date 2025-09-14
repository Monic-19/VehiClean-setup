'use client';

import React from 'react';
import './StickyCards.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CiClock1 } from 'react-icons/ci';
import { FaRupeeSign } from 'react-icons/fa';
import { stickycardsdata } from '../../../data/stickyCardsData';

gsap.registerPlugin(ScrollTrigger);

const Stickycards = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll('.sticky-card');

      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            end: 'top top',
            pin: true,
            endTrigger: stickyCards[stickyCards.length - 1],
            pinSpacing: false,
          });
        }

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: 'top bottom',
            end: 'top top',
            onUpdate: self => {
              const progress = self.progress;
              const scale = 1 - progress * 0.25;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity = progress;

              gsap.set(card, {
                scale: scale,
                rotation: rotation,
                '--after-opacity': afterOpacity,
              });
            },
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <div className="sticky-cards" ref={container}>
      {stickycardsdata.map((cardData, index) => (
        <div className="sticky-card" key={index}>
          <div className="sticky-card-index">
            <h1>0{cardData.index + 1}</h1>
          </div>
          <div className="sticky-card-content">
            <div className="sticky-card-content-wrapper">
              <h1 className="sticky-card-header">{cardData.title}</h1>

              <div className="sticky-card-image">
                <img src={cardData.image} alt={cardData.title + '.jpg'} />
              </div>

              <div className="sticky-card-copy">
                <div className="sticky-card-copy-title">
                  <p className="flex items-center gap-2">
                    <CiClock1 className="text-xl" />
                    {cardData.duration}
                  </p>

                  <p className="flex items-center gap-2 mt-2 font-extrabold ">
                    <FaRupeeSign className="text-sm" />
                    {cardData.price}
                  </p>
                </div>

                <div className="sticky-card-copy-description">
                  {cardData.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stickycards;
