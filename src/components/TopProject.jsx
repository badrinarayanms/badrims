import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // or "next/router" if using older versions

// Reuse your existing projects data (ideally import from a common file)
const topProjects = [
    {
  id: 7,
  name: "Invoiceer Backend",
  description: "A Spring Boot application for managing invoices and products. Features PDF invoice generation and email delivery using Gmail SMTP, with PostgreSQL as the database. Dockerized and deployed on Render.",
  techStack: ["Spring Boot", "Spring Data JPA", "Spring Mail", "PostgreSQL", "Docker", "iText 7"],
  githubUrl: "https://github.com/badrinarayanms/invoiceer-backend",
  liveUrl: "https://invoiceer-o31i.onrender.com"
},
{
  id: 8,
  name: "Invoiceer Dashboard",
  description: "A responsive invoice management dashboard built with Next.js, Tailwind CSS, and React. Allows users to manage products, create invoices, and track business metrics. Integrates with the Invoiceer Backend API.",
  techStack: ["Next.js", "React", "Tailwind CSS" ],
  githubUrl: "https://github.com/badrinarayanms/invoiceer-frontend",
  liveUrl: "https://invoiceer-frontend.vercel.app"
},
{
    id: 2,
    name: "TEXUS 25 Website",
    description: "Official website for TEXUS 25, a national level fest organized by SRM University of Science and Technology. Featured event details, schedules, and registration systems.",
    techStack: ["Next.js", "Framer Motion", "React Bits", "Aceternity UI", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/badrinarayanms/Texus25",
    liveUrl: "",
    note: "This repository is private, and the website will be taken offline after the event concludes."
  },
];

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.7,
      ease: "power2.out"
    });
  }, []);

  return (
    <div ref={cardRef} className="opacity-1 h-full">
      <div className="h-full flex flex-col justify-between  rounded-lg border border-[#333333] p-6 bg-[#252525] transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
        <h3 className="text-2xl font-bold mb-3 text-[#606060]">{project.name}</h3>
        <p className="text-white mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="font-coolvetica inline-flex items-center rounded-full bg-[#333333] text-white border border-[#444444] px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-[#FF535B] transition-colors"
            >
              <FaGithub className="w-5 h-5 mr-2" />
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#FF535B] hover:bg-[#E04046] text-white px-4 py-2 rounded-md text-sm"
            >
              
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const TopProjects = () => {
   const navigate = useNavigate();

  return (
    <section className="pb-16 px-4 sm:px-6 md:px-8 bg-[#1D1D1D]">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="font-coolvetica text-4xl md:text-6xl font-bold text-[#FF535B] mb-4">Featured Projects</h2>
        <p className="text-white text-lg">A glimpse into some of my recent work.</p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {topProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center mt-16">
        <button
          onClick={() => navigate("/projects")}
          className="bg-[#FF535B] hover:bg-[#E04046] text-white font-coolvetica px-6 py-3 rounded-md text-lg transition-all"
        >
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default TopProjects;
