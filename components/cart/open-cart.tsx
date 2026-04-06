import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center justify-center border border-[#D1657C] text-[#D1657C] rounded-full px-4 py-2 hover:bg-[#D1657C] hover:text-white transition-all duration-300">
        <ShoppingCartIcon 
          className={clsx("h-4 w-4", className)}
          />
        {quantity ? (
          <span className="ml-1 text-sm font-semibold">{quantity}</span>
        ) : null}
    </div>
  );
}
