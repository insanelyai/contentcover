import React from "react";
import { Nav_cfg } from "@/utils/AppConfig";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className='w-full mx-auto'>
      <div className='max-w-screen-lg w-full mx-auto flex items-center justify-center'>

        <div className="flex flex-wrap gap-4">
        {Nav_cfg.links.map((link, index) => {
            return (
                <Link href={link.href} key={index}>
              {link.label}
            </Link>
          );
        })}
        </div>
      </div>
    </div>
  );
}
