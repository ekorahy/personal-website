import { favoriteTechs } from "@/data/local/favoritetechs";
import FavoriteTechItem from "../atom/FavoriteTechItem";

export default function FavoriteTechList() {
  return (
    <div className="flex gap-3 mt-2">
      {
        favoriteTechs.map(({id, name, logo, color}) => (
          <FavoriteTechItem key={id} name={name} logo={logo} color={color} />
        ))
      }
    </div>
  );
}