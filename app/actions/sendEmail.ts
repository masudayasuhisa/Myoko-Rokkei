"use server"

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!name || !email || !message) {
        return { error: "Missing fields" }
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Myoko Rokkei <onboarding@resend.dev>',
            to: ['info@myoko-rokkei.jp'], 
            subject: `Contact from ${name}`,
            reply_to: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        })

        if (error) {
            console.error("Resend API Error:", error)
            return { error: error.message || "Failed to send email" }
        }

        return { success: true }
    } catch (err) {
        console.error("Unexpected error:", err)
        return { error: "Internal server error" }
    }
}
