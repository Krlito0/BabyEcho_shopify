import CartModal from "components/cart/modal";
import LogoSquare from "components/logo-square";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = [
    { title: "Accueil", path: "/"},
    { title: "BabyDoc", path: "/product/le-1er-classeur-de-suivi-de-grossesse"},
    { title: "Mon histoire", path: "#about"},
    { title: "FAQ", path: "#faq"},
    { title: "Contactez-nous", path: "#newsletter"}
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#F8F1EC] border-b border-[#D1657C]/20 shadow-sm">
      
      {/* Mobile Menu*/}
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>

      {/* Logo */}
      <div className="flex items-center">
          <Link href="/" prefetch={true} >
            <LogoSquare />
          </Link>
      </div>
          

      {/* Nav links */}
            <ul className="hidden md:flex items-center gap-8 text-sm">
              {menu.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-[#4F362C] font-medium hover:text-[#D1657C] transition-colors duration-200"
                    style={{ fontFamily: `var(--font-body)` }} >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

      {/* Connexion + Panier */}
        <div className="flex items-center gap-4">
          <Link
            href="/account"
            className="hidden md:block border border-[#D1657C] text-[#D1657C] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#D1657C] hover:text-white transition-all duration-300"
            style={{ fontFamily: `var(--font-body)` }} >
              Connexion
          </Link>
          <CartModal />
        </div>

    </nav>
  );
}
