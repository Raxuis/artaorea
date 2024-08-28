"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import HorizontalDisplay from "@/components/HorizontalDisplay";
import works from "@/constants/works";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { initializeLenis, runAnimations } from "@/utils/initiations";
import TransitionLink from "@/components/TransitionLink";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    initializeLenis();
    runAnimations();
  }, []);

  return (
    <>
      <Header imageSrc="/assets/character.png" alt="Artaoréa" link="https://instagram.com/art_aorea" />
      <section className="arts-col m-[5vh_5vw] flex flex-col items-center gap-[25vh] text-center sm:m-[10vh_10vw]" id="works">
        {works.slice(0, 3).map((work, index) => (
          <HorizontalDisplay key={index} {...work} />
        ))}
      </section>
      <section className="mx-[10vw] my-[10vh] mt-[20vh] flex flex-col items-center">
        <div className="art-header w-full space-y-1 bg-cyan p-5 text-center text-white">
          <h1 className="inline-flex border-b border-white">L'apparence cachée</h1>
          <p>20 x 20 x 30 cm</p>
          <p>Technique: modelage, peinture</p>
        </div>
        <div className="art-content art-content-apparence my-2 text-center text-lg xl:text-xl">
          <p>
            Le temps s'écoule, de l'enfant à un âge avancé en un clin d'œil, le temps me rappelle chaque jour que son essence
            est de défiler sur nous en y laissant les traces de son passage, nous déformant et nous amenant vers la mort.
          </p>
        </div>
        <div className="art-apparence-showing grid grid-cols-1 items-center gap-5 lg:grid-cols-3">
          <img src="/assets/works/apparence/apparence-1.webp" alt="Apparence 1" className="apparence-1 h-[50vh] w-full object-cover sm:h-[30vh] lg:w-[20vw]" />
          <img src="/assets/works/apparence/apparence-2.webp" alt="Apparence 2" className="apparence-2 h-[50vh] w-full object-cover sm:h-[30vh] lg:w-[20vw]" />
          <img src="/assets/works/apparence/apparence-3.webp" alt="Apparence 3" className="apparence-3 h-[50vh] w-full object-cover sm:h-[30vh] lg:w-[20vw]" />
        </div>
      </section>
      <section className="arts-col m-[10vh_10vw] flex flex-col items-center gap-[20vh] text-center">
        <HorizontalDisplay {...works[3]} />
      </section>
      <section className="arts-bd mx-[10vw] my-[5vh] flex flex-col items-center sm:my-[10vh]">
        <div className="art-header w-full space-y-1 bg-cyan p-5 text-center text-white">
          <h1 className="inline-flex border-b border-white">Page de BD</h1>
          <p>25 x 35 cm</p>
          <p>Technique: crayon de couleur</p>
        </div>
        <div className="art-bd-showing mt-5 grid grid-cols-1 items-center gap-10 lg:grid-cols-3">
          <img src="/assets/works/bd/bd-1.webp" alt="bd 1" className="bd-1 size-full md:h-[50vh] md:w-[40vw] lg:w-[20vw]" />
          <img src="/assets/works/bd/bd-2.webp" alt="bd 2" className="bd-2 size-full md:h-[50vh] md:w-[40vw] lg:w-[20vw]" />
          <img src="/assets/works/bd/bd-3.webp" alt="bd 3" className="bd-3 size-full md:h-[50vh] md:w-[40vw] lg:w-[20vw]" />
        </div>
        <div className="art-content art-content-bd mt-2 text-center text-lg xl:text-xl">
          <p>
            Le harcèlement, un rejet de l'autre et de ces différences, déversant une aversion sur celui qui attise ma
            curiosité. Dans cette bande dessinée, je dénonce le harcèlement et ses retombées psychologiques sur ses victimes
            et sur son entourage. De plus, je m'intéresse aux processus qui amènent le harceleur à agir et à la prise de
            conscience qui s'ensuit.
          </p>
        </div>
        <Button variant="outline" className="mt-10">
          <TransitionLink href="/works" label="Voir plus de mon travail" />
        </Button>
      </section>
      <Footer />
    </>
  );
}
