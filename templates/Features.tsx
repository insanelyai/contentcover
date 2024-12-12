import { LayoutTemplateIcon, PaletteIcon, RocketIcon } from "lucide-react";
import React from "react";

const features = [
  {
    icon: <RocketIcon />,
    title: "Pro Generation",
    description: "Generate unlimited thumbnails with our advanced AI models",
  },
  {
    icon: <LayoutTemplateIcon />,
    title: "Custom Templates",
    description: "Choose from hundreds of pre-designed templates",
  },
  {
    icon: <PaletteIcon />,
    title: "Brand Kit Integration",
    description: "Keep your thumbnails on-brand with custom colors and fonts",
  },
];

export default function Features() {
  return (
    <section className='overflow-hidden h-1/2 bg-purple-50 backdrop-blur-xl flex flex-col items-center justify-center py-5'>
      {/* <div className='relative top-[-20px]'>
        <div className='absolute z-[-2]'>
          <GlowingCircle size="xl" />
        </div>
      </div> */}
      <div className='text-center max-w-screen-lg mx-auto flex flex-col items-center justify-center py-12 text-pretty'>
        <h2 className='text-5xl font-bold tracking-tighter pb-2 px-3'>
          Features That Matter
        </h2>

        <p className='text-muted-foreground text-xl'>
          Everything you need to create professional thumbnails that drive more
          clicks
        </p>
      </div>
      <div className='max-w-screen-lg px-8 lg:px-4 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto pb-10'>
        {features.map(({ icon, title, description }) => (
          <div
            key={title}
            className='flex flex-col items-start gap-3 text-pretty'
          >
            <span className='bg-purple-500 p-3 text-background rounded-xl'>
              {icon}
            </span>
            <h3 className='text-3xl font-semibold tracking-tighter'>{title}</h3>
            <p className='text-muted-foreground'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
interface GlowingCircleProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const GlowingCircle: React.FC<GlowingCircleProps> = ({
  className,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-36 h-36",
  };

  return (
    <div className={cn("relative rounded-full", sizeClasses[size], className)}>
      <div className='absolute inset-0 rounded-full bg-red-400 blur-[64px]' />
      <div className='absolute inset-0 rounded-full bg-red-400 blur-[128px] opacity-75' />
      <div className='absolute inset-0 rounded-full bg-red-400 blur-[128px] opacity-50' />
      <div className='absolute inset-0 rounded-full bg-red-400 blur-[128px] opacity-25' />
    </div>
  );
};
