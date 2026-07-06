"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ThanksPageEN() {
    return (
        <main style={{ 
            height: '100vh', 
            width: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: '#F7F7F5',
            padding: '24px'
        }}>
            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ 
                    maxWidth: '480px', 
                    width: '100%', 
                    backgroundColor: '#FFFFFF', 
                    borderRadius: '24px', 
                    padding: '64px 32px', 
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)', 
                    textAlign: 'center'
                }}
            >
                {/* Looping Floating Logo Bird */}
                <motion.div
                    animate={{ 
                        y: [0, -8, 0]
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    style={{ 
                        width: '60px', 
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
                        letterSpacing: '0.2em', 
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
                        We have successfully received your inquiry.<br />
                        Our team will review the details and get back to you shortly.<br />
                        We look forward to helping you shape your special day.
                    </p>

                    <Link 
                        href="/en" 
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
        </main>
    )
}
