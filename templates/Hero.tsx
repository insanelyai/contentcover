import React from "react";
import HeroBackground from "./HeroBackground";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className='w-full h-[100vh] overflow-hidden text-white'>
      <div className='max-w-screen-sm h-[70vh] xl:ml-20 flex flex-col justify-end'>
        <div className="flex items-center justify-center gap-2">
        <Input className="p-4 my-5 text-xl h-18 border-muted-foreground" placeholder="Describe your video or content theme, and let our AI craft the perfect thumbnail for you!" />
            {/* <Button size={'lg'} className="text-md p-4 h-18 bg-white text-black font-medium hover:">Generate</Button> */}
            <div className={buttonVariants({variant:'default', size: 'xl',  className: 'text-lg p-4 h-18 bg-white text-black font-medium hover:bg-white/90'})}>Generate</div>
        </div>
        <h1 className="text-pretty text-5xl">
          Your content deserves attention. Let us design the perfect hook.
        </h1>
      </div>

      <HeroBackground />
    </div>
  );
}
