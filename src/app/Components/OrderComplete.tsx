"use client"
import Image from "next/image";
import { Button } from "../Components";
import useStore from "../Zustore";
import SummaryItem from "./SummaryItem";
import { formatPrice } from "../utils";


interface OrderCompleteProps {
    onClose: () => void;
  }

const OrderComplete = ({onClose}:OrderCompleteProps) => {
    const {cartItems,totalPrice,clearCart} = useStore()

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Check if the clicked element is the background container itself
        if (e.target === e.currentTarget) {
          onClose();
        }
      };

      function handleButtonClick() {
        clearCart();
      }
    
  return (
       <div onClick={handleBackgroundClick} className=" fixed flex w-full items-center justify-center z-50 bg-PureBlack-100/40 top-0 min-h-screen">
        <div className="bg-PureWhite-100 w-9/10 md:w-3/4 md:p-10 flex flex-col gap-3 md:gap-7 rounded-md p-5">
        <Image src="/assets/checkout/icon-order-confirmation.svg" alt="order-complete" width={55} height={55} className="mr-auto"/>     
        <h1 className="font-bold md:text-3xl text-xl">THANK YOU <br/> FOR YOUR ORDER</h1>
        <p className="text-xs md:text-sm text-Gray-200">You will receive an email confirmation shortly.</p>
        <div className="rounded-md md:flex md:w-full overflow-hidden">
            <div className=" bg-OffWhite-100 flex flex-col p-4 justify-center md:w-3/5">
                <SummaryItem product={cartItems[0]}/>
                {cartItems.length > 1 && (
                    <div className="border-t-1 font-bold text-center md:text-sm border-Gray-200 my-2 pt-2 md:pt-4 text-xs text-Gray-200">
                        and {cartItems.length - 1} other item(s)
                    </div>
                )}
            </div>
            <div className="bg-PureBlack-100 text-xs md:text-sm md:w-2/5 md:pl-9 flex flex-col p-4 gap-2 md:gap-4 md:py-10">
               <span className="text-Gray-200">GRAND TOTAL</span>
                <span className="text-PureWhite-100 font-bold">{formatPrice(totalPrice)}</span> 
            </div>
        </div>
        <Button text="BACK TO HOME" link="/" onClick={handleButtonClick} className="w-full md:py-4 font-bold"/>
        </div>
        </div>
  );
};

export default OrderComplete;