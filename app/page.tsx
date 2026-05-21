'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { JedagButton } from '@/components/jedag'

export default function SplashPage() {
  const router = useRouter()
  const [showContent, setShowContent] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 500)
    const timer2 = setTimeout(() => setShowButtons(true), 1200)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-800 to-emerald-900 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="white" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center z-10"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <div className="relative">
                {/* Cow Icon */}
                <svg 
                  viewBox="0 0 120 120" 
                  className="w-32 h-32"
                  fill="none"
                >
                  {/* Arc Path */}
                  <path
                    d="M20 90 Q60 20 100 90"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Cow silhouette */}
                  <ellipse cx="60" cy="65" rx="25" ry="18" fill="white" />
                  <ellipse cx="60" cy="50" rx="15" ry="12" fill="white" />
                  <circle cx="53" cy="48" r="2" fill="#0e6e4f" />
                  <circle cx="67" cy="48" r="2" fill="#0e6e4f" />
                  <ellipse cx="60" cy="55" rx="4" ry="3" fill="#d6efe2" />
                  {/* Horns */}
                  <path d="M48 40 Q45 32 42 35" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M72 40 Q75 32 78 35" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                  {/* Legs */}
                  <rect x="42" y="78" width="5" height="14" rx="2" fill="white" />
                  <rect x="52" y="78" width="5" height="14" rx="2" fill="white" />
                  <rect x="63" y="78" width="5" height="14" rx="2" fill="white" />
                  <rect x="73" y="78" width="5" height="14" rx="2" fill="white" />
                </svg>
                {/* Leaf accent */}
                <div className="absolute -top-2 -right-2">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-leaf-500" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl font-extrabold text-white tracking-tight mb-3"
            >
              Jejak Daging
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-emerald-100 text-lg max-w-xs"
            >
              Transparansi qurban dari peternakan hingga distribusi
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Buttons */}
      <AnimatePresence>
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-12 inset-x-6 flex flex-col gap-3 z-10"
          >
            <JedagButton 
              fullWidth 
              onClick={() => router.push('/onboarding')}
              className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-lg"
            >
              Mulai Sekarang
            </JedagButton>
            <JedagButton 
              variant="tertiary" 
              fullWidth
              onClick={() => router.push('/home')}
              className="text-white hover:bg-white/10"
            >
              Sudah punya akun? Masuk
            </JedagButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
