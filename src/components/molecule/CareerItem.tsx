import Image from "next/image";
import Link from "next/link";

export default function CareerItem({
  company,
  position,
  duration,
  type,
  logo,
  link,
}: {
  company: string;
  position: string;
  duration: string;
  type: string;
  logo: string;
  link: string;
}) {
  return (
    <section className="w-full rounded-md border p-4">
      <div className="flex gap-4">
        <div className="flex items-center">
          <Image
            className="rounded-md"
            src={logo}
            width={80}
            height={80}
            alt={`${company} logo`}
            unoptimized
          />
        </div>
        <div>
          <h4 className="font-semibold text-slate-950">{position}</h4>
          <div className="gap-2 sm:flex">
            <Link className="underline hover:text-slate-950" href={link}>
              {company}
            </Link>
            <p>
              <span> -</span> {type}
            </p>
          </div>
          <p>{duration}</p>
        </div>
      </div>
    </section>
  );
}
