"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import StudiesTimeline from "@/components/TimeLine";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { scrollToAboutMe } from "@/utils/navigation";
import { Footer } from "@/components/Footer";


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
        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-10 max-sm:flex-col sm:gap-20">
            <Image src="/assets/aurea-profile.png" width={200} height={200} alt="Auréa Close" />
            <div className="description flex flex-col">
              <h1>Auréa Close</h1>
              <p>19 ans</p>
              <p>Rambouillet, France</p>
              <Button variant="link" asChild className="text-md p-0 font-normal">
                <a
                  href="https://ensaama.net/site/home/formations/dnmade"
                  target="_blank"
                  rel="noreferrer">
                  Étudiante en école d'art appliqué
                  <ArrowTopRightIcon className="ml-1 size-4 stroke-1 text-black" />
                </a>
              </Button>
            </div>
          </div>
          <div className="mouse-scroll" onClick={() => scrollToAboutMe()} />
        </div>
      </Header>
      <div className="mx-auto mb-20 flex w-full max-w-screen-lg flex-col justify-center space-y-5" id="about-me">
        <StudiesTimeline />
        <p className="text-xl max-sm:text-center">Mes centres d'intérêts</p>
        <div className="mt-5 grid grid-cols-2 place-items-center gap-10 md:grid-cols-3">
          <div className="flex size-60 items-center justify-center bg-shape-1 bg-cover bg-center bg-no-repeat duration-500  hover:bg-shape-2">
            <p className="text-sm">Escalade</p>
          </div>
          <div className="group flex size-60 items-center justify-center bg-shape-2 bg-cover bg-center bg-no-repeat duration-500 hover:bg-shape-1">
            <p className="text-sm duration-500 group-hover:pl-4">Pâtisserie et cuisine</p>
          </div>
          <div className="flex size-60 items-center justify-center bg-shape-1 bg-cover bg-center bg-no-repeat duration-500 hover:bg-shape-2">
            <p className="text-sm">Art</p>
          </div>
          <div className="flex size-60 rotate-90 items-center justify-center bg-shape-2 bg-cover bg-center bg-no-repeat duration-500 hover:bg-shape-1">
            <p className="-rotate-90 text-sm">Voyages</p>
          </div>
          <div className="flex size-60 rotate-180 items-center justify-center bg-shape-1 bg-cover bg-center bg-no-repeat duration-500 hover:bg-shape-2">
            <p className="-rotate-180 pr-4 text-sm">Jeux de société</p>
          </div>
          <div className="flex size-60 rotate-90 items-center justify-center bg-shape-2 bg-cover bg-center bg-no-repeat duration-500 hover:bg-shape-1">
            <p className="max-w-10 -rotate-90 text-sm">Poterie, dessin, perles</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
