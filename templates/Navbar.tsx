'use client'
import React from "react";
import { Nav_cfg } from "@/utils/AppConfig";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className='sticky w-full mx-auto'>
      <div className='max-w-screen-lg w-full mx-auto my-5 bg-background/90 p-6 rounded-full flex items-center justify-center'>
        <div className='flex flex-wrap gap-4'>
          {Nav_cfg.links.map((link, index) => {
            return (
              <Link href={link.href} key={index}>
                <motion.div
                whileHover={{ scale: 1.09,  }}
                whileTap={{ scale: 1.01}}
                >{link.label}</motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
