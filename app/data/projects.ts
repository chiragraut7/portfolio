// src/data/projects.ts

export interface Project {
  title: string;
  description: string; // Ensure this is here
  tech: string[];
  image: string;
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Enterprise Web Solution",
    description: "Leading a team in delivering enterprise-level web solutions and oversaw responsive design projects.",
    tech: ["React", "Next.js", "SCSS", ".NET", "SharePoint"], // Tech based on experience
    image: "/images/project1.jpg",
    live: "#",
    github: "#"
  },
  {
    title: "Mobile-First Initiatives",
    description: "Specialized in mobile-first design using Ionic & Cordova for high-performance applications.",
    tech: ["Ionic", "Cordova", "AngularJS"], // Derived from your core skills
    image: "/images/project2.jpg",
    live: "#",
    github: "#"
  }
];