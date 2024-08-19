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

export const RESUME_DATA = {
  name: "Santiago de la cruz Martinez Lara",
  initials: "SL",
  location: "San Luis Potosí, México",
  locationLink: "https://www.google.com/maps/place/san-luis-potosi",
  about:
    "Retired competitive programmer. Full Stack Developer. Keen on attention to details.",
  summary:
    "Experienced in Linux, NextJS (Typescript), Python, C, and I am always eager to learn new skills and explore new domains. I love to solve problems and help others with my coding abilities, which helps me ensure the quality and accuracy of my work. I am looking for opportunities to collaborate with other passionate developers and create innovative and impactful solutions.",
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
    "International Olympiad in Informatics",
    "Mexican Informatics Olympiad",
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
      // logo: ParabolLogo,
      link: {
        // label: "github.com",
        href: "https://carroceriasplus.com.mx/",
      },
    },
    {
      title: "The Hype Company (Demo Site)",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
      ],
      description:
        "A demo store for a StreetWear Company: The Hype Company",
      // logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://streetwear.santiago-lara.dev/",
      },
    },
  ],
} as const;
