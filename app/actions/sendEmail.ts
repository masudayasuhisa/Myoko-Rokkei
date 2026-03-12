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
        const data = await resend.emails.send({
            from: 'Myoko Rokkei <onboarding@resend.dev>', // Change to 'Contact <noreply@myoko-rokkei.jp>' after domain verification
            to: ['info@myoko-rokkei.jp'], 
            subject: `Contact from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        })

        return { success: true, data }
    } catch (error) {
        console.error("Email error:", error)
        return { error: "Failed to send email" }
    }
}
