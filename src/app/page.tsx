import CareerItem from "@/components/molecule/CareerItem";
import HeaderPage from "@/components/molecule/HeaderPage";
import { career } from "@/data/local/career";
import Image from "next/image";

export default function Home() {
  return (
    <article>
      <HeaderPage
        title="Home"
        description="Introduction and professional career journey."
      />
      <div className="mt-4 flex gap-2 sm:hidden">
        <Image
          src="/profile.jpg"
          className="rounded-full"
          width={55}
          height={55}
          alt="Profil photo"
        />
        <div className="flex flex-col justify-center">
          <h3 className="font-bold">Eko Rahayu Widodo</h3>
          <p className="font-light">@ekorahy</p>
        </div>
      </div>
      <p className="mb-2 mt-4 text-xl font-bold">Hi, I&apos;m Eko</p>
      <ul className="mx-4 mb-2 list-disc">
        <li>Front-end Engineer.</li>
        <li>Tech Enthusiast.</li>
        <li>Lifelong Learner.</li>
      </ul>
      <p className="mb-2">
        Working within the React ecosystem for front-end web development and
        Kotlin for mobile app development (Android).
      </p>
      <q className="italic">
        Manifesting ideas into digital reality that are easily accessible and
        exclusive for user.
      </q>
      <p className="my-4">Available for opportunities.</p>
      <div className="mb-4">
        <h3 className="mb-2 font-bold">Career</h3>
        {career.map(({ id, company, position, duration, type, logo, link }) => (
          <CareerItem
            key={id}
            company={company}
            position={position}
            duration={duration}
            type={type}
            logo={logo}
            link={link}
          />
        ))}
      </div>
    </article>
  );
}
