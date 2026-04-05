import Image from "next/image";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <Image
    src="https://cdn.shopify.com/s/files/1/0903/4776/6139/files/1_3eafb5aa-660c-4574-9146-ecf300a7c581.png?v=1765550641"
    alt="BabyEcho"
    width={size === "sm" ? 30 : 40}
    height={size === "sm" ? 30 : 40}
    className="object-contain"
    />
  );
}
