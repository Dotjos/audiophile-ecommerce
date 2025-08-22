import {  ProductImage,RandomComponents } from "@/app/Components";
import AddToCartSection from "@/app/Components/AddToCartSection";
import { Goback } from "@/app/Components/Goback";
import { getProductById,getRandomProducts } from "@/app/lib/products";
import { formatPrice } from "@/app/utils";
import useStore from "@/app/Zustore";
import Image from "next/image";
import { notFound } from 'next/navigation';


interface PageProps {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: PageProps) {
  // Fetch product details using the ID from params
  const { id } = await params;
  const product = await getProductById((id))


 function generateSlug(text: string) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }   
  
  const randomProducts= await getRandomProducts(3);

  if (!product) {
    notFound();
  }

  return (
    <div className="px-4 py-2">
      <Goback />
      <div>
        <ProductImage src={product?.image || ''} alt={product?.name || 'Product Image'} />
        <h2 className="text-lg w-3/5 uppercase tracking-wide font-semibold mt-2">{product?.name}</h2>
        <p className="text-sm text-gray-500 mt-1">{product?.details}</p>
        <h1 className="my-4 font-bold">{ formatPrice(product?.price ?? 0)}</h1>
        <div className="flex space-x-2">
         <AddToCartSection product={product} />
        </div>
        <section className="my-15">
          <h1 className="font-bold">FEATURES</h1>
          <ul className="list-none mt-6">
            {product?.features?.map((feature, index) => (
              <li key={index} className="text-xs mt-3 text-gray-600">{feature}</li>
            ))}
          </ul>
        </section>
        <section className="mt-4">
          <h1 className="font-bold mb-5">IN THE BOX</h1>
          <ul className="list-none">
            {product?.inTheBox?.map((item, index) => (
              <li key={index} className="text-sm mb-2.5 text-gray-600">
                <span className="text-BurntSienna-100 font-bold mr-4">{item.quantity}x</span>  {item.item}
              </li>
            ))}
          </ul>
        </section>
        <section className="my-15">
        {product?.productImages?.map((image, index) => (
          <Image 
            key={index}
            src={image}
            alt={`Product Gallery ${index + 1}`}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
        ))}
        </section>
        <section>
          <h1 className="font-bold text-center">YOU MAY ALSO LIKE</h1>
          {randomProducts.map((product) => (
            <div key={product.id} className="mt-4">
              <RandomComponents product={product}/>
            </div>
          ))}
        </section>
      </div>
    </div>
  );

};

