
import React from 'react';
import './hero.css';
import Stickycards from '../stickycards/StickyCards';
import { ReactLenis } from 'lenis/react';
import Intro from './Intro';
import Outro from './Outro';

const Hero = () => {
  return (
    <div className="hero -mt-3">
      <ReactLenis root />

      <Intro />

      <Stickycards />

      <div className="headline uppercase p-5 flex flex-col justify-center md:mb-[2vh] lg:mb-[10vh] md:mt-0 mt-[3vh]">
        <h1>Drive Clean, Spend Less </h1>
        <h1 className="w-full text-right">Explore Our Service Bundles</h1>
      </div>

      <Outro />
    </div>
  );
};

export default Hero;
