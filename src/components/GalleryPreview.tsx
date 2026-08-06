import { useEffect, useRef, useState } from 'react';
import { AdaptiveImage } from './AdaptiveImage';

const galleryItems = [
  { image: '/images/DSC_6565.jpg', alt: 'Registro de uma celebração especial entre amigos', label: 'Celebração' },
  { image: '/images/DSC_6626.jpg', alt: 'Momento marcante vivido durante a comemoração', label: 'Encontros' },
  { image: '/images/DSC_6652.jpg', alt: 'Sorrisos e alegria em um dia inesquecível', label: 'Alegria' },
  { image: '/images/DSC_6670.jpg', alt: 'Memória afetiva registrada durante a festa', label: 'Memórias' },
  { image: '/images/DSC_6814.jpg', alt: 'Convidados celebrando juntos um novo ciclo', label: 'Conexões' },
  { image: '/images/DSC_6843.jpg', alt: 'Detalhes de uma noite feita para recordar', label: 'Detalhes' },
  { image: '/images/DSC_6857.jpg', alt: 'Um brinde à vida e às histórias compartilhadas', label: 'Gratidão' },
  { image: '/images/21742805_1947302845509138_4653327281124332464_n.jpg', alt: 'Lembrança de um capítulo especial desta história', label: 'Histórias' },
  { image: '/images/7bf636b1-06f1-48ff-90a9-096a721f700b.jpg', alt: 'Registro real de uma jornada cheia de significado', label: 'Jornada' },
];

export function GalleryPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  const showPrevious = () => setActiveIndex((current) => (current - 1 + galleryItems.length) % galleryItems.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % galleryItems.length);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(showNext, 5000);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  const activeItem = galleryItems[activeIndex];

  return (
    <div
      className="relative mx-auto max-w-6xl"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Galeria de momentos reais"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') showPrevious();
        if (event.key === 'ArrowRight') showNext();
      }}
    >
      <div
        className="relative h-[420px] overflow-hidden rounded-[2rem] bg-brand-900 shadow-glow sm:h-[560px] lg:h-[640px]"
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(distance) > 50) distance > 0 ? showPrevious() : showNext();
          touchStart.current = null;
        }}
      >
        <AdaptiveImage
          key={activeItem.image}
          src={activeItem.image}
          alt={activeItem.alt}
          fallbackLabel={activeItem.label}
          fallbackVariant="celebration"
          className="h-full animate-[fadeIn_500ms_ease-out]"
          imgClassName="h-full w-full object-cover animate-[fadeIn_500ms_ease-out]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-brand-900/10" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">Momentos reais</span>
            <p className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{activeItem.label}</p>
          </div>
          <span className="rounded-full border border-white/25 bg-brand-900/35 px-4 py-2 text-sm font-medium backdrop-blur-md">
            {String(activeIndex + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
          </span>
        </div>

        <button type="button" onClick={showPrevious} className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-brand-900/35 text-2xl text-white backdrop-blur-md transition hover:scale-105 hover:bg-brand-900/60 focus:outline-none focus:ring-2 focus:ring-white sm:left-6" aria-label="Foto anterior">
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" onClick={showNext} className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-brand-900/35 text-2xl text-white backdrop-blur-md transition hover:scale-105 hover:bg-brand-900/60 focus:outline-none focus:ring-2 focus:ring-white sm:right-6" aria-label="Próxima foto">
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="mt-5 flex justify-center gap-2" aria-label="Escolha uma foto">
        {galleryItems.map((item, index) => (
          <button key={item.image} type="button" onClick={() => setActiveIndex(index)} className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 ${index === activeIndex ? 'w-9 bg-brand-600' : 'w-2.5 bg-brand-200 hover:bg-brand-300'}`} aria-label={`Ir para foto ${index + 1}: ${item.label}`} aria-current={index === activeIndex ? 'true' : undefined} />
        ))}
      </div>
      <p className="sr-only" aria-live="polite">Foto {activeIndex + 1} de {galleryItems.length}: {activeItem.alt}</p>
    </div>
  );
}
