import clsx from "clsx";

const Prose = ({ html, className }: { html: string; className?: string }) => {
  return (
    <div
      className={clsx(
        "prose mx-auto max-w-6xl text-base leading-7 text-[#4F362C] prose-headings:text-[#4F362C] prose-headings:mt-8 prose-a:text-[#D1657C] prose-strong:text-[#4F362C]",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;
