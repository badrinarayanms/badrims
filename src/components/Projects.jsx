import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Card Component
const Card = ({ className, children, ...props }) => (
  <div
    className={`rounded-lg border border-[#333333] p-6 bg-[#252525] transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Badge Component
const Badge = ({ className, children, ...props }) => (
  <span
    className={`font-coolvetica inline-flex items-center rounded-full bg-[#333333] text-white border border-[#444444] px-3 py-1 text-sm  ${className}`}
    {...props}
  >
    {children}
  </span>
);

// Button Component
const Button = ({ className, size = "default", asChild = false, children, ...props }) => {
  const sizeClasses = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8 text-lg"
  };

  const Comp = asChild ? "a" : "button";
  
  return (
    <Comp
      className={` font-coolvetica inline-flex items-center justify-center rounded-md bg-[#FF535B] hover:bg-[#E04046] text-white font-medium transition-colors ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

// Project Data
const projectsData = [
  {
    id: 1,
    name: "GeekCoders Community Website",
    description: "A modern and responsive community website built using Next.js and Tailwind CSS, providing insights into events, resources, and collaborations with the GeekCoders community.",
    techStack: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
    githubUrl: "https://github.com/geekcoders-community/GeekCoders.Community",
    liveUrl: "https://geekcoders-community.pages.dev/"
  },
  {
    id: 2,
    name: "TEXUS 25 Festival Website",
    description: "Official website for TEXUS 25, a national level fest organized by SRM University of Science and Technology. Featured event details, schedules, and registration systems.",
    techStack: ["Next.js", "Framer Motion", "React Bits", "Aceternity UI", "Tailwind CSS", "Supabase"],
    githubUrl: "",
    liveUrl: "",
    note: "This repository is private, and the website will be taken offline after the event concludes."
  },
  {
    id: 3,
    name: "Tech Hacks Hackathon Registration",
    description: "Landing page for an intercollege hackathon organized under TEXUS 25. Featured responsive design with animated sections for event information and registration.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "React Bits"],
    githubUrl: "https://github.com/badrinarayanms/TechHacks",
    liveUrl: "https://techhacks.vercel.app/"
  },
  {
    id: 4,
    name: "Personal Portfolio",
    description: "Dynamic portfolio showcasing skills, projects, and achievements. Features smooth animations and interactive elements for engaging user experience.",
    techStack: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
    githubUrl: "https://github.com/badrinarayanms/badrims",
    liveUrl: "https://badrims.pages.dev/",
    note:"You are currently viewing the same portfolio"
  },
  {
    id: 5,
    name: "React App with Redux",
    description: "Demonstration application implementing state management with Redux. Includes Material UI components and API integration patterns.",
    techStack: ["React", "Redux", "Material UI", "Axios"],
    githubUrl: "https://github.com/badrinarayanms/ArcTech",
    liveUrl: "https://arctech-task.vercel.app/"
  },
  {
    id: 6,
    name: "UI/UX Design Works",
    description: "Collection of design projects including website UIs, event posters, and promotional materials. Focused on visual communication and user experience principles.",
    techStack: ["Figma", "Adobe Photoshop", "Illustrator"],
    liveUrl: "https://www.figma.com/design/oVx9ZmJiQRoZnRiYfez9Vj/geek?node-id=0-1&t=GkmOHnmNJG99bdPa-1",
    note:"A glimpse into some of my design explorations and creative works",
    isDesign: true
  }
];

// Header Section Component
const HeaderSection = () => {
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
    <div ref={headerRef} className="font-coolvetica text-center">
      <h2 className="font-coolvetica  text-4xl md:text-8xl  font-bold mb-4 relative inline-block" style={{ color: "#FF535B" }}>
        PROJECTS
      </h2>
      <p className="text-white text-lg max-w-2xl mx-auto">
        A collection of my recent work and personal projects. Each project represents different skills and technologies.
      </p>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
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
    <div ref={cardRef} className="opacity-1">
      <Card>
        <h3 className="text-2xl font-bold mb-3" style={{ color: "#606060" }}>
          {project.name}
        </h3>
        <p className="text-white mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="flex gap-4">
        {project.githubUrl && <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-[#FF535B] transition-colors"
          >
            <FaGithub className="w-5 h-5 mr-2" />
            <span>View Code</span>
          </a>}
          
          {project.liveUrl && <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              {project.isDesign ? "Figma Link" :"Live Demo"}
            </a>
          </Button>}
        </div>
        {project.note && <p className="text-sm text-gray-400 mt-5">{project.note}</p>}

      </Card>
    </div>
  );
};

// Main Projects Component
const Projects = () => {
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
};

export default Projects;