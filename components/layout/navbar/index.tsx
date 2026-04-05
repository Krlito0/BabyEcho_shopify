import CartModal from "components/cart/modal";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#F8F1EC] border-b border-[#D1657C]/20 shadow-sm">
      
      {/* Mobile Menu*/}
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>

      {/* Logo + nav links*/}
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-lg font-bold uppercase tracking-widest text-[#4F362C] hidden lg:block" style={{ fontFamily: `var(--font-title)` }}>
              {SITE_NAME}
            </div>
          </Link>
          </div>

      {/* Menu links */}
          {menu.length ? (
            <ul className="hidden gap-8 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-[#4F362C] font-medium hover:text-[#D1657C] transition-colors duration-200"
                    style={{ fontFamily: `var(--font-body)` }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

      {/* Search + Cart */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
          <CartModal />
        </div>

    </nav>
  );
}
