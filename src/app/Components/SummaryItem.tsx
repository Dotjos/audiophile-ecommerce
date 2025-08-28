"use client";

import { ProductImage } from "../Components";

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
    <div className="flex text-xs  justify-between">
        <ProductImage alt="Checkout product image" src={product.smallImage || ""} className="w-11 h-11 rounded-md"/>
        <div className="flex flex-col mt-auto mb-auto h-auto w-3/5">
            <span className="uppercase mb-1 font-bold">{product.cartName}</span>
            <span className="text-Gray-200">${product.price}</span>
        </div>
        <div className="text-Gray-200 mt-1">x{product.quantity}</div>
    </div>
  );
};

export default SummaryItem;