'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { JedagButton } from '@/components/jedag'
import { ChevronLeft, ChevronRight, Share2, Download, X } from 'lucide-react'

interface StorySlide {
  id: number
  type: 'intro' | 'stat' | 'journey' | 'family' | 'outro'
  title?: string
  subtitle?: string
  stat?: { value: string; label: string }
  background: string
  textColor?: 'light' | 'dark'
}

const slides: StorySlide[] = [
  {
    id: 1,
    type: 'intro',
    title: 'Qurban Wrapped 2024',
    subtitle: 'Perjalanan qurbanmu tahun ini',
    background: 'linear-gradient(135deg, #0e6e4f 0%, #053f2a 100%)',
    textColor: 'light',
  },
  {
    id: 2,
    type: 'stat',
    title: 'Hewan Qurban',
    stat: { value: '2', label: 'ekor' },
    subtitle: '1 Sapi • 1 Kambing',
    background: 'linear-gradient(135deg, #f1e8d4 0%, #e8dcc4 100%)',
    textColor: 'dark',
  },
  {
    id: 3,
    type: 'journey',
    title: 'Total Perjalanan',
    stat: { value: '847', label: 'km' },
    subtitle: 'Dari peternakan hingga distribusi',
    background: 'linear-gradient(135deg, #2d6e34 0%, #1f5a26 100%)',
    textColor: 'light',
  },
  {
    id: 4,
    type: 'stat',
    title: 'Waktu Tracking',
    stat: { value: '72', label: 'jam' },
    subtitle: 'Kamu memantau dengan penuh perhatian',
    background: 'linear-gradient(135deg, #c9a24a 0%, #a07c2a 100%)',
    textColor: 'light',
  },
  {
    id: 5,
    type: 'family',
    title: 'Berbagi Kebaikan',
    stat: { value: '8', label: 'keluarga' },
    subtitle: 'Mengundang anggota keluarga untuk memantau bersama',
    background: 'linear-gradient(135deg, #4fb048 0%, #2e7a26 100%)',
    textColor: 'light',
  },
  {
    id: 6,
    type: 'outro',
    title: 'Terima Kasih',
    subtitle: 'Semoga qurbanmu diterima Allah SWT',
    background: 'linear-gradient(135deg, #0e6e4f 0%, #053f2a 100%)',
    textColor: 'light',
  },
]

export default function QurbanWrappedPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const slide = slides[currentSlide]

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(prev => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(prev => prev - 1)
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Close Button */}
      <Link 
        href="/home"
        className="absolute top-4 right-4 z-50 h-10 w-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50 transition-colors mt-[env(safe-area-inset-top)]"
      >
        <X className="h-5 w-5" strokeWidth={1.75} />
      </Link>

      {/* Progress Dots */}
      <div className="absolute top-4 left-4 right-16 z-50 flex gap-1 mt-[env(safe-area-inset-top)]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="flex-1 h-1 rounded-full overflow-hidden bg-white/30"
          >
            <motion.div
              className="h-full bg-white"
              initial={false}
              animate={{
                width: index < currentSlide ? '100%' : index === currentSlide ? '100%' : '0%',
              }}
              transition={{ duration: index === currentSlide ? 5 : 0.3 }}
            />
          </button>
        ))}
      </div>

      {/* Slide Content */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
          style={{ background: slide.background }}
        >
          <div className="h-full flex flex-col items-center justify-center px-8 text-center">
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-white/5 blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              {slide.type === 'intro' && (
                <>
                  <div className="mb-6">
                    <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
                      <circle cx="50" cy="50" r="45" fill="rgba(255,255,255,0.1)" />
                      <ellipse cx="50" cy="55" rx="20" ry="14" fill="white" />
                      <ellipse cx="50" cy="45" rx="12" ry="10" fill="white" />
                      <circle cx="45" cy="43" r="2" fill="#0e6e4f" />
                      <circle cx="55" cy="43" r="2" fill="#0e6e4f" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-2">{slide.title}</h1>
                  <p className="text-white/80 text-lg">{slide.subtitle}</p>
                </>
              )}

              {(slide.type === 'stat' || slide.type === 'journey' || slide.type === 'family') && slide.stat && (
                <>
                  <p className={`text-sm uppercase tracking-widest mb-4 ${slide.textColor === 'light' ? 'text-white/70' : 'text-ink-500'}`}>
                    {slide.title}
                  </p>
                  <div className="mb-4">
                    <span className={`text-8xl font-extrabold ${slide.textColor === 'light' ? 'text-white' : 'text-ink-900'}`}>
                      {slide.stat.value}
                    </span>
                    <span className={`text-2xl ml-2 ${slide.textColor === 'light' ? 'text-white/80' : 'text-ink-700'}`}>
                      {slide.stat.label}
                    </span>
                  </div>
                  <p className={slide.textColor === 'light' ? 'text-white/70' : 'text-ink-500'}>
                    {slide.subtitle}
                  </p>
                </>
              )}

              {slide.type === 'outro' && (
                <>
                  <div className="mb-6">
                    <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto text-gold-500" fill="currentColor">
                      <path d="M12 2L14.39 8.25L21 9.24L16.5 14.14L17.77 21L12 17.77L6.23 21L7.5 14.14L3 9.24L9.61 8.25L12 2Z" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-2">{slide.title}</h1>
                  <p className="text-white/80 text-lg italic font-serif">{slide.subtitle}</p>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 w-1/3 z-40" onClick={prevSlide} />
      <div className="absolute inset-y-0 right-0 w-1/3 z-40" onClick={nextSlide} />

      {/* Bottom Actions - Last Slide Only */}
      {currentSlide === slides.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 inset-x-8 z-50 space-y-3 pb-[env(safe-area-inset-bottom)]"
        >
          <JedagButton fullWidth className="bg-white text-emerald-700 hover:bg-white/90">
            <Share2 className="h-5 w-5" strokeWidth={1.75} />
            Bagikan
          </JedagButton>
          <JedagButton variant="tertiary" fullWidth className="text-white hover:bg-white/10">
            <Download className="h-5 w-5" strokeWidth={1.75} />
            Unduh Gambar
          </JedagButton>
        </motion.div>
      )}
    </div>
  )
}
