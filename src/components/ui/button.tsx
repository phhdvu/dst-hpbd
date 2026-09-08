import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-base font-extrabold tracking-wide transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer border-2 border-foreground",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[5px_5px_0_0_var(--foreground)] hover:shadow-[2px_2px_0_0_var(--foreground)] hover:translate-x-[3px] hover:translate-y-[3px]",
        destructive:
          "bg-destructive text-white shadow-[5px_5px_0_0_var(--foreground)] hover:shadow-[2px_2px_0_0_var(--foreground)] hover:translate-x-[3px] hover:translate-y-[3px]",
        outline:
          "bg-background text-foreground shadow-[5px_5px_0_0_var(--foreground)] hover:shadow-[2px_2px_0_0_var(--foreground)] hover:translate-x-[3px] hover:translate-y-[3px]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[5px_5px_0_0_var(--foreground)] hover:shadow-[2px_2px_0_0_var(--foreground)] hover:translate-x-[3px] hover:translate-y-[3px]",
        ghost:
          "border-transparent shadow-none hover:bg-accent/15 hover:text-accent-foreground",
        link: "border-transparent shadow-none text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 rounded-xl gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-2xl px-6 has-[>svg]:px-5",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
