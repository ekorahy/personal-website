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
    <section className="border p-4 sm:w-max">
      <div className="flex gap-2">
        <div className="flex items-center">
          <Image src={logo} width={70} height={70} alt={`${company} logo`} />
        </div>
        <div>
          <h4 className="font-semibold">{position}</h4>
          <div className="gap-2 sm:flex">
            <Link className="underline" href={link}>
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
