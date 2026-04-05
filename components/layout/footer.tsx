
import FooterMenu from "components/layout/footer-menu";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Suspense } from "react";

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightName = COMPANY_NAME || SITE_NAME || "";
  const menu = await getMenu("next-js-frontend-footer-menu");

  return (
    <footer className="bg-[#4F362C] text-[#F8F1EC]">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row justify-between gap-10">

        {/* Logo + tagline */}
        <div className="flex flex-col gap-4 max-w-xs">
          <div className= "flex items-center gap-2">
            <LogoSquare size="sm" />
            <span 
            className="text-lg font-bold uppercase tracking-widest text-[#F8F1EC]"
            style={{ fontFamily: `var(--font-title)` }}
            >
              {SITE_NAME}
              </span>
          </div>
          <p
          className="text-[#F8F1EC]/70 text-sm leading-relaxed"
          style={{ fontFamily: `var(--font-signature)`, fontSize: '1.1rem' }}>

            Bienveillance, organisation et emppowerment pour chaque future maman.
          </p>
        </div>

        {/* Menu */}
        <Suspense fallback={null} >
          <FooterMenu menu={menu} />
        </Suspense>

        {/* Contact */}
        <div className="flex flex-col gap-2 text-sm text-[#F8F1EC]/70">
          <p className="font-semibold text-[#F8F1EC] mb-2"
          style={{ fontFamily: `var(--font-title)` }}>
            Contact
          </p>
          <a
            href="mailto:contact@babyecho.fr"
            className="hover:text-[#FFB998] transition-colors">
            contact@babyecho.fr
          </a>
          <a
            href="https://babyecho.fr"
            className="hover:text-[#FFB998] transition-colors">
            babyecho.fr
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F8F1EC]/10 py-4 px-6 text-center text-xs text-[#F8F1EC]/50">
            2023-{currentYear} {copyrightName}.Tout droits réservés.
      </div>
    </footer>
  );
}
