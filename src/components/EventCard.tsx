import { Link } from 'react-router-dom';
import type { EventInfo } from '../types';
import { AdaptiveImage } from './AdaptiveImage';

type EventCardProps = {
  event: EventInfo;
  highlight?: boolean;
};

export function EventCard({ event, highlight = false }: EventCardProps) {
  return (
    <article
      id={event.id}
      className={`grid overflow-hidden rounded-[2rem] border border-brand-100 bg-white shadow-glow lg:grid-cols-[1.05fr_0.95fr] ${
        highlight ? 'ring-1 ring-sunset-300/70' : ''
      }`}
    >
      <div className="relative min-h-[320px] overflow-hidden">
        <AdaptiveImage
          src={event.image}
          alt={event.eyebrow}
          fallbackLabel={event.eyebrow}
          fallbackVariant={highlight ? 'energy' : event.id === 'festa' ? 'celebration' : 'sunset'}
          imgClassName="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/65 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
          {event.highlights?.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-800"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 p-8 sm:p-10">
        <div className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{event.eyebrow}</span>
          <h3 className="font-display text-3xl font-bold text-brand-900">{event.title}</h3>
          <p className="text-base leading-8 text-brand-700">{event.description}</p>
        </div>
        <dl className="grid gap-4 rounded-[1.75rem] bg-brand-50 p-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">Data</dt>
            <dd className="mt-2 text-sm font-medium text-brand-900">{event.date}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">Horário</dt>
            <dd className="mt-2 text-sm font-medium text-brand-900">{event.time}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">Local</dt>
            <dd className="mt-2 text-sm font-medium text-brand-900">{event.location}</dd>
          </div>
        </dl>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-brand-600">
            Em desenvolvimento
            {/* Estrutura preparada para integração posterior com banco MariaDB e automações de confirmação. */}
          </p>
          <Link to={event.actionHref} className={highlight ? 'cta-button' : 'secondary-button'}>
            {event.actionLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
