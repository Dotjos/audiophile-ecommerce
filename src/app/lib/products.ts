export type Category = 'headphones' | 'speakers' | 'earphones';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  details: string;
  category: Category; 
  features?: string[];
  inTheBox?: { quantity: number; item: string }[];
  productImages?: string[];
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
    category: 'headphones',
    features: [
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
    ],
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ] ,
    productImages:
    ["/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg",
      "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg",
      "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"]
  },
  {
    id: 'xx99-mark-i',
    name: 'XX99 Mark I Headphones',
    price: 1750,
    image: "/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
    details: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    category: 'headphones',
    features: [
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. ",
      "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
    ],
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" }],
    productImages:
    ["/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg",
      "/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg",
      "/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg"]
  },
  {
    id: 'xx59-headphones',
    name: 'XX59 Headphones',
    price: 1950,
    image: "/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
    details: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    category: 'headphones',
    features: ["These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
      "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."],
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" }],
    productImages:
    ["/assets/product-xx59-headphones/mobile/image-gallery-1.jpg",
      "/assets/product-xx59-headphones/mobile/image-gallery-2.jpg",
      "/assets/product-xx59-headphones/mobile/image-gallery-3.jpg"]
  },
  
  // Speakers
  {
    id: "zx-9",
    name: "ZX9 Speaker",
    price: 2999,
    image: "/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
    details: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    category: 'speakers',
    features: [
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
      "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
    ],
    inTheBox: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 1, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 10m Audio Cable" },
      { quantity: 1, item: "10m Optical Cable" }
    ],
    productImages: [
      "/assets/product-zx9-speaker/mobile/image-gallery-1.jpg",
      "/assets/product-zx9-speaker/mobile/image-gallery-2.jpg",
      "/assets/product-zx9-speaker/mobile/image-gallery-3.jpg"
    ]
  },
  {
    id: "zx-7",
    name: "ZX7 Speaker",
    price: 2899,
    image: "/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
    details: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    category: 'speakers',
    features: [
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
      "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
    ],
    inTheBox: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 10m Audio Cable" },
      { quantity: 1, item: "7.5 Optical Cable" }
    ],
    productImages: [
      "/assets/product-zx7-speaker/mobile/image-gallery-1.jpg",
      "/assets/product-zx7-speaker/mobile/image-gallery-2.jpg",
      "/assets/product-zx7-speaker/mobile/image-gallery-3.jpg"
    ]
  },
  
  // Earphones
  {
    id: 'yx-1',
    name: "YX1 Wireless Earphones",
    price: 2344,
    image: "/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
    details: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    category: 'earphones',
    features: [
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
      "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
    ],
    inTheBox: [
      { quantity: 2, item: "Earphone Unit" },
      { quantity: 6, item: "Multi-size Earplugs" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "USB-C Charging Cable" },
      { quantity: 1, item: "Travel pouch" }
    ],
    productImages: [
      "/assets/product-yx1-earphones/mobile/image-gallery-1.jpg",
      "/assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
      "/assets/product-yx1-earphones/mobile/image-gallery-3.jpg"
    ]
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

// Helper function to get a random product
export async function getRandomProducts(count: number = 3): Promise<Product[]> {
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
