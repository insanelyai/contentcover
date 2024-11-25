import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full overflow-hidden bg-primary'>

        <div className='xl:mx-10 flex items-center justify-between my-10'>
          <Link href={'/'}>
          <h3 className='font-bold text-3xl text-white'>
            ContentCover
          </h3>
          </Link>

          <div className='flex items-start justify-start gap-4 text-muted-foreground'>
            <Link href={'/'}>
            Privacy
            </Link>
            <Link href={'/'}>
            Terms and Conditions 
            </Link>
          </div>
        </div>
      
    </div>
  )
}
