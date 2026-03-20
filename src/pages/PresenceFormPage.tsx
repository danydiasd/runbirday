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
      'Preencha seus dados para confirmar sua presença no culto. A estrutura já está pronta para envio futuro para backend e registro em banco.',
  },
  festa: {
    eyebrow: 'Confirmação de presença · Festa',
    title: 'Confirme sua participação nesta celebração especial.',
    description:
      'Deixe seus dados para a equipe organizadora receber sua confirmação de forma elegante e prática.',
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
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-5">
          <FieldWrapper label="Nome completo">
            <TextInput
              required
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(event) => handleChange('name', event.target.value)}
            />
          </FieldWrapper>
          <FieldWrapper label="E-mail">
            <TextInput
              required
              type="email"
              placeholder="voce@email.com"
              value={formData.email}
              onChange={(event) => handleChange('email', event.target.value)}
            />
          </FieldWrapper>
          <FieldWrapper label="Telefone">
            <TextInput
              required
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={(event) => handleChange('phone', event.target.value)}
            />
          </FieldWrapper>
        </div>
        <button type="submit" className="cta-button w-full">
          Enviar confirmação
        </button>
        {submitted ? (
          <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-5 text-sm leading-7 text-emerald-900">
            Confirmação registrada localmente com sucesso. No próximo passo, basta conectar este formulário a uma API para persistir os dados em MariaDB.
          </div>
        ) : null}
      </form>
    </FormLayout>
  );
}
