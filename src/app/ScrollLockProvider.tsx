'use client';
import { useEffect, useState, ReactNode } from 'react';
import { Navbar } from './Components/Navbar';
import Menu from './Components/Menu';
import useStore from './Zustore';
import { AudioGearSection, Footer, NavSection } from './Components';
import { usePathname } from 'next/navigation';
import Cart from './Components/Cart';

interface Props {
  children: ReactNode;
}

export default function ScrollLockProvider({ children }: Props) {
  const {menuIsOpen,toggleMenu,closeMenu,cartIsOpen,toggleCart,closeCart} = useStore();
  const pathname = usePathname()
  const homePage = pathname === '/';

  useEffect(() => {
    if (menuIsOpen || cartIsOpen) {
      // Lock scroll when menu or cart is open
      document.body.classList.add('overflow-hidden');
    } else {
      // Unlock scroll when both are closed
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      // Cleanup: remove overflow class on unmount
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuIsOpen, cartIsOpen]);

  useEffect(()=>{
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Close menu or cart when Escape is pressed
        if (menuIsOpen) closeMenu()
        if (cartIsOpen) closeCart()        
      }
    }

    if (menuIsOpen || cartIsOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuIsOpen, cartIsOpen, closeMenu, closeCart]);

return (
    <div className='relative'>
      <Navbar toggleMenu={toggleMenu} />
      {menuIsOpen && <Menu isOpen={menuIsOpen} onClose={closeMenu}/>}
      {cartIsOpen && <Cart/>}
      {children}
    <div className='px-4 py-10'>
     { !homePage&&<NavSection/>}
      <AudioGearSection/>
    </div>
     <Footer/>    
    </div>
  );
}
