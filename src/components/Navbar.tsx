const links = [
  { href: '#culto', label: 'Culto' },
  { href: '#corrida', label: 'Corrida' },
  { href: '#festa', label: 'Festa' },
  { href: '#timeline', label: 'Linha do tempo' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-900/60 backdrop-blur-lg">
      <div className="section-shell flex items-center justify-between py-4 text-white">
        <a href="#top" className="font-display text-lg font-semibold tracking-wide text-brand-100">
          BDAY 35
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-brand-200">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#programacao" className="secondary-button border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/20">
          Programação
        </a>
      </div>
    </header>
  );
}
