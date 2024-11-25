import Image from "next/image";
import React from "react";

export default function HeroBackground() {
  return (
    <>
      <div className='absolute left-0 top-0 inset-0 z-[-1] hidden md:block'>
        <Image
          src={"/background.svg"}
          alt={"Background"}
          layout='fill'
          
          objectFit='cover'
        />
      </div>
      <div className='absolute inset-0 z-[-1] block md:hidden'>
            <div className='flex justify-center items-center h-full'>
              <Image
                src={"/background-mobile.svg"}
                alt={"Background"}
                layout='responsive'
                width={1920}
                height={1920}
                objectFit='cover'
              />
            </div>
        </div>
    </>
  );
}
