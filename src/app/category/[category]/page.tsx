import { notFound } from 'next/navigation';
import { getProductsByCategory } from '../../lib/products';
import { VALID_CATEGORIES,validCategory } from '../../lib/constants';
import { Button, ProductImage } from '@/app/Components';

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
    <div className="min-h-screen relative">
      <div className=' bg-PureBlack-100 text-PureWhite-100'>
         <h1 className='p-6 font-bold tracking-widest text-xl relative ultra-thin-border lg:pt-40 uppercase text-center md:py-20 md:font-bold md:text-3xl'>{category}</h1>
      </div>
      <div className='py-4 px-4 lg:p-35 lg:px-35 grid grid-cols-1 md:gap-10 md:pt-25 md:px-10'>
        {products.map((product: Product,index:number) => (
          <div key={product.id} className="flex space-y-4 text-center lg:justify-between flex-col md:gap-2 lg:flex-row items-center mb-6">
            <ProductImage src={product.image} className='h-70' width={300} height={500} wrapperStyle={`w-full ${(index+1)%2==1?"lg:order-1":"lg:order-2"} lg:w-4/9 lg:h-100`}  alt={product.name} />
            <div className={`lg:w-2/5 lg:flex ${(index+1)%2==1?"lg:order-2":"lg:order-1"} lg:flex-col lg:gap-7 order-2 lg:items-start`}>
            <div className=''>
            {index===0&&<h2 className="text-xs lg:text-start tracking-[5px] md:tracking-[10px] lg:tracking-[7px] lg:text-lg font-light text-BurntSienna-100 mt-2">NEW PRODUCT</h2>}
            <h2 className="text-lg w-3/5 lg:text-left lg:w-3/5 uppercase tracking-wide md:w-1/2 md:font-bold md:text-3xl lg:text-4xl font-semibold mt-2">{product.name}</h2>
            </div>
            <p className="text-sm lg:text-sm lg:w-full lg:text-left text-gray-500 mt-1 md:w-3/4">{product.details}</p>
            <Button text='SEE PRODUCT' className='md:w-33 lg:mt-3 lg:font-bold lg:py-3' link={`../productDetail/${product.id}`}/>
            </div>
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

