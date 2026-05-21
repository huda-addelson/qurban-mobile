'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

// Progress Bar
interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    
    return (
      <div
        ref={ref}
        className={cn('h-1.5 w-full bg-ink-100 rounded-full overflow-hidden', className)}
        {...props}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-700 to-emerald-500 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    )
  }
)
Progress.displayName = 'Progress'

// Step Dots
interface StepDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  total: number
  current: number
  variant?: 'default' | 'compact'
}

const StepDots = React.forwardRef<HTMLDivElement, StepDotsProps>(
  ({ className, total, current, variant = 'default', ...props }, ref) => {
    const dotSize = variant === 'compact' ? 'h-2 w-2' : 'h-3 w-3'
    const activeRingSize = variant === 'compact' ? 'ring-2' : 'ring-4'
    
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...props}
      >
        {Array.from({ length: total }).map((_, index) => {
          const isDone = index < current
          const isCurrent = index === current
          const isPending = index > current
          
          return (
            <React.Fragment key={index}>
              {/* Connector Line */}
              {index > 0 && (
                <div
                  className={cn(
                    'flex-1 h-0.5 min-w-3',
                    isDone || isCurrent ? 'bg-emerald-500' : 'bg-ink-200'
                  )}
                />
              )}
              
              {/* Dot */}
              <div
                className={cn(
                  'rounded-full transition-all duration-300',
                  dotSize,
                  isDone && 'bg-emerald-700',
                  isCurrent && `bg-emerald-700 ${activeRingSize} ring-emerald-100`,
                  isPending && 'bg-ink-200'
                )}
              />
            </React.Fragment>
          )
        })}
      </div>
    )
  }
)
StepDots.displayName = 'StepDots'

export { Progress, StepDots }
