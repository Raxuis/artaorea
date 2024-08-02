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
      <div className='flex flex-col justify-center items-center h-full'>
        <div className="flex flex-col">
          <h1>Auréa Close</h1>
          <p>19 ans</p>
          <p>Rambouillet, France</p>
        </div>
        <div className='mouse-scroll' />
      </div>
    </Header>
  )
}

export default AboutMe