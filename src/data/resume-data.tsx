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
import { CibCisco } from "@/components/icons/cisco";
import { title } from "process";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { LogosMicrosoftIcon } from "@/components/icons/microsoft";

const _RESUME_DATA = {
  name: "Santiago de la cruz Martinez Lara",
  initials: "SL",
  location: "San Luis Potosí, México",
  locationLink: "https://www.google.com/maps/place/san-luis-potosi",
  about: {
    en: "Retired competitive programmer. Software Engineer, Full Stack Developer. Keen on attention to details.",
    es: "Programador competitivo retirado. Ingeniero de Software, Desarrollador Full Stack. Detallista.",
  },

  summary: {
    en:
      "Experienced in Java, Linux, NextJS (Typescript), Python, C/C++, and I am always eager to learn new skills and explore new domains. I love to solve problems and help others with my coding abilities, which helps me ensure the quality and accuracy of my work. I am looking for opportunities to collaborate with other passionate developers and create innovative and impactful solutions.",
    es:
      "Experiencia en Java, Linux, NextJS (Typescript), Python, C/C++, y siempre estoy ansioso por aprender nuevas habilidades y explorar nuevos dominios. Me encanta resolver problemas y ayudar a otros con mis habilidades de codificación, lo que me ayuda a garantizar la calidad y precisión de mi trabajo. Estoy buscando oportunidades para colaborar con otros desarrolladores apasionados y crear soluciones innovadoras e impactantes.",
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
      start: "2018",
      end: "2022",
      description:
        "Leading the development of the web site, critical business servers & services. Technologies: React, TypeScript, Node.js",
    },
  ],
  skills: [
    "Java",
    "TypeScript",
    "React/Next.js",
    "C/C++", "Python", "Linux", "Software Developer", "English", "Spanish",
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
  certifications: [
    {
      title: "introduction to Data Science",
      issuer: "Cisco",
      issuerIcon: CibCisco,
      issueDate: "October 13, 2023",
      credentialURL: "https://www.credly.com/badges/714afb20-ff7b-4abd-8dc7-f3bd265e1a95/linked_in_profile",
    },
    {
      title: "Cisco Certified Support Technician Cybersecurity [CCST Cybersecurity]",
      issuer: "Cisco",
      issuerIcon: CibCisco,
      issueDate: "April 19, 2023",
      credentialURL: "https://www.credly.com/badges/5f7cf963-35cf-4884-965e-4584c263ec20/linked_in_profile",
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco",
      issuerIcon: CibCisco,
      issueDate: "January 09, 2023",
      credentialURL: "https://www.credly.com/badges/f5f5ebb3-5672-4245-92b6-e6364e822cf7/linked_in_profile"
    },
    {
      title: "IT Specialist - Cybersecurity",
      issuer: "Certiport",
      issuerIcon: LightningBoltIcon,
      issueDate: "January 20, 2023",
      credentialURL: "https://www.credly.com/badges/beca4002-b9be-4bc3-aa48-1dcb90116910/linked_in_profile"
    },
    {
      title: "Network Defense",
      issuer: "Cisco",
      issuerIcon: CibCisco,
      issueDate: "December 18, 2022",
      credentialURL: "https://www.credly.com/badges/729ff8b7-4a8f-4d87-9671-7a5a83a9a603/linked_in_profile"
    },
    {
      title: "Endpoint Security",
      issuer: "Cisco",
      issuerIcon: CibCisco,
      issueDate: "November 06, 2022",
      credentialURL: "https://www.credly.com/badges/7948a946-4542-422e-bfa0-36859ead44c2/linked_in_profile"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco",
      issuerIcon: CibCisco,
      issueDate: "September 30, 2022",
      credentialURL: "https://www.credly.com/badges/1bdeee86-d75a-4bf0-8db9-7a2ca227a314/linked_in_profile"
    },
    {
      title: "Microsoft Office Specialist: Associate (Office 2019)",
      issuer: "Microsoft",
      issuerIcon: LogosMicrosoftIcon,
      issueDate: "November 19, 2021",
      credentialURL: "https://www.credly.com/badges/61f9ef22-8486-40b1-a295-f83edf79aaf0/linked_in_profile"
    },
    {
      title: "Microsoft Office Specialist: Excel Associate (Office 2019)",
      issuer: "Microsoft",
      issuerIcon: LogosMicrosoftIcon,
      issueDate: "November 19, 2021",
      credentialURL: "https://www.credly.com/badges/9fab7720-e11e-4e87-980a-d74f1bd4dedf/linked_in_profile"
    },
    {
      title: "Microsoft Office Specialist: Word Associate (Office 2019)",
      issuer: "Microsoft",
      issuerIcon: LogosMicrosoftIcon,
      issueDate: "October 15, 2021",
      credentialURL: "https://www.credly.com/badges/16a1d92d-2436-447d-9cbb-b3d931af2d27/linked_in_profile"
    },
    {
      title: "Microsoft Office Specialist: PowerPoint Associate (Office 2019)",
      issuer: "Microsoft",
      issuerIcon: LogosMicrosoftIcon,
      issueDate: "September 24, 2021",
      credentialURL: "https://www.credly.com/badges/cc61d3b6-b2c3-4de3-9799-6f25bbcdeff6/linked_in_profile"
    }
  ]
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
