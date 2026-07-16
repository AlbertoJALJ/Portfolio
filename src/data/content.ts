export const profile = {
  name: "Alberto Lopez Jimenez",
  role: "Senior Full Stack Developer",
  tagline: "Backend & Arquitectura de Software",
  location: "Azcapotzalco, CDMX, México",
  email: "josealbertolopezjimenez97@gmail.com",
  phone: "+52 56 2848 4920",
  whatsapp: "https://wa.me/525628484920",
  github: "https://github.com/AlbertoJALJ",
  linkedin:
    "https://www.linkedin.com/in/alberto-lopez-jimenez-721159153",
  cv: "/files/CV_Alberto_Lopez_Jimenez.pdf",
  photo: "/images/alberto.png",
  yearsExperience: 7,
};

export const clients = [
  "Exclusivas Automotrices Sánchez",
  "Bubble Blast Car Wash",
  "Solo Ajustes Comunicación",
  "Pixelarte",
  "Superprof",
];

export const experience = [
  {
    role: "Full Stack Developer",
    org: "Exclusivas Automotrices Sánchez",
    period: "Feb 2021 — Presente",
    points: [
      "Líder técnico en el desarrollo de un sistema POS multi-sucursal con NestJS, React, Docker y AWS (S3, EC2).",
      "Gestión de infraestructura cloud en AWS junto con arquitectos de soluciones: RDS, IAM de mínimo privilegio y pipelines CI/CD con GitHub Actions.",
      "Administración y optimización de bases de datos (MongoDB, PostgreSQL, Redis) y de rendimiento/disponibilidad de la aplicación.",
      "Integración de Google Analytics: UTMs, eventos y configuración avanzada para el seguimiento de métricas.",
      "Mantenimiento preventivo/correctivo y escalabilidad continua de las aplicaciones según necesidades del negocio.",
      "Mentoría técnica del equipo de desarrollo: revisiones de código, buenas prácticas y formación continua.",
      "Participación activa en ciclos ágiles (Scrum): planificación de sprints, revisiones y retrospectivas.",
      "Automatización de procesos internos con scripts en Python.",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "Pixelarte",
    period: "Ago 2020 — Feb 2021",
    points: [
      "Plataforma de gestión a medida para mejorar la coordinación de equipos.",
      "Modernización de diseño web y soluciones e-commerce con PHP, Shopify y JavaScript.",
    ],
  },
  {
    role: "Jr. Developer",
    org: "Itisoft",
    period: "Dic 2018 — Mar 2020",
    points: [
      "Diseño y desarrollo de una API GraphQL con Node.js, Express y React.",
      "Mantenimiento de sitios en PHP, WordPress y cPanel.",
    ],
  },
  {
    role: "Instructor de Programación",
    org: "Superprof",
    period: "Freelance — en curso",
    points: [
      "Perfil optimizado, top 10 en CDMX.",
      "Materias impartidas: JavaScript (fundamentos a POO avanzada y programación funcional), Node.js, React, Python y SQL.",
      "Proyectos guiados con alumnos, como un sistema de gestión de calificaciones en Node.js.",
    ],
  },
];

export const services = [
  {
    title: "Backend & APIs",
    description:
      "APIs REST y GraphQL escalables con NestJS, Express y FastAPI, con foco en rendimiento y seguridad.",
  },
  {
    title: "Arquitectura de software",
    description:
      "Diseño de sistemas modulares, microservicios y monorepos mantenibles a largo plazo.",
  },
  {
    title: "Bases de datos",
    description:
      "Administración, modelado relacional y NoSQL, y optimización de consultas e índices en PostgreSQL y MongoDB, con Redis para caché.",
  },
  {
    title: "DevOps & Cloud",
    description:
      "Entornos dockerizados, CI/CD con GitHub Actions, y despliegue en AWS (S3, EC2, RDS, Lambda, CloudFront).",
  },
  {
    title: "Frontend & Dashboards",
    description:
      "Interfaces y paneles administrativos con React, Next.js, Material UI y Tailwind CSS.",
  },
  {
    title: "Analítica & SEO",
    description:
      "Implementación de Google Tag Manager, GA4 y Meta Pixel/CAPI, además de optimización SEO técnica.",
  },
  {
    title: "Docencia & Mentoría",
    description:
      "Clases y planes de estudio de programación, desde fundamentos hasta patrones avanzados.",
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  linkLabel?: string;
  tag: string;
};

export const projects: Project[] = [
  {
    title: "Sistema POS multi-sucursal",
    description:
      "Sistema de punto de venta para ~50 sucursales: NestJS (pos-core + pos-front) sobre Docker y Tailscale, con PostgreSQL, Redis y MongoDB. Módulos de ventas, inventario, facturación, cotizaciones, transferencias SPEI y dashboard administrativo.",
    stack: ["NestJS", "React", "PostgreSQL", "Redis", "MongoDB", "Docker", "AWS"],
    tag: "Producto",
  },
  {
    title: "Bubble Blast Car Wash",
    description:
      "Sitio web para un car wash en Kissimmee, FL. Migración de WordPress a Cloudflare Pages, DNS, redirects 301, SSL y pipelines separados de prod/preview, con analítica GA4, GTM y Meta Pixel/CAPI.",
    stack: ["Cloudflare Pages", "GA4", "GTM", "Meta CAPI"],
    link: "https://bubbleblastcarwash.com",
    linkLabel: "bubbleblastcarwash.com",
    tag: "Cliente",
  },
  {
    title: "Solo Ajustes Comunicación",
    description: "Sitio web corporativo diseñado y desarrollado de principio a fin.",
    stack: ["Web", "Diseño", "SEO"],
    link: "https://soloajustescomunicacion.com",
    linkLabel: "soloajustescomunicacion.com",
    tag: "Cliente",
  },
  {
    title: "App de gestión fiscal (SAT / RESICO)",
    description:
      "Monorepo NestJS + TypeORM + PostgreSQL + Next.js 14 + React Native para análisis de declaraciones SAT/RESICO, IVA a favor y validación de CFDI.",
    stack: ["NestJS", "TypeORM", "PostgreSQL", "Next.js", "React Native"],
    tag: "Producto",
  },
  {
    title: "Calculadora de tarifa horaria",
    description:
      "Herramienta en React para calcular la tarifa horaria mínima freelance considerando ISR de RESICO, IVA y benchmarks del mercado en CDMX.",
    stack: ["React"],
    tag: "Herramienta",
  },
  {
    title: "cep-nodejs",
    description:
      "Cliente Node.js para validar transferencias SPEI en el portal CEP de Banxico: consulta de datos y descarga de comprobantes en PDF/XML, publicado como paquete npm.",
    stack: ["Node.js", "TypeScript"],
    link: "https://github.com/AlbertoJALJ/cep-nodejs",
    linkLabel: "GitHub",
    tag: "Open Source",
  },
  {
    title: "force-copy",
    description:
      "Extensión de Chrome (Manifest V3) que restaura copiar, cortar, pegar y selección de texto en sitios que las bloquean, sin dependencias externas ni tracking.",
    stack: ["JavaScript", "Chrome Extension"],
    link: "https://github.com/AlbertoJALJ/force-copy",
    linkLabel: "GitHub",
    tag: "Open Source",
  },
  {
    title: "Miniaturas de imágenes serverless",
    description:
      "Pipeline de generación de miniaturas con S3, Lambda y CloudFront, como parte de la preparación para la certificación AWS Solutions Architect Associate.",
    stack: ["AWS S3", "Lambda", "CloudFront"],
    tag: "AWS",
  },
];

export const education = {
  degree: "Ingeniería en Informática",
  school: "Tecnológico Nacional de México",
  period: "2015 — 2020",
};

export const certifications = [
  "AWS Certified Solutions Architect – Associate (en curso, 2026)",
];
