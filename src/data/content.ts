import type { EventInfo, TimelineEntry } from '../types';

export const events: EventInfo[] = [
  {
    id: 'culto',
    eyebrow: 'Culto de louvor - Etapa Gratidão',
    title: 'Um fim de tarde  para lembrar da fidelidade de Deus em cada ciclo.',
    description:
      'Um encontro acolhedor para agradecer pelas promessas cumpridas, pela proteção no caminho e pela beleza de chegar aos 35 anos com fé renovada.',
    date: '07 de Novembro de 2026',
    time: 'a partir das 16h00',
    location: 'Residencial Maraponga',
    image: '/images/por-do-sol.jpg',
    actionLabel: 'Confirmar presença',
    actionHref: '/confirmar/culto',
    highlights: ['Momento de adoração', 'Recepção afetiva', 'Atmosfera de pôr do sol', 'Louvores'],
  },
  {
    id: 'corrida',
    eyebrow: 'Corrida B-Day Dany Run - Etapa Movimento',
    title: 'A seção mais vibrante: disciplina, saúde, foco e celebração em cada passo.',
    description:
      'Uma experiência esportiva pensada para simbolizar evolução, constância e superação. Ideal para quem deseja correr junto nessa história de força e propósito.',
    date: '15 de Novembro de 2026',
    time: '6h00',
    location: 'Parque Urbano da Lagoa do Mondubim- Fortaleza',
    image: '/images/corrida.jpg',
    actionLabel: 'Participar',
    actionHref: '/corrida',
    highlights: ['Percursos de 03 km e 05 km', 'Kit atleta ', 'Fotos do evento', 'Medalha', 'Brindes'],
  },
  {
    id: 'festa',
    eyebrow: 'Festa In Celebration - Etapa Celebração',
    title: 'O abraço leve depois da jornada: música, afeto e alegria compartilhada.',
    description:
      'Uma festa casual chiq e calorosa para transformar memórias em celebração. Luzes douradas, boas conversas e a presença de quem faz parte dessa caminhada.',
    date: '22 de Novembro de  2026',
    time: '19:00 horas',
    location: 'Em breve',
    image: '/images/festa.jpg',
    actionLabel: 'Confirmar presença',
    actionHref: '/confirmar/festa',
    highlights: ['Ambiente social', 'Fotos ', 'Sunset celebration', 'Descontração', 'Música ao vivo'],
  },
];

export const timelineEntries: TimelineEntry[] = [
  {
    year: '1991',
    title: 'Nascimento',
    description: 'O início de uma história marcada por sensibilidade, coragem e uma luz própria que atravessou gerações.',
  },
  {
    year: 'Infância',
    title: 'Superação desde cedo',
    description: 'Entre aprendizados e desafios, vivência de luto aos 7 anos, aprendizado com vida de uma mãe forte. Cada fase construiu uma base firme de fé, resiliência e ternura.',
  },
  {
    year: 'Maternidade',
    title: 'Amor que amadurece',
    description: 'A maternidade trouxe profundidade, propósito e um novo significado para o cuidado e para o futuro. Uma nova fase de mulher se iniciou, com amor e responsabilidade ampliados.',
  },
  {
    year: 'Carreira',
    title: 'Conquistas profissionais',
    description: 'Dedicação e competência abriram caminhos, consolidando uma trajetória admirável de trabalho e realização. Em 3 areas distintas, a carreira se expandiu, mostrando versatilidade e comprometimento.',
  },
  {
    year: 'Hoje',
    title: 'Corrida, disciplina e plenitude',
    description: 'A fase atual celebra movimento, saúde, espiritualidade e a decisão de viver com intencionalidade.',
  },
];

export const footerQuote =
  'Celebrar 35 anos é honrar o que passou, mover-se com fé no presente e florescer com alegria no que ainda vem.';
