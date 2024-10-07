import Image from "next/image";

const Tool = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-sm p-4 border border-[--line-color]">
      <Image
        src={image}
        width={38}
        height={38}
        alt={name}
        sizes="(max-width: 768px) 60vw, (max-width: 1200px) 75vw"
      />
      <span className="text-[--pure-text] text-[11px] uppercase mt-2 tracking-widest font-[600] opacity-75 px-2 rounded-sm text-center">
        {name}
      </span>
    </div>
  );
};

export default Tool;
