import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 glass-button",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/40 text-primary-foreground hover:bg-primary/60",
        secondary:
          "border-transparent bg-secondary/40 text-secondary-foreground hover:bg-secondary/60",
        destructive:
          "border-transparent bg-destructive/40 text-destructive-foreground hover:bg-destructive/60",
        outline: "text-foreground bg-background/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
