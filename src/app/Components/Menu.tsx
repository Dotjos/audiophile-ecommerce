"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { ToShowComponent } from "../Components";
import Backdrop from './Backdrop';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  if (!isOpen) return null;
  //close the menu when navigation is triggered programmatically
  const pathname = usePathname();
  const previousPathnameRef = useRef(pathname);

  //Handle navigation logic here
  
  useEffect(() => {
    // Only close if pathname actually changed and menu is open
    if (isOpen && pathname !== previousPathnameRef.current) {
      onClose();
    }
    previousPathnameRef.current = pathname;
  }, [pathname, isOpen, onClose]);

  
  const handleNavigation=()=>{
    onClose();
  }

  return (
    <>
      {/* Menu content */}
     <Backdrop>
      <div className="absolute z-50 w-full bg-WhiteSmoke-100 rounded-b-lg shadow-lg">
        <div className="flex flex-col gap-4 px-4 pt-20 pb-6">

         <div onClick={handleNavigation} className="cursor-pointer">
          <ToShowComponent 
            text="HEADPHONES" 
            height="h-25" 
            imgPath="/assets/shared/desktop/image-category-thumbnail-headphones.png" 
          />
         </div>


         <div onClick={handleNavigation} className="cursor-pointer">
          <ToShowComponent 
            text="SPEAKERS" 
            height="h-25" 
            imgPath="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          />
          </div>

          <div onClick={handleNavigation} className="cursor-pointer">
          <ToShowComponent 
            text="EARPHONES" 
            height="h-25" 
            imgPath="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          />
          </div>

        </div>
      </div>
      </Backdrop>
    </>
  );
};

export default Menu;