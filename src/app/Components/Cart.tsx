"use client";

import { Button } from "../Components";
import Backdrop from "./Backdrop";

const Cart = () => {
  return (
    <Backdrop>
    <div className="h-3/5 absolute bg-PureWhite-100">
        <div>
            <h1>CART(3)</h1>
            <button>Remove all</button>
        </div>

        <div>
            <h1>TOTAL</h1>
            <h2 className="text-lg font-bold">$5,000</h2>
        </div>

        <Button text="CHECKOUT"/>
    </div>
    </Backdrop>
  );
};

export default Cart;