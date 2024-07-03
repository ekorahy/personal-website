import { BsFiletypeXml } from "react-icons/bs";
import {
  SiEslint,
  SiGooglemaps,
  SiJavascript,
  SiKotlin,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTensorflow,
  SiVite,
  SiVitest,
} from "react-icons/si";

export const projects = [
  {
    id: "project-1",
    name: "GitUs",
    category: "Android App",
    image: "/projects/project_1.png",
    description:
      "A GitHub user search application, the result of an exercise on fetching the GitHub API. This application allows users to search for information about GitHub users based on the username entered.",
    linkDemo: "https://github.com/ekorahy/Git-US",
    techStack: [
      {
        id: "tect-project-1",
        name: "Kotlin",
        logo: <SiKotlin />,
        color: "#6A00FF",
      },
      {
        id: "tect-project-2",
        name: "XML",
        logo: <BsFiletypeXml />,
        color: "#E34F26",
      },
    ],
  },
  {
    id: "project-2",
    name: "DisfoHub",
    category: "Web App",
    image: "/projects/project_2.png",
    description:
      "A discussion forum application that allows users to share ideas, discuss, and find solutions to various topics. Users can create new topics, reply to posts, give upvotes or downvotes, and follow interesting discussion threads.",
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
        id: "tech-project-5",
        name: "Eslint",
        logo: <SiEslint />,
        color: "#4B32C3",
      },
      {
        id: "tect-project-6",
        name: "React Router",
        logo: <SiReactrouter />,
        color: "#CA4245",
      },
      {
        id: "tect-project-7",
        name: "Vite",
        logo: <SiVite />,
        color: "#646CFF",
      },
      {
        id: "tect-project-8",
        name: "Vitest",
        logo: <SiVitest />,
        color: "#6EBC00",
      },
    ],
  },
  {
    id: "project-3",
    name: "Asclepius",
    category: "Android App",
    image: "/projects/project_3.png",
    description:
      "A skin cancer detection app makes it easy for users to do an initial check of their skin condition. The app analyzes skin images and provides classification results on whether it is skin cancer or not. In addition, the app also provides up-to-date information on cancer news.",
    linkDemo: "https://github.com/ekorahy/Asclepius-App",
    techStack: [
      {
        id: "tect-project-1",
        name: "Kotlin",
        logo: <SiKotlin />,
        color: "#6A00FF",
      },
      {
        id: "tect-project-2",
        name: "XML",
        logo: <BsFiletypeXml />,
        color: "#E34F26",
      },
      {
        id: "tect-project-3",
        name: "Tensorflow",
        logo: <SiTensorflow />,
        color: "#E65100",
      },
    ],
  },
  {
    id: "project-4",
    name: "MindSpace",
    category: "Web App",
    image: "/projects/project_4.png",
    description:
      "A personal note application that makes it easy for users to record, store, and manage their notes efficiently, equipped with an archived feature that allows users to save old notes without deleting them, so that notes remain organized and easily accessible at any time.",
    linkDemo: "https://mindspace-ekorahy.vercel.app/",
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
        id: "tech-project-5",
        name: "Eslint",
        logo: <SiEslint />,
        color: "#4B32C3",
      },
      {
        id: "tect-project-6",
        name: "React Router",
        logo: <SiReactrouter />,
        color: "#CA4245",
      },
      {
        id: "tect-project-7",
        name: "Vite",
        logo: <SiVite />,
        color: "#646CFF",
      },
    ],
  },
  {
    id: "project-5",
    name: "StoryApp",
    category: "Android App",
    image: "/projects/project_5.png",
    description:
      "A story app that allows users to share their experiences in an interactive and personalized way. The app comes with a location share feature, allowing users to point out interesting places they visit and give more context to their stories.",
    linkDemo: "https://github.com/ekorahy/StoryApp",
    techStack: [
      {
        id: "tect-project-1",
        name: "Kotlin",
        logo: <SiKotlin />,
        color: "#6A00FF",
      },
      {
        id: "tect-project-2",
        name: "XML",
        logo: <BsFiletypeXml />,
        color: "#E34F26",
      },
      {
        id: "tect-project-3",
        name: "Google Maps API",
        logo: <SiGooglemaps />,
        color: "#34A853",
      },
    ],
  },
];
