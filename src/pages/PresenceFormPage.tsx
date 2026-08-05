import { useMemo, useState, type FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { FieldWrapper, TextInput } from '../components/FormField';
import { FormLayout } from '../layouts/FormLayout';
import type { WorshipAndPartyFormData } from '../types';

const eventCopy = {
  culto: {
    eyebrow: 'Confirmação de presença · Culto',
    title: 'Reserve seu lugar neste momento de gratidão.',
    description:
      'Preencha seus dados para confirmar sua presença no culto.', 
      //A estrutura já está pronta para envio futuro para backend e registro em banco
  },
  festa: {
    eyebrow: 'Confirmação de presença · Festa',
    title: 'Confirme sua participação nesta celebração especial.',
    description:
      'Deixe seus dados para a equipe organizadora  possa receber sua confirmação de forma elegante e prática.',
  },
} as const;

export function PresenceFormPage() {
  const { eventType = 'culto' } = useParams();
  const content = useMemo(() => eventCopy[eventType as keyof typeof eventCopy] ?? eventCopy.culto, [eventType]);
  const [formData, setFormData] = useState<WorshipAndPartyFormData>({
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof WorshipAndPartyFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <FormLayout eyebrow={content.eyebrow} title={content.title} description={content.description}>
     
    </FormLayout>
  );
}
