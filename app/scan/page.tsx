'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  BottomNav, 
  JedagButton, 
  JedagCard, 
  CardBody,
  JedagInput
} from '@/components/jedag'
import { 
  ArrowLeft, 
  QrCode, 
  Camera,
  Flashlight,
  Image as ImageIcon
} from 'lucide-react'

export default function ScanPage() {
  const [manualId, setManualId] = useState('')

  return (
    <div className="min-h-screen bg-ink-900">
      {/* Scanner View */}
      <div className="relative h-[60vh]">
        {/* Camera Preview Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-800 to-ink-900">
          {/* Scanner overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Scanner frame */}
            <div className="relative w-64 h-64">
              {/* Corner borders */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-emerald-500 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-emerald-500 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-emerald-500 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-emerald-500 rounded-br-xl" />
              
              {/* Scanning line animation */}
              <motion.div
                className="absolute left-0 right-0 h-0.5 bg-emerald-500 shadow-[0_0_10px_2px_rgba(14,110,79,0.5)]"
                animate={{ top: ['10%', '90%', '10%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              
              {/* QR Icon in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <QrCode className="h-16 w-16 text-white/20" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>

        {/* Top Controls */}
        <div className="absolute top-0 inset-x-0 p-4 pt-[calc(1rem+env(safe-area-inset-top))] flex items-center justify-between">
          <Link 
            href="/home"
            className="h-11 w-11 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
          </Link>
          
          <h1 className="text-white font-semibold">Scan QR Code</h1>
          
          <button className="h-11 w-11 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white">
            <Flashlight className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-8 inset-x-0 text-center">
          <p className="text-white/80 text-sm">
            Arahkan kamera ke QR code pada tag hewan
          </p>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="bg-off-white rounded-t-3xl -mt-6 relative z-10 min-h-[40vh] pb-24">
        <div className="px-5 pt-6">
          {/* Drag Handle */}
          <div className="flex justify-center mb-6">
            <div className="h-1 w-10 bg-ink-300 rounded-full" />
          </div>

          {/* Alternative Options */}
          <div className="space-y-4">
            {/* Manual Input */}
            <JedagCard>
              <CardBody>
                <h3 className="font-semibold text-ink-900 mb-3">Masukkan ID Manual</h3>
                <div className="flex gap-3">
                  <JedagInput
                    placeholder="Contoh: JD-0931"
                    value={manualId}
                    onChange={(e) => setManualId(e.target.value)}
                    className="flex-1"
                  />
                  <JedagButton disabled={!manualId}>
                    Lacak
                  </JedagButton>
                </div>
              </CardBody>
            </JedagCard>

            {/* Other Options */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center gap-2 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow press-feedback">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-emerald-700" strokeWidth={1.75} />
                </div>
                <span className="text-sm font-medium text-ink-700">Foto QR</span>
              </button>
              <button className="flex flex-col items-center gap-2 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow press-feedback">
                <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center">
                  <ImageIcon className="h-6 w-6 text-forest-700" strokeWidth={1.75} />
                </div>
                <span className="text-sm font-medium text-ink-700">Dari Galeri</span>
              </button>
            </div>

            {/* Recent Scans */}
            <div>
              <h3 className="font-semibold text-ink-900 mb-3">Scan Terakhir</h3>
              <div className="space-y-2">
                {['JD-0931', 'JD-0847'].map((id) => (
                  <Link
                    key={id}
                    href={`/jejak/${id}`}
                    className="flex items-center justify-between bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-ink-100 flex items-center justify-center">
                        <QrCode className="h-5 w-5 text-ink-500" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-mono font-medium text-ink-900">{id}</p>
                        <p className="text-xs text-ink-500">2 jam lalu</p>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-700 font-medium">Lihat</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
