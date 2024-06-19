import { navItems } from "@/data/local";
import NavItem from "@/components/atom/NavItem";

export default function NavBar() {
  return (
    <nav className="m-4 rounded-3xl bg-slate-950/30 backdrop-blur-md">
      <div className="flex items-center justify-center gap-2 py-2">
        {navItems.map(({ name, icon, linkTo }) => (
          <NavItem key={name} name={name} icon={icon} linkTo={linkTo} />
        ))}
      </div>
    </nav>
  );
}
