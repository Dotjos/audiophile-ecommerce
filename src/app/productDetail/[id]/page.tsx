import { Goback } from "@/app/Components/Goback";
import { getProductById } from "@/app/lib/products";
import { notFound } from 'next/navigation';


interface PageProps {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: PageProps) {

  const { id } = await params;
  const product = await getProductById((await params).id);

  return (
    <div className="px-4 py-2 text-Gray-200">
      <Goback />
      <div>page</div>
    </div>
  );

};

