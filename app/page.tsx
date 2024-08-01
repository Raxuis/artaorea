import BurgerMenu from "@/src/components/BurgerMenu";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="header">

        <div className="top-left-bubble">
          <img src="/assets/icons/shape-1.png" alt="shape-1" className="shape shape-1" />
        </div>
        <div className="top-right-bubble">
          <img src="/assets/icons/shape-2.png" alt="shape-2" className="shape shape-2" />
        </div>
        <div className="bottom-left-bubble">
          <img src="/assets/icons/shape-2.png" alt="shape-1" className="shape shape-3" />
        </div>
        <div className="bottom-right-bubble">
          <img src="/assets/icons/shape-1.png" alt="shape-2" className="shape shape-4" />
        </div>

        <div className="character-container">
          <img src="/assets/character.png" alt="Artaoréa" className="character" />
        </div>

        <BurgerMenu />

      </div>

      <section className="arts-col" id="works">
        <div className="art-container mere-nature-container">
          <img src="/assets/works/mere-nature.jpeg" alt="Mere Nature" className="mere-nature" />
          <div className="art-text">
            <div className="art-header mere-nature-header">
              <h1>Mère Nature</h1>
              <p>1,20m</p>
              <p>Technique: modelage, collage, composition</p>
            </div>
            <div className="art-content">
              <p>Cette femme, inspirer de l'allégorie de la nature, représenter l'origine de la terre et de tout ce qui la
                compose. Elle est la source de la vie et l'incarne sous la forme de la mère. Cette image de la femme
                symbolise notre Terre et est vénérée dans diverses cultures, et représentée à travers les arts.
                Elle reflète la déesse de la culture, la mère de toutes choses qui donne la vie, qui en son sein nourrit les
                plantes, les animaux et les hommes.
                C'est en élevant son pouvoir nourricier qu'elle engendre les montagnes, rivières, elle est à la source des
                êtres vivants, des végétaux, des minéraux.</p>
            </div>
          </div>
        </div>
        <div className="art-container arbre-container">
          <img src="/assets/works/arbre.jpeg" alt="Arbre" className="arbre" />
          <div className="art-text">
            <div className="art-header arbre-header">
              <h1>L'arbre</h1>
              <p>30 x 20 x 20 cm</p>
              <p>Technique: assemblage, fil de fer</p>
            </div>
            <div className="art-content">
              <p>La nature, un paradis lointain, une terre dévastatrice dont l'homme est dépendant bien qu'il se convainc du
                contraire. J'ai voulu représenter dans cette composition l'alliage complexe qui lie l'homme et la nature.
                L'homme transforme la nature, la modifie à coup d'outils et de matériaux, mais la nature compose l'homme et
                lui fournit les ressources nécessaires à la vie.</p>
            </div>
          </div>
        </div>
        <div className="art-container fuite-container">
          <img src="/assets/works/fuite-du-temps.jpeg" alt="Fuite du temps" className="fuite" />
          <div className="art-text">
            <div className="art-header fuite-header">
              <h1>Fuite du temps</h1>
              <p>20 x 25 x 10 cm</p>
              <p>Technique: modelage, peinture</p>
            </div>
            <div className="art-content">
              <p>Le temps s'écoule, de l'enfant à un âge avancé en un clin d'œil, le temps me rappelle chaque jour que
                son essence est de défiler sur nous en y laissant les traces de son passage, nous déformant et nous
                amenant vers la mort.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="arts-apparence">
        <div className="art-header">
          <h1>L'apparence cachée</h1>
          <p>20 x 20 x 30 cm</p>
          <p>Technique: modelage, peinture</p>
        </div>
        <div className="art-content art-content-apparence">
          <p>Le temps s'écoule, de l'enfant à un âge avancé en un clin d'œil, le temps me rappelle chaque jour que
            son essence est de défiler sur nous en y laissant les traces de son passage, nous déformant et nous
            amenant vers la mort.</p>
        </div>
        <div className="art-apparence-showing">
          <img src="/assets/works/apparence-1.jpeg" alt="Apparence 1" className="apparence-1" />
          <img src="/assets/works/apparence-2.jpeg" alt="Apparence 2" className="apparence-2" />
          <img src="/assets/works/apparence-3.jpeg" alt="Apparence 3" className="apparence-3" />
        </div>
      </section>
      <section className="arts-col">
        <div className="art-container unknwon-header">
          <img src="/assets/works/unknown.jpeg" alt="Unknown" className="unknown" />
          <div className="art-text">
            <div className="art-header unknwon-header">
              <h1>Unknown</h1>
              <p>Dimensions inconnues</p>
              <p>Technique: inconnue</p>
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
        <div className="art-header">
          <h1>Page de BD</h1>
          <p>25 x 35 cm</p>
          <p>Technique: crayon de couleur</p>
        </div>
        <div className="art-bd-showing">
          <img src="/assets/works/bd-1.jpeg" alt="bd 1" className="bd-1" />
          <img src="/assets/works/bd-2.jpeg" alt="bd 2" className="bd-2" />
          <img src="/assets/works/bd-3.jpeg" alt="bd 3" className="bd-3" />
        </div>
        <div className="art-content art-content-bd">
          <p>
            Le harcelement, un rejet de l'autre et de ces différences, déversant une aversion sur celui qui attise ma
            curiosité. Dans cette bande dessinée, je dénonce le harcèlement et ses retombées psychologiques sur ses victimes
            et sur son entourage. De plus, je m'intéresse aux processus qui amènent le harceleur à agir et à la prise de
            conscience qui s'ensuit.
          </p>
        </div>
      </section>
    </>
  );
}
