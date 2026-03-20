import { AdaptiveImage } from './AdaptiveImage';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <AdaptiveImage
          src="/images/culto.jpg"
          alt="Pôr do sol simbólico para o culto de gratidão"
          fallbackLabel="Pôr do sol de gratidão"
          fallbackVariant="sunset"
          className="h-full min-h-[88vh]"
          imgClassName="h-full min-h-[88vh] w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/30 via-brand-900/50 to-brand-900" />
      <div className="section-shell relative flex min-h-[88vh] flex-col justify-center py-20">
        <div className="max-w-3xl space-y-8">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-brand-100">
            Aniversário de 35 anos · fé, movimento e alegria
          </span>
          <div className="space-y-5">
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              35 anos: Gratidão, Movimento e Celebração
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-brand-100 sm:text-xl">
              Uma jornada contada em experiências reais: o coração que agradece, os passos que avançam e a mesa que celebra tudo o que foi vivido até aqui.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#programacao" className="cta-button">
              Ver programação
            </a>
            <a href="#timeline" className="secondary-button border-white/20 bg-white/10 text-white hover:bg-white/20">
              Conhecer a história
            </a>
          </div>
          <div className="grid gap-4 pt-6 sm:grid-cols-3">
            {[
              ['3 experiências', 'Culto, corrida e festa em uma narrativa única.'],
              ['Design emocional', 'Tons quentes, dourado suave e atmosfera elegante.'],
              ['Pronto para evoluir', 'Base estruturada para integrar backend e MariaDB depois.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <h2 className="font-semibold text-brand-50">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-brand-100/90">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
