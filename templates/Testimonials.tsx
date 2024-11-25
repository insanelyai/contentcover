"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TestimonialsConfig } from "@/utils/AppConfig";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <>
      <div className='w-full overflow-hidden'>
        <div className='xl:ml-10'>
          <h1 className='text-5xl font-bold pb-10'>Testimonials</h1>
          <div>
            <Carousel
              className='w-full min-w-xs'
              opts={{
                slidesToScroll: 1,
                align: 'center',
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
            >
              <CarouselContent className='gap-5'>
                {TestimonialsConfig.creaters.map((creater, index) => {
                  return (
                    <CarouselItem
                      className='flex items-center justify-between max-w-screen-sm p-5 border rounded-md bg-accent'
                      key={index}
                    >
                      <div className='h-full flex items-start justify-start gap-5'>
                        <Image
                          src={creater.image}
                          alt='testimonials'
                          className='object-cover position-center rounded'
                          width={200}
                          height={400}
                        />
                        <div className='h-full flex flex-col items-start gap-3 my-4'>
                          <div>
                            <h3 className='text-3xl font-semibold'>
                              {creater.name}
                            </h3>
                            <p className='text-muted-foreground text-sm'>
                              {creater.occupation}
                            </p>
                            <p className='text-muted-foreground text-sm'>
                              {creater.followers}
                            </p>
                          </div>
                          <p className='text-lg text-pretty'>{creater.quote}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
