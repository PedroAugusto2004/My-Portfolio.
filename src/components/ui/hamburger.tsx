import React from "react";
import { cn } from "@/lib/utils";

interface HamburgerProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
}

export const Hamburger = React.forwardRef<HTMLDivElement, HamburgerProps>(
    ({ isOpen, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "group relative flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full hover:bg-accent/10 transition-colors",
                    className
                )}
                {...props}
            >
                <div
                    className={cn(
                        "absolute h-[2px] w-6 bg-foreground rounded-full transition-all duration-300 ease-in-out",
                        isOpen
                            ? "top-1/2 -translate-y-1/2 rotate-45 delay-75"
                            : "top-[16px] delay-0"
                    )}
                />
                <div
                    className={cn(
                        "absolute h-[2px] w-6 bg-foreground rounded-full transition-all duration-300 ease-in-out",
                        isOpen
                            ? "opacity-0 scale-0"
                            : "top-1/2 -translate-y-1/2 opacity-100 scale-100 delay-75"
                    )}
                />
                <div
                    className={cn(
                        "absolute h-[2px] w-6 bg-foreground rounded-full transition-all duration-300 ease-in-out",
                        isOpen
                            ? "bottom-1/2 translate-y-1/2 -rotate-45 delay-75"
                            : "bottom-[16px] delay-0"
                    )}
                />
            </div>
        );
    }
);
Hamburger.displayName = "Hamburger";
