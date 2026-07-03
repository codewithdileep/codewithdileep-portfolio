import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaJenkins,
  FaMicrosoft,
  FaCode,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";

import { SiDotnet, SiPostman } from "react-icons/si";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "Angular", icon: FaAngular },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
    ],
  },

  {
    category: "Backend",
    items: [
      { name: "C#", icon: FaCode },
      { name: ".NET", icon: SiDotnet },
    ],
  },

  {
    category: "Database",
    items: [
      { name: "SQL Server", icon: FaDatabase },
    ],
  },

  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Azure DevOps", icon: FaMicrosoft },
      { name: "Docker", icon: FaDocker },
      { name: "Jenkins", icon: FaJenkins },
      { name: "Postman", icon: SiPostman },
    ],
  },
];