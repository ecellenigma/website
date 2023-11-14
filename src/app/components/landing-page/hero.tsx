import React from "react";
import Image from "next/image";
import NavbarPage from "@/app/components/layout/navbar"

const HeroPage = () => {
  return (
    <div className=''>
  {/* Hero Logo */}
  <div className='w-full flex items-center justify-center'>
    <Image className="w-[80px] h-[80px]" src="/logos/enigma1.png" width={"80"} height={"80"} alt="Enigma Logo" />
  </div>

  {/* Navbar - Uncomment when you have the Navbar component */}
  <div className='w-full flex items-center justify-center '>
    <NavbarPage />
  </div>

  <div className='h-full flex flex-col sm:flex-row items-center justify-evenly gap-0 sm:gap-20 glex-wrap'>
    <div className='w-full md:w-4/12 flex items-center justify-center '>
      <Image src="/logos/enigma2.png" width={"400"} height={"400"} alt="Enigma Logo" />
    </div>
    {/* <div className='hidden md:flex flex-col items-center justify-center'>
      <div className='min-h-[300px] border-r border-white text-white'></div>
      <div><Image src="/icons/chevrons.svg" width={"80"} height={"80"} alt="Enigma Logo" /></div>
    </div> */}
    <div className='text-white text-2xl sm:text-4xl flex flex-col items-center justify-center gap-5'>
      <div>THE</div>
      <div>ENTREPRENEURSHIP</div>
      <div>CELL OF <span className='text-[#F26938]'>NMIT</span></div>
    </div>
  </div>
</div>

  );
};

export default HeroPage;
