import React from "react";

export default function Footer() {
  return (
    <section className='overflow-hidden bg-purple-50 backdrop-blur-xl flex flex-col items-start justify-start pt-5 pb-10'>
      <div className='max-w-screen-lg w-full mx-auto grid grid-cols-2 md:grid-flow-col-3 lg:grid-cols-4 gap-16 pt-5'>
        <div className='flex flex-col items-center justify-center text-lg font-semibold gap-2'>
          <Logo width='90' height='89' />
          ContentCover
        </div>
        <div className='flex flex-col items-start justify-start gap-2'>
          <h4 className='font-semibold'>Company</h4>
          <ul className='leading-loose font-medium text-muted-foreground'>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className='flex flex-col items-start justify-start gap-2'>
          <h4 className='font-semibold'>Support</h4>
          <ul className='leading-loose font-medium text-muted-foreground'>
            <li>Documentation</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex flex-col items-start justify-start gap-2'>
          <h4 className='font-semibold'>Legal</h4>
          <ul className='leading-loose font-medium text-muted-foreground'>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-full max-w-screen-lg pt-5 ">
        <div className='border-t pb-5' />
        <p className='text-center text-muted-foreground text-sm'>
          Copyright © 2024 ContentCover. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      id='logo-35'
      // width='50'
      // height='39'
      viewBox='0 0 50 39'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {" "}
      <path
        d='M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z'
        className='ccompli1'
        fill='#a855f7'
      ></path>{" "}
      <path
        d='M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z'
        className='ccustom'
        fill='#404040'
      ></path>{" "}
    </svg>
  );
}
