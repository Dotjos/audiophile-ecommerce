"use client";
import { useState } from "react";
import { Button } from "../Components";
import useStore from "../Zustore";
import { QuantityInput } from "./QuantityInput";
import { ToastOptions } from "react-toastify";

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
  toast: (message: string, options?: ToastOptions) => void;
}

const AddToCartSection = ({ product, toast }: AddToCartSectionProps) => {
  const { addToCart, cartItems } = useStore();
  const [quantity, setQuantity] = useState(1);
  const isItemInCart = cartItems.find((item) => item.id === product.id);
  const itemQuantity = isItemInCart?.quantity || 1;

  const handleAddToCart = async () => {
    try {
      if (!product) return; // Guard clause for null product
      addToCart(product, quantity);
      setQuantity(itemQuantity); // Reset quantity after adding to cart
      toast(`Sucessfully added`, {
        position: "top-center",
        className: "",
        ariaLabel: "The product has been succesfully added to cart",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="flex w-full space-x-4 md:space-x-0">
      <div className="w-2/5 md:w-1/3">
        {!isItemInCart ? (
          // Pre-cart: controlled by local state
          <QuantityInput
            id={product.id}
            newItemQuantity={quantity}
            setQuantity={setQuantity} // let user change before adding
          />
        ) : (
          // Post-cart: controlled by Zustand
          <QuantityInput id={product.id} />
        )}
      </div>

      {!isItemInCart ? (
        <Button
          text="ADD TO CART"
          onClick={handleAddToCart}
          className="w-3/4 md:h-11 md:w-33"
        />
      ) : (
        <h3 className="text-xs flex items-center italic lg:text-lg text-BurntSienna-100">
          Now in cart
        </h3>
      )}
    </div>
  );
};

export default AddToCartSection;
