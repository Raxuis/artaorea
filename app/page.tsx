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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef();

  useEffect(() => {
    initializeLenis();
    runAnimations();
  }, []);

  return (
    <>
      <Header imageSrc="/assets/character.png" alt="Artaoréa" link="https://instagram.com/art_aorea" />
      <section className="m-[5vh_5vw] sm:m-[10vh_10vw] text-center flex flex-col items-center gap-[25vh] arts-col" id="works">
        {works.slice(0, 3).map((work, index) => (
          <HorizontalDisplay key={index} {...work} />
        ))}
      </section>
      <section className="arts-apparence flex flex-col items-center">
        <div className="art-header bg-cyan text-white w-full text-center p-5 space-y-1">
          <h1 className="border-b border-white inline-flex">L'apparence cachée</h1>
          <p>20 x 20 x 30 cm</p>
          <p>Technique: modelage, peinture</p>
        </div>
        <div className="art-content art-content-apparence text-center text-lg xl:text-xl my-2">
          <p>
            Le temps s'écoule, de l'enfant à un âge avancé en un clin d'œil, le temps me rappelle chaque jour que son essence
            est de défiler sur nous en y laissant les traces de son passage, nous déformant et nous amenant vers la mort.
          </p>
        </div>
        <div className="art-apparence-showing grid grid-cols-1 lg:grid-cols-3 items-center gap-5">
          <img src="/assets/works/apparence/apparence-1.webp" alt="Apparence 1" className="apparence-1 h-[50vh] sm:h-[30vh] w-full lg:w-[20vw] object-cover" />
          <img src="/assets/works/apparence/apparence-2.webp" alt="Apparence 2" className="apparence-2 h-[50vh] sm:h-[30vh] w-full lg:w-[20vw] object-cover" />
          <img src="/assets/works/apparence/apparence-3.webp" alt="Apparence 3" className="apparence-3 h-[50vh] sm:h-[30vh] w-full lg:w-[20vw] object-cover" />
        </div>
      </section>
      <section className="m-[10vh_10vw] text-center flex flex-col items-center gap-[20vh] arts-col">
        <HorizontalDisplay {...works[3]} />
      </section>
      <section className="arts-bd flex flex-col items-center">
        <div className="art-header bg-cyan text-white w-full text-center p-5 space-y-1">
          <h1 className="border-b border-white inline-flex">Page de BD</h1>
          <p>25 x 35 cm</p>
          <p>Technique: crayon de couleur</p>
        </div>
        <div className="art-bd-showing grid grid-cols-1 lg:grid-cols-3 items-center mt-5 gap-10">
          <img src="/assets/works/bd/bd-1.webp" alt="bd 1" className="bd-1 w-full md:w-[40vw] lg:w-[20vw] h-full md:h-[50vh]" />
          <img src="/assets/works/bd/bd-2.webp" alt="bd 2" className="bd-2 w-full md:w-[40vw] lg:w-[20vw] h-full md:h-[50vh]" />
          <img src="/assets/works/bd/bd-3.webp" alt="bd 3" className="bd-3 w-full md:w-[40vw] lg:w-[20vw] h-full md:h-[50vh]" />
        </div>
        <div className="art-content art-content-bd text-lg xl:text-xl mt-2 text-center">
          <p>
            Le harcèlement, un rejet de l'autre et de ces différences, déversant une aversion sur celui qui attise ma
            curiosité. Dans cette bande dessinée, je dénonce le harcèlement et ses retombées psychologiques sur ses victimes
            et sur son entourage. De plus, je m'intéresse aux processus qui amènent le harceleur à agir et à la prise de
            conscience qui s'ensuit.
          </p>
        </div>
        <Button variant="outline" className="mt-10" asChild>
          <Link href="/works">Voir plus de mon travail</Link>
        </Button>
      </section>
      <Footer />
    </>
  );
}
