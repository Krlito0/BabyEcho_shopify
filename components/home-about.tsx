"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeAbout() {
    return (
        <section id="about" className="bg-[#E2F0EB] py-20 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">

                {/* Image*/}
                <motion.div
                className="w-full md:w-1/2 "
                initial= {{opacity: 0, x: -80}}
                whileInView={{opacity: 1, x: 0}}
                transition={{ duration: 0.7 }}
                viewport={{ once: true}} >
                    <Image
                    src="https://cdn.shopify.com/s/files/1/0903/4776/6139/files/StoryInstagramMerciModerneSimpleMinimalisteMarron.png?v=1775408562"
                    alt="La fondatrice de BabyEcho"
                    width={600}
                    height={600} />
                </motion.div>
                
                {/* Texte*/}
                <motion.div
                className="w-full md:w-1/2 flex flex-col gap-6 px-6 md:px-16 text-center md:text-left items-center md:items-start"
                initial= {{opacity: 0, x: 40}}
                whileInView={{opacity: 1, x: 0}}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true}} >
                    <p
                    className="text-[#D1657C] text-xl"
                    style={{ fontFamily: `var(--font-signature)`, fontSize: "1.5rem"}} >
                        A propos de la fondatrice
                    </p>
                    <h2
                    className="text-3xl md:text-4xl font-bold text-[#4F362C] leading-tight"
                    style={{ fontFamily: `var(--font-title)`}} >
                        Derriere BabyEcho, il y a .........
                    </h2>
                    <p
                    className="text-[#4F362C] text-base leading-relaxed"
                    style={{ fontFamily: `var(--font-body)`}}
                    >
                        Aujourd'hui BabyEcho accompagne les femmes qui veulent vivre leur grossesse avec sérénité, organisation et bienveillance.
                    </p>
                    <a href="/search"
                    className="self-center md:self-start mt-2 border-2 border-[#D1657C] text-[#D1657C] px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#D1657C] hover:text-white transition-all duration-300"
                    style={{ fontFamily: `var(--font-title)`}}>
                        Découvrir l'organisateur 
                    </a>
                </motion.div>

            </div>
        </section>
    );
}