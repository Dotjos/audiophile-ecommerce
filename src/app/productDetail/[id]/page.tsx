"use client";
import { Goback } from "@/app/Components/Goback";
import { useRouter } from "next/navigation";



const page = () => {
    
    //remeber to create a go back functionality button when you come back

  return (
    <div>
      <Goback />
      <div>page</div>
    </div>
  );

};

export default page;