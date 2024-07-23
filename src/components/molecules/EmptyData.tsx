import Image from "next/image";
import Link from "next/link";

export default function EmptyData({title}: {title: string}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="w-max bg-gradient-to-r from-emerald-200 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent">
        {title}
      </h2>
      <Image
        className="mb-6"
        src="/not-found.png"
        width={150}
        height={150}
        alt="Not found image"
      />
    </div>
  );
}
