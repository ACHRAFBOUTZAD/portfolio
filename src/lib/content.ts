export const profile = {
  name: "Achraf Boutzad",
  firstName: "Achraf",
  lastName: "Boutzad",
  role: "Software Engineer · DevOps Engineer",
  seoTitle: "Achraf Boutzad | Software Engineer & DevOps Engineer",
  seoDescription:
    "Achraf Boutzad is a Software Engineer and DevOps Engineer building real-time production systems, APIs, IoT integrations, and automated delivery pipelines. Based in Morocco and open to remote work.",
  tagline:
    "I build real-time production systems, APIs, IoT integrations, and automated delivery pipelines.",
  location: "Morocco, open to remote",
  languages: "Arabic (native), French (B2), English (C1)",
  phone: "+212 695 143 629",
  email: "achrafboutzad@gmail.com",
  website: "https://achrafboutzad.com",
  image: "/portpholio.webp",
  logo: "/achraf-logo-1.png",
  cv: "/Achraf_Boutzad_CV.pdf",
  cvFileName: "Achraf_Boutzad_CV.pdf",
  available: true,
  about: [
    "I'm a software and DevOps engineer who builds real-time production systems. From July 2025 to July 2026 I worked at Haldorix for MARWA Corporation, building factory dashboards, monitoring workflows, FastAPI services, and WebSocket data flows.",
    "I also handled deployment there: Docker, CI/CD pipelines, and running the platform on Kubernetes, with Redis caching for frequently requested dashboard data.",
    "Before that, I did a remote internship with Avionav in Tunisia, working on drone-navigation software, and completed a specialized master's in information systems engineering at the Faculty of Sciences Semlalia in Marrakech.",
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/achraf-boutzad/",
    },
    { label: "GitHub", href: "https://github.com/ACHRAFBOUTZAD" },
    { label: "Email", href: "mailto:achrafboutzad@gmail.com" },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend & APIs",
    items: [
      "Spring Boot",
      "FastAPI",
      "REST APIs",
      "GraphQL",
      "gRPC",
      "WebSockets",
      "OpenAPI / Swagger",
      "Microservices",
    ],
  },
  {
    title: "Messaging & Streaming",
    items: [
      "Apache Kafka",
      "MQTT",
      "Event-driven architecture",
      "Asynchronous processing",
    ],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "Real-time dashboards", "Data visualization"],
  },
  {
    title: "Databases & Caching",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Schema design",
      "Query optimization",
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD pipelines",
      "AWS",
      "Terraform",
      "Nginx",
      "Linux",
      "Git",
    ],
  },
  {
    title: "Observability",
    items: [
      "Grafana",
      "Prometheus",
      "Loki",
      "Structured logging",
      "Health checks",
      "Alerting",
    ],
  },
  {
    title: "Testing & Practices",
    items: [
      "JUnit",
      "pytest",
      "Selenium",
      "SonarQube",
      "Unit, integration & API testing",
      "Data modeling",
      "Agile / Scrum",
      "SDLC",
      "Technical documentation",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  href?: string;
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
    image: "/dashboard-monitoring.webp",
  },
  {
    title: "Industrial IoT Telemetry System",
    description:
      "IoT ingestion layer for device telemetry using MQTT, asynchronous FastAPI services, Kafka distribution, threshold alerts, and containerized deployment.",
    tags: ["FastAPI", "Python", "MQTT", "Kafka", "PostgreSQL", "Docker"],
    year: "2025",
    image: "/iot-platform.webp",
  },
  {
    title: "Service Monitoring Platform",
    description:
      "Microservices collecting application health, job status, and error events with real-time dashboards, incident timelines, and notification workflows.",
    tags: ["Spring Boot", "Kafka", "WebSockets", "SQL", "Docker"],
    year: "2025",
    image: "/moritoring-service.webp",
  },
  {
    title: "Workflow Orchestration System",
    description:
      "Configurable workflows with order-state transitions, assignment rules, SLA timers, live status sync, and analytics for operational decision-making.",
    tags: ["FastAPI", "Next.js", "WebSockets", "MySQL"],
    year: "2025",
    href: "https://github.com/ACHRAFBOUTZAD/Workflow-Orchestration-System",
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
    company: "Haldorix, for MARWA Corporation",
    location: "Morocco",
    period: "Jul 2025 - Jul 2026",
    highlights: [
      "Engineered real-time factory dashboards and monitoring workflows that improved factory productivity by up to 80% through bottleneck detection, station visibility, and faster decisions.",
      "Reduced worker and order waiting time by approximately 30% using live queue, cycle-time, throughput, work-in-progress, and station-efficiency analytics.",
      "Delivered FastAPI services, WebSocket data flows, workflow automation, Next.js dashboards, Docker, testing, and CI/CD capabilities that supported up to 30% revenue growth and more reliable releases.",
      "Deployed and operated the platform on Kubernetes with containerized services and automated pipelines, and applied Redis caching to reduce latency on frequently requested dashboard data.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Avionav",
    location: "Tunisia (Remote)",
    period: "Feb 2025 - Jul 2025",
    highlights: [
      "Developed drone-navigation software using AI-assisted decision logic, A* graph search, waypoint optimization, and obstacle-aware path planning.",
      "Integrated telemetry and simulation data into testable modules for route generation, trajectory selection, and safer autonomous navigation.",
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
    period: "2023 - 2025",
  },
  {
    degree: "Bachelor's Degree in Mathematics and Computer Science",
    school: "Faculty of Sciences Semlalia, Marrakech",
    period: "2018 - 2023",
  },
];

export const certifications = [
  { title: "Engineering Practices for Building Quality Software", issuer: "Coursera" },
  { title: "Machine Learning with Python", issuer: "Coursera" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
