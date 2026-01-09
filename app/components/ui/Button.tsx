"use client"

import { type ButtonHTMLAttributes, forwardRef } from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-purple-900 hover:bg-purple-800 text-white font-bold",
        default_orange: "button-gradient-orange",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white",
        ghost: "bg-transparent hover:bg-zinc-800 text-zinc-400 hover:text-white",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  // Check if button wants gradient border (transparent background with gradient border)
  const wantsGradientBorder = (variant === "default" || variant === undefined) && className?.includes("bg-transparent")
  
  // For gradient border button (special case)
  if (wantsGradientBorder) {
    // Extract hover classes that should be on the wrapper
    const wrapperClasses = className?.split(" ").filter(c => 
      c.includes("hover:") || c.includes("transition") || c.includes("group") || c.includes("scale")
    ).join(" ") || ""
    
    // Base styles without variant background
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
    
    return (
      <div className={cn("group transition-transform duration-300 hover:scale-105 active:scale-95 inline-block", wrapperClasses)}>
        <div 
          className="rounded-md p-[2px] bg-gradient-to-r from-orange-500 to-purple-600"
        >
          <button
            ref={ref}
            className={cn(
              baseStyles,
              buttonVariants({ size }),
              "rounded-md w-full border-0 outline-none focus-visible:ring-0 relative z-10",
              className,
              "!bg-[rgb(5,2,6)]"
            )}
            {...props}
          >
            {props.children}
          </button>
        </div>
      </div>
    )
  }

  // For other variants or buttons with custom backgrounds, render normally
  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button, buttonVariants }

