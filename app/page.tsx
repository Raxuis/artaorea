"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import animations from "@/src/utils/animations";
import Header from "@/src/components/Header";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    animations.forEach(({ target, fromOptions, toOptions, options }) => {
      if (fromOptions) {
        gsap.from(target, fromOptions);
      }
      if (toOptions) {
        gsap.to(target, toOptions);
      }
      if (options) {
        gsap.to(target, options);
      }
    });
  }, []);

  return (
    <>
      <Header imageSrc="/assets/character.png" alt="Artaoréa" link="https://instagram.com/artaorea" />
      <section className="m-[10vh_10vw] text-center flex flex-col items-center gap-[20vh] arts-col" id="works">
        <div className="grid grid-cols-[1fr_3fr] gap-[10vw] art-container mere-nature-container">
          <img src="/assets/works/mere-nature.jpeg" alt="Mere Nature" className="mere-nature h-[500px] w-[400px] object-cover rounded-lg" />
          <div className="art-text">
            <div className="art-header bg-cyan text-white mere-nature-header">
              <h1 className="mb-2 border-b border-white inline-flex">Mère Nature</h1>
              <p className="mb-1">1,20m</p>
              <p className="mb-1">Technique: modelage, collage, composition</p>
            </div>
            <div className="art-content">
              <p>
                Cette femme, inspirer de l'allégorie de la nature, représenter l'origine de la terre et de tout ce qui la
                compose. Elle est la source de la vie et l'incarne sous la forme de la mère. Cette image de la femme
                symbolise notre Terre et est vénérée dans diverses cultures, et représentée à travers les arts. Elle reflète
                la déesse de la culture, la mère de toutes choses qui donne la vie, qui en son sein nourrit les plantes, les
                animaux et les hommes. C'est en élevant son pouvoir nourricier qu'elle engendre les montagnes, rivières, elle
                est à la source des êtres vivants, des végétaux, des minéraux.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] gap-[10vw] art-container arbre-container">
          <img src="/assets/works/arbre.jpeg" alt="Arbre" className="arbre h-[500px] w-[400px] object-cover rounded-lg" />
          <div className="art-text">
            <div className="art-header bg-cyan text-white arbre-header">
              <h1 className="mb-2 border-b border-white inline-flex">L'arbre</h1>
              <p className="mb-1">30 x 20 x 20 cm</p>
              <p className="mb-1">Technique: assemblage, fil de fer</p>
            </div>
            <div className="art-content">
              <p>
                La nature, un paradis lointain, une terre dévastatrice dont l'homme est dépendant bien qu'il se convainc du
                contraire. J'ai voulu représenter dans cette composition l'alliage complexe qui lie l'homme et la nature.
                L'homme transforme la nature, la modifie à coup d'outils et de matériaux, mais la nature compose l'homme et
                lui fournit les ressources nécessaires à la vie.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] gap-[10vw] art-container fuite-container">
          <img src="/assets/works/fuite-du-temps.jpeg" alt="Fuite du temps" className="fuite h-[500px] w-[400px] object-cover rounded-lg" />
          <div className="art-text">
            <div className="art-header bg-cyan text-white fuite-header">
              <h1 className="mb-2 border-b border-white inline-flex">Fuite du temps</h1>
              <p className="mb-1">20 x 25 x 10 cm</p>
              <p className="mb-1">Technique: modelage, peinture</p>
            </div>
            <div className="art-content">
              <p>
                Le temps s'écoule, de l'enfant à un âge avancé en un clin d'œil, le temps me rappelle chaque jour que son
                essence est de défiler sur nous en y laissant les traces de son passage, nous déformant et nous amenant vers
                la mort.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="arts-apparence">
        <div className="art-header bg-cyan text-white">
          <h1 className="mb-2 border-b border-white inline-flex">L'apparence cachée</h1>
          <p className="mb-1">20 x 20 x 30 cm</p>
          <p className="mb-1">Technique: modelage, peinture</p>
        </div>
        <div className="art-content art-content-apparence p-5">
          <p>
            Le temps s'écoule, de l'enfant à un âge avancé en un clin d'œil, le temps me rappelle chaque jour que son essence
            est de défiler sur nous en y laissant les traces de son passage, nous déformant et nous amenant vers la mort.
          </p>
        </div>
        <div className="art-apparence-showing grid grid-cols-3 items-center gap-5">
          <img src="/assets/works/apparence-1.jpeg" alt="Apparence 1" className="apparence-1 h-[30vh] w-[20vw] object-cover" />
          <img src="/assets/works/apparence-2.jpeg" alt="Apparence 2" className="apparence-2 h-[30vh] w-[20vw] object-cover" />
          <img src="/assets/works/apparence-3.jpeg" alt="Apparence 3" className="apparence-3 h-[30vh] w-[20vw] object-cover" />
        </div>
      </section>
      <section className="m-[10vh_10vw] text-center flex flex-col items-center gap-[20vh] arts-col">
        <div className="grid grid-cols-[1fr_3fr] gap-[10vw] art-container unknwon-header">
          <img src="/assets/works/unknown.jpeg" alt="Unknown" className="unknown h-[500px] w-[400px] object-cover rounded-lg" />
          <div className="art-text">
            <div className="art-header bg-cyan text-white unknwon-header">
              <h1 className="mb-2 border-b border-white inline-flex">Unknown</h1>
              <p className="mb-1">Dimensions inconnues</p>
              <p className="mb-1">Technique: inconnue</p>
            </div>
            <div className="art-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus deleniti perferendis ratione laborum
                asperiores modi! Totam veniam minus quod nemo voluptatum consequuntur sunt reiciendis quos optio distinctio
                corrupti qui voluptas earum porro officiis dolore, necessitatibus aut, natus aspernatur. Similique quos
                quibusdam est maiores, at ad molestias aspernatur libero minima.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="arts-bd">
        <div className="art-header bg-cyan text-white">
          <h1 className="mb-2 border-b border-white inline-flex">Page de BD</h1>
          <p className="mb-1">25 x 35 cm</p>
          <p className="mb-1">Technique: crayon de couleur</p>
        </div>
        <div className="art-bd-showing grid grid-cols-3 items-center mt-5 gap-10">
          <img src="/assets/works/bd-1.jpeg" alt="bd 1" className="bd-1 w-[20vw] h-[50vh]" />
          <img src="/assets/works/bd-2.jpeg" alt="bd 2" className="bd-2 w-[20vw] h-[50vh]" />
          <img src="/assets/works/bd-3.jpeg" alt="bd 3" className="bd-3 w-[20vw] h-[50vh]" />
        </div>
        <div className="art-content art-content-bd mb-10 p-5">
          <p>
            Le harcèlement, un rejet de l'autre et de ces différences, déversant une aversion sur celui qui attise ma
            curiosité. Dans cette bande dessinée, je dénonce le harcèlement et ses retombées psychologiques sur ses victimes
            et sur son entourage. De plus, je m'intéresse aux processus qui amènent le harceleur à agir et à la prise de
            conscience qui s'ensuit.
          </p>
        </div>
      </section>
    </>
  );
}
