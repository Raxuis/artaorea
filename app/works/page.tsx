"use client";

import Container from '@/components/Container';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header'
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { initializeLenis, runAnimations } from '@/utils/initiations';



gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  useEffect(() => {
    initializeLenis();
    runAnimations();
  }, []);
  return (
    <>
      <Header>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-center text-3xl'>
            Bienvenue sur ma page de travail
          </p>
          <p className='text-md text-center'>
            Ici, je vous montre mes différentes oeuvres en fonction de mon parcours professionnel.
          </p>
        </div>
      </Header>
      <Container>
        <div className="art-header mx-auto w-2/3 bg-cyan p-5 text-center text-white" id='ceramique'>
          <h1 className="text-2xl">Céramique</h1>
        </div>
        <div className='mt-10 flex items-center gap-4'>
          <div className='flex size-12 items-center justify-center rounded-full bg-cyan'>
            <p className='text-xl font-semibold'>1</p>
          </div>
          <p className='text-xl font-semibold'>Initiation</p>
        </div>
        <div className='mt-10 flex gap-4'>
          <div className='flex-col gap-2'>
            <p>Modelage du grès</p>
            <img src='/assets/works/ceramique/ceramique-1.webp' alt='ceramique-1' />
          </div>
          <div className='flex-col gap-2 self-end'>
            <p>Échantillons test des couleurs</p>
            <img src='/assets/works/ceramique/ceramique-2.webp' alt='ceramique-2' />
          </div>
        </div>
        <div className='mt-10 flex gap-20'>
          <div className='flex-col gap-2'>
            <p>Engobage des créations sur terre humide</p>
            <img src='/assets/works/ceramique/ceramique-3.webp' alt='ceramique-3' />
          </div>
          <div className='self-end'>
            <img src='/assets/works/ceramique/ceramique-4.webp' alt='ceramique-4' />
          </div>
        </div>
        <div className='mt-20 flex'>
          <div className='w-full flex-col gap-2'>
            <p>Résultat après émaillage et cuisson</p>
            <div className="grid grid-cols-2 items-center gap-5 lg:grid-cols-4">
              <img src="/assets/works/ceramique/ceramique-result-1.webp" alt="Résultat céramique 1" className="h-52 w-full object-cover" />
              <img src="/assets/works/ceramique/ceramique-result-2.webp" alt="Résultat céramique 2" className="h-52 w-full object-cover" />
              <img src="/assets/works/ceramique/ceramique-result-3.webp" alt="Résultat céramique 3" className="h-52 w-full object-cover" />
              <img src="/assets/works/ceramique/ceramique-result-4.webp" alt="Résultat céramique 4" className="h-52 w-full object-cover" />
            </div>
          </div>
        </div>
        <div className='mt-10 flex items-center gap-4'>
          <div className='flex size-12 items-center justify-center rounded-full bg-cyan'>
            <p className='text-xl font-semibold'>2</p>
          </div>
          <p className='text-xl font-semibold'>Workshop</p>
        </div>
        <div className='mt-10 flex gap-4'>
          <div className='w-full flex-col space-y-10'>
            <p>Échantillons / expérimentations de 10 x 20 cm. pour travailler différentes textures et couleurs sur le thème des coraux.</p>
            <div className="workshop-container grid grid-cols-3 place-items-center items-center gap-10">
              <img src="/assets/works/workshop/workshop-1.webp" alt="Workshop 1" className="workshop-1 h-full w-[20vh] object-cover" />
              <img src="/assets/works/workshop/workshop-2.webp" alt="Workshop 2" className="workshop-2 h-full w-[20vh] object-cover" />
              <img src="/assets/works/workshop/workshop-3.webp" alt="Workshop 3" className="workshop-3 h-full w-[20vh] object-cover" />
            </div>
            <div className="art-container grid grid-cols-1 gap-[5vw] pt-5 lg:grid-cols-[2fr_2fr]">
              <div className='flex flex-col gap-2'>
                <img src='/assets/works/workshop/workshop-square.webp' alt='Workshop' className='w-full object-cover' />
                <p className='text-lg font-semibold'>"Flux Coralliens", 4 carreaux de céramique, 20 x 20 cm.</p>
              </div>
              <p>Pour la création de ces 4 carreaux, j'ai choisi d'explorer la vie marine, en mettant en avant les actinies, les rochers, et les coraux. Mon approche a été de jouer avec leurs agencements et leurs proliférations, laissant libre cours à leurs déplacements au gré des courants naturel.
                Concernant la réalisation artistique, j'ai intégré des effets de texture et de relief avec de la terre, cherchant à saisir et à restituer les nuances de mouvements, d'ondulations et de profondeur.</p>
            </div>
          </div>
        </div>
        <div className="art-header mx-auto mt-10 w-2/3 bg-cyan p-5 text-center text-white" id='mosaique'>
          <h1 className="text-2xl">Mosaïque</h1>
        </div>
        <div className='mt-10 flex items-center gap-4'>
          <div className='flex size-12 items-center justify-center rounded-full bg-cyan'>
            <p className='text-xl font-semibold'>1</p>
          </div>
          <p className='text-xl font-semibold'>Retranscrire du tissu</p>
        </div>
        <div className="art-container grid grid-cols-1 gap-[5vw] pt-5 lg:grid-cols-[2fr_2fr]">
          <div className='flex flex-col gap-2'>
            <img src='/assets/works/mosaique/mosaique-square.webp' alt='Mosaïque' className='w-full object-cover' />
            <p className='text-center text-lg'>"Danse au creux des vagues". 2023, mosaïque en pose inversée, grès cérame, (verre float, pâte de verre Albertini, carreau industriel et béton) .
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
        <div className='mt-10 flex items-center gap-4'>
          <div className='flex size-12 items-center justify-center rounded-full bg-cyan'>
            <p className='text-xl font-semibold'>2</p>
          </div>
          <p className='text-xl font-semibold'>Les Vanités</p>
        </div>
        <div className="art-container grid grid-cols-1 gap-[5vw] pt-5 lg:grid-cols-[2fr_2fr]">
          <div className='flex flex-col gap-2'>
            <img src='/assets/works/mosaique/mosaique-square-2.webp' alt='Mosaïque' className='w-full object-cover' />
            <p className='text-center text-lg'>Mosaïque en pose directe, (pierre et fausse pierre), 40x40cm.</p>
          </div>
          <p>Cette vanité présente un crâne composé d'un opus tessellatum de marbre blanc. J'ai réalisé des tesselles carrées sur le mur. puis, pour marquer la transition avec le fond
            Le changement d'opus, ainsi que les différente épaisseur de matériaux apporte de la profondeur a la pièce et permet aussi de valoriser le crane.
            symbole majeur de la restructuration pictural de la vanité.
          </p>
        </div>
        <div className='mt-10 flex items-center gap-4'>
          <div className='flex size-12 items-center justify-center rounded-full bg-cyan'>
            <p className='text-xl font-semibold'>3</p>
          </div>
          <p className='text-xl font-semibold'>Exploration de l'œil et de la peau animale</p>
        </div>
        <div className="art-content art-content-apparence my-10 text-center text-lg xl:text-xl">
          <p>
            Créer un contraste entre la peau et l'œil par l'utilisation conjointe de la pose directe et inversée.
          </p>
        </div>
        <div className='grid grid-cols-2 place-items-center gap-x-5 gap-y-10 lg:grid-cols-3'>
          <img src="/assets/works/exploration/exploration-1.webp" alt="Exploration 1" className='size-full object-cover lg:h-[30vh] lg:w-[17vw]' />
          <img src="/assets/works/exploration/exploration-2.webp" alt="Exploration 2" className='size-full object-cover lg:h-[30vh] lg:w-[17vw]' />
          <img src="/assets/works/exploration/exploration-3.webp" alt="Exploration 3" className='size-full object-cover lg:h-[30vh] lg:w-[17vw]' />
          <img src="/assets/works/exploration/exploration-4.webp" alt="Exploration 4" className='size-full object-cover lg:h-[30vh] lg:w-[17vw]' />
          <img src="/assets/works/exploration/exploration-5.webp" alt="Exploration 5" className='size-full object-cover lg:h-[30vh] lg:w-[17vw]' />
          <img src="/assets/works/exploration/exploration-6.webp" alt="Exploration 6" className='size-full object-cover lg:h-[30vh] lg:w-[17vw]' />
        </div>
        <p className='pt-5 text-center text-lg'>Échantillons 10 x 10 cm pour travailler différent opus sur la peau du gecko.</p>
        <div className='mt-10 flex items-center gap-4'>
          <div className='flex size-12 items-center justify-center rounded-full bg-cyan'>
            <p className='text-xl font-semibold'>4</p>
          </div>
          <p className='text-xl font-semibold max-sm:max-w-xs'>Échantillonnage pour projet au Perreux-sur-Marne</p>
        </div>
        <div className='my-10 ml-16 flex flex-col gap-5'>
          <p>PORCHE: Rivière</p>
        </div>
        <div className="grid grid-cols-3 place-items-center items-center gap-10">
          <div className='flex flex-col gap-2'>
            <img src="/assets/works/echantillonnage/echantillonnage-1.webp" alt="Échantillonnage 1" className="h-[50vh] w-full object-cover" />
            <p className='text-center text-sm'>5 x 20 cm</p>
          </div>
          <div className='flex flex-col gap-2'>
            <img src="/assets/works/echantillonnage/echantillonnage-2.webp" alt="Échantillonnage 2" className="h-[50vh] w-full object-cover" />
            <p className='text-center text-sm'>5 x 20 cm</p>
          </div>
          <div className='flex flex-col gap-2'>
            <img src="/assets/works/echantillonnage/echantillonnage-3.webp" alt="Échantillonnage 3" className="h-[50vh] w-full object-cover" />
            <p className='text-center text-sm'>5 x 20 cm</p>
          </div>
        </div>
        <div className='my-10 grid grid-cols-1 place-items-center gap-y-5  sm:grid-cols-2'>
          <div className='flex flex-col items-center gap-2'>
            <p className='text-center'>PANNEAU: Amarnez-vous</p>
            <img src="/assets/works/echantillonnage/echantillonnage-4.webp" alt="Échantillonnage 4" className="h-[40vh] w-full object-cover" />
            <p className='text-center text-sm'>30 x 20 cm</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <p className='text-center'>PANNEAU: Floraison</p>
            <img src="/assets/works/echantillonnage/echantillonnage-5.webp" alt="Échantillonnage 5" className="h-[40vh] w-full object-cover" />
            <p className='text-center text-sm'>30 x 20 cm</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <p className='text-center'>PANNEAU: Éveil printanier</p>
            <img src="/assets/works/echantillonnage/echantillonnage-6.webp" alt="Échantillonnage 6" className="h-[40vh] w-full object-cover" />
            <p className='text-center text-sm'>30 x 20 cm</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <p className='text-center'>PANNEAU: La traversée</p>
            <img src="/assets/works/echantillonnage/echantillonnage-7.webp" alt="Échantillonnage 7" className="h-[40vh] w-full object-cover" />
            <p className='text-center text-sm'>30 x 20 cm</p>
          </div>
        </div>
        <div className='mt-10 flex items-center gap-4'>
          <div className='flex size-12 items-center justify-center rounded-full bg-cyan'>
            <p className='text-xl font-semibold'>5</p>
          </div>
          <p className='text-xl font-semibold'>PANNEAU COLOMBE</p>
        </div>
        <p className='pt-5 text-center text-lg'>Travail collaboratif pour réaliser deux panneaux. Commande d'architecte pour un immeuble à Colombes.</p>
        <p className='my-10 font-semibold'>PANNEAU: Barques</p>
        <div className='flex flex-col items-center space-y-5 sm:space-y-10'>
          <div className='colombe-container grid grid-cols-1 place-items-center gap-5 max-sm:pt-5 sm:my-10 sm:grid-cols-2'>
            <img src="/assets/works/panneau-colombe/panneau-colombe-1.webp" alt="Panneau Colombe 1" className='colombe-1 h-[30vh] w-[40vh]' />
            <img src="/assets/works/panneau-colombe/panneau-colombe-2.webp" alt="Panneau Colombe 2" className='colombe-2 h-[30vh] w-[40vh]' />
          </div>
          <img src="/assets/works/panneau-colombe/panneau-colombe-3.webp" alt="Panneau Colombe 3" className='colombe-3 w-full px-8 sm:w-1/2 sm:px-10' />
        </div>
        <div className="mt-10 flex flex-col space-y-10 text-center text-lg font-semibold">
          <p>
            PANNEAU: Constellations
          </p>
          <div className='flex flex-col items-center space-y-5 sm:space-y-10'>
            <div className='constellations-container grid grid-cols-1  place-items-center gap-5 sm:grid-cols-2'>
              <img src="/assets/works/constellations/constellations-1.webp" alt="Constellations 1" className='constellations-1 h-[30vh] w-[40vh]' />
              <img src="/assets/works/constellations/constellations-2.webp" alt="Constellations 2" className='constellations-2 h-[30vh] w-[40vh]' />
            </div>
            <img src="/assets/works/constellations/constellations-3.webp" alt="Constellations 3" className='constellations-3 w-full px-8 sm:w-1/2 sm:px-10' />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Works
