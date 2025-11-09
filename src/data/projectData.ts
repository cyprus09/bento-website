import { Database, Server, Code, Globe } from "lucide-react";

export const projects = [
  {
    title: "Student Management Portal",
    category: "Full-Stack Web Application",
    tech: ["Golang", "React", "PostgreSQL", "Tailwind", "Supabase", "RESTful APIs"],
    description:
      "A comprehensive student management system built with modern web technologies, featuring user authentication, student records management for events and room booking, along real-time data updates for effective resource utilisation.",
    highlights: [
      "Built RESTful APIs with Go (Gin framework) for high-performance backend operations",
      "Implemented responsive React frontend with modern UI/UX patterns",
      "Designed PostgreSQL database schema for optimal data relationships",
      "Implemented JWT-based authentication and authorization along with role based authentication",
    ],
    githubUrl: "https://github.com/cyprus09/eee-lifelong-master",
    icon: Database,
  },
  {
    title: "Blockchain Implementation",
    category: "Distributed Systems",
    tech: ["Golang", "UTXO", "Cryptography", "BoltDB"],
    description:
      "A custom blockchain implementation from scratch, featuring UTXO model, proof-of-work consensus, and merkle tree implementation for distributed transaction processing.",
    highlights: [
      "Implemented UTXO (Unspent Transaction Output) model for transaction handling",
      "Built proof-of-work consensus mechanism with adjustable difficulty",
      "Created multi node validation for wallet, central and transation nodes",
      "Used BoltDB as a key-value data store for blockchain genesis and block data",
    ],
    githubUrl: "https://github.com/cyprus09/blockchain",
    icon: Server,
  },
  {
    title: "Concurrent Servers",
    category: "Systems Programming",
    tech: ["C", "Python", "POSIX", "Socket Programming", "Multi-threading"],
    description:
      "High-performance concurrent server implementations demonstrating various concurrency models and system-level programming concepts.",
    highlights: [
      "Implemented multi-threaded server architecture in C using POSIX threads",
      "Built event-driven server using epoll vs non blocking i/o vs select for high-concurrency handling",
      "Created Python async server with asyncio for comparison",
      "Benchmarked performance across different concurrency models",
    ],
    githubUrl: "https://github.com/cyprus09/concurrent-servers",
    icon: Code,
  },
  {
    title: "E-commerce Website",
    category: "Full Stack Development",
    tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    description: "Built e-commerce website from scratch as part of the IE4717 - Web Application Design module at NTU",
    highlights: [
      "Featuring user auth",
      "AJAX-based cart updates and persistent cart storage",
      "Dynamic stock updates and product displays from MySQL",
    ],
    githubUrl: "https://github.com/cyprus09/ie4717-project",
    icon: Globe,
  },
  {
    title: "Portfolio Website",
    category: "Frontend Development",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "This very portfolio website you're viewing! A modern, responsive bento-grid layout with smooth animations and dark mode support.",
    highlights: [
      "Built with Next.js and TypeScript for type-safe development",
      "Implemented bento-grid layout with responsive design",
      "Added smooth animations using Framer Motion",
      "Created modal system for detailed content exploration",
      "Integrated dark/light mode with system preference detection",
    ],
    githubUrl: "https://github.com/cyprus09/bento-website",
    icon: Globe,
  },
];
