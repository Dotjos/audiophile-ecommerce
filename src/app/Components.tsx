"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, forwardRef } from "react";
import { FieldError } from "react-hook-form"; // Import FieldError for better prop typing

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "new";
  text: string;
  disabled?: boolean;
  className?: string;
  backGroundColor?: string;
  link?: string;
  basePath?: string;
  onClick?: () => void;
  type?: "submit" | "button"; // Add this line
}

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  text,
  className = "",
  link = "",
  basePath = "category",
  onClick,
  disabled = false,
  type = "button", // Default to "button" if not provided
}) => {
  const baseClasses =
    " py-2.5 px-5 tracking-wider text-xs font-medium transition-colors cursor-pointer inline-block text-center";

  const variantClasses = {
    primary: "bg-BurntSienna-100 hover:bg-Peach-100 text-PureWhite-100 w-32",
    secondary: "bg-PureBlack-100 hover:bg-Gray-300 text-PureWhite-100",
    tertiary: "bg-transparent text-xs text-Gray-200 hover:text-BurntSienna-100",
    new: "bg-transparent hover:bg-PureBlack-100 hover:text-PureWhite-100 text-PureBlack-100 border border-PureBlack-100",
  };

  const dynamicRoute = link
    ? basePath
      ? `/${basePath}/${link}`
      : `/${link}`
    : `/${basePath}`;

  // If onClick is provided without a link, render as button
  if (type !== "button" || (onClick && !link)) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {text}
        {variant === "tertiary" && (
          <span className="text-BurntSienna-100 ml-1">{">"}</span>
        )}
      </button>
    );
  }

  // If link is provided, render as Link (with optional onClick)
  return (
    <Link
      href={disabled ? "#" : dynamicRoute}
      onClick={onClick}
      className={`${baseClasses}  ${variantClasses[variant]} ${className}`}
    >
      {text}
      {variant === "tertiary" && (
        <span className="text-BurntSienna-100 font-semibold text-lg ml-1">
          {">"}
        </span>
      )}
    </Link>
  );
};

interface NavLinkProps {
  className?: string;
}

export const NavLink: FC<NavLinkProps> = ({ className }) => {
  const navigationItems = [
    { href: "/", label: "HOME" },
    { href: "/category/HEADPHONES", label: "HEADPHONES" },
    { href: "/category/SPEAKERS", label: "SPEAKERS" },
    { href: "/category/EARPHONES", label: "EARPHONES" },
  ];

  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul
        className={`leading-8.5 md:tracking-[.15em] text-xs md:space-x-10 md:font-semibold flex-col font-medium ${className}`}
      >
        {navigationItems.map((item) => (
          <li
            key={item.href}
            className="hover:text-BurntSienna-100 transition-colors duration-200"
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface ToShowComponentProps {
  text: string;
  imgPath: string;
  linkPath?: string;
  basePath?: string;
  className?: string;
}

export const ToShowComponent: FC<ToShowComponentProps> = ({
  text,
  imgPath,
  basePath = "category",
  linkPath,
  className,
}) => {
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  const finalLink = linkPath || generateSlug(text);

  return (
    <div
      className={`h-25 md:h-50 ${className} w-full relative flex flex-col justify-end`}
    >
      <div className="bg-OffWhite-100 p-2 md:p-4  flex flex-col justify-end rounded-xl h-32 md:h-40 lg:h-50">
        <div className="absolute mb-9 lg:mb-13 left-0 right-0 flex justify-center lg:h-auto items-center">
          <Image
            src={imgPath}
            alt="Go to"
            width={100}
            height={100}
            className="inline-block md:w-35 lg:w-50 md:border rounded-xl"
          />
        </div>
        <div className="flex justify-end md:gap-y-2 flex-col">
          <span className="text-center text-xs tracking-widest md:text-base lg:text-sm text-PureBlack-100 font-bold">
            {text}
          </span>
          <Button
            text="SHOP"
            variant="tertiary"
            className="md:text-base lg:text-sm"
            link={finalLink}
            basePath={basePath}
          />
        </div>
      </div>
    </div>
  );
};

export function Footer() {
  const socialLinks = [
    {
      href: "https://facebook.com",
      src: "/assets/shared/desktop/icon-facebook.svg",
      alt: "Facebook",
    },
    {
      href: "https://twitter.com",
      src: "/assets/shared/desktop/icon-twitter.svg",
      alt: "Twitter",
    },
    {
      href: "https://instagram.com",
      src: "/assets/shared/desktop/icon-instagram.svg",
      alt: "Instagram",
    },
  ];

  return (
    <footer className="text-center px-5 pb-5 md:pb-8 md:px-10 lg:px-30 bg-PureBlack-100 text-WhiteSmoke-100">
      <span className="block ml-auto mr-auto mb-7 md:ml-0 md:h-1 bg-BurntSienna-100 w-16 md:w-20 h-0.5"></span>

      <div className="lg:flex lg:mt-15 lg:items-center lg:justify-between">
        <h1 className="font-black mb-7 lg:mb-0 md:text-xl lg:text-2xl md:text-left">
          audiophile
        </h1>
        <NavLink className="md:flex md:flex-row lg:text-base" />
      </div>

      <div className="lg:flex lg:flex-col lg:justify-between lg:mb-5">
        <div className="lg:w-1/2">
          <p className="text-xs md:text-sm  text-Gray-200 md:leading-6 md:text-left lg:text-base lg:mb-0 my-8">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&aposre a small team of music lovers and sound specialists who are
            devoted to helping you get the most out of personal audio. Come and
            visit our demo facility - we&aposre open 7 days a week.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:justify-between lg:h-30">
          <p className="mb-5 md:mb-0 text-xs text-Gray-200 md:text-sm lg:text-base lg:flex lg:flex-col lg:text-left lg:justify-end md:text-Gray-200">
            Copyright 2021. All Rights Reserved
          </p>

          <ul className="flex items-center justify-center lg:items-start space-x-4 text-xs lg:text-base">
            {socialLinks.map((social) => (
              <li key={social.alt}>
                <Link
                  href={social.href}
                  className="group block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-PureWhite-100 group-hover:bg-BurntSienna-100 transition-colors duration-200"
                    style={{
                      maskImage: `url(${social.src})`,
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      maskPosition: "center",
                      WebkitMaskImage: `url(${social.src})`,
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                      WebkitMaskPosition: "center",
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function AudioGearSection() {
  return (
    <section className="h-auto lg:mt-10 lg:mb-33 mb-13 text-center md:items-center md:gap-12 lg:flex-row lg:gap-25 flex flex-col gap-6 justify-around">
      <picture className="w-full h-auto  rounded-lg lg:order-2 lg:w-1/2">
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/shared/desktop/image-best-gear.jpg"
          sizes="100vw"
        />
        <source
          media="(min-width: 640px)"
          srcSet="/assets/shared/tablet/image-best-gear.jpg"
          sizes="100vw"
        />
        <img
          src="/assets/shared/mobile/image-best-gear.jpg"
          alt="Best Gear"
          className="object-cover w-full h-full rounded-lg"
          sizes="100vw"
        />
      </picture>

      <div className="md:w-3/4 flex flex-col lg:w-4/9 lg:order-1 lg:gap-7 lg:text-left items-center lg:items-start w-full gap-6 md:gap-5">
        <h1 className="font-bold w-3/4 text-xl md:w-4/5 lg:text-3xl lg:w-full md:text-3xl">
          {" "}
          BRINGING YOU THE <span className="text-BurntSienna-100">
            BEST
          </span>{" "}
          AUDIO GEAR
        </h1>
        <p className="text-xs lg:text-base  md:text-sm md:leading-6 leading-5 lg:text-left text-center text-Gray-200">
          {" "}
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}

interface NavSection {
  className?: string;
}

export function NavSection({ className }: NavSection) {
  return (
    <section
      className={`flex gap-y-13 my-5 mb-20 ${className} flex-col md:flex-row md:gap-x-6 md:justify-between`}
    >
      <ToShowComponent
        text="HEADPHONES"
        className="md:w-1/3"
        imgPath="/assets/shared/desktop/image-category-thumbnail-headphones.png"
      />
      <ToShowComponent
        text="SPEAKERS"
        className="md:w-1/3"
        imgPath="/assets/shared/desktop/image-category-thumbnail-speakers.png"
      />
      <ToShowComponent
        text="EARPHONES"
        className="md:w-1/3"
        imgPath="/assets/shared/desktop/image-category-thumbnail-earphones.png"
      />
    </section>
  );
}

interface ProductImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  wrapperStyle?: string;
  priority?: boolean;
  loading?: "eager" | "lazy"; // Add loading prop
}

export function ProductImage({
  src,
  alt,
  width = 400,
  height = 300,
  priority = false,
  wrapperStyle,
  loading = "lazy",

  className = "object-contain border rounded-lg",
}: ProductImageProps) {
  return (
    <div
      className={`${wrapperStyle}  flex items-center justify-center bg-OffWhite-100 rounded-lg overflow-hidden`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        loading={loading} // Use the loading prop to control image loading behavior
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjFGMUYxIi8+PC9zdmc+"
      />
    </div>
  );
}

interface RandomProductProps {
  product: {
    id: string; // Make id required for proper linking
    image: string;
    cartName: string;
    name: string;
    details: string;
    price: number;
    features?: string[];
    inTheBox?: { quantity: number; item: string }[];
    productImages?: string[];
    smallImage: string;
  };
}

export function RandomComponents({ product }: RandomProductProps) {
  return (
    <div className="flex flex-col md:w-full items-center gap-4">
      <ProductImage
        src={product.smallImage}
        alt={product.id}
        className="w-1/4 md:w-full h-full object-cover"
        wrapperStyle="h-27 md:h-82 lg:h-auto w-full lg:items-center overflow-hidden rounded-lg bg-OffWhite-100"
      />

      <h1 className="font-bold uppercase md:text-2xl lg:text-lg text-center">
        {product.cartName}
      </h1>
      <Button
        text="SEE PRODUCT"
        variant="primary"
        link={product.id}
        basePath="productDetail"
        className="w-1/3 md:w-4/5 lg:w-1/2 lg:text-xs lg:py-3 md:py-4"
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
  ({ id, placeholder, className = "", text, error, ...props }, ref) => {
    return (
      <div className="w-full ">
        <div
          className={`flex items-center pb-1 justify-between ${
            error ? "text-red-500" : "text-PureBlack-100"
          }`}
        >
          <label
            htmlFor={id}
            className="text-xs md:text-sm hover:border-BurntSienna-100 font-semibold"
          >
            {text}
          </label>
          <br />
          {error && <p className="text-xs md:text-sm">{error.message}</p>}
        </div>
        <input
          id={id}
          type="text"
          ref={ref}
          placeholder={placeholder}
          // Apply an error class if an error exists, providing visual feedback.
          className={`
            border w-full p-2 rounded-md caret-BurntSienna-100 md:p-4 lg:p-2
            focus:outline-2 focus:outline-offset-2 focus:outline-BurntSienna-100 
            text-xs md:text-sm active:border-BurntSienna-100 hover:border-BurntSienna-100
            ${error ? "border-red-500" : "border-Gray-200"}
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

TextInput.displayName = "TextInput"; // Required for forwardRef

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value: string;
}

// Use forwardRef to correctly handle the ref passed from react-hook-form.
export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ id, label, value, ...props }, ref) => {
    return (
      <label
        className="radio-box md:p-4 lg:p-2 border border-Gray-200 active:border-BurntSienna-100 hover:border-BurntSienna-100 mb-2 text-xs md:text-sm gap-x-4 flex items-center font-semibold rounded-md p-2"
        htmlFor={id}
      >
        <input
          id={id}
          type="radio"
          value={value}
          ref={ref}
          className="sr-only "
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

RadioButton.displayName = "RadioButton"; // Required for forwardRef
