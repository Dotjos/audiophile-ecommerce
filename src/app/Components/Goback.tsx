"use client";
import { useRouter } from "next/navigation";


export function Goback() {
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
      <button onClick={handleBackNavigation} className="text-xs my-2 text-Gray-200 hover:text-BurntSienna-100">
        Go Back
      </button>
    );
  }