import { notFound } from 'next/navigation';
import { getProductsByCategory } from '../../lib/products';
import { VALID_CATEGORIES,validCategory } from '../../lib/constants';

interface CategoryPageProps {
  params: Promise<{
    category: string;   
  }>;
}

export default async function Page({ params }: CategoryPageProps) {
  const { category } =await params;

  function isValidCategory(category: string): category is validCategory {
    return VALID_CATEGORIES.includes(category as validCategory);
  }
  

  // Validate category
  if (!isValidCategory(category)) {
    notFound();
  }
  
  // Fetch products for this category
  const products = await getProductsByCategory(category);
  
  return (
    <div className="min-h-screen">
      <h1>{category}</h1>
    </div>
  );
}

// Generate static params for build optimization
export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({
    category,
  }));
}

// Dynamic metadata based on category
export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  
  const categoryData = {
    headphones: {
      title: 'Headphones - Audiophile',
      description: 'Premium headphones for audiophiles',
    },
    speakers: {
      title: 'Speakers - Audiophile', 
      description: 'High-quality speakers for your home',
    },
    earphones: {
      title: 'Earphones - Audiophile',
      description: 'Wireless and wired earphones',
    },
  };
  
  return categoryData[category as keyof typeof categoryData] || {
    title: 'Category - Audiophile',
    description: 'Browse our audio products',
  };
}

