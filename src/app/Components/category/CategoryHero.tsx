import { CATEGORY_CONFIG, type Category } from './../../lib/constants';

interface CategoryHeroProps {
  category: Category;
}

export default function CategoryHero({ category }: CategoryHeroProps) {
  const config = CATEGORY_CONFIG[category];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
          {config.name}
        </h1>
        <p className="mt-4 text-lg opacity-75 max-w-2xl mx-auto">
          {config.description}
        </p>
      </div>
    </section>
  );
}