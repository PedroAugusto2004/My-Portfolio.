import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [\u0026_svg]:pointer-events-none [\u0026_svg]:size-4 [\u0026_svg]:shrink-0 glass-button",
  {
    variants: {
      variant: {
        default: "bg-primary/40 text-primary-foreground hover:bg-primary/60 border border-primary/30",
        destructive:
          "bg-destructive/40 text-destructive-foreground hover:bg-destructive/60 border border-destructive/30",
        outline:
          "border border-input bg-background/30 hover:bg-accent/40 hover:text-accent-foreground",
        secondary:
          "bg-secondary/40 text-secondary-foreground hover:bg-secondary/60 border border-secondary/30",
        ghost: "hover:bg-accent/40 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline backdrop-blur-0",
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
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
