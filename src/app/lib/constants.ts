// lib/constants.ts
export const VALID_CATEGORIES = ['headphones', 'speakers', 'earphones'] as const;
export type validCategory = typeof VALID_CATEGORIES[number];

export interface Product {
  id: string;
  image: string;
  name: string;
  details: string;
  price: number;
  category: validCategory;
}

// Category display information
export const CATEGORY_INFO: Record<validCategory, {
  title: string;
  description: string;
  displayName: string;
}> = {
  headphones: {
    title: 'Premium Headphones',
    description: 'Immerse yourself in studio-quality sound',
    displayName: 'Headphones'
  },
  speakers: {
    title: 'High-Quality Speakers',
    description: 'Transform your space with powerful audio',
    displayName: 'Speakers'
  },
  earphones: {
    title: 'Wireless Earphones',
    description: 'Superior audio for life on the move',
    displayName: 'Earphones'
  }
};