'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { JedagButton, StepDots } from '@/components/jedag'
import { Route, Shield, Bell, Users } from 'lucide-react'

interface OnboardingStep {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  illustration: React.ReactNode
}

const steps: OnboardingStep[] = [
  {
    icon: Route,
    title: 'Lacak Perjalanan Qurban',
    description: 'Pantau setiap tahap perjalanan hewan qurban Anda secara real-time, dari peternakan hingga sampai ke tangan penerima.',
    illustration: (
      <div className="relative w-64 h-48">
        <svg viewBox="0 0 240 180" className="w-full h-full">
          {/* Road/Path */}
          <path
            d="M20 140 Q80 80 120 100 T220 60"
            stroke="#d8ebd6"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M20 140 Q80 80 120 100 T220 60"
            stroke="#347a3b"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="8 8"
          />
          {/* Location pins */}
          <circle cx="40" cy="130" r="12" fill="#0e6e4f" />
          <circle cx="40" cy="130" r="5" fill="white" />
          <circle cx="120" cy="95" r="12" fill="#0e6e4f" />
          <circle cx="120" cy="95" r="5" fill="white" />
          <circle cx="200" cy="65" r="12" fill="#0e6e4f" />
          <circle cx="200" cy="65" r="5" fill="white" />
          {/* Labels */}
          <text x="40" y="160" textAnchor="middle" className="text-xs fill-ink-500">Farm</text>
          <text x="120" y="125" textAnchor="middle" className="text-xs fill-ink-500">Transit</text>
          <text x="200" y="95" textAnchor="middle" className="text-xs fill-ink-500">Distribusi</text>
        </svg>
      </div>
    ),
  },
  {
    icon: Shield,
    title: 'Jaminan Syariah & Halal',
    description: 'Setiap hewan disembelih sesuai syariat Islam dengan sertifikasi dan dokumentasi lengkap.',
    illustration: (
      <div className="relative w-64 h-48 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-200 rounded-full blur-2xl opacity-50" />
          <svg viewBox="0 0 100 100" className="w-40 h-40 relative">
            <circle cx="50" cy="50" r="45" fill="#d6efe2" />
            <circle cx="50" cy="50" r="35" fill="#0e6e4f" />
            <path
              d="M35 50 L45 60 L65 40"
              stroke="white"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="absolute -top-2 -right-2 bg-gold-500 rounded-full p-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
              <path d="M12 2L14.39 8.25L21 9.24L16.5 14.14L17.77 21L12 17.77L6.23 21L7.5 14.14L3 9.24L9.61 8.25L12 2Z" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Bell,
    title: 'Notifikasi Real-time',
    description: 'Dapatkan update langsung di setiap milestone penting perjalanan qurban Anda.',
    illustration: (
      <div className="relative w-64 h-48 flex items-center justify-center">
        <div className="relative">
          {/* Phone frame */}
          <div className="w-32 h-48 bg-ink-900 rounded-2xl p-1.5 shadow-xl">
            <div className="w-full h-full bg-off-white rounded-xl overflow-hidden">
              {/* Notification cards */}
              <div className="p-2 space-y-2">
                <div className="bg-emerald-100 rounded-lg p-2 transform -rotate-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-emerald-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-[8px]">✓</span>
                    </div>
                    <div className="text-[8px] text-emerald-700 font-medium">Sudah tiba!</div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm transform rotate-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gold-500 rounded-full" />
                    <div className="space-y-1">
                      <div className="h-1.5 bg-ink-200 rounded w-16" />
                      <div className="h-1.5 bg-ink-100 rounded w-12" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-leaf-500 rounded-full" />
                    <div className="space-y-1">
                      <div className="h-1.5 bg-ink-200 rounded w-14" />
                      <div className="h-1.5 bg-ink-100 rounded w-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Notification badges */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-bounce">
            3
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: 'Undang Keluarga',
    description: 'Ajak keluarga untuk ikut memantau dan merayakan momen qurban bersama.',
    illustration: (
      <div className="relative w-64 h-48 flex items-center justify-center">
        <div className="relative flex items-end justify-center gap-3">
          {/* Avatars */}
          <div className="flex -space-x-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-emerald-700 font-bold">
              A
            </div>
            <div className="w-14 h-14 rounded-full bg-gold-100 border-2 border-white flex items-center justify-center text-gold-700 font-bold">
              B
            </div>
            <div className="w-14 h-14 rounded-full bg-leaf-100 border-2 border-white flex items-center justify-center text-leaf-700 font-bold">
              C
            </div>
            <div className="w-14 h-14 rounded-full bg-sand-200 border-2 border-white flex items-center justify-center text-ink-700 font-bold">
              +5
            </div>
          </div>
        </div>
        {/* Decorative hearts */}
        <div className="absolute top-4 left-8 text-red-400 animate-pulse">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="absolute top-8 right-12 text-red-300">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>
    ),
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const isLastStep = currentStep === steps.length - 1

  const handleNext = () => {
    if (isLastStep) {
      router.push('/home')
    } else {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleSkip = () => {
    router.push('/home')
  }

  const step = steps[currentStep]
  const Icon = step.icon

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      {/* Skip Button */}
      <div className="flex justify-end p-4">
        <button 
          onClick={handleSkip}
          className="text-ink-500 text-sm font-medium hover:text-ink-700 transition-colors"
        >
          Lewati
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            {/* Illustration */}
            <div className="mb-8">
              {step.illustration}
            </div>

            {/* Icon */}
            <div className="mb-4 p-4 rounded-full bg-emerald-100">
              <Icon className="w-8 h-8 text-emerald-700" strokeWidth={1.75} />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-ink-900 mb-3 text-balance">
              {step.title}
            </h1>

            {/* Description */}
            <p className="text-ink-500 text-base max-w-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 inset-x-0 bg-off-white p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        {/* Progress Dots */}
        <div className="flex justify-center mb-6">
          <StepDots total={steps.length} current={currentStep} />
        </div>

        {/* Button */}
        <JedagButton fullWidth onClick={handleNext}>
          {isLastStep ? 'Mulai Sekarang' : 'Lanjut'}
        </JedagButton>
      </div>
    </div>
  )
}
