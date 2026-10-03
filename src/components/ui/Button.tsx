import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-[#ed1c24] text-white hover:bg-[#ff2a1f] shadow-md hover:shadow-lg",
        primary: "bg-[#ed1c24] text-white hover:bg-[#ff2a1f] shadow-md hover:shadow-lg",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 text-zinc-800 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
        secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700",
        ghost: "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-white/10 dark:hover:text-white",
        link: "text-[#ed1c24] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-full px-3.5 text-xs",
        md: "h-10 px-5 py-2",
        lg: "h-12 rounded-full px-8 text-base",
        xl: "h-14 rounded-full px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  icon?: string;
  ariaLabel?: string;
  dataCursor?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, icon, ariaLabel, dataCursor, children, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          aria-label={ariaLabel}
          data-cursor={dataCursor}
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        aria-label={ariaLabel}
        data-cursor={dataCursor}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
