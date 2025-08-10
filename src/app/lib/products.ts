import { type Category } from './constants';

export async function getProductsByCategory(category: Category) {
  // This could fetch from API, database, or static data
  // For now, mock data:
  
  const allProducts = {
    headphones: [
      { id: 'xx99-mark-ii',
        name:"XX99 Mark II Headphones",
        price: 2999 , 
        image:"../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
        details:"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."},
      { id: 'xx99-mark-i',
        name: 'XX99 Mark I Headphones',
        price: 1750, 
        image:"../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg", 
        details:"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go." },
      { id: 'xx59-headphones', 
        name: 'XX59 Headphones', 
        price: 1950, 
        image:"../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
        details:"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move." },
    ],
    speakers: [
      { id:"zx-9",
        name:"zx9-speaker",
        price: 2999 , 
        image:"../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
        details:"Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.."},
      { id:"zx-7",
        name:"zx7-speaker",
        price: 2899 , 
        image:"../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
        details:"Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."}
    ],
    earphones: [
      { id:'yx-1',
        name:"YX1 WIRELESS EARPHONES",
        price: 2344 , 
        image:"../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
        details:"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."},
    ],
  };
  
  return allProducts[category] || [];
}