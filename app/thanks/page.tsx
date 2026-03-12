import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Thanks() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-bg-soft py-20">
            <div className="container max-w-lg text-center">
                <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-10">
                    <div className="w-12 h-12 bg-primary rounded-full animate-pulse" />
                </div>

                <h1 className="serif text-4xl mb-8">Thank you.</h1>
                <p className="text-primary/70 mb-12 leading-loose">
                    お問い合わせいただきありがとうございます。<br />
                    メッセージは無事に送信されました。<br /><br />
                    通常3営業日以内にメールにてご連絡差し上げますので、<br />
                    今しばらくお待ちください。
                </p>

                <Link href="/" className="btn-premium inline-flex items-center gap-3">
                    <ArrowLeft size={18} />
                    TOPへ戻る
                </Link>
            </div>
        </main>
    );
}
