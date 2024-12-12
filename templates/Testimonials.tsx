import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import React from "react";

export default function Testimonials() {
  return (
    <section className='overflow-hidden bg-purple-50 backdrop-blur-xl flex flex-col items-center justify-center pt-5 pb-10'>
      <div className='text-center max-w-screen-lg mx-auto flex flex-col items-center justify-center pt-12 pb-8 text-pretty'>
        <h2 className='text-5xl font-bold tracking-tighter pb-2 px-3'>
          What Our Customers Say
        </h2>
        <div className='w-full flex items-center py-5'>
          <div className='w-full border-t border-muted-foreground' />

          <Quote size='50' className='shrink-0' />
          <div className='w-full border-t border-muted-foreground' />
        </div>
      </div>
      <div className='max-w-screen-lg flex flex-col items-center justify-center'>
        <q className='max-w-lg text-xl font-medium px-4 md:px-0 text-pretty'>
          ContentCover has become my go-to tool for creating eye-catching
          thumbnails. It&apos;s fast, effective, and elevates my videos to the
          next level.
        </q>
        <div className='flex flex-col items-center pt-8'>
          <Avatar>
            <AvatarFallback className="ring-2 ring-offset-4 ring-primary">
              <span className='text-xl font-bold'>M</span>
            </AvatarFallback>
          </Avatar>
          <span className='text-xl font-bold'>Michael Carter</span>
          <span className='text-base text-muted-foreground font-medium'>Tech Reviewer</span>
          <span className='text-sm text-muted-foreground font-medium'>3.9M Subscribers</span>
        </div>
      </div>
    </section>
  );
}
