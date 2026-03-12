"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function ThanksPage() {
    return (
        <main className="h-screen w-full flex items-center justify-center bg-white p-6">
            <div className="max-w-xl w-full text-center">
                {/* Simplified Icon: Logo + Checkmark */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-24 h-24 mx-auto mb-10 flex items-center justify-center"
                >
                    <img 
                        src="/images/logo-bird.png" 
                        alt="" 
                        className="w-full h-full object-contain opacity-10 absolute inset-0 mix-blend-multiply"
                    />
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#121A16] flex items-center justify-center shadow-lg">
                        <Check size={24} color="#fff" strokeWidth={2.5} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
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
                </motion.div>
            </div>
        </main>
    )
}
