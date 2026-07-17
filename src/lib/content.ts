export const profile = {
  name: "Achraf Boutzad",
  firstName: "Achraf",
  lastName: "Boutzad",
  role: "Software Engineer · DevOps Engineer",
  seoTitle: "Achraf Boutzad | Software Engineer & DevOps Engineer",
  seoDescription:
    "Achraf Boutzad is a Software Engineer and DevOps Engineer building real-time dashboards, monitoring systems, APIs, and IoT integrations for MARWA through Haldorix. Based in Casablanca, Morocco.",
  tagline:
    "I build real-time operational software — dashboards, monitoring systems, APIs, and IoT integrations that teams rely on every day.",
  location: "Casablanca, Morocco",
  phone: "+212 695 143 629",
  email: "achrafboutzad@gmail.com",
  website: "https://achrafboutzad.com",
  image: "/portpholio.webp",
  logo: "/achraf-logo-1.png",
  cv: "/Achraf_Boutzad_CV.pdf",
  cvFileName: "Achraf_Boutzad_CV.pdf",
  available: true,
  summary:
    "Software Engineer and DevOps Engineer with experience delivering operational software for MARWA through Haldorix. I build real-time dashboards, monitoring systems, APIs, and IoT integrations using Spring Boot, FastAPI, Next.js, Kafka, MQTT, WebSockets, and CI/CD.",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/achraf-boutzad/",
    },
    { label: "Website", href: "https://achrafboutzad.com" },
    { label: "Email", href: "mailto:achrafboutzad@gmail.com" },
  ],
};

export const stats = [
  { value: 50, suffix: "%", label: "Team productivity gain" },
  { value: 30, suffix: "%", label: "Wait time reduced" },
  { value: 4, suffix: "+", label: "Platforms delivered" },
  { value: 3, suffix: "+", label: "Years experience" },
];

export const skillGroups = [
  {
    title: "Software Engineering",
    items: [
      "Java / JEE",
      "Spring Boot",
      "Python",
      "FastAPI",
      "TypeScript",
      "Next.js",
      "React",
      "Angular",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "DevOps & Real-time",
    items: [
      "Git / GitHub",
      "CI/CD",
      "Docker",
      "Linux",
      "Kafka",
      "MQTT",
      "WebSockets",
      "Event-driven architecture",
    ],
  },
  {
    title: "Data & Quality",
    items: [
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "SQL / PLSQL",
      "Power BI",
      "JUnit",
      "Selenium",
      "SonarQube",
      "Agile / Scrum",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  href?: string;
  accent: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Production Monitoring Platform",
    description:
      "Live operations platform streaming station status, order progress, queue depth, throughput, and efficiency KPIs with event-driven processing and role-based views.",
    tags: ["Next.js", "Spring Boot", "WebSockets", "Kafka", "MySQL"],
    year: "2025",
    href: "https://github.com/ACHRAFBOUTZAD/plant-ops",
    accent: "#ff7d00",
    image: "/dashboard-monitoring.webp",
  },
  {
    title: "Industrial IoT Telemetry System",
    description:
      "IoT ingestion layer for device telemetry using MQTT, asynchronous FastAPI services, Kafka distribution, threshold alerts, and containerized deployment.",
    tags: ["FastAPI", "Python", "MQTT", "Kafka", "PostgreSQL", "Docker"],
    year: "2025",
    href: "#",
    accent: "#3ec5da",
    image: "/iot-platform.webp",
  },
  {
    title: "Service Monitoring Platform",
    description:
      "Microservices collecting application health, job status, and error events with real-time dashboards, incident timelines, and notification workflows.",
    tags: ["Spring Boot", "Kafka", "WebSockets", "SQL", "Docker"],
    year: "2025",
    href: "#",
    accent: "#e66235",
    image: "/moritoring-service.webp",
  },
  {
    title: "Workflow Orchestration System",
    description:
      "Configurable workflows with order-state transitions, assignment rules, SLA timers, live status sync, and analytics for operational decision-making.",
    tags: ["FastAPI", "Next.js", "WebSockets", "MySQL"],
    year: "2025",
    href: "https://github.com/ACHRAFBOUTZAD/Workflow-Orchestration-System",
    accent: "#ffb066",
    image: "/orchestration-image.webp",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Haldorix — MARWA Corporation",
    location: "Morocco",
    period: "2025 — Present",
    highlights: [
      "Engineered real-time production dashboards and operational monitoring features that increased workflow visibility and contributed to an estimated 50% improvement in team productivity.",
      "Optimized order and station workflows by exposing bottlenecks, queue status, and processing KPIs, helping reduce operational waiting time by approximately 30%.",
      "Integrated backend services, WebSocket-based updates, and event-driven data flows to deliver timely production metrics for operational users.",
      "Automated build, testing, and deployment through Git-based CI/CD practices, shortening release preparation and reducing deployment-related defects.",
      "Collaborated with MARWA stakeholders and Haldorix engineers to translate business requirements into maintainable, well-documented features.",
    ],
  },
  {
    role: "Business Intelligence Intern",
    company: "Faculty of Sciences Semlalia",
    location: "Marrakech, Morocco",
    period: "May 2023 — Jul 2023",
    highlights: [
      "Designed and implemented a decision-support information system for road-safety data analysis.",
      "Integrated road-safety datasets into a centralized data warehouse, improving analytical consistency.",
      "Built multidimensional analyses using OLAP cubes and MDX queries for structured indicator exploration.",
      "Developed interactive Power BI dashboards for near-real-time visualization of key metrics.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "Specialized Master's in Information Systems Engineering",
    school: "Faculty of Sciences Semlalia, Marrakech",
    period: "2023 — 2025",
  },
  {
    degree: "Bachelor's Degree in Mathematics and Computer Science",
    school: "Faculty of Sciences Semlalia, Marrakech",
    period: "2018 — 2023",
  },
  {
    degree: "Baccalaureate in Mathematical Sciences A",
    school: "Lycée Akensouse, Essaouira",
    period: "2017 — 2018",
  },
];

export const certifications = [
  "Engineering Practices for Building Quality Software — Coursera",
  "Machine Learning with Python — Coursera",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
