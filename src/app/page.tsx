"use client"
import { Button, NavSection } from "./Components";
import Image from 'next/image'

export default function Page() {
    return (
    <>
  <section className="min-h-screen relative items-center justify-center w-full text-PureWhite-100">
  
   <div className="w-full h-full z-20 lg:px-30 absolute flex items-center justify-center lg:justify-start">
   {/* Content */}
  <div className="text-center lg:ml-0 lg:items-start lg:gap-2 lg:text-left lg:w-fit w-full flex flex-col items-center md:gap-y-4 justify-center">
    <h2 className="font-thin tracking-[0.5em] md:tracking-[1em] text-xs md:text-3xl lg:text-sm lg:tracking-[0.5em] uppercase mb-4">
      New product
    </h2>
    
    <h1 className="text-2xl md:text-6xl lg:text-5xl font-bold tracking-wide mb-4">
      XX99 MARK II <br /> HEADPHONES
    </h1>
    
    <p className="text-[11px] md:text-sm lg:text-left lg:w-3/5 lg:text-xs md:text-center w-4/5 leading-5 font-extralight mb-6">
      Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
    </p>
    
    <Button 
      text="SEE PRODUCT" 
      className="text-sm md:text-base md:w-2/5 lg:w-37 lg:text-sm" 
      link="headphones" 
      />
  </div>
    </div>

  {/* Background Image */}
<picture className="w-full z-10">
  <source 
    media="(min-width: 1024px)" 
    srcSet="/assets/home/desktop/image-hero.jpg"
    sizes="10vw"
  />
  <source 
    media="(min-width: 640px)" 
    srcSet="/assets/home/tablet/image-header.jpg"
    sizes="100vw"
  />
  <img 
    src="/assets/home/mobile/image-header.jpg"
    alt="Speaker" 
    className="object-cover w-full h-full"
  />
</picture>
</section>

        <div className="min-h-screen relative flex flex-col bg-WhiteSmoke-100" >     
          <div className="m-4 md:p-7">
              <NavSection/>
<section className="relative bg-BurntSienna-100 md:w-full rounded-lg overflow-hidden  mx-auto py-16 px-8">

 <div className="flex flex-col md:gap-11 items-center justify-between relative z-10 h-full">
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
        width={100}
        height={100}
        className="relative z-10 md:w-50  object-contain"
      />
    </div>
    
    {/* Text content */ }
    <div className="text-center md:w-1/2 text-white">
      <h2 className="text-4xl font-bold mb-6 md:text-6xl">ZX9<br />SPEAKER</h2>
      <p className="text-xs font-light mb-8 md:text-center  mx-auto md:text-base md:w-4/5 md:leading-7">
        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
      </p>
    </div>
    
    {/* Button */}
    <Button text="SEE PRODUCT" className="md:font-bold md:py-4 md:px-10 tracking-[1em]" variant="secondary" />
              </div>          
            </section>

            <section className=" flex flex-col space-y-4 my-5 h-64 md:h-85 relative w-full ">
                <Image
                src={"/assets/home/tablet/image-speaker-zx7.jpg"}
                alt="ZX7 Speaker"
                fill
                className="object-cover rounded-lg"       
                />
                <div className="z-10 inset-0 flex flex-col px-5 space-y-4 justify-center absolute">
                <h1 className="text-xl md:font-bold md:text-2xl tracking-widest">ZX7 SPEAKER</h1>
                <Button text="SEE PRODUCT" variant="new" className="w-3/5"/>
                </div>
            </section>

            <section>
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
          </div> 
        </div>   
        </>
    )}
