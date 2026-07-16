import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiTailscale,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiMeta,
  SiSwagger,
  SiJira,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FiSearch, FiLock, FiWifi } from "react-icons/fi";

export type TechIcon = { name: string; Icon: IconType; color: string };

export const languages: TechIcon[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "Python", Icon: SiPython, color: "#3776ab" },
];

export const frameworks: TechIcon[] = [
  { name: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
  { name: "NestJS", Icon: SiNestjs, color: "#e0234e" },
  { name: "Express", Icon: SiExpress, color: "#e6edf3" },
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#e6edf3" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
];

export const data: TechIcon[] = [
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "Redis", Icon: SiRedis, color: "#dc382d" },
];

export const tooling: TechIcon[] = [
  { name: "Docker", Icon: SiDocker, color: "#2496ed" },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088ff" },
  { name: "AWS", Icon: FaAws, color: "#ff9900" },
  { name: "Git", Icon: SiGit, color: "#f05032" },
  { name: "Tailscale", Icon: SiTailscale, color: "#e6edf3" },
];

export const analytics: TechIcon[] = [
  { name: "Google Analytics 4", Icon: SiGoogleanalytics, color: "#e37400" },
  { name: "Google Tag Manager", Icon: SiGoogletagmanager, color: "#2e77bb" },
  { name: "Meta Pixel / CAPI", Icon: SiMeta, color: "#0866ff" },
  { name: "SEO", Icon: FiSearch, color: "#e6edf3" },
];

export const practices: TechIcon[] = [
  { name: "Swagger", Icon: SiSwagger, color: "#85ea2d" },
  { name: "Jira", Icon: SiJira, color: "#0052cc" },
  { name: "OAuth2 / JWT", Icon: FiLock, color: "#e6edf3" },
  { name: "Sockets", Icon: FiWifi, color: "#e6edf3" },
];

export const languageColors: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3776ab",
  Astro: "#ff5d01",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Otro: "#8b98a5",
};
