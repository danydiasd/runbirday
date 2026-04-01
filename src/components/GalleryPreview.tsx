import { AdaptiveImage } from './AdaptiveImage';

const galleryItems = [
  {
    title: 'Culto de Gratidão',
    description: 'Atmosfera espiritual e louvores para promover a gratidão a Deus por suas bênçãos.',
    image: '/images/culto.png',
  },
  {
    title: 'Corrida 35',
    description: 'Um evento para promover a saúde física e emocional, com uma corrida de  2 e 5 km para os participantes se desafiarem e se conectarem com a natureza.',
    image: '/images/corrida.jpg',
  },
  {
    title: 'Festa',
    description: 'Mais um aniversário maravilhoso para relembrar ainda por muito tempo.',
    image: '/images/festa.jpg',
  },
];

export function GalleryPreview() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {galleryItems.map((item) => (
        <div key={item.title} className="overflow-hidden rounded-[2rem] border border-brand-100 bg-white shadow-glow">
          <AdaptiveImage src={item.image} alt={item.title} fallbackLabel={item.title} fallbackVariant={item.title === 'Corrida 35' ? 'energy' : item.title === 'Festa' ? 'celebration' : 'sunset'} className="h-56" imgClassName="h-56 w-full object-cover" />
          <div className="space-y-3 p-6">
            <h3 className="font-display text-2xl font-semibold text-brand-900">{item.title}</h3>
            <p className="leading-7 text-brand-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
