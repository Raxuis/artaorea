"use client";

import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { animations } from "@/utils/animations";

gsap.registerPlugin(ScrollTrigger);

export const initializeLenis = () => {
  const lenis = new Lenis();

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export const runAnimations = () => {

  // 👇 Can be useful if issues with mobile devices
  // Detecting screen size
  // const isMobile = window.matchMedia("(max-width: 768px)").matches;

  animations.forEach(({ target, fromOptions, toOptions, options }) => {
    const tl = gsap.timeline();

    if (fromOptions) {
      tl.from(target, fromOptions);
    }

    if (toOptions) {
      tl.to(target, toOptions);
    } else {
      tl.to(target, options);
    }
  });
}
