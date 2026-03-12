"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function ThanksPage() {
    return (
        <main style={{ 
            height: '100vh', 
            width: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#F7F7F5', // Slightly warmer light gray
            padding: '24px'
        }}>
            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ 
                    maxWidth: '480px', // More compact
                    width: '100%', 
                    backgroundColor: '#FFFFFF', 
                    borderRadius: '24px', // More subtle radius
                    padding: '64px 32px', 
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)', // Softer shadow
                    textAlign: 'center'
                }}
            >
                {/* Looping Floating Logo Bird */}
                <motion.div
                    animate={{ 
                        y: [0, -8, 0] // Subtle floating motion
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    style={{ 
                        width: '60px', // More delicate size
                        height: '60px', 
                        margin: '0 auto 32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <img 
                        src="/images/logo-bird.png" 
                        alt="Myoko Rokkei" 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'contain'
                        }}
                    />
                </motion.div>

                <div style={{ overflow: 'hidden' }}>
                    <h1 className="serif" style={{ 
                        fontSize: '1.4rem', 
                        marginBottom: '16px', 
                        letterSpacing: '0.2em', // Tightened from 0.35em
                        textTransform: 'uppercase',
                        color: '#121A16',
                        fontWeight: '400'
                    }}>
                        Thank You!
                    </h1>
                    <p className="serif" style={{ 
                        fontSize: '12px', 
                        opacity: 0.5, 
                        lineHeight: '2.4', 
                        letterSpacing: '0.08em', 
                        marginBottom: '40px'
                    }}>
                        お問い合わせを承りました。<br />
                        内容を確認次第、担当者よりご連絡いたします。<br />
                        特別な一日を形にするお手伝いができることを<br className="br-mobile" />
                        楽しみにしております。
                    </p>

                    <Link 
                        href="/" 
                        className="v-btn-premium"
                        style={{ 
                            padding: '0.8rem 2.5rem', 
                            fontSize: '0.6rem' 
                        }}
                    >
                        Back to Home
                    </Link>
                </div>
            </motion.div>
            <style>{`
                .br-mobile { display: none; }
                @media (max-width: 640px) {
                    .br-mobile { display: block; }
                }
            `}</style>
        </main>
    )
}
