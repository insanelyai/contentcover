import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className='w-full overflow-hidden mb-14'>
      <div className='xl:ml-10 flex flex-col items-center justify-center mx-auto gap-10'>
        <div className='flex flex-col items-center justify-center gap-2 '>
          <Badge className='text-center'>Features</Badge>
          <h2 className='font-semibold text-4xl'>
            Transform Your Thumbnails Like Never Before
          </h2>
          <p className='text-muted-foreground'>
            Discover powerful features designed to make your YouTube content
            stand out and drive engagement effortlessly
          </p>
        </div>

        <div className='flex items-center justify-center gap-14'>
          <div className='flex flex-col items-center justify-center gap-2 max-w-xs text-center text-pretty'>
            <Image
              src={"/features/ai_features.svg"}
              alt='Power AI'
              width={70}
              height={70}
              className="shadow rounded-3xl"
            />

            <div className='flex flex-col items-center justify-center'>
              <h3 className='font-semibold'>AI-Powered Design Solutions</h3>
              <p className='text-muted-foreground'>
                Generate professional thumbnail designs tailored to your video
                content.
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-2 max-w-xs text-center text-pretty'>
            <Image
              src={"/features/hd_features.svg"}
              alt='High Res Images'
              width={70}
              height={70}
              className="shadow rounded-3xl"
            />

            <div className='flex flex-col items-center justify-center'>
              <h3 className='font-semibold'>High-Resolution Exports</h3>
              <p className='text-muted-foreground'>
                Ensure your thumbnails look sharp and engaging on all devices.
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-2 max-w-xs text-center text-pretty'>
            <Image
              src={"/features/multi_features.svg"}
              alt='Power AI'
              width={70}
              height={70}
              className="shadow rounded-3xl"
            />

            <div className='flex flex-col items-center justify-center'>
              <h3 className='font-semibold'>Multi-Language Support</h3>
              <p className='text-muted-foreground'>
                Create thumbnails in different languages to reach a global
                audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
