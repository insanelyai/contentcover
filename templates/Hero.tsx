import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className='overflow-x-hidden relative flex flex-col items-center justify-center'>
      
       {/* <div className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600 via-[#e7bdbd] to-[#e5e7ed] opacity-50" />
        </div> */}
      
      <div className='max-w-screen-lg flex flex-col md:flex-row items-start justify-evenly px-3 lg:px-6 xl:px-0 text-pretty gap-5 py-14 mx-auto'>
        <h2 className='text-5xl font-bold tracking-tighter '>
          Generate Stunning Video Thumbnails with AI
        </h2>
        <div className='flex flex-col gap-5'>
          <p className='text-muted-foreground text-xl'>
            Create eye-catching thumbnails in seconds. Boost your video
            engagement with our AI-powered thumbnail generator.
          </p>
          <div className='flex gap-3'>
            <Button className="bg-purple-500 hover:bg-purple-400">Start Generating</Button>
            <Button variant='outline'>Watch Demo</Button>
          </div>
        </div>
      </div>

      <div className='w-full max-w-screen-lg mx-auto px-4 pb-10'>
        <AspectRatio ratio={16 / 9} className='overflow-hidden rounded-lg'>
          <Image
            src='/placeholder.svg'
            alt='Thumbnail preview'
            fill
            className='object-cover'
            priority
          />
        </AspectRatio>
      </div>
    </section>
  );
}
