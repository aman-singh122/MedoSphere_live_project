import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium medical-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-medical-primary text-white hover:bg-medical-primary/90 medical-shadow",
        destructive: "bg-medical-error text-white hover:bg-medical-error/90",
        outline: "border-2 border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white",
        secondary: "bg-medical-secondary text-white hover:bg-medical-secondary/90",
        ghost: "hover:bg-medical-primary/10 hover:text-medical-primary",
        link: "text-medical-primary underline-offset-4 hover:underline",
        hero: "accent-gradient text-white hover:scale-105 transform medical-shadow font-semibold",
        success: "success-gradient text-white hover:opacity-90",
        medical: "medical-gradient text-white hover:opacity-90 medical-shadow",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
