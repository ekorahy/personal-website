import { navItems } from "@/data/local/navigation";
import NavItem from "@/components/atom/NavItem";
import { ToggleTheme } from "../atom/ToggleTheme";

export default function NavBar() {
  return (
    <nav className="m-4 rounded-3xl bg-slate-950/30 dark:bg-white/30 backdrop-blur-md">
      <div className="flex items-center justify-center gap-2 py-2">
        {navItems.map(({ name, icon, linkTo }) => (
          <NavItem
            key={name}
            name={name}
            icon={icon}
            linkTo={linkTo}
            category="navbar"
          />
        ))}
        <ToggleTheme />
      </div>
    </nav>
  );
}
