import { ProductImage } from "@/app/Components";
import { Goback } from "@/app/Components/Goback";
import { getProductById } from "@/app/lib/products";
import { notFound } from 'next/navigation';


interface PageProps {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: PageProps) {

  const { id } = await params;
  const product = await getProductById((id))

  return (
    <div className="px-4 py-2 text-Gray-200">
      <Goback />
      <div>
        <ProductImage src={product?.image || ''} alt={product?.name || 'Product Image'} />
        <h1>{product?.name}</h1>
        <p>{product?.details}</p>
        <h1>{product?.price}</h1>
        <div></div>
      </div>
    </div>
  );

};

