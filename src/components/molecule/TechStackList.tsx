import { TechStack } from "@/types/projects";
import TechStackItem from "../atom/TechStackItem";

export default function TechStackList({
  techStack,
}: {
  techStack: TechStack[];
}) {
  return (
    <div className="flex gap-2">
      {techStack.map(({ id, name, logo, color }) => (
        <TechStackItem key={id} name={name} logo={logo} color={color} />
      ))}
    </div>
  );
}
