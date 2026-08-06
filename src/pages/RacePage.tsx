import { FormLayout } from '../layouts/FormLayout';
import raceLogo from '/images/logo_corrida.jpg';

export function RacePage() {
  return (
    <FormLayout
      eyebrow="Corrida 35 - Em Movimento"
      title="Realize sua inscrição para a corrida B-DAY Run Dany"
      description={
        <div className="space-y-5">
          

          <div className="space-y-3">
            <p>🏃 Uma celebração da vida através do esporte;</p>

            <p>💜 Um encontro entre amigos, corredores e familiares;</p>

            <p>
              🌿 Um percurso em meio ao Parque Urbano da Lagoa do Mondubim;
            </p>

            <p>
              🎉 Um momento para criar memórias, compartilhar conquistas e
              inspirar novas jornadas.
            </p>
          </div>

          <p>
            A{' '}
            <strong className="font-bold text-brand-900">
              B-DAY RUN Dany – 35 Anos em Movimento
            </strong>{' '}
            nasceu para celebrar a vida de uma forma diferente: reunindo
            amigos, familiares e apaixonados pela corrida para compartilhar
            quilômetros de saúde, superação e boas histórias.
          </p>

          <p>
            A corrida acontecerá no dia 15 de novembro de 2026, às 6h, no
            Parque Urbano da Lagoa do Mondubim, em Fortaleza.
          </p>

          <p>
            O percurso contará com opções de 3 km e 5 km, proporcionando uma
            experiência inclusiva para corredores de todos os níveis.
          </p>

          <p>
            Todos os participantes receberão um kit especial, incluindo
            camiseta, medalha e brindes exclusivos.
          </p>
        </div>
      }
    >
     
      <div className="flex h-full flex-col justify-center">
         <div className="mb-6 flex justify-center">
            <img
              src={raceLogo}
              alt="Logo B-DAY Run Dany – 35 Anos em Movimento"
              className="h-auto w-full max-w-xs object-contain"
            />
      </div>
        <div className="mt-6 space-y-5 rounded-2xl bg-brand-50 p-6">
          <p className="leading-7 text-brand-700">
            📅 <strong>Data:</strong> 15 de novembro de 2026
            <br />
            🕕 <strong>Horário:</strong> 6h00
            <br />
            📍 <strong>Local:</strong> Parque Urbano da Lagoa do Mondubim,
            Fortaleza.
          </p>

          <p className="leading-7 text-brand-700">
            🏃 <strong>Percursos:</strong> 3 km e 5 km.
          </p>

          <p className="leading-7 text-brand-700">
            🎁 <strong>Kit do atleta:</strong> camiseta, medalha e brindes
            exclusivos.
          </p>
        </div>

        <a
          href="https://fortal-pass.com/corridas/bday-run-2026-3"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-fit items-center justify-center rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
        >
          Fazer inscrição na Fortal Pass
        </a>
      </div>
    </FormLayout>
  );
}