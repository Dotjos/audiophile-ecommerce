export type Category = 'headphones' | 'speakers' | 'earphones';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  details: string;
  category: Category; 
}

// Single array structure with category as a property
export const allProducts: Product[] = [
  // Headphones
  {
    id: 'xx99-mark-ii',
    name: "XX99 Mark II Headphones",
    price: 2999,
    image: "/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
    details: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    category: 'headphones'
  },
  {
    id: 'xx99-mark-i',
    name: 'XX99 Mark I Headphones',
    price: 1750,
    image: "/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
    details: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    category: 'headphones'
  },
  {
    id: 'xx59-headphones',
    name: 'XX59 Headphones',
    price: 1950,
    image: "/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
    details: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    category: 'headphones'
  },
  
  // Speakers
  {
    id: "zx-9",
    name: "ZX9 Speaker",
    price: 2999,
    image: "/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
    details: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    category: 'speakers'
  },
  {
    id: "zx-7",
    name: "ZX7 Speaker",
    price: 2899,
    image: "/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
    details: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    category: 'speakers'
  },
  
  // Earphones
  {
    id: 'yx-1',
    name: "YX1 Wireless Earphones",
    price: 2344,
    image: "/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
    details: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    category: 'earphones'
  }
];



export async function getProductsByCategory(category: Category): Promise<Product[]> {
  // Simulate API delay (remove in production)
  await new Promise(resolve => setTimeout(resolve, 100));


  return allProducts.filter(product => product.category === category);
}

// Helper function to get a single product
export async function getProductById(productId: string): Promise<Product | null> {
  await new Promise(resolve => setTimeout(resolve, 50));
  
  return allProducts.find(product => product.id === productId) || null;
}

export async function getRandomProducts(count: number = 3): Promise<Product[]> {
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}