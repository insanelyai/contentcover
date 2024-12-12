import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Navbar from '@/templates/Navbar'
import React from 'react'

export default function GeneratePage() {
  return (
    <main className='w-screen min-h-screen overflow-x-hidden flex flex-col items-center justify-start bg-primary'>
    <Navbar />
    
    <div className='w-4/5 h-4/5 ring-1 ring-muted-foreground rounded-lg p-6 my-10 text-white'>

    <div className='flex items-center justify-center gap-6'>
        <div className='w-full flex flex-col justify-center items-start'>
            <h3 className='font-semibold text-2xl'>
                Describe your thumbnail
            </h3>

            <div className='w-full flex flex-col items-start justify-start'>
                <Label>
                    Prompt
                </Label>
                <Input type="text" />
            </div>
        </div>
    </div>

    </div>
    </main>
  )
}
