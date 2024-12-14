import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { SettingsIcon } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function ReplicateDilog({ userId }: { userId: string | null }) {
  const auth = userId;

  return (
    <Dialog>
      <DialogTrigger asChild className='hidden lg:flex'>
        <Button variant='outline' size='icon' className='p-3 hidden lg:flex'>
          <SettingsIcon />
        </Button>
      </DialogTrigger>
      <DialogTrigger asChild className='flex lg:hidden'>
        <Button variant='outline' size='lg' className='w-full flex lg:hidden'>
          <SettingsIcon /> Replicate API
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Add Replicate API key</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'>
            <Label htmlFor='link' className='sr-only'>
              API key
            </Label>
            <Input id='link' readOnly={!auth} />
            {!auth && (
              <p className='text-sm text-red-600 dark:text-red-500'>
                Alert: Before adding API key, please signin
              </p>
            )}
          </div>
          {/* <Button type="submit" size="sm" className="px-3">
          <span className="sr-only">Copy</span>
          <Copy />
        </Button> */}
        </div>
        <DialogFooter className='gap-3 sm:justify-start'>
          <DialogClose asChild>
            <Button size='lg' type='button' variant='secondary'>
              Close
            </Button>
          </DialogClose>
          <Button
            size='lg'
            variant='default'
            className='bg-purple-500 hover:bg-purple-500'
            disabled={!auth}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
