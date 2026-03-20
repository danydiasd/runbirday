import { AdaptiveImage } from './AdaptiveImage';

const galleryItems = [
  {
    title: 'Culto de Gratidão',
    description: 'Imagem conceitual com tons dourados, luz suave e atmosfera espiritual.',
    image: '/images/culto.jpg',
  },
  {
    title: 'Corrida 35',
    description: 'Área preparada para foto real da aniversariante correndo ou placeholder de fácil troca.',
    image: '/images/corrida.jpg',
  },
  {
    title: 'Festa',
    description: 'Seção híbrida, pronta para combinar estética e registros reais em um futuro carrossel.',
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
