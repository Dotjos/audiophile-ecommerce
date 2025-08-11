import { notFound } from 'next/navigation';
import { getProductsByCategory } from '../../lib/products';
import { VALID_CATEGORIES,validCategory } from '../../lib/constants';
import { Button } from '@/app/Components';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

interface CategoryPageProps {
  params: Promise<{
    category: string;   
  }>;
}

interface Product {
  id: string;
  image: string;
  name: string;
  details: string;
  price: number;
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
      <div className=' bg-PureBlack-100 text-PureWhite-100'>
         <h1 className='p-3 relative ultra-thin-border uppercase text-center'>{category}</h1>
      </div>
      <div className='py-4 px-4 grid grid-cols-1'>
        {products.map((product: Product,index:number) => (
          <div key={product.id} className="flex space-y-4 text-center flex-col items-center mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
            {index===0&&<h2 className="text-xs tracking-[5px]  font-light text-BurntSienna-100 mt-2">NEW PRODUCT</h2>}
            <h2 className="text-lg w-3/5 uppercase tracking-wide font-semibold mt-2">{product.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{product.details}</p>
            <Button text='SEE PRODUCT' link={`../productDetail/${product.id}`} />
          </div>
        ))} 
        
      </div>
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

