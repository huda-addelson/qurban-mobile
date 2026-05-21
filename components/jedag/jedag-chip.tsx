'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

const chipVariants = cva(
  'inline-flex items-center justify-center gap-1.5 font-medium text-sm rounded-full transition-all duration-200 press-feedback',
  {
    variants: {
      variant: {
        default: 'bg-ink-100 text-ink-700 hover:bg-ink-200',
        active: 'bg-emerald-100 text-emerald-700',
        solid: 'bg-emerald-700 text-white',
        leaf: 'bg-leaf-100 text-leaf-700',
        gold: 'bg-gold-100 text-gold-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface JedagChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  removable?: boolean
  onRemove?: () => void
}

const JedagChip = React.forwardRef<HTMLDivElement, JedagChipProps>(
  ({ className, variant, removable, onRemove, children, onClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          chipVariants({ variant }),
          'h-8 px-3.5',
          onClick && 'cursor-pointer',
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
        {removable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onRemove?.()
            }}
            className="ml-0.5 hover:bg-black/10 rounded-full p-0.5 transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    )
  }
)
JedagChip.displayName = 'JedagChip'

export { JedagChip, chipVariants }
