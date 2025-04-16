"use client"
import { useState } from "react";
import { Button, Footer, Navbar, ToProduct } from "./Components";
import Image from 'next/image'

export default function Page() {
  //state to manage menuTaggle
  const [isOpen,setIsOpen] = useState<boolean>(false)
      const toggleMenu=()=>{
       setIsOpen(prev=>!prev)
      }

    return (
        <div className="min-h-screen relative flex flex-col bg-WhiteSmoke-100" >
          <Navbar toggleMenu={toggleMenu}/>
<section className="relative">
  {isOpen &&
  <div className="min-h-screen z-50 px-4 py-6 absolute">
    <div className="bg-WhiteSmoke-100 h-3/4">
    <ToProduct/>
    </div>
  </div> }
  
  <div className="relative h-[75vh] flex items-center justify-center w-full text-PureWhite-100"> 
    {/* Background Image */}
    <Image
      src="/assets/home/mobile/image-header.jpg"
      alt="Speaker"
      fill
      priority
      className="object-cover object-center absolute z-0"
    />

    {/* Content */}
    <div className="z-10 text-center flex flex-col items-center justify-center">
      <h2 className="font-thin tracking-[0.5em] text-xs uppercase mb-4">New product</h2>
      
      <h1 className="text-2xl font-bold tracking-wide mb-4">
        XX99 MARK II <br /> HEADPHONES
      </h1>
      
      <p className="text-[11px] w-4/5 leading-5 font-extralight mb-6">
        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
      </p>

      <Button text="SEE PRODUCT" className="text-sm" />
    </div>

   </div>
</section>

          <div className="m-4">
            <section className="min-h-screen my-10 flex flex-col">
            <ToProduct/>
            </section>   

            <section className="relative bg-BurntSienna-100 rounded-lg overflow-hidden max-w-sm mx-auto py-16 px-8">

              <div className="flex flex-col items-center justify-between relative z-10 h-full">
    {/* Background pattern with speaker image positioned in the center */}
    <div className="relative flex h-1/2 justify-center items-center mb-10">
      <Image
        src="/assets/home/desktop/pattern-circles.svg"
        alt="pattern-circles"
       fill
        className="absolute z-0 border"
      />
      
      {/* Speaker image centered within the circles */}
      <Image
        src="/assets/home/mobile/image-speaker-zx9.png"
        alt="ZX9 Speaker"
        width={160}
        height={200}
        className="relative z-10 object-contain"
      />
    </div>
    
    {/* Text content */}
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold mb-6">ZX9<br />SPEAKER</h2>
      <p className="text-sm font-light mb-8 max-w-[250px] mx-auto">
        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
      </p>
    </div>
    
    {/* Button */}
    <Button text="SEE PRODUCT" variant="secondary" />
              </div>
              
            </section>

            <section className=" flex flex-col space-y-4 my-5">
               <div className="h-64 relative w-full">
                <Image
                src={"/assets/home/mobile/image-speaker-zx7.jpg"}
                alt="ZX7 Speaker"
                fill
                className="object-cover rounded-lg"       
                />
                <div className="z-10 inset-0 flex flex-col px-5 space-y-4 justify-center absolute">
                <h1 className="text-xl tracking-widest">ZX7 SPEAKER</h1>
                <Button text="SEE PRODUCT" variant="new" className="w-3/5"/>
                </div>
               </div>
 
               <div className="flex flex-col space-y-3">
                <div className="h-32 relative">
                  <Image src={"/assets/home/mobile/image-earphones-yx1.jpg"}
                  alt="earphones"
                  fill
                  className="object-cover rounded-lg"  
                  />
                </div>


                <div className="h-32 bg-OffWhite-100 flex flex-col space-y-4 justify-center px-6 rounded-lg">
                <h1 className="text-xl tracking-widest">YX1 EARPHONES</h1>
                <Button text="SEE PRODUCT" variant="new" className="w-3/5 text-sm"/>
                </div>
               </div>
            </section>

          <section className="min-h-screen text-center flex flex-col justify-around">
            <Image
            src={"/assets/shared/mobile/image-best-gear.jpg"}
            alt="Best Gear"
            width={450}
            height={450}
            className="object-cover rounded-lg"
            />
 
        <h1 className="font-bold text-xl"> BRINGING YOU THE <br/> <span className="text-BurntSienna-100">BEST</span> AUDIO GEAR</h1>            
              <p className="text-xs leading-5">  Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
                We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some
                 of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
              </p>  
          </section>
          </div> 

          <Footer/>  
        </div>   
    )}
