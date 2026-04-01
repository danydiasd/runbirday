import { EventCard } from '../components/EventCard';
import { FadeInSection } from '../components/FadeInSection';
import { GalleryPreview } from '../components/GalleryPreview';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { SectionHeading } from '../components/SectionHeading';
import { Timeline } from '../components/Timeline';
import { events, footerQuote, timelineEntries } from '../data/content';

export function HomePage() {
  const [worshipEvent, raceEvent, partyEvent] = events;

  return (
    <div className="bg-brand-50">
      <Navbar />
      <Hero />

      <main className="space-y-24 pb-16 pt-20">
        <section id="programacao" className="section-shell space-y-8">
          <FadeInSection>
            <SectionHeading
              eyebrow="Programação especial"
              title="Três experiências para contar uma vida inteira com beleza e significado."
              description="Cada seção foi pensada para emocionar: a fé que sustenta, o movimento que transforma e a celebração que reúne as pessoas certas ao redor dessa história."
            />
          </FadeInSection>
          <FadeInSection>
            <EventCard event={worshipEvent} />
          </FadeInSection>
          <FadeInSection>
            <EventCard event={raceEvent} highlight />
          </FadeInSection>
          <FadeInSection>
            <EventCard event={partyEvent} />
          </FadeInSection>
        </section>

        <section className="section-shell space-y-8">
          <FadeInSection>
            <SectionHeading
              eyebrow="Galeria do projeto"
              title="O que já tivemos nesta história que vale a pena recordar."
              description="Três experiências que já aconteceram e que contam um pouco do que foi vivido até aqui, com a promessa de muitas fotos lindas para relembrar cada momento desses eventos incríveis."
              align="center"
            />
          </FadeInSection>
          <FadeInSection>
            <GalleryPreview />
          </FadeInSection>
        </section>

        <section id="timeline" className="section-shell space-y-8">
          <FadeInSection>
            <SectionHeading
              eyebrow="Linha do tempo"
              title="Marcos que explicam a força, a sensibilidade e a disciplina dessa nova fase."
              description="Aos 35 anos, cada memória ganha novo sentido: a origem, os desafios, o amor amadurecido, as conquistas e a constância cultivada no presente."
              align="center"
            />
          </FadeInSection>
          <FadeInSection>
            <Timeline entries={timelineEntries} />
          </FadeInSection>
        </section>
      </main>

      <footer className="border-t border-brand-100 bg-white/80 py-10">
        <div className="section-shell flex flex-col gap-4 text-center">
          <p className="font-display text-2xl font-semibold text-brand-900">{footerQuote}</p>
          <p className="text-sm text-brand-600">BDAY 35 · Uma experiência feita para inspirar, acolher e celebrar.</p>
        </div>
      </footer>
    </div>
  );
}
