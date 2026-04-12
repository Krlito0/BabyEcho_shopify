import HomeAbout from "components/home-about";
import HomeComparison from "components/home-comparison";
import HomeFaq from "components/home-faq";
import HomeHeroPhoto from "components/home-hero-photo";
import HomeMarquee from "components/home-marquee";
import HomeProductDetail from "components/home-product-detail";
import HomeReviews from "components/home-reviews";
import HomeValues from "components/home-values";
import Footer from "components/layout/footer";
import WaveDivider from "components/wave-divider";

export const metadata = {
  description:
    "L'organisateur de grossess pensé pour accompagner chaque femme dans son parcours maternel",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section*/}
      <section className="bg-[#F8F1EC] px-6 py-20 text-center flex flex-col items-center gap-6">
        <h1
        className="text-4xl md:text-6xl font-bold text-[#4F362C] leading-tight max-w-3xl"
        style={{ fontFamily: `var(--font-title)`}}
        >
          Imagine une grossesse organisée, sereine... et inoubliable.
        </h1>
        <p
        className="text-[#D1657C] text-2xl"
        style={{ fontFamily: `var(--font-signature)`}}
        >
          Mon BabyDoc : le classeur qui organise ta grossesse... et garde chaque souvenir pour toujours
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 mt-2">
          {["Un Repère", "Un Soutien", "Un Souvenir"].map((mot, i) => (
            <div key={mot} className="flex items-center gap-3 md:gap-8">
              <span className="text-base md:text-xl font-bold text-[#4F362C] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-title)"}}>
                  {mot}
                </span>
                {i < 2 && (
                  <span className="text-[#D1657C] text-2xl hidden md:block">✦</span>
                )}
            </div>
          ))}
        </div>
        <a
        href="/product/le-1er-classeur-de-suivi-de-grossesse"
        className="mt-4 bg-[#D1657C] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#4F362C] transition-colors duration-300"
        style={{ fontFamily: `var(--font-body)`}}
        >
          Je découvre mon BabyDoc
        </a>
      </section>
      <WaveDivider topColor="#F8F1EC" bottomColor="#E2F0EB"/>
      <HomeValues />
      <WaveDivider topColor="#E2F0EB" bottomColor="#F8F1EC"/>
      <HomeProductDetail />
      <WaveDivider topColor="#F8F1EC" bottomColor="#E2F0EB"/>
      <HomeComparison />
      <WaveDivider topColor="#E2F0EB" bottomColor="#F8F1EC"/>
      <HomeFaq />
      <WaveDivider topColor="#F8F1EC" bottomColor="#D1657C"/>
      <HomeMarquee />
      <WaveDivider topColor="#D1657C" bottomColor="#E2F0EB"/>
      <HomeAbout />
      <WaveDivider topColor="#E2F0EB" bottomColor="#F8F1EC"/>
      <HomeReviews />
      <WaveDivider topColor="#F8F1EC" bottomColor="#F8F1EC"/>
      <HomeHeroPhoto />
      <WaveDivider topColor="#4F362C" bottomColor="#4F362C"/>
      <Footer />
    </>
  );
}
