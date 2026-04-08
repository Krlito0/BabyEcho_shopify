"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeHeroPhoto() {
    return (
        <section className="relative w-full h-[700px] md:h-[950px] overflox-hidden">

            {/* Image pleine largeur */}
            <Image
            src="https://cdn.shopify.com/s/files/1/0903/4776/6139/files/ChatGPTImage4avr.2026a18_59_49.png?v=1775322008"
            alt="BabyEcho"
            fill
            className="object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8F1EC] via-[#4F362C]/30 to-[#4F362C]" />

            {/* Texte centré */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-6">
                <motion.p
                className="text-[#D1657C] text-2xl"
                style={{ fontFamily: "var(--font-signature", fontSize: "1.8rem"}}
                initial= {{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 0.6 }}
                viewport={{ once: true}}
                >
                    BabyEcho
                </motion.p>
                <motion.h2
                className="text-white text-3xl md:text-5xl font-bold max-w-3xl leading-tight"
                style={{ fontFamily: "var(--font-title"}}
                initial= {{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true}}
                >
                    Vous méritez le meilleur pour votre grossesse.
                </motion.h2>
                <motion.a
                href="/product/le-1er-classeur-de-suivi-de-grossesse"
                className="mt-4 bg-[#D1657] border border-[#FFBE98] text-[#FFBE98] px-10 py-4 rounded-full font-semibold text-base hover:bg-[#FFBE98] hover:text-[#4F362C] transition-all duration-300"
                style={{ fontFamily: "var(--font-body"}}
                initial= {{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true}}
                >
                    Découvrir l'organisateur
                </motion.a>
            </div>
        </section>
    );
}