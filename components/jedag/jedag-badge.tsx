'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Check, Circle } from 'lucide-react'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-semibold text-xs rounded-full',
  {
    variants: {
      variant: {
        verified: 'bg-emerald-100 text-emerald-700 ring-2 ring-emerald-200',
        live: 'bg-red-100 text-red-600',
        warning: 'bg-gold-100 text-gold-700',
        location: 'bg-ink-100 text-ink-700',
        info: 'bg-blue-100 text-blue-700',
        syariah: 'bg-emerald-100 text-emerald-700',
        sehat: 'bg-leaf-100 text-leaf-700',
      },
      size: {
        sm: 'px-2 py-0.5 text-[10px]',
        md: 'px-3 py-1 text-xs',
        lg: 'px-4 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'info',
      size: 'md',
    },
  }
)

export interface JedagBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
}

const JedagBadge = React.forwardRef<HTMLDivElement, JedagBadgeProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    const getDefaultIcon = () => {
      switch (variant) {
        case 'verified':
        case 'syariah':
        case 'sehat':
          return <Check className="h-3 w-3" strokeWidth={2.5} />
        case 'live':
          return (
            <span className="relative flex h-2 w-2">
              <span className="animate-live-pulse absolute inline-flex h-full w-full rounded-full bg-red-500" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
          )
        default:
          return null
      }
    }

    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {icon ?? getDefaultIcon()}
        {children}
      </div>
    )
  }
)
JedagBadge.displayName = 'JedagBadge'

export { JedagBadge, badgeVariants }
