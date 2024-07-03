import { favoriteTechs } from "@/data/local/favoritetechs";
import FavoriteTechItem from "../atom/FavoriteTechItem";

export default function FavoriteTechList() {
  return (
    <div className="mt-2 flex justify-center gap-3 sm:justify-start">
      {favoriteTechs.map(({ id, name, logo, color }) => (
        <FavoriteTechItem key={id} name={name} logo={logo} color={color} />
      ))}
    </div>
  );
}
