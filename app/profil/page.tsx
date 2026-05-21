'use client'

import Link from 'next/link'
import { 
  BottomNav, 
  JedagCard, 
  CardBody,
  JedagAvatar,
  JedagBadge,
  JedagButton
} from '@/components/jedag'
import { 
  Bell,
  Settings,
  ChevronRight,
  Package,
  Heart,
  FileText,
  HelpCircle,
  LogOut,
  Gift
} from 'lucide-react'

const menuItems = [
  { icon: Package, label: 'Qurban Saya', href: '/qurban', badge: '2' },
  { icon: Gift, label: 'Qurban Wrapped', href: '/wrapped', badge: 'Baru' },
  { icon: Heart, label: 'Favorit', href: '/favorit' },
  { icon: FileText, label: 'Riwayat', href: '/riwayat' },
  { icon: Bell, label: 'Notifikasi', href: '/notifikasi' },
  { icon: Settings, label: 'Pengaturan', href: '/pengaturan' },
  { icon: HelpCircle, label: 'Bantuan', href: '/bantuan' },
]

export default function ProfilPage() {
  return (
    <div className="min-h-screen bg-off-white pb-24">
      {/* Header */}
      <div className="bg-emerald-700 pt-[env(safe-area-inset-top)] pb-20 px-5">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-white">Profil</h1>
          <Link href="/pengaturan" className="p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors">
            <Settings className="h-5 w-5 text-white" strokeWidth={1.75} />
          </Link>
        </div>
      </div>

      {/* Profile Card */}
      <div className="px-5 -mt-16">
        <JedagCard>
          <CardBody className="text-center">
            <JedagAvatar 
              fallback="Ahmad Fauzi"
              size="xl"
              className="mx-auto -mt-12 border-4 border-white"
            />
            <h2 className="text-xl font-bold text-ink-900 mt-3">Ahmad Fauzi</h2>
            <p className="text-ink-500">ahmad.fauzi@email.com</p>
            
            <div className="flex justify-center gap-2 mt-3">
              <JedagBadge variant="verified">Terverifikasi</JedagBadge>
              <JedagBadge variant="gold" className="bg-gold-100 text-gold-700">
                Member Sejak 2022
              </JedagBadge>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-ink-100">
              <div>
                <p className="text-2xl font-bold text-emerald-700">5</p>
                <p className="text-xs text-ink-500">Total Qurban</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-700">3</p>
                <p className="text-xs text-ink-500">Tahun</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-700">12</p>
                <p className="text-xs text-ink-500">Keluarga</p>
              </div>
            </div>
          </CardBody>
        </JedagCard>
      </div>

      {/* Menu Items */}
      <div className="px-5 mt-6">
        <JedagCard>
          <div className="divide-y divide-ink-100">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-4 p-4 hover:bg-ink-50 transition-colors press-feedback"
              >
                <div className="h-10 w-10 rounded-full bg-ink-100 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-ink-700" strokeWidth={1.75} />
                </div>
                <span className="flex-1 font-medium text-ink-900">{item.label}</span>
                {item.badge && (
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    item.badge === 'Baru' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-ink-100 text-ink-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="h-5 w-5 text-ink-300" strokeWidth={1.75} />
              </Link>
            ))}
          </div>
        </JedagCard>

        {/* Logout */}
        <JedagButton 
          variant="ghost" 
          fullWidth 
          className="mt-4 text-error hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" strokeWidth={1.75} />
          Keluar
        </JedagButton>

        {/* Version */}
        <p className="text-center text-xs text-ink-400 mt-6">
          Jejak Daging v1.0.0
        </p>
      </div>

      <BottomNav />
    </div>
  )
}
