"use client";

const items = [
  "🤍 Bienveillance",
  "📋 Organisation",
  "💪 Empowerment",
  "👩‍⚕️ Expertise",
  "🌸 Douceur maternelle",
  "✨ Fait en France",
  "📅 Suivi semaine par semaine",
  "🏥 Rendez-vous médicaux",
  "💆‍♀️ Zéro charge mentale",
  "🌿 Conçu avec des pros de santé",
];

const text = items.join("    .    ");

export default function HomeMarquee() {
  return (
    <section style={{ background: "#D1657C", padding: "24px 0", overflow: "hidden"}}>
      <div style={{
        display: "flex",
        width: "max-content",
        animation: "scroll-left 25s linear infinite",
      }}>
        <span style={{ color:"white", fontSize: "20px", fontWeight: 600, whiteSpace: "nowrap", paddingRight: "40px"}}>
            {text} . {text}
        </span>
      </div>

      

      <style>{`
        @keyframes scroll-left {
            0% { transform: translateX(0);}
            100% { transform: translateX(-50%);}
            }

        @keyframes scroll-right {
            0% { transform: translateX(-50);}
            100% { transform: translateX(0%);}
        }
        `}</style>
    </section>
  );
}