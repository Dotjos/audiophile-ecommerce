import {  ProductImage,RandomComponents } from "@/app/Components";
import AddToCartSection from "@/app/Components/AddToCartSection";
import { Goback } from "@/app/Components/Goback";
import { getProductById,getRandomProducts } from "@/app/lib/products";
import { formatPrice } from "@/app/utils";
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
    <div className="px-4 md:px-8 md:py-6 lg:px-30 lg:py-13">
      <Goback className="lg:mb-11 mb-5"/>
      <div>
        <div className="flex flex-col gap-3 md:flex-row md:justify-between">
        <ProductImage src={product?.image || ''} wrapperStyle="md:w-1/3 h-60 lg:w-4/9 md:h-100 lg:h-90" className=" md:h-auto" alt={product?.name || 'Product Image'} />
        <div className="md:w-7/12 gap-3 lg:w-4/9 flex flex-col md:justify-center md:gap-5 lg:gap-1">
        {/* {index===0&&<h2 className="text-xs tracking-[5px] md:tracking-[10px] font-light text-BurntSienna-100 mt-2">NEW PRODUCT</h2>} */}
        <h2 className="text-lg w-3/5 font-bold uppercase tracking-wide md:w-1/3 lg:w-3/5 md:text-3xl ">{product?.name}</h2>
        <p className="text-xs text-gray-500 md:text-base lg:w-full md:leading-6">{product?.details}</p>
        <h1 className="font-bold">{ formatPrice(product?.price ?? 0)}</h1>
        <div className="flex space-x-2">
         <AddToCartSection product={product} />
        </div>
        </div>
        </div>

     <div className="lg:flex lg:gap-25 lg:py-30">
        <section className="my-15 lg:my-0 lg:w-2/4">
          <h1 className="font-bold md:text-3xl">FEATURES</h1>
          <ul className="list-none mt-6">
            {product?.features?.map((feature, index) => (
              <li key={index} className="text-xs md:text-base md:text-5 mt-3 text-gray-600">{feature}</li>
            ))}
          </ul>
        </section>
        <section className="mt-4 lg:w-2/5 md:flex lg:mt-0 lg:flex-col">
          <h1 className="md:w-1/2 lg:w-full font-bold md:text-3xl mb-5">IN THE BOX</h1>
          <ul className="list-none md:w-1/2 lg:w-full">
            {product?.inTheBox?.map((item, index) => (
              <li key={index} className="text-sm md:text-base mb-2.5 text-gray-600">
                <span className="text-BurntSienna-100 font-bold mr-4">{item.quantity}x</span>  {item.item}
              </li>
            ))}
          </ul>
        </section>
     </div>
        

        <section className="my-16 lg:mb-35">
  {product?.productImages && product.productImages.length >= 3 && (
    <div className="flex flex-col md:flex-row gap-4 md:h-96 lg:h-150">
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
            <div key={product.id} className="my-12">
              <RandomComponents product={product} />
            </div>
          ))}
          </div>
        </section>
      </div>
    </div>
  );

};

