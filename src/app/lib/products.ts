import { type Category } from './constants';

export async function getProductsByCategory(category: Category) {
  // This could fetch from API, database, or static data
  // For now, mock data:
  
  const allProducts = {
    headphones: [
      { id: 'xx99-mark-ii', name: 'XX99 Mark II', price: 2999 },
      { id: 'xx99-mark-i', name: 'XX99 Mark I', price: 1750 },
      // ... more products
    ],
    speakers: [
      { id: 'zx9', name: 'ZX9 Speaker', price: 4500 },
      { id: 'zx7', name: 'ZX7 Speaker', price: 3500 },
      // ... more products  
    ],
    earphones: [
      { id: 'yx1', name: 'YX1 Wireless Earphones', price: 599 },
      // ... more products
    ],
  };
  
  return allProducts[category] || [];
}