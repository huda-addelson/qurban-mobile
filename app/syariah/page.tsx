'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  BottomNav, 
  JedagBadge, 
  JedagCard, 
  CardBody,
} from '@/components/jedag'
import { 
  ArrowLeft, 
  ShieldCheck, 
  FileText,
  CheckCircle2,
  Video,
  ChevronRight
} from 'lucide-react'

const syariahSteps = [
  {
    title: 'Pemeriksaan Kesehatan',
    description: 'Hewan diperiksa oleh dokter hewan tersertifikasi',
    status: 'done',
    certificate: 'SKH/2024/0931',
  },
  {
    title: 'Verifikasi Kelayakan',
    description: 'Memenuhi syarat umur dan kondisi fisik untuk qurban',
    status: 'done',
    certificate: 'VKQ/2024/0931',
  },
  {
    title: 'Penyembelihan Syariah',
    description: 'Disembelih oleh juru sembelih tersertifikasi MUI',
    status: 'pending',
    certificate: null,
  },
  {
    title: 'Dokumentasi Video',
    description: 'Proses penyembelihan didokumentasikan secara lengkap',
    status: 'pending',
    certificate: null,
  },
]

export default function SyariahPage() {
  return (
    <div className="min-h-screen bg-off-white pb-24">
      {/* Header */}
      <header className="bg-white border-b border-ink-100 pt-[env(safe-area-inset-top)] px-5 pb-4">
        <div className="flex items-center gap-4">
          <Link href="/jejak/JD-0931" className="p-2 -ml-2 rounded-full hover:bg-ink-100 transition-colors">
            <ArrowLeft className="h-5 w-5 text-ink-700" strokeWidth={1.75} />
          </Link>
          <h1 className="text-xl font-bold text-ink-900">Verifikasi Syariah</h1>
        </div>
      </header>

      <div className="px-5 py-6 space-y-6">
        {/* Status Banner */}
        <JedagCard className="bg-gradient-to-br from-emerald-700 to-emerald-800 text-white">
          <CardBody className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
              <ShieldCheck className="h-8 w-8 text-white" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-emerald-100 text-sm">Status Kepatuhan Syariah</p>
              <h2 className="text-xl font-bold">Memenuhi Syarat</h2>
              <p className="text-emerald-100 text-sm mt-1">2 dari 4 tahap selesai</p>
            </div>
          </CardBody>
        </JedagCard>

        {/* Juru Sembelih Info */}
        <JedagCard>
          <CardBody>
            <h3 className="font-semibold text-ink-900 mb-4">Juru Sembelih</h3>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-700">HS</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-ink-900">Ustadz Hasan Basri</p>
                <p className="text-sm text-ink-500">Sertifikat MUI: MUI/JS/2024/1234</p>
                <div className="flex gap-2 mt-2">
                  <JedagBadge variant="syariah" size="sm">Tersertifikasi</JedagBadge>
                  <JedagBadge variant="verified" size="sm">10+ Tahun</JedagBadge>
                </div>
              </div>
            </div>
          </CardBody>
        </JedagCard>

        {/* Verification Steps */}
        <div>
          <h3 className="font-semibold text-ink-900 mb-4">Tahapan Verifikasi</h3>
          <div className="space-y-3">
            {syariahSteps.map((step, index) => (
              <JedagCard key={index}>
                <CardBody className="flex items-start gap-4">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${
                    step.status === 'done' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-ink-100 text-ink-300'
                  }`}>
                    {step.status === 'done' ? (
                      <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} />
                    ) : (
                      <span className="text-lg font-bold">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className={`font-semibold ${
                          step.status === 'done' ? 'text-ink-900' : 'text-ink-400'
                        }`}>
                          {step.title}
                        </h4>
                        <p className={`text-sm mt-0.5 ${
                          step.status === 'done' ? 'text-ink-500' : 'text-ink-300'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                      {step.status === 'done' && (
                        <JedagBadge variant="verified" size="sm">Selesai</JedagBadge>
                      )}
                    </div>
                    {step.certificate && (
                      <button className="mt-3 flex items-center gap-2 text-sm text-emerald-700 font-medium">
                        <FileText className="h-4 w-4" strokeWidth={1.75} />
                        {step.certificate}
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </CardBody>
              </JedagCard>
            ))}
          </div>
        </div>

        {/* Live Slaughter Link */}
        <JedagCard className="bg-gradient-to-r from-red-50 to-red-100/50">
          <CardBody>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <Video className="h-6 w-6 text-red-600" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="font-semibold text-ink-900">Live Penyembelihan</h4>
                  <p className="text-sm text-ink-500">Saksikan proses secara langsung</p>
                </div>
              </div>
              <JedagBadge variant="warning">Akan Datang</JedagBadge>
            </div>
          </CardBody>
        </JedagCard>
      </div>

      <BottomNav />
    </div>
  )
}
