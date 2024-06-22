import { navFooter } from "@/data/local/navfooter";
import NavFooterItem from "../atom/NavFooterItem";

export default function NavFooterList() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {navFooter.map(({ name, link }, idx) => (
        <NavFooterItem key={idx} name={name} link={link} />
      ))}
    </div>
  );
}
