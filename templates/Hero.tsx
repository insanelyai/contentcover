import React from "react";
import HeroBackground from "./HeroBackground";
import QuickPromptInput from "@/components/QuickPromptInput";
import { Headline } from "@/utils/AppConfig";


export default function Hero() {
  return (
    <div className='w-full h-[90vh] overflow-hidden text-white'>
      <div className='max-w-screen-sm h-[80vh] xl:ml-10 flex flex-col justify-end'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-2 mx-5 md:mx-0'>
         <QuickPromptInput />
        </div>
        <h1 className='text-pretty text-4xl md:text-5xl my-8 mx-5 md:mx-0'>
          {Headline.title}
        </h1>
      </div>

      

      <HeroBackground />
    </div>
  );
}
