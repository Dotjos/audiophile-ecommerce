"use client";
import { Button } from '../Components';
import { saveToDatabase } from '../actions/cart-actions';
import useStore from '../Zustore';
import { useState } from 'react';

interface QuantityInputProps {
  product: {
    id: string;
    name: string;
    price: number;
    image?: string;
  };
}

export function QuantityInput({ product }: QuantityInputProps) {
  const[quantity,setQuantity] =  useState(1)
  const {addToCart}=  useStore()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    if (value >= 1 && value <= 999) {
      setQuantity(value);
    }
  };

  const handleAddToCart = async () => {
    try {
       addToCart(product, quantity);
       setQuantity(1); // Reset quantity after adding to cart
       const result = await saveToDatabase(product, quantity);
      if (result.success) {
        console.log(result.message);
        // Optional: Show success message, reset quantity, etc.
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    } 
  };

  return (
    <div className="flex space-x-2 items-center">
      {/* Quantity Input */}
      <div className="flex items-center bg-gray-100">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
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
          onClick={() => setQuantity(quantity + 1)}
          className="px-2 py-1 hover:bg-gray-200 text-sm text-gray-600 font-bold"
        >
          +
        </button>
      </div>
   <Button text="ADD TO CART" className='w-2/5' variant="primary" onClick={handleAddToCart}/>
      
    </div>
  );
}