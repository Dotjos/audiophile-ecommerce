"use client";
import { ReactNode, MouseEvent, useEffect, useRef } from "react";
import useStore from "../Zustore";
import { usePathname } from 'next/navigation';

interface BackdropProps {
  isVisible?: boolean;
  className?: string;
  children?: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ 
  isVisible = true,
  className = "",
  children = null,
}) => {
  // if (!isVisible) return null;
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const closeMenu = useStore((state) => state.closeMenu);
  const closeCart = useStore((state) => state.closeCart);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      closeMenu();
      closeCart();
      previousPathname.current = pathname;
    }
  }, [pathname, closeMenu, closeCart]);


  const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    // Only trigger onClick if clicking the backdrop itself (not children)
    if (e.target === e.currentTarget ) {
      closeMenu(); // Close the menu when backdrop is clicked
      closeCart(); // Close the cart when backdrop is clicked
    }
  };

  return (
    <div
      className={`absolute flex justify-center w-full min-h-screen bg-PureBlack-100/40 z-50 transition-opacity ${className}`}
      onClick={(e)=>handleClick(e)}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  );
};


export default Backdrop;
