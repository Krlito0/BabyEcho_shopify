export default function HomeValues() {
    const values = [
        {
      emoji: "📋",
      title: "Organisation",
      description: "Tout ce dont vous avez besoin pour suivre votre grossesse semaine par semaine.",
    },
    {
      emoji: "🤍",
      title: "Bienveillance",
      description: "Un espace doux et rassurant pour vivre votre grossesse sereinement.",
    },
    {
      emoji: "💪",
      title: "Empowerment",
      description: "Prenez le contrôle de votre parcours maternel avec confiance.",
    },
    {
      emoji: "👩‍⚕️",
      title: "Expertise",
      description: "Conçu avec des professionnels de santé pour vous accompagner au mieux.",
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