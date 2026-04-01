import type { EventInfo, TimelineEntry } from '../types';

export const events: EventInfo[] = [
  {
    id: 'culto',
    eyebrow: 'Culto de gratidão',
    title: 'Uma noite para lembrar da fidelidade de Deus em cada ciclo.',
    description:
      'Um encontro acolhedor para agradecer pelas promessas cumpridas, pela proteção no caminho e pela beleza de chegar aos 35 anos com fé renovada.',
    date: '14 de Novembro de 2026',
    time: '16h00',
    location: 'A definir',
    image: '/images/por-do-sol.jpg',
    actionLabel: 'Confirmar presença',
    actionHref: '/confirmar/culto',
    highlights: ['Momento de adoração', 'Recepção afetiva', 'Atmosfera de pôr do sol'],
  },
  {
    id: 'corrida',
    eyebrow: 'Corrida 35 - Em Movimento',
    title: 'A seção mais vibrante: disciplina, saúde, foco e celebração em cada passo.',
    description:
      'Uma experiência esportiva pensada para simbolizar evolução, constância e superação. Ideal para quem deseja correr junto nessa história de força e propósito.',
    date: 'A denifir',
    time: '6h00',
    location: 'Parque Raquel de Queiroz - Fortaleza',
    image: '/images/corrida.jpg',
    actionLabel: 'Participar',
    actionHref: '/corrida',
    highlights: ['Percursos de 2km e 05km', 'Kit atleta ', 'Espaço pronto para futura galeria - fotos do evento em breve'],
  },
  {
    id: 'festa',
    eyebrow: 'Festa de celebração',
    title: 'O abraço leve depois da jornada: música, afeto e alegria compartilhada.',
    description:
      'Uma festa casual chiq e calorosa para transformar memórias em celebração. Luzes douradas, boas conversas e a presença de quem faz parte dessa caminhada.',
    date: 'Novembro de  2026',
    time: 'A definir',
    location: 'Em breve',
    image: '/images/festa.jpg',
    actionLabel: 'Confirmar presença',
    actionHref: '/confirmar/festa',
    highlights: ['Ambiente social', 'Galeria futura de fotos ', 'sunset celebration'],
  },
];

export const timelineEntries: TimelineEntry[] = [
  {
    year: '1991',
    title: 'Nascimento',
    description: 'O início de uma história marcada por sensibilidade, coragem e uma luz própria que atravessa gerações.',
  },
  {
    year: 'Infância',
    title: 'Superação desde cedo',
    description: 'Entre aprendizados e desafios, cada fase construiu uma base firme de fé, resiliência e ternura.',
  },
  {
    year: 'Maternidade',
    title: 'Amor que amadurece',
    description: 'A maternidade trouxe profundidade, propósito e um novo significado para o cuidado e para o futuro.',
  },
  {
    year: 'Carreira',
    title: 'Conquistas profissionais',
    description: 'Dedicação e competência abriram caminhos, consolidando uma trajetória admirável de trabalho e realização.',
  },
  {
    year: 'Hoje',
    title: 'Corrida, disciplina e plenitude',
    description: 'A fase atual celebra movimento, saúde, espiritualidade e a decisão de viver com intencionalidade.',
  },
];

export const footerQuote =
  'Celebrar 35 anos é honrar o que passou, mover-se com fé no presente e florescer com alegria no que ainda vem.';
