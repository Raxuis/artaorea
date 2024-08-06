"use client";

import Header from '@/components/Header'
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
      <section className='flex flex-col m-[5vh_5vw] sm:m-[10vh_10vw]'>
        <div className="art-header bg-cyan text-white w-2/3 text-center p-5 mx-auto">
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
      </section>
      <section className='flex flex-col m-[5vh_5vw] sm:m-[10vh_10vw]'>
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
          <p>Cette vanite présente un crâne composé d'un opus tessellatum de marbre blanc. J'ai réalisé des tesselles carrées sur le mur. puis, pour marquer la transition avec le fond
            Le changement d'opus, ainsi que les différente épaisseur de matériaux apporte de la profondeur a la pièce et permet aussi de valoriser le crane.
            symbole majeur de la restructuration pictural de la vanité.
          </p>
        </div>
      </section>
      <section className='flex flex-col m-[5vh_5vw] sm:m-[10vh_10vw]'>
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
      </section>
    </>
  )
}

export default Works