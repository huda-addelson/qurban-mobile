'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  xs: 'h-8 w-8 text-xs',
  sm: 'h-9 w-9 text-sm',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-20 w-20 text-xl',
}

const JedagAvatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = '', fallback, size = 'md', ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false)
    
    // Generate initials from fallback or alt
    const initials = React.useMemo(() => {
      const text = fallback || alt
      if (!text) return '?'
      return text
        .split(' ')
        .map(word => word[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    }, [fallback, alt])
    
    // Generate a consistent background color from the initials
    const bgColor = React.useMemo(() => {
      const colors = [
        'bg-emerald-100 text-emerald-700',
        'bg-forest-100 text-forest-700',
        'bg-leaf-100 text-leaf-700',
        'bg-gold-100 text-gold-700',
        'bg-sand-200 text-ink-700',
      ]
      const charCode = initials.charCodeAt(0) || 0
      return colors[charCode % colors.length]
    }, [initials])
    
    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-full overflow-hidden shrink-0',
          sizeClasses[size],
          !src || hasError ? bgColor : '',
          className
        )}
        {...props}
      >
        {src && !hasError ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full font-semibold">
            {initials}
          </div>
        )}
      </div>
    )
  }
)
JedagAvatar.displayName = 'JedagAvatar'

// Avatar Group
interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number
  children: React.ReactNode
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, max = 4, children, ...props }, ref) => {
    const childArray = React.Children.toArray(children)
    const visibleChildren = childArray.slice(0, max)
    const remainingCount = childArray.length - max
    
    return (
      <div
        ref={ref}
        className={cn('flex -space-x-3', className)}
        {...props}
      >
        {visibleChildren.map((child, index) => (
          <div key={index} className="ring-2 ring-white rounded-full">
            {child}
          </div>
        ))}
        {remainingCount > 0 && (
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-ink-100 text-ink-700 text-sm font-semibold ring-2 ring-white">
            +{remainingCount}
          </div>
        )}
      </div>
    )
  }
)
AvatarGroup.displayName = 'AvatarGroup'

export { JedagAvatar, AvatarGroup }
