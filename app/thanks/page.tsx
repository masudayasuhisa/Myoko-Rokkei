"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function ThanksPage() {
    return (
        <main className="h-screen w-full flex items-center justify-center bg-[#f7f7f7] p-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl w-full bg-white rounded-[32px] p-12 md:p-20 shadow-sm text-center"
            >
                {/* Logo Bird */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="relative w-32 h-32 mx-auto mb-10 flex items-center justify-center"
                >
                    <img 
                        src="/images/logo-bird.png" 
                        alt="Myoko Rokkei" 
                        className="w-full h-full object-contain opacity-40 mix-blend-multiply"
                    />
                </motion.div>

                <div className="overflow-hidden">
                    <h1 className="serif text-3xl md:text-4xl mb-6 tracking-[0.2em] uppercase text-[#121A16]">
                        Thank You
                    </h1>
                    <p className="serif text-sm md:text-base opacity-60 leading-relaxed tracking-wider mb-12">
                        お問い合わせを承りました。<br />
                        内容を確認させていただき、担当者より改めてご連絡いたします。<br />
                        特別な一日を形にするお手伝いができることを楽しみにしております。
                    </p>

                    <Link 
                        href="/" 
                        className="v-btn-premium"
                        style={{ padding: '1rem 3.5rem' }}
                    >
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </main>
    )
}
