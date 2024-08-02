import { Timeline, Events, Event } from 'vertical-timeline-component-react';

const StudiesTimeline = () => {
  const customTheme = {
    borderDotColor: '#ffffff',
    descriptionColor: '#262626',
    dotColor: '#bbe3bf',
    eventColor: '#fec4a8',
    lineColor: '#d0cdc4',
    subtitleColor: '#7c7c7c',
    titleColor: '#000',
    yearColor: '#405b73',
  };

  return (
    <div className='my-24'>
      <Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse withoutDay>
        <Events
          title="Baccalauréat spécialités SVT et HGGSP (Option Arts Plastiques)"
          subtitle='Lycée Sainte Thérèse, Rambouillet - Mention Bien'
          startDate="2022/09"
          endDate="2023/06"
        >
          <Event
            title="Plus d'informations"
            description={[
              'Développement de connaissances sur la culture scientifique (biologie, étude de phénomènes naturels, géologie) politique et géopolitique. Apprenant rigueur et organisation.',
              "En cours d'art, nous travaillons sur toute de technique tel que : peinture, gravure, dessin...",
              "Chez moi, j'approfondis et reprend se qu'on apprend en cour afin de mieux assimile ces savoirs. Je m'intéresse également beaucoup aux technique de travaille en volume non aborder en cours (modelage, maquette ...)"
            ]}
          />
        </Events>
      </Timeline>
      <Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse withoutDay>
        <Events
          title="DNMADE 1 mosaïque"
          subtitle="Ensaama Olivier de Serres, Paris"
          startDate="2023/09"
          active
          defaultClosed
        >
          <Event
            title="Plus d'informations"
            description={[
              "Approche expérimentale et personnelle de production liée à l'objet et à l'espace contemporains.",
              'Conception et création de mosaïques décoratives composées avec divers matériaux (verre, les émaux, la céramique, les pierres, ou encore le béton...)',
              "Expérimentation et apprentissage du dessin, de la couleur et du volume."
            ]}
          />
        </Events>
      </Timeline>
    </div>
  );
};

export default StudiesTimeline;
