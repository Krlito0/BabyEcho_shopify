export default function HomeValues() {
    const values = [
        {
      emoji: "👩‍⚕️",
      title: "Expertise",
      description: "Créé par une professionnelle de la maternité",
    },
    {
      emoji: "📋",
      title: "Organisation",
      description: "Rangez et retrouvez facilement tout vos documents de grossesse.",
    },
    {
      emoji: "🤍",
      title: "Souvenir",
      description: "Gardez une trace unique de votre grossesse: moments, émotions, souvenirs... à conserver pour toujours.",
    },
    {
      emoji: "✨",
      title: "Prémium",
      description: "Un classeur haut de gamme, conçu pour durer dans le temps.",
    },
    ];

    return (
        <section className="bg-[#E2F0EB] py-16 px-6">
            <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {values.map((value) => (
                    <div key={value.title} className="flex flex-col items-center gap-3">
                        <span className="text-4xl">{value.emoji}</span>
                        <h3
                        className="text-[#4F362C] font-bold text-lg"
                        style={{ fontFamily: `var(--font-title)`}}
                        >
                            {value.title}
                        </h3>
                        <p
                        className="text-[#4F362C]/70 text-sm leading-relaxed"
                        style={{ fontFamily: `var(--font-bondy)`}}
                        >
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}