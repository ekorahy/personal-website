import { TechStackListProps } from "@/types";
import TechStackItem from "../atoms/TechStackItem";

export default function TechStackList({ techStack }: TechStackListProps) {
  return (
    <div className="absolute bottom-0 left-6 flex gap-2">
      {techStack.map(({ id, name, logo, color }) => (
        <TechStackItem key={id} name={name} logo={logo} color={color} />
      ))}
    </div>
  );
}
