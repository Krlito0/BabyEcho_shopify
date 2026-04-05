"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeProductDetail() {
    return (
        <section className="bg-[#F8F1EC] py-20 px-6 ">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">

                {/* Hero Section*/}
                <motion.div
                className="w-full md:w-1/2"
                initial= {{opacity: 0, x: -40}}
                whileInView={{opacity: 1, x: 0}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true}}
                >
                    <Image
                    src="https://cdn.shopify.com/s/files/1/0903/4776/6139/files/ChatGPT_Image_3_avr._2026_16_49_06.png?v=1775227819"
                    alt="L'organisateur de grossesse baby Echo"
                    width={600}
                    height={600}
                    className="rounded-3xl shadow-xl object-cover"
                    />
                </motion.div>

                {/* Texte*/}
                <motion.div
                className="w-full md:w-1/2 flex flex-col gap-6"
                initial= {{opacity: 0, x: -40}}
                whileInView={{opacity: 1, x: 0}}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true}}
                >
                    <p
                        className="text-[#D1657C] text-xl"
                        style={{ fontFamily: `var(--font-signature)`, fontSize: "1.5rem"}}
                        >
                            Le geste maternel qui vous veut du bien
                    </p>
                    <h2
                    className="text-3xl md:text-4xl font-bold text-[#4F362C] leading-tight"
                    style={{ fontFamily: `var(--font-title)`}}
                    >
                            Un organisateur pensé pour chaque étape de votre grossesse
                    </h2>
                    <p
                        className="text-[#4F362C] text-base leading-relaxed"
                        style={{ fontFamily: `var(--font-body)`}}
                        >
                            Baby Echo n'est pas un simplecarnet. C'est un compagnon de route pour vous aider à suivre chaque semaine, chaque rendez-vous, chaque émotion de votre parcours maternel.
                    </p>

                    {/* Point clés*/}
                    <ul className="flex flex-col gap-3">
                        {[
                            "Suivi semaine par semaine",
                            "Espace pour vos rendez-vous médicaux",
                            "Pages dédiées à vos émotions",
                            "Conçu avec des professionnels de santé"
                        ].map((point) => (
                            <li 
                            key={point}
                            className="flex items-center gap-3 text-[#4F362C]"
                            style={{ fontFamily: `var(--font-body)`}}
                            >
                                <span className="w-5 h-5 rounded-full bg-[#D1657C] flex items-center justify-center text-white text-xs flex-shrink-0">✔</span>
                                {point}
                            </li>
                        ))}
                    </ul>

                    <a href="/product/le-1er-classeur-de-suivi-de-grossesse"
                    className="mt-4 self-start bg-[#D1657C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4F362C] transition-colors duration-300 text-center w-full md:w-auto flex items-center justify-center"
                    style={{ fontFamily: `var(--font-body)`}}>
                        Découvrir l'organisateur 
                    </a>
                </motion.div>
            </div>

        </section>
    )
}