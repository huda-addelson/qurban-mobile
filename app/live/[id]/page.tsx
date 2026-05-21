'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  JedagBadge, 
  JedagButton,
  IconButton,
} from '@/components/jedag'
import { 
  ArrowLeft,
  Maximize2,
  Volume2,
  VolumeX,
  Settings,
  Share2,
  RefreshCw
} from 'lucide-react'

export default function LiveCameraPage() {
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <div className="min-h-screen bg-ink-900 text-white">
      {/* Video Container */}
      <div className="relative h-screen">
        {/* Simulated Video Feed */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink-800 to-ink-900">
          {/* Grid overlay for "camera" effect */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />
          </div>
          
          {/* Placeholder content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="relative mx-auto w-32 h-32 mb-4">
                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-emerald-500/50"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="absolute inset-0 rounded-full border-4 border-emerald-500 flex items-center justify-center">
                  <div className="text-4xl">🐄</div>
                </div>
              </div>
              <p className="text-white/60 text-sm">Live feed dari lokasi transit</p>
              <p className="text-white/40 text-xs mt-1">Malang - Surabaya</p>
            </div>
          </div>
        </div>

        {/* Top Controls */}
        <div className="absolute top-0 inset-x-0 p-4 pt-[calc(1rem+env(safe-area-inset-top))] flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent">
          <Link href="/jejak/JD-0931">
            <IconButton className="bg-black/40 backdrop-blur text-white hover:bg-black/60">
              <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
            </IconButton>
          </Link>
          
          <div className="flex items-center gap-3">
            <JedagBadge variant="live" size="lg">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              LIVE
            </JedagBadge>
            <span className="text-sm text-white/70 font-mono">02:34:18</span>
          </div>
          
          <IconButton className="bg-black/40 backdrop-blur text-white hover:bg-black/60">
            <Settings className="h-5 w-5" strokeWidth={1.75} />
          </IconButton>
        </div>

        {/* Camera Info Overlay */}
        <div className="absolute top-24 left-4 space-y-2 pt-[env(safe-area-inset-top)]">
          <div className="bg-black/60 backdrop-blur rounded-lg px-3 py-2">
            <p className="text-xs text-white/60">ID Hewan</p>
            <p className="text-sm font-mono text-white">#JD-0931</p>
          </div>
          <div className="bg-black/60 backdrop-blur rounded-lg px-3 py-2">
            <p className="text-xs text-white/60">Lokasi</p>
            <p className="text-sm text-white">Transit Truck</p>
          </div>
        </div>

        {/* Recording Indicator */}
        <div className="absolute top-24 right-4 pt-[env(safe-area-inset-top)]">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur rounded-lg px-3 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <span className="text-xs text-white font-medium">REC</span>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 inset-x-0 p-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] bg-gradient-to-t from-black/70 to-transparent">
          {/* Animal Info */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white">{`"Barokah"`}</h2>
            <p className="text-white/70">Sapi Limousin • 380 kg</p>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5 text-white" strokeWidth={1.75} />
                ) : (
                  <Volume2 className="h-5 w-5 text-white" strokeWidth={1.75} />
                )}
              </button>
              <button className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors">
                <RefreshCw className="h-5 w-5 text-white" strokeWidth={1.75} />
              </button>
            </div>

            <button className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors">
              <Share2 className="h-5 w-5 text-white" strokeWidth={1.75} />
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Maximize2 className="h-5 w-5 text-white" strokeWidth={1.75} />
            </button>
          </div>

          {/* Timeline scrubber placeholder */}
          <div className="mt-4">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-emerald-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-white/50">
              <span>00:00</span>
              <span>LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
