"use client";

import { motion } from "framer-motion";

export default function HomeComparison() {
    const rows = [
        {feature: "Démarches administratives", with: "Marche à suivre donnée", without: "Confuses, oubliées ou faites en retard"},
        {feature: "Papiers de grossesse", with: "rangé et trié", without: "Eparpillé"},
        {feature: "Organisation globale", with: "Structurée et fluide", without: "Désorganisée"},
        {feature: "Informations", with: "Fiable et simplifiées", without: "Parfois peu fiable et anxiogènes"},
        {feature: "Gestion des urgences", with: "Repères clairs pour agir", without: "Stress et incertitude"},
        {feature: "Suivi de grossesse", with: "Vision claire et complète", without: "Manque de visibilité"},
        {feature: "Charge mentale", with: "Apaisée", without: "Elevée"},
    ];

    const points = [
        "Une grossesse organisée et sans charge mentale",
        "Tous vos documents au même endroit",
        "Des repères clairs pour ne plus douter",
        "Un accompagnement à chaque étape"
    ];

    return (
        <section className="bg-[#E2F0EB] py-20 px-6">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-12 items-start">

                {/* Gauche*/}
                <motion.div
                className="w-full md:w-2/5 flex flex-col gap-6"
                initial= {{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{ duration: 0.6 }}
                viewport={{ once: true}}
                >
                    <h2
                    className="text-3xl md:text-4xl font-bold text-[#4F362C] leading-tight"
                    style={{ fontFamily: `var(--font-title)`}}
                    >
                            Avec ou sans le classeur BabyEcho
                    </h2>
                    <p
                        className="text-[#4F362C] font-semibold"
                        style={{ fontFamily: `var(--font-body)`}}
                        >
                            Tout ce dont vous avez besoin, réuni en un seul endroit.
                    </p>
                    <ul className="flex flex-col gap-3">
                        {points.map((point) => (
                            <li key={point} className="flex items-center gap-3 text-[#4F362C]"
                            style={{ fontFamily: `var(--font-body)`}}
                            >
                                <span className="text-[#D1657C] text-lg">✔</span>
                                {point}
                            </li>
                        ))}
                    </ul>
                    <a href="/product/le-1er-classeur-de-suivi-de-grossesse"
                    className="self-start mt-4 border-2 border-[#D1657C] text-[#D1657C] px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#D1657C] hover:text-white transition-all duration-300"
                    style={{ fontFamily: `var(--font-title)`}}>
                        Objectif : Zéro charge mentale 
                    </a>
                </motion.div>

                {/* Tableau*/}
                <motion.div
                className="w-full md:w-3/5 overflow-x-auto"
                initial= {{opacity: 0, x: 30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true}}
                >
                    <table className="w-full text-sm rounded-2xl overflow-hidden shadow-lg">
                        <thead>
                            <tr>
                                <th className="bg-[#4F362C] text-white py-4 px-4 text-left"
                                    style={{ fontFamily: `var(--font-title)`}}></th>
                                    <th className="bg-[#D1657C] text-white py-4 px-4 text-center"
                                    style={{ fontFamily: `var(--font-title)`}}>
                                        Avec le classeur
                                    </th>
                                    <th className="bg-[#4F362C] text-white py-4 px-4 text-center"
                                    style={{ fontFamily: `var(--font-title)`}}>
                                        Sans le classeur
                                    </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F1EC]"}>
                                    <td className= "py-4 px-4 text-[#4F362C] font-semibold text-xs"
                                        style={{ fontFamily: `var(--font-body)`}}>
                                            {row.feature}
                                    </td>
                                    <td className= "py-4 px-4 text-center text-[#D1657C] text-xs"
                                        style={{ fontFamily: `var(--font-body)`}}>
                                            <span className="block text[#D1657C] font-bold"></span>
                                            {row.with}
                                    </td>
                                    <td className= "py-4 px-4 text-center text-gray-500 text-xs"
                                        style={{ fontFamily: `var(--font-body)`}}>
                                            <span className="block text[#4F362C] font-bold"></span>
                                            {row.without}
                                    </td>   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
}