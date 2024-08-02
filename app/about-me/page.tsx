"use client";

import Header from '@/components/Header';
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
    <Header>
      <div className="about-me-container">
        <h1>Auréa Close</h1>
        <p>19 ans</p>
        <p>Rambouillet, France</p>
      </div>
    </Header>
  )
}

export default AboutMe