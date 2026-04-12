import clsx from "clsx";
import Price from "./price";

const Label = ({
  title,
  amount,
  currencyCode,
  position = "bottom",
  compareAtAmount,
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
  compareAtAmount?: string;
}) => {
  const discount = compareAtAmount
    ? Math.round((1 - parseFloat(amount) / parseFloat(compareAtAmount)) * 100)
    : null

  return (
    <div
      className={clsx(
        "absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label",
        {"lg:px-20 lg:pb-[35%]": position === "center"}
      )}
    >
      <div className="flex items-center rounded-full border border-[#D1657C]/20 bg-[#F8F1EC]/90 backdrop-blur-sm p-2 text-xs font-semibold text-[#4F362C] gap-2 flex-wrap">
        <h3 className="mr-2 line-clamp-2 grow pl-2 leading-none tracking-tight">
          {title}
        </h3>
        <div className="flex items-center gap-1">
          {compareAtAmount ? (
          <span className="text-[#4F362C]/40 line-through text-xs">
            {compareAtAmount}€
          </span>
          ): (
            <span className="text-[#4F362C]/40 line-through text-xs">
              59.99€
            </span>
          )}
          <Price
          className="flex-none rounded-full bg-[#D1657C] p-2 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
        {discount && discount > 0 && (
          <span className="rounded-full bg-[#FFBE98] text-[#4F362C] px-2 py-1 text-xs font-bold">
            -{discount}%
          </span>
        )}
        </div>
      </div>
    </div>
  );
};

export default Label;
