"use client";

import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  const [openSection, setOpenSection] = useState<string | null>("pourquoi");
  const searchParams = useSearchParams();

  const selectedVariant = product.variants.find((variant) =>
  variant.selectedOptions.every(
    (option) => searchParams?.get(option.name.toLowerCase()) === option.value
  )
) || product.variants[0];

  return (
    <>
    {/* Titre */}
      <div className="mb-4 flex flex-col border-b border-[#D1657C]/20 pb-4">
        <h1 className="mb-2 text-3xl font-bold text-[#4F362C]"
        style={{ fontFamily: "var(--font-title)" }}>
          {product.title}
        </h1>
        <p className="text-[#4F362C]/70 text-base"
          style={{ fontFamily: `var(--font-body)` }}>
            Le 1er classeur 2-en-1 qui organise ta grossesse et te garde des souvenirs à vie
        </p>
        <div className="flex items-center gap-3 mt-2">
          <div className="rounded-full bg-[#D1657C] px-4 py-2 text-sm text-white font-bold">
            <Price
            amount={product.priceRange.minVariantPrice.amount}
            currencyCode={product.priceRange.minVariantPrice.currencyCode}
            />
          </div>
          {selectedVariant?.compareAtPrice?.amount && (
            <span className="text-sm text-[#4F362C]/50 line-through">
              {parseFloat(selectedVariant.compareAtPrice.amount).toFixed(2)}€
            </span>
          )}
        </div>
      </div>

      {/* Variantes */}
      <VariantSelector 
      options={product.options} 
      variants={product.variants} />

      {/* Description accordion*/}
      {product.descriptionHtml ? (
        <div className="mb-4">
          <button className="w-full flex justify-between items-center py-3 text-left border-b border-[#D1657C]/20"
          onClick={() => setOpenSection(openSection === "pourquoi" ? null : "pourquoi")}>
            <span className="font-semibold text-[4F362C]"
                style={{ fontFamily: "var(--font-title)" }}>
                  Pourquoi tu vas l'aimer ?
            </span>
            <span className="text-[#D1657C] text-xl">{openSection === "pourquoi" ? "-" : "+"}</span>
          </button>
          {openSection === "pourquoi" && (
            <Prose
          className="mt-3 mb-4 text-sm leading-relaxed text-[#4F362C]/80"
          html={product.descriptionHtml}
            />
          )}
        </div>   
      ) : null}

      {/* Bouton panier */}
      <div className="py-6">
        <AddToCart product={product} />
      </div>
      

      {/* Mode de Paiement */}
      <div className="mb-4 flex flex-wrap gap-2 items-center">
        <span className="text-xs text-[#4F362C]/50"
          style={{ fontFamily: "var(--font-body)" }}>
            Paiment sécurisé :
        </span>
        {["Visa", "Mastercard", "Apple Pay", "Paypal", "Shop Pay"].map((p) => (
          <span
            key={p}
            className="text-xs border border-[#4F362C]/20 rounded-md px-2 py-1 text-[#4F362C]/60">
              {p}
          </span>
        ))}
      </div>

    </>
  );
}
