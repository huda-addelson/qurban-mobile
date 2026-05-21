'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary'
  size?: 'sm' | 'md' | 'lg'
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-9 w-9',
      md: 'h-11 w-11',
      lg: 'h-14 w-14',
    }
    
    const variantClasses = {
      default: 'bg-white text-ink-700 shadow-md hover:bg-ink-100 active:bg-ink-200',
      primary: 'bg-emerald-700 text-white shadow-brand hover:bg-emerald-800 active:bg-emerald-900',
    }
    
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-all duration-250 press-feedback focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
IconButton.displayName = 'IconButton'

// FAB (Floating Action Button)
interface FABProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  withBorder?: boolean
}

const FAB = React.forwardRef<HTMLButtonElement, FABProps>(
  ({ className, withBorder = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center h-14 w-14 rounded-full bg-emerald-700 text-white shadow-brand hover:bg-emerald-800 active:bg-emerald-900 transition-all duration-250 press-feedback focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2',
          withBorder && 'border-[3px] border-white',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
FAB.displayName = 'FAB'

export { IconButton, FAB }
