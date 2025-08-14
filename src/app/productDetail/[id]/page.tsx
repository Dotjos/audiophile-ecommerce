import { Button, ProductImage } from "@/app/Components";
import { Goback } from "@/app/Components/Goback";
import { QuantityInput } from "@/app/Components/QuantityCart";
import { getProductById } from "@/app/lib/products";
import { formatPrice } from "@/app/utils";
import { notFound } from 'next/navigation';


interface PageProps {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: PageProps) {

 function generateSlug(text: string) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }               


  function generateLink(text: string, basePath: string = 'category') {
    const slug = generateSlug(text);      
  }
  

  const { id } = await params;
  const product = await getProductById((id))

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
        <QuantityInput product={product} />
      </div>
    </div>
  );

};

