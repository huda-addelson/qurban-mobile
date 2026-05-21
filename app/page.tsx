'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { JedagButton } from '@/components/jedag';

export default function SplashPage() {
    const router = useRouter();
    const [showContent, setShowContent] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowContent(true), 500);
        const timer2 = setTimeout(() => setShowButtons(true), 1200);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

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
                            <img src="/Jejak_Daging.png" alt="Jedag Logo" className="inline-block w-20 h-20 mr-2 -mt-1" />
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
    );
}
