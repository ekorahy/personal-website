import {
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiVite,
  SiVitest,
} from "react-icons/si";

export const projects = [
  {
    id: "project-1",
    name: "DisfoHub",
    image: "/projects/project-1.png",
    description:
      "The discussion forum app is the result of a project submission in the React Expert class organized by Dicoding.",
    linkDemo: "https://disfo-hub.vercel.app/",
    techStack: [
      {
        id: "tect-project-1",
        name: "Javascript",
        logo: <SiJavascript />,
        color: "#F7DF1E",
      },
      {
        id: "tect-project-2",
        name: "React.js",
        logo: <SiReact />,
        color: "#61DAFB",
      },
      {
        id: "tect-project-3",
        name: "Tailwind",
        logo: <SiTailwindcss />,
        color: "#06B6D4",
      },
      {
        id: "tect-project-4",
        name: "Redux",
        logo: <SiRedux />,
        color: "#764ABC",
      },
      {
        id: "tect-project-5",
        name: "React Router",
        logo: <SiReactrouter />,
        color: "#CA4245",
      },
      {
        id: "tect-project-6",
        name: "Vite",
        logo: <SiVite />,
        color: "#646CFF",
      },
      {
        id: "tect-project-7",
        name: "Vitest",
        logo: <SiVitest />,
        color: "#6EBC00",
      },
    ],
  },
];
