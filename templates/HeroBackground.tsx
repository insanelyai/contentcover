import Image from 'next/image'
import React from 'react'

export default function HeroBackground() {
  return (
    <div className='absolute inset-0 z-[-1]'>
      <Image
      src={'/background.svg'}
      alt={'Background'}
      layout='responsive'
      width={1920}
      height={1080}
      objectFit='cover'
      />
    </div>
  )
}
