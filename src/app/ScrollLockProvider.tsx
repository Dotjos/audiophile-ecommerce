'use client';
import { useEffect, useState, ReactNode } from 'react';
import { Navbar } from './Components/Navbar';
import Menu from './Components/Menu';
import useStore from './Zustore';
import { AudioGearSection, Footer, NavSection } from './Components';
import { usePathname } from 'next/navigation';


interface Props {
  children: ReactNode;
}

export default function ScrollLockProvider({ children }: Props) {
  const {isOpen,toggleMenu,closeMenu} = useStore();
  const pathname = usePathname()
  const homePage = pathname === '/';


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  useEffect(()=>{
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
      };
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <div className='relative'>
      <Navbar toggleMenu={toggleMenu} />
      {isOpen && <Menu isOpen={isOpen} onClose={closeMenu}/>}
      {children}
    <div className='px-4 py-10'>
     { !homePage&&<NavSection/>}
      <AudioGearSection/>
    </div>
     <Footer/>    
    </div>
  );
}
