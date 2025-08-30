"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FC, forwardRef } from 'react';
import { FieldError } from 'react-hook-form'; // Import FieldError for better prop typing

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'new';
  text: string;
  disabled?: boolean;
  className?: string;
  backGroundColor?: string;
  link?: string;
  basePath?: string;
  onClick?: () => void;
  type?: "submit" | "button"  // Add this line
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  text,
  className = '',
  link = '',
  basePath = 'category',
  onClick,
  disabled = false,
  type = "button" // Default to "button" if not provided
}) => {
  const baseClasses = 'tracking-wider text-xs font-medium transition-colors cursor-pointer inline-block text-center';
  
  const variantClasses = {
    primary: 'py-2.5 px-5 bg-BurntSienna-100 hover:bg-Peach-100 text-PureWhite-100 w-32',
    secondary: 'py-2.5 px-5 bg-PureBlack-100 hover:bg-AlmostBlack-100 text-PureWhite-100 border border-PureBlack-100',
    tertiary: 'bg-transparent text-xs text-Gray-200 hover:text-BurntSienna-100',
    new: 'py-2.5 px-5 bg-transparent hover:bg-OffWhite-100 text-PureBlack-100 border border-PureBlack-100',
  };

  const dynamicRoute = link ? 
    (basePath ? `/${basePath}/${link}` : `/${link}`) : 
    `/${basePath}`;

  // If onClick is provided without a link, render as button
  if ( type !== 'button' || onClick && !link) {
    return (
      <button 
        type= {type}
        onClick={onClick} 
        disabled={disabled}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {text}
        {variant === "tertiary" && <span className="text-BurntSienna-100 ml-1">{'>'}</span>}
      </button>
    );
  
  }

  // If link is provided, render as Link (with optional onClick)
  return (
    <Link 
      href={disabled?"#":dynamicRoute}
      onClick={onClick} 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {text}
      {variant === "tertiary" && <span className="text-BurntSienna-100 font-bold text-lg ml-1">{'>'}</span>}
    </Link>
  );
};
 
interface ToShowComponentProps {
  text: string;
  imgPath: string;
  linkPath?:string;
  basePath?:string
}

export const ToShowComponent: FC<ToShowComponentProps> = ({ text, imgPath,basePath="category",linkPath }) => {
  
  const generateSlug = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  };

  const finalLink = linkPath || generateSlug(text);

  return (
    <div className={`h-25 md:h-50 md:w-1/3 flex flex-col justify-end`}>
      <div className="bg-OffWhite-100 p-2 md:p-4 relative flex flex-col justify-end rounded-xl h-32 md:h-40 ">
        <div className="absolute -top-10 left-0 right-0 flex justify-center">
          <Image
            src={imgPath}
            alt="Go to"
            width={100}
            height={100}
            className="inline-block md:w-35 md:border rounded-xl"
          />
        </div>
        <div className="flex justify-end md:gap-y-2 flex-col">
          <span className="text-center text-xs tracking-widest md:text-base text-PureBlack-100 font-bold">{text}</span>
          <Button text="SHOP" variant="tertiary" className='md:text-base' link={finalLink} basePath={basePath} />
        </div>
      </div>
    </div>
  );
};

export function Footer(){
  return(<footer className= 'text-center px-5 pb-5 bg-PureBlack-100 text-WhiteSmoke-100'>
          <span className='block ml-auto mr-auto mb-7 md:ml-0 md:h-1 bg-BurntSienna-100 w-16 h-0.5'></span>
          <h1 className='font-black mb-7 md:text-xl md:text-left'>audiophile</h1>

          <ul className='leading-8.5 md:tracking-[.15em] md:flex md:space-x-10 md:font-semibold text-sm font-medium'>
            <li className=''>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>

          <p className='text-xs md:text-lg text-Gray-200 md:leading-8 md:text-left my-8'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
           and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
           visit our demo facility - we’re open 7 days a week.
           </p>

          <div className='text-xs md:flex items-center md:justify-between'>
          <p className='mb-5 md:mb-0 md:text-lg md:text-Gray-200'>Copyright 2021. All Rights Reserved</p>
            <ul>
              <li className='inline-block mx-2'>
                <Image
                  src={"/assets/shared/desktop/icon-facebook.svg"}
                  alt='Facebook'
                  width={15}
                  height={15}
                  className='md:h-4 md:w-4'
                />
              </li>
              <li className='inline-block mx-2'>
                <Image
                  src={"/assets/shared/desktop/icon-twitter.svg"}
                  alt='Twitter'
                  width={15}
                  height={15}
                  className='md:h-4 md:w-4'
                />
              </li>
              <li className='inline-block mx-2'>
                <Image
                  src={"/assets/shared/desktop/icon-instagram.svg"}
                  alt='Instagram'
                  width={15}
                  height={15}
                  className='md:h-4 md:w-4'
                />
              </li>
            </ul>
          </div>

        </footer>)
}

export function AudioGearSection() {
  return (
    <section className="min-h-screen text-center flex flex-col justify-around">
    <Image
    src={"/assets/shared/mobile/image-best-gear.jpg"}
    alt="Best Gear"
    width={450}
    height={450}
    className="object-cover h-100 border rounded-lg"
    />

    <div className='md:w-3/4 md:mx-auto md:flex md:flex-col md:items-center md:space-y-6'>
    <h1 className="font-bold text-xl md:w-4/5 md:text-3xl"> BRINGING YOU THE  <span className="text-BurntSienna-100">BEST</span> AUDIO GEAR</h1>            
      <p className="text-xs md:text-sm md:leading-6 leading-5 md:text-Gray-200">  Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
        We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some
         of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
      </p>  
    </div>
     
  </section>
  )

}

export function NavSection(){
  return(
    <section className="flex gap-y-13 my-15 flex-col md:flex-row md:gap-x-6 md:justify-between">
              <ToShowComponent text="HEADPHONES" imgPath="/assets/shared/desktop/image-category-thumbnail-headphones.png"/>
              <ToShowComponent text="SPEAKERS"  imgPath="/assets/shared/desktop/image-category-thumbnail-speakers.png"/>
              <ToShowComponent text="EARPHONES" imgPath="/assets/shared/desktop/image-category-thumbnail-earphones.png"/>
            </section>  
  )
}

interface ProductImageProps { 
  src: string; 
  alt: string; 
  width?: number; 
  height?: number 
  className?: string;
}

export function ProductImage({ 
  src, 
  alt, 
  width = 400, 
  height = 300,
  className = "w-full h-auto object-cover rounded-lg" 
}: ProductImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bvNU6V0+"
    />
  )}

interface RandomProductProps {
  product: {
    id: string; // Make id required for proper linking
    image: string;
    name: string;
    details: string;
    price: number;
    features?: string[];
    inTheBox?: { quantity: number; item: string }[];
    productImages?: string[];
    smallImage:string
  };
}

export function RandomComponents({product}:RandomProductProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className='h-27 overflow-hidden rounded-lg bg-OffWhite-100 w-full '>
      <ProductImage
        src={product.smallImage}
        alt={product.id}
        width={100}
        height={75}
        className='m-auto rounded-lg '
      />
      </div>

      <h1 className='font-bold uppercase text-center'>{product.id}</h1>
      <Button
        text="SEE PRODUCT"
        variant="primary"
        link={product.id}
        basePath="productDetail"
        className="w-1/3"
      />   
    </div>
  );
}

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
  className?: string; // Make className optional as it may not always be needed
  text: string;
  error?: FieldError; 
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, placeholder, className = '', text, error, ...props }, ref ) => {
    return (
      <div className='w-full mb-3'>
        <div className={`flex items-center pb-1 justify-between ${error ? 'text-red-500' : 'text-PureBlack-100'}`}>
        <label htmlFor={id} className='text-xs hover:border-BurntSienna-100 font-semibold'>{text}</label><br/>
        {error && (
          <p className="text-xs">
            {error.message}
          </p>
        )}
        </div>
        <input 
          id={id} 
          type='text' 
          ref={ref} 
          placeholder={placeholder} 
          // Apply an error class if an error exists, providing visual feedback.
          className={`
            border w-full p-2 rounded-md caret-BurntSienna-100
            focus:outline-2 focus:outline-offset-2 focus:outline-BurntSienna-100 
            text-xs active:border-BurntSienna-100 hover:border-BurntSienna-100
            ${error ? 'border-red-500' : 'border-Gray-200'}
            ${className}
          `}
          // Pass the rest of the props (like onChange, onBlur, name) to the input.
          {...props}
        />
        {/* Display the error message if it exists */}
        
      </div>
    );
  }
);

TextInput.displayName = 'TextInput'; // Required for forwardRef

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement>{
  id: string;
  label: string;
  value:string
}

// Use forwardRef to correctly handle the ref passed from react-hook-form.
export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ id, label,value, ...props }, ref) => {
    return (
        <label className="radio-box border border-Gray-200 active:border-BurntSienna-100 my-2 text-xs gap-x-4 flex items-center font-semibold rounded-md p-3" htmlFor={id}>
        <input
          id={id}
          type='radio'
          value={value}
          ref={ref}
          className="sr-only"
          {...props}
        />
        <div className="custom-radio-indicator relative w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center">
          <div className="inner-circle w-2 h-2 rounded-full transition-all duration-200"></div>
        </div>
          {label}
        </label>
    );
  }
);

RadioButton.displayName = 'RadioButton'; // Required for forwardRef