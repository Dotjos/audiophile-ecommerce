import {  ProductImage,RandomComponents } from "@/app/Components";
import AddToCartSection from "@/app/Components/AddToCartSection";
import { Goback } from "@/app/Components/Goback";
import { getProductById,getRandomProducts } from "@/app/lib/products";
import { formatPrice } from "@/app/utils";
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
    <div className="px-4 py-2 md:px-8 md:py-6">
      <Goback />
      <div>
        <div className="md:flex md:justify-between">
        <ProductImage src={product?.image || ''} wrapperStyle="md:w-1/3 md:h-100" className=" md:h-auto" alt={product?.name || 'Product Image'} />
        <div className="md:w-7/12 md:flex md:flex-col md:justify-center md:gap-5">
        {/* {index===0&&<h2 className="text-xs tracking-[5px] md:tracking-[10px] font-light text-BurntSienna-100 mt-2">NEW PRODUCT</h2>} */}
        <h2 className="text-lg w-3/5 md:font-bold uppercase tracking-wide md:w-1/3 md:text-3xl font-semibold mt-2">{product?.name}</h2>
        <p className="text-sm text-gray-500 md:text-base mt-1 md:leading-6">{product?.details}</p>
        <h1 className="my-4 font-bold">{ formatPrice(product?.price ?? 0)}</h1>
        <div className="flex space-x-2">
         <AddToCartSection product={product} />
        </div>
        </div>
        </div>

        <section className="my-15">
          <h1 className="font-bold md:text-3xl">FEATURES</h1>
          <ul className="list-none mt-6">
            {product?.features?.map((feature, index) => (
              <li key={index} className="text-xs md:text-base md:text-5 mt-3 text-gray-600">{feature}</li>
            ))}
          </ul>
        </section>
        <section className="mt-4 md:flex">
          <h1 className="md:w-1/2 font-bold md:text-3xl mb-5">IN THE BOX</h1>
          <ul className="list-none md:w-1/2 ">
            {product?.inTheBox?.map((item, index) => (
              <li key={index} className="text-sm md:text-base mb-2.5 text-gray-600">
                <span className="text-BurntSienna-100 font-bold mr-4">{item.quantity}x</span>  {item.item}
              </li>
            ))}
          </ul>
        </section>
        

        <section className="my-16">
  {product?.productImages && product.productImages.length >= 3 && (
    <div className="flex flex-col md:flex-row gap-4 md:h-96">
      {/* First column - constrained height */}
      <div className="flex flex-col md:w-1/2 gap-4">
        <ProductImage           
          src={product.productImages[0]}          
          alt={`Product Gallery 1`}          
          wrapperStyle="md:flex-1 overflow-hidden" // Add overflow hidden
          className="w-full h-full object-cover rounded-lg"
        />
        <ProductImage           
          src={product.productImages[1]}          
          alt={`Product Gallery 2`}          
          wrapperStyle="md:flex-1 overflow-hidden"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      {/* Second column */}
      <div className="md:w-1/2 mt-4 md:mt-0">
        <ProductImage           
          src={product.productImages[2]}          
          alt={`Product Gallery 3`}          
          wrapperStyle="h-full overflow-hidden"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  )}
</section>

        <section>
          <h1 className="font-bold text-xl md:text-3xl text-center">YOU MAY ALSO LIKE</h1>
          <div className="md:flex md:gap-4">
          {randomProducts.map((product) => (
            <div key={product.id} className="mt-12 ">
              <RandomComponents product={product}/>
            </div>
          ))}
          </div>
        </section>
      </div>
    </div>
  );

};

