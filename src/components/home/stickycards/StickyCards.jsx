"use client"

import React from 'react'
import './StickyCards.css'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Stickycards = () => {

    const stickycardsdata = [
        {
          index: 0,
          title: "Mountain Adventure",
          image: "/sticky-cards/card1.avif",
          description: "Explore the serene beauty of the mountains with guided hiking and camping experiences."
        },
        {
          index: 1,
          title: "City Lights",
          image: "/sticky-cards/card2.avif",
          description: "Dive into the vibrant nightlife and culture of the world's most iconic cities."
        },
        {
          index: 2,
          title: "Ocean Escape",
          image: "/sticky-cards/card3.avif",
          description: "Relax on crystal-clear beaches and enjoy water sports on your tropical getaway."
        },
        {
          index: 3,
          title: "Desert Safari",
          image: "/sticky-cards/card4.avif",
          description: "Take a thrilling ride through the dunes and discover the secrets of the desert."
        },
        {
          index: 4,
          title: "Forest Retreat",
          image: "/sticky-cards/card5.avif",
          description: "Unplug and unwind in a cozy cabin nestled in a peaceful, green forest."
        }
      ];
    
    const container = useRef(null); 

    useGSAP(() => {
        const stickyCards = document.querySelectorAll(".sticky-card");

        stickyCards.forEach((card,index) => {
            if(index < stickyCards.length - 1){
                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    end: "top top",
                    pin: true,
                    endTrigger: stickyCards[stickyCards.length - 1],
                    pinSpacing: false,
                })
            }

            if(index < stickyCards.length - 1){
                ScrollTrigger.create({
                    trigger: stickyCards[index+1],
                    start: "top bottom",
                    end: "top top",
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const scale = 1 - progress * 0.25;
                        const rotation =  (index % 2 === 0 ? 5 : -5) * progress;
                        const afterOpacity = progress;

                        gsap.set(card, {
                            scale: scale,
                            rotation: rotation,
                            "--after-opacity": afterOpacity,
                        })
                    },
                })
            }
        })
    },{scope: container})

  return (
    <div className='sticky-cards' ref={container}>
      {
        stickycardsdata.map( (cardData,index) =>  (
            <div className="sticky-card" key={index}>
                <div className="sticky-card-index">
                    <h1>0{cardData.index + 1}</h1>
                </div>
                <div className="sticky-card-content">
                    <div className="sticky-card-content-wrapper">

                        <h1 className='sticky-card-header'>{cardData.title}</h1>

                        <div className="sticky-card-image">
                            <img src={cardData.image} alt={cardData.title + ".jpg"} />
                        </div>

                        <div className="sticky-card-copy">

                            <div className="sticky-card-copy-title">
                                <p>(About the state)</p>
                            </div>

                            <div className="sticky-card-copy-description">
                                {cardData.description}   
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Stickycards
