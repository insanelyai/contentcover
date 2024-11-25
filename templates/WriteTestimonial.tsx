"use client";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useState } from "react";

export default function WriteTestimonial() {
  const [toggle, setToggle] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className='w-full overflow-hidden'>
      <div className=' max-w-screen-xl p-8 border rounded-md my-10 mx-auto bg-accent shadow'>
        <div className='flex items-center justify-between'>
          <h3 className='text-2xl max-w-screen-md text-pretty'>
            We&apos;d love to hear your thoughts! Share your experience with us
            and let others know how ContentCover has helped you.
          </h3>
          <motion.div
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: cn(
                toggle
                  ? "text-lg h-18 bg-white text-black hover:bg-black hover:text-white ring-1 ring-muted-foreground rounded-full cursor-default"
                  : "text-lg h-18 hover:bg-white hover:text-black ring-1 ring-muted-foreground rounded-full cursor-default"
              ),
                
            })}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          >
            {toggle ? (
              <>
                <X /> <p>Close</p>
              </>
            ) : (
              "Write Testimonial"
            )}
          </motion.div>
        </div>
      </div>

      {toggle && (
        <motion.div
          initial='hidden'
          animate={toggle ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          variants={variants}
          className=' max-w-screen-xl p-8 border rounded-md my-15 mx-auto shadow'
        >
          <h3 className="text-xl pb-5">Write a testimonial</h3>
          <div className='flex items-center justify-center gap-5 space-y-4 mt-5'>
            <div className='w-full flex items-center justify-between gap-10'>
              <div className='flex flex-col w-full gap-2'>
                <Label>Name</Label>
                <Input type='text' />
              </div>
              <div className='flex flex-col w-full gap-2'>
                <Label>Email</Label>
                <Input type='email' />
              </div>
            </div>
          </div>
          <div className='w-full flex items-center justify-between gap-10 my-5'>
            <div className='flex flex-col w-full gap-2'>
              <Label>Work</Label>
              <Input type='text' />
            </div>
            <div className='flex flex-col w-full gap-2'>
              <Label>Followers</Label>
              <Input type='text' />
            </div>
          </div>

          <Label>ContentCover Experience</Label>
          <Textarea />
        </motion.div>
      )}
    </div>
  );
}
