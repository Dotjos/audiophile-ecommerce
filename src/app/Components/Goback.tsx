import { useRouter } from "next/navigation";


export function Goback() {
    const router=useRouter();
    function handleBackNavigation(){
        router.back();
    }
    return (
      <button onClick={handleBackNavigation} className="text-xs text-PureBlack-100 hover:text-BurntSienna-100">
        Go Back
      </button>
    );
  }