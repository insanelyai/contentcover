import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import React from "react";

const plans = [
  {
    title: "Starter",
    price: "$19",
    monthly: true,
    popular: false,
    features: [
      "100 thumbnails",
      "Unlimited storage",
      "100% uptime",
      "Email support",
    ],
    button: (
      <Button className='w-full' variant='outline' size='lg'>
        Select Plan
      </Button>
    ),
  },
  {
    title: "Creator",
    price: "$29",
    monthly: true,
    popular: true,
    features: [
      "200 thumbnails",
      "Unlimited storage",
      "Email Support",
      "Cloud Storage",
    ],
    button: (
      <Button className='w-full' variant='default' size='lg'>
        Select Plan
      </Button>
    ),
  },
  {
    title: "Professional",
    price: "$49",
    monthly: true,
    popular: false,
    features: [
      "Unlimited thumbnails",
      "Unlimited storage",
      "Email Support",
      "Cloud Storage",
      "Premium features",
    ],
  },
];

export default function Pricing() {
  return (
    <section className='overflow-hidden h-2/3 py-5'>
      <div className='relative'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-300 via-red-100 to-red-50 opacity-60 '></div>
      </div>
      <div className='text-center max-w-screen-lg mx-auto flex flex-col items-center justify-center py-12 text-pretty'>
        <h2 className='text-5xl font-bold tracking-tighter pb-2 px-3'>
          Flexible Price Plans
        </h2>

        <p className='text-muted-foreground text-xl'>
          Choose the perfect plan for your needs
        </p>
      </div>

      <div className='max-w-screen-lg px-8 lg:px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-3 place-items-center gap-10 mx-auto pb-10 pt-5'>
        {plans.map((plan) => (
          <Card
            key={plan.title}
            className={cn(
              "w-72 md:w-80 lg:w-72 xl:w-80",
              plan.popular
                ? "ring-2 ring-purple-400 bg-purple-50 scale-110"
                : ""
            )}
          >
            <div className='relative'>
              {plan.popular && (
                <div className='absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-sm'>
                  Popular
                </div>
              )}
            </div>
            <CardHeader>
              <CardTitle className='text-2xl'>{plan.title}</CardTitle>
              <CardDescription className='text-foreground text-5xl font-bold'>
                {plan.price}
                <span className='text-muted-foreground text-sm'>
                  /{plan.monthly ? "month" : "year"}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className='h-44'>
              <ul className='text-muted-foreground list-inside text-md leading-loose'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-center gap-1'>
                    <Play size='14' />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={cn(
                  "w-full",
                  plan.popular? "bg-purple-500 hover:bg-purple-400" : "hover:bg-accent"
                )}
                variant={plan.popular ? "default" : "outline"}
                size='lg'
              >
                Select Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
