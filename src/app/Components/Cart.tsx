"use client";
import { Button } from "../Components";
import useStore from "../Zustore";
import Backdrop from "./Backdrop";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, totalItems, clearCart, totalPrice } = useStore();

  return (
    <Backdrop>
    <div className=" w-9/10 rounded-md p-5 top-4 absolute bg-PureWhite-100">
        <div className="flex justify-between mb-7">
            <h1 className="font-bold text-md">CART({totalItems})</h1>
            <button className="text-sm text-Gray-200 underline" onClick={clearCart}>Remove all</button>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <p className="text-center text-Gray-200">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <CartItem item={item} key={item.id}/>
          ))
        )}
        <div className="flex justify-between mt-4">
          <h1 className="text-sm text-Gray-200">TOTAL</h1>
          <h2 className="font-medium">$ {totalPrice}</h2>
        </div>

        {/* Checkout button */}
        <Button text="CHECKOUT" className="w-full mt-4" />
      </div>
    </Backdrop>
  );
};

export default Cart;
