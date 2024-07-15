import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaCode, FaPython } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "C++",
    icon: <FaCode className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in C++, specializing in system-level programming, and performance-critical applications with a strong emphasis on object-oriented design and memory management.",
  },
  {
    id: nanoid(),
    title: "Machine Learning - Scikit-learn",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in machine learning using Scikit-learn, with a focus on data preprocessing, model training, and evaluation. Skilled in implementing and optimizing various algorithms for classification, regression, and clustering tasks.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F15-unsplash.067e3a39.png&w=1920&q=75",
    url: "https://image-dohaeris.netlify.app/",
    github: "https://github.com/GautamSahu028/search-images",
    title: "unsplash image generator",
    text: "Developed a React-based Unsplash image generator using Unsplash API and Tailwind CSS for dynamic, responsive image searches",
  },
  {
    id: nanoid(),
    img: "https://media.istockphoto.com/id/1500238408/photo/program-code-development-icon-on-a-digital-lcd-display-with-reflection.webp?b=1&s=170667a&w=0&k=20&c=CfaVabgMcwwc-ijzVAxNs_Sz6q3JVPJnlQ-Py-dpuAQ=",
    url: "https://github.com/GautamSahu028/Legacy",
    github: "https://github.com/GautamSahu028/Legacy",
    title: "Legacy Programming Language",
    text: "Developing 'Legacy,' a programming language based on Sanskrit that'll use actual Sanskrit for coding. While the full language is still in progress, the interpreter is complete, allowing execution of basic calculations.",
  },
  {
    id: nanoid(),
    img: "https://media.istockphoto.com/id/1331816647/photo/red-tomato-shaped-kitchen-timer-with-cooking-in-the-background.jpg?s=612x612&w=0&k=20&c=NwbuTmZalM3Hnky0BeDYpkTStmadbfCqa5tE-y9OBmc=",
    url: "https://github.com/GautamSahu028/pomodoro-chrome-extension/raw/main/Extensions%20-%20Google%20Chrome%202024-07-13%2019-03-19.mp4",
    github: "https://github.com/GautamSahu028/pomodoro-chrome-extension",
    title: "pomodoro chrome extension",
    text: "Developed a Pomodoro Chrome extension that functions as a stopwatch with integrated task management, enabling users to add and track to-do items efficiently.",
  },
];
