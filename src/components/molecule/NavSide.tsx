import { navItems } from "@/data/local/navigation";
import NavItem from "../atom/NavItem";
import Image from "next/image";
import { ToggleTheme } from "../atom/ToggleTheme";

export default function NavSide() {
  return (
    <aside className="fixed hidden h-screen border-r px-6 sm:block">
      <div className="flex h-screen flex-col justify-between">
        <div>
          <div className="flex gap-2 border-b border-dashed pb-6">
            <Image
              src="/profile.jpg"
              className="rounded-full"
              width={50}
              height={50}
              alt="Profil photo"
              unoptimized
              priority={true}
            />
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-slate-950">Ekorahy</h1>
              <p className="text-sm font-light">@ekorahy</p>
            </div>
          </div>
          <nav className="my-6 flex flex-col gap-4">
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
        </div>
        <div className="mx-auto mb-10">
          <ToggleTheme />
        </div>
      </div>
    </aside>
  );
}
