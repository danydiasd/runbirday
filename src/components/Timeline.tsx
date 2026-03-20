import type { TimelineEntry } from '../types';

type TimelineProps = {
  entries: TimelineEntry[];
};

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute left-6 top-0 hidden h-full w-px bg-brand-200 sm:block" />
      <div className="space-y-8">
        {entries.map((entry) => (
          <div key={entry.year} className="glass-card relative sm:ml-12">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-sunset-500 text-sm font-bold text-white shadow-lg sm:absolute sm:-left-[4.45rem] sm:top-6">
                {entry.year}
              </span>
              <div className="sm:pl-6">
                <h3 className="font-display text-2xl font-bold text-brand-900">{entry.title}</h3>
                <p className="mt-3 leading-7 text-brand-700">{entry.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
