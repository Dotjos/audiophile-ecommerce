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
       <div onClick={handleBackgroundClick} className="fixed flex w-full items-center justify-center z-50 bg-PureBlack-100/40 top-0 min-h-screen">
        <div className="bg-PureWhite-100 lg:w-1/3 w-9/10 md:w-3/4 md:p-10 flex flex-col gap-3 md:gap-6 lg:gap-7 rounded-md p-5">
        <Image src="/assets/checkout/icon-order-confirmation.svg" alt="order-complete" width={55} height={55} className="mr-auto"/>     
        <h1 className="font-bold md:text-3xl lg:text-2xl text-xl">THANK YOU <br/> FOR YOUR ORDER</h1>
        <p className="text-xs md:text-sm text-Gray-200">You will receive an email confirmation shortly.</p>
        <div className="rounded-md md:flex md:w-full overflow-hidden">
            <div className=" bg-OffWhite-100 flex flex-col px-4 py-4 justify-center md:w-3/5">
                <SummaryItem product={cartItems[0]} gap="gap-x-3" prodImgSize="w-9 h-10"/>
                {cartItems.length > 1 && (
                    <div className="border-t-1 font-bold lg:font-semibold lg:text-xs text-center md:text-sm border-Gray-200 mt-2 pt-2 md:pt-4 lg:pt-2 text-xs text-Gray-200">
                        and {cartItems.length - 1} other item(s)
                    </div>
                )}
            </div>
            <div className="bg-PureBlack-100 text-xs md:text-sm lg:text-xs lg:pl-3 md:w-2/5 md:pl-9 flex items-start justify-center flex-col p-4 lg:py-4 gap-2 md:gap-4 lg:gap-2 md:py-10">
               <span className="text-Gray-200">GRAND TOTAL</span>
                <span className="text-PureWhite-100 font-bold">{formatPrice(totalPrice)}</span> 
            </div>
        </div>
        <Button text="BACK TO HOME" link="/" onClick={handleButtonClick} className="w-full mt-1 md:py-4 lg:py-2 font-bold"/>
        </div>
        </div>
  );
};

export default OrderComplete;