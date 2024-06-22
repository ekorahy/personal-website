export type TechStack = {
  id: string;
  name: string;
  logo: React.ReactNode;
  color: string;
};

export type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  linkDemo: string;
  techStack: TechStack[];
};

export type ProjectsList = Project[];