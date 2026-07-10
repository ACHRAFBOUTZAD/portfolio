export const profile = {
  name: "Achraf Boutzad",
  firstName: "Achraf",
  lastName: "Boutzad",
  role: "Software Engineer · AI · DevOps",
  tagline:
    "I build intelligent, scalable software — from AI-powered products to the pipelines that ship them.",
  location: "Morocco",
  email: "achrafboutzad@gmail.com",
  image: "/portpholio.png",
  logo: "/achraf-logo-1.png",
  available: true,
  summary:
    "I'm a software engineer with a strong background in artificial intelligence and DevOps. I design and ship end-to-end systems — training and integrating ML models, building robust back-ends and front-ends, and automating everything in between with modern CI/CD and cloud infrastructure.",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Email", href: "mailto:achrafboutzad@gmail.com" },
  ],
};

export const stats = [
  { value: 3, suffix: "+", label: "Years building" },
  { value: 25, suffix: "+", label: "Projects shipped" },
  { value: 12, suffix: "+", label: "AI models shipped" },
  { value: 99, suffix: "%", label: "Uptime mindset" },
];

export const skillGroups = [
  {
    title: "AI / Machine Learning",
    items: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "LLMs & RAG", "OpenCV"],
  },
  {
    title: "Software Engineering",
    items: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "REST / GraphQL"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "CI/CD", "Terraform", "AWS", "Linux"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  href?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Neura Assistant",
    description:
      "An AI assistant with retrieval-augmented generation, streaming responses and a fine-tuned model for domain-specific answers.",
    tags: ["Python", "LLMs / RAG", "FastAPI", "Next.js"],
    year: "2025",
    href: "#",
    accent: "#ff7d00",
  },
  {
    title: "DeployFlow",
    description:
      "A DevOps platform that automates build, test and deploy pipelines with one-click rollbacks and live infrastructure monitoring.",
    tags: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
    year: "2024",
    href: "#",
    accent: "#3ec5da",
  },
  {
    title: "VisionSort",
    description:
      "A computer-vision service that classifies and tags images in real time, deployed as a scalable, containerized API.",
    tags: ["PyTorch", "OpenCV", "FastAPI", "AWS"],
    year: "2024",
    href: "#",
    accent: "#e66235",
  },
  {
    title: "Orbit Commerce",
    description:
      "A headless e-commerce storefront with lightning-fast checkout, Stripe payments and a fully responsive design.",
    tags: ["Next.js", "Stripe", "Tailwind", "Prisma"],
    year: "2023",
    href: "#",
    accent: "#ffb066",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer — AI & DevOps",
    company: "Freelance",
    period: "2023 — Present",
    description:
      "Design and ship AI-powered applications end to end — from model development and API integration to containerized deployments and automated CI/CD pipelines.",
  },
  {
    role: "Machine Learning Engineer",
    company: "AI Studio",
    period: "2022 — 2023",
    description:
      "Built and deployed ML models for real-world use cases, and productionized them with scalable, observable infrastructure.",
  },
  {
    role: "Software Developer",
    company: "Tech Lab",
    period: "2021 — 2022",
    description:
      "Developed full-stack features and internal tooling while establishing clean coding practices, testing and automation.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
