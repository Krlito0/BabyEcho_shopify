"use client";

import { useState } from "react";

export default function HomeNewsletter() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    return (
        <section id="newsletter" className="bg-[#4F362C] py-20 px-6">
            <div className="mx-auto max-w-2xl text-center flex flex-col items-center gap-6">
                <p className="text-[#FFBE98] text-2xl"
                    style={{ fontFamily: `var(--font-signature)`, fontSize: "1.8rem" }}>
                        Restez informée
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white"
                    style={{ fontFamily: `var(--font-title)` }}>
                        Rejoignez la communauté Baby Echo 🤍
                </h2>
                <p className="text-white/70 text-base"
                    style={{ fontFamily: `var(--font-body)` }}>
                        Conseils grossesse, nouveautés et offres exclusives directement dans votre boîte mail.
                </p>

                {sent? (
                    <p className="text-[#FFBE98] text-lg font-semibold"
                        style={{ fontFamily: `var(--font-title)` }}>
                            Merci ! Vous êtes bien inscrite 🌸
                    </p>
                ) : (
                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                        <input
                        type="email"
                        placeholder="Votre adresse email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-6 py-4 rounded-full bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-[#D1657C]"
                        style={{ fontFamily: "var(--font-body)" }}
                    />
                    <button
                        onClick={() => email && setSent(true)}
                        className="px-8 py-4 bg-[#D1657C] text-white rounded-full font-semibold hover:bg-[#FFBE98] hover:text-[#4F362C] transition-all duration-300"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        S'inscrire
                    </button>
                    </div>
                )}
            </div>
        </section>
    )
}