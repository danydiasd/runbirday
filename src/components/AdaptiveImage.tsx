import { useState } from 'react';

type AdaptiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  fallbackVariant?: 'sunset' | 'energy' | 'celebration';
  imgClassName?: string;
};

const fallbackStyles = {
  sunset: 'from-brand-200 via-sunset-300 to-brand-700',
  energy: 'from-sunset-200 via-sunset-400 to-brand-800',
  celebration: 'from-brand-100 via-brand-300 to-sunset-500',
} as const;

export function AdaptiveImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  fallbackVariant = 'sunset',
  imgClassName = 'h-full w-full object-cover',
}: AdaptiveImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        aria-label={alt}
        role="img"
        className={`flex h-full w-full items-end bg-gradient-to-br ${fallbackStyles[fallbackVariant]} ${className}`.trim()}
      >
        <div className="w-full bg-gradient-to-t from-brand-900/70 to-transparent p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Imagem pendente</p>
          <p className="mt-2 font-display text-2xl font-semibold">{fallbackLabel ?? alt}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/85">
            A certeza de um momento real com Deus e de muita gratidão<code>/public/images</code> .
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${imgClassName} ${className}`.trim()}
      onError={() => setHasError(true)}
    />
  );
}
