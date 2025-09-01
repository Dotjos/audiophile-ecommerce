"use client";
import Image from 'next/image'
import useStore from '../Zustore';
import { NavLink } from '../Components';

interface NavbarProps {
    homePage: boolean;
}

export const Navbar = ({homePage}:NavbarProps)=>{
    const toggleMenu = useStore(state=> state.toggleMenu);
    const toggleCart = useStore(state => state.toggleCart);

    function handleCartClick() {
        // Handle cart click logic here
        toggleCart();
    }

    return(
<nav className={`flex ${homePage?"absolute top-0 left-0 right-0 border-b-[1px] border-Gray-200 z-30":"bg-black"} z-50 lg:mx-30 items-center text-PureWhite-100 py-5 px-4 justify-between`}>
  <div onClick={toggleMenu} className='h-5 w-6 md:w-7 md:h-6 lg:hidden relative'>
  <Image
    src={"/assets/shared/tablet/icon-hamburger.svg"}
    alt='Menu'
    fill
    priority
    />
  </div>
   
    <span className='text-xl lg:w-fit md:text-left md:w-full md:ml-10 font-black'>audiophile</span>

    <NavLink className='hidden lg:flex'/>


    <div className='h-5 w-6  relative' onClick={handleCartClick}>
    <Image
    src={"/assets/shared/mobile/icon-cart.svg"}
    alt='cart'
    fill
    priority
    />
    </div>
    
</nav>)
}