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
                        className="border-2 border-[#D1657C] text-[#D1657C] px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#D1657C] hover:text-white transition-all duration-300 text-center whitespace-nowrap"
                        style={{ fontFamily: `var(--font-title)`}}>
                            Découvrir le BabyDoc 
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
                                    <th className="bg-[#D1657C] text-white py-3 px-3 text-center w-1/3"
                                        style={{ fontFamily: `var(--font-title)`}}>
                                        Avec le classeur
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
                                        <td className= "py-3 px-3 text-center text-[#D1657C]"
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