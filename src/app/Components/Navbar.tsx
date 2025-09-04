"use client";
import Image from 'next/image'
import useStore from '../Zustore';
import { NavLink } from '../Components';
import { usePathname } from 'next/navigation';

interface NavbarProps {
    homePage: boolean;
}

export const Navbar = ({homePage}:NavbarProps)=>{
    const toggleMenu = useStore(state=> state.toggleMenu);
    const toggleCart = useStore(state => state.toggleCart);
    const pathname = usePathname()
    const productDetailPage = pathname.includes('/productDetail')
    const checkoutPage = pathname.includes('/checkout')
    
    function handleCartClick() {
        // Handle cart click logic here
        toggleCart();
    }

    return(
     <nav className={`flex absolute top-0 left-0 py-5 px-4 right-0 border-b-[1px] border-Gray-200 z-30 items-center text-PureWhite-100 justify-between ${(productDetailPage||checkoutPage)?"bg-PureBlack-100 h-auto static lg:w-full md:mx-0 md:px-8 lg:mx-0 lg:px-30":"lg:mx-30 md:mx-8 md:px-0"}`}> 
  
  <div onClick={toggleMenu} className='h-5 w-6 md:w-7 md:h-6 lg:hidden relative'>
  <Image
    src={"/assets/shared/tablet/icon-hamburger.svg"}
    alt='Menu'
    fill
    priority
    />
  </div>

    <span className='text-xl lg:w-fit md:text-left md:w-full md:ml-10 lg:ml-0 font-black'>audiophile</span>

    <NavLink className='hidden md:hidden lg:flex'/>

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