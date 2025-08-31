"use client";
import {  useState } from "react";
import { saveToDatabase } from "../actions/cart-actions";
import { Button } from "../Components";
import useStore from "../Zustore";
import { QuantityInput } from "./QuantityInput";

interface Product {
  id: string;
  cartName: string; // Changed from
  name: string;
  price: number;
  image: string;
  details?: string;
  features?: string[];
  inTheBox?: { item: string; quantity: number }[];
  smallImage?: string; // Optional small image for cart display
}

interface AddToCartSectionProps {
  product: Product; //  just the product, not wrapped
}

const AddToCartSection = ({product}:AddToCartSectionProps) => {
    const {addToCart}=useStore();
    const [quantity,setQuantity]= useState(1)

     const handleAddToCart = async () => {
        try {
          if (!product) return; // Guard clause for null product
          const result = await saveToDatabase(product, quantity);
          addToCart(product, quantity);
          setQuantity(1); // Reset quantity after adding to cart
          if (result.success) {
            console.log(result.message);
            // Optional: Show success message, reset quantity, etc.
          }
        } catch (error) {
          console.error("Error adding to cart:", error);
        }
      };

  return (
    <div className="flex w-full space-x-4 md:space-x-0">
      <div className="w-2/5 md:w-1/3">
        <QuantityInput id={product.id} quantity={quantity} setQuantity={setQuantity}/>
      </div>
        <Button text="ADD TO CART" onClick={handleAddToCart} className="w-3/4 md:h-11 md:w-33"/>
    </div>
  );
};

export default AddToCartSection;