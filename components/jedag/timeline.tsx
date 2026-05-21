'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

type TimelineStepState = 'done' | 'current' | 'pending'

interface TimelineContextValue {
  steps: string[]
}

const TimelineContext = React.createContext<TimelineContextValue | null>(null)

// Timeline Root
interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, ...props }, ref) => {
    const steps = React.Children.toArray(children).map((_, index) => String(index))
    
    return (
      <TimelineContext.Provider value={{ steps }}>
        <div
          ref={ref}
          className={cn('relative flex flex-col', className)}
          {...props}
        >
          {children}
        </div>
      </TimelineContext.Provider>
    )
  }
)
Timeline.displayName = 'Timeline'

// Timeline Step
interface TimelineStepProps extends React.HTMLAttributes<HTMLDivElement> {
  state: TimelineStepState
  icon: React.ReactNode
  title: string
  time?: string
  meta?: string
  live?: boolean
  isLast?: boolean
}

const TimelineStep = React.forwardRef<HTMLDivElement, TimelineStepProps>(
  ({ className, state, icon, title, time, meta, live, isLast = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('relative flex gap-4 pb-6', isLast && 'pb-0', className)}
        {...props}
      >
        {/* Connector Line */}
        {!isLast && (
          <div
            className={cn(
              'absolute left-5 top-10 w-0.5 h-[calc(100%-2rem)]',
              state === 'pending' ? 'border-l-2 border-dashed border-ink-300' : 'bg-emerald-500'
            )}
          />
        )}
        
        {/* Icon Circle */}
        <div
          className={cn(
            'relative z-10 flex items-center justify-center h-10 w-10 rounded-full shrink-0',
            state === 'done' && 'bg-emerald-700 text-white',
            state === 'current' && 'bg-emerald-100 text-emerald-700 ring-4 ring-emerald-100',
            state === 'pending' && 'bg-ink-100 text-ink-300'
          )}
        >
          {state === 'done' ? (
            <Check className="h-5 w-5" strokeWidth={2.5} />
          ) : (
            <span className="[&>svg]:h-5 [&>svg]:w-5">{icon}</span>
          )}
          
          {/* Live Pulse */}
          {live && state === 'current' && (
            <span className="absolute inset-0 rounded-full animate-live-pulse bg-emerald-500" />
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 pt-1.5">
          <div className="flex items-center gap-2">
            <h4 className={cn(
              'font-semibold',
              state === 'pending' ? 'text-ink-300' : 'text-ink-900'
            )}>
              {title}
            </h4>
            {live && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-[10px] font-bold uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                </span>
                LIVE
              </span>
            )}
          </div>
          
          {time && (
            <p className={cn(
              'text-sm mt-0.5',
              state === 'pending' ? 'text-ink-300' : 'text-ink-500'
            )}>
              {time}
            </p>
          )}
          
          {meta && (
            <p className={cn(
              'text-sm mt-1',
              state === 'pending' ? 'text-ink-300' : 'text-ink-500'
            )}>
              {meta}
            </p>
          )}
        </div>
      </div>
    )
  }
)
TimelineStep.displayName = 'TimelineStep'

export { Timeline, TimelineStep }
export type { TimelineStepState }
