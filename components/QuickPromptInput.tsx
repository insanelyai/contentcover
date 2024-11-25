'use client';
import React from 'react'
import { Input } from './ui/input'
import { buttonVariants } from './ui/button'
import {motion} from "framer-motion";

export default function QuickPromptInput() {
  return (
    <>
       <Input
            className='p-4 my-5 md:my-0 text-xl h-18 border-muted-foreground'
            placeholder='Describe your video or content theme, and let our AI craft the perfect thumbnail for you!'
          />
          <motion.div
           className={
            buttonVariants(
                {variant: "default",
                size: "xl",
                className: "text-lg p-4 h-18 text-foreground font-medium hover:bg-white hover:text-foreground ring-1 ring-muted-foreground cursor-default"
                }

            )
           }
            whileTap={{scale: 0.9}}
          >
            Generate
          </motion.div>
    </>
  )
}
