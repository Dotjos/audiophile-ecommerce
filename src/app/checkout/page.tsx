"use client";
import { Goback } from "../Components/Goback";
import { Button, RadioButton, TextInput } from '../Components';
import useStore from '../Zustore';
import SummaryItem from '../Components/SummaryItem';
import { useForm,SubmitHandler } from 'react-hook-form';
import { useState } from "react";
import OrderComplete from "../Components/OrderComplete";

interface IFormInput {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: "e-Money" | "Cash on Delivery";
  eMoneyNumber?: string;
  eMoneyPin?: string;
}


const page = () => {
  const {register,handleSubmit,watch, formState:{errors,isValid}} = useForm<IFormInput>(
    {mode:"onChange",
      reValidateMode:"onChange",
      defaultValues:{
        paymentMethod:"e-Money"
      }
    })  
  const selection= watch("paymentMethod","e-Money")
  const {cartItems,totalPrice}= useStore();
  const [showOrderComplete, setShowOrderComplete] = useState(false); // Renamed for clarity


  // Validation patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[\d\s-()]+$/;
const zipPattern = /^\d{5,6}$/;
  
  const onSubmit:SubmitHandler<IFormInput> = (data) =>
    { 
      console.log(data);
      setShowOrderComplete(true);
     }

  return (
    <>
    <div className='p-4 md:py-10 md:px-8'>
      <Goback/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-PureWhite-100 rounded-lg px-4 py-5'>
        <h1 className='text-2xl md:text-4xl my-2 md:mb-10 font-bold'>CHECKOUT</h1>
        <h2 className='text-xs md:text-base md:my-4 font-semibold text-BurntSienna-100 '>BILLING DETAILS</h2>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput text='Name' id="name" className='' placeholder='Name' error={errors.name} 
        {...register("name",{required:"Name is required",
          minLength:{
            value:2,
            message:"Name must be at least two characters"
          },
          pattern:{
            value:/^[A-Za-z\s]+$/,
            message: "Name can only contain letters and spaces"
          }
        })}
        />
        <TextInput text='Email Address' id="emailAddress" className='' error={errors.email} placeholder='oladotjos@dmail.com' 
        {...register("email",
          {required: "Email is required",
           pattern:{
            value:emailPattern,
            message:"Please enter a valid email address"
           }
        })}/>
        <TextInput text='Phone number' id="phoneNumber" className=''  error={errors.phoneNumber} placeholder='+48104760553' 
        {...register("phoneNumber",
        {required: "Phone no. is required",
          pattern:{
            value:phonePattern,
            message:"Please enter a valid phone no."
          }
        })}/>
        </div>

      <h2 className='text-xs font-semibold md:text-base md:font-bold text-BurntSienna-100 mt-3 md:mt-10 md:mb-4 uppercase'>Delivery details</h2>
         <TextInput text='Your Address' id="address" className='' error={errors.address} placeholder='Address' 
         {...register("address",{required:true})}/>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <TextInput text='ZIP Code' id="zipcode" className='' error={errors.zipCode} placeholder='000000' 
         {...register("zipCode",
         {required:"ZIP code is required",
             pattern:{
              value:zipPattern,
              message:"ZIP code must be 5-6 digits"
            }
         })}/>
         <TextInput text='City' id="city" className='' placeholder='City' error={errors.city} {...register("city",{required:"City is required"})}/>
         <TextInput text='Country' id="country" className='' placeholder='Country' error={errors.country} {...register("country",{required:"Country is required"})}/>
         </div>

      
         <h2 className='text-xs font-semibold md:text-base md:font-bold text-BurntSienna-100 mt-3 md:mt-10 md:mb-4 uppercase'>Payment details</h2>  
         <div className=' flex flex-col md:flex-row md:items-start justify-between'>
            <span className='text-xs md:text-base font-semibold my-3 '>Payment Method</span>
            <div className="md:w-1/2 md:flex md:flex-col md:gap-1">
            <RadioButton id='e-Money' value="e-Money" label='e-Money' {...register("paymentMethod",{required:true})}/>
            <RadioButton id='Cash-on-Delivery' value="Cash on Delivery" label='Cash on Delivery' {...register("paymentMethod",{required:true})}/>
            </div>
            </div>
             
        
         {selection=== "e-Money" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-2">
          <TextInput text='e-Money Number' id="eMoneyNumber" error={errors.eMoneyNumber} className='' placeholder='123456789' 
          {...register("eMoneyNumber", { 
            required: selection === "e-Money" ? "e-Money number is required" : false,
            pattern: selection === "e-Money" ? {
              value: /^\d{9,12}$/,
              message: "e-Money number must be 9-12 digits"
            } : undefined
          })}
          />
          <TextInput text='e-Money PIN' id="eMoneyPin" className='' error={errors.eMoneyPin} placeholder='2222'
         {...register("eMoneyPin", { 
         required: selection === "e-Money" ? "e-Money PIN is required" : false,
         pattern: selection === "e-Money" ? {
         value: /^\d{4}$/,
         message: "PIN must be exactly 4 digits"
          } : undefined
         })}     />     
        </div>
      
      )}

      </div>

        <div className='bg-white px-4 py-6 flex flex-col gap-5 rounded-lg mt-4'>
          <h1 className="text-2xl uppercase md:font-medium">Summary</h1>

          {cartItems.map((item)=>(
            <SummaryItem product={item} key={item.id}/>)
          )}   

          <div className='flex text-xs md:text-sm justify-between my-2 items-center'>
            <span className='text-Gray-200'>TOTAL</span>
            <span className='font-bold'>${totalPrice}</span>
          </div>
          <Button 
            text= "CONTINUE & PAY"  
            className={`w-full md:py-4 mt-4 ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`} 
            type="submit"
             />   
        </div>
        </form>
    </div>

{
  showOrderComplete && (
    <OrderComplete onClose={() => setShowOrderComplete(false)} />
  ) 
}

    </>
  );
};

export default page;