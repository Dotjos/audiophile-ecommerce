"use client";
import { ProductImage } from "../Components";
import { QuantityInput } from "./QuantityInput";
import { formatPrice } from "../utils";

interface Product {
  id: string;
  name: string;
  cartName: string;
  price: number;
  details?: string;
  quantity?: number;
  features?: string[];
  inTheBox?: { item: string; quantity: number }[];
  smallImage?: string; // Optional small image for cart display
}

interface CartItemProps {
  item: Product; //  just the product, not wrapped
}

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="flex items-center mb-4 justify-between">
      <div className="rounded-lg overflow-hidden h-14 w-15">
        <ProductImage
          src={item.smallImage || "/images/placeholder.png"}
          alt={`cart-${item.name}`}
          className="h-full w-full object-fill border"
          width={40}
          height={40}
        />
      </div>
      {/* Item details */}
      <div className="text-sm items-center text-left w-3/10 flex font-semibold space-y-1 flex-col uppercase">
        <span className="text-left font-semibold w-full">{item.cartName}</span>
        <span className="text-Gray-200 font-semibold text-left w-full">
          {formatPrice(item.price)}
        </span>
      </div>
      {/* Quantity (optional) */}
      <div className="w-3/10 h-6 overflow-hidden flex items-center justify-center">
        <QuantityInput id={item.id} className="lg:h-9" />
      </div>
    </div>
  );
};

export default CartItem;
