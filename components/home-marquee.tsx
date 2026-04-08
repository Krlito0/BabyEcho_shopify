"use client";

const items = [
  "🤰 Validé par les futures mamans",
  "🌿 Conçu par une pro de la maternité",
  "💆‍♀️ Simplifié votre grossesse dés aujourd'hui",
  "⚠️ stock limité"
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