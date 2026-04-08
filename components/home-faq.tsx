"use client";

import {motion, AnimatePresence} from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        question: "À quel moment de la grossesse puis-je commencer à utiliser le classeur ? ",
        answer: "Tu peux commencer dès le début de ta grossesse. Plus tu l’utilises tôt, plus il t’aidera à t’organiser et à te repérer facilement."
    },
    {
        question: "À quoi sert concrètement ce classeur ? ",
        answer: "Il te permet de centraliser tous tes documents médicaux au même endroit, pour ne plus jamais les chercher ou en oublier lors de tes rendez-vous.Il t’aide à suivre ta grossesse étape par étape, grâce à des repères clairs et une organisation structurée.Il te permet aussi d’anticiper : rendez-vous, examens, démarches administratives, préparation de la maternité… tout est pensé pour ne rien laisser au hasard.Enfin, il t’accompagne au quotidien pour alléger ta charge mentale, t’aider à y voir plus clair et te sentir plus sereine tout au long de ta grossesse."
    },
    {
        question: "Est-ce que le classeur est facile à utiliser ?",
        answer: "Oui, tout est guidé et structuré. Tu es accompagnée pas à pas, sans avoir besoin de réfléchir à comment t’organiser."
    },
    {
        question: "Que contient le classeur ?",
        answer: "Des pochettes pour ranger tes documents médicaux, des explications claires sur la grossesse, des checklists (comme les valises de maternité), un projet de naissance à remplir et détachable, des pages dédiées aux démarches administratives, des photos de toi et ton bébé à coller, une petite pochette pour le bracelet de ton bébé après l'accouchement... "
    },
    {
        question: "Est-ce adapté si c’est ma première grossesse ?",
        answer: "Oui, il est particulièrement utile pour une première grossesse, car il t’apporte des repères clairs et t’aide à ne rien oublier. "
    },
    {
        question: "Et si ce n'est pas ma première grossesse ?",
        answer: "Il reste tout aussi utile pour mieux t’organiser, gagner du temps et garder une trace de cette nouvelle grossesse."
    },
    {
        question: "Est-ce que ça va vraiment m’aider à être moins stressée ?",
        answer: "Oui, en centralisant toutes les informations et en structurant ton suivi, le classeur te permet de réduire ta charge mentale et d’y voir plus clair."
    },
    {
        question: "Est-ce une bonne idée cadeau ?",
        answer: "Oui, c’est un cadeau à la fois utile et attentionné. Il accompagne la future maman tout au long de sa grossesse, l’aide à s’organiser et à se sentir plus sereine au quotidien. Et au-delà de son côté pratique, il devient un joli souvenir à conserver et à partager plus tard"
    }
];

export default function HomeFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="bg-[#F8F1EC] py-20 px-6">
            <div className="mx-auto max-w-3xl flex flex-col gap-10 px-4">

                <motion.div
                className="text-center flex flex-col gap-3"
                initial= {{opacity: 0, x: 30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{ duration: 0.6 }}
                viewport={{ once: true}}
                >
                    <p
                        className="text-[#D1657C] text-xl"
                        style={{ fontFamily: `var(--font-signature)`, fontSize: "1.5rem"}}>
                            On répond à vos questions
                    </p>
                </motion.div>

                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            className="border border-[#D1657C]/20 rounded-2xl overflow-hidden bg-white"
                            initial= {{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true}}>

                            <button
                            className="w-full flex justify-between items-center px-6 py-5 text-left"
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                                <span className="text-[#4F362C] font-semibold text-base"
                                    style={{ fontFamily: `var(--font-title)`}}>
                                    {faq.question}
                                </span>
                                <span className="text-[#D1657C] text-2xl font-light ml-4">
                                    {openIndex === i ? "-" : "+"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial= {{height: 0, opacity: 0 }}
                                        animate= {{height: "auto", opacity: 1 }}
                                        exit= {{height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-5 text-[#4F362C]/70 text-sm leading-relaxed"
                                        style={{ fontFamily: `var(--font-body)`}}>
                                            {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div> 
            </div>
        </section>
    )
}