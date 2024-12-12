import { Button } from "@/components/ui/button";
import React from "react";

export default function CTA() {
  return (
    <section className='overflow-hidden h-80 backdrop-blur-xl flex flex-col items-center justify-center pt-5 pb-10 '>
      <div className='flex flex-col items-center justify-center max-w-screen-lg mx-auto'>
        <div className="space-y-2 text-center pt-5 pb-10">
          <h2 className='text-3xl md:text-4xl lg:text-5xl tracking-tighter  font-bold text-pretty text-center px-3'>
            Ready to Transform Your Thumbnails?
          </h2>
          <p className='text-muted-foreground text-xl'>
            Join thousands of content creators who are already using ContentCover
          </p>
        </div>
        <Button size='lg'>Get Started Now</Button>
      </div>
    </section>
  );
}
