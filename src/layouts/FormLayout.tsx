import { Link } from 'react-router-dom';
import type { PropsWithChildren } from 'react';

type FormLayoutProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  description: string;
}>;

export function FormLayout({ eyebrow, title, description, children }: FormLayoutProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_rgba(255,242,221,0.9),_rgba(255,250,242,1))] py-10">
      <div className="section-shell">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-900">
          ← Voltar para a página principal
        </Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="glass-card h-fit space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{eyebrow}</span>
            <h1 className="font-display text-4xl font-bold text-brand-900">{title}</h1>
            <p className="leading-8 text-brand-700">{description}</p>
            <div className="rounded-[1.75rem] bg-brand-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">Integração futura</h2>
              <p className="mt-3 text-sm leading-7 text-brand-700">
                Este fluxo está pronto para receber persistência em MariaDB via API, com armazenamento definitivo de confirmações, inscrições e perfis administrativos.
              </p>
            </div>
          </section>
          <section className="glass-card">{children}</section>
        </div>
      </div>
    </main>
  );
}
