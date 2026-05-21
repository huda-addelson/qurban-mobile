'use client'

import Link from 'next/link'
import { 
  BottomNav, 
  JedagCard, 
  JedagBadge,
} from '@/components/jedag'
import { 
  ArrowLeft,
  Check,
  Truck,
  Video,
  Package,
  Clock
} from 'lucide-react'
import { formatRelativeTime } from '@/lib/format'

const notifications = [
  {
    id: 1,
    type: 'update',
    title: '"Barokah" sedang dalam perjalanan',
    description: 'Berangkat dari Malang menuju Surabaya',
    time: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: false,
    icon: Truck,
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 2,
    type: 'live',
    title: 'Live Camera tersedia',
    description: 'Anda dapat memantau perjalanan secara real-time',
    time: new Date(Date.now() - 3 * 60 * 60 * 1000),
    read: false,
    icon: Video,
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 3,
    type: 'success',
    title: 'Pemeriksaan kesehatan selesai',
    description: '"Barokah" dinyatakan sehat oleh drh. Ahmad',
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
    read: true,
    icon: Check,
    color: 'bg-leaf-100 text-leaf-700',
  },
  {
    id: 4,
    type: 'reminder',
    title: 'Pengingat: 23 hari menuju Idul Adha',
    description: 'Pastikan semua persiapan qurban sudah lengkap',
    time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    read: true,
    icon: Clock,
    color: 'bg-gold-100 text-gold-700',
  },
  {
    id: 5,
    type: 'update',
    title: '"Sakinah" terdaftar di peternakan',
    description: 'Kambing Etawa dari Peternakan Barokah, Pasuruan',
    time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    read: true,
    icon: Package,
    color: 'bg-forest-100 text-forest-700',
  },
]

export default function NotifikasiPage() {
  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="min-h-screen bg-off-white pb-24">
      {/* Header */}
      <header className="bg-white border-b border-ink-100 pt-[env(safe-area-inset-top)] px-5 pb-4">
        <div className="flex items-center gap-4">
          <Link href="/home" className="p-2 -ml-2 rounded-full hover:bg-ink-100 transition-colors">
            <ArrowLeft className="h-5 w-5 text-ink-700" strokeWidth={1.75} />
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-ink-900">Notifikasi</h1>
          </div>
          {unreadCount > 0 && (
            <JedagBadge variant="live">{unreadCount} baru</JedagBadge>
          )}
        </div>
      </header>

      {/* Notifications List */}
      <div className="px-5 py-4 space-y-3">
        {notifications.map((notification) => {
          const Icon = notification.icon
          
          return (
            <JedagCard 
              key={notification.id}
              className={!notification.read ? 'ring-2 ring-emerald-200' : ''}
            >
              <div className="flex gap-4 p-4">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center shrink-0 ${notification.color}`}>
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className={`font-semibold text-ink-900 ${!notification.read ? '' : 'font-medium'}`}>
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    )}
                  </div>
                  <p className="text-sm text-ink-500 mt-0.5">{notification.description}</p>
                  <p className="text-xs text-ink-400 mt-2">{formatRelativeTime(notification.time)}</p>
                </div>
              </div>
            </JedagCard>
          )
        })}
      </div>

      <BottomNav />
    </div>
  )
}
