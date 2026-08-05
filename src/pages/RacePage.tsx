import { FormLayout } from '../layouts/FormLayout';

export function RacePage() {
  return (
    <FormLayout
      eyebrow="Corrida 35 - Em Movimento"
      title="Participe da corrida comemorativa"
      description="A inscrição foi simplificada: acesse o botão abaixo para seguir para o portal de inscrições da corrida."
    >
      <div className="flex h-full flex-col justify-center gap-6 text-center">
        <p className="text-lg leading-8 text-brand-700">
          Não é necessário preencher formulários nesta página. O acesso para participação está concentrado em um único botão.
        </p>
        <a
          href="https://fortal-pass.com/corridas/bday-run-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button w-full justify-center"
        >
          Acessar inscrição da corrida
        </a>
      </div>
    </FormLayout>
  );
}
