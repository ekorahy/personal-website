import { projects } from "@/data/local/projects";
import ProjectItem from "../atom/ProjectItem";
import { ProjectsList } from "@/types/projects";

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {projects.map(
        ({ id, name, category, image, description, linkDemo, techStack }) => (
          <ProjectItem
            key={id}
            name={name}
            category={category}
            image={image}
            description={description}
            linkDemo={linkDemo}
            techStack={techStack}
          />
        ),
      )}
    </div>
  );
}
