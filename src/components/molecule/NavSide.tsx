import { navItems } from "@/data/local/navigation";
import NavItem from "../atom/NavItem";
import Image from "next/image";

export default function NavSide() {
  return (
    <aside className="hidden border-r px-6 sm:block">
      <div className="flex gap-2 border-b border-dashed pb-6">
        <Image
          src="/profile.jpg"
          className="rounded-full"
          width={50}
          height={50}
          alt="Profil photo"
        />
        <div className="flex flex-col justify-center">
          <h1 className="font-bold">Ekorahy</h1>
          <p className="text-xs font-light">@ekorahy</p>
        </div>
      </div>
      <nav className="my-6 flex flex-col gap-6">
        {navItems.map(({ name, icon, linkTo }) => (
          <NavItem
            key={name}
            name={name}
            icon={icon}
            linkTo={linkTo}
            category="navside"
          />
        ))}
      </nav>
    </aside>
  );
}