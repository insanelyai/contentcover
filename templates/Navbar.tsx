import ReplicateDilog from "@/components/ReplicateDialog";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

const links = [
  { label: "Features", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default async function Navbar() {
  const { userId } = await auth();

  return (
    <header className='w-full h-14 sticky top-0 z-10 backdrop-blur-lg bg-background/80 lg:border border-border flex shrink-0 items-center'>
      <MobileNavbar userId={userId} />
      <DesktopNavbar userId={userId} />
    </header>
  );
}

export function DesktopNavbar({ userId }: { userId: string | null }) {
  return (
    <NavigationMenu className='max-w-screen-lg px-3 lg:px-6 xl:px-0 items-center justify-between mx-auto hidden lg:flex'>
      <NavigationMenuList className='basis-1/3'>
        <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink>
              <Logo width='50' height='39' />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className='basis-4/6'>
        {links.map((link, index) => {
          return (
            <NavigationMenuItem key={index}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className='px-4 font-medium hover:text-purple-400 transition-colors duration-75'>
                  {link.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>

      <NavigationMenuList className='flex items-center justify-end gap-1 basis-1/3'>
        {/* <Button variant='outline' size='icon'>
          <SettingsIcon />
        </Button> */}
        <ReplicateDilog userId={userId} />
        {userId ? (
          <UserButton />
        ) : (
          <SignInButton>
            <Button className='bg-purple-500 hover:bg-purple-400'>
              Sign in
            </Button>
          </SignInButton>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNavbar({ userId }: { userId: string | null }) {
  return (
    <Sheet>
      <SheetTrigger asChild className='mx-2 block lg:hidden'>
        <Button variant='outline' size='icon'>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='h-[100dvh] flex flex-col items-start justify-between'
      >
        <div>
          <SheetHeader>
            <SheetTitle className='flex items-center gap-2'>
              <Logo width='40' height='29' />
              Thumbnails
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className='grid text-lg gap-1 space-y-4 my-7'>
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className='hover:text-purple-400'
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className='grid gap-2 w-full'>
          <div className='flex items-center'></div>
          {/* <Button variant='outline' size='lg' className='w-full'>
            Add Replicate API
          </Button> */}
          <ReplicateDilog userId={userId} />
          {userId ? (
            <UserButton />
          ) : (
            <Button
              size='lg'
              className='w-full bg-purple-500 hover:bg-purple-400'
            >
              Sign in
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
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
