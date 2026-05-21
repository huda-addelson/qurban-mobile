'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

// Card Root
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'hero'
}

const JedagCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variantClasses = {
      default: 'bg-card shadow-md',
      elevated: 'bg-card shadow-lg',
      hero: 'bg-sand-200 shadow-lg',
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl overflow-hidden',
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
JedagCard.displayName = 'JedagCard'

// Card Media
interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  ratio?: '1:1' | '4:3' | '16:9'
  overlay?: React.ReactNode
}

const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  ({ className, src, alt, ratio = '4:3', overlay, ...props }, ref) => {
    const ratioClasses = {
      '1:1': 'aspect-square',
      '4:3': 'aspect-[4/3]',
      '16:9': 'aspect-video',
    }
    
    return (
      <div
        ref={ref}
        className={cn('relative overflow-hidden', ratioClasses[ratio], className)}
        {...props}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
        {overlay && (
          <div className="absolute inset-0">
            {overlay}
          </div>
        )}
      </div>
    )
  }
)
CardMedia.displayName = 'CardMedia'

// Card Body
const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-4', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CardBody.displayName = 'CardBody'

// Card Title
const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn('text-lg font-semibold text-ink-900 leading-tight text-balance', className)}
        {...props}
      >
        {children}
      </h3>
    )
  }
)
CardTitle.displayName = 'CardTitle'

// Card Meta
const CardMeta = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-1.5 text-sm text-ink-500 mt-1', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CardMeta.displayName = 'CardMeta'

// Card Action
interface CardActionProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
}

const CardAction = React.forwardRef<HTMLDivElement, CardActionProps>(
  ({ className, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center text-ink-500',
          className
        )}
        {...props}
      >
        {icon ?? <ChevronRight className="h-5 w-5" />}
        {children}
      </div>
    )
  }
)
CardAction.displayName = 'CardAction'

export { JedagCard, CardMedia, CardBody, CardTitle, CardMeta, CardAction }
