import React from 'react'
import './hero.css'
import Stickycards from '../stickycards/StickyCards'
import { ReactLenis } from 'lenis/react'

const Hero = () => {
  return (
    <div className='hero'>
      <ReactLenis root />
      <section className="intro">
        <h1>Foundation</h1>
      </section>

      <Stickycards />

      <section className="outro">
        <h1>Ends the form</h1>
      </section>
    </div>
  )
}

export default Hero
