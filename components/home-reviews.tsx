"use client";

const baseReviews = [
  {
    name: "Luna",
    subtitle: "enceinte de son 1er bébé",
    review: "Trop contente d'utiliser le classeur, il est pratique, utile et trop jolie !",
    emoji: "🌸",
  },
  {
    name: "Eva",
    subtitle: "enceinte de son 3e enfant",
    review: "Très utile et pratique.",
    emoji: "🌿",
  },
  {
    name: "Clara",
    subtitle: "enceinte de son 1er enfant",
    review: "Ça a beaucoup diminué ma charge mentale.",
    emoji: "💆‍♀️",
  },
  {
    name: "Jessica",
    subtitle: "enceinte de son 2e enfant",
    review: "Merci d'avoir enfin créé ce classeur. INDISPENSABLE.",
    emoji: "🤍",
  }
];

const reviews = [...baseReviews,...baseReviews,...baseReviews];

export default function HomeReviews() {
  return (
    <section className="bg-[#F8F1EC] py-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <p
          className="text-[#D1657C] text-xl mb-2"
          style={{ fontFamily: "var(--font-signature)", fontSize: "1.5rem" }}
        >
          Elles en parlent mieux que nous
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#4F362C]"
          style={{ fontFamily: "var(--font-title)" }}
        >
          Nos clientes adorent mon BabyDoc 🤍
        </h2>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: "24px",
            width: "max-content",
            animation: "scroll-left 30s linear infinite",
          }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "28px",
                width: "260px",
                flexShrink: 0,
                boxShadow: "0 4px 20px rgba(79,54,44,0.08)",
                border: "1px solid rgba(209,101,124,0.15)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>
                {review.emoji}
              </div>
              <p style={{
                color: "#4F362C",
                fontSize: "14px",
                lineHeight: "1.6",
                marginBottom: "16px",
                fontStyle: "italic",
              }}>
                "{review.review}"
              </p>
              <p style={{
                color: "#D1657C",
                fontWeight: "700",
                fontSize: "14px",
              }}>
                {review.name}
              </p>
              <p style={{
                color: "#4F362C",
                opacity: 0.5,
                fontSize: "12px",
              }}>
                {review.subtitle}
              </p>
              <div style={{ marginTop: "12px", color: "#FFBE98", fontSize: "16px" }}>
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}