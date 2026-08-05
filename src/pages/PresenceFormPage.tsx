import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { FormLayout } from '../layouts/FormLayout';

const eventCopy = {
  culto: {
    eyebrow: 'Confirmação de presença · Culto',
    title: 'Reserve seu lugar neste momento de gratidão.',
    description:
      'Preencha seus dados para confirmar sua presença no culto.',
    actionText: 'Confirmar presença no culto',
    actionUrl: 'https://forms.gle/UXZb1jQmi3dMmRf87', 
     
  },
  festa: {
    eyebrow: 'Confirmação de presença · Festa',
    title: 'Confirme sua participação nesta celebração especial.',
    description:
      'Deixe seus dados para a equipe organizadora  possa receber sua confirmação de forma elegante e prática.',
    actionText: 'Confirmar presença na festa',
    actionUrl: 'https://forms.gle/pWoijCdBrj6zBnHQ6',
  },
} as const;

type EventType = keyof typeof eventCopy;

export function PresenceFormPage() {
  const { eventType = 'culto' } = useParams();
  const content = useMemo(() => eventCopy[eventType as keyof typeof eventCopy] ?? eventCopy.culto, [eventType]);
  return (
    <FormLayout eyebrow={content.eyebrow}
     title={content.title}
     description={content.description}
     >
      <div className="flex h-full flex-col justify-center">
        <h2 className="font-display text-2xl font-bold text-brand-900">
          Confirme sua presença
        </h2>
        <p className="mt-3 leading-7 text-brand-700">
       Clique no botão abaixo para indicar sua presença </p>
       <a href={content.actionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center justify-center rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700">
             {content.actionText}
          </a>
        </div>
    </FormLayout>
  );
}
