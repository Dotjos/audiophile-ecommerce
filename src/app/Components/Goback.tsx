"use client";
import { useRouter } from "next/navigation";

interface GobackProps {
  className?: string;
}

export function Goback({ className }: GobackProps) {
    const router=useRouter();
    function handleBackNavigation(){
      if (typeof window !== 'undefined' && window.history.length > 1) {
        router.back();
      } else {
        // Fallback: navigate to home or parent route
        router.push('/');
      }
    }
    return (
      <button onClick={handleBackNavigation} className={`text-xs md:text-sm md:mb-6  ${className} text-Gray-200 hover:text-BurntSienna-100`}>
        Go Back
      </button>
    );
  }