"use client";

import BurgerMenu from '@/src/components/BurgerMenu'
import Lenis from 'lenis'
import React, { useEffect } from 'react'

const AboutMe = () => {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="header">

      <div className="top-left-bubble">
        <img src="/assets/icons/shape-1.png" alt="shape-1" className="shape shape-1" />
      </div>
      <div className="top-right-bubble">
        <img src="/assets/icons/shape-2.png" alt="shape-2" className="shape shape-2" />
      </div>
      <div className="bottom-left-bubble">
        <img src="/assets/icons/shape-2.png" alt="shape-1" className="shape shape-3" />
      </div>
      <div className="bottom-right-bubble">
        <img src="/assets/icons/shape-1.png" alt="shape-2" className="shape shape-4" />
      </div>

      <div className="about-me-container">
        <h1>Auréa Close</h1>
        <p>19 ans</p>
        <p>Rambouillet, France</p>
      </div>

      <BurgerMenu />

    </div>
  )
}

export default AboutMe