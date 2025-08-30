import { notFound } from 'next/navigation';
import { getProductsByCategory } from '../../lib/products';
import { VALID_CATEGORIES,validCategory } from '../../lib/constants';
import { Button, ProductImage } from '@/app/Components';
import Image from 'next/image';

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

function isValidCategory(category: string): category is validCategory {
  return VALID_CATEGORIES.includes(category as validCategory);
}

export default async function Page({ params }: CategoryPageProps) {
  const { category } =await params;

  const normalizedCategory = category.toLowerCase();


  // Validate category
  if (!isValidCategory(normalizedCategory)) {
    notFound();
  }
  
  // Fetch products for this category
  const products = await getProductsByCategory(normalizedCategory);
  
  return (
    <div className="min-h-screen">
      <div className=' bg-PureBlack-100 text-PureWhite-100 '>
         <h1 className='p-6 font-bold md:py-20 md:text-4xl tracking-widest text-xl relative ultra-thin-border uppercase text-center'>{category}</h1>
      </div>
      <div className='py-4 px-4 grid grid-cols-1 md:gap-10 md:mt-30 md:mx-5'>
        {products.map((product: Product,index:number) => (
          <div key={product.id} className="flex space-y-4 text-center flex-col md:gap-2 items-center mb-6">
            <ProductImage src={product.image} className='md:object-contain md:w-full border-BurntSienna-100 md:bg-OffWhite-100 md:rounded-lg md:h-80 ' alt={product.name} />
            {index===0&&<h2 className="text-xs tracking-[5px] md:tracking-[8px]  font-light text-BurntSienna-100 mt-2">NEW PRODUCT</h2>}
            <h2 className="text-lg w-3/5 md:w-1/2 uppercase md:text-3xl md:font-bold tracking-wide font-semibold mt-2">{product.name}</h2>
            <p className="text-sm text-gray-500 mt-1 md:w-4/5">{product.details}</p>
            <Button text='SEE PRODUCT' className='md:font-medium md:w-35' link={`../productDetail/${product.id}`} />
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

