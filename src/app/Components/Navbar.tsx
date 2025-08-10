"use client";
import Image from 'next/image'
import useStore from '../Zustore';

interface NavbarProps {
    toggleMenu: () => void;
}

export const Navbar : React.FC<NavbarProps> = ()=>{
    const toggleMenu = useStore(state=> state.toggleMenu);
    return(
<nav className="flex border-b-AlmostBlack-100 bg-PureBlack-100 text-PureWhite-100 p-2 justify-between">
  <div onClick={toggleMenu} className='h-5 w-6 relative'>
  <Image
    src={"/assets/shared/tablet/icon-hamburger.svg"}
    alt='Menu'
    fill
    priority
    />
  </div>
   
    <span>audiophile</span>
    <div className='h-5 w-6 relative'>
    <Image
    src={"/assets/shared/mobile/icon-cart.svg"}
    alt='cart'
    fill
    priority
    />
    </div>
    
</nav>)
}