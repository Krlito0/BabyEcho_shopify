"use client";

import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { useState } from "react";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  const [openSection, setOpenSection] = useState<string | null>("pourquoi"); 
  return (
    <>
    {/* Titre */}
      <div className="mb-4 flex flex-col border-b border-[#D1657C]/20 pb-4">
        <h1 className="mb-2 text-3xl font-bold text-[#4F362C]"
        style={{ fontFamily: "var(--font-title)" }}>
          {product.title}
          </h1>
        <div className="flex items-center gap-3 mt-2">
          <div className="rounded-full bg-[#D1657C] px-4 py-2 text-sm text-white font-bold">
            <Price
            amount={product.priceRange.minVariantPrice.amount}
            currencyCode={product.priceRange.minVariantPrice.currencyCode}
            />
          </div>
          {(product as any).compareAtPriceRange?.minVariantPrice?.amount && (
            <span className="text-sm text-[#4F362C]/50 line-through">
              <Price
              amount={(product as any).compareAtPriceRange.minVariantPrice.amount}
              currencyCode={(product as any).compareAtPriceRange.minVariantPrice.currencyCode}
              />
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

      {/* Bouton panier */}
      <AddToCart product={product} />
    </>
  );
}
