export const VALID_CATEGORIES = ['headphones', 'speakers', 'earphones'] as const;
export type validCategory = typeof VALID_CATEGORIES[number];

export const CATEGORY_CONFIG = {
  headphones: {
    name:'Headphones',
    description:'Premium headphones for the ultimate listening experience',
  },
  speakers: {
    name:'Speakers',
    description:'Powerful speakers that deliver exceptional sound quality',
  },
  earphones: {
    name:'Earphones', 
    description:'Portable audio solutions for life on the go',
  },
} as const;

export type Category = 'headphones' | 'speakers' | 'earphones';