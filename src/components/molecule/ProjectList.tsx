import { projects } from "@/data/local/projects";
import ProjectItem from "../atom/ProjectItem";
import { ProjectsList } from "@/types/projects";

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map(({ id, name, image, description, linkDemo, techStack }) => (
        <ProjectItem
          key={id}
          name={name}
          image={image}
          description={description}
          linkDemo={linkDemo}
          techStack={techStack}
        />
      ))}
    </div>
  );
}
