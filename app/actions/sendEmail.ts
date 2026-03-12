"use server"

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not defined in environment variables.")
        return { error: "API Key configuration error" }
    }

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!name || !email || !message) {
        return { error: "Missing fields" }
    }

    try {
        // 1. Admin Notification
        const adminEmail = await resend.emails.send({
            from: '妙高麓景 <noreply@myoko-rokkei.jp>',
            to: ['info@myoko-rokkei.jp'], 
            subject: `【お問い合わせ】${name}様より`,
            reply_to: email,
            text: `お名前: ${name}\nメールアドレス: ${email}\n\n内容:\n${message}`,
        })

        if (adminEmail.error) {
            console.error("Admin Email Error:", adminEmail.error)
            return { error: adminEmail.error.message }
        }

        // 2. Auto Response to User
        const userEmail = await resend.emails.send({
            from: '妙高麓景 <noreply@myoko-rokkei.jp>',
            to: [email],
            subject: '【妙高麓景】お問い合わせありがとうございます',
            text: `${name} 様

この度は、ウェディングフォト「妙高麓景」へお問い合わせいただき、誠にありがとうございます。

お客様からのお問い合わせ内容を、以下の通り受け付けいたしました。
内容を確認のうえ、担当者より改めてご連絡させていただきます。

今しばらくお待ちいただけますと幸いです。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
お名前：${name} 様
メールアドレス：${email}

内容：
${message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

妙高麓景｜Myoko Rokkei
https://myoko-rokkei.jp/
`,
        })

        return { success: true }
    } catch (err) {
        console.error("Unexpected error:", err)
        return { error: "Internal server error" }
    }
}
