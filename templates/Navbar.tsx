"use client";
import React from "react";
import { NavbarConfig } from "@/utils/AppConfig";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";


export default function Navbar() {
  

  return (
    <div className='sticky top-5 w-full mx-auto z-10'>
      <div className='max-w-screen-lg w-full mx-auto my-5 bg-primary/25 backdrop-blur-md ring-1 ring-muted-foreground text-white py-3 px-5 rounded-md flex items-center justify-between'>
        <div className='basis-1/3'>
          <Link href={"/"} className='flex items-center justify-start'>
            <Logo />
          </Link>
        </div>
        <div className='basis-1/2 flex flex-wrap justify-center gap-4'>
          {NavbarConfig.links.map((link, index) => {
            return (
              <Link href={link.href} key={index}>
                <motion.div
                  whileHover={{ scale: 1.09 }}
                  whileTap={{ scale: 1.01 }}
                >
                  {link.label}
                </motion.div>
              </Link>
            );
          })}
        </div>
        <div className='basis-1/3 flex items-center justify-end gap-2'>
          <SignedOut>
            <SignInButton>
              <motion.div
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className:
                    "hover:bg-white hover:text-black ring-1 ring-muted-foreground rounded-full cursor-default",
                })}
                whileTap={{ scale: 0.9 }}
              >
                Sign in
              </motion.div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
