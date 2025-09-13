"use client";
import { toast } from "react-toastify";
import useStore from "../Zustore";

interface QuantityInputProps {
  setQuantity?: (value: number) => void; // Optional setter function
  newItemQuantity?: number;
  id: string;
  className?: string;
}

export function QuantityInput({
  id,
  className,
  newItemQuantity,
  setQuantity,
}: QuantityInputProps) {
  const {
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    cartItems,
    removeFromCart,
  } = useStore();

  const isItemInCart = cartItems.find((item) => item.id === id);

  const currentQuantity = isItemInCart
    ? isItemInCart.quantity
    : newItemQuantity ?? 1;

  // Handle manual input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (Number.isNaN(value)) return; // ignore junk input
    if (value < 1) {
      if (isItemInCart) {
        removeFromCart(id); // instead of forcing it to 1
        toast.warning(
          `${isItemInCart.cartName} has been removed from the cart`,
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
          }
        );
      } else if (setQuantity) {
        setQuantity(1);
      }
    } else if (value > 999) {
      // Cap at 999
      if (isItemInCart) {
        updateQuantity(id, 999);
      } else if (setQuantity) {
        setQuantity(999);
      }
    } else {
      // Valid input
      if (isItemInCart) {
        updateQuantity(id, value);
      } else if (setQuantity) {
        setQuantity(value);
      }
    }
  };

  // Handle decrease button
  const handleDecrease = () => {
    if (isItemInCart) {
      decreaseQuantity(id);
    } else if (setQuantity) {
      setQuantity(Math.max(1, currentQuantity - 1));
    }
  };

  // Handle increase button
  const handleIncrease = () => {
    if (isItemInCart) {
      // Update store directly
      increaseQuantity(id);
    } else if (setQuantity) {
      // Use prop function if provided
      setQuantity(Math.min(999, currentQuantity + 1));
    }
  };

  return (
    <div
      className={`flex w-full md:w-4/5 md:h-11 h-full items-center justify-around bg-gray-100 ${className}`}
    >
      <button
        onClick={handleDecrease}
        className="px-2 py-1.5 hover:text-BurntSienna-100 text-sm text-gray-600 font-bold"
      >
        −
      </button>

      <input
        type="number"
        min="1"
        max="999"
        value={currentQuantity}
        onChange={handleInputChange}
        className="w-5 bg-gray-100 text-center font-normal text-sm border-0 outline-none 
                   [appearance:textfield] 
                   [&::-webkit-outer-spin-button]:appearance-none 
                   [&::-webkit-inner-spin-button]:appearance-none"
      />

      <button
        onClick={handleIncrease}
        className="px-2 py-1 hover:text-BurntSienna-100 text-sm text-gray-600 font-bold"
      >
        +
      </button>
    </div>
  );
}
