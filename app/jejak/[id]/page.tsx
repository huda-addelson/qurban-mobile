'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  BottomNav, 
  JedagBadge, 
  JedagButton,
  JedagCard,
  CardBody,
  Timeline,
  TimelineStep,
  BottomSheet,
  IconButton
} from '@/components/jedag'
import { 
  ArrowLeft,
  QrCode,
  Share2,
  Home,
  Truck,
  ShieldCheck,
  Package,
  Users,
  FileText,
  Video,
  MapPin,
  ChevronRight
} from 'lucide-react'

// Mock timeline data
const timelineSteps = [
  {
    id: 1,
    state: 'done' as const,
    icon: <Home strokeWidth={1.75} />,
    title: 'Terdaftar di Peternakan',
    time: '21 Mei 2024 · 09:14',
    meta: 'Peternakan Barokah, Malang',
  },
  {
    id: 2,
    state: 'done' as const,
    icon: <ShieldCheck strokeWidth={1.75} />,
    title: 'Pemeriksaan Kesehatan',
    time: '25 Mei 2024 · 14:30',
    meta: 'Dinyatakan sehat oleh drh. Ahmad Ridwan',
  },
  {
    id: 3,
    state: 'current' as const,
    icon: <Truck strokeWidth={1.75} />,
    title: 'Sedang Dalam Perjalanan',
    time: '10 Jun 2024 · 08:00',
    meta: 'Berangkat dari Malang menuju Surabaya',
    live: true,
  },
  {
    id: 4,
    state: 'pending' as const,
    icon: <Video strokeWidth={1.75} />,
    title: 'Penyembelihan Syariah',
    time: 'Estimasi: 10 Jun 2024',
    meta: 'Lokasi: RPH Surabaya',
  },
  {
    id: 5,
    state: 'pending' as const,
    icon: <Package strokeWidth={1.75} />,
    title: 'Pengemasan',
    time: '-',
    meta: '',
  },
  {
    id: 6,
    state: 'pending' as const,
    icon: <Truck strokeWidth={1.75} />,
    title: 'Distribusi',
    time: '-',
    meta: '',
  },
  {
    id: 7,
    state: 'pending' as const,
    icon: <Users strokeWidth={1.75} />,
    title: 'Diterima Penerima',
    time: '-',
    meta: '',
  },
]

const qurbanData = {
  id: 'JD-0931',
  name: 'Barokah',
  species: 'Sapi Limousin',
  weight: 380,
  age: '2 tahun 3 bulan',
  origin: 'Peternakan Barokah, Malang',
  owner: 'Ahmad Fauzi',
  image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&h=400&fit=crop',
}

export default function JejakTimelinePage() {
  const [showPassportSheet, setShowPassportSheet] = useState(false)
  const currentStep = timelineSteps.findIndex(s => s.state === 'current') + 1
  const totalSteps = timelineSteps.length

  return (
    <div className="min-h-screen bg-off-white pb-24">
      {/* Hero Header */}
      <div className="relative h-72">
        <Image
          src={qurbanData.image}
          alt={qurbanData.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        {/* Top Navigation */}
        <div className="absolute top-0 inset-x-0 p-4 pt-[calc(1rem+env(safe-area-inset-top))] flex items-center justify-between">
          <Link href="/home">
            <IconButton variant="default">
              <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
            </IconButton>
          </Link>
          <div className="flex gap-2">
            <IconButton variant="default">
              <QrCode className="h-5 w-5" strokeWidth={1.75} />
            </IconButton>
            <IconButton variant="default">
              <Share2 className="h-5 w-5" strokeWidth={1.75} />
            </IconButton>
          </div>
        </div>

        {/* Live Badge */}
        <div className="absolute top-20 left-4 pt-[env(safe-area-inset-top)]">
          <JedagBadge variant="live" size="lg">LIVE TRACKING</JedagBadge>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-0 inset-x-0 p-4 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-white/70 font-mono">{qurbanData.id}</p>
              <h1 className="text-2xl font-bold">{`"${qurbanData.name}"`}</h1>
              <p className="text-sm text-white/80">
                {qurbanData.species} &middot; {qurbanData.weight} kg
              </p>
            </div>
            <div className="flex gap-1.5">
              <JedagBadge variant="syariah">Syariah</JedagBadge>
              <JedagBadge variant="sehat">Sehat</JedagBadge>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Summary */}
      <section className="px-5 -mt-4 mb-6">
        <JedagCard>
          <CardBody className="flex items-center justify-between">
            <div>
              <p className="text-sm text-ink-500">Progress Jejak</p>
              <p className="text-lg font-bold text-ink-900">
                {currentStep} dari {totalSteps} tahap
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Truck className="h-6 w-6 text-emerald-700" strokeWidth={1.75} />
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-emerald-700">Dalam Perjalanan</p>
                <p className="text-xs text-ink-500">Update 2 jam lalu</p>
              </div>
            </div>
          </CardBody>
        </JedagCard>
      </section>

      {/* Quick Actions */}
      <section className="px-5 mb-6">
        <div className="flex gap-3">
          <button
            onClick={() => setShowPassportSheet(true)}
            className="flex-1 flex items-center justify-center gap-2 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow press-feedback"
          >
            <FileText className="h-5 w-5 text-emerald-700" strokeWidth={1.75} />
            <span className="font-medium text-ink-900">Paspor Hewan</span>
          </button>
          <Link 
            href="/live/JD-0931"
            className="flex-1 flex items-center justify-center gap-2 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow press-feedback"
          >
            <Video className="h-5 w-5 text-red-600" strokeWidth={1.75} />
            <span className="font-medium text-ink-900">Live Camera</span>
          </Link>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-5 mb-6">
        <h2 className="text-lg font-semibold text-ink-900 mb-4">Jejak Perjalanan</h2>
        <JedagCard>
          <CardBody>
            <Timeline>
              {timelineSteps.map((step, index) => (
                <TimelineStep
                  key={step.id}
                  state={step.state}
                  icon={step.icon}
                  title={step.title}
                  time={step.time}
                  meta={step.meta}
                  live={step.live}
                  isLast={index === timelineSteps.length - 1}
                />
              ))}
            </Timeline>
          </CardBody>
        </JedagCard>
      </section>

      {/* Location Card */}
      <section className="px-5">
        <JedagCard>
          <div className="h-40 bg-ink-100 relative">
            {/* Map placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-emerald-700 mx-auto mb-2" strokeWidth={1.75} />
                <p className="text-sm text-ink-500">Lokasi saat ini: Malang - Surabaya</p>
              </div>
            </div>
          </div>
          <CardBody className="flex items-center justify-between">
            <div>
              <p className="text-sm text-ink-500">Estimasi tiba</p>
              <p className="font-semibold text-ink-900">10 Jun 2024, 14:00 WIB</p>
            </div>
            <JedagButton size="sm">
              Lihat Peta <ChevronRight className="h-4 w-4" />
            </JedagButton>
          </CardBody>
        </JedagCard>
      </section>

      {/* Passport Bottom Sheet */}
      <BottomSheet 
        open={showPassportSheet} 
        onOpenChange={setShowPassportSheet}
        title="Paspor Hewan"
      >
        <div className="px-5 pb-8">
          <LivestockPassportContent data={qurbanData} />
        </div>
      </BottomSheet>

      <BottomNav />
    </div>
  )
}

// Livestock Passport Content
function LivestockPassportContent({ data }: { data: typeof qurbanData }) {
  const passportFields = [
    { label: 'ID Hewan', value: data.id, mono: true },
    { label: 'Nama', value: data.name },
    { label: 'Jenis', value: data.species },
    { label: 'Berat', value: `${data.weight} kg` },
    { label: 'Usia', value: data.age },
    { label: 'Asal', value: data.origin },
    { label: 'Pemilik', value: data.owner },
  ]

  return (
    <div className="space-y-6">
      {/* Passport Card Design */}
      <div className="bg-gradient-to-br from-sand-100 to-sand-200 rounded-2xl p-5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-emerald-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-16 w-16 rounded-xl bg-white shadow-md overflow-hidden">
              <Image
                src={data.image}
                alt={data.name}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-xs text-ink-500 font-mono">{data.id}</p>
              <h3 className="text-xl font-bold text-ink-900">{`"${data.name}"`}</h3>
              <div className="flex gap-1.5 mt-1">
                <JedagBadge variant="syariah" size="sm">Syariah</JedagBadge>
                <JedagBadge variant="sehat" size="sm">Sehat</JedagBadge>
              </div>
            </div>
          </div>

          {/* Fields */}
          <div className="space-y-3">
            {passportFields.slice(2).map((field) => (
              <div key={field.label} className="flex justify-between items-center">
                <span className="text-sm text-ink-500">{field.label}</span>
                <span className={`text-sm font-medium text-ink-900 ${field.mono ? 'font-mono' : ''}`}>
                  {field.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h4 className="font-semibold text-ink-900 mb-3">Sertifikasi</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3 bg-emerald-50 rounded-xl p-3">
            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-emerald-700" strokeWidth={1.75} />
            </div>
            <div className="flex-1">
              <p className="font-medium text-ink-900">Sertifikat Kesehatan</p>
              <p className="text-xs text-ink-500">Dikeluarkan: 25 Mei 2024</p>
            </div>
            <ChevronRight className="h-5 w-5 text-ink-300" />
          </div>
          <div className="flex items-center gap-3 bg-gold-50 rounded-xl p-3">
            <div className="h-10 w-10 rounded-full bg-gold-100 flex items-center justify-center">
              <FileText className="h-5 w-5 text-gold-700" strokeWidth={1.75} />
            </div>
            <div className="flex-1">
              <p className="font-medium text-ink-900">Surat Keterangan Asal</p>
              <p className="text-xs text-ink-500">No: SKA/2024/0931</p>
            </div>
            <ChevronRight className="h-5 w-5 text-ink-300" />
          </div>
        </div>
      </div>

      {/* Download Button */}
      <JedagButton variant="secondary" fullWidth>
        <FileText className="h-5 w-5" strokeWidth={1.75} />
        Unduh Paspor PDF
      </JedagButton>
    </div>
  )
}
