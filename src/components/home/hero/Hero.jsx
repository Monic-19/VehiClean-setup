import React from 'react'
import './hero.css'
import Stickycards from '../stickycards/StickyCards'
import { ReactLenis } from 'lenis/react'

const Hero = () => {
  return (
    <div className='hero -mt-3'>
      <ReactLenis root />
      
      <section className="intro">
        <h1 className='uppercase absolute top-4 left-4 md:top-8 md:left-8 lg:top-5 lg:left-5'>Our Services <br />at a Glance</h1>
        <p className='absolute bottom-8 right-9 md:bottom-16 md:right-16 lg:bottom-12 lg:right-14 tracking-tight scale-200 '>(&darr;)</p>
      </section>

      <Stickycards />
      
      <div className='headline uppercase p-5 flex flex-col justify-center mb-[15vh]'>
        <h1>Drive Clean, Spend Less </h1>
        <h1 className='lg:ml-32'>Explore Our Service Bundles</h1>
      </div>


      <section className="outro">
        <h1>Ends the form</h1>
      </section>
    </div>
  )
}

export default Hero
