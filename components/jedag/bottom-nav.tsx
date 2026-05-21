'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home, Route, QrCode, Bell, User } from 'lucide-react'

interface NavItem {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  isFab?: boolean
}

const navItems: NavItem[] = [
  { href: '/', label: 'Beranda', icon: Home },
  { href: '/jejak', label: 'Jejak', icon: Route },
  { href: '/scan', label: 'Scan', icon: QrCode, isFab: true },
  { href: '/notifikasi', label: 'Notifikasi', icon: Bell },
  { href: '/profil', label: 'Profil', icon: User },
]

export function BottomNav() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-ink-100 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-[72px] max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          if (item.isFab) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center -mt-6"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-emerald-700 text-white shadow-brand border-[3px] border-white press-feedback">
                  <Icon className="h-6 w-6" />
                </div>
              </Link>
            )
          }
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 px-3 py-2 press-feedback"
            >
              <Icon 
                className={cn(
                  'h-6 w-6 transition-colors',
                  isActive ? 'text-emerald-700' : 'text-ink-500'
                )} 
                strokeWidth={isActive ? 2.25 : 1.75}
              />
              <span 
                className={cn(
                  'text-[10px] font-medium transition-colors',
                  isActive ? 'text-emerald-700' : 'text-ink-500'
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
