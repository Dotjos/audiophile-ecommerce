"use client";

import useStore from "../Zustore";

interface QuantityInputProps {
  setQuantity?: (value: number) => void; // Optional setter function
  quantity?: number;
  id:string;
}


export function QuantityInput({setQuantity,quantity,id}: QuantityInputProps) {
  const {updateQuantity,increaseQuantity,decreaseQuantity,cartItems} = useStore();

  const getQuantityFromStore = (id:string) => {
    const item = cartItems.find(item => item.id === id);
    return item ? item.quantity : 1; // or whatever default you want
  }

  const currentQuantity = quantity !== undefined ? quantity : getQuantityFromStore(id);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    if (value >= 1 && value <= 999) {
      if (setQuantity) {
        setQuantity(value);
      } else {
        updateQuantity(id, value);
      }        
    }
  };

   // Handle decrease button
   const handleDecrease = () => {
    if (setQuantity) {
      // Use prop function if provided
      const newValue = Math.max(1, currentQuantity - 1);
      setQuantity(newValue);
    } else {
      // Update store directly
      decreaseQuantity(id);
    }
  };

  // Handle increase button
  const handleIncrease = () => {
    if (setQuantity) {
      // Use prop function if provided
      const newValue = Math.min(999, currentQuantity + 1);
      setQuantity(newValue);
    } else {
      // Update store directly
      increaseQuantity(id);
    }
  };

  return (
    <div className="flex w-full h-full items-center justify-around bg-gray-100">
      <button
        onClick={handleDecrease}
        className="px-2 py-1.5 hover:bg-gray-200 text-sm text-gray-600 font-bold"
      >
        −
      </button>

      <input
        type="number"
        min="1"
        max="999"
        value={quantity}
        onChange={handleInputChange}
        className="w-5 bg-gray-100 text-center font-normal text-sm border-0 outline-none 
                   [appearance:textfield] 
                   [&::-webkit-outer-spin-button]:appearance-none 
                   [&::-webkit-inner-spin-button]:appearance-none"
      />

      <button
        onClick={handleIncrease}
        className="px-2 py-1 hover:bg-gray-200 text-sm text-gray-600 font-bold"
      >
        +
      </button>
    </div>
  );
}

 