import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { cache } from "react";

const _RESUME_DATA = {
  name: "Santiago de la cruz Martinez Lara",
  initials: "SL",
  location: "San Luis Potosí, México",
  locationLink: "https://www.google.com/maps/place/san-luis-potosi",
  about: {
    en: "Retired competitive programmer. Full Stack Developer. Keen on attention to details.",
    es: "Programador competitivo retirado. Desarrollador Full Stack. Detallista.",
  },

  summary: {
    en:
      "Experienced in Linux, NextJS (Typescript), Python, C, and I am always eager to learn new skills and explore new domains. I love to solve problems and help others with my coding abilities, which helps me ensure the quality and accuracy of my work. I am looking for opportunities to collaborate with other passionate developers and create innovative and impactful solutions.",
    es:
      "Experiencia en Linux, NextJS (Typescript), Python, C, y siempre estoy ansioso por aprender nuevas habilidades y explorar nuevos dominios. Me encanta resolver problemas y ayudar a otros con mis habilidades de codificación, lo que me ayuda a garantizar la calidad y precisión de mi trabajo. Estoy buscando oportunidades para colaborar con otros desarrolladores apasionados y crear soluciones innovadoras e impactantes.",
  },
  avatarUrl: "https://avatars.githubusercontent.com/u/42554588?v=4",
  personalWebsiteUrl: "https://santiago-lara.dev",
  contact: {
    email: "me@santiago-lara.dev",
    tel: "+524441530136",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/PacifiK2460",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santiago-martinez-lara/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  competitions: [
    {
      en:
        "International Olympiad in Informatics",
      es:
        "Olimpiada Internacional de Informática",
    },
    {
      en:
        "Mexican Informatics Olympiad",
      es:
        "Olimpiada Mexicana de Informática",
    }
  ],
  education: [
    {
      school: "Universidad Politécnica de San Luis Potosí",
      degree: "Bachelors of Science in Computer Science and Information Technology",
      start: "2021",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Carrocerías Plus",
      link: "https://carroceriasplus.com.mx",
      badges: [],
      title: "Information Technology Support Engineer",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description:
        "Leading the development of the web site, critical business servers & services. Technologies: React, TypeScript, Node.js",
    },
  ],
  skills: [
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "C/C++"
  ],
  projects: [
    {
      title: "Carrocerías Plus Site",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
      ],
      description:
        "The oficial site for the Carrocerías Plus Business",
      link: "https://carroceriasplus.com.mx/",
      repo: undefined
    },
    // {
    //   title: "The Hype Company (Demo Site)",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //   ],
    //   description:
    //     "A demo store for a StreetWear Company: The Hype Company",
    //   link: "https://streetwear.santiago-lara.dev/",
    //   repo: "https://streetwear.santiago-lara.dev/"
    // },
  ],
};

// Define Projects type
export type ResumeData = typeof _RESUME_DATA.projects[0];

const user_repos = await fetch("https://api.github.com/users/PacifiK2460/repos", {
  cache: "no-cache",
});
const user_repos_json = await user_repos.json();
const user_repos_with_cv_in_topics = user_repos_json.filter((repo: any) => repo.topics.includes("cv"));
const repos: ResumeData[] = user_repos_with_cv_in_topics.map((repo: any) => ({
  title: repo.name,
  techStack: repo.topics,
  description: repo.description,
  link: repo.homepage,
  repo: repo.html_url,
}));

_RESUME_DATA.projects.push(...repos);

export const RESUME_DATA = _RESUME_DATA;
