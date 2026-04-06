import Image from "next/image";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <Image
    src="https://cdn.shopify.com/s/files/1/0903/4776/6139/files/Logo_principal_framboise.png?v=1765550433"
    alt="BabyEcho"
    width={size === "sm" ? 50 : 70}
    height={size === "sm" ? 50 : 70}
    className="object-contain"
    />
  );
}
