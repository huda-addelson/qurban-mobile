'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const jedagButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-250 press-feedback disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-emerald-700 text-white hover:bg-emerald-800 active:bg-emerald-900 shadow-brand',
        secondary: 'bg-transparent text-emerald-700 border-[1.5px] border-emerald-700 hover:bg-emerald-50 active:bg-emerald-100',
        tertiary: 'bg-transparent text-emerald-700 hover:bg-emerald-50 active:bg-emerald-100',
        ghost: 'bg-ink-100 text-ink-900 hover:bg-ink-200 active:bg-ink-300',
        danger: 'bg-error text-white hover:bg-red-600 active:bg-red-700 shadow-[0_8px_20px_rgba(239,68,68,0.3)]',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-full min-w-[72px]',
        md: 'h-12 px-6 text-base rounded-full min-w-[88px]',
        lg: 'h-14 px-8 text-lg rounded-full min-w-[100px]',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface JedagButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof jedagButtonVariants> {
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const JedagButton = React.forwardRef<HTMLButtonElement, JedagButtonProps>(
  ({ className, variant, size, fullWidth, loading, icon, iconPosition = 'left', children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(jedagButtonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : (
          <>
            {icon && iconPosition === 'left' && icon}
            {children}
            {icon && iconPosition === 'right' && icon}
          </>
        )}
      </button>
    )
  }
)
JedagButton.displayName = 'JedagButton'

export { JedagButton, jedagButtonVariants }
