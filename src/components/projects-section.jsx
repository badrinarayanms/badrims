import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing. Implemented user authentication, product search with filters, and a responsive checkout process.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-platform.vercel.app",
  },
  {
    id: 2,
    name: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team workspaces. Features include drag-and-drop task organization, deadline notifications, and customizable project views.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    githubUrl: "https://github.com/username/task-management",
    liveUrl: "https://task-management-app.vercel.app",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays current and forecasted weather data for any location. Includes interactive charts, location search, and customizable units of measurement.",
    techStack: ["React", "Tailwind CSS", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard.vercel.app",
  },
  {
    id: 4,
    name: "Personal Blog",
    description:
      "A markdown-based blog with categories, tags, and a responsive reading experience. Includes dark mode, estimated reading time, and related posts suggestions.",
    techStack: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/username/personal-blog",
    liveUrl: "https://personal-blog.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8" style={{ backgroundColor: "#1D1D1D" }}>
      <div className="max-w-3xl mx-auto">
        <HeaderSection />

        <div className="mt-16 space-y-24">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HeaderSection() {
  const headerRef = useRef(null);
  const underlineRef = useRef(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.7,
      ease: "power2.out",
    });

    gsap.from(underlineRef.current, {
      width: "0%",
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out",
    });
  }, { scope: headerRef });

  return (
    <div ref={headerRef} className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block" style={{ color: "#FF535B" }}>
        Projects
        <span
          ref={underlineRef}
          className="absolute bottom-0 left-0 w-0 h-1 rounded"
          style={{ backgroundColor: "#FF535B" }}
        />
      </h2>
      <p className="text-white text-lg max-w-2xl mx-auto">
        A collection of my recent work and personal projects. Each project represents different skills and technologies
        I've worked with.
      </p>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.7,
      delay: index * 0.1,
      ease: "power2.out",
    });
  }, { scope: cardRef });

  return (
    <div ref={cardRef} className="opacity-0">
      <div className="p-6 bg-[#252525] border-[#333333] hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
        <h3 className="text-2xl font-bold mb-3" style={{ color: "#606060" }}>
          {project.name}
        </h3>

        <p className="text-white mb-6 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <div key={tech} variant="outline" className="bg-[#333333] text-white border-[#444444] px-3 py-1">
              {tech}
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-[#FF535B] transition-colors"
          >
            <FaGithub className="w-5 h-5 mr-2" />
            <span>View Code</span>
          </a>

          <button size="sm" className="bg-[#FF535B] hover:bg-[#E04046] text-white" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}