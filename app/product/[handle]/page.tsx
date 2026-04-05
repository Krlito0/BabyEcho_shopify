import Footer from "components/layout/footer";
import { Gallery } from "components/product/gallery";
import { ProductDescription } from "components/product/product-description";
import { HIDDEN_PRODUCT_TAG } from "lib/constants";
import { getProduct, getProductRecommendations } from "lib/shopify";
import type { Image } from "lib/shopify/types";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import HomeMarquee from "components/home-marquee";
import HomeReviews from "components/home-reviews";
import HomeFaq from "components/home-faq";
import NextImage from "next/image";
import HomeNewsletter from "components/home-newsletter";


export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: { index: indexable, follow: indexable},
    openGraph: url ? { images: [{ url, width, height, alt }]} : null,
  };
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Section Principale - Galerie + Infos */}
      <section className="bg-[#F8F1EC] py-12 px-6">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-12">

          {/* Galerie gauche */}
          <div className="w-full lg:w-1/2">
            <Suspense fallback={<div className="h-[500px] bg-[#E2F0EB] rounded-3xl animate-pulse"/>}>
              <Gallery images={product.images.slice(0, 5).map((image: Image) => ({
                src: image.url,
                altText: image.altText,
              }))}/>
            </Suspense>
          </div>

          {/* Infos droite */}
          <div className="w-full lg:w-1/2">
              <Suspense fallback={null}>
                <ProductDescription product={product} />
              </Suspense>
          </div>

        </div>
      </section>

      {/* Bandeau Défilant */}
      <HomeMarquee />

      {/* Grande Photo Produit */}
      <section className="bg-[#F8F1EC] py-16 px-6">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-8">
          <NextImage src={"https://cdn.shopify.com/s/files/1/0903/4776/6139/files/Beige_Aesthetic_Book_Review_Carousel_Instagram_Post.png?v=1775297908"}
          alt="Contenu du classeur BabyEcho"
          width={1200}
          height={800}
          className="w-full object-cover"/>
        </div>
      </section>

      {/* Avis client */}
      <HomeReviews />

      {/* Questions */}
      <HomeFaq />

      {/* NewsLetter */}
      <HomeNewsletter />

      <Footer />
      </>
  );
}
