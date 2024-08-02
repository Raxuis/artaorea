"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import StudiesTimeline from "@/components/TimeLine";
import Image from "next/image";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";


const AboutMe = () => {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const scrollToAboutMe = () => {
    const aboutMe = document.getElementById("about-me");
    aboutMe?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex justify-center sm:items-center gap-10 sm:gap-20 max-sm:flex-col">
            <Image src="/assets/aurea-profile.png" width={200} height={200} alt="Auréa Close" />
            <div className="flex flex-col description">
              <h1>Auréa Close</h1>
              <p>19 ans</p>
              <p>Rambouillet, France</p>
              <div className="flex gap-2 mt-1">
                <a href="https://www.instagram.com/artaorea/" target="_blank" rel="noreferrer">
                  <InstagramLogoIcon className="size-5 text-black hover:text-blue-600 duration-300" />
                </a>
                <a href="https://www.linkedin.com/artaorea/" target="_blank" rel="noreferrer">
                  <LinkedInLogoIcon className="size-5 text-black hover:text-blue-600 duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="mouse-scroll" onClick={() => scrollToAboutMe()} />
        </div>
      </Header>
      <div className="flex flex-col mx-auto w-full max-w-screen-lg space-y-5 mb-20 justify-center" id="about-me">
        <StudiesTimeline />
        <p className="text-xl max-sm:text-center">Mes centres d'intérêts</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 place-items-center mt-5">
          <div className="size-60 bg-shape-1 bg-no-repeat bg-center bg-cover flex justify-center items-center hover:bg-shape-2  duration-500">
            <p className="text-sm">Escalade</p>
          </div>
          <div className="size-60 bg-shape-2 bg-no-repeat bg-center bg-cover flex justify-center items-center hover:bg-shape-1 duration-500 group">
            <p className="text-sm group-hover:pl-4 duration-500">Pâtisserie et cuisine</p>
          </div>
          <div className="size-60 bg-shape-1 bg-no-repeat bg-center bg-cover flex justify-center items-center hover:bg-shape-2 duration-500">
            <p className="text-sm">Art</p>
          </div>
          <div className="size-60 bg-shape-2 rotate-90 bg-no-repeat bg-center bg-cover flex justify-center items-center hover:bg-shape-1 duration-500">
            <p className="text-sm -rotate-90">Voyages</p>
          </div>
          <div className="size-60 bg-shape-1 rotate-180 bg-no-repeat bg-center bg-cover flex justify-center items-center hover:bg-shape-2 duration-500">
            <p className="text-sm -rotate-180 pr-4">Jeux de société</p>
          </div>
          <div className="size-60 bg-shape-2 rotate-90 bg-no-repeat bg-center bg-cover flex justify-center items-center hover:bg-shape-1 duration-500">
            <p className="text-sm -rotate-90 max-w-10">Poterie, dessin, perles</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
