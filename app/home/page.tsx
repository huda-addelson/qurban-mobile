'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  BottomNav, 
  JedagBadge, 
  JedagButton, 
  JedagCard, 
  CardBody,
  JedagChip,
  StepDots,
  SearchInput
} from '@/components/jedag'
import { 
  Bell, 
  QrCode, 
  ChevronRight, 
  Clock,
  MapPin,
  Truck,
  Shield,
  Video
} from 'lucide-react'
import { formatRelativeTime } from '@/lib/format'

// Mock data
const activeQurbans = [
  {
    id: 'JD-0931',
    name: 'Barokah',
    species: 'Sapi Limousin',
    weight: 380,
    status: 'on_the_way',
    progress: 3,
    totalSteps: 7,
    badges: ['syariah', 'sehat'],
    liveTracking: true,
    lastUpdate: new Date(Date.now() - 2 * 60 * 60 * 1000),
    location: 'Malang',
    image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&h=300&fit=crop',
  },
  {
    id: 'JD-0847',
    name: 'Sakinah',
    species: 'Kambing Etawa',
    weight: 45,
    status: 'at_farm',
    progress: 1,
    totalSteps: 7,
    badges: ['sehat'],
    liveTracking: false,
    lastUpdate: new Date(Date.now() - 24 * 60 * 60 * 1000),
    location: 'Pasuruan',
    image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=400&h=300&fit=crop',
  },
]

const statusLabels: Record<string, { label: string; color: string }> = {
  at_farm: { label: 'Di Peternakan', color: 'bg-gold-100 text-gold-700' },
  on_the_way: { label: 'Sedang Diantar', color: 'bg-emerald-100 text-emerald-700' },
  slaughter: { label: 'Proses Sembelih', color: 'bg-leaf-100 text-leaf-700' },
  distribution: { label: 'Distribusi', color: 'bg-forest-100 text-forest-700' },
  completed: { label: 'Selesai', color: 'bg-ink-100 text-ink-700' },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-off-white pb-24">
      {/* Header */}
      <header className="bg-emerald-700 text-white pt-[env(safe-area-inset-top)] pb-6 px-5">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-emerald-100 text-sm">Assalamualaikum,</p>
            <h1 className="text-xl font-bold">Ahmad Fauzi</h1>
          </div>
          <button className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
            <Bell className="h-6 w-6" strokeWidth={1.75} />
            <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-emerald-700" />
          </button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <SearchInput 
            placeholder="Cari ID atau nama hewan..." 
            className="bg-white/10 text-white placeholder:text-emerald-200 focus:bg-white focus:text-ink-900 focus:placeholder:text-ink-500"
          />
        </div>
      </header>

      {/* Quick Actions */}
      <section className="px-5 -mt-3 mb-6">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <div className="grid grid-cols-4 gap-2">
            <Link href="/scan" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-ink-50 transition-colors press-feedback">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <QrCode className="h-6 w-6 text-emerald-700" strokeWidth={1.75} />
              </div>
              <span className="text-xs font-medium text-ink-700">Scan QR</span>
            </Link>
            <Link href="/jejak" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-ink-50 transition-colors press-feedback">
              <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center">
                <Truck className="h-6 w-6 text-forest-700" strokeWidth={1.75} />
              </div>
              <span className="text-xs font-medium text-ink-700">Lacak</span>
            </Link>
            <Link href="/live" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-ink-50 transition-colors press-feedback">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center relative">
                <Video className="h-6 w-6 text-red-600" strokeWidth={1.75} />
                <span className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-red-500 rounded-full border-2 border-white" />
              </div>
              <span className="text-xs font-medium text-ink-700">Live</span>
            </Link>
            <Link href="/syariah" className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-ink-50 transition-colors press-feedback">
              <div className="h-12 w-12 rounded-full bg-gold-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-gold-700" strokeWidth={1.75} />
              </div>
              <span className="text-xs font-medium text-ink-700">Syariah</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Active Qurban */}
      <section className="px-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-ink-900">Qurban Aktif</h2>
          <Link href="/qurban" className="text-sm text-emerald-700 font-medium flex items-center gap-1">
            Lihat Semua <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {activeQurbans.map((qurban) => (
            <TrackingCard key={qurban.id} qurban={qurban} />
          ))}
        </div>
      </section>

      {/* Idul Adha Countdown */}
      <section className="px-5 mb-6">
        <JedagCard variant="hero" className="overflow-hidden">
          <div className="p-5 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <p className="text-sm text-ink-600 mb-1">Menuju Idul Adha 1446 H</p>
              <h3 className="text-2xl font-bold text-ink-900 mb-3">23 Hari Lagi</h3>
              <div className="flex gap-3">
                <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-2xl font-bold text-emerald-700">23</span>
                  <span className="text-xs text-ink-500 block">Hari</span>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-2xl font-bold text-emerald-700">14</span>
                  <span className="text-xs text-ink-500 block">Jam</span>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-2xl font-bold text-emerald-700">32</span>
                  <span className="text-xs text-ink-500 block">Menit</span>
                </div>
              </div>
            </div>
          </div>
        </JedagCard>
      </section>

      {/* Tips Section */}
      <section className="px-5">
        <h2 className="text-lg font-semibold text-ink-900 mb-4">Tips Qurban</h2>
        <div className="overflow-x-auto -mx-5 px-5 pb-2 scrollbar-hide">
          <div className="flex gap-3" style={{ width: 'max-content' }}>
            {[
              { title: 'Cara Memilih Hewan Qurban yang Baik', category: 'Panduan' },
              { title: 'Syarat Sah Hewan Qurban', category: 'Syariah' },
              { title: 'Waktu Pelaksanaan Qurban', category: 'Fiqih' },
            ].map((tip, i) => (
              <div key={i} className="w-64 bg-white rounded-xl shadow-sm p-4 shrink-0">
                <JedagChip variant="leaf" className="mb-2 text-xs h-6">{tip.category}</JedagChip>
                <h4 className="font-semibold text-ink-900 text-sm">{tip.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}

// Tracking Card Component
interface TrackingCardProps {
  qurban: typeof activeQurbans[0]
}

function TrackingCard({ qurban }: TrackingCardProps) {
  const status = statusLabels[qurban.status]

  return (
    <Link href={`/jejak/${qurban.id}`}>
      <JedagCard className="overflow-hidden press-feedback">
        {/* Image */}
        <div className="relative h-48">
          <Image
            src={qurban.image}
            alt={qurban.name}
            fill
            className="object-cover"
          />
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Top badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {qurban.liveTracking && (
              <JedagBadge variant="live">LIVE</JedagBadge>
            )}
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${status.color}`}>
              {status.label}
            </span>
          </div>
          
          {/* QR Button */}
          <button className="absolute top-3 right-3 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
            <QrCode className="h-5 w-5 text-ink-700" strokeWidth={1.75} />
          </button>
          
          {/* Bottom info */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <h3 className="text-lg font-bold">{`"${qurban.name}"`}</h3>
            <p className="text-sm text-white/80">{qurban.species} &middot; {qurban.weight} kg</p>
          </div>
        </div>
        
        {/* Progress */}
        <CardBody className="space-y-3">
          <StepDots total={qurban.totalSteps} current={qurban.progress} variant="compact" />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-sm text-ink-500">
                <Clock className="h-4 w-4" strokeWidth={1.75} />
                {formatRelativeTime(qurban.lastUpdate)}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-ink-500">
                <MapPin className="h-4 w-4" strokeWidth={1.75} />
                {qurban.location}
              </div>
            </div>
            
            <div className="flex gap-1.5">
              {qurban.badges.map((badge) => (
                <JedagBadge key={badge} variant={badge as 'syariah' | 'sehat'} size="sm">
                  {badge === 'syariah' ? 'Syariah' : 'Sehat'}
                </JedagBadge>
              ))}
            </div>
          </div>
        </CardBody>
      </JedagCard>
    </Link>
  )
}
