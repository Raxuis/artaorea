"use client";

import Header from '@/src/components/Header'
import Lenis from 'lenis';
import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Header />
    </>
  )
}

export default Contact