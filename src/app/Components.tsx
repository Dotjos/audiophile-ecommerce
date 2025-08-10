"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'|'new';
  text: string;
  className?: string;
  backGroundColor?: string;
  link?: string;

  basePath?: string;

}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  text,
  className = '',
  link='',
  basePath='category'
}) => {
  const baseClasses = 'py-2.5 px-5 tracking-wider text-xs font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-BurntSienna-100 hover:bg-Peach-100 text-PureWhite-100 w-32',
    secondary: 'bg-PureBlack-100 hover:bg-AlmostBlack-100 text-PureWhite-100 border border-PureBlack-100',
    tertiary: 'bg-transparent text-[9px] text-AlmostBlack-100 hover:text-BurntSienna-100',
    new: 'bg-transparent hover:bg-OffWhite-100 text-PureBlack-100 border border-PureBlack-100',
  };

  // const dynamicRoute=link?`${basePath}/${link}`:basePath
  const dynamicRoute = link ? 
    (basePath ? `/${basePath}/${link}` : `/${link}`) : 
    `/${basePath}`;

  
  return (
    <Link href={dynamicRoute} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {text}
      {variant==="tertiary" && <span className="text-BurntSienna-100 ml-1">{'>'}</span>}
    </Link>
  );
};
 
interface ToShowComponentProps {
  text: string;
  imgPath: string;
  height?: string; // e.g., "h-40", "h-48", "min-h-[200px]", etc.
  linkPath?:string;
  basePath?:string
}

export const ToShowComponent: FC<ToShowComponentProps> = ({ text, imgPath, height = "h-40",basePath="category",linkPath }) => {
  
  const generateSlug = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  };

  const finalLink = linkPath || generateSlug(text);


  return (
    <div className={`${height} flex flex-col justify-end`}>
      <div className="bg-OffWhite-100 p-2 relative flex flex-col justify-end rounded-xl h-32">
        <div className="absolute -top-5 left-0 right-0 flex justify-center">
          <Image
            src={imgPath}
            alt="Go to"
            width={75}
            height={75}
            className="inline-block rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center flex-col">
          <span className="text-center text-xs text-PureBlack-100 font-medium">{text}</span>
          <Button text="SHOW" variant="tertiary" link={finalLink} basePath={basePath} />
        </div>
      </div>
    </div>
  );
};

export function Footer(){
  return(<footer className= 'text-center px-5 pb-5 bg-PureBlack-100 text-WhiteSmoke-100'>
          <span className='block ml-auto mr-auto mb-7 bg-BurntSienna-100 w-16 h-0.5'></span>
          <h1 className='font-black mb-7'>audiophile</h1>

          <ul className='leading-8.5 text-sm font-medium'>
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>

          <p className='text-xs my-8'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
           and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
           visit our demo facility - we’re open 7 days a week.
           </p>

          <div className='text-xs'>
          <p className='mb-5'>Copyright 2021. All Rights Reserved</p>
            <ul>
              <li className='inline-block mx-2'>
                <Image
                  src={"/assets/shared/desktop/icon-facebook.svg"}
                  alt='Facebook'
                  width={15}
                  height={15}
                />
              </li>
              <li className='inline-block mx-2'>
                <Image
                  src={"/assets/shared/desktop/icon-twitter.svg"}
                  alt='Twitter'
                  width={15}
                  height={15}
                />
              </li>
              <li className='inline-block mx-2'>
                <Image
                  src={"/assets/shared/desktop/icon-instagram.svg"}
                  alt='Instagram'
                  width={15}
                  height={15}
                />
              </li>
            </ul>
          </div>

        </footer>)
}
