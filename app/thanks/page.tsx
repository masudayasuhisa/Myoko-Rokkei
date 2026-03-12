"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function ThanksPage() {
    return (
        <main className="h-screen w-full relative overflow-hidden bg-[#121A16]">
            {/* Background Image with Ken Burns Effect */}
            <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 10, ease: "linear" }}
                className="absolute inset-0 z-0"
            >
                <img 
                    src="/images/loc_imoriike.jpg" 
                    alt="" 
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Floating Illustrations */}
            <motion.img
                src="/images/illus-bird.png"
                alt=""
                initial={{ opacity: 0, x: -50, y: 50 }}
                animate={{ opacity: 0.15, x: 0, y: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute top-10 left-10 w-24 md:w-40 pointer-events-none mix-blend-screen"
                style={{ filter: 'invert(1)' }}
            />
            <motion.img
                src="/images/illus-leaves.png"
                alt=""
                initial={{ opacity: 0, x: 50, y: -50 }}
                animate={{ opacity: 0.15, x: 0, y: 0 }}
                transition={{ duration: 2, delay: 0.8 }}
                className="absolute bottom-10 right-10 w-32 md:w-56 pointer-events-none mix-blend-screen rotate-180"
                style={{ filter: 'invert(1)' }}
            />

            {/* Content Container */}
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-6 text-white">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.2 }}
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-10"
                >
                    <Check size={28} strokeWidth={1.5} className="text-white" />
                </motion.div>

                <div className="overflow-hidden mb-4">
                    <motion.h1 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="serif text-4xl md:text-6xl tracking-widest uppercase"
                    >
                        Thank You
                    </motion.h1>
                </div>

                <div className="overflow-hidden mb-12">
                    <motion.p 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                        className="serif text-sm md:text-base opacity-70 leading-relaxed tracking-widest"
                    >
                        お問い合わせを承りました。<br />
                        原風景とともに、特別な一日を形にするお手伝いができることを心待ちにしております。<br />
                        内容を確認次第、担当者よりご連絡させていただきます。
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <Link 
                        href="/" 
                        className="v-btn-premium v-text-white v-glass-border v-glass"
                        style={{ background: 'transparent', padding: '1.2rem 4rem' }}
                    >
                        Back to Home
                    </Link>
                </motion.div>

                {/* Footer Logo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 1.5, duration: 2 }}
                    className="absolute bottom-12"
                >
                    <div className="flex flex-col items-center gap-2">
                        <img 
                            src="/images/logo-bird.png" 
                            alt="Myoko Rokkei" 
                            className="w-6 h-6 object-contain brightness-0 invert"
                        />
                        <span className="serif text-[9px] tracking-[0.4em] uppercase opacity-50">Myoko Rokkei</span>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                .inset-0 {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                }
            `}</style>
        </main>
    )
}
