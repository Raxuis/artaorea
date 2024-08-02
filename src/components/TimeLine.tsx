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
    <div className='my-20'>
      <Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse withoutDay>
        <Events
          title="Baccalauréat spécialités SVT et HGGSP"
          subtitle='Lycée Sainte Thérèse, Rambouillet - Mention Bien'
          startDate="2022/09"
          endDate="2023/06"
        >
          <Event
            title="Plus d'informations"
            description={[
              "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
              'Is simply dummy text of the printing and typesetting industry.',
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
              "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
              'Is simply dummy text of the printing and typesetting industry.',
            ]}
          />
        </Events>
      </Timeline>
    </div>
  );
};

export default StudiesTimeline;
