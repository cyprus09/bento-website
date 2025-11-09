import { Code, Layers, Wrench } from "lucide-react";

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C/C++", "TypeScript", "JavaScript", "Golang", "Python", "PostgreSQL", "NoSQL", "HTML", "CSS"],
    description: "Core programming languages and database technologies I work with",
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["React.js", "Next.js", "Tailwind CSS"],
    description: "Frontend frameworks and styling libraries for modern web development",
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Redis",
      "Docker",
      "AWS",
      "gRPC (Protobufs)",
      "RESTful APIs",
      "GraphQL",
      "Microservices",
      "FastAPI",
      "CI/CD",
      "Supabase",
      "Postman",
    ],
    description: "Development tools, cloud services, and architectural patterns",
  },
];
