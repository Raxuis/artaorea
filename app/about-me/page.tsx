"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import StudiesTimeline from "@/components/TimeLine";

const AboutMe = () => {

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
      <Header>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col">
            <h1>Auréa Close</h1>
            <p>19 ans</p>
            <p>Rambouillet, France</p>
          </div>
          <div className="mouse-scroll" />
        </div>
      </Header>
      <div className="flex flex-col mx-auto w-full max-w-screen-lg space-y-5 mb-20 justify-center">
        <StudiesTimeline />
        <p className="text-xl max-sm:text-center">Mes centres d'intérêts</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 place-items-center mt-5">
          <div className="size-60 bg-shape-1 bg-no-repeat bg-center bg-cover flex justify-center items-center">
            <p className="text-sm">Escalade</p>
          </div>
          <div className="size-60 bg-shape-2 bg-no-repeat bg-center bg-cover flex justify-center items-center">
            <p className="text-sm">Pâtisserie et cuisine</p>
          </div>
          <div className="size-60 bg-shape-1 bg-no-repeat bg-center bg-cover flex justify-center items-center">
            <p className="text-sm">Art</p>
          </div>
          <div className="size-60 bg-shape-2 rotate-90 bg-no-repeat bg-center bg-cover flex justify-center items-center">
            <p className="text-sm -rotate-90">Voyages</p>
          </div>
          <div className="size-60 bg-shape-1 rotate-180 bg-no-repeat bg-center bg-cover flex justify-center items-center">
            <p className="text-sm -rotate-180 pr-4">Jeux de société</p>
          </div>
          <div className="size-60 bg-shape-2 rotate-90 bg-no-repeat bg-center bg-cover flex justify-center items-center">
            <p className="text-sm -rotate-90 max-w-10">Poterie, dessin, perles</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
