"use client";

import Header from '@/components/Header'
import HorizontalDisplay from '@/components/HorizontalDisplay';
import Lenis from 'lenis';
import React, { useEffect } from 'react'

const Works = () => {
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
        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl'>
            Bienvenue sur ma page de travail
          </p>
          <p className='text-md'>
            Ici, je vous montre mes différentes oeuvres en fonction de mon parcours professionnel.
          </p>
        </div>
      </Header>
      <section className='flex flex-col m-[5vh_5vw] sm:m-[10vh_10vw]'>
        <div className="art-header bg-cyan text-white w-2/3 text-center p-5 mx-auto">
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
      </section>
      <section className='flex flex-col m-[5vh_5vw] sm:m-[10vh_10vw]'>
        <div className='flex mt-10 gap-4 items-center'>
          <div className='size-12 rounded-full bg-cyan flex justify-center items-center'>
            <p className='text-xl font-semibold'>2</p>
          </div>
          <p className='text-xl font-semibold'>Workshop</p>
        </div>
        <div className='flex mt-10 gap-4'>
          <div className='flex-col space-y-10 w-full'>
            <p>Échantillons / expérimentations de 10 x 20 cm. pour travailler différentes textures et couleurs sur le thème des coraux.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center place-items-center gap-10">
              <img src="/assets/works/workshop-1.jpeg" alt="Résultat céramique 1" className="h-full w-[20vh] object-cover" />
              <img src="/assets/works/workshop-2.jpeg" alt="Résultat céramique 2" className="h-full w-[20vh] object-cover" />
              <img src="/assets/works/workshop-3.jpeg" alt="Résultat céramique 3" className="h-full w-[20vh] object-cover" />
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
      </section>
    </>
  )
}

export default Works