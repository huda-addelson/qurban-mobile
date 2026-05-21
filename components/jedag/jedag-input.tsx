'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'

interface JedagInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

const JedagInput = React.forwardRef<HTMLInputElement, JedagInputProps>(
  ({ className, label, hint, error, leadingIcon, trailingIcon, type, ...props }, ref) => {
    const id = React.useId()
    const hasError = Boolean(error)
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={id} 
            className="block text-sm font-semibold text-ink-900 mb-2"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leadingIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-500">
              {leadingIcon}
            </div>
          )}
          
          <input
            type={type}
            id={id}
            ref={ref}
            className={cn(
              'flex h-12 w-full rounded-xl bg-ink-100 px-4 text-base text-ink-900 placeholder:text-ink-500 transition-all duration-200',
              'focus:bg-white focus:ring-[1.5px] focus:ring-inset focus:ring-emerald-700 focus:outline-none',
              hasError && 'bg-red-50 focus:ring-error',
              leadingIcon && 'pl-11',
              trailingIcon && 'pr-11',
              className
            )}
            {...props}
          />
          
          {trailingIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-500">
              {trailingIcon}
            </div>
          )}
        </div>
        
        {(hint || error) && (
          <p className={cn(
            'mt-2 text-sm',
            hasError ? 'text-error' : 'text-ink-500'
          )}>
            {error || hint}
          </p>
        )}
      </div>
    )
  }
)
JedagInput.displayName = 'JedagInput'

// Search Input Variant
interface SearchInputProps extends Omit<JedagInputProps, 'leadingIcon'> {}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <JedagInput
        ref={ref}
        type="search"
        leadingIcon={<Search className="h-5 w-5" />}
        placeholder="Cari..."
        className={className}
        {...props}
      />
    )
  }
)
SearchInput.displayName = 'SearchInput'

export { JedagInput, SearchInput }
