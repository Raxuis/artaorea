"use client";

import Container from '@/components/Container';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header'
import animations from '@/utils/animations';
import Lenis from 'lenis';
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const Works = () => {
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
      <Header>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl'>
            Bienvenue sur ma page de travail
          </p>
          <p className='text-md text-center'>
            Ici, je vous montre mes différentes oeuvres en fonction de mon parcours professionnel.
          </p>
        </div>
      </Header>
      <Container>
        <div className="art-header bg-cyan text-white w-2/3 text-center p-5 mx-auto" id='ceramique'>
          <h1 className="text-2xl">Céramique</h1>
        </div>
        <div className='flex mt-10 gap-4 items-center'>
          <div className='size-12 rounded-full bg-cyan flex justify-center items-center'>
            <p className='text-xl font-semibold'>1</p>
          </div>
          <p className='text-xl font-semibold'>Initiation</p>
        </div>
        <div className='flex mt-10 gap-4'>
          <div className='flex-col gap-2'>
            <p>Modelage du grès</p>
            <img src='/assets/works/ceramique-1.jpeg' alt='ceramique-1' />
          </div>
          <div className='flex-col gap-2 self-end'>
            <p>Échantillons test des couleurs</p>
            <img src='/assets/works/ceramique-2.jpeg' alt='ceramique-2' />
          </div>
        </div>
        <div className='flex mt-10 gap-20'>
          <div className='flex-col gap-2'>
            <p>Engobage des créations sur terre humide</p>
            <img src='/assets/works/ceramique-3.jpeg' alt='ceramique-3' />
          </div>
          <div className='self-end'>
            <img src='/assets/works/ceramique-4.jpeg' alt='ceramique-4' />
          </div>
        </div>
        <div className='flex mt-20'>
          <div className='flex-col gap-2 w-full'>
            <p>Résultat après émaillage et cuisson</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-5">
              <img src="/assets/works/ceramique-result-1.jpeg" alt="Résultat céramique 1" className="w-full h-52 object-cover" />
              <img src="/assets/works/ceramique-result-2.jpeg" alt="Résultat céramique 2" className="w-full h-52 object-cover" />
              <img src="/assets/works/ceramique-result-3.jpeg" alt="Résultat céramique 3" className="w-full h-52 object-cover" />
              <img src="/assets/works/ceramique-result-4.jpeg" alt="Résultat céramique 4" className="w-full h-52 object-cover" />
            </div>
          </div>
        </div>
        <div className='flex mt-10 gap-4 items-center'>
          <div className='size-12 rounded-full bg-cyan flex justify-center items-center'>
            <p className='text-xl font-semibold'>2</p>
          </div>
          <p className='text-xl font-semibold'>Workshop</p>
        </div>
        <div className='flex mt-10 gap-4'>
          <div className='flex-col space-y-10 w-full'>
            <p>Échantillons / expérimentations de 10 x 20 cm. pour travailler différentes textures et couleurs sur le thème des coraux.</p>
            <div className="grid grid-cols-3 items-center place-items-center gap-10">
              <img src="/assets/works/workshop-1.jpeg" alt="Workshop 1" className="h-full w-[20vh] object-cover" />
              <img src="/assets/works/workshop-2.jpeg" alt="Workshop 2" className="h-full w-[20vh] object-cover" />
              <img src="/assets/works/workshop-3.jpeg" alt="Workshop 3" className="h-full w-[20vh] object-cover" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr] gap-[5vw] art-container pt-5">
              <div className='flex flex-col gap-2'>
                <img src='/assets/works/workshop-square.jpeg' alt='Workshop' className='w-full object-cover' />
                <p className='font-semibold text-lg'>"Flux Coralliens", 4 carreaux de céramique, 20 x 20 cm.</p>
              </div>
              <p>Pour la création de ces 4 carreaux, j'ai choisi d'explorer la vie marine, en mettant en avant les actinies, les rochers, et les coraux. Mon approche a été de jouer avec leurs agencements et leurs proliférations, laissant libre cours à leurs déplacements au gré des courants naturel.
                Concernant la réalisation artistique, j'ai intégré des effets de texture et de relief avec de la terre, cherchant à saisir et à restituer les nuances de mouvements, d'ondulations et de profondeur.</p>
            </div>
          </div>
        </div>
        <div className="art-header bg-cyan text-white w-2/3 text-center p-5 mx-auto mt-10" id='mosaique'>
          <h1 className="text-2xl">Mosaïque</h1>
        </div>
        <div className='flex mt-10 gap-4 items-center'>
          <div className='size-12 rounded-full bg-cyan flex justify-center items-center'>
            <p className='text-xl font-semibold'>1</p>
          </div>
          <p className='text-xl font-semibold'>Retranscrire du tissu</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr] gap-[5vw] art-container pt-5">
          <div className='flex flex-col gap-2'>
            <img src='/assets/works/mosaique-square.jpeg' alt='Mosaïque' className='w-full object-cover' />
            <p className='text-lg text-center'>"Danse au creux des vagues". 2023, mosaïque en pose inversée, grès cérame, (verre float, pâte de verre Albertini, carreau industriel et béton) .
              30x30cm.</p>
          </div>
          <p>Cette mosaïque transmet les mouvements
            présente dans les tissus japonais.
            La douceur du tissu japonais au motif seigaiha m'a inspiré.
            empreint des oscillations délicates des manches de kimono tourbillonnant dans la danse du
            Gagaku. Au cœur de ce flux, deux carpes koi dansent harmonieusement au creux des vagues.
            incarnant la résilience face aux flots changeants des cours d'eau japonais.
          </p>
        </div>
        <div className='flex mt-10 gap-4 items-center'>
          <div className='size-12 rounded-full bg-cyan flex justify-center items-center'>
            <p className='text-xl font-semibold'>2</p>
          </div>
          <p className='text-xl font-semibold'>Les Vanités</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr] gap-[5vw] art-container pt-5">
          <div className='flex flex-col gap-2'>
            <img src='/assets/works/mosaique-square-2.jpeg' alt='Mosaïque' className='w-full object-cover' />
            <p className='text-lg text-center'>Mosaïque en pose directe, (pierre et fausse pierre), 40x40cm.</p>
          </div>
          <p>Cette vanité présente un crâne composé d'un opus tessellatum de marbre blanc. J'ai réalisé des tesselles carrées sur le mur. puis, pour marquer la transition avec le fond
            Le changement d'opus, ainsi que les différente épaisseur de matériaux apporte de la profondeur a la pièce et permet aussi de valoriser le crane.
            symbole majeur de la restructuration pictural de la vanité.
          </p>
        </div>
        <div className='flex mt-10 gap-4 items-center'>
          <div className='size-12 rounded-full bg-cyan flex justify-center items-center'>
            <p className='text-xl font-semibold'>3</p>
          </div>
          <p className='text-xl font-semibold'>Exploration de l'oeil et de la peau animale</p>
        </div>
        <div className="art-content art-content-apparence text-center text-lg xl:text-xl my-10">
          <p>
            Créer un contraste entre la peau et l'oeil par l'utilisation conjointe de la pose directe et inversée.
          </p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center'>
          <img src="/assets/works/exploration-1.jpeg" alt="Exploration 1" className='size-full lg:w-[17vw] lg:h-[30vh] object-cover' />
          <img src="/assets/works/exploration-2.jpeg" alt="Exploration 2" className='size-full lg:w-[17vw] lg:h-[30vh] object-cover' />
          <img src="/assets/works/exploration-3.jpeg" alt="Exploration 3" className='size-full lg:w-[17vw] lg:h-[30vh] object-cover' />
          <img src="/assets/works/exploration-4.jpeg" alt="Exploration 4" className='size-full lg:w-[17vw] lg:h-[30vh] object-cover' />
          <img src="/assets/works/exploration-5.jpeg" alt="Exploration 5" className='size-full lg:w-[17vw] lg:h-[30vh] object-cover' />
          <img src="/assets/works/exploration-6.jpeg" alt="Exploration 6" className='size-full lg:w-[17vw] lg:h-[30vh] object-cover' />
        </div>
        <p className='text-lg text-center pt-5'>Échantillons 10 x 10 cm pour travailler différent opus sur la peau du gecko.</p>
        <div className='flex mt-10 gap-4 items-center'>
          <div className='size-12 rounded-full bg-cyan flex justify-center items-center'>
            <p className='text-xl font-semibold'>4</p>
          </div>
          <p className='text-xl font-semibold max-sm:max-w-xs'>Échantillonnage pour projet au Perreux-sur-Marne</p>
        </div>
        <div className='flex flex-col gap-5 my-10 ml-16'>
          <p>PORCHE: Rivière</p>
        </div>
        <div className="grid grid-cols-3 items-center place-items-center gap-10">
          <div className='flex flex-col gap-2'>
            <img src="/assets/works/echantillonnage-1.jpeg" alt="Échantillonnage 1" className="h-[50vh] w-full object-cover" />
            <p className='text-sm text-center'>5 x 20 cm</p>
          </div>
          <div className='flex flex-col gap-2'>
            <img src="/assets/works/echantillonnage-2.jpeg" alt="Échantillonnage 2" className="h-[50vh] w-full object-cover" />
            <p className='text-sm text-center'>5 x 20 cm</p>
          </div>
          <div className='flex flex-col gap-2'>
            <img src="/assets/works/echantillonnage-3.jpeg" alt="Échantillonnage 3" className="h-[50vh] w-full object-cover" />
            <p className='text-sm text-center'>5 x 20 cm</p>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 my-10 gap-y-5  place-items-center'>
          <div className='flex flex-col gap-2 items-center'>
            <p className='text-center'>PANNEAU: Amarnez-vous</p>
            <img src="/assets/works/echantillonnage-4.jpeg" alt="Échantillonnage 4" className="h-[40vh] w-full object-cover" />
            <p className='text-sm text-center'>30 x 20 cm</p>
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <p className='text-center'>PANNEAU: Floraison</p>
            <img src="/assets/works/echantillonnage-5.jpeg" alt="Échantillonnage 5" className="h-[40vh] w-full object-cover" />
            <p className='text-sm text-center'>30 x 20 cm</p>
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <p className='text-center'>PANNEAU: Éveil printanier</p>
            <img src="/assets/works/echantillonnage-6.jpeg" alt="Échantillonnage 6" className="h-[40vh] w-full object-cover" />
            <p className='text-sm text-center'>30 x 20 cm</p>
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <p className='text-center'>PANNEAU: La traversée</p>
            <img src="/assets/works/echantillonnage-7.jpeg" alt="Échantillonnage 7" className="h-[40vh] w-full object-cover" />
            <p className='text-sm text-center'>30 x 20 cm</p>
          </div>
        </div>
        <div className='flex mt-10 gap-4 items-center'>
          <div className='size-12 rounded-full bg-cyan flex justify-center items-center'>
            <p className='text-xl font-semibold'>5</p>
          </div>
          <p className='text-xl font-semibold'>PANNEAU COLOMBE</p>
        </div>
        <p className='text-lg text-center pt-5'>Travail collaboratif pour réaliser deux panneaux. Commande d'architecte pour un immeuble à Colombes.</p>
        <p className='my-10 font-semibold'>PANNEAU: Barques</p>
        <div className='flex flex-col space-y-5 sm:space-y-10 items-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 max-sm:pt-5 sm:my-10 gap-5 place-items-center colombe-container'>
            <img src="/assets/works/panneau-colombe-1.jpeg" alt="Panneau Colombe 1" className='h-[30vh] w-[40vh] colombe-1' />
            <img src="/assets/works/panneau-colombe-2.jpeg" alt="Panneau Colombe 2" className='h-[30vh] w-[40vh] colombe-2' />
          </div>
          <img src="/assets/works/panneau-colombe-3.jpeg" alt="Panneau Colombe 3" className='px-8 sm:px-10 w-full sm:w-1/2 colombe-3' />
        </div>
        <div className="flex flex-col text-center text-lg font-semibold mt-10 space-y-10">
          <p>
            PANNEAU: Constellations
          </p>
          <div className='flex flex-col space-y-5 sm:space-y-10 items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2  gap-5 place-items-center constellations-container'>
              <img src="/assets/works/constellations-1.jpeg" alt="Constellations 1" className='h-[30vh] w-[40vh] constellations-1' />
              <img src="/assets/works/constellations-2.jpeg" alt="Constellations 2" className='h-[30vh] w-[40vh] constellations-2' />
            </div>
            <img src="/assets/works/constellations-3.jpeg" alt="Constellations 3" className='px-8 sm:px-10 w-full sm:w-1/2 constellations-3' />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Works