"use client";
import { Button } from "../Components";
import { formatPrice } from "../utils";
import useStore from "../Zustore";
import Backdrop from "./Backdrop";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, totalItems,cartIsOpen, clearCart, totalPrice } = useStore();
  // handleClick
  
  if(!cartIsOpen) return null;

  return (
    <Backdrop className="w-full flex justify-center md:justify-end md:pr-10 pt-16 md:pt-24">
    <div className=" w-9/10 md:w-1/2  rounded-md p-5 top-4 absolute bg-PureWhite-100">
        <div className="flex justify-between mb-7">
            <h1 className="font-bold md:text-base text-md">CART({totalItems})</h1>
            <button className="text-sm md:text-base text-Gray-200 underline" onClick={clearCart}>Remove all</button>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <p className="text-center md:text-base text-Gray-200">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <CartItem item={item} key={item.id}/>
          ))
        )}
        <div className="flex justify-between mt-4 md:my-7">
          <h1 className="text-sm md:text-base text-Gray-200">TOTAL</h1>
          <h2 className="font-bold md:text-base">{formatPrice(totalPrice)}</h2>
        </div>
       
        {/* Checkout button */}
        <Button text="CHECKOUT" className="w-full md:text-base mt-4 " link="checkout" basePath="" disabled={totalItems===0}/>
      </div>
    </Backdrop>
  );
};

export default Cart;
