"use client";

import { ProductImage } from "../Components";
import { formatPrice } from "../utils";

interface SummaryItemProps {
    product:{
          id: string;
          name: string;
          cartName:string;
          price: number;
          smallImage?: string; //
          quantity: number;
    }
}

const SummaryItem = ({product}:SummaryItemProps) => {
  return (
    <div className="flex lg:gap-x-4 text-xs md:text-sm gap-x-7">
        <ProductImage alt="Checkout product image" src={product.smallImage || ""} wrapperStyle="w-15 h-13" className="" />
        <div className="flex flex-col mt-auto mb-auto h-auto w-3/5 md:w-4/5 ">
            <span className="uppercase font-bold">{product.cartName}</span>
            <span className="text-Gray-200">{formatPrice(product.price)}</span>
        </div>
        <div className="text-Gray-200 mt-1">x{product.quantity}</div>
    </div>
  );
};

export default SummaryItem;