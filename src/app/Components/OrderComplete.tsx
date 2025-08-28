"useClient"
import Image from "next/image";
import { Button } from "../Components";
import useStore from "../Zustore";
import SummaryItem from "./SummaryItem";


interface OrderCompleteProps {
    onClose: () => void;
  }

const OrderComplete = ({onClose}:OrderCompleteProps) => {
    const {cartItems,totalPrice} = useStore()

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Check if the clicked element is the background container itself
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
    
  return (
       <div onClick={handleBackgroundClick} className=" fixed flex w-full items-center justify-center z-50 bg-PureBlack-100/40 top-0 min-h-screen">
        <div className="bg-PureWhite-100 w-9/10 flex flex-col gap-3 rounded-md p-5">
        <Image src="/assets/checkout/icon-order-confirmation.svg" alt="order-complete" width={55} height={55} className="mr-auto"/>     
        <h1 className="font-bold text-xl">THANK YOU <br/> FOR YOUR ORDER</h1>
        <p className="text-xs text-Gray-200">You will receive an email confirmation shortly.</p>
        <div className="rounded-md overflow-hidden ">
            <div className=" bg-OffWhite-100 p-4">
                <SummaryItem product={cartItems[0]}/>
                {cartItems.length > 1 && (
                    <div className="border-t-1 font-bold text-center border-Gray-200 my-2 pt-2 text-xs text-Gray-200">
                        and {cartItems.length - 1} other item(s)
                    </div>
                )}
            </div>
            <div className="bg-PureBlack-100 text-xs flex flex-col p-4 gap-2">
               <span className="text-Gray-200">GRAND TOTAL</span>
                <span className="text-PureWhite-100 font-bold">${totalPrice}</span> 
            </div>
        </div>
        <Button text="BACK TO HOME" className="w-full font-bold"/>
        </div>
        </div>
  );
};

export default OrderComplete;