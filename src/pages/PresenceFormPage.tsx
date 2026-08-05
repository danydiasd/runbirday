import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { FormLayout } from '../layouts/FormLayout';

const eventCopy = {
  culto: {
    eyebrow: 'Confirmação de presença · Culto',
    title: 'Reserve seu lugar neste momento de gratidão.',
    description: 'Use o botão abaixo para sinalizar sua presença no culto de gratidão.',
    buttonLabel: 'Confirmar presença no culto',
  },
  festa: {
    eyebrow: 'Confirmação de presença · Festa',
    title: 'Confirme sua participação nesta celebração especial.',
    description: 'Use o botão abaixo para sinalizar sua presença na festa de celebração.',
    buttonLabel: 'Confirmar presença na festa',
  },
} as const;

export function PresenceFormPage() {
  const { eventType = 'culto' } = useParams();
  const content = useMemo(() => eventCopy[eventType as keyof typeof eventCopy] ?? eventCopy.culto, [eventType]);

  return (
    <FormLayout eyebrow={content.eyebrow} title={content.title} description={content.description}>
      <div className="flex h-full flex-col justify-center gap-6 text-center">
        <p className="text-lg leading-8 text-brand-700">
          Os formulários foram removidos para deixar a confirmação mais simples e objetiva.
        </p>
        <button type="button" className="cta-button w-full justify-center">
          {content.buttonLabel}
        </button>
      </div>
    </FormLayout>
  );
}
