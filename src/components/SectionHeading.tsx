type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl';

  return (
    <div className={alignmentClass}>
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-brand-700 sm:text-lg">{description}</p>
    </div>
  );
}
