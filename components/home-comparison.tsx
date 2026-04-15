"use client";

import { motion } from "framer-motion";

export default function HomeComparison() {
    const rows = [
        {feature: "Organisation", with: "Structurée et fluide", without: "Désorganisée"},
        {feature: "Démarches & suivi", with: "Clair et guidé", without: "Confuses et oublié"},
        {feature: "Documents de grossesse", with: "rangé et accessibles", without: "Eparpillé"},
        {feature: "Informations", with: "Fiables et rassurantes", without: "Sources stressantes"},
        {feature: "Urgences", with: "Repères pour agir", without: "Stress et incertitude"},
        {feature: "Souvenirs & album de grossesse", with: "Tout conservé au même endroit", without: "Souvenirs perdus ou dispersés"},
        {feature: "Emotions & charge mentale", with: "Esprit apaisé", without: "Charge mentale élevée"},
    ];

    const points = [
        "Une grossesse organisée et sans charge mentale",
        "Tous vos documents au même endroit",
        "Des repères clairs pour ne plus douter",
        "Un accompagnement à chaque étape"
    ];

    return (
        <section className="bg-[#E2F0EB] py-16 px-4">
            <div className="mx-auto max-w-6xl flex flex-col gap-8">

                {/* Titre Centré */}
                <motion.div
                className="text-center flex flex-col gap-3"
                initial= {{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 0.6 }}
                viewport={{ once: true}} >
                    <h2
                    className="text-2xl md:text-4xl font-bold text-[#4F362C]"
                    style={{ fontFamily: `var(--font-title)`}} >
                            Pourquoi avoir le classeur BabyDoc ?
                    </h2>
                </motion.div>

                {/* Tableau + Bouton */}
                <div className="flex flex-col md:flex-row gap-8 items-start">

                { /* Bouton a gauche sur Desktop, en bas sur mobile */}
                    <motion.div
                        className="order-2 md:order-1 w-full md:w-auto flex justify-center md:justify-start md:self-center"
                        initial= {{opacity: 0, x: -30}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true}} 
                        >
                        <a href="/product/le-1er-classeur-de-suivi-de-grossesse"
                        className="mt-4 self-start bg-[#D1657C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4F362C] transition-colors duration-300 text-center w-full md:w-auto flex items-center justify-center"
                        style={{ fontFamily: `var(--font-body)`}}>
                            Découvrir mon BabyDoc 
                        </a>
                    </motion.div>

                {/* Tableau */}
                    <motion.div
                    className="order-1 md:order-2 w-full overflow-x-auto"
                    initial= {{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true}}>
                        <table className="w-full text-xs rounded-2xl overflow-hidden shadow-lg">
                            <thead>
                                <tr>
                                    <th className=" text-white py-3 px-3 text-left w-1/3"
                                        style={{ fontFamily: `var(--font-title)`}}></th>
                                    <th className="bg-[#D1657C] text-white py-3 px-3 text-center w-1/3 shadow-lg rounded-tl-2xl"
                                        style={{ fontFamily: `var(--font-title)`}}>
                                        ✨ Avec le classeur
                                    </th>
                                    <th className="bg-[#4F362C] text-white py-3 px-3 text-center w-1/3"
                                    style={{ fontFamily: `var(--font-title)`}}>
                                        Sans le classeur
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, i) => (
                                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F1EC]"}>
                                        <td className= "py-3 px-3 text-[#4F362C] font-semibold"
                                            style={{ fontFamily: `var(--font-body)`}}>
                                            {row.feature}
                                        </td>
                                        <td className= "py-3 px-3 text-center text-[#D1657C] font-semibold bg-[#D1657C]/5 border-x-2 border-[#D1657C]/20"
                                            style={{ fontFamily: `var(--font-body)`}}>
                                            {row.with}
                                        </td>
                                        <td className= "py-3 px-3 text-center text-gray-500"
                                            style={{ fontFamily: `var(--font-body)`}}>
                                            {row.without}
                                        </td>   
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}