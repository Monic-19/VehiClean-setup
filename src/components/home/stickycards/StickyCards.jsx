"use client"

import React from 'react'
import './StickyCards.css'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CiClock1 } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Stickycards = () => {

    const stickycardsdata = [
        {
          index: 0,
          title: "Premium Wash",
          image: "/sticky-cards/card1.avif",
          duration: "Around 1 hour",
          price: "319",
          description: "Keep your ride shining bright and rolling right with regular car cleaning!"
        },
        {
          index: 1,
          title: "Deep Cleaning",
          image: "/sticky-cards/card2.avif",
          duration: "Around 2-3 hours",
          price: "799",
          description: "Revitalize your ride with a deep clean that makes it shine like new!"
        },
        {
          index: 2,
          title: "Rubbing & Polishing",
          image: "/sticky-cards/card3.avif",
          duration: "Around 2-3 hours",
          price: "1279",
          description: "Detailing that brings out the best in every detail of your vehicle."
        },
        {
          index: 3,
          title: "AC Vents Cleaning",
          image: "/sticky-cards/card4.avif",
          duration: "Around 1 hour",
          price: "350",
          description: "Clean your AC vents with our expert cleaning service."
        },
        {
          index: 4,
          title: "Windshield Cleaning",
          image: "/sticky-cards/card5.avif",
          duration: "Around 1 hour",
          price: "719",
          description: "Keep your windshield spotless for a clear view."
        },
        {
          index: 5,
          title: "Premium Wash (Monthly)",
          image: "/sticky-cards/card6.avif",
          duration: "Valid for one month",
          price: "1276",
          description: "Convenient monthly packages for regular car cleaning and maintenance."
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
                              
                                <p className='flex items-center gap-2'>
                                  <CiClock1 className='text-xl'/>
                                  {cardData.duration}
                                </p>

                                <p className='flex items-center gap-2 mt-2 font-extrabold '>
                                  <FaRupeeSign className='text-sm'/> 
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
        ))
      }
    </div>
  )
}

export default Stickycards
