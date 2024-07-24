import { buttonVariants } from "@/components/atoms/Button";
import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

type Category = "navbar" | "navside";
type Color = string | string[];
type Direction = "left" | "right";
type Speed = "fast" | "normal" | "slow";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export interface CareerItemProps {
  company: string;
  position: string;
  duration: string;
  type: string;
  logo: string;
  link: string;
}

export interface DescriptionPageProps {
  description: string;
}

export interface FavoriteTechItemProps {
  name: string;
  logo: React.ReactNode;
  color: string;
}

export interface NavFooterItemProps {
  name: string;
  link: string;
}

export interface NavItemProps {
  name: string;
  icon: React.ReactNode;
  linkTo: string;
  category: Category;
}

export interface TechStack {
  id: string;
  name: string;
  logo: React.ReactNode;
  color: string;
}

export interface ProjectItemProps {
  name: string;
  category: string;
  image: string;
  description: string;
  linkDemo: string;
  techStack: TechStack[];
}

export interface SocialMediaItemProps {
  title: string;
  logo: React.ReactNode;
  color: Color;
  link: string;
}

export interface TechItemProps {
  name: string;
  logo: React.ReactNode;
  color: string;
}

export interface TitlePageProps {
  title: string;
}

export interface TitleSectionProps {
  title: string;
  icon: React.ReactNode;
}

export interface ContentSectionProps {
  children: React.ReactNode;
}

export interface HeaderPageProps {
  title: string;
  description?: string;
  backButton?: boolean;
}

export interface TechListProps {
  direction?: Direction;
  speed?: Speed;
  pauseOnHover?: boolean;
  className?: string;
}

export interface BlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  readingTime: string;
  createdAt: string;
  tags: string[];
}

export interface FullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
  readingTime: string;
  createdAt: string;
  tags: string[];
}

export interface Project {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  linkDemo: string;
  techStack: TechStack[];
}

export interface BlogListProps {
  blog: BlogCard[];
}

export interface TechStackListProps {
  techStack: TechStack[];
}

export interface TagListProps {
  tags: string[];
}

export interface TagItemProps {
  tag: string;
}

export interface Heading {
  text: string;
  id: string;
  level: number;
}

export interface TableOfContentsProps {
  content: ReactNode;
}

export interface SearchBarProps {
  keyword: string;
  keywordChange: (newKeyword: string) => void;
  removeKeyword: () => void;
}

export interface BlogArticleProps {
  initialBlog: BlogCard[];
}

export interface ErrorResponseProps {
  title: string;
}

export interface TagsFilterProps {
  tags: string[];
  onTagClick: (tag: string) => void;
}