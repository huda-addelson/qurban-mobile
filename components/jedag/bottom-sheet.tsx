'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface BottomSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  title?: string
}

const BottomSheet: React.FC<BottomSheetProps> = ({ 
  open, 
  onOpenChange, 
  children,
  title 
}) => {
  // Prevent body scroll when sheet is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
          />
          
          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ 
              type: 'spring',
              damping: 30,
              stiffness: 300,
              duration: 0.32
            }}
            className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-[28px] max-h-[90vh] overflow-hidden"
          >
            {/* Drag Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="h-1 w-10 rounded-full bg-ink-300" />
            </div>
            
            {/* Header */}
            {title && (
              <div className="flex items-center justify-between px-5 pb-4">
                <h2 className="text-lg font-semibold text-ink-900">{title}</h2>
                <button
                  onClick={() => onOpenChange(false)}
                  className="p-2 -mr-2 rounded-full hover:bg-ink-100 transition-colors"
                >
                  <X className="h-5 w-5 text-ink-500" />
                </button>
              </div>
            )}
            
            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-4rem)] overscroll-contain">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export { BottomSheet }
